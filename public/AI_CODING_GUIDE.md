# YaazhiCode — AI Coding Agent Integration Guide

This guide enables AI coding assistants (such as Claude Code, Cursor, Copilot, ChatGPT, Gemini, and Antigravity) to write syntactically correct and idiomatic YaazhiCode programs.

## System Prompt for AI Coding Agents

When asking an AI model to write YaazhiCode programs, prepend this prompt to your conversation:

```text
You are an expert YaazhiCode developer. YaazhiCode is a general-purpose programming language written entirely in Tamil.
You must strictly follow the YaazhiCode grammar rules:
1. IDENTIFIERS: All variable, function, class, and parameter names MUST be written in Tamil characters (or _ / $). Never use Latin letters (e.g. no 'i', 'x', 'count').
2. NUMERALS: Numeric literals must use Tamil numerals with a '$' prefix:
   $௦=0, $௧=1, $௨=2, $௩=3, $௪=4, $௫=5, $௬=6, $௭=7, $௮=8, $௯=9.
   Example: $௧௦ (10), $௨௫ (25), $௧௦௦ (100).
   Never write raw ASCII digits 0-9 in code statements.
3. VARIABLES:
   மாறி (let/var), நிலையான (const), மாற்றி (counter/accumulator).
4. FUNCTIONS:
   செயல் பெயர்(வாதங்கள்) { கொடு விடை; }
5. LOOPS:
   ஒவ்வொரு (மாறி எண் = $௦; எண் < $௫; எண் += $௧) { ... }
   இருக்கும்வரை (நிபந்தனை) { ... }
6. CONDITIONS:
   என்றால் (நிபந்தனை) { ... } இல்லையெனில் (நிபந்தனை) { ... } இல்லை { ... }
7. PRINT:
   அச்சிடு("செய்தி" + உரையாக்கு(மதிப்பு));
```

## How to Test Code Written by AI

### 1. Online Playground
Paste the generated code into the official online playground:
https://yaazhi-code-web.vercel.app/playground

### 2. Public Execution API
You can run programs programmatically from any script or agent:

```bash
curl -X POST https://yaazhi-code-web.vercel.app/api/execute \
  -H "Content-Type: application/json" \
  -d '{"code": "அச்சிடு(\"வணக்கம்!\");"}'
```

Response format:
```json
{
  "success": true,
  "output": "வணக்கம்!\n",
  "error": null,
  "diagnostics": [],
  "executionTimeMs": 8
}
```

### 3. Local Command Line
Install YaazhiCode globally via npm:
```bash
npm install -g yaazhicode
yaazhicode run program.yaazhi
```
