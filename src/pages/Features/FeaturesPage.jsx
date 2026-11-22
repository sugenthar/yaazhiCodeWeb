import React from 'react';
import { useLanguage, pick } from '../../context/LanguageContext';
import { PageHeader, SectionHeading, StatusPill } from '../../components/common/Ui';
import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';
import { Breadcrumb } from '../../components/navigation/Breadcrumb';
import { advantages, applications, ecosystem, boundaries } from '../../content/featuresData';
import { ArrowRight, Check, Minus, Package, Layers } from 'lucide-react';

export function FeaturesPage({ onNavigate }) {
  const { language, t } = useLanguage();

  return (
    <>
      <PageHeader
        eyebrow={language === 'ta' ? 'அம்சங்கள்' : 'Features'}
        title={language === 'ta' ? 'YaazhiCode வழங்குவது' : 'What YaazhiCode offers'}
        lead={language === 'ta'
          ? 'இங்குள்ள ஒவ்வொரு அம்சமும் தற்போதைய 0.1.0 வெளியீட்டில் ஆவணப்படுத்தப்பட்டு சரிபார்க்கப்பட்டது.'
          : 'Everything here is documented and verified in the current 0.1.0 release.'}
        badge={<StatusPill status="available" />}
      />

      <div className="shell py-10">
        <Breadcrumb items={[{ label: t('nav_features', 'Features') }]} onNavigate={onNavigate} />

        <section className="py-8">
          <SectionHeading
            eyebrow={language === 'ta' ? 'நன்மைகள்' : 'Advantages'}
            title={language === 'ta' ? 'தமிழ்-முதல் வடிவமைப்பு' : 'Tamil-first by design'}
            description={language === 'ta'
              ? 'தொடரியல், கருவிகள், ஆவணங்கள் — அனைத்தும் ஒரே தமிழ் அடிப்படையைக் கொண்டுள்ளன.'
              : 'Syntax, tools, diagnostics, and docs all share one Tamil foundation.'}
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((item) => (
              <Card key={item.id}>
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-sm font-semibold text-ink">{pick(item.title, language)}</h3>
                  <StatusPill status={item.status} className="shrink-0" />
                </div>
                <p className="mt-3 text-xs leading-relaxed text-muted">{pick(item.body, language)}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="border-t border-line py-12">
          <SectionHeading
            eyebrow={language === 'ta' ? 'பயன்பாடுகள்' : 'Applications'}
            title={language === 'ta' ? 'எங்கு பயன்படுத்தலாம்' : 'Where it fits today'}
            description={language === 'ta'
              ? 'கற்றல், உள்ளூர் கருவிகள், உள்ளூர் வலைச் சேவைகள், உரை நிரல்கள் — அனைத்தும் இன்று சாத்தியம்.'
              : 'Learning, local tools, local web services, and text-based programs are possible today.'}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {applications.map((item) => (
              <Card key={item.id} hover={false}>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-sm font-semibold text-ink">{pick(item.title, language)}</h3>
                  <StatusPill status={item.status} />
                </div>
                <p className="mt-3 flex items-start gap-2 text-xs leading-relaxed text-muted">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-positive" aria-hidden="true" />
                  {pick(item.now, language)}
                </p>
              </Card>
            ))}
          </div>
        </section>

        <section className="border-t border-line py-12">
          <SectionHeading
            eyebrow={language === 'ta' ? 'தொகுப்புகள்' : 'Packages'}
            title={language === 'ta' ? 'இரண்டு அதிகாரப்பூர்வ தொகுப்புகள்' : 'Two official packages'}
            description={language === 'ta'
              ? 'ஒரு மொழித் தொகுப்பும் ஒரு எடிட்டர் தொகுப்பும் உள்ளன.'
              : 'One language package and one editor package.'}
          />
          <div className="grid gap-5 md:grid-cols-2">
            {ecosystem.map((item) => (
              <Card key={item.name}>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <code className="flex items-center gap-2 font-mono text-base font-semibold text-ink">
                    <Package className="h-4 w-4 text-accent" /> {item.name}
                  </code>
                  <Badge variant="outline">v{item.version}</Badge>
                </div>
                <p className="mt-2 font-mono text-xs text-accent">{pick(item.role, language)}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{pick(item.detail, language)}</p>
                <p className="mt-4 font-mono text-[11px] text-faint">{item.license}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="border-t border-line py-12">
          <SectionHeading
            eyebrow={language === 'ta' ? 'வரம்புகள்' : 'Boundaries'}
            title={language === 'ta' ? 'தற்போது இல்லாதவை' : 'What is not included'}
            description={language === 'ta'
              ? 'தவறான எதிர்பார்ப்புகளைத் தவிர்க்க இந்த வரம்புகள் ஆவணப்படுத்தப்பட்டுள்ளன.'
              : 'These limits are documented to avoid false expectations.'}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {boundaries.map((item) => (
              <div key={item.title.en} className="flex gap-3 rounded-lg border border-line bg-panel p-4">
                <Layers className="mt-0.5 h-4 w-4 shrink-0 text-caution" aria-hidden="true" />
                <div>
                  <h3 className="text-xs font-semibold text-ink">{pick(item.title, language)}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted">{pick(item.body, language)}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-line py-12">
          <div className="flex flex-wrap items-center gap-4 rounded-xl border border-line bg-panel p-6">
            <Check className="h-5 w-5 text-accent" aria-hidden="true" />
            <div>
              <h2 className="text-lg font-semibold text-ink">
                {language === 'ta' ? 'அம்சங்களைப் பயன்படுத்தத் தொடங்குங்கள்' : 'Put the features to work'}
              </h2>
              <p className="mt-1 text-xs text-muted">
                {language === 'ta' ? 'நிறுவி, உண்மையான எடுத்துக்காட்டுகளுடன் பயிற்சி செய்யுங்கள்.' : 'Install, then practise with verified examples.'}
              </p>
            </div>
            <div className="ml-auto flex flex-wrap gap-3">
              <button type="button" onClick={() => onNavigate('install')} className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-ink hover:opacity-90">
                {language === 'ta' ? 'நிறுவுக' : 'Install'}
              </button>
              <button type="button" onClick={() => onNavigate('examples')} className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-app px-4 py-2 text-sm font-semibold text-ink hover:border-accent/50">
                {language === 'ta' ? 'எடுத்துக்காட்டுகள்' : 'Examples'} <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
