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
    } catch {
      const area = document.createElement('textarea');
      area.value = text;
      area.style.position = 'fixed';
      area.style.opacity = '0';
      document.body.appendChild(area);
      area.select();
      try {
        document.execCommand('copy');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {
        // Clipboard unavailable in this context.
      }
      document.body.removeChild(area);
    }
  };

  return (
    <button
      onClick={handleCopy}
      type="button"
      className={`inline-flex items-center gap-1.5 rounded-md border border-line bg-raised px-2.5 py-1 text-xs font-mono text-muted transition-colors hover:border-accent/60 hover:text-accent focus-visible:outline-accent ${className}`}
      aria-label={t('copy_code', 'Copy code to clipboard')}
    >
      {copied ? (
        <>
          <Check className="h-3.5 w-3.5 text-positive" aria-hidden="true" />
          <span className="text-positive">{t('copied', 'Copied!')}</span>
        </>
      ) : (
        <>
          <Copy className="h-3.5 w-3.5" aria-hidden="true" />
          <span>{t('copy_code', 'Copy')}</span>
        </>
      )}
    </button>
  );
}
