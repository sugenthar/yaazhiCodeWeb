import React from 'react';
import { useLanguage, pick } from '../../context/LanguageContext';
import { PageHeader, SectionHeading, StatusPill, ActionLink } from '../../components/common/Ui';
import { Card } from '../../components/common/Card';
import { Breadcrumb } from '../../components/navigation/Breadcrumb';
import { Badge } from '../../components/common/Badge';
import { PROJECT_FACTS, LINKS, STATUS, BRAND } from '../../content/siteData';
import { Target, BookOpen, Compass } from 'lucide-react';
import { GithubIcon } from '../../components/common/Icons';

const L = (en, ta) => ({ en, ta });

const goals = [
  {
    icon: Target,
    title: L('A first language for code', 'குறியீட்டிற்கு முதல் மொழி'),
    body: L(
      'A Tamil speaker should be able to meet programming ideas without learning another vocabulary first.',
      'தமிழ் பேசும் ஒருவர் நிரலாக்கக் கருத்துகளை முதலில் வேறு மொழிச் சொற்களால் கற்க வேண்டியதில்லை.',
    ),
  },
  {
    icon: BookOpen,
    title: L('Clear lessons and references', 'தெளிவான பாடங்களும் குறிப்புகளும்'),
    body: L(
      'Lessons, examples, keyword lists, and module names use the words that appear in real .yaazhi programs.',
      'பாடங்கள், எடுத்துக்காட்டுகள், சொல் பட்டியல்கள், தொகுப்புப் பெயர்கள் உண்மையான .yaazhi நிரல்களில் உள்ள சொற்களைப் பயன்படுத்துகின்றன.',
    ),
  },
  {
    icon: Compass,
    title: L('Honest scope', 'நேர்மையான எல்லை'),
    body: L(
      'Available capabilities and future possibilities are presented separately. Nothing here is dated or promised.',
      'கிடைக்கும் திறன்களும் எதிர்கால சாத்தியங்களும் தனித்தனியாகக் காட்டப்படுகின்றன. எதற்கும் தேதி கூறப்படுவதில்லை.',
    ),
  },
];

export function AboutPage({ onNavigate }) {
  const { language, t } = useLanguage();

  const facts = [
    [L('Version', 'பதிப்பு'), PROJECT_FACTS.version],
    [L('Source file', 'மூலக் கோப்பு'), PROJECT_FACTS.sourceExtension],
    [L('Keywords', 'திறவுச்சொற்கள்'), String(PROJECT_FACTS.keywordCount)],
    [L('Built-in modules', 'உள்ளமைந்த தொகுப்புகள்'), String(PROJECT_FACTS.builtinModuleCount)],
    [L('Verified platform', 'சரிபார்க்கப்பட்ட தளம்'), pick(PROJECT_FACTS.verifiedPlatform, language)],
    [L('Licences', 'உரிமங்கள்'), 'MIT · Apache-2.0'],
  ];

  return (
    <>
      <PageHeader
        eyebrow={language === 'ta' ? 'YaazhiCode பற்றி' : 'About YaazhiCode'}
        title={pick(BRAND.heroTitle, language)}
        lead={pick(BRAND.message, language)}
        badge={<StatusPill status={STATUS.available} />}
      />

      <div className="shell py-8 sm:py-12 lg:py-16">
        <Breadcrumb items={[{ label: t('nav_about', 'About') }]} onNavigate={onNavigate} />

        <section className="py-4 sm:py-8">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                eyebrow={language === 'ta' ? 'நோக்கம்' : 'Mission'}
                title={language === 'ta' ? 'தொழில்நுட்பம் உங்கள் மொழியில்' : 'Technology in your language'}
              />
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                {language === 'ta'
                  ? 'YaazhiCode ஒரு தமிழ்-அடிப்படையிலான பொது நோக்க நிரலாக்க மொழி. அதன் திறவுச்சொற்கள், ஆவணங்கள், எடுத்துக்காட்டுகள், நோயறிதிகள் அனைத்தும் தமிழ் மையத்தைக் கொண்டுள்ளன.'
                  : 'YaazhiCode is a Tamil-based, general-purpose programming language. Its keywords, documentation, examples, and diagnostics all reflect that Tamil foundation.'}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                {language === 'ta'
                  ? 'நீங்கள் .yaazhi கோப்பை எழுதி, அதிகாரப்பூர்வ கட்டளை வரி அல்லது IDE மூலம் உள்ளூரில் இயக்கலாம். தற்போதைய வெளியீடு 0.1.0.'
                  : 'You write a .yaazhi file and run it locally with the official command line or IDE. The current release is 0.1.0.'}
              </p>
            </div>
            <Card hover={false} className="bg-panel">
              <p className="font-tamil text-2xl sm:text-3xl font-bold leading-snug text-ink">
                {pick(BRAND.message, language)}
              </p>
              <p className="mt-4 font-mono text-xs text-faint">YaazhiCode · {PROJECT_FACTS.sourceExtension} · v{PROJECT_FACTS.version}</p>
            </Card>
          </div>
        </section>

        <section className="border-t border-line py-6 sm:py-12">
          <SectionHeading
            eyebrow={language === 'ta' ? 'இலக்குகள்' : 'Goals'}
            title={language === 'ta' ? 'ஏன் இந்த மொழி?' : 'Why this language exists'}
          />
          <div className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {goals.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title.en}>
                  <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                  <h3 className="mt-4 text-sm sm:text-base font-semibold text-ink">{pick(item.title, language)}</h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted">{pick(item.body, language)}</p>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="border-t border-line py-6 sm:py-12">
          <div className="grid gap-6 sm:gap-8 grid-cols-1 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow={language === 'ta' ? 'உண்மைகள்' : 'Project facts'}
                title={language === 'ta' ? 'தற்போதைய நிலை' : 'Current release'}
              />
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
                {facts.map(([label, value]) => (
                  <div key={label.en} className="rounded-lg border border-line bg-panel p-4 sm:p-5">
                    <p className="font-mono text-xs uppercase tracking-wide text-faint">{pick(label, language)}</p>
                    <p className="mt-1 font-mono text-sm sm:text-base font-semibold text-ink">{value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionHeading
                eyebrow={language === 'ta' ? 'பொது களஞ்சியம்' : 'Public repository'}
                title={language === 'ta' ? 'மூலத்தையும் ஆவணங்களையும் காண்க' : 'Find the source and guides'}
              />
              <p className="text-sm leading-relaxed text-muted sm:text-base">
                {language === 'ta'
                  ? 'மொழி, IDE, ஆவணங்கள், எடுத்துக்காட்டுகள் பொதுவில் உள்ளன. மொழி MIT உரிமையையும் IDE Apache-2.0 உரிமையையும் கொண்டது.'
                  : 'The language, IDE, documentation, and examples are public. The language uses the MIT licence and the IDE uses Apache-2.0.'}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge variant="outline">MIT · {language === 'ta' ? 'மொழி' : 'Language'}</Badge>
                <Badge variant="outline">Apache-2.0 · IDE</Badge>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <ActionLink href={LINKS.repository} variant="solid"><GithubIcon className="h-4 w-4" /> {t('github', 'GitHub')}</ActionLink>
                <ActionLink href={LINKS.npmLanguage} variant="outline">{language === 'ta' ? 'மொழித் தொகுப்பு' : 'Language package'}</ActionLink>
                <ActionLink href={LINKS.npmIde} variant="outline">{language === 'ta' ? 'IDE தொகுப்பு' : 'IDE package'}</ActionLink>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-line py-6 sm:py-12">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 rounded-xl border border-line bg-panel p-4 sm:p-6">
            <div className="flex items-center gap-3">
              <Compass className="h-5 w-5 shrink-0 text-accent" />
              <h2 className="text-lg sm:text-xl font-semibold text-ink">{language === 'ta' ? 'இப்போது தொடங்குங்கள்' : 'Begin today'}</h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button type="button" onClick={() => onNavigate('install')} className="w-full sm:w-auto rounded-lg bg-accent px-4 py-2 sm:px-5 sm:py-2.5 text-sm font-semibold text-accent-ink hover:opacity-90 min-h-[44px]">
                {t('view_install', 'View install guide')}
              </button>
              <button type="button" onClick={() => onNavigate('learn', 'introduction')} className="w-full sm:w-auto rounded-lg border border-line bg-panel px-4 py-2 sm:px-5 sm:py-2.5 text-sm font-semibold text-ink hover:border-accent/50 min-h-[44px]">
                {language === 'ta' ? 'கற்கத் தொடங்கு' : 'Start learning'}
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
