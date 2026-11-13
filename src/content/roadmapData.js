export const roadmapPhases = [
  {
    id: 'implemented',
    title: { ta: 'செயல்படுத்தப்பட்டது (v0.1.0)', en: 'Implemented (v0.1.0)' },
    status: 'completed',
    badge: { ta: 'வெளியிடப்பட்டது', en: 'Live on npm' },
    description: {
      ta: 'தற்போது அதிகாரப்பூர்வமாக வெளியிடப்பட்டு முழுமையான சோதனைகளுக்கு உட்படுத்தப்பட்ட அம்சங்கள்.',
      en: 'Currently published and fully verified in public npm releases.'
    },
    items: [
      {
        title: { ta: 'Node.js இயங்குதளம் (@akazhi/node)', en: 'Node.js Runtime (@akazhi/node)' },
        desc: {
          ta: 'வலைச்சேவையகம்(), பாதை வழிப்படுத்தல், நிலைக்கோப்புகள், ஸ்ட்ரீமிங், கோப்பு, சூழல் மற்றும் முறைசார் நிறுத்தம்.',
          en: 'Production HTTP server, dynamic routes, static files, backpressured streaming, file utilities, environment config, and graceful shutdown.'
        }
      },
      {
        title: { ta: 'கட்டளை வரி இடைமுகம் (@akazhi/cli)', en: 'Developer CLI (@akazhi/cli)' },
        desc: {
          ta: 'akazhi dev (--watch உடன்), akazhi build, akazhi start, akazhi check, akazhi doctor, மற்றும் akazhi format.',
          en: 'Full CLI suite with dev (watch mode), ahead-of-time build, start, syntax check, doctor, and source formatting.'
        }
      },
      {
        title: { ta: 'திட்டத் தொடக்கி (create-akazhi)', en: 'Project Scaffolding (create-akazhi)' },
        desc: {
          ta: 'npm create akazhi@latest மூலம் உடனடியாக மாதிரித் திட்டத்தை உருவாக்குதல்.',
          en: 'One-line scaffolding for production-structured Tamil backend servers.'
        }
      },
      {
        title: { ta: 'ஆஃப்லைன் உலாவி பணியிடம் (@akazhi/console)', en: 'Browser Workspace (@akazhi/console)' },
        desc: {
          ta: 'உள்ளூர் 127.0.0.1-ல் இயங்கும் உலாவி முனையம் மற்றும் நேரடி செயலாக்கக் கட்டுப்பாடு.',
          en: 'Offline browser-based interactive terminal and process supervisor on localhost.'
        }
      },
      {
        title: { ta: 'தமிழ் மூல வடிவமைப்பாளர் (@akazhi/formatter)', en: 'Source Formatter (@akazhi/formatter)' },
        desc: {
          ta: 'தமிழ் திறவுச்சொற்கள் மற்றும் $ எண்களை AST முறையில் பாதுகாப்பாக ஒழுங்கமைக்கும் வடிவமைப்பாளர்.',
          en: 'AST-safe source formatter preserving Tamil keywords, numerals, and range literals.'
        }
      },
      {
        title: { ta: 'பிழை மேலாளர் (@akazhi/errors)', en: 'Diagnostic Diagnostics (@akazhi/errors)' },
        desc: {
          ta: 'மூல வரைபடங்களுடன் கூடிய தமிழ் பிழைத் தலைப்புகள் மற்றும் திருத்தும் ஆலோசனைகள்.',
          en: 'Precise source-mapped Tamil error overlays and remediation hints.'
        }
      }
    ]
  },
  {
    id: 'in-progress',
    title: { ta: 'வளர்ச்சியில் உள்ளது (In Progress)', en: 'In Progress' },
    status: 'active',
    badge: { ta: 'செயல்பாட்டில்', en: 'Active Development' },
    description: {
      ta: 'தற்போது கட்டமைப்பு களஞ்சியத்தில் மேம்படுத்தப்பட்டு அடுத்த பதிப்பிற்கு தயாராகும் வசதிகள்.',
      en: 'Features actively being engineered and hardened in the monorepo.'
    },
    items: [
      {
        title: { ta: 'அதிகாரப்பூர்வ ஆவண தளம் (Official Website)', en: 'Official Framework Portal' },
        desc: {
          ta: 'டெவலப்பர்களுக்கான உயர்தர ஆவணங்கள், பயிற்சிகள், மற்றும் ஊடாடும் தேடல் தளம்.',
          en: 'Developer documentation portal, guided tutorials, interactive search, and syntax playground design.'
        }
      },
      {
        title: { ta: 'மேம்பட்ட கண்காணிப்பு முறைமை (Hardened Watch Mode)', en: 'Hardened Watch Engine' },
        desc: {
          ta: 'கோப்பு மாற்றங்களின் போது உலாவி பணியிடத்தை இழக்காமல் விரைவான மறுதொடக்கம்.',
          en: 'Zero-drop process restart under watch mode preserving console terminal sessions.'
        }
      },
      {
        title: { ta: 'தானியங்கி ஆவண சரிபார்ப்பு (Automated Doc Testing)', en: 'Automated Snippet Verification' },
        desc: {
          ta: 'ஆவணங்களில் உள்ள தமிழ் குறியீடுகள் எப்போதும் செயல்படுவதை உறுதி செய்யும் CI சோதனைகள்.',
          en: 'Continuous integration tests ensuring all documentation snippets compile against latest releases.'
        }
      }
    ]
  },
  {
    id: 'planned',
    title: { ta: 'திட்டமிடப்பட்டுள்ளது (Planned)', en: 'Planned (Near-Term)' },
    status: 'planned',
    badge: { ta: 'திட்டம்', en: 'Roadmap Milestone' },
    description: {
      ta: 'அடுத்தடுத்த பதிப்புகளில் சேர்ப்பதற்காக வடிவமைக்கப்பட்ட தொழில்நுட்பக் கூறுகள்.',
      en: 'Architecturally specified components scheduled for subsequent release cycles.'
    },
    items: [
      {
        title: { ta: 'தமிழ் தரவுத்தள இணைப்பிகள் (Database Connectors)', en: 'Tamil Database Integrations' },
        desc: {
          ta: 'PostgreSQL, SQLite, மற்றும் Redis-க்கான தமிழ்-முதல் ORM மற்றும் வினவல் மாதிரிகள்.',
          en: 'Tamil-native query builders and ORM wrappers for PostgreSQL, SQLite, and Redis.'
        }
      },
      {
        title: { ta: 'அங்கீகார அடுக்கு (Authentication Utilities)', en: 'Authentication & Session Guards' },
        desc: {
          ta: 'JWT, அமர்வு மேலாண்மை, மற்றும் கடவுச்சொல் பாதுகாப்புக்கான தமிழ் இடைத்தரகர் வசதிகள்.',
          en: 'Tamil-first middleware for JWT validation, cookies, and secure session management.'
        }
      },
      {
        title: { ta: 'VS Code நீட்டிப்பு (VS Code Extension)', en: 'Official VS Code Extension' },
        desc: {
          ta: '`.tamil` கோப்புகளுக்கு தொடரியல் வண்ணம், தானியங்கி நிரப்பல் (IntelliSense), மற்றும் பிழை சுட்டிக்காட்டல்.',
          en: 'Syntax highlighting, snippets, and diagnostics for .tamil files in VS Code.'
        }
      }
    ]
  },
  {
    id: 'future-vision',
    title: { ta: 'எதிர்கால தொலைநோக்கு (Future Vision)', en: 'Future Vision (Long-Term)' },
    status: 'future',
    badge: { ta: 'தொலைநோக்கு', en: 'Visionary Horizon' },
    description: {
      ta: 'AKAZHI கட்டமைப்பை முழுமையான தமிழ் மென்பொருள் சூழலாக விரிவுபடுத்துவதற்கான நீண்டகால இலக்குகள்.',
      en: 'Long-term ambitions to establish Tamil as a first-class language for full-stack, mobile, desktop, and AI systems.'
    },
    items: [
      {
        title: { ta: 'முழுமையான React சூழல் ஒருங்கிணைப்பு', en: 'React & Frontend Ecosystem' },
        desc: {
          ta: 'வலைப்பக்க பயனர் இடைமுகங்களை தமிழிலேயே உருவாக்க முழுமையான UI கூறுகள் மற்றும் Vite ஒருங்கிணைப்பு.',
          en: 'Future official integration allowing Tamil-native frontend component development.'
        }
      },
      {
        title: { ta: 'டெஸ்க்டாப் & மொபைல் பயன்பாடுகள்', en: 'Desktop & Mobile Applications' },
        desc: {
          ta: 'Android, iOS, மற்றும் கணினி செயலிகளைத் தமிழிலேயே உருவாக்கும் கிராஸ்-பிளாட்ஃபார்ம் கட்டமைப்பு.',
          en: 'Extending AKAZHI abstractions to native mobile and desktop applications.'
        }
      },
      {
        title: { ta: 'விளையாட்டு & செயற்கை நுண்ணறிவு (Games & AI)', en: 'Game Dev & AI Integrations' },
        desc: {
          ta: '2D கேம் எஞ்சின்கள் மற்றும் LLM செயற்கை நுண்ணறிவு மாதிரிகளைத் தமிழிலேயே அழைக்கும் API-கள்.',
          en: 'Native wrappers for 2D gaming runtimes and AI inference pipelines in Tamil.'
        }
      }
    ]
  }
];
