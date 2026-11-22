import React, { useState, useEffect } from 'react';
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

  // Close mobile menu on Escape key press
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const links = NAV_ITEMS.map((item) => ({ id: item.id, label: t(item.key) }));

  return (
    <header className="sticky top-0 z-40 w-full border-b border-line bg-app/90 backdrop-blur-md">
      <div className="shell flex h-16 items-center justify-between gap-2 sm:gap-3">
        {/* Brand / Logo */}
        <button
          type="button"
          onClick={() => handleNavClick('home')}
          className="flex flex-shrink-0 items-center gap-2 rounded-lg p-1 text-left focus-visible:outline-accent"
        >
          <BrandLogo className="h-7 w-7 sm:h-8 sm:w-8" decorative />
          <span className="flex items-center gap-1.5">
            <span className="font-mono text-sm font-bold tracking-tight text-ink sm:text-base">YaazhiCode</span>
            <span className="hidden rounded border border-line bg-panel px-1.5 py-0.5 font-mono text-xs text-faint xl:inline">
              v0.1.0
            </span>
          </span>
          <span className="sr-only">{t('nav_home', 'Home')}</span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-0.5 text-xs font-medium lg:flex xl:gap-1 xl:text-sm" aria-label="Main navigation">
          {links.map((link) => {
            const isActive = activePage === link.id;
            return (
              <button
                key={link.id}
                type="button"
                onClick={() => handleNavClick(link.id)}
                className={`rounded-md px-1.5 py-1 text-xs transition-colors xl:px-2.5 xl:py-1.5 xl:text-sm ${
                  isActive
                    ? 'bg-panel font-semibold text-ink shadow-sm'
                    : 'text-muted hover:bg-panel hover:text-ink'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right side controls */}
        <div className="flex flex-shrink-0 items-center gap-1.5 sm:gap-2">
          {/* Search button */}
          <button
            type="button"
            onClick={onOpenSearch}
            className="hidden items-center gap-2 rounded-md border border-line bg-panel px-2.5 py-1.5 text-xs text-muted transition-colors hover:border-accent/50 hover:text-ink sm:inline-flex"
            aria-label={t('nav_search', 'Search')}
          >
            <Search className="h-3.5 w-3.5" aria-hidden="true" />
            <kbd className="hidden font-mono text-xs text-faint xl:inline">Ctrl K</kbd>
          </button>
          <button
            type="button"
            onClick={onOpenSearch}
            className="rounded-md border border-line bg-panel p-2 text-muted hover:text-ink sm:hidden"
            aria-label={t('nav_search', 'Search')}
          >
            <Search className="h-4 w-4" />
          </button>

          {/* Language Switcher */}
          <LanguageSwitcher />

          {/* Theme Toggle (desktop) */}
          <ThemeToggle className="hidden sm:inline-flex" />

          {/* GitHub link (large desktop) */}
          <a
            href={LINKS.repository}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-md border border-line bg-panel p-2 text-muted transition-colors hover:text-accent xl:inline-flex"
            title={t('github', 'GitHub')}
            aria-label={`${t('github', 'GitHub')} — ${t('open_in_new', 'Opens in a new tab')}`}
          >
            <GithubIcon className="h-4 w-4" />
          </a>

          {/* CTA Button (large desktop) */}
          <button
            type="button"
            onClick={() => handleNavClick('install')}
            className="hidden items-center gap-1.5 rounded-md bg-accent px-3 py-2 text-xs font-semibold text-accent-ink transition-opacity hover:opacity-90 xl:inline-flex"
          >
            {t('nav_get_started', 'Get Started')}
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </button>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(prev => !prev)}
            className="rounded-md border border-line bg-panel p-2 text-muted hover:text-ink lg:hidden"
            aria-label={mobileMenuOpen ? t('close', 'Close navigation menu') : t('nav_menu', 'Toggle navigation menu')}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer / Panel */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-16 z-50 border-b border-line bg-panel/95 shadow-xl backdrop-blur-lg lg:hidden">
          <div className="shell max-h-[calc(100vh-4.5rem)] overflow-y-auto px-4 py-4">
            <div className="mb-3 flex items-center justify-between border-b border-line pb-3">
              <div className="flex items-center gap-2">
                <BrandLogo className="h-6 w-6" decorative />
                <span className="font-mono text-sm font-bold text-ink">YaazhiCode</span>
                <span className="rounded border border-line bg-app px-1.5 py-0.5 font-mono text-xs text-faint">
                  v0.1.0
                </span>
              </div>
              <ThemeToggle />
            </div>

            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              {links.map((link) => {
                const isActive = activePage === link.id;
                return (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => handleNavClick(link.id)}
                    className={`flex min-h-[44px] w-full items-center rounded-lg px-4 py-2.5 text-left text-sm font-medium transition-colors sm:text-base ${
                      isActive
                        ? 'bg-accent text-accent-ink font-semibold'
                        : 'text-muted hover:bg-raised hover:text-ink'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>

            <div className="mt-4 flex flex-col gap-3 border-t border-line pt-4">
              <button
                type="button"
                onClick={() => handleNavClick('install')}
                className="flex min-h-[44px] w-full items-center justify-center gap-1.5 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-accent-ink transition-opacity hover:opacity-90"
              >
                {t('nav_get_started', 'Get Started')}
                <ArrowUpRight className="h-4 w-4" />
              </button>

              <div className="flex items-center justify-between">
                <span className="text-xs text-faint">YaazhiCode · MIT & Apache-2.0</span>
                <a
                  href={LINKS.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[36px] items-center gap-2 rounded-md border border-line bg-app px-3 py-1.5 text-xs font-medium text-muted hover:text-accent"
                >
                  <GithubIcon className="h-4 w-4" /> {t('github', 'GitHub')}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
