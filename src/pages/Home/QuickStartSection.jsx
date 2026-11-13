import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { CodeBlock } from '../../components/code/CodeBlock';
import { Terminal, Check, ArrowRight } from 'lucide-react';

export function QuickStartSection({ onNavigate }) {
  const { language } = useLanguage();

  const createCmd = `$ npm create akazhi@latest my-app
$ cd my-app
$ npm install
$ npm run dev`;

  const cliCmds = `# வளர்ச்சி சேவையகம் (கண்காணிப்புடன்)
$ npx akazhi dev --watch

# தொடரியல் மற்றும் இறக்குமதிகள் சோதனை
$ npx akazhi check src

# குறியீட்டை AST முறையில் அழகுபடுத்துதல்
$ npx akazhi format --write

# உற்பத்திக்குத் தொகுத்தல்
$ npx akazhi build`;

  return (
    <section className="py-20 border-b border-border/60 bg-[#090a0e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-5 text-left">
            <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-silver-400">
              {language === 'ta' ? 'விரைவுத் தொடக்கம்' : 'Quick Start'}
            </h2>
            <h3 className="text-3xl font-bold tracking-tight text-white">
              {language === 'ta'
                ? 'ஒரு நிமிடத்தில் உங்கள் முதல் தமிழ் சேவையகம்'
                : 'Scaffold and run in under 60 seconds'}
            </h3>
            <p className="text-sm text-silver-400 leading-relaxed">
              {language === 'ta'
                ? 'அதிகாரப்பூர்வ create-akazhi கட்டளையைப் பயன்படுத்தி, தயார் நிலையில் உள்ள மாதிரி அமைப்புகள் மற்றும் சோதனைகளுடன் கூடிய திட்டத்தை நொடிகளில் உருவாக்குங்கள்.'
                : 'Scaffold a production-ready application layout containing routes, controllers, middleware, and tests with one single command.'}
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-950/60 border border-emerald-800/40 text-emerald-400 flex items-center justify-center text-xs font-mono flex-shrink-0 mt-0.5">
                  ✓
                </div>
                <p className="text-xs text-silver-300">
                  {language === 'ta' ? 'Node.js 20.19+ ஆதரவு' : 'Requires Node.js 20.19 or newer'}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-950/60 border border-emerald-800/40 text-emerald-400 flex items-center justify-center text-xs font-mono flex-shrink-0 mt-0.5">
                  ✓
                </div>
                <p className="text-xs text-silver-300">
                  {language === 'ta' ? 'தானியங்கி உலாவி பணியிடம் (@akazhi/console)' : 'Built-in browser workspace (@akazhi/console)'}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-950/60 border border-emerald-800/40 text-emerald-400 flex items-center justify-center text-xs font-mono flex-shrink-0 mt-0.5">
                  ✓
                </div>
                <p className="text-xs text-silver-300">
                  {language === 'ta' ? 'உண்மையான உற்பத்தி ESM JavaScript வெளியீடு' : 'Compiles cleanly to ESM JavaScript with source maps'}
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('docs', 'quick-start')}
                className="inline-flex items-center gap-2 text-xs font-mono text-white hover:text-silver-300 underline underline-offset-4 transition-colors"
              >
                <span>{language === 'ta' ? 'முழுமையான நிறுவல் வழிகாட்டியைப் படிக்க' : 'Read Full Installation Guide'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Commands panels */}
          <div className="lg:col-span-7 space-y-4">
            <div className="rounded-xl border border-border bg-[#0b0c10] p-1">
              <CodeBlock
                code={createCmd}
                language="bash"
                filename="Terminal — Scaffolding"
                showLineNumbers={false}
              />
            </div>

            <div className="rounded-xl border border-border bg-[#0b0c10] p-1">
              <CodeBlock
                code={cliCmds}
                language="bash"
                filename="Terminal — Daily Development"
                showLineNumbers={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
