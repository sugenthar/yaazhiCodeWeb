import React, { useState } from 'react';
import { useLanguage, pick } from '../../context/LanguageContext';
import { CodeBlock } from '../../components/code/CodeBlock';
import { Breadcrumb } from '../../components/navigation/Breadcrumb';
import { DocumentationSidebar } from '../../components/documentation/DocumentationSidebar';
import { TableOfContents } from '../../components/documentation/TableOfContents';
import { DocPager } from '../../components/documentation/DocPager';
import { StatusPill } from '../../components/common/Ui';
import { learnCategories, learnContent, allLessons } from '../../content/docsData';
import { BookOpen, ChevronDown } from 'lucide-react';

export function LearnPage({ initialLessonId, onNavigate }) {
  const { language, t } = useLanguage();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const activeLessonId = learnContent[initialLessonId] ? initialLessonId : allLessons[0].id;
  const lesson = learnContent[activeLessonId];
  const idx = allLessons.findIndex(item => item.id === activeLessonId);
  const prevLesson = idx > 0 ? allLessons[idx - 1] : null;
  const nextLesson = idx < allLessons.length - 1 ? allLessons[idx + 1] : null;

  const selectLesson = (id) => {
    onNavigate('learn', id);
    setMobileNavOpen(false);
  };

  return (
    <div className="shell py-6 sm:py-10 lg:py-14">
      <Breadcrumb
        items={[
          { label: t('nav_learn', 'Learn'), page: 'learn' },
          { label: pick(lesson.title, language) },
        ]}
        onNavigate={onNavigate}
      />

      {/* Mobile / Tablet Lesson Switcher (Accordion) */}
      <div className="lg:hidden mb-6 rounded-xl border border-line bg-panel overflow-hidden shadow-sm">
        <button
          type="button"
          onClick={() => setMobileNavOpen(prev => !prev)}
          className="flex min-h-[48px] w-full items-center justify-between p-3.5 text-left transition-colors hover:bg-raised"
          aria-expanded={mobileNavOpen}
        >
          <div className="flex items-center gap-2.5 min-w-0 pr-2">
            <BookOpen className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
            <div className="min-w-0">
              <span className="block font-mono text-xs uppercase tracking-wider text-faint">
                {language === 'ta' ? `பாடம் ${idx + 1} / ${allLessons.length}` : `Lesson ${idx + 1} of ${allLessons.length}`}
              </span>
              <span className="block truncate text-sm font-semibold text-ink">
                {pick(lesson.title, language)}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 shrink-0 font-mono text-xs text-accent">
            <span>{mobileNavOpen ? (language === 'ta' ? 'மூடு' : 'Close') : (language === 'ta' ? 'பாடங்கள்' : 'All Lessons')}</span>
            <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mobileNavOpen ? 'rotate-180' : ''}`} />
          </div>
        </button>

        {mobileNavOpen && (
          <div className="border-t border-line p-3 max-h-80 overflow-y-auto">
            <DocumentationSidebar
              categories={learnCategories}
              activeDocId={activeLessonId}
              onSelectDoc={selectLesson}
              isMobile
            />
          </div>
        )}
      </div>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
        {/* Desktop Sticky Sidebar */}
        <DocumentationSidebar
          categories={learnCategories}
          activeDocId={activeLessonId}
          onSelectDoc={selectLesson}
          className="hidden lg:block lg:flex-shrink-0"
        />

        {/* Main Lesson Content */}
        <article className="min-w-0 flex-1">
          <header className="border-b border-line pb-4 sm:pb-6">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink">{pick(lesson.title, language)}</h1>
              {lesson.status && <StatusPill status={lesson.status} />}
            </div>
            <p className="mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-muted">
              {pick(lesson.description, language)}
            </p>
          </header>

          <div className="mt-6 sm:mt-8 space-y-6 sm:space-y-10">
            {lesson.sections.map((section, secIdx) => {
              const heading = pick(section.heading, language);
              const body = pick(section.content, language);
              return (
                <section key={secIdx} id={`sec-${secIdx}`} className="scroll-mt-24">
                  <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-ink">{heading}</h2>
                  {body && <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted">{body}</p>}

                  {section.bullets && (
                    <ul className="mt-4 space-y-2" role="list">
                      {section.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex gap-2.5 text-sm sm:text-base text-muted">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                          <span>{pick(bullet, language)}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.code && (
                    <CodeBlock
                      code={section.code}
                      language={section.language || 'tamil'}
                      filename={section.filename}
                    />
                  )}

                  {section.supporting?.map((file) => (
                    <div key={file.filename} className="mt-3">
                      <p className="mb-1 font-mono text-xs text-faint">{file.filename}</p>
                      <CodeBlock code={file.code} language="tamil" filename={file.filename} />
                    </div>
                  ))}
                </section>
              );
            })}
          </div>

          <div className="mt-6 sm:mt-10 rounded-xl border border-line bg-panel p-4 sm:p-5 text-sm sm:text-base text-muted">
            {language === 'ta'
              ? 'இந்தப் பாடத்தின் குறியீடு 0.1.0 YaazhiCode கட்டளை வரியால் இயக்கி சரிபார்க்கப்பட்டது.'
              : 'The code in this lesson was run and verified with the 0.1.0 YaazhiCode command line.'}
          </div>

          <DocPager prevDoc={prevLesson} nextDoc={nextLesson} onSelectDoc={selectLesson} />
        </article>

        {/* On This Page Table of Contents (XL screens) */}
        <TableOfContents sections={lesson.sections.map(section => ({ heading: section.heading }))} />
      </div>
    </div>
  );
}
