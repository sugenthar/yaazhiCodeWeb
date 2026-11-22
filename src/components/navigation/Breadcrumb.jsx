import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export function Breadcrumb({ items = [], onNavigate }) {
  const { t } = useLanguage();
  if (!items || items.length === 0) return null;

  return (
    <nav className="scrollbar-none mb-6 flex items-center gap-2 overflow-x-auto py-1 font-mono text-xs text-faint" aria-label="Breadcrumb">
      <button
        type="button"
        onClick={() => onNavigate?.('home')}
        className="flex-shrink-0 rounded p-1 hover:text-accent"
        title={t('nav_home', 'Home')}
        aria-label={t('nav_home', 'Home')}
      >
        <Home className="h-3.5 w-3.5" />
      </button>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight className="h-3.5 w-3.5 flex-shrink-0 select-none" aria-hidden="true" />
            {isLast ? (
              <span className="whitespace-nowrap font-medium text-ink" aria-current="page">{item.label}</span>
            ) : (
              <button
                type="button"
                onClick={() => (item.action ? item.action() : onNavigate?.(item.page, item.id))}
                className="whitespace-nowrap font-medium hover:text-accent"
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
