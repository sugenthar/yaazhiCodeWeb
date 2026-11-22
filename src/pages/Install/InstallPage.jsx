import React from 'react';
import { useLanguage, pick } from '../../context/LanguageContext';
import { PageHeader, SectionHeading, StatusPill } from '../../components/common/Ui';
import { CodeBlock } from '../../components/code/CodeBlock';
import { Card } from '../../components/common/Card';
import { Breadcrumb } from '../../components/navigation/Breadcrumb';
import {
  requirements,
  cliInstallSteps,
  localSourceInstall,
  ideSteps,
  ideFeatureMatrix,
  troubleshooting,
} from '../../content/installData';
import { CLI_COMMANDS, PROJECT_FACTS } from '../../content/siteData';
import { Check, X, AlertCircle, Terminal, Monitor } from 'lucide-react';

export function InstallPage({ onNavigate }) {
  const { language, t } = useLanguage();

  return (
    <>
      <PageHeader
        eyebrow={language === 'ta' ? 'நிறுவுதல்' : 'Installation'}
        title={language === 'ta' ? 'YaazhiCode-ஐ நிறுவுதல்' : 'Install YaazhiCode'}
        lead={language === 'ta'
          ? 'Windows 10/11 x64, Node.js 22.18.0+ சரிபார்க்கப்பட்ட சூழல். மொழி கட்டளை வரியையும் விருப்பமாக IDE-ஐயும் நிறுவுங்கள்.'
          : 'Verified on Windows 10/11 x64 with Node.js 22.18.0+. Install the language command line and, optionally, the official IDE.'}
        badge={<StatusPill status="available" />}
      />

      <div className="shell py-10">
        <Breadcrumb items={[{ label: t('nav_install', 'Install') }]} onNavigate={onNavigate} />

        <div className="mb-10 rounded-xl border border-caution/30 bg-caution/5 p-4 text-sm text-muted">
          <p className="flex items-start gap-2">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-caution" />
            <span>{pick(PROJECT_FACTS.npmRegistryNote, language)}</span>
          </p>
        </div>

        <section className="py-4">
          <SectionHeading
            eyebrow={language === 'ta' ? 'தேவைகள்' : 'Requirements'}
            title={language === 'ta' ? 'தொடங்குவதற்கு முன்' : 'Before you begin'}
          />
          <Card hover={false}>
            <dl className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {requirements.map((req) => (
                <div key={req.label.en} className="border-b border-line pb-3 last:border-0 sm:border-b-0 sm:pb-0">
                  <dt className="font-mono text-[11px] uppercase tracking-wide text-faint">{pick(req.label, language)}</dt>
                  <dd className="mt-1 text-sm text-ink">{pick(req.value, language)}</dd>
                </div>
              ))}
            </dl>
          </Card>
        </section>

        <section className="border-t border-line py-12">
          <SectionHeading
            eyebrow={language === 'ta' ? 'கட்டளை வரி' : 'Command line'}
            title={language === 'ta' ? 'ஆறு படிகளில் நிறுவுதல்' : 'Install in six steps'}
            description={language === 'ta'
              ? 'ஒவ்வொரு படியும் ஆவணப்படுத்தப்பட்ட கட்டளைகளைப் பயன்படுத்துகிறது.'
              : 'Each step uses commands from the official documentation.'}
          />
          <div className="space-y-4">
            {cliInstallSteps.map((step) => (
              <Card key={step.n} hover={false}>
                <div className="flex gap-4">
                  <span className="font-mono text-sm font-semibold text-accent">{step.n}</span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-semibold text-ink">{pick(step.title, language)}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted">{pick(step.body, language)}</p>
                    <CodeBlock code={step.code} language={step.code.includes('அச்சிடு') ? 'tamil' : 'bash'} filename="" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="border-t border-line py-12">
          <SectionHeading
            eyebrow={language === 'ta' ? 'கட்டளைக் குறிப்பு' : 'Command reference'}
            title={language === 'ta' ? 'கிடைக்கும் கட்டளைகள்' : 'Available commands'}
            description={language === 'ta'
              ? 'நிறுவப்பட்ட yaazhicode கட்டளையின் ஆவணப்படுத்தப்பட்ட திறன்.'
              : 'The documented surface of the installed yaazhicode command.'}
          />
          <div className="overflow-hidden rounded-xl border border-line">
            <div className="divide-y divide-line bg-panel">
              {CLI_COMMANDS.map((item) => (
                <div key={item.command} className="grid gap-2 px-4 py-3 sm:grid-cols-[minmax(220px,1fr)_2fr] sm:items-center">
                  <code className="break-all font-mono text-xs text-accent">{item.command}</code>
                  <p className="text-xs text-muted">{pick({ en: item.en, ta: item.ta }, language)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-line py-12">
          <SectionHeading
            eyebrow={language === 'ta' ? 'மூலத்திலிருந்து' : 'From source'}
            title={pick(localSourceInstall.title, language)}
            description={pick(localSourceInstall.body, language)}
          />
          <CodeBlock code={localSourceInstall.code} language="bash" filename="PowerShell" />
        </section>

        <section className="border-t border-line py-12">
          <SectionHeading
            eyebrow={language === 'ta' ? 'அதிகாரப்பூர்வ IDE' : 'Official IDE'}
            title={language === 'ta' ? 'தமிழ்-முதல் உருவாக்க சூழல்' : 'Tamil-first development environment'}
            description={language === 'ta'
              ? 'IDE உள்ளூர் முகவரியில் மட்டும் இயங்கும்; நிரல்கள் உள்ளூரில் இயக்கப்படும்.'
              : 'The IDE runs on a local address only; programs are run on your machine.'}
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

          <div className="mt-8 overflow-hidden rounded-xl border border-line">
            <div className="border-b border-line bg-panel px-4 py-3 font-mono text-xs font-semibold uppercase tracking-wide text-ink">
              {language === 'ta' ? 'அம்சப் பட்டியல்' : 'Feature list'}
            </div>
            <div className="divide-y divide-line bg-app">
              {ideFeatureMatrix.map((row) => (
                <div key={row.feature.en} className="grid gap-2 px-4 py-3 sm:grid-cols-[minmax(140px,1fr)_2fr_auto] sm:items-center">
                  <div className="text-sm font-medium text-ink">{pick(row.feature, language)}</div>
                  <div className="text-xs text-muted">{pick(row.detail, language)}</div>
                  <div>
                    {row.available ? (
                      <span className="inline-flex items-center gap-1 font-mono text-[11px] text-positive"><Check className="h-3.5 w-3.5" /> {language === 'ta' ? 'உள்ளது' : 'Included'}</span>
                    ) : (
                      <span className="inline-flex items-center gap-1 font-mono text-[11px] text-faint"><X className="h-3.5 w-3.5" /> {language === 'ta' ? 'இல்லை' : 'Not included'}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-line py-12">
          <SectionHeading
            eyebrow={language === 'ta' ? 'சிக்கல் தீர்வு' : 'Troubleshooting'}
            title={language === 'ta' ? 'ஏதோ தவறிவிட்டதா?' : 'Something not working?'}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {troubleshooting.map((item) => (
              <div key={item.title.en} className="rounded-lg border border-line bg-panel p-4">
                <h3 className="flex items-center gap-2 text-xs font-semibold text-ink">
                  <Monitor className="h-3.5 w-3.5 text-accent" /> {pick(item.title, language)}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">{pick(item.body, language)}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-line py-12">
          <div className="flex flex-wrap items-center gap-3">
            <Terminal className="h-5 w-5 text-accent" />
            <h2 className="text-lg font-semibold text-ink">{language === 'ta' ? 'அடுத்தது' : 'Ready for the next step?'}</h2>
            <div className="ml-auto flex flex-wrap gap-3">
              <button type="button" onClick={() => onNavigate('learn', 'first-program')} className="rounded-lg border border-line bg-panel px-4 py-2 text-sm font-semibold text-ink hover:border-accent/50">
                {language === 'ta' ? 'முதல் நிரல்' : 'Your first program'}
              </button>
              <button type="button" onClick={() => onNavigate('ide')} className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-ink hover:opacity-90">
                {language === 'ta' ? 'IDE வழிகாட்டி' : 'IDE guide'}
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
