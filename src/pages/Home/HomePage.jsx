import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { HeroSection } from './HeroSection';
import { WhySection } from './WhySection';
import { CapabilitiesSection } from './CapabilitiesSection';
import { QuickStartSection } from './QuickStartSection';
import { EcosystemSection } from './EcosystemSection';
import { ArrowRight, Terminal } from 'lucide-react';

export function HomePage({ onNavigate }) {
  const { language } = useLanguage();

  return (
    <div className="w-full">
      {/* 1. Hero */}
      <HeroSection onNavigate={onNavigate} />

      {/* 2. Why AKAZHI */}
      <WhySection />

      {/* 3. Capabilities (What can you build) */}
      <CapabilitiesSection />

      {/* 4. Quick Start */}
      <QuickStartSection onNavigate={onNavigate} />

      {/* 5. Ecosystem Packages */}
      <EcosystemSection onNavigate={onNavigate} />

      {/* 6. Final Call to Action */}
      <section className="py-24 border-b border-border/60 bg-[#060709] relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface-100 text-xs font-mono text-silver-300">
            <span>AKAZHI Open Source Initiative</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            {language === 'ta'
              ? 'தமிழிலேயே கட்டமைக்கத் தொடங்குங்கள்.'
              : 'Start building with Tamil.'}
          </h2>

          <p className="text-base text-silver-400 max-w-xl mx-auto">
            {language === 'ta'
              ? 'நிரலாக்கக் கருத்துக்களை தாய்மொழியிலேயே கற்று, நவீன வலைச்சேவையகங்களை உருவாக்குங்கள்.'
              : 'Master software engineering principles directly in Tamil. Fast, expressive, and production-ready.'}
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onNavigate('docs', 'quick-start')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-black text-sm font-semibold hover:bg-silver-200 transition-colors"
            >
              <span>{language === 'ta' ? 'தொடங்குக' : 'Get Started Now'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('learn')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-surface-100 hover:bg-surface-50 text-silver-200 hover:text-white text-sm font-medium transition-colors"
            >
              <span>{language === 'ta' ? 'பாடங்களைக் கற்க' : 'Browse Tutorials'}</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
