import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

export function Breadcrumb({ items = [], onNavigate }) {
  if (!items || items.length === 0) return null;

  return (
    <nav className="flex items-center gap-1.5 text-xs text-silver-400 mb-6 font-mono overflow-x-auto py-1">
      <button
        onClick={() => onNavigate?.('home')}
        className="flex items-center gap-1 hover:text-white transition-colors"
      >
        <Home className="w-3.5 h-3.5 text-silver-500" />
      </button>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight className="w-3.5 h-3.5 text-silver-600 flex-shrink-0" />
            {isLast ? (
              <span className="text-silver-200 font-medium truncate max-w-[200px] sm:max-w-none">
                {item.label}
              </span>
            ) : (
              <button
                onClick={() => item.action ? item.action() : onNavigate?.(item.page, item.id)}
                className="hover:text-white transition-colors truncate max-w-[150px] sm:max-w-none"
              >
                {item.label}
              </button>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
