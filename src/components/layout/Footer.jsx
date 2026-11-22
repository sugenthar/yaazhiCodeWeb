import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { GithubIcon } from '../common/Icons';
import { BrandLogo } from '../common/BrandLogo';
import { BRAND, LINKS, PROJECT_FACTS } from '../../content/siteData';

export function Footer({ onNavigate }) {
  const { language, t } = useLanguage();
  const translate = (key, fallback) => t(key, fallback);
  const label = (value) => (typeof value === 'string' ? value : value?.[language] || value?.en || '');

  const columns = [
    {
      title: language === 'ta' ? 'தளம்' : 'Site',
      links: [
        { label: translate('nav_home', 'Home'), page: 'home' },
        { label: translate('nav_about', 'About'), page: 'about' },
        { label: translate('nav_features', 'Features'), page: 'features' },
        { label: translate('nav_install', 'Install'), page: 'install' },
      ],
    },
    {
      title: language === 'ta' ? 'கற்க' : 'Learn',
      links: [
        { label: translate('nav_learn', 'Learn'), page: 'learn', id: 'introduction' },
        { label: translate('nav_language', 'Language'), page: 'language' },
        { label: translate('nav_examples', 'Examples'), page: 'examples' },
        { label: translate('nav_ide', 'IDE'), page: 'ide' },
        { label: translate('nav_future', 'Future'), page: 'future' },
      ],
    },
    {
      title: language === 'ta' ? 'தொகுப்புகள்' : 'Packages',
      links: [
        { label: 'yaazhicode', href: LINKS.npmLanguage, mono: true },
        { label: 'yaazhicode-ide', href: LINKS.npmIde, mono: true },
        { label: translate('github', 'GitHub'), href: LINKS.repository },
        { label: language === 'ta' ? 'பிழை புகார்' : 'Report an issue', href: LINKS.issues },
      ],
    },
  ];

  return (
    <footer className="w-full border-t border-line bg-panel py-12 text-sm text-muted">
      <div className="shell">
        <div className="grid grid-cols-1 gap-8 pb-10 sm:grid-cols-2 md:grid-cols-4 md:gap-10">
          <div className="space-y-4 sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <BrandLogo className="h-7 w-7" decorative />
              <span className="font-mono text-base font-bold tracking-tight text-ink">YaazhiCode</span>
            </div>
            <p className="max-w-sm text-xs leading-relaxed text-muted">{label(BRAND.tagline)}</p>
            <p className="max-w-sm text-xs leading-relaxed text-faint">{label(BRAND.message)}</p>
            <div className="font-mono text-[11px] text-faint">
              {PROJECT_FACTS.languageLicense} {language === 'ta' ? 'மொழி' : 'language'} · {PROJECT_FACTS.ideLicense} IDE · v{PROJECT_FACTS.version}
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title} className="space-y-3">
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-ink">{column.title}</h3>
              <ul className="space-y-2 text-xs" role="list">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.href ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`transition-colors hover:text-accent ${link.mono ? 'font-mono' : ''}`}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <button
                        type="button"
                        onClick={() => onNavigate?.(link.page, link.id || null)}
                        className="text-left transition-colors hover:text-accent"
                      >
                        {link.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-line pt-6 text-xs text-faint sm:flex-row">
          <p>© {new Date().getFullYear()} YaazhiCode. {language === 'ta' ? 'தமிழில் நிரலாக்கம்.' : 'Programming in Tamil.'}</p>
          <div className="flex items-center gap-4 font-mono text-[11px]">
            <span className="font-tamil">{label(BRAND.tagline)}</span>
            <a
              href={LINKS.repository}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
              aria-label={`${translate('github', 'GitHub')} — ${translate('open_in_new', 'Opens in a new tab')}`}
            >
              <GithubIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
