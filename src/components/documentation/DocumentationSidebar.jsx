import React from 'react';
import { useLanguage, pick } from '../../context/LanguageContext';
import { ChevronRight } from 'lucide-react';
import { BrandLogo } from '../common/BrandLogo';

export function DocumentationSidebar({ categories = [], activeDocId, onSelectDoc, className = '' }) {
  const { language } = useLanguage();

  return (
    <aside className={`flex-shrink-0 pb-10 text-sm font-sans lg:sticky lg:top-20 lg:h-[calc(100vh-5rem)] lg:w-72 lg:overflow-y-auto xl:w-80 ${className}`}>
      <div className="mb-6 flex items-center gap-2.5 px-3">
        <BrandLogo className="h-8 w-8" decorative />
        <span className="font-mono text-sm font-bold text-ink">YaazhiCode</span>
      </div>
      <div className="space-y-6">
        {categories.map((category) => (
          <div key={category.id} className="space-y-1.5">
            <h3 className="px-3 font-mono text-xs font-semibold uppercase tracking-wider text-faint">
              {pick(category.title, language)}
            </h3>
            <ul className="space-y-0.5" role="list">
              {category.items.map((item) => {
                const isActive = activeDocId === item.id;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => onSelectDoc(item.id)}
                      className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-xs font-medium transition-colors ${
                        isActive
                          ? 'border-l-2 border-accent bg-accent-soft pl-2.5 font-semibold text-accent'
                          : 'text-muted hover:bg-panel hover:text-ink'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      <span className="flex-1 break-words pr-2 leading-snug">{pick(item.title, language)}</span>
                      {isActive && <ChevronRight className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}
