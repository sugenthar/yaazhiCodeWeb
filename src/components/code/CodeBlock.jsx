import React from 'react';
import { CopyButton } from '../common/CopyButton';
import { highlightTamilCode } from './TamilCodeHighlighter';
import { Terminal, FileCode2 } from 'lucide-react';

const TOKEN_CLASS = {
  keyword: 'code-keyword',
  builtin: 'code-builtin',
  method: 'code-method',
  string: 'code-string',
  number: 'code-number',
  comment: 'code-comment',
  punctuation: 'code-punct',
  identifier: 'code-text',
};

export function CodeBlock({
  code = '',
  language = 'tamil',
  filename,
  showLineNumbers = true,
  showCopy = true,
  className = '',
}) {
  const isTamil = ['tamil', 'yaazhi'].includes(language);
  const isTerminal = ['bash', 'sh', 'shell', 'powershell', 'text'].includes(language);
  const highlighted = isTamil ? highlightTamilCode(code) : null;
  const rawLines = code.replace(/\n$/, '').split('\n');
  const displayName = filename || (isTamil ? 'main.yaazhi' : 'output');

  return (
    <div className={`my-3 sm:my-4 min-w-0 overflow-hidden rounded-xl border border-line bg-app/70 ${className}`}>
      {/* Header bar */}
      <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between gap-2 border-b border-line bg-panel px-3 sm:px-4 py-2 sm:py-2.5">
        <div className="flex min-w-0 max-w-full items-center gap-2 text-xs sm:text-sm">
          {isTerminal ? (
            <Terminal className="h-3.5 w-3.5 shrink-0 text-faint" aria-hidden="true" />
          ) : (
            <FileCode2 className="h-3.5 w-3.5 shrink-0 text-faint" aria-hidden="true" />
          )}
          <span className="truncate font-mono font-medium text-ink">{displayName}</span>
        </div>
        <div className="flex shrink-0 items-center gap-2 self-end xs:self-auto">
          <span className="rounded border border-line bg-raised px-1.5 py-0.5 font-mono text-xs uppercase tracking-wide text-faint">
            {isTamil ? '.yaazhi' : language}
          </span>
          {showCopy && <CopyButton text={code} className="text-xs" />}
        </div>
      </div>

      {/* Code body with horizontal scroll inside */}
      <div className="overflow-x-auto p-3 sm:p-4 font-mono text-xs sm:text-sm leading-5 sm:leading-6">
        <pre className="m-0 min-w-full bg-transparent p-0">
          {highlighted ? (
            highlighted.map((lineTokens, lineIdx) => (
              <div key={lineIdx} className="table-row hover:bg-ink/[0.025]">
                {showLineNumbers && (
                  <span className="table-cell w-7 sm:w-8 select-none pr-2.5 sm:pr-4 text-right text-xs text-faint">
                    {lineIdx + 1}
                  </span>
                )}
                <span className="table-cell whitespace-pre">
                  {lineTokens.length === 0
                    ? '\n'
                    : lineTokens.map((token, idx) => (
                        <span key={idx} className={TOKEN_CLASS[token.type] || 'code-text'}>
                          {token.value}
                        </span>
                      ))}
                </span>
              </div>
            ))
          ) : (
            rawLines.map((line, lineIdx) => (
              <div key={lineIdx} className="table-row hover:bg-ink/[0.025]">
                {showLineNumbers && (
                  <span className="table-cell w-7 sm:w-8 select-none pr-2.5 sm:pr-4 text-right text-xs text-faint">
                    {lineIdx + 1}
                  </span>
                )}
                <span className="table-cell whitespace-pre code-text">
                  {isTerminal && line.startsWith('$') ? (
                    <>
                      <span className="select-none text-faint">$ </span>
                      <span>{line.slice(1).trimStart()}</span>
                    </>
                  ) : line}
                </span>
              </div>
            ))
          )}
        </pre>
      </div>
    </div>
  );
}
