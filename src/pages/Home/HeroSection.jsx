import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { CodeBlock } from '../../components/code/CodeBlock';
import { ArrowRight, Terminal, BookOpen, Sparkles } from 'lucide-react';

export function HeroSection({ onNavigate }) {
  const { language } = useLanguage();

  const heroCode = `// src/main.tamil
இறக்குமதி {
  வலைச்சேவையகம்,
  அச்சிடு,
} இருந்து "@akazhi/node";

நிலையான சேவையகம் = வலைச்சேவையகம்();

சேவையகம்.பெறு("/", செயல் (கோரிக்கை, பதில்) {
  பதில்.ஜேசன்({
    செய்தி: "வணக்கம் AKAZHI!",
    நிலை: "இயங்குகிறது",
  });
});

காத்திரு சேவையகம்.தொடங்கு({
  துறைமுகம்: $௩௦௦௦,
});

அச்சிடு("சேவையகம் துறைமுகம் 3000-ல் தொடங்கியது.");`;

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-border/60">
      {/* Background subtle radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Version badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface-100/90 text-xs font-mono text-silver-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>AKAZHI v0.1.0 Released on NPM</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
              {language === 'ta' ? (
                <>
                  உங்கள் மொழியில் நிரலாக்கம்.
                  <span className="block text-silver-400 font-normal mt-1">
                    உங்கள் சிந்தனையில் தொழில்நுட்பம்.
                  </span>
                </>
              ) : (
                <>
                  Build technology in Tamil.
                  <span className="block text-silver-400 font-normal mt-1">
                    Powered by TamilScript & Node.js.
                  </span>
                </>
              )}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-silver-300 leading-relaxed max-w-xl font-normal">
              {language === 'ta'
                ? 'AKAZHI என்பது தமிழ் பேசும் மக்கள் தங்கள் தாய்மொழியிலேயே வலைச்சேவையகங்களையும், REST API-களையும், மென்பொருள் பயன்பாடுகளையும் உருவாக்குவதற்கான ஒரு நவீன தமிழ்-முதல் Node.js கட்டமைப்பாகும்.'
                : 'AKAZHI is a Tamil-first development framework that empowers Tamil speakers to create backend servers, APIs and software applications using TamilScript and Tamil-native development tools.'}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('docs', 'quick-start')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-black text-sm font-semibold hover:bg-silver-200 transition-all shadow-sm"
              >
                <span>{language === 'ta' ? 'தொடங்குக' : 'Get Started'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('learn')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-surface-100 hover:bg-surface-50 text-silver-200 hover:text-white text-sm font-medium transition-all"
              >
                <BookOpen className="w-4 h-4 text-silver-400" />
                <span>{language === 'ta' ? 'பயிற்சிகளைக் காண்க' : 'Explore Tutorials'}</span>
              </button>
            </div>

            {/* Quick installation snippet */}
            <div className="pt-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-border/80 bg-[#090a0e] text-xs font-mono text-silver-400">
                <Terminal className="w-3.5 h-3.5 text-silver-500" />
                <span className="text-silver-200">npm create akazhi@latest my-app</span>
              </div>
            </div>
          </div>

          {/* Right Column: Code Demonstration Window */}
          <div className="lg:col-span-6">
            <div className="relative">
              {/* Subtle back decorative frame */}
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-b from-white/10 to-transparent blur-sm pointer-events-none" />

              <div className="relative rounded-xl border border-border bg-[#0b0c10] shadow-2xl overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2.5 border-b border-border/80 bg-[#0f1016]">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-neutral-700/60" />
                    <div className="w-3 h-3 rounded-full bg-neutral-700/60" />
                    <div className="w-3 h-3 rounded-full bg-neutral-700/60" />
                    <span className="ml-2 font-mono text-xs text-silver-400 font-medium">
                      main.tamil
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5 rounded">
                    AKAZHI Server
                  </span>
                </div>

                <div className="[&>div]:my-0 [&>div]:border-0 [&>div]:rounded-none">
                  <CodeBlock
                    code={heroCode}
                    language="tamil"
                    filename=""
                    showLineNumbers={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
