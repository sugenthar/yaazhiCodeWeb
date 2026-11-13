import React from 'react';
import { CopyButton } from '../common/CopyButton';
import { highlightTamilCode } from './TamilCodeHighlighter';
import { Terminal, FileCode } from 'lucide-react';

export function CodeBlock({
  code,
  language = 'tamil',
  filename = '',
  showLineNumbers = true,
  className = '',
}) {
  const isTamil = language === 'tamil' || language === 'ts' || language === 'js';
  const isTerminal = language === 'bash' || language === 'sh' || language === 'shell';
  const highlightedLines = isTamil ? highlightTamilCode(code) : null;
  const rawLines = code.trim().split('\n');

  return (
    <div className={`my-4 rounded-lg border border-border bg-[#0a0b0e] overflow-hidden shadow-sm group ${className}`}>
      {/* Code Header Bar */}
      {(filename || language) && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-border/60 bg-[#0f1015] text-xs text-silver-400 font-mono">
          <div className="flex items-center gap-2">
            {isTerminal ? (
              <Terminal className="w-3.5 h-3.5 text-silver-500" />
            ) : (
              <FileCode className="w-3.5 h-3.5 text-silver-500" />
            )}
            <span className="text-silver-200 font-medium">
              {filename || (isTamil ? 'main.tamil' : language)}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-wider text-silver-500 px-1.5 py-0.5 rounded bg-surface-200 border border-border/40">
              {language}
            </span>
            <CopyButton text={code} />
          </div>
        </div>
      )}

      {/* Code Area */}
      <div className="relative p-4 overflow-x-auto text-[13px] leading-relaxed font-mono">
        {!filename && !language && (
          <div className="absolute top-3 right-3 z-10 opacity-70 group-hover:opacity-100 transition-opacity">
            <CopyButton text={code} />
          </div>
        )}

        <pre className="m-0 p-0 font-mono bg-transparent">
          {highlightedLines ? (
            highlightedLines.map((lineTokens, lineIdx) => (
              <div key={lineIdx} className="table-row hover:bg-white/[0.02]">
                {showLineNumbers && (
                  <span className="table-cell pr-4 text-right select-none text-silver-600 font-mono text-[11px] w-8">
                    {lineIdx + 1}
                  </span>
                )}
                <span className="table-cell whitespace-pre">
                  {lineTokens.length === 0 ? (
                    '\n'
                  ) : (
                    lineTokens.map((token, tokIdx) => {
                      let colorClass = 'text-silver-200';
                      if (token.type === 'keyword') colorClass = 'text-pink-400 font-medium';
                      else if (token.type === 'builtin') colorClass = 'text-sky-300 font-medium';
                      else if (token.type === 'method') colorClass = 'text-blue-300';
                      else if (token.type === 'string') colorClass = 'text-emerald-300';
                      else if (token.type === 'number') colorClass = 'text-amber-300 font-medium';
                      else if (token.type === 'comment') colorClass = 'text-silver-500 italic';
                      else if (token.type === 'punctuation') colorClass = 'text-silver-400';

                      return (
                        <span key={tokIdx} className={colorClass}>
                          {token.value}
                        </span>
                      );
                    })
                  )}
                </span>
              </div>
            ))
          ) : (
            rawLines.map((line, lineIdx) => (
              <div key={lineIdx} className="table-row hover:bg-white/[0.02]">
                {showLineNumbers && (
                  <span className="table-cell pr-4 text-right select-none text-silver-600 font-mono text-[11px] w-8">
                    {lineIdx + 1}
                  </span>
                )}
                <span className="table-cell whitespace-pre text-silver-200">
                  {isTerminal && line.startsWith('$') ? (
                    <>
                      <span className="text-silver-500 select-none">$ </span>
                      <span>{line.substring(1).trim()}</span>
                    </>
                  ) : (
                    line
                  )}
                </span>
              </div>
            ))
          )}
        </pre>
      </div>
    </div>
  );
}
