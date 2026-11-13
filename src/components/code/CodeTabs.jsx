import React, { useState } from 'react';
import { CodeBlock } from './CodeBlock';

export function CodeTabs({ tabs = [], className = '' }) {
  const [activeTab, setActiveTab] = useState(0);

  if (!tabs || tabs.length === 0) return null;

  return (
    <div className={`my-4 rounded-lg border border-border bg-[#0a0b0e] overflow-hidden ${className}`}>
      {/* Tab headers */}
      <div className="flex items-center justify-between px-3 pt-2 border-b border-border/60 bg-[#0f1015]">
        <div className="flex gap-1 overflow-x-auto pb-2 scrollbar-none">
          {tabs.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-3 py-1.5 text-xs font-mono rounded transition-colors whitespace-nowrap ${
                activeTab === idx
                  ? 'bg-surface-50 text-white border border-border/80 font-medium'
                  : 'text-silver-400 hover:text-silver-200 hover:bg-surface-200/50'
              }`}
            >
              {tab.label || tab.filename}
            </button>
          ))}
        </div>
      </div>

      {/* Active Tab Content */}
      <div className="[&>div]:my-0 [&>div]:border-0 [&>div]:rounded-none">
        <CodeBlock
          code={tabs[activeTab].code}
          language={tabs[activeTab].language || 'tamil'}
          filename=""
          showLineNumbers={tabs[activeTab].showLineNumbers ?? true}
        />
      </div>
    </div>
  );
}
