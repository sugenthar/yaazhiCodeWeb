import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export function DocPager({ prevDoc, nextDoc, onSelectDoc }) {
  const { language, t } = useLanguage();

  return (
    <div className="mt-12 pt-6 border-t border-border/80 flex items-center justify-between gap-4 font-sans text-xs">
      {prevDoc ? (
        <button
          onClick={() => onSelectDoc(prevDoc.id)}
          className="flex flex-col items-start gap-1 p-3 rounded-lg border border-border/60 hover:border-border-hover bg-surface-200/40 hover:bg-surface-100 transition-colors text-left max-w-[48%]"
        >
          <div className="flex items-center gap-1 text-[11px] font-mono text-silver-500 uppercase">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{t('prev', 'Previous')}</span>
          </div>
          <span className="font-medium text-silver-200 truncate w-full">
            {prevDoc.title[language] || prevDoc.title.ta}
          </span>
        </button>
      ) : <div />}

      {nextDoc ? (
        <button
          onClick={() => onSelectDoc(nextDoc.id)}
          className="flex flex-col items-end gap-1 p-3 rounded-lg border border-border/60 hover:border-border-hover bg-surface-200/40 hover:bg-surface-100 transition-colors text-right max-w-[48%] ml-auto"
        >
          <div className="flex items-center gap-1 text-[11px] font-mono text-silver-500 uppercase">
            <span>{t('next', 'Next')}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
          <span className="font-medium text-silver-200 truncate w-full">
            {nextDoc.title[language] || nextDoc.title.ta}
          </span>
        </button>
      ) : <div />}
    </div>
  );
}
