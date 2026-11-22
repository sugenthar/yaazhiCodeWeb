import React from 'react';
import { useLanguage, pick } from '../../context/LanguageContext';
import { PageHeader, SectionHeading, StatusPill } from '../../components/common/Ui';
import { CodeBlock } from '../../components/code/CodeBlock';
import { Card } from '../../components/common/Card';
import { Breadcrumb } from '../../components/navigation/Breadcrumb';
import {
  ideSteps,
  ideFeatureMatrix,
  ideShortcuts,
  troubleshooting,
} from '../../content/installData';
import { PROJECT_FACTS, STATUS } from '../../content/siteData';
import { Check, X, AlertCircle, Monitor, Keyboard, FolderTree, Play } from 'lucide-react';

export function IDEPage({ onNavigate }) {
  const { language, t } = useLanguage();

  return (
    <>
      <PageHeader
        eyebrow={language === 'ta' ? 'அதிகாரப்பூர்வ IDE' : 'Official IDE'}
        title={language === 'ta' ? 'YaazhiCode IDE' : 'YaazhiCode IDE'}
        lead={language === 'ta'
          ? 'திட்டங்களை உருவாக்கி, .yaazhi கோப்புகளை எழுதி, உள்ளூரில் இயக்கி, வெளியீட்டையும் நோயறிதிகளையும் காணும் அதிகாரப்பூர்வ பயன்பாடு.'
          : 'The official application for creating projects, writing .yaazhi files, running them locally, and viewing output and diagnostics.'}
        badge={<StatusPill status={STATUS.available} />}
      />

      <div className="shell py-10">
        <Breadcrumb items={[{ label: t('nav_ide', 'IDE') }]} onNavigate={onNavigate} />

        <div className="mb-10 grid gap-3 sm:grid-cols-3">
          <Card hover={false}>
            <p className="font-mono text-xs text-faint">v{PROJECT_FACTS.version}</p>
            <p className="mt-1 text-sm font-semibold text-ink">{language === 'ta' ? 'சரிபார்க்கப்பட்ட பதிப்பு' : 'Verified version'}</p>
          </Card>
          <Card hover={false}>
            <p className="font-mono text-xs text-faint">{PROJECT_FACTS.sourceExtension}</p>
            <p className="mt-1 text-sm font-semibold text-ink">{language === 'ta' ? 'கோப்பு நீட்டிப்பு' : 'Source extension'}</p>
          </Card>
          <Card hover={false}>
            <p className="font-mono text-xs text-faint">127.0.0.1 / localhost</p>
            <p className="mt-1 text-sm font-semibold text-ink">{language === 'ta' ? 'உள்ளூர் முகவரி மட்டும்' : 'Local address only'}</p>
          </Card>
        </div>

        <div className="mb-10 flex items-start gap-2 rounded-lg border border-caution/30 bg-caution/5 p-4 text-xs text-muted">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-caution" aria-hidden="true" />
          <p>
            {language === 'ta'
              ? 'இந்தப் பக்கம் IDE-ன் ஆவணப்படுத்தப்பட்ட செயல்பாடுகளை மட்டும் விவரிக்கிறது. நிரல்கள் உங்கள் கணினியில் உள்ள அதிகாரப்பூர்வ கட்டளை வரி மூலம் இயக்கப்படும்.'
              : 'This page documents only the IDE’s verified capabilities. Programs are run on your machine by the installed official command line.'}
          </p>
        </div>

        <section className="py-4">
          <SectionHeading
            eyebrow={language === 'ta' ? 'தொடங்குதல்' : 'Getting started'}
            title={language === 'ta' ? 'நிறுவல் முதல் முதல் இயக்கம் வரை' : 'From install to first run'}
            description={language === 'ta'
              ? 'இந்தப் படிகள் அதிகாரப்பூர்வ IDE ஆவணங்களை அடிப்படையாகக் கொண்டவை.'
              : 'These steps follow the official IDE documentation.'}
          />
          <div className="space-y-4">
            {ideSteps.map((step) => (
              <Card key={step.n} hover={false}>
                <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
                  <div className="sm:w-64">
                    <span className="font-mono text-sm font-semibold text-accent">{step.n}</span>
                    <h3 className="mt-1 text-sm font-semibold text-ink">{pick(step.title, language)}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted">{pick(step.body, language)}</p>
                  </div>
                  <div className="min-w-0 flex-1">
                    <CodeBlock code={step.code} language="bash" filename="" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="border-t border-line py-12">
          <SectionHeading
            eyebrow={language === 'ta' ? 'சரிபார்க்கப்பட்ட திறன்கள்' : 'Verified capabilities'}
            title={language === 'ta' ? 'IDE-ல் உள்ளது' : 'What the IDE includes'}
            description={language === 'ta'
              ? 'இங்கு பட்டியலிடப்பட்டவை மட்டும் ஆவணப்படுத்தப்பட்டு சரிபார்க்கப்பட்டவை.'
              : 'Only documented and verified capabilities are listed here.'}
          />
          <div className="overflow-hidden rounded-xl border border-line">
            <div className="divide-y divide-line bg-panel">
              {ideFeatureMatrix.map((row) => (
                <div key={row.feature.en} className="grid gap-2 px-4 py-3 sm:grid-cols-[minmax(150px,1fr)_2fr_auto] sm:items-center">
                  <div className="text-sm font-medium text-ink">{pick(row.feature, language)}</div>
                  <div className="text-xs leading-relaxed text-muted">{pick(row.detail, language)}</div>
                  <div className="sm:text-right">
                    {row.available ? (
                      <span className="inline-flex items-center gap-1 font-mono text-[11px] text-positive">
                        <Check className="h-3.5 w-3.5" aria-hidden="true" />
                        {language === 'ta' ? 'உள்ளது' : 'Included'}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 font-mono text-[11px] text-faint">
                        <X className="h-3.5 w-3.5" aria-hidden="true" />
                        {language === 'ta' ? 'இல்லை' : 'Not included'}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-line py-12">
          <SectionHeading
            eyebrow={language === 'ta' ? 'விசைப்பலகை' : 'Keyboard'}
            title={language === 'ta' ? 'விசைக்குறுக்குவழிகள்' : 'Keyboard shortcuts'}
            description={language === 'ta'
              ? 'அதிகாரப்பூர்வ ஆவணங்களில் பட்டியலிடப்பட்ட விசைக்குறுக்குவழிகள்.'
              : 'The shortcuts listed in the official IDE documentation.'}
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {ideShortcuts.map(([shortcut, action]) => (
              <div key={shortcut} className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-line bg-panel px-4 py-3">
                <code className="font-mono text-xs text-accent">{shortcut}</code>
                <span className="text-xs text-muted">{pick(action, language)}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-line py-12">
          <SectionHeading
            eyebrow={language === 'ta' ? 'பகுதிகள்' : 'Areas'}
            title={language === 'ta' ? 'தினசரி பயன்பாட்டு ஓட்டம்' : 'Everyday workflow'}
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: FolderTree, title: L('Projects and files', 'திட்டங்களும் கோப்புகளும்'), body: L('Create or open a project, then create files and folders in Explorer.', 'திட்டத்தை உருவாக்கி அல்லது திறந்து, Explorer-ல் கோப்புகளையும் கோப்பகங்களையும் உருவாக்கவும்.') },
              { icon: Play, title: L('Write and run', 'எழுதி இயக்கு'), body: L('Edit a .yaazhi file, run it, stop it, and read the output and diagnostics.', '.yaazhi கோப்பைத் திருத்தி, இயக்கி, நிறுத்தி, வெளியீட்டையும் நோயறிதிகளையும் படிக்கவும்.') },
              { icon: Monitor, title: L('Terminal and session', 'முனையம் மற்றும் அமர்வு'), body: L('Open a project terminal or an interactive YaazhiCode session with streamed output.', 'திட்ட முனையம் அல்லது ஓட்ட வெளியீட்டுடன் ஊடாடும் YaazhiCode அமர்வைத் திறக்கவும்.') },
              { icon: Keyboard, title: L('Typing modes', 'தட்டச்சு முறைகள்'), body: L('Cycle Tamil, Tanglish, and English typing while editing with Tamil word completions.', 'தமிழ், Tanglish, ஆங்கில தட்டச்சு முறைகளை மாற்றி, தமிழ்ச் சொல் பரிந்துரைகளுடன் எழுதவும்.') },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title.en} hover={false}>
                  <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                  <h3 className="mt-4 text-sm font-semibold text-ink">{pick(item.title, language)}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted">{pick(item.body, language)}</p>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="border-t border-line py-12">
          <SectionHeading
            eyebrow={language === 'ta' ? 'சிக்கல் தீர்வு' : 'Troubleshooting'}
            title={language === 'ta' ? 'IDE தொடர்பான பொதுவான சிக்கல்கள்' : 'Common IDE issues'}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {troubleshooting.map((item) => (
              <div key={item.title.en} className="rounded-lg border border-line bg-panel p-4">
                <h3 className="flex items-center gap-2 text-xs font-semibold text-ink">
                  <Monitor className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                  {pick(item.title, language)}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">{pick(item.body, language)}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-line py-12">
          <div className="flex flex-wrap items-center gap-4 rounded-xl border border-line bg-panel p-6">
            <Play className="h-5 w-5 text-accent" aria-hidden="true" />
            <div>
              <h2 className="text-lg font-semibold text-ink">
                {language === 'ta' ? 'நிறுவி முதல் நிரலை இயக்குங்கள்' : 'Install, then run your first program'}
              </h2>
              <p className="mt-1 text-xs text-muted">
                {language === 'ta'
                  ? 'நிறுவல் வழிகாட்டி மற்றும் முதல் நிரல் பாடம் இங்கே உள்ளன.'
                  : 'The install guide and first-program lesson are one click away.'}
              </p>
            </div>
            <div className="ml-auto flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => onNavigate('install')}
                className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-ink hover:opacity-90"
              >
                {language === 'ta' ? 'நிறுவல்' : 'Install'}
              </button>
              <button
                type="button"
                onClick={() => onNavigate('learn', 'first-program')}
                className="rounded-lg border border-line bg-app px-4 py-2 text-sm font-semibold text-ink hover:border-accent/50"
              >
                {language === 'ta' ? 'முதல் நிரல்' : 'First program'}
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

function L(en, ta) {
  return { en, ta };
}
