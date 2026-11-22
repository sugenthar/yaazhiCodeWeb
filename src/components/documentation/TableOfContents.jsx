import React from 'react';
import { useLanguage, pick } from '../../context/LanguageContext';
import { AlignLeft } from 'lucide-react';

export function TableOfContents({ sections = [], className = '' }) {
  const { language, t } = useLanguage();
  if (!sections || sections.length === 0) return null;

  return (
    <div className={`sticky top-20 hidden h-[calc(100vh-5rem)] w-56 flex-shrink-0 overflow-y-auto pb-10 text-xs text-muted xl:block ${className}`}>
      <div className="space-y-3 border-l border-line pl-4">
        <div className="flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-ink">
          <AlignLeft className="h-3.5 w-3.5" /> {t('on_this_page', 'On this page')}
        </div>
        <ul className="space-y-2">
          {sections.map((sec, idx) => (
            <li key={idx}>
              <a href={`#sec-${idx}`} className="block truncate leading-relaxed hover:text-accent">
                {pick(sec.heading, language)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
