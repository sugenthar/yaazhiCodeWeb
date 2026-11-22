import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export function LanguageSwitcher({ className = '' }) {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div
      className={`inline-flex items-center rounded-lg border border-line bg-panel p-0.5 text-xs ${className}`}
      role="group"
      aria-label={t('language_label', 'Language')}
    >
      <button
        type="button"
        onClick={() => setLanguage('ta')}
        className={`rounded-md px-2 sm:px-2.5 py-1 font-tamil text-xs transition-colors ${
          language === 'ta'
            ? 'bg-accent font-semibold text-accent-ink shadow-sm'
            : 'text-muted hover:text-ink'
        }`}
        title="தமிழுக்கு மாற்றவும் (Tamil)"
        aria-pressed={language === 'ta'}
      >
        தமிழ்
      </button>
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`rounded-md px-2 sm:px-2.5 py-1 font-mono text-xs transition-colors ${
          language === 'en'
            ? 'bg-accent font-semibold text-accent-ink shadow-sm'
            : 'text-muted hover:text-ink'
        }`}
        title="Switch to English"
        aria-pressed={language === 'en'}
      >
        EN
      </button>
    </div>
  );
}
