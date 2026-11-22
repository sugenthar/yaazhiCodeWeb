import {
  parseSource,
  analyze,
  Interpreter,
  RESTRICTED_CAPABILITIES,
  formatDiagnostic,
} from 'yaazhicode';

// Simple in-memory sliding window rate limiter
const rateLimits = new Map();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 30;
const MAX_CODE_LENGTH = 32 * 1024; // 32 KB
const MAX_OUTPUT_LENGTH = 64 * 1024; // 64 KB
const DEFAULT_TIMEOUT_MS = 4000;

function checkRateLimit(ip) {
  const now = Date.now();
  const record = rateLimits.get(ip);
  if (!record || now - record.startTime > RATE_LIMIT_WINDOW_MS) {
    rateLimits.set(ip, { startTime: now, count: 1 });
    return true;
  }
  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }
  record.count++;
  return true;
}

// Cleanup stale rate limit entries periodically
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now();
    for (const [ip, record] of rateLimits.entries()) {
      if (now - record.startTime > RATE_LIMIT_WINDOW_MS) {
        rateLimits.delete(ip);
      }
    }
  }, RATE_LIMIT_WINDOW_MS * 2).unref?.();
}

/**
 * Execute YaazhiCode program in a secure sandbox.
 * @param {string} code - The YaazhiCode source text
 * @param {object} options - Options including timeout and stdin
 */
export async function executeProgram(code, options = {}) {
  if (typeof code !== 'string') {
    return {
      success: false,
      output: '',
      error: 'மூலக் குறியீடு உரையாக இருக்க வேண்டும் (Code must be a string).',
      diagnostics: [],
      executionTimeMs: 0,
    };
  }

  if (code.length > MAX_CODE_LENGTH) {
    return {
      success: false,
      output: '',
      error: `குறியீட்டின் அளவு எல்லை மீறியது. அதிகபட்சம்: ${MAX_CODE_LENGTH / 1024} KB.`,
      diagnostics: [],
      executionTimeMs: 0,
    };
  }

  const startTime = Date.now();
  const timeoutMs = Math.min(Math.max(Number(options.timeout) || DEFAULT_TIMEOUT_MS, 500), 10000);

  let program;
  try {
    program = parseSource(code, { filename: 'playground.yaazhi' });
  } catch (err) {
    const diag = err.diagnostic || {
      code: err.code || 'YAAZHICODE_SYNTAX_ERROR',
      message: err.message,
      line: err.line,
      column: err.column,
    };
    return {
      success: false,
      output: '',
      error: err.message || 'தொடரியல் பிழை (Syntax error)',
      diagnostics: [diag],
      executionTimeMs: Date.now() - startTime,
    };
  }

  try {
    const semantic = analyze(program, { filename: 'playground.yaazhi', sourceText: code });
    if (semantic.diagnostics && semantic.diagnostics.length > 0) {
      return {
        success: false,
        output: '',
        error: semantic.diagnostics[0].message,
        diagnostics: semantic.diagnostics,
        executionTimeMs: Date.now() - startTime,
      };
    }
  } catch (err) {
    return {
      success: false,
      output: '',
      error: err.message,
      diagnostics: err.diagnostic ? [err.diagnostic] : [],
      executionTimeMs: Date.now() - startTime,
    };
  }

  let capturedOutput = '';
  let outputTruncated = false;

  const interpreter = new Interpreter({
    capabilities: {
      ...RESTRICTED_CAPABILITIES,
      stdio: true,
      clock: true,
      random: true,
    },
    filename: 'playground.yaazhi',
    sourceText: code,
    stdout: (text) => {
      if (capturedOutput.length < MAX_OUTPUT_LENGTH) {
        capturedOutput += text;
      } else if (!outputTruncated) {
        outputTruncated = true;
        capturedOutput += '\n... [வெளியீடு அளவு வரம்பை மீறியதால் சுருக்கப்பட்டது / Output truncated] ...';
      }
    },
    stdin: () => options.stdin || null,
  });

  try {
    // Run with timeout boundary
    const execPromise = Promise.resolve().then(() => interpreter.run(program));
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('YAAZHICODE_TIMEOUT')), timeoutMs);
    });

    await Promise.race([execPromise, timeoutPromise]);

    return {
      success: true,
      output: capturedOutput,
      error: null,
      diagnostics: [],
      executionTimeMs: Date.now() - startTime,
    };
  } catch (err) {
    const isTimeout = err.message === 'YAAZHICODE_TIMEOUT';
    const message = isTimeout
      ? `நிரல் இயக்க நேரம் அனுமதிக்கப்பட்ட வரம்பை (${timeoutMs / 1000}s) தாண்டியது (Execution timed out).`
      : err.message || 'நிரல் இயக்கத்தில் பிழை ஏற்பட்டது (Runtime error)';

    return {
      success: false,
      output: capturedOutput,
      error: message,
      diagnostics: err.diagnostic ? [err.diagnostic] : [],
      executionTimeMs: Date.now() - startTime,
    };
  }
}

/**
 * Standard Vercel Serverless Function Handler
 */
export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    return res.status(200).json({
      service: 'YaazhiCode Public Execution API',
      version: '0.1.0',
      status: 'operational',
      capabilities: 'restricted-sandbox',
      endpoints: {
        run: 'POST /api/execute',
      },
    });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  // Rate limiting
  const clientIp = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown';
  if (!checkRateLimit(clientIp)) {
    return res.status(429).json({
      success: false,
      error: 'மிகையான கோரிக்கைகள் அனுப்பப்பட்டுள்ளன. தயவுசெய்து சிறிது நேரம் காத்திருக்கவும் (Too many requests. Please wait).',
    });
  }

  try {
    let body = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch {
        return res.status(400).json({ success: false, error: 'Invalid JSON payload' });
      }
    }

    const { code, stdin, timeout } = body || {};
    const result = await executeProgram(code, { stdin, timeout });
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: `சேவையகப் பிழை: ${err.message}`,
      output: '',
    });
  }
}
