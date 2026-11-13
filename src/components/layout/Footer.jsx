import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Terminal, Heart } from 'lucide-react';
import { GithubIcon } from '../common/Icons';

export function Footer({ onNavigate }) {
  const { language, t } = useLanguage();

  return (
    <footer className="w-full border-t border-border/80 bg-[#060709] py-14 text-sm text-silver-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-border/60">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-md bg-[#14151b] border border-border flex items-center justify-center">
                <span className="font-serif text-base font-bold text-white">அ</span>
              </div>
              <span className="font-mono text-base font-bold tracking-wider text-white">AKAZHI</span>
            </div>
            <p className="text-xs text-silver-400 leading-relaxed max-w-sm">
              {language === 'ta'
                ? 'உங்கள் மொழியில் நிரலாக்கம். உங்கள் சிந்தனையில் தொழில்நுட்பம். AKAZHI என்பது TamilScript அடிப்படையிலான ஒரு தமிழ்-முதல் Node.js கட்டமைப்பு.'
                : 'Build technology in Tamil. AKAZHI is a developer-focused, Tamil-first Node.js framework powered by TamilScript.'}
            </p>
            <div className="text-[11px] font-mono text-silver-500 pt-1">
              MIT License • v0.1.0 Architecture • Pure ESM
            </div>
          </div>

          {/* Nav Column 1: Learning */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-silver-200 font-semibold">
              {language === 'ta' ? 'கற்றல்' : 'Learn'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('learn', 'intro-programming')} className="hover:text-white transition-colors">
                  {language === 'ta' ? 'நிரலாக்க அறிமுகம்' : 'Programming Intro'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('learn', 'variables')} className="hover:text-white transition-colors">
                  {language === 'ta' ? 'மாறிகள் & எண்கள்' : 'Variables & Numerals'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('learn', 'first-server')} className="hover:text-white transition-colors">
                  {language === 'ta' ? 'முதல் சேவையகம்' : 'First Server'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('learn', 'rest-apis')} className="hover:text-white transition-colors">
                  {language === 'ta' ? 'REST API உருவாக்கம்' : 'REST APIs'}
                </button>
              </li>
            </ul>
          </div>

          {/* Nav Column 2: Documentation */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-silver-200 font-semibold">
              {language === 'ta' ? 'ஆவணங்கள்' : 'Documentation'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('docs', 'what-is-akazhi')} className="hover:text-white transition-colors">
                  {language === 'ta' ? 'அறிமுகம் & நோக்கம்' : 'What is AKAZHI?'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('docs', 'http-server')} className="hover:text-white transition-colors">
                  {language === 'ta' ? 'வலைச்சேவையகம் API' : 'HTTP Server API'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('docs', 'cli-overview')} className="hover:text-white transition-colors">
                  {language === 'ta' ? 'கட்டளை வரி (CLI)' : 'CLI Reference'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('docs', 'graceful-shutdown')} className="hover:text-white transition-colors">
                  {language === 'ta' ? 'பாதுகாப்பு & நிறுத்தம்' : 'Security & Shutdown'}
                </button>
              </li>
            </ul>
          </div>

          {/* Nav Column 3: Ecosystem */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-silver-200 font-semibold">
              {language === 'ta' ? 'சுற்றுச்சூழல்' : 'Ecosystem'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('packages', 'node')} className="hover:text-white transition-colors">
                  @akazhi/node
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('packages', 'cli')} className="hover:text-white transition-colors">
                  @akazhi/cli
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('tamilscript')} className="hover:text-white transition-colors">
                  TamilScript (NPM)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('roadmap')} className="hover:text-white transition-colors">
                  {language === 'ta' ? 'எதிர்கால செயல்திட்டம்' : 'Roadmap'}
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-silver-500">
          <div>
            © {new Date().getFullYear()} AKAZHI Framework. {t('footer_built_with', 'Engineered for Tamil speakers, developers, and future software architects.')}
          </div>
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] text-silver-400">
              தமிழ்-முதல் தொழில் நுட்பம்
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
