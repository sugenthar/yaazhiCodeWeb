import React, { useEffect, useState } from 'react';
import { useLanguage, pick } from '../../context/LanguageContext';
import { PageHeader, StatusPill, SectionHeading } from '../../components/common/Ui';
import { CodeBlock } from '../../components/code/CodeBlock';
import { Breadcrumb } from '../../components/navigation/Breadcrumb';
import { Badge } from '../../components/common/Badge';
import { exampleCategories, examples } from '../../content/examplesData';
import { STATUS } from '../../content/siteData';
import { Info, Terminal } from 'lucide-react';

export function ExamplesPage({ initialExampleId, onNavigate }) {
  const { language, t } = useLanguage();
  const linkedExample = examples.find(item => item.id === initialExampleId);
  const [activeCategory, setActiveCategory] = useState(linkedExample ? linkedExample.category : 'all');
  const filtered = activeCategory === 'all' ? examples : examples.filter(item => item.category === activeCategory);

  useEffect(() => {
    if (!linkedExample) return;
    setActiveCategory(linkedExample.category);
    const frame = window.requestAnimationFrame(() => {
      document.getElementById(linkedExample.id)?.scrollIntoView({ block: 'start' });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [linkedExample]);

  return (
    <>
      <PageHeader
        eyebrow={language === 'ta' ? 'எடுத்துக்காட்டுகள்' : 'Examples'}
        title={language === 'ta' ? 'சரிபார்க்கப்பட்ட .yaazhi நிரல்கள்' : 'Verified .yaazhi programs'}
        lead={language === 'ta'
          ? 'ஒவ்வொரு நிரலும் 0.1.0 YaazhiCode கட்டளை வரியால் இயக்கப்பட்டு வெளியீடு பதிவு செய்யப்பட்டது.'
          : 'Every program was run with the 0.1.0 YaazhiCode command line and its exact output recorded.'}
        badge={<StatusPill status={STATUS.available} />}
      />

      <div className="shell py-8 sm:py-12 lg:py-16">
        <Breadcrumb items={[{ label: t('nav_examples', 'Examples') }]} onNavigate={onNavigate} />

        <div className="mb-6 sm:mb-10 flex items-start gap-2 rounded-lg border border-caution/30 bg-caution/5 p-3 sm:p-4 text-xs sm:text-sm text-muted">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-caution" aria-hidden="true" />
          <p>
            {language === 'ta'
              ? 'இந்தத் தளம் நிரல்களை உலாவியில் இயக்குவதில்லை. குறியீட்டை நகலெடுத்து அதிகாரப்பூர்வ கட்டளை வரி அல்லது IDE மூலம் உள்ளூரில் இயக்கவும்.'
              : 'This site does not run programs in the browser. Copy the code and run it locally with the official command line or IDE.'}
          </p>
        </div>

        <SectionHeading
          eyebrow={language === 'ta' ? 'வகைகள்' : 'Categories'}
          title={language === 'ta' ? 'எடுத்துக்காட்டுகளைத் தேர்வு செய்யுங்கள்' : 'Choose a category'}
          description={language === 'ta'
            ? 'அடிப்படை முதல் கோப்பு செயல்பாடுகள் வரை அனைத்தும் உண்மையான YaazhiCode குறியீடு.'
            : 'From basics to file operations, all snippets are real YaazhiCode.'}
        />

        <div className="mb-6 sm:mb-10 flex flex-wrap gap-2" role="group" aria-label={language === 'ta' ? 'எடுத்துக்காட்டு வகைகள்' : 'Example categories'}>
          {exampleCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`min-h-[40px] rounded-lg border px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium transition-colors ${
                activeCategory === cat.id
                  ? 'border-accent/50 bg-accent-soft text-accent shadow-sm'
                  : 'border-line bg-panel text-muted hover:text-ink'
              }`}
              aria-pressed={activeCategory === cat.id}
            >
              {pick(cat.label, language)}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:gap-8 xl:grid-cols-2">
          {filtered.map((example) => (
            <section key={example.id} id={example.id} className="scroll-mt-24 min-w-0 overflow-hidden rounded-xl border border-line bg-panel p-4 sm:p-5">
              <div className="flex flex-wrap items-start justify-between gap-3 sm:gap-4">
                <div>
                  <h2 className="text-base sm:text-lg font-semibold text-ink">{pick(example.title, language)}</h2>
                  <p className="mt-1 max-w-xl text-xs sm:text-sm leading-relaxed text-muted">{pick(example.summary, language)}</p>
                </div>
                <Badge variant="outline">{example.category}</Badge>
              </div>

              {example.note && (
                <p className="mt-3 sm:mt-4 rounded-md border border-line bg-app px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-muted">
                  {pick(example.note, language)}
                </p>
              )}

              <CodeBlock code={example.code} language="tamil" filename="main.yaazhi" />

              {example.supporting?.map((file) => (
                <div key={file.filename} className="mt-3 sm:mt-4">
                  <p className="mb-1 font-mono text-xs text-faint">{file.filename}</p>
                  <CodeBlock code={file.code} language="tamil" filename={file.filename} />
                </div>
              ))}

              <div className="mt-3 sm:mt-4 rounded-lg border border-line bg-app p-3 sm:p-4">
                <p className="mb-1 font-mono text-xs uppercase tracking-wide text-faint">
                  {language === 'ta' ? 'எதிர்பார்க்கும் வெளியீடு' : 'Expected output'}
                </p>
                <pre className="whitespace-pre-wrap font-mono text-xs sm:text-sm leading-5 sm:leading-6 text-muted overflow-x-auto">{example.output}</pre>
              </div>

              <div className="mt-3 sm:mt-4 rounded-lg border border-line bg-app p-3 sm:p-4">
                <p className="mb-2 flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide text-faint">
                  <Terminal className="h-3 w-3" aria-hidden="true" /> {language === 'ta' ? 'இயக்க கட்டளை' : 'Run locally'}
                </p>
                <code className="block break-all font-mono text-xs sm:text-sm text-accent">{example.run}</code>
              </div>
            </section>
          ))}

          {filtered.length === 0 && (
            <p className="py-12 sm:py-16 text-center text-sm text-faint">{t('search_no_results', 'No matching results found')}</p>
          )}
        </div>
      </div>
    </>
  );
}
