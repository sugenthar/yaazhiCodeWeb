import React, { useEffect, useState, useCallback } from 'react';
import { LanguageProvider, useLanguage, pick } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { pathFor, useRoute } from './router';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { SearchDialog } from './components/common/SearchDialog';
import { HomePage } from './pages/Home/HomePage';
import { AboutPage } from './pages/About/AboutPage';
import { FeaturesPage } from './pages/Features/FeaturesPage';
import { InstallPage } from './pages/Install/InstallPage';
import { LearnPage } from './pages/Learn/LearnPage';
import { LanguagePage } from './pages/Language/LanguagePage';
import { ExamplesPage } from './pages/Examples/ExamplesPage';
import { PlaygroundPage } from './pages/Playground/PlaygroundPage';
import { IDEPage } from './pages/IDE/IDEPage';
import { FuturePage } from './pages/Future/FuturePage';
import { learnContent } from './content/docsData';
import { syntaxExamples } from './content/languageData';
import { examples } from './content/examplesData';
import { futurePhases } from './content/futureData';

const PAGE_META = {
  home: {
    title: { en: 'YaazhiCode — Programming in Tamil.', ta: 'YaazhiCode — தமிழில் நிரலாக்கம்.' },
    description: {
      en: 'YaazhiCode is a Tamil programming language. Learn the language, install the official tools, write .yaazhi programs, and see verified examples.',
      ta: 'YaazhiCode என்பது தமிழ் நிரலாக்க மொழி. மொழியைக் கற்க, அதிகாரப்பூர்வ கருவிகளை நிறுவ, .yaazhi நிரல்கள் எழுத, சரிபார்க்கப்பட்ட எடுத்துக்காட்டுகளைக் காண்க.',
    },
  },
  about: {
    title: { en: 'About — YaazhiCode', ta: 'பற்றி — YaazhiCode' },
    description: {
      en: 'Why YaazhiCode puts Tamil at the centre of programming and what the current release offers.',
      ta: 'YaazhiCode ஏன் தமிழை நிரலாக்கத்தின் மையத்தில் வைக்கிறது, தற்போதைய வெளியீடு என்ன வழங்குகிறது.',
    },
  },
  features: {
    title: { en: 'Features — YaazhiCode', ta: 'அம்சங்கள் — YaazhiCode' },
    description: {
      en: 'Verified YaazhiCode features, applications, packages, and boundaries in release 0.1.0.',
      ta: '0.1.0 வெளியீட்டில் உள்ள YaazhiCode அம்சங்கள், பயன்பாடுகள், தொகுப்புகள், வரம்புகள்.',
    },
  },
  install: {
    title: { en: 'Install — YaazhiCode', ta: 'நிறுவுதல் — YaazhiCode' },
    description: {
      en: 'Install YaazhiCode and the official IDE on Windows, verify the commands, and troubleshoot common setup issues.',
      ta: 'Windows-ல் YaazhiCode, அதிகாரப்பூர்வ IDE ஆகியவற்றை நிறுவி, கட்டளைகளைச் சரிபார்த்து, பொதுவான சிக்கல்களைத் தீர்க்க.',
    },
  },
  learn: {
    title: { en: 'Learn — YaazhiCode', ta: 'கற்க — YaazhiCode' },
    description: {
      en: 'Fourteen lessons covering variables, data types, operators, conditions, loops, functions, collections, modules, files, and more.',
      ta: 'மாறிகள், தரவு வகைகள், இயக்குகள், நிபந்தனைகள், சுழற்சிகள், செயல்கள், தொகுப்புகள், தொகுதிகள், கோப்புகள் உட்பட 14 பாடங்கள்.',
    },
  },
  language: {
    title: { en: 'Language — YaazhiCode', ta: 'மொழி — YaazhiCode' },
    description: {
      en: 'Tamil keywords, operators, built-in module names, syntax rules, and verified YaazhiCode snippets.',
      ta: 'தமிழ் திறவுச்சொற்கள், இயக்குகள், உள்ளமைந்த தொகுதிப் பெயர்கள், தொடரியல் விதிகள், சரிபார்க்கப்பட்ட YaazhiCode குறியீடு.',
    },
  },
  examples: {
    title: { en: 'Examples — YaazhiCode', ta: 'எடுத்துக்காட்டுகள் — YaazhiCode' },
    description: {
      en: 'Verified .yaazhi programs with exact expected output, copy buttons, and local run commands.',
      ta: 'சரிபார்க்கப்பட்ட .yaazhi நிரல்கள், சரியான எதிர்பார்க்கும் வெளியீடு, நகலெடுக்கும் வசதி, உள்ளூர் இயக்க கட்டளைகள்.',
    },
  },
  playground: {
    title: { en: 'Playground — YaazhiCode', ta: 'சோதனைக்களம் — YaazhiCode' },
    description: {
      en: 'Execute YaazhiCode programs live in the browser with real execution, Tamil error diagnostics, preloaded examples, and shareable links.',
      ta: 'உலாவி வழியே நேரடி இயக்க வசதி, தமிழ் தொடரியல் வண்ணங்கள், பிழை திருத்தங்கள், பகிர்வு இணைப்புகளுடன் YaazhiCode-ஐ உடனே இயக்குங்கள்.',
    },
  },
  ide: {
    title: { en: 'IDE — YaazhiCode', ta: 'IDE — YaazhiCode' },
    description: {
      en: 'Official IDE install, project workflow, editor features, shortcuts, and troubleshooting.',
      ta: 'அதிகாரப்பூர்வ IDE நிறுவுதல், திட்ட ஓட்டம், எடிட்டர் அம்சங்கள், விசைக்குறுக்குவழிகள், சிக்கல் தீர்வு.',
    },
  },
  future: {
    title: { en: 'Future — YaazhiCode', ta: 'எதிர்காலம் — YaazhiCode' },
    description: {
      en: 'Available features separated from future possibilities such as more Tamil features, 2D and 3D games, and animation. No dates or promises.',
      ta: 'கிடைக்கும் அம்சங்களும் மேலும் தமிழ் அம்சங்கள், 2D/3D கேம்கள், அனிமேஷன் போன்ற எதிர்கால சாத்தியங்களும் தனித்தனி. தேதிகளோ உறுதியளிப்புகளோ இல்லை.',
    },
  },
};

function AppContent() {
  const [route, go] = useRoute();
  const [searchOpen, setSearchOpen] = useState(false);
  const { language } = useLanguage();

  const navigate = useCallback((page, id = null) => go(page, id), [go]);

  useEffect(() => {
    const onKey = (event) => {
      if ((event.ctrlKey || event.metaKey) && (event.key === 'k' || event.key === 'K')) {
        event.preventDefault();
        setSearchOpen(previous => !previous);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const page = route.notFound ? 'home' : route.page;
  const id = route.notFound ? null : route.id;
  const meta = PAGE_META[page] || PAGE_META.home;

  const detailTitle =
    page === 'learn' ? (id && learnContent[id]?.title) || null :
    page === 'examples' ? examples.find(item => item.id === id)?.title || null :
    page === 'language' ? syntaxExamples.find(item => item.id === id)?.title || null :
    page === 'future' ? futurePhases.find(item => item.id === id)?.title || null :
    null;

  const canonicalId = detailTitle ? id : null;
  const baseTitle = pick(meta.title, language);
  const title = detailTitle ? `${pick(detailTitle, language)} — ${baseTitle}` : baseTitle;
  const description = pick(meta.description, language);

  useEffect(() => {
    document.title = title;

    const setMeta = (selector, attribute, value) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        const match = selector.match(/^(?:meta|link)\[([^="]+)="([^"]+)"\]$/);
        if (match) element.setAttribute(match[1], match[2]);
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, value);
    };

    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);

    const canonicalUrl = `${window.location.origin}${pathFor(page, canonicalId)}`;
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute('content', canonicalUrl);
  }, [page, canonicalId, title, description]);

  return (
    <div className="flex min-h-screen flex-col bg-app text-ink">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-sm focus:text-accent-ink"
      >
        Skip to content
      </a>

      <Navbar activePage={page} onNavigate={navigate} onOpenSearch={() => setSearchOpen(true)} />

      <main className="w-full flex-1" id="main-content">
        {page === 'home' && <HomePage onNavigate={navigate} />}
        {page === 'about' && <AboutPage onNavigate={navigate} />}
        {page === 'features' && <FeaturesPage onNavigate={navigate} />}
        {page === 'install' && <InstallPage onNavigate={navigate} />}
        {page === 'learn' && <LearnPage initialLessonId={id} onNavigate={navigate} />}
        {page === 'language' && <LanguagePage initialSampleId={id} onNavigate={navigate} />}
        {page === 'examples' && <ExamplesPage initialExampleId={id} onNavigate={navigate} />}
        {page === 'playground' && <PlaygroundPage onNavigate={navigate} />}
        {page === 'ide' && <IDEPage onNavigate={navigate} />}
        {page === 'future' && <FuturePage initialPhaseId={id} onNavigate={navigate} />}
      </main>

      <Footer onNavigate={navigate} />

      <SearchDialog isOpen={searchOpen} onClose={() => setSearchOpen(false)} onNavigate={navigate} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}
