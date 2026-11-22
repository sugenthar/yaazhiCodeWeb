import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { LanguageSwitcher } from '../navigation/LanguageSwitcher';
import { ThemeToggle } from '../common/ThemeToggle';
import { Search, Menu, X, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '../common/Icons';
import { BrandLogo } from '../common/BrandLogo';
import { NAV_ITEMS, LINKS } from '../../content/siteData';

export function Navbar({ activePage, onNavigate, onOpenSearch }) {
  const { language, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (pageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
  };

  const links = NAV_ITEMS.map((item) => ({ id: item.id, label: t(item.key) }));

  return (
    <header className="sticky top-0 z-40 w-full border-b border-line bg-app/90 backdrop-blur-md">
      <div className="shell flex h-16 items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => handleNavClick('home')}
          className="flex flex-shrink-0 items-center gap-2.5 rounded-lg p-1 text-left"
        >
          <BrandLogo className="h-8 w-8" decorative />
          <span className="flex items-center gap-1.5">
            <span className="font-mono text-base font-bold tracking-tight text-ink">YaazhiCode</span>
            <span className="hidden rounded border border-line bg-panel px-1.5 py-0.5 font-mono text-[10px] text-faint xl:inline">v0.1.0</span>
          </span>
          <span className="sr-only">Home</span>
        </button>

        <nav className="hidden items-center gap-0.5 text-sm font-medium lg:flex" aria-label="Main navigation">
          {links.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => handleNavClick(link.id)}
              className={`rounded-md px-1.5 py-1.5 transition-colors xl:px-3 ${
                language === 'ta' ? 'text-[10px]' : 'text-sm'
              } ${
                activePage === link.id
                  ? 'bg-panel font-semibold text-ink'
                  : 'text-muted hover:bg-panel hover:text-ink'
              }`}
              aria-current={activePage === link.id ? 'page' : undefined}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex flex-shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={onOpenSearch}
            className="hidden items-center gap-2 rounded-md border border-line bg-panel px-2.5 py-1.5 text-xs text-muted transition-colors hover:border-accent/50 hover:text-ink sm:inline-flex"
            aria-label={t('nav_search', 'Search')}
          >
            <Search className="h-3.5 w-3.5" aria-hidden="true" />
            <kbd className="hidden font-mono text-[10px] text-faint xl:inline">Ctrl K</kbd>
          </button>
          <button
            type="button"
            onClick={onOpenSearch}
            className="rounded-md border border-line bg-panel p-2 text-muted hover:text-ink sm:hidden"
            aria-label={t('nav_search', 'Search')}
          >
            <Search className="h-4 w-4" />
          </button>

          <LanguageSwitcher />
          <ThemeToggle className="hidden sm:inline-flex" />

          <a
            href={LINKS.repository}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-md border border-line bg-panel p-1.5 text-muted transition-colors hover:text-accent xl:inline-flex"
            title={t('github', 'GitHub')}
            aria-label={`${t('github', 'GitHub')} — ${t('open_in_new', 'Opens in a new tab')}`}
          >
            <GithubIcon className="h-4 w-4" />
          </a>

          <button
            type="button"
            onClick={() => handleNavClick('install')}
            className={`hidden items-center gap-1.5 rounded-md bg-accent px-3.5 py-2 font-semibold text-accent-ink transition-opacity hover:opacity-90 xl:inline-flex ${
              language === 'ta' ? 'text-[10px]' : 'text-xs'
            }`}
          >
            {t('nav_get_started', 'Get Started')}
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(prev => !prev)}
            className="rounded-md border border-line bg-panel p-2 text-muted hover:text-ink lg:hidden"
            aria-label={t('nav_menu', 'Toggle navigation menu')}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="animate-fade-in border-b border-line bg-panel px-4 pb-6 pt-3 lg:hidden">
          <div className="flex items-center gap-2.5 px-2 pb-3 pt-1">
            <BrandLogo className="h-8 w-8" decorative />
            <span className="font-mono text-sm font-bold text-ink">YaazhiCode</span>
            <span className="rounded border border-line bg-app px-1.5 py-0.5 font-mono text-[10px] text-faint">v0.1.0</span>
          </div>
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {links.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => handleNavClick(link.id)}
                className={`rounded-md px-3.5 py-2.5 text-left font-medium transition-colors ${
                  language === 'ta' ? 'text-[10px]' : 'text-sm'
                } ${
                  activePage === link.id ? 'bg-raised text-ink' : 'text-muted hover:bg-raised hover:text-ink'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
          <div className="mt-3 flex flex-col gap-2 border-t border-line pt-4">
            <button
              type="button"
              onClick={() => handleNavClick('install')}
              className={`flex items-center justify-center gap-1.5 rounded-md bg-accent py-2.5 px-4 font-semibold text-accent-ink ${
                language === 'ta' ? 'text-[10px]' : 'text-xs'
              }`}
            >
              {t('nav_get_started', 'Get Started')}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
            <div className="flex items-center justify-between">
              <ThemeToggle />
              <a
                href={LINKS.repository}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-line bg-app px-3 py-1.5 text-xs text-muted hover:text-accent"
              >
                <GithubIcon className="h-4 w-4" /> {t('github', 'GitHub')}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
