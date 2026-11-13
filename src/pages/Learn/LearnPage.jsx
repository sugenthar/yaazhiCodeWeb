import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { tutorials } from '../../content/tutorialsData';
import { CodeBlock } from '../../components/code/CodeBlock';
import { Breadcrumb } from '../../components/navigation/Breadcrumb';
import { BookOpen, CheckCircle, ChevronRight, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';

export function LearnPage({ initialTutorialId, onNavigate }) {
  const { language, t } = useLanguage();
  const [activeTutorialId, setActiveTutorialId] = useState(
    initialTutorialId || tutorials[0].id
  );

  useEffect(() => {
    if (initialTutorialId) {
      setActiveTutorialId(initialTutorialId);
    }
  }, [initialTutorialId]);

  const currentIndex = tutorials.findIndex(tut => tut.id === activeTutorialId);
  const activeTutorial = tutorials[currentIndex] || tutorials[0];
  const prevTutorial = currentIndex > 0 ? tutorials[currentIndex - 1] : null;
  const nextTutorial = currentIndex < tutorials.length - 1 ? tutorials[currentIndex + 1] : null;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <Breadcrumb
        items={[
          { label: t('nav_learn', 'Learn'), action: () => {} },
          { label: activeTutorial.title[language] || activeTutorial.title.ta }
        ]}
        onNavigate={onNavigate}
      />

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Lesson Navigation Sidebar */}
        <aside className="w-full lg:w-72 flex-shrink-0 lg:sticky lg:top-20 lg:h-[calc(100vh-6rem)] lg:overflow-y-auto pb-8">
          <div className="p-4 rounded-xl border border-border bg-[#0d0e14] space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-border/60">
              <BookOpen className="w-4 h-4 text-silver-300" />
              <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-white">
                {language === 'ta' ? 'பாடத்திட்டம்' : 'Tutorial Curriculum'}
              </h2>
            </div>

            <nav className="space-y-1">
              {tutorials.map((tut, idx) => {
                const isActive = tut.id === activeTutorial.id;
                return (
                  <button
                    key={tut.id}
                    onClick={() => setActiveTutorialId(tut.id)}
                    className={`w-full flex items-center justify-between p-2.5 rounded-lg text-left text-xs font-medium transition-colors ${
                      isActive
                        ? 'bg-surface-100 text-white border border-border font-semibold'
                        : 'text-silver-400 hover:text-silver-200 hover:bg-surface-200/50'
                    }`}
                  >
                    <span className="truncate pr-2">
                      {tut.title[language] || tut.title.ta}
                    </span>
                    {isActive ? (
                      <ChevronRight className="w-3.5 h-3.5 text-white flex-shrink-0" />
                    ) : (
                      <span className="text-[10px] font-mono text-silver-600 select-none">
                        {idx + 1}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* Main Lesson Content Area */}
        <main className="flex-1 min-w-0 max-w-4xl space-y-8">
          {/* Header */}
          <div className="space-y-3 pb-6 border-b border-border/60">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface-100 border border-border text-silver-400">
                Lesson {currentIndex + 1} of {tutorials.length}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              {activeTutorial.title[language] || activeTutorial.title.ta}
            </h1>
            <p className="text-sm text-silver-400 leading-relaxed">
              {activeTutorial.summary[language] || activeTutorial.summary.ta}
            </p>
          </div>

          {/* 1. Explanation */}
          <section className="space-y-3">
            <h2 className="text-base font-semibold text-white flex items-center gap-2 font-mono">
              <span className="text-silver-500">#</span>
              <span>{language === 'ta' ? 'விளக்கம்' : 'Concept Explanation'}</span>
            </h2>
            <div className="p-4 rounded-xl border border-border/80 bg-[#0c0d12] text-sm text-silver-300 leading-relaxed">
              {activeTutorial.explanation[language] || activeTutorial.explanation.ta}
            </div>
          </section>

          {/* 2. TamilScript Example Code */}
          <section className="space-y-3">
            <h2 className="text-base font-semibold text-white flex items-center gap-2 font-mono">
              <span className="text-silver-500">#</span>
              <span>{language === 'ta' ? 'தமிழ் எடுத்துக்காட்டுக் குறியீடு' : 'TamilScript Code Example'}</span>
            </h2>
            <CodeBlock
              code={activeTutorial.code}
              language="tamil"
              filename="example.tamil"
              showLineNumbers={true}
            />
          </section>

          {/* 3. Explanation of the Example */}
          <section className="space-y-3">
            <h2 className="text-base font-semibold text-white flex items-center gap-2 font-mono">
              <span className="text-silver-500">#</span>
              <span>{language === 'ta' ? 'குறியீட்டு விளக்கம்' : 'Code Breakdown'}</span>
            </h2>
            <p className="text-sm text-silver-300 leading-relaxed">
              {activeTutorial.codeExplanation[language] || activeTutorial.codeExplanation.ta}
            </p>
          </section>

          {/* 4. Expected Output */}
          <section className="space-y-3">
            <h2 className="text-base font-semibold text-white flex items-center gap-2 font-mono">
              <span className="text-silver-500">#</span>
              <span>{language === 'ta' ? 'எதிர்பார்க்கப்படும் வெளியீடு' : 'Expected Output'}</span>
            </h2>
            <div className="rounded-lg border border-border/80 bg-[#0a0b0e] p-4 font-mono text-xs text-emerald-300 whitespace-pre overflow-x-auto">
              {activeTutorial.output}
            </div>
          </section>

          {/* Navigation Controls: Previous / Next Step */}
          <div className="pt-8 border-t border-border/80 flex items-center justify-between gap-4">
            {prevTutorial ? (
              <button
                onClick={() => setActiveTutorialId(prevTutorial.id)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-surface-100 text-xs font-medium text-silver-300 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>{language === 'ta' ? 'முந்தைய பாடம்' : 'Previous Lesson'}</span>
              </button>
            ) : <div />}

            {nextTutorial ? (
              <button
                onClick={() => setActiveTutorialId(nextTutorial.id)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black text-xs font-semibold hover:bg-silver-200 transition-colors ml-auto"
              >
                <span>{language === 'ta' ? 'அடுத்த பாடம்' : 'Next Lesson'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={() => onNavigate('docs')}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black text-xs font-semibold hover:bg-silver-200 transition-colors ml-auto"
              >
                <span>{language === 'ta' ? 'ஆவணங்களை வாசிக்க' : 'Explore Documentation'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
