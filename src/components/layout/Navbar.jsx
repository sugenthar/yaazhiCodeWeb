import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { LanguageSwitcher } from '../navigation/LanguageSwitcher';
import { Search, Menu, X, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '../common/Icons';

export function Navbar({ activePage, onNavigate, onOpenSearch }) {
  const { language, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: t('nav_home', 'Home') },
    { id: 'learn', label: t('nav_learn', 'Learn') },
    { id: 'docs', label: t('nav_docs', 'Docs') },
    { id: 'packages', label: t('nav_packages', 'Packages') },
    { id: 'tamilscript', label: t('nav_tamilscript', 'TamilScript') },
    { id: 'examples', label: t('nav_examples', 'Examples') },
    { id: 'roadmap', label: t('nav_roadmap', 'Roadmap') },
  ];

  const handleNavClick = (pageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/80 bg-[#07080a]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 text-left group"
          >
            <div className="w-8 h-8 rounded-lg bg-[#14151b] border border-border group-hover:border-silver-400/50 flex items-center justify-center transition-all duration-200">
              <span className="font-serif text-lg font-bold bg-gradient-to-br from-white via-silver-200 to-silver-400 bg-clip-text text-transparent">
                அ
              </span>
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-mono text-base font-bold tracking-wider text-white">
                AKAZHI
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded border border-border bg-surface-100 text-silver-400">
                v0.1.0
              </span>
            </div>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = activePage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  isActive
                    ? 'text-white bg-surface-100 border border-border/60'
                    : 'text-silver-400 hover:text-silver-100 hover:bg-surface-200/50'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right Action Icons & Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Search Trigger */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-2.5 py-1.5 rounded-md border border-border/70 bg-surface-200/60 hover:bg-surface-100 text-xs text-silver-400 hover:text-silver-200 transition-colors"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="font-sans text-xs">{t('nav_search', 'Search docs...')}</span>
            <kbd className="inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono text-silver-500 bg-surface-100 border border-border/60 rounded">
              Ctrl K
            </kbd>
          </button>

          {/* Language Switcher */}
          <LanguageSwitcher />

          {/* GitHub link */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-md border border-border text-silver-400 hover:text-white hover:bg-surface-100 transition-colors"
            title="GitHub Repository"
            aria-label="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          {/* Get Started CTA */}
          <button
            onClick={() => handleNavClick('docs')}
            className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-md bg-white text-black text-xs font-semibold hover:bg-silver-200 transition-colors duration-150"
          >
            <span>{t('nav_get_started', 'Get Started')}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu & Search Icon */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenSearch}
            className="p-2 rounded-md border border-border text-silver-400 hover:text-white"
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </button>
          <LanguageSwitcher />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md border border-border text-silver-400 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-border bg-[#0a0b0f] px-4 pt-2 pb-6 space-y-2 animate-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-white bg-surface-100 border border-border'
                      : 'text-silver-400 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>
          <div className="pt-3 border-t border-border/60 flex items-center justify-between">
            <button
              onClick={() => handleNavClick('docs')}
              className="w-full py-2 px-4 rounded-md bg-white text-black text-xs font-semibold text-center flex items-center justify-center gap-1.5"
            >
              <span>{t('nav_get_started', 'Get Started')}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
