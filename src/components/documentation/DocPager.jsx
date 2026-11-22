import React from 'react';
import { useLanguage, pick } from '../../context/LanguageContext';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export function DocPager({ prevDoc, nextDoc, onSelectDoc }) {
  const { language, t } = useLanguage();

  return (
    <div className="mt-12 flex items-center justify-between gap-4 border-t border-line pt-6 font-sans text-xs">
      {prevDoc ? (
        <button
          type="button"
          onClick={() => onSelectDoc(prevDoc.id)}
          className="flex max-w-[48%] flex-col items-start gap-1 rounded-lg border border-line bg-panel p-3 text-left transition-colors hover:border-accent/50"
        >
          <span className="flex items-center gap-1 font-mono text-[11px] uppercase text-faint">
            <ArrowLeft className="h-3.5 w-3.5" /> {t('prev', 'Previous')}
          </span>
          <span className="w-full truncate font-medium text-ink">{pick(prevDoc.title, language)}</span>
        </button>
      ) : <div />}
      {nextDoc ? (
        <button
          type="button"
          onClick={() => onSelectDoc(nextDoc.id)}
          className="ml-auto flex max-w-[48%] flex-col items-end gap-1 rounded-lg border border-line bg-panel p-3 text-right transition-colors hover:border-accent/50"
        >
          <span className="flex items-center gap-1 font-mono text-[11px] uppercase text-faint">
            {t('next', 'Next')} <ArrowRight className="h-3.5 w-3.5" />
          </span>
          <span className="w-full truncate font-medium text-ink">{pick(nextDoc.title, language)}</span>
        </button>
      ) : <div />}
    </div>
  );
}
