import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Languages } from 'lucide-react';

export function LanguageSwitcher({ className = '' }) {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'ta' ? 'en' : 'ta');
  };

  return (
    <button
      onClick={toggleLanguage}
      type="button"
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md border border-border bg-surface-200/80 hover:bg-surface-100 hover:border-silver-500/40 text-silver-300 hover:text-white transition-all duration-150 ${className}`}
      title={language === 'ta' ? 'Switch to English' : 'தமிழுக்கு மாறவும்'}
      aria-label="Language Switcher"
    >
      <Languages className="w-3.5 h-3.5 text-silver-400" />
      <span className="font-mono uppercase text-[11px] font-semibold text-silver-200">
        {language === 'ta' ? 'தமிழ்' : 'EN'}
      </span>
    </button>
  );
}
