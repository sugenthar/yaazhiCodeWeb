import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export function CopyButton({ text, className = '' }) {
  const [copied, setCopied] = useState(false);
  const { t } = useLanguage();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code: ', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      type="button"
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded border border-border/80 bg-surface-100 hover:bg-surface-50 text-silver-300 hover:text-white transition-all duration-150 ${className}`}
      title={t('copy_code', 'Copy')}
      aria-label="Copy code to clipboard"
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-emerald-400 font-mono text-[11px]">{t('copied', 'Copied!')}</span>
        </>
      ) : (
        <>
          <Copy className="w-3.5 h-3.5" />
          <span className="font-mono text-[11px]">{t('copy_code', 'Copy')}</span>
        </>
      )}
    </button>
  );
}
