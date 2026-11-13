import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { examples } from '../../content/examplesData';
import { CodeBlock } from '../../components/code/CodeBlock';
import { Breadcrumb } from '../../components/navigation/Breadcrumb';
import { Layers, Terminal, Sparkles, Filter } from 'lucide-react';

export function ExamplesPage({ onNavigate }) {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: { ta: 'அனைத்தும்', en: 'All' } },
    { id: 'basics', label: { ta: 'அடிப்படை', en: 'Basics' } },
    { id: 'backend', label: { ta: 'வலைச்சேவையகம்', en: 'Backend APIs' } },
    { id: 'utilities', label: { ta: 'கோப்பு & பயன்கள்', en: 'Utilities' } },
    { id: 'advanced', label: { ta: 'மேம்பட்டவை', en: 'Advanced' } },
  ];

  const filteredExamples = activeCategory === 'all'
    ? examples
    : examples.filter(ex => ex.category === activeCategory);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-10">
      <Breadcrumb
        items={[
          { label: t('nav_examples', 'Examples') }
        ]}
        onNavigate={onNavigate}
      />

      {/* Header */}
      <div className="space-y-4 pb-6 border-b border-border/60">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          {language === 'ta'
            ? 'நடைமுறை எடுத்துக்காட்டுகள்'
            : 'Production-Ready Code Examples'}
        </h1>
        <p className="text-base text-silver-300 max-w-2xl leading-relaxed">
          {language === 'ta'
            ? 'அன்றாடத் தேவைகளுக்கான தயார்நிலை தமிழ் குறியீடுகள். நகலெடுத்து உங்கள் திட்டங்களில் நேரடியாகப் பயன்படுத்தலாம்.'
            : 'Copy-and-paste ready code examples for everyday server development tasks.'}
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 pt-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                activeCategory === cat.id
                  ? 'bg-white text-black font-semibold'
                  : 'bg-surface-100 text-silver-400 hover:text-white border border-border'
              }`}
            >
              {cat.label[language] || cat.label.ta}
            </button>
          ))}
        </div>
      </div>

      {/* Examples Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredExamples.map((ex) => (
          <div
            key={ex.id}
            id={ex.id}
            className="flex flex-col justify-between rounded-xl border border-border bg-[#0b0c10] p-6 space-y-5 hover:border-silver-500/40 transition-colors"
          >
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-1.5">
                {ex.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-200 border border-border/60 text-silver-400"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <h2 className="text-xl font-bold text-white tracking-tight">
                {ex.title[language] || ex.title.ta}
              </h2>

              <p className="text-xs text-silver-400 leading-relaxed font-sans">
                {ex.summary[language] || ex.summary.ta}
              </p>
            </div>

            {/* Code */}
            <div className="space-y-3">
              <CodeBlock
                code={ex.code}
                language="tamil"
                filename=""
                showLineNumbers={true}
              />

              {/* Expected Output */}
              {ex.output && (
                <div className="space-y-1.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-silver-500 flex items-center gap-1">
                    <Terminal className="w-3 h-3" />
                    <span>{language === 'ta' ? 'எதிர்பார்க்கப்படும் வெளியீடு' : 'Expected Output'}</span>
                  </span>
                  <div className="p-3 rounded-lg border border-border/80 bg-[#08090c] font-mono text-xs text-emerald-300 whitespace-pre overflow-x-auto">
                    {ex.output}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
