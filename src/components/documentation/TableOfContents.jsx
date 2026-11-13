import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { AlignLeft } from 'lucide-react';

export function TableOfContents({ sections = [], className = '' }) {
  const { language, t } = useLanguage();

  if (!sections || sections.length === 0) return null;

  return (
    <div className={`hidden xl:block w-56 flex-shrink-0 sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto pb-10 text-xs text-silver-400 font-sans ${className}`}>
      <div className="space-y-3 pl-4 border-l border-border/60">
        <div className="flex items-center gap-1.5 font-mono uppercase tracking-wider text-silver-300 font-semibold text-[11px]">
          <AlignLeft className="w-3.5 h-3.5" />
          <span>{t('on_this_page', 'On this page')}</span>
        </div>
        <ul className="space-y-2">
          {sections.map((sec, idx) => {
            const heading = sec.heading?.[language] || sec.heading?.ta || sec.heading;
            return (
              <li key={idx}>
                <a
                  href={`#sec-${idx}`}
                  className="block hover:text-white transition-colors leading-relaxed truncate"
                >
                  {heading}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
