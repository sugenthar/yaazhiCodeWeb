import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const LanguageContext = createContext({
  language: 'en',
  setLanguage: () => {},
  t: (key, fallback) => fallback || key,
});

const translations = {
  en: {
    nav_home: 'Home',
    nav_about: 'About',
    nav_features: 'Features',
    nav_install: 'Install',
    nav_learn: 'Learn',
    nav_language: 'Language',
    nav_examples: 'Examples',
    nav_ide: 'IDE',
    nav_future: 'Future',
    nav_get_started: 'Get Started',
    cta_install: 'Install YaazhiCode',
    cta_explore_language: 'Explore Language',
    nav_search: 'Search',
    nav_menu: 'Toggle navigation menu',
    search_placeholder: 'Search lessons, examples, commands...',
    search_no_results: 'No matching results found',
    search_navigate: 'Navigate',
    search_open: 'Open',
    search_esc: 'Exit',
    theme_toggle: 'Toggle colour theme',
    language_label: 'Language',
    copy_code: 'Copy',
    copied: 'Copied',
    prev: 'Previous',
    next: 'Next',
    on_this_page: 'On this page',
    doc_menu: 'Lesson menu',
    available: 'Available now',
    in_development: 'In development',
    planned: 'Planned — not available',
    concept: 'Future concept',
    explore_docs: 'Explore documentation',
    view_install: 'View install guide',
    github: 'GitHub',
    npm: 'npm',
    footer_tagline: 'Programming in Tamil. Learn, write, and run programs with Tamil words.',
    footer_built: 'Made for Tamil speakers, learners, and creators.',
    open_in_new: 'Opens in a new tab',
    back_home: 'Back to home',
  },
  ta: {
    nav_home: 'முகப்பு',
    nav_about: 'பற்றி',
    nav_features: 'அம்சங்கள்',
    nav_install: 'நிறுவுதல்',
    nav_learn: 'கற்க',
    nav_language: 'மொழி',
    nav_examples: 'எடுத்துக்காட்டுகள்',
    nav_ide: 'IDE',
    nav_future: 'எதிர்காலம்',
    nav_get_started: 'தொடங்குக',
    cta_install: 'YaazhiCode-ஐ நிறுவு',
    cta_explore_language: 'மொழியை ஆராய்',
    nav_search: 'தேடு',
    nav_menu: 'வழிசெலுத்தல் மெனுவை மாற்று',
    search_placeholder: 'பாடங்கள், எடுத்துக்காட்டுகள், கட்டளைகள் தேடுக...',
    search_no_results: 'பொருத்தமான முடிவுகள் எதுவும் இல்லை',
    search_navigate: 'நகர்த்து',
    search_open: 'திற',
    search_esc: 'வெளியேறு',
    theme_toggle: 'நிறத் தோற்றத்தை மாற்று',
    language_label: 'மொழி',
    copy_code: 'நகலெடு',
    copied: 'நகலெடுக்கப்பட்டது',
    prev: 'முந்தையது',
    next: 'அடுத்தது',
    on_this_page: 'இப்பக்கத்தில்',
    doc_menu: 'பாடப் பட்டியல்',
    available: 'இப்போது கிடைக்கிறது',
    in_development: 'வளர்ச்சியில் உள்ளது',
    planned: 'திட்டமிடப்பட்டது — இல்லை',
    concept: 'எதிர்காலக் கருத்து',
    explore_docs: 'ஆவணங்களைப் பார்க்க',
    view_install: 'நிறுவல் வழிகாட்டி',
    github: 'கிட்ஹப்',
    npm: 'npm',
    footer_tagline: 'தமிழில் நிரலாக்கம். தமிழ்ச் சொற்களால் கற்று, எழுதி, இயக்கவும்.',
    footer_built: 'தமிழ் பேசும் மக்களுக்கும் கற்போருக்கும் படைப்பாளர்களுக்கும்.',
    open_in_new: 'புதிய தாவலில் திறக்கும்',
    back_home: 'முகப்புக்குத் திரும்பு',
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    try {
      return localStorage.getItem('yaazhicode_lang') === 'ta' ? 'ta' : 'en';
    } catch {
      return 'en';
    }
  });

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.classList.remove('lang-en', 'lang-ta');
    document.documentElement.classList.add(`lang-${language}`);
    try {
      localStorage.setItem('yaazhicode_lang', language);
    } catch {
      // Ignore write failures.
    }
  }, [language]);

  const t = (key, fallback = '') => translations[language]?.[key] || fallback || key;

  const value = useMemo(() => ({ language, setLanguage, t }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}

/** Pick a bilingual value from content objects shaped as { en, ta }. */
export function pick(value, language) {
  if (value == null) return '';
  if (typeof value === 'string') return value;
  return value[language] || value.en || value.ta || '';
}
