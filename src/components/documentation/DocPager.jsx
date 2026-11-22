import React from 'react';
import { useLanguage, pick } from '../../context/LanguageContext';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export function DocPager({ prevDoc, nextDoc, onSelectDoc }) {
  const { language, t } = useLanguage();

  return (
    <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 border-t border-line pt-6 font-sans text-xs">
      {prevDoc ? (
        <button
          type="button"
          onClick={() => onSelectDoc(prevDoc.id)}
          className="flex flex-1 sm:max-w-[48%] flex-col items-start gap-1 rounded-lg border border-line bg-panel p-3 text-left transition-colors hover:border-accent/50 min-h-[44px]"
        >
          <span className="flex items-center gap-1 font-mono text-xs uppercase text-faint">
            <ArrowLeft className="h-3.5 w-3.5" /> {t('prev', 'Previous')}
          </span>
          <span className="w-full truncate text-sm font-medium text-ink">{pick(prevDoc.title, language)}</span>
        </button>
      ) : <div className="hidden sm:block flex-1 sm:max-w-[48%]" />}

      {nextDoc ? (
        <button
          type="button"
          onClick={() => onSelectDoc(nextDoc.id)}
          className="flex flex-1 sm:max-w-[48%] sm:ml-auto flex-col items-start sm:items-end gap-1 rounded-lg border border-line bg-panel p-3 text-left sm:text-right transition-colors hover:border-accent/50 min-h-[44px]"
        >
          <span className="flex items-center gap-1 font-mono text-xs uppercase text-faint">
            {t('next', 'Next')} <ArrowRight className="h-3.5 w-3.5" />
          </span>
          <span className="w-full truncate text-sm font-medium text-ink">{pick(nextDoc.title, language)}</span>
        </button>
      ) : <div className="hidden sm:block flex-1 sm:max-w-[48%]" />}
    </div>
  );
}
