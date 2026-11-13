import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ChevronRight, BookOpen, Layers } from 'lucide-react';

export function DocumentationSidebar({
  categories = [],
  activeDocId,
  onSelectDoc,
  className = '',
}) {
  const { language } = useLanguage();

  return (
    <aside className={`w-full lg:w-64 flex-shrink-0 lg:sticky lg:top-20 lg:h-[calc(100vh-5rem)] lg:overflow-y-auto pb-10 text-sm font-sans ${className}`}>
      <div className="space-y-6">
        {categories.map((category) => (
          <div key={category.id} className="space-y-1.5">
            <h3 className="px-3 text-xs font-mono font-semibold uppercase tracking-wider text-silver-400">
              {category.title[language] || category.title.ta}
            </h3>
            <ul className="space-y-0.5">
              {category.items.map((item) => {
                const isActive = activeDocId === item.id;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => onSelectDoc(item.id)}
                      className={`w-full flex items-center justify-between px-3 py-1.5 rounded-md text-xs font-medium text-left transition-colors ${
                        isActive
                          ? 'bg-surface-100 text-white border-l-2 border-white pl-2.5 font-semibold'
                          : 'text-silver-400 hover:text-silver-200 hover:bg-surface-200/50'
                      }`}
                    >
                      <span className="truncate">
                        {item.title[language] || item.title.ta}
                      </span>
                      {isActive && (
                        <ChevronRight className="w-3.5 h-3.5 text-silver-400 flex-shrink-0" />
                      )}
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
