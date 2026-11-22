import React from 'react';
import { useLanguage, pick } from '../../context/LanguageContext';
import { CodeBlock } from '../../components/code/CodeBlock';
import { StatusPill, Eyebrow } from '../../components/common/Ui';
import { BrandLogo } from '../../components/common/BrandLogo';
import { Badge } from '../../components/common/Badge';
import { BRAND, SERVER_CODE, SERVER_RESPONSE, OUTPUT_SERVER, PROJECT_FACTS, STATUS } from '../../content/siteData';
import { ArrowRight, Terminal, Sparkles, Blocks, BookOpen, FolderTree, Monitor, FileText } from 'lucide-react';

const L = (en, ta) => ({ en, ta });

const whyPoints = [
  {
    icon: Sparkles,
    title: L('Think in Tamil from line one', 'முதல் வரியிலிருந்தே தமிழில் சிந்திக்க'),
    body: L(
      'Tamil keywords let you focus on the idea behind a program instead of translating words before you begin.',
      'தமிழ்ச் சொற்கள், நிரலின் கருத்தில் கவனம் செலுத்த உதவுகின்றன; தொடங்கும் முன் சொற்களை மொழிபெயர்க்கத் தேவையில்லை.',
    ),
  },
  {
    icon: Blocks,
    title: L('Learn the core ideas', 'அடிப்படைக் கருத்துகளைக் கற்க'),
    body: L(
      'Values, conditions, loops, functions, lists, objects, modules, and errors are all part of the lessons.',
      'மதிப்புகள், நிபந்தனைகள், சுழற்சிகள், செயல்கள், பட்டியல்கள், பொருள்கள், தொகுப்புகள், பிழைகள் ஆகியவை பாடங்களில் உள்ளன.',
    ),
  },
  {
    icon: BookOpen,
    title: L('Learn with real tools', 'உண்மையான கருவிகளுடன் கற்க'),
    body: L(
      'The official command line, IDE, documentation, and example programs support the whole learning path.',
      'அதிகாரப்பூர்வ கட்டளை வரி, IDE, ஆவணங்கள், எடுத்துக்காட்டு நிரல்கள் முழு கற்றல் பாதையையும் ஆதரிக்கின்றன.',
    ),
  },
];

const concepts = [
  ['மாறிகள்', 'Variables'],
  ['தரவு வகைகள்', 'Data types'],
  ['இயக்குகள்', 'Operators'],
  ['நிபந்தனைகள்', 'Conditions'],
  ['சுழற்சிகள்', 'Loops'],
  ['செயல்கள்', 'Functions'],
  ['பட்டியல்கள்', 'Arrays'],
  ['பொருள்கள்', 'Objects'],
  ['தொகுப்புகள்', 'Modules'],
  ['பிழை கையாளுதல்', 'Error handling'],
  ['கோப்புகள்', 'Files'],
];

const buildItems = [
  {
    icon: FileText,
    title: L('Small text programs', 'சிறு உரை நிரல்கள்'),
    body: L('Greetings, prompts, calculations, and result checks.', 'வாழ்த்துகள், கேள்விகள், கணக்குகள், முடிவு சரிபார்ப்புகள்.'),
  },
  {
    icon: FolderTree,
    title: L('Local file tools', 'உள்ளூர் கோப்பு கருவிகள்'),
    body: L('Read, write, append, and organise local text files.', 'உள்ளூர் உரைக் கோப்புகளைப் படிக்க, எழுத, சேர்க்க, ஒழுங்கமைக்க.'),
  },
  {
    icon: Monitor,
    title: L('Local web apps', 'உள்ளூர் வலைப் பயன்பாடுகள்'),
    body: L('Loopback HTTP and HTTPS services with routes.', 'வழிகளுடன் கூடிய loopback HTTP, HTTPS சேவைகள்.'),
  },
];

export function HomePage({ onNavigate }) {
  const { language, t } = useLanguage();

  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="subtle-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="shell relative grid gap-8 sm:gap-12 py-10 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-20 lg:gap-12 xl:gap-16">
          <div className="flex flex-col gap-5 sm:gap-6 min-w-0">
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <BrandLogo className="h-9 w-9 sm:h-12 sm:w-12" />
              <StatusPill status={STATUS.available} />
              <Badge variant="accent">v{PROJECT_FACTS.version}</Badge>
            </div>
            <h1 className="mt-2 font-tamil text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl">
              {pick(BRAND.heroTitle, language)}
            </h1>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted sm:text-base lg:text-lg">
              {pick(BRAND.heroLead, language)}
            </p>
            <p className="mt-2 font-tamil text-sm font-medium text-accent">
              {pick(BRAND.message, language)}
            </p>

            <div className="mt-4 flex flex-col sm:flex-row sm:flex-wrap gap-3 w-full">
              <button
                type="button"
                onClick={() => onNavigate('learn', 'introduction')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-accent-ink transition-opacity hover:opacity-90 min-h-[44px]"
              >
                {t('nav_get_started', 'Get Started')} <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate('install')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-line bg-panel px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent/50 min-h-[44px]"
              >
                {t('cta_install', 'Install YaazhiCode')}
              </button>
              <button
                type="button"
                onClick={() => onNavigate('language')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-line bg-panel px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent/50 min-h-[44px]"
              >
                <BookOpen className="h-4 w-4" aria-hidden="true" /> {t('cta_explore_language', 'Explore Language')}
              </button>
            </div>

            <p className="mt-4 font-mono text-xs text-faint">
              {PROJECT_FACTS.sourceExtension} · {PROJECT_FACTS.keywordCount} {language === 'ta' ? 'திறவுச்சொற்கள்' : 'keywords'} · {PROJECT_FACTS.builtinModuleCount} {language === 'ta' ? 'தொகுப்புகள்' : 'built-in modules'}
            </p>
          </div>

          <div className="min-w-0 space-y-4">
            <div className="overflow-hidden rounded-xl border border-line bg-panel shadow-sm">
              <div className="flex items-center gap-2 border-b border-line bg-raised px-4 py-2.5 sm:px-6 sm:py-3">
                <BrandLogo className="h-4 w-4 sm:h-5 sm:w-5" decorative />
                <span className="font-mono text-xs sm:text-sm font-medium text-ink">சேவகன்.yaazhi</span>
                <span className="ml-auto font-mono text-xs text-faint">
                  {language === 'ta' ? 'சேவகன் முன்னோட்டம்' : 'Server preview'}
                </span>
              </div>
              <CodeBlock code={SERVER_CODE} language="tamil" filename="சேவகன்.yaazhi" showCopy={false} className="my-0 rounded-none border-0" />
              <div className="border-t border-line bg-app px-4 py-3 sm:px-6 sm:py-4">
                <div className="mb-1 flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-faint">
                  <Terminal className="h-3 w-3" aria-hidden="true" /> yaazhicode run
                </div>
                <pre className="whitespace-pre-wrap font-mono text-xs sm:text-sm leading-5 sm:leading-6 text-muted overflow-x-auto">{OUTPUT_SERVER}</pre>
                <div className="mt-2 flex items-center gap-2 border-t border-line pt-2 font-mono text-xs uppercase tracking-wide text-faint">
                  {language === 'ta' ? 'பதில்' : 'Response'} <span className="text-accent">GET /</span>
                </div>
                <pre className="whitespace-pre-wrap font-mono text-xs sm:text-sm leading-5 sm:leading-6 text-ink overflow-x-auto">{SERVER_RESPONSE}</pre>
              </div>
            </div>
            <p className="text-center text-xs text-faint sm:text-sm">
              {language === 'ta'
                ? 'இந்த நிரல் அதிகாரப்பூர்வ YaazhiCode HTTP உதாரணத்திலிருந்து எடுக்கப்பட்டது.'
                : 'This program follows the official YaazhiCode HTTP example.'}
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-panel">
        <div className="shell grid gap-4 py-6 sm:py-10 sm:grid-cols-3 lg:grid-cols-3">
          {[
            { step: '01', label: L('Install the CLI', 'கட்டளை வரியை நிறுவு'), code: '# install guide →' },
            { step: '02', label: L('Write a .yaazhi file', '.yaazhi கோப்பை எழுது'), code: 'சேவகன்.yaazhi' },
            { step: '03', label: L('Run it locally', 'உள்ளூரில் இயக்கு'), code: 'yaazhicode run ".\\சேவகன்.yaazhi"' },
          ].map((item) => (
            <div key={item.step} className="flex items-start gap-3 sm:gap-4">
              <span className="font-mono text-xs sm:text-sm font-semibold text-accent">{item.step}</span>
              <div className="min-w-0">
                <p className="text-xs sm:text-sm font-medium text-ink">{pick(item.label, language)}</p>
                <code className="mt-1 block truncate font-mono text-xs sm:text-sm text-muted">{item.code}</code>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="shell py-12 sm:py-16 lg:py-20">
        <div className="mb-8 sm:mb-12 max-w-2xl">
          <Eyebrow>{language === 'ta' ? 'YaazhiCode என்றால் என்ன?' : 'What is YaazhiCode?'}</Eyebrow>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            {language === 'ta' ? 'தமிழில் எழுதப்படும் நிரலாக்க மொழி' : 'A programming language written in Tamil'}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            {language === 'ta'
              ? 'YaazhiCode என்பது தமிழ்ச் சொற்களைப் பயன்படுத்தி நிரல்கள் எழுதும் ஒரு பொது நோக்க மொழி. .yaazhi கோப்புகளை உருவாக்கி, அதிகாரப்பூர்வ கருவிகளால் உள்ளூரில் இயக்கலாம்.'
              : 'YaazhiCode is a general-purpose language for writing programs with Tamil words. You create .yaazhi files and run them locally with the official tools.'}
          </p>
        </div>
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {whyPoints.map((point) => {
            const Icon = point.icon;
            return (
              <div key={point.title.en} className="rounded-xl border border-line bg-panel p-5 sm:p-6">
                <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                <h3 className="mt-4 text-sm sm:text-base font-semibold text-ink">{pick(point.title, language)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{pick(point.body, language)}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-y border-line bg-panel">
        <div className="shell grid gap-6 sm:gap-10 py-12 sm:py-16 lg:py-20 lg:grid-cols-2">
          <div>
            <Eyebrow>{language === 'ta' ? 'முதல் சேவகன்' : 'Your first server'}</Eyebrow>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              {language === 'ta' ? 'ஒரு செய்தியை அனுப்புங்கள்' : 'Send one message from a server'}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {language === 'ta'
                ? 'மேலே உள்ள முன்னோட்டம் உள்ளூர் HTTP சேவகன். இறக்குமதி வலை தொகுதியிலிருந்து சேவகனைக் கொண்டுவரும்; பெறு / வழியைச் சேர்க்கும்; உரை_அனுப்பு "Yaazhicode running!" என்ற பதிலை அனுப்பும்.'
                : 'The preview above is a local HTTP server. இறக்குமதி brings சேவகன் from the வலை module, பெறு adds the / route, and உரை_அனுப்பு sends the response "Yaazhicode running!".'}
            </p>
            <ul className="mt-5 space-y-2 text-sm text-muted" role="list">
              {(language === 'ta'
                ? ['இறக்குமதி — வலை தொகுதியிலிருந்து சேவகனைக் கொண்டுவரும்.', 'பெறு — / GET வழியைச் சேர்க்கும்.', 'உரை_அனுப்பு — "Yaazhicode running!" பதிலை அனுப்பும்.']
                : ['இறக்குமதி — bring சேவகன் from the வலை module.', 'பெறு — add a GET route for /.', 'உரை_அனுப்பு — send "Yaazhicode running!" as the response.']
              ).map((line) => (
                <li key={line} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Eyebrow>{language === 'ta' ? 'கற்கும் கருத்துகள்' : 'Concepts you will learn'}</Eyebrow>
            <div className="mt-4 flex flex-wrap gap-2">
              {concepts.map(([ta, en]) => (
                <span key={ta} className={`${language === 'ta' ? 'font-tamil' : ''} rounded-lg border border-line bg-app px-3 py-2 text-xs text-muted`}>
                  {language === 'ta' ? ta : en}
                </span>
              ))}
            </div>
            <p className="mt-5 text-xs leading-relaxed text-faint">
              {language === 'ta'
                ? 'ஒவ்வொரு பாடத்திலும் எளிய விளக்கம், தமிழ் விளக்கம், தொடரியல், உண்மையான எடுத்துக்காட்டு, எதிர்பார்க்கும் வெளியீடு, பயன்பாடு, பொதுவான தவறுகள் உள்ளன.'
                : 'Each lesson includes a simple explanation, Tamil explanation, syntax, a real example, expected output, practical use, and common mistakes.'}
            </p>
          </div>
        </div>
      </section>

      <section className="shell py-12 sm:py-16 lg:py-20">
        <div className="mb-8 sm:mb-12 max-w-2xl">
          <Eyebrow>{language === 'ta' ? 'அதிகாரப்பூர்வ IDE' : 'Official IDE'}</Eyebrow>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            {language === 'ta' ? 'எழுத்து முதல் வெளியீடு வரை' : 'From writing code to seeing output'}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {language === 'ta'
              ? 'YaazhiCode IDE திட்டங்களை உருவாக்கி, .yaazhi கோப்புகளை எழுதி, உள்ளூரில் இயக்கி, வெளியீட்டையும் நோயறிதிகளையும் காட்டுகிறது.'
              : 'The YaazhiCode IDE creates projects, edits .yaazhi files, runs them locally, and shows output and diagnostics.'}
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
          {[
            [L('Create or open a project', 'திட்டத்தை உருவாக்கு அல்லது திற'), ''],
            [L('Create files in Explorer', 'Explorer-ல் கோப்புகளை உருவாக்கு'), ''],
            [L('Write and run Tamil code', 'தமிழ் குறியீட்டை எழுதி இயக்கு'), ''],
            [L('View output and diagnostics', 'வெளியீட்டையும் நோயறிதிகளையும் காண்'), ''],
          ].map(([title]) => (
            <div key={title.en} className="flex items-center gap-3 rounded-lg border border-line bg-panel p-4 sm:p-5">
              <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
              <span className="text-sm sm:text-base text-ink">{pick(title, language)}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-panel">
        <div className="shell grid gap-6 sm:gap-10 py-12 sm:py-16 lg:py-20 lg:grid-cols-2">
          <div>
            <Eyebrow>{language === 'ta' ? 'இன்று உருவாக்கலாம்' : 'What you can build today'}</Eyebrow>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              {language === 'ta' ? 'உள்ளூரில் இயங்கும் பயன்பாடுகள்' : 'Programs that run on your machine'}
            </h2>
            <div className="mt-6 space-y-4">
              {buildItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title.en} className="flex items-start gap-3">
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    <div>
                      <h3 className="text-sm sm:text-base font-semibold text-ink">{pick(item.title, language)}</h3>
                      <p className="mt-1 text-xs sm:text-sm leading-relaxed text-muted">{pick(item.body, language)}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="rounded-xl border border-line bg-app p-5 sm:p-6">
            <Eyebrow>{language === 'ta' ? 'அடுத்தது' : 'What is next'}</Eyebrow>
            <h2 className="mt-2 text-xl font-semibold text-ink">
              {language === 'ta' ? 'வெளியிடப்பட்டது என்ன? எது சாத்தியம்?' : 'What is available and what is possible?'}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {language === 'ta'
                ? 'மொழி, கட்டளை வரி, IDE, நிலையான நூலகம், உள்ளூர் வலைத் தொகுதிகள் இப்போது கிடைக்கின்றன. மேலும் தமிழ் அம்சங்கள், 2D கேம்கள், 3D கேம்கள், அனிமேஷன் ஆகியவை எதிர்காலப் பக்கத்தில் சாத்தியங்களாக மட்டும் காட்டப்படுகின்றன.'
                : 'The language, command line, IDE, standard library, and local web modules are available now. More Tamil features, 2D games, 3D games, and animation appear on the Future page as possibilities only.'}
            </p>
            <p className="mt-4 font-mono text-xs text-faint">
              {language === 'ta' ? 'தேதிகளோ உறுதியளிப்புகளோ இல்லை.' : 'No dates or availability promises.'}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
