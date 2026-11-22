import React, { useEffect } from 'react';
import { useLanguage, pick } from '../../context/LanguageContext';
import { PageHeader, SectionHeading, StatusPill } from '../../components/common/Ui';
import { CodeBlock } from '../../components/code/CodeBlock';
import { CopyButton } from '../../components/common/CopyButton';
import { Badge } from '../../components/common/Badge';
import { Card } from '../../components/common/Card';
import { Breadcrumb } from '../../components/navigation/Breadcrumb';
import { keywordGroups, languageNotes, operators, builtinModules, syntaxExamples } from '../../content/languageData';
import { PROJECT_FACTS, STATUS } from '../../content/siteData';
import { BookOpen, Braces, Hash, Terminal } from 'lucide-react';

export function LanguagePage({ initialSampleId, onNavigate }) {
  const { language, t } = useLanguage();
  const linkedSample = syntaxExamples.find(sample => sample.id === initialSampleId);

  useEffect(() => {
    if (!linkedSample) return undefined;
    const frame = window.requestAnimationFrame(() => {
      document.getElementById(linkedSample.id)?.scrollIntoView({ block: 'start' });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [linkedSample]);

  return (
    <>
      <PageHeader
        eyebrow={language === 'ta' ? 'மொழி குறிப்பு' : 'Language reference'}
        title={language === 'ta' ? 'தமிழ் தொடரியல்' : 'Tamil syntax'}
        lead={language === 'ta'
          ? 'YaazhiCode-ல் பயன்படும் திறவுச்சொற்கள், குறிகள், உள்ளமைந்த தொகுப்புகள், சரிபார்க்கப்பட்ட குறியீடு.'
          : 'The keyword spellings, operators, built-in module names, and verified code used in YaazhiCode.'}
        badge={<StatusPill status={STATUS.available} />}
      />

      <div className="shell py-8 sm:py-12 lg:py-16">
        <Breadcrumb items={[{ label: t('nav_language', 'Language') }]} onNavigate={onNavigate} />

        <section className="py-2 sm:py-6">
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-3">
            <Card hover={false}>
              <p className="font-mono text-2xl sm:text-3xl font-bold text-accent">{PROJECT_FACTS.keywordCount}</p>
              <p className="mt-1 text-xs sm:text-sm text-muted">{language === 'ta' ? 'செயலில் உள்ள திறவுச்சொற்கள்' : 'Active keyword spellings'}</p>
            </Card>
            <Card hover={false}>
              <p className="font-mono text-2xl sm:text-3xl font-bold text-accent">{PROJECT_FACTS.builtinModuleCount}</p>
              <p className="mt-1 text-xs sm:text-sm text-muted">{language === 'ta' ? 'உள்ளமைந்த தொகுப்புகள்' : 'Built-in module names'}</p>
            </Card>
            <Card hover={false}>
              <p className="font-mono text-2xl sm:text-3xl font-bold text-accent">{PROJECT_FACTS.sourceExtension}</p>
              <p className="mt-1 text-xs sm:text-sm text-muted">{language === 'ta' ? 'மூலக் கோப்பு நீட்டிப்பு' : 'Source file extension'}</p>
            </Card>
          </div>
        </section>

        <section className="border-t border-line py-4 sm:py-12">
          <SectionHeading
            eyebrow={language === 'ta' ? 'திறவுச்சொற்கள்' : 'Keywords'}
            title={language === 'ta' ? '40 தமிழ்ச் சொற்கள்' : '40 Tamil words'}
            description={language === 'ta'
              ? 'இவை .yaazhi கோப்புகளில் பயன்படும் செயலில் உள்ள சொற்குறிகள். ஒவ்வொரு குழுவையும் நகலெடுக்கலாம்.'
              : 'These are the active reserved words used in .yaazhi files. Each group can be copied.'}
          />
          <div className="grid gap-5 sm:gap-6 grid-cols-1 md:grid-cols-2">
            {keywordGroups.map((group) => (
              <Card key={group.id} hover={false}>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-sm sm:text-base font-semibold text-ink">{pick(group.title, language)}</h3>
                  <CopyButton text={group.keywords.map(item => item.word).join('\n')} />
                </div>
                <div className="mt-4 grid gap-2 grid-cols-1 xs:grid-cols-2">
                  {group.keywords.map((item) => (
                    <div key={item.word} className="rounded-lg border border-line bg-app px-3 py-2">
                      <code className="code-keyword font-tamil text-sm sm:text-base font-semibold">{item.word}</code>
                      <p className="mt-0.5 text-xs leading-snug text-faint">{pick(item.role, language)}</p>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="border-t border-line py-4 sm:py-12">
          <SectionHeading
            eyebrow={language === 'ta' ? 'அடிப்படை விதிகள்' : 'Core rules'}
            title={language === 'ta' ? 'எழுதுவதற்கு முன்' : 'Before you write code'}
            description={language === 'ta'
              ? 'இந்தக் குறிப்புகள் உண்மையான YaazhiCode நிரல்களை அடிப்படையாகக் கொண்டவை.'
              : 'These notes come directly from working YaazhiCode programs.'}
          />
          <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-2">
            {languageNotes.map((note) => (
              <div key={note.title.en} className="flex gap-3 sm:gap-4 rounded-lg border border-line bg-panel p-4 sm:p-5">
                <Hash className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-ink">{pick(note.title, language)}</h3>
                  <p className="mt-1 text-xs sm:text-sm leading-relaxed text-muted">{pick(note.body, language)}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-line py-4 sm:py-12">
          <SectionHeading
            eyebrow={language === 'ta' ? 'இயக்குகள்' : 'Operators'}
            title={language === 'ta' ? 'கணிதம், ஒப்பீடு, தர்க்கம்' : 'Arithmetic, comparison, and logic'}
          />
          <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {operators.map((group) => (
              <Card key={group.title.en} hover={false}>
                <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-faint">{pick(group.title, language)}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.values.map((value) => (
                    <code key={value} className="rounded border border-line bg-app px-2 py-1 font-mono text-xs sm:text-sm text-accent">
                      {value}
                    </code>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="border-t border-line py-4 sm:py-12">
          <SectionHeading
            eyebrow={language === 'ta' ? 'உள்ளமைந்த தொகுப்புகள்' : 'Built-in modules'}
            title={language === 'ta' ? '17 தமிழ்ப் பெயர்கள்' : '17 Tamil names'}
            description={language === 'ta'
              ? 'இவை உலகளாவிய மாறிகள் அல்ல; இறக்குமதி மூலம் மட்டும் பயன்படுத்தவும்.'
              : 'These are not globals; import the exact name before using a module.'}
          />
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {builtinModules.map((name) => (
              <span key={name} className="font-tamil rounded-lg border border-line bg-panel px-3 py-2 text-sm sm:text-base text-ink">
                {name}
              </span>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <Badge variant="accent">
              <BookOpen className="h-3 w-3" aria-hidden="true" /> {language === 'ta' ? 'சரியான பெயரைப் பயன்படுத்தவும்' : 'Use the exact name'}
            </Badge>
          </div>
        </section>

        <section className="border-t border-line py-4 sm:py-12">
          <SectionHeading
            eyebrow={language === 'ta' ? 'சரிபார்க்கப்பட்ட குறியீடு' : 'Verified code'}
            title={language === 'ta' ? 'தொடரியல் எடுத்துக்காட்டுகள்' : 'Syntax examples'}
            description={language === 'ta'
              ? 'ஒவ்வொரு குறியீட்டையும் நகலெடுக்கலாம். அனைத்தும் 0.1.0 கட்டளை வரியால் இயக்கப்பட்டது.'
              : 'Every snippet has a copy button and was run with the 0.1.0 command line.'}
          />
          <div className="grid gap-5 sm:gap-6 grid-cols-1 xl:grid-cols-2">
            {syntaxExamples.map((sample) => (
              <section key={sample.id} id={sample.id} className="scroll-mt-24 min-w-0 overflow-hidden rounded-xl border border-line bg-panel p-4 sm:p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <Braces className="h-4 w-4 text-accent" aria-hidden="true" />
                    <h3 className="text-sm sm:text-base font-semibold text-ink">{pick(sample.title, language)}</h3>
                  </div>
                  <code className="font-mono text-xs text-faint">{sample.id}.yaazhi</code>
                </div>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted">{pick(sample.note, language)}</p>
                <CodeBlock code={sample.code} language="tamil" filename="main.yaazhi" />
              </section>
            ))}
          </div>
        </section>

        <section className="border-t border-line py-4 sm:py-12">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 sm:gap-6 rounded-xl border border-line bg-panel p-4 sm:p-6">
            <div className="flex items-center gap-3">
              <Terminal className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-ink">
                  {language === 'ta' ? 'கற்கத் தொடங்குங்கள்' : 'Continue with the lessons'}
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-muted">
                  {language === 'ta'
                    ? 'ஒவ்வொரு பாடத்திலும் விளக்கம், தொடரியல், உண்மையான எடுத்துக்காட்டு, வெளியீடு உள்ளன.'
                    : 'Each lesson includes an explanation, syntax, a real example, and expected output.'}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('learn', 'introduction')}
              className="w-full sm:w-auto rounded-lg bg-accent px-4 py-2 sm:px-5 sm:py-2.5 text-sm font-semibold text-accent-ink hover:opacity-90 min-h-[44px]"
            >
              {language === 'ta' ? 'முதல் பாடம்' : 'Start the first lesson'}
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
