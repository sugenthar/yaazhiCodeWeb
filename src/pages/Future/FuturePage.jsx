import React, { useEffect } from 'react';
import { useLanguage, pick } from '../../context/LanguageContext';
import { PageHeader, SectionHeading, StatusPill } from '../../components/common/Ui';
import { Breadcrumb } from '../../components/navigation/Breadcrumb';
import { Card } from '../../components/common/Card';
import { futureIntro, availableNow, futurePhases, creativeVision } from '../../content/futureData';
import { STATUS } from '../../content/siteData';
import { Check, Lightbulb, AlertTriangle, Sparkles } from 'lucide-react';

export function FuturePage({ initialPhaseId, onNavigate }) {
  const { language, t } = useLanguage();
  const linkedPhase = futurePhases.find(phase => phase.id === initialPhaseId);

  useEffect(() => {
    if (!linkedPhase) return undefined;
    const frame = window.requestAnimationFrame(() => {
      document.getElementById(linkedPhase.id)?.scrollIntoView({ block: 'start' });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [linkedPhase]);

  return (
    <>
      <PageHeader
        eyebrow={language === 'ta' ? 'எதிர்காலம்' : 'Future'}
        title={language === 'ta' ? 'இன்று உள்ளது, எதிர்கால சாத்தியம்' : 'Available now, possible later'}
        lead={pick(futureIntro.body, language)}
        badge={<StatusPill status={STATUS.future} />}
      />

      <div className="shell py-10">
        <Breadcrumb items={[{ label: t('nav_future', 'Future') }]} onNavigate={onNavigate} />

        <div className="mb-10 rounded-xl border border-accent/30 bg-accent-soft p-5">
          <h2 className="flex items-center gap-2 text-sm font-semibold text-ink">
            <Lightbulb className="h-4 w-4 text-accent" aria-hidden="true" />
            {pick(futureIntro.heading, language)}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">{pick(futureIntro.body, language)}</p>
          <p className="mt-2 font-mono text-[11px] text-faint">
            {language === 'ta' ? 'தேதிகள் இல்லை. உறுதியளிப்புகள் இல்லை.' : 'No dates. No availability promises.'}
          </p>
        </div>

        <section>
          <SectionHeading
            eyebrow={language === 'ta' ? 'இப்போது கிடைக்கிறது' : 'Available now'}
            title={language === 'ta' ? '0.1.0-ல் உள்ளது' : 'What exists in 0.1.0'}
            description={language === 'ta'
              ? 'இவை வெளியிடப்பட்ட மொழியின் பகுதிகள்; எதிர்கால யோசனைகள் அல்ல.'
              : 'These are parts of the released language, not future ideas.'}
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {availableNow.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 rounded-lg border border-line bg-panel p-4">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-positive" aria-hidden="true" />
                <span className="text-sm text-ink">{pick(item, language)}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => onNavigate('features')}
              className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-ink hover:opacity-90"
            >
              {language === 'ta' ? 'அம்சங்கள்' : 'View features'}
            </button>
            <button
              type="button"
              onClick={() => onNavigate('install')}
              className="rounded-lg border border-line bg-app px-4 py-2 text-sm font-semibold text-ink hover:border-accent/50"
            >
              {language === 'ta' ? 'நிறுவுக' : 'Install'}
            </button>
          </div>
        </section>

        <section className="mt-12 space-y-8 border-t border-line pt-12">
          <SectionHeading
            eyebrow={language === 'ta' ? 'எதிர்கால சாத்தியங்கள்' : 'Future possibilities'}
            title={language === 'ta' ? 'சாத்தியங்கள் மட்டும்' : 'Possibilities only'}
            description={language === 'ta'
              ? 'கீழுள்ள ஒவ்வொரு யோசனையும் எதிர்கால திசையைக் காட்டுகிறது; இது கிடைக்கும் திறன் அல்ல.'
              : 'Each idea below shows a possible direction. None of it is an available capability.'}
          />
          {futurePhases.map((phase) => (
            <div key={phase.id} id={phase.id} className="scroll-mt-24 rounded-xl border border-line bg-panel p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <span className="font-mono text-3xl font-bold text-accent/30">{phase.number}</span>
                  <div>
                    <h2 className="text-xl font-semibold tracking-tight text-ink">{pick(phase.title, language)}</h2>
                    <p className="mt-1 text-sm text-muted">{pick(phase.description, language)}</p>
                  </div>
                </div>
                <StatusPill status={phase.status} />
              </div>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {phase.items.map((item, idx) => (
                  <li key={idx} className="rounded-lg border border-line bg-app p-4">
                    <h3 className="text-sm font-medium text-ink">{pick(item.title, language)}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted">{pick(item.desc, language)}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="mt-12 border-t border-line pt-12">
          <SectionHeading
            eyebrow={language === 'ta' ? 'படைப்பு நோக்கம்' : 'Creative vision'}
            title={language === 'ta' ? 'கேம்கள், காட்சிகள், அனிமேஷன்' : 'Games, graphics, and animation'}
            description={language === 'ta'
              ? 'இவை ஆராய்ச்சி யோசனைகள்; 0.1.0-ல் இதற்கான API இல்லை.'
              : 'These are research ideas. No related APIs exist in 0.1.0.'}
          />
          <div className="grid gap-5 md:grid-cols-2">
            {creativeVision.map((vision) => (
              <Card key={vision.id} hover={false}>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-accent" aria-hidden="true" />
                  <h3 className="text-base font-semibold text-ink">{pick(vision.title, language)}</h3>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-caution">{pick(vision.lead, language)}</p>
                <ul className="mt-4 grid grid-cols-2 gap-2" role="list">
                  {vision.items.map((item) => (
                    <li key={item.en} className="rounded-md border border-line bg-app px-3 py-2 text-xs text-muted">
                      {pick(item, language)}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-caution/40 bg-caution/5 p-5">
            <p className="flex items-center gap-2 text-xs font-semibold text-caution">
              <AlertTriangle className="h-4 w-4" aria-hidden="true" />
              {language === 'ta' ? 'இன்று கிடைக்கவில்லை' : 'Not available today'}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-muted">
              {language === 'ta'
                ? '2D, 3D, கேம்கள், இயற்பியல், ஒளியமைப்பு, கேமரா கட்டுப்பாடு ஆகியவற்றிற்கான குறியீட்டு எடுத்துக்காட்டுகள் இங்கே இல்லை. காரணம் அவை ஆவணப்படுத்தப்பட்ட திறன்கள் அல்ல.'
                : 'There are no code examples for 2D, 3D, games, physics, lighting, or camera control here because they are not documented capabilities.'}
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
