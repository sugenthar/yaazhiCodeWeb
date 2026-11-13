import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext({
  language: 'ta',
  setLanguage: () => {},
  t: (key, fallback) => fallback || key,
});

export const translations = {
  ta: {
    nav_home: 'முகப்பு',
    nav_learn: 'கற்க',
    nav_docs: 'ஆவணங்கள்',
    nav_packages: 'தொகுப்புகள்',
    nav_tamilscript: 'தமிழ்ஸ்கிரிப்ட்',
    nav_examples: 'எடுத்துக்காட்டுகள்',
    nav_roadmap: 'செயல்திட்டம்',
    nav_get_started: 'தொடங்குக',
    nav_search: 'ஆவணங்களைத் தேடு...',
    search_shortcut: 'Ctrl K',
    search_placeholder: 'ஆவணங்கள், தொடரியல், தொகுப்புகள் தேடுக...',
    search_no_results: 'பொருத்தமான முடிவுகள் எதுவும் கிடைக்கவில்லை',
    footer_tagline: 'உங்கள் தாய்மொழியில் சக்திவாய்ந்த வலைச்சேவையகங்களை உருவாக்குங்கள்.',
    footer_built_with: 'தமிழ் ஆர்வலர்களுக்காகவும் எதிர்கால பொறியாளர்களுக்காகவும் உருவாக்கப்பட்டது.',
    copy_code: 'நகலெடு',
    copied: 'நகலெடுக்கப்பட்டது!',
    prev: 'முந்தையது',
    next: 'அடுத்தது',
    on_this_page: 'இப்பக்கத்தில் உள்ளவை',
    verified_package: 'சரிபார்க்கப்பட்ட தொகுப்பு',
    supporting_package: 'துணைத் தொகுப்பு',
    experimental_umbrella: 'குடைத் தொகுப்பு (உள் கட்டமைப்பு)',
    status_published: 'வெளியிடப்பட்டது (v0.1.0)',
    status_repo_active: 'கட்டமைப்பு களஞ்சியத்தில் உள்ளது',
    future_vision: 'எதிர்கால நோக்கு',
    implemented: 'செயல்படுத்தப்பட்டது',
    in_progress: 'வளர்ச்சியில் உள்ளது',
    planned: 'திட்டமிடப்பட்டுள்ளது',
  },
  en: {
    nav_home: 'Home',
    nav_learn: 'Learn',
    nav_docs: 'Docs',
    nav_packages: 'Packages',
    nav_tamilscript: 'TamilScript',
    nav_examples: 'Examples',
    nav_roadmap: 'Roadmap',
    nav_get_started: 'Get Started',
    nav_search: 'Search documentation...',
    search_shortcut: 'Ctrl K',
    search_placeholder: 'Search documentation, syntax, packages...',
    search_no_results: 'No matching results found',
    footer_tagline: 'Build high-performance backend systems in your own native language.',
    footer_built_with: 'Engineered for Tamil speakers, developers, and future software architects.',
    copy_code: 'Copy',
    copied: 'Copied!',
    prev: 'Previous',
    next: 'Next',
    on_this_page: 'On this page',
    verified_package: 'Verified Package',
    supporting_package: 'Supporting Package',
    experimental_umbrella: 'Umbrella Package (Workspace)',
    status_published: 'Published (v0.1.0)',
    status_repo_active: 'Active in Repository',
    future_vision: 'Future Vision',
    implemented: 'Implemented',
    in_progress: 'In Progress',
    planned: 'Planned',
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('akazhi_lang');
    return saved === 'en' ? 'en' : 'ta';
  });

  useEffect(() => {
    localStorage.setItem('akazhi_lang', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key, fallback = '') => {
    return translations[language]?.[key] || fallback || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
