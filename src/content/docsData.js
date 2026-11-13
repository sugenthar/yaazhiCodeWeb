export const docsCategories = [
  {
    id: 'intro',
    title: { ta: 'அறிமுகம்', en: 'Introduction' },
    items: [
      { id: 'what-is-akazhi', title: { ta: 'AKAZHI என்றால் என்ன?', en: 'What is AKAZHI?' } },
      { id: 'why-akazhi', title: { ta: 'ஏன் AKAZHI?', en: 'Why AKAZHI?' } },
      { id: 'architecture', title: { ta: 'கட்டமைப்பு & இயங்குதளம்', en: 'Architecture & Runtime' } },
      { id: 'installation', title: { ta: 'நிறுவுதல் & தேவைகள்', en: 'Installation & Requirements' } },
    ]
  },
  {
    id: 'getting-started',
    title: { ta: 'தொடங்குதல்', en: 'Getting Started' },
    items: [
      { id: 'create-project', title: { ta: 'புதிய திட்டத்தை உருவாக்குதல்', en: 'Create a Project' } },
      { id: 'project-structure', title: { ta: 'திட்டக் கோப்பமைப்பு', en: 'Project Structure' } },
      { id: 'first-app', title: { ta: 'முதல் பயன்பாடு', en: 'First Application' } },
      { id: 'dev-workflow', title: { ta: 'உருவாக்க பணிப்பாய்வு', en: 'Development Workflow' } },
      { id: 'prod-workflow', title: { ta: 'தயாரிப்பு பணிப்பாய்வு', en: 'Production Workflow' } },
    ]
  },
  {
    id: 'runtime',
    title: { ta: 'இயங்குதளம் (Runtime API)', en: 'Runtime API' },
    items: [
      { id: 'http-server', title: { ta: 'வலைச்சேவையகம் (HTTP Server)', en: 'HTTP Server' } },
      { id: 'routes', title: { ta: 'பாதைகளும் வழிகளும் (Routes)', en: 'Routes & Methods' } },
      { id: 'request', title: { ta: 'கோரிக்கை (Request)', en: 'Request Object' } },
      { id: 'response', title: { ta: 'பதில் (Response)', en: 'Response Object' } },
      { id: 'middleware', title: { ta: 'இடைத்தரகர் (Middleware)', en: 'Middleware' } },
      { id: 'environment', title: { ta: 'சூழல் (Environment)', en: 'Environment Configuration' } },
      { id: 'files', title: { ta: 'கோப்பு வசதிகள் (File Utilities)', en: 'File Utilities' } },
      { id: 'streaming', title: { ta: 'ஓடை பதில் (Response Streaming)', en: 'Streaming' } },
      { id: 'static-files', title: { ta: 'நிலைக்கோப்புகள் (Static Files)', en: 'Static Files' } },
      { id: 'errors', title: { ta: 'பிழை மேலாண்மை (Error Handling)', en: 'Error Handling' } },
    ]
  },
  {
    id: 'cli',
    title: { ta: 'கட்டளை வரி இடைமுகம் (CLI)', en: 'Command Line Interface' },
    items: [
      { id: 'cli-overview', title: { ta: 'CLI மேலோட்டம்', en: 'CLI Overview' } },
      { id: 'cmd-dev', title: { ta: 'akazhi dev', en: 'akazhi dev' } },
      { id: 'cmd-build', title: { ta: 'akazhi build', en: 'akazhi build' } },
      { id: 'cmd-start', title: { ta: 'akazhi start', en: 'akazhi start' } },
      { id: 'cmd-check', title: { ta: 'akazhi check', en: 'akazhi check' } },
      { id: 'cmd-format', title: { ta: 'akazhi format', en: 'akazhi format' } },
      { id: 'cmd-doctor', title: { ta: 'akazhi doctor', en: 'akazhi doctor' } },
      { id: 'cmd-console', title: { ta: 'akazhi console', en: 'akazhi console' } },
      { id: 'cmd-package', title: { ta: 'akazhi package', en: 'akazhi package' } },
    ]
  },
  {
    id: 'config',
    title: { ta: 'அமைவடிவம் (Configuration)', en: 'Configuration' },
    items: [
      { id: 'akazhi-config', title: { ta: 'akazhi.config.json', en: 'Server & App Config' } },
      { id: 'aliases', title: { ta: 'மொழிபெயர்ப்புகள் (npm Aliases)', en: 'npm Package Aliases' } },
    ]
  },
  {
    id: 'production',
    title: { ta: 'உற்பத்தி & பாதுகாப்பு', en: 'Production & Security' },
    items: [
      { id: 'graceful-shutdown', title: { ta: 'முறைசார் நிறுத்தம் (Graceful Shutdown)', en: 'Graceful Shutdown' } },
      { id: 'security-headers', title: { ta: 'பாதுகாப்பு & பிழை மறைப்பு', en: 'Security & Diagnostics' } },
    ]
  }
];

export const docsContent = {
  'what-is-akazhi': {
    title: { ta: 'AKAZHI என்றால் என்ன?', en: 'What is AKAZHI?' },
    description: {
      ta: 'AKAZHI என்பது தமிழ் மொழியிலேயே வலைச்சேவையகங்களையும் கணினிப் பயன்பாடுகளையும் உருவாக்குவதற்கான ஒரு தமிழ்-முதல் Node.js கட்டமைப்பாகும்.',
      en: 'AKAZHI is a Tamil-first Node.js backend development framework that empowers developers to build servers, APIs, and applications using TamilScript.'
    },
    sections: [
      {
        heading: { ta: 'முதன்மை நோக்கம்', en: 'Core Purpose' },
        content: {
          ta: 'AKAZHI தமிழ் பேசும் மக்கள் தங்கள் தாய்மொழியிலேயே கணினி அறிவியலையும் நிரலாக்கத்தையும் கற்பதற்கும், உயர் செயல்திறன் கொண்ட உற்பத்தி நிலை சேவையகங்களை உருவாக்குவதற்கும் வழியமைக்கிறது. இது வெறும் தொடரியல் மொழிபெயர்ப்பு மட்டுமல்ல; தமிழிலேயே சிந்தித்து, தமிழிலேயே பிழைகளை உணர்ந்து நிரல் எழுதும் ஒரு முழுமையான வளர்ச்சி சூழலாகும்.',
          en: 'AKAZHI enables Tamil speakers to master computer science concepts and build production-grade server architectures directly in Tamil. It is not merely an alternative syntax — it provides a complete developer ecosystem where developers think, build, and debug natively in Tamil.'
        }
      },
      {
        heading: { ta: 'தொழில்நுட்ப அடித்தளம்', en: 'Technical Foundation' },
        content: {
          ta: 'AKAZHI உட்புறமாக Node.js இயங்குதளத்தையும், நவீன ES Modules கட்டமைப்பையும் பயன்படுத்துகிறது. பயன்பாட்டு மூலக் குறியீடுகள் `.tamil` என்ற நீட்டிப்புடன் சேமிக்கப்பட்டு, TamilScript 0.3.0 மாற்றியின் மூலம் சீரான ஜாவாஸ்கிரிப்ட் குறியீடாக மாற்றப்பட்டு இயக்கப்படுகிறது.',
          en: 'AKAZHI runs natively on Node.js using standard ES Modules. Application source files use the `.tamil` file extension and are transformed into standard ECMAScript via TamilScript 0.3.0 before being loaded by the Node.js runtime.'
        },
        code: `// src/main.tamil
இறக்குமதி { வலைச்சேவையகம், அச்சிடு } இருந்து "@akazhi/node";

நிலையான சேவையகம் = வலைச்சேவையகம்();

சேவையகம்.பெறு("/", செயல் (கோரிக்கை, பதில்) {
  பதில்.ஜேசன்({
    செய்தி: "வணக்கம்! AKAZHI சேவையகம் இயங்குகிறது",
    நிலை: "வெற்றி",
  });
});

காத்திரு சேவையகம்.தொடங்கு({
  துறைமுகம்: $௩௦௦௦,
});

அச்சிடு("சேவையகம் துறைமுகம் 3000-ல் தொடங்கியது.");`
      },
      {
        heading: { ta: 'முக்கிய இயல்புகள்', en: 'Key Features' },
        bullets: [
          { ta: 'தமிழ்-முதல் API: வலைச்சேவையகம், கோரிக்கை, பதில், சூழல், கோப்பு, நிலை போன்ற அனைத்தும் நேரடித் தமிழ் வடிவம்.', en: 'Tamil-First API: First-class Tamil APIs for HTTP server, Request, Response, Environment, File, and Status.' },
          { ta: 'நேரடி தமிழ் எண்கள்: $௦ முதல் $௯ வரையிலான தமிழ் எண்களையும், தசமங்களையும் ($௧௨.௫), வரம்புகளையும் ($௧..$௫) இயல்பாகப் பயன்படுத்தலாம்.', en: 'Native Tamil Numerals: Full support for Tamil digits ($௦-$௯), decimals ($௧௨.௫), and ranges ($௧..$௫).' },
          { ta: 'தமிழ் பிழைச் செய்திகள்: பிழைகள் ஆங்கிலக் குறியீடுகளாக அன்றி, எங்கு ஏன் ஏற்பட்டது என்ற தெளிவான தமிழ் வழிகாட்டல்களுடன் காட்டப்படுகின்றன.', en: 'Tamil Diagnostics: Clear, actionable Tamil error messages pointing directly to source lines with remediation hints.' },
          { ta: 'வடிவமைப்பாளர் & உலவி பணியிடம்: தானியங்கி தமிழ் மூல வடிவமைப்பு (@akazhi/formatter) மற்றும் ஆஃப்லைன் உலாவி பணியிடம் (@akazhi/console).', en: 'Dedicated Tooling: AST-safe source formatting (@akazhi/formatter) and browser workspace (@akazhi/console).' }
        ]
      }
    ]
  },
  'why-akazhi': {
    title: { ta: 'ஏன் AKAZHI? மொழியின் தடையை உடைப்போம்', en: 'Why AKAZHI? Breaking the Language Barrier' },
    description: {
      ta: 'நிரலாக்கம் என்பது தர்க்கரீதியான சிந்தனை; அது ஆங்கில மொழிப் புலமையை மட்டும் அடிப்படையாகக் கொண்டிருக்க வேண்டியதில்லை.',
      en: 'Programming is fundamentally about logical thinking and problem-solving, not mandatory English fluency.'
    },
    sections: [
      {
        heading: { ta: 'தற்போதுள்ள சவால்', en: 'The Current Barrier' },
        content: {
          ta: 'உலகளவில் கணினி அறிவியல் கல்வி பெரும்பாலும் ஆங்கிலத்தின் வழியாகவே கற்பிக்கப்படுகிறது. இதனால் லட்சக்கணக்கான தமிழ் மாணவர்கள் மற்றும் ஆர்வலர்கள் தர்க்கரீதியான சிந்தனை இருந்தும், ஆங்கிலக் கலைச்சொற்கள் மற்றும் தொடரியல் பிழைகளின் அச்சத்தால் மென்பொருள் உருவாக்கத்திலிருந்து விலகி விடுகின்றனர்.',
          en: 'Traditional computer science education is gated heavily behind English vocabulary. Millions of native Tamil speakers who possess deep logical ability hesitate to enter software development simply because error messages, documentation, and syntaxes require immediate fluency in a foreign language.'
        }
      },
      {
        heading: { ta: 'AKAZHI-யின் தீர்வு', en: 'The AKAZHI Solution' },
        content: {
          ta: 'AKAZHI மாணவர்களுக்கும் பொறியாளர்களுக்கும் தங்கள் சொந்த சிந்தனை மொழியிலேயே கட்டமைப்புகளை உருவாக்க வாய்ப்பளிக்கிறது. மாறிகள் (`மாறி`, `நிலையான`), செயல்பாடுகள் (`செயல்`), நிபந்தனைகள் (`என்றால்`, `இல்லை`), மற்றும் வலைப்பின்னல் கோரிக்கைகள் அனைத்தும் தாய்மொழியிலேயே எழுதப்படுகின்றன. இது கற்றல் வேகத்தை பன்மடங்கு அதிகரிக்கிறது.',
          en: 'AKAZHI empowers learners and engineers to write software matching their internal cognitive language. Variables (`நிலையான`, `மாறி`), functions (`செயல்`), conditions (`என்றால்`, `இல்லை`), and network requests are written naturally in Tamil, dramatically shortening the learning curve.'
        }
      }
    ]
  },
  'architecture': {
    title: { ta: 'கட்டமைப்பு மற்றும் இயங்குதளம்', en: 'Architecture & Runtime' },
    description: {
      ta: 'AKAZHI எவ்வாறு செயல்படுகிறது? Node.js மற்றும் TamilScript உடனான ஒருங்கிணைப்பு.',
      en: 'How AKAZHI works under the hood with Node.js and TamilScript.'
    },
    sections: [
      {
        heading: { ta: 'தொழில்நுட்ப அடுக்குகளின் கட்டமைப்பு', en: 'System Architecture Layers' },
        bullets: [
          { ta: 'விண்ணப்ப அடுக்கு (Application Layer): டெவலப்பர்கள் `.tamil` கோப்புகளில் TamilScript தொடரியல் மற்றும் AKAZHI API-களை எழுதுகிறார்கள்.', en: 'Application Layer: Developers author `.tamil` files using TamilScript syntax and AKAZHI framework APIs.' },
          { ta: 'மொழி மாற்றல் அடுக்கு (Transformer Layer): TamilScript 0.3.0 மாற்றி மூலக் குறியீட்டை ஆராய்ந்து, தமிழ் திறவுச்சொற்களையும் எண்களையும் சரியான JavaScript டோக்கன்களாக மாற்றுகிறது.', en: 'Transformation Layer: TamilScript 0.3.0 transforms keywords and Tamil numerals into valid ECMAScript without touching strings or regex.' },
          { ta: 'இயங்குதள அடுக்கு (Runtime Layer): `@akazhi/node` தொகுப்பு Node.js-ல் ES Module முறையில் இயங்கி, HTTP சர்வர், வழிப்படுத்தல், ஸ்ட்ரீமிங், மற்றும் கோப்பு கையாளுதலை வழங்குகிறது.', en: 'Runtime Layer: `@akazhi/node` provides robust Node.js HTTP servers, routing, backpressured streaming, and file utilities.' },
          { ta: 'கருவிகள் அடுக்கு (Tooling Layer): `@akazhi/cli`, `@akazhi/errors`, `@akazhi/formatter`, மற்றும் `@akazhi/console`.', en: 'Tooling Layer: CLI diagnostics, error formatting, AST-safe source formatting, and the browser workspace.' }
        ]
      },
      {
        heading: { ta: 'TamilScript ஓர் சுயாதீன மாற்றி', en: 'TamilScript as an Independent Transformer' },
        content: {
          ta: 'முக்கிய குறிப்பு: TamilScript என்பது AKAZHI-யின் உட்புற சொத்து அல்ல; அது பொது npm-ல் உள்ள ஒரு சுயாதீன மொழி மாற்றி தொகுப்பாகும். AKAZHI அதை இயங்குதளத்திற்கு பயன்படுத்துகிறது.',
          en: 'Important: TamilScript is an independent open-source npm package, not an internal fork of AKAZHI. AKAZHI consumes TamilScript as a transformer dependency for its Node.js loader.'
        }
      }
    ]
  },
  'installation': {
    title: { ta: 'நிறுவுதல் மற்றும் முன்நிபந்தனைகள்', en: 'Installation & Requirements' },
    description: {
      ta: 'AKAZHI-யை உங்கள் கணினியில் தொடங்குவதற்கு தேவையான மென்பொருட்கள்.',
      en: 'Prerequisites and setup requirements for running AKAZHI.'
    },
    sections: [
      {
        heading: { ta: 'தேவையான குறைந்தபட்ச வசதிகள்', en: 'System Requirements' },
        bullets: [
          { ta: 'Node.js: பதிப்பு 20.19.0 அல்லது அதற்குப் பிந்தைய நவீன LTS பதிப்பு.', en: 'Node.js: Version 20.19.0 or newer (LTS recommended).' },
          { ta: 'npm: பதிப்பு 9.0 அல்லது அதற்கு மேற்பட்ட பதிப்பு.', en: 'npm: Version 9.0 or higher.' },
          { ta: 'இயங்குதளம்: Windows, Linux, அல்லது macOS.', en: 'OS: Windows, Linux, or macOS.' },
          { ta: 'எழுத்துரு: தமிழ் யூனிகோட் எழுத்துக்களைக் காட்டும் எழுத்துரு (Noto Sans Tamil போன்றவை).', en: 'Font: Tamil Unicode compatible font (such as Noto Sans Tamil).' }
        ]
      },
      {
        heading: { ta: 'பதிப்பு சரிபார்ப்பு', en: 'Verify Prerequisites' },
        code: `$ node -v
v20.19.0 (அல்லது அதற்கு மேல்)

$ npm -v
10.8.0`,
        language: 'bash'
      }
    ]
  },
  'create-project': {
    title: { ta: 'புதிய திட்டத்தை உருவாக்குதல்', en: 'Create a Project' },
    description: {
      ta: 'create-akazhi கட்டளையைப் பயன்படுத்தி சில நொடிகளில் புதிய பயன்பாட்டை உருவாக்கலாம்.',
      en: 'Scaffold a brand new production-ready AKAZHI project using create-akazhi.'
    },
    sections: [
      {
        heading: { ta: 'திட்டம் உருவாக்குதல்', en: 'Scaffolding with npm create' },
        content: {
          ta: 'npm create akazhi@latest கட்டளையைப் பயன்படுத்தி புதிய திட்டத்தை உருவாக்கலாம்:',
          en: 'Run the verified scaffolding command in your terminal:'
        },
        code: `$ npm create akazhi@latest my-tamil-server
$ cd my-tamil-server
$ npm install
$ npm run dev`,
        language: 'bash'
      },
      {
        heading: { ta: 'CLI மூலமாக உருவாக்குதல்', en: 'Using the akazhi CLI' },
        content: {
          ta: 'உங்களிடம் @akazhi/cli நிறுவப்பட்டிருந்தால், நேரடிக் கட்டளையையும் பயன்படுத்தலாம்:',
          en: 'You can also scaffold directly using the installed akazhi binary:'
        },
        code: `$ akazhi create my-app
$ akazhi create my-app --template node
$ akazhi create my-app --skip-install`,
        language: 'bash'
      }
    ]
  },
  'project-structure': {
    title: { ta: 'திட்டக் கோப்பமைப்பு', en: 'Project Structure' },
    description: {
      ta: 'உருவாக்கப்பட்ட AKAZHI Node.js பயன்பாட்டின் கோப்பு முறைமை.',
      en: 'The standard project structure generated by create-akazhi.'
    },
    sections: [
      {
        heading: { ta: 'கோப்பு முறைமை விளக்கம்', en: 'Directory Layout' },
        code: `my-app/
├── akazhi.config.json         # சேவையக அமைவடிவக் கோப்பு
├── package.json               # NPM தொகுப்பு விவரங்கள்
├── data/
│   └── செய்திகள்.json          # மாதிரி உள்ளூர் தரவுக் கோப்பு
├── public/
│   └── index.html             # நிலை கோப்புகள் (Static files)
├── src/
│   ├── main.tamil             # திட்டத்தின் தொடக்கப் புள்ளி (Entry point)
│   ├── config/
│   │   └── server.tamil       # துறைமுகம் மற்றும் அமைப்புகள்
│   ├── controllers/
│   │   ├── home.tamil         # முகப்பு கையாளுநர்கள்
│   │   └── users.tamil        # பயனர் API கையாளுநர்கள்
│   ├── middleware/
│   │   └── logger.tamil       # கோரிக்கை பதிவு இடைத்தரகர்
│   ├── routes/
│   │   ├── index.tamil        # அடிப்படை வழிகள்
│   │   └── users.tamil        # REST API வழிகள்
│   ├── services/
│   │   ├── news.tamil         # செய்தி சேவை தர்க்கம்
│   │   └── users.tamil        # பயனர் தரவுச் செயல்பாடுகள்
│   └── utils/
│       └── validation.tamil   # உள்ளீட்டு சரிபார்ப்பு
└── test/
    └── compile.test.js        # தானியங்கி தொகுப்பு சோதனைகள்`,
        language: 'text'
      }
    ]
  },
  'first-app': {
    title: { ta: 'முதல் பயன்பாடு: வணக்கம் சேவையகம்', en: 'First Application: Hello Server' },
    description: {
      ta: 'சில வரிகளில் ஒரு முழுமையான வலைச்சேவையகத்தை உருவாக்குங்கள்.',
      en: 'Build and run a complete HTTP web server in just a few lines of Tamil.'
    },
    sections: [
      {
        heading: { ta: 'src/main.tamil கோப்பு', en: 'The src/main.tamil File' },
        content: {
          ta: 'கீழே உள்ள குறியீடு ஒரு முழுமையான HTTP சேவையகத்தை உருவாக்கி, துறைமுகம் $௩௦௦௦-ல் கேட்க வைக்கிறது:',
          en: 'The following code sets up an HTTP server listening on port 3000:'
        },
        code: `இறக்குமதி { வலைச்சேவையகம், அச்சிடு } இருந்து "@akazhi/node";

நிலையான சேவையகம் = வலைச்சேவையகம்();

// வழிகள்
சேவையகம்.பெறு("/", செயல் (கோரிக்கை, பதில்) {
  பதில்.ஜேசன்({
    செய்தி: "வணக்கம்! AKAZHI சேவையகம் வெற்றிகரமாக இயங்குகிறது",
    நேரம்: Date.now(),
  });
});

// தொடங்குதல்
நிலையான தகவல் = காத்திரு சேவையகம்.தொடங்கு({
  துறைமுகம்: $௩௦௦௦,
});

அச்சிடு(\`சேவையகம் http://\${தகவல்.முகவரி}:\${தகவல்.துறைமுகம்}-ல் இயங்குகிறது\`);`,
        language: 'tamil'
      },
      {
        heading: { ta: 'பயன்பாட்டை இயக்குதல்', en: 'Running the Server' },
        code: `$ akazhi dev
# அல்லது npm run dev`,
        language: 'bash'
      }
    ]
  },
  'dev-workflow': {
    title: { ta: 'உருவாக்க பணிப்பாய்வு', en: 'Development Workflow' },
    description: {
      ta: 'akazhi dev, தானியங்கி கண்காணிப்பு (--watch), மற்றும் பணியிடம்.',
      en: 'The everyday development cycle with watch mode and interactive debugging.'
    },
    sections: [
      {
        heading: { ta: 'வளர்ச்சி கட்டளைகள்', en: 'Development Commands' },
        bullets: [
          { ta: 'akazhi dev: இயல்புநிலை வளர்ச்சி சேவையகம்; உலாவி பணியிடத்தைத் தொடங்கும்.', en: 'akazhi dev: Starts development server with the browser workspace.' },
          { ta: 'akazhi dev --watch: கோப்பு மாற்றங்களை உடனுக்குடன் கவனித்து சேவையகத்தை தானாக மீண்டும் இயக்கும்.', en: 'akazhi dev --watch: Watches loaded .tamil files and restarts the application on edits.' },
          { ta: 'akazhi dev --no-console: உலாவி பணியிடம் இன்றி முனையத்தில் மட்டும் நேரடியாக இயக்கும்.', en: 'akazhi dev --no-console: Runs directly in the terminal without opening the browser workspace.' },
          { ta: 'akazhi check: மூலக் குறியீடுகளின் தொடரியல் மற்றும் இறக்குமதிகளை சரிபார்க்கும்.', en: 'akazhi check: Syntax-checks .tamil files and validates import targets.' },
          { ta: 'akazhi format --write: குறியீடுகளை முறைப்படி அழகுபடுத்தும்.', en: 'akazhi format --write: Formats .tamil code AST-safely.' }
        ]
      }
    ]
  },
  'prod-workflow': {
    title: { ta: 'தயாரிப்பு பணிப்பாய்வு', en: 'Production Workflow' },
    description: {
      ta: 'உற்பத்தி நிலைக்குத் தயார் செய்தல் மற்றும் இயக்குதல்.',
      en: 'Building optimized JavaScript outputs and running in production.'
    },
    sections: [
      {
        heading: { ta: 'தொகுத்தல் மற்றும் தொடங்குதல்', en: 'Build & Start Lifecycle' },
        content: {
          ta: 'உற்பத்திச் சூழலில் `.tamil` கோப்புகள் நேரடியாக இயக்கப்படுவதில்லை. `akazhi build` கட்டளை அவற்றை உற்பத்தி JavaScript (`dist/`) ஆக மாற்றுகிறது.',
          en: 'In production environments, sources are compiled ahead-of-time with `akazhi build`, creating production ESM JavaScript and external source maps in `dist/`.'
        },
        code: `$ akazhi build
# dist/ அடைவில் கோப்புகள் உருவாக்கப்படும்

$ akazhi start --port 8080
# AKAZHI_PRODUCTION=1 சூழலில் பாதுகாப்பாக இயங்கும்`,
        language: 'bash'
      }
    ]
  },
  'http-server': {
    title: { ta: 'வலைச்சேவையகம் (HTTP Server)', en: 'HTTP Server API' },
    description: {
      ta: 'வலைச்சேவையகம்() உருவாக்கம், கட்டமைப்பு விருப்பங்கள் மற்றும் முறைகள்.',
      en: 'Creating HTTP servers with வலைச்சேவையகம்(), configuration options, and lifecycle methods.'
    },
    sections: [
      {
        heading: { ta: 'சேவையக உருவாக்கம்', en: 'Creating a Server Instance' },
        code: `இறக்குமதி { வலைச்சேவையகம் } இருந்து "@akazhi/node";

நிலையான சேவையகம் = வலைச்சேவையகம்({
  அதிகபட்சஉடல்: $௧௦௨௪ * $௧௦௨௪, // 1MB byte limit
  அமைதி: false,                  // console log output
  பாதுகாப்பு: true,               // baseline security headers
  requestTimeout: 300000,        // 300 seconds
  bodyTimeout: 30000,            // 30 seconds
  cors: {
    origin: ["https://myapp.com"],
    credentials: true,
  }
});`,
        language: 'tamil'
      },
      {
        heading: { ta: 'முக்கிய சேவையக முறைகள்', en: 'Core Server Methods' },
        bullets: [
          { ta: 'பெறு(path, handler) - HTTP GET முறை', en: 'பெறு(path, handler) - HTTP GET route' },
          { ta: 'அனுப்பு(path, handler) - HTTP POST முறை', en: 'அனுப்பு(path, handler) - HTTP POST route' },
          { ta: 'மாற்று(path, handler) - HTTP PUT முறை', en: 'மாற்று(path, handler) - HTTP PUT route' },
          { ta: 'நீக்கு(path, handler) - HTTP DELETE முறை', en: 'நீக்கு(path, handler) - HTTP DELETE route' },
          { ta: 'திருத்து(path, handler) - HTTP PATCH முறை', en: 'திருத்து(path, handler) - HTTP PATCH route' },
          { ta: 'பயன்படுத்து(middleware) - இடைத்தரகர் பதிவு', en: 'பயன்படுத்து(middleware) - Register global middleware' },
          { ta: 'நிலைக்கோப்புகள்(prefix, dir) - நிலைக்கோப்புகள் சேவை', en: 'நிலைக்கோப்புகள்(prefix, dir) - Serve static assets' },
          { ta: 'தொடங்கு(options) - சேவையகத்தைக் கேட்கத் தொடங்குதல்', en: 'தொடங்கு(options) - Start listening on port/host' },
          { ta: 'நிறுத்து(options) - சேவையகத்தை நிறுத்துதல்', en: 'நிறுத்து(options) - Graceful server shutdown' },
          { ta: 'நிறுத்தும்போது(callback) - நிறுத்த அழைப்பு பதிவு', en: 'நிறுத்தும்போது(callback) - Register clean shutdown callback' }
        ]
      }
    ]
  },
  'routes': {
    title: { ta: 'பாதைகளும் வழிகளும் (Routes)', en: 'Routes & URL Parameters' },
    description: {
      ta: 'அளவுருக்கள் (:id), வைல்ட்கார்டு (*), மற்றும் வினவல் சரங்கள் (?query=).',
      en: 'Routing with dynamic path parameters, wildcards, and query strings.'
    },
    sections: [
      {
        heading: { ta: 'அளவுரு வழிகள் எடுத்துக்காட்டு', en: 'Route Parameters Example' },
        code: `// ஒற்றைப் பயனரைப் பெறுதல்
சேவையகம்.பெறு("/api/users/:ஐடி", செயல் (கோரிக்கை, பதில்) {
  நிலையான ஐடி = கோரிக்கை.அளவுருக்கள்["ஐடி"];
  பதில்.ஜேசன்({ பயனர்_ஐடி: ஐடி });
});

// வினவல் அளவுருக்கள் (?தேடு=தமிழ்)
சேவையகம்.பெறு("/api/search", செயல் (கோரிக்கை, பதில்) {
  நிலையான தேடல் = கோரிக்கை.வினவல்["தேடு"];
  பதில்.ஜேசன்({ முடிவுகள்: [], தேடியது: தேடல் });
});`,
        language: 'tamil'
      }
    ]
  },
  'request': {
    title: { ta: 'கோரிக்கை (Request Object)', en: 'Request Object' },
    description: {
      ta: 'கோரிக்கை பொருளின் பண்புகளும் பயனுள்ள செயல்பாடுகளும்.',
      en: 'Inspecting request properties, HTTP headers, parameters, and bodies.'
    },
    sections: [
      {
        heading: { ta: 'கோரிக்கைப் பண்புகள் அட்டவணை', en: 'Request Properties' },
        bullets: [
          { ta: 'முறை: கோரிக்கையின் HTTP முறை ("GET", "POST", ...)', en: 'முறை: HTTP method string ("GET", "POST")' },
          { ta: 'பாதை: URL பாதை ("/api/users")', en: 'பாதை: Decoded URL pathname' },
          { ta: 'வினவல்: வினவல் சரங்களின் பொருள் ({ page: "1" })', en: 'வினவல்: Parsed query object' },
          { ta: 'தலைப்புகள்: கோரிக்கை தலைப்புகள் (Headers)', en: 'தலைப்புகள்: Lowercased headers object' },
          { ta: 'அளவுருக்கள்: வழி அளவுருக்கள் ({ ஐடி: "123" })', en: 'அளவுருக்கள்: Route parameters dictionary' },
          { ta: 'உரை(): கோரிக்கை உடலை உரையாக வாசிக்கும் வாக்குறுதி', en: 'உரை(): Promise reading request body as UTF-8 string' },
          { ta: 'ஜேசன்(): கோரிக்கை உடலை JSON-ஆக பகுப்பாய்வு செய்யும் வாக்குறுதி', en: 'ஜேசன்(): Promise parsing incoming body as JSON' }
        ]
      }
    ]
  },
  'response': {
    title: { ta: 'பதில் (Response Object)', en: 'Response Object' },
    description: {
      ta: 'பதில் பொருளின் நிலை குறியீடுகள், தலைப்புகள் மற்றும் தரவு அனுப்புதல்.',
      en: 'Sending status codes, headers, JSON, text, and files with பதில்.'
    },
    sections: [
      {
        heading: { ta: 'பதில் முறைகள் எடுத்துக்காட்டு', en: 'Response Methods Example' },
        code: `// JSON பதில் அனுப்புதல்
பதில்.நிலை(200).ஜேசன்({ சரி: true });

// தலைப்பு அமைத்தல்
பதில்.தலைப்பு("X-Custom-Header", "AkazhiServer");

// எளிய உரை அனுப்புதல்
பதில்.உரை("வணக்கம் உலகம்!", 200);

// கோப்பு அனுப்புதல்
பதில்.கோப்பு("public/welcome.html");`,
        language: 'tamil'
      }
    ]
  },
  'middleware': {
    title: { ta: 'இடைத்தரகர் (Middleware)', en: 'Middleware' },
    description: {
      ta: 'சேவையகத்தின் கோரிக்கை-பதில் சுழற்சியில் இடைத்தரகர் பயன்பாடுகள்.',
      en: 'Registering and chaining middlewares with பயன்படுத்து and அடுத்து().'
    },
    sections: [
      {
        heading: { ta: 'இடைத்தரகர் பதிவு', en: 'Writing a Middleware' },
        code: `சேவையகம்.பயன்படுத்து(ஒத்திசைவற்ற செயல் (கோரிக்கை, பதில், அடுத்து) {
  நிலையான தொடக்கநேரம் = Date.now();
  
  // அடுத்த இடைத்தரகர் அல்லது வழிக்கு அனுப்புதல்
  காத்திரு அடுத்து();
  
  நிலையான காலஅளவு = Date.now() - தொடக்கநேரம்;
  அச்சிடு(\`[\${கோரிக்கை.முறை}] \${கோரிக்கை.பாதை} - \${காலஅளவு}ms\`);
});`,
        language: 'tamil'
      }
    ]
  },
  'environment': {
    title: { ta: 'சூழல் (Environment API)', en: 'Environment API' },
    description: {
      ta: 'சூழல் மாறிகளை பாதுகாப்பாகவும் தமிழ் வழியிலும் கையாளுதல்.',
      en: 'Reading environment variables safely with சூழல்.பெறு, சூழல்.தேவை, and சூழல்.எண்.'
    },
    sections: [
      {
        heading: { ta: 'சூழல் முறைகள்', en: 'Environment Methods' },
        code: `இறக்குமதி { சூழல் } இருந்து "@akazhi/node";

// சூழல் மாறி பெறுதல் (இயல்புநிலை மதிப்புடன்)
நிலையான துறைமுகம் = சூழல்.எண்("PORT", $௩௦௦௦);

// கட்டாய சூழல் மாறி (இல்லையெனில் தமிழ் பிழை எறியும்)
நிலையான தரவுத்தள_URL = சூழல்.தேவை("DATABASE_URL");

// உண்மை/பொய் சரிபார்த்தல்
நிலையான பிழைத்திருத்தம் = சூழல்.உண்மை("DEBUG", false);

// மாறி உள்ளதா என அறிதல்
என்றால் (சூழல்.உள்ளதா("API_KEY")) {
  அச்சிடு("API சாவி உள்ளது");
}`,
        language: 'tamil'
      }
    ]
  },
  'files': {
    title: { ta: 'கோப்பு வசதிகள் (File Utilities)', en: 'File Utilities' },
    description: {
      ta: 'கோப்பு வாசிப்பு, எழுதுதல், மற்றும் JSON கையாளுதல்.',
      en: 'Reading, writing, and parsing files with the built-in கோப்பு utility.'
    },
    sections: [
      {
        heading: { ta: 'கோப்பு செயல்பாடுகள்', en: 'File Operations' },
        code: `இறக்குமதி { கோப்பு } இருந்து "@akazhi/node";

// JSON கோப்பைப் படித்தல்
நிலையான தரவு = காத்திரு கோப்பு.படிJSON("data/செய்திகள்.json");

// உரை எழுதுதல்
காத்திரு கோப்பு.எழுது("logs/system.log", "இயக்கம் தொடங்கியது\\n", { சேர்: true });

// கோப்பு உள்ளதா என சரிபார்த்தல்
என்றால் (காத்திரு கோப்பு.உள்ளதா("config.json")) {
  அச்சிடு("அமைவடிவக் கோப்பு உள்ளது");
}`,
        language: 'tamil'
      }
    ]
  },
  'streaming': {
    title: { ta: 'ஓடை பதில் (Response Streaming)', en: 'Response Streaming' },
    description: {
      ta: 'பதில்.ஓடை மற்றும் ஓடைமூலம் வசதியுடன் நினைவகச் சேமிப்பின்றி ஸ்ட்ரீமிங் செய்தல்.',
      en: 'Backpressured response streaming with பதில்.ஓடை and ஓடைமூலம்.'
    },
    sections: [
      {
        heading: { ta: 'ஸ்ட்ரீமிங் எடுத்துக்காட்டு', en: 'Streaming Example' },
        code: `இறக்குமதி { வலைச்சேவையகம், ஓடைமூலம் } இருந்து "@akazhi/node";

நிலையான சேவையகம் = வலைச்சேவையகம்();

சேவையகம்.பெறு("/stream", ஒத்திசைவற்ற செயல் (கோரிக்கை, பதில்) {
  பதில்.தலைப்பு("Content-Type", "text/plain; charset=utf-8");
  
  // நினைவகத்தை அடைக்காமல் துண்டு துண்டாக அனுப்புதல்
  காத்திரு பதில்.ஓடை(ஓடைமூலம்([
    "துவக்கம்...\\n",
    "தரவு அடுக்கு 1\\n",
    "தரவு அடுக்கு 2\\n",
    "நிறைவுற்றது.\\n"
  ]));
});`,
        language: 'tamil'
      }
    ]
  },
  'static-files': {
    title: { ta: 'நிலைக்கோப்புகள் (Static Files)', en: 'Static Files' },
    description: {
      ta: 'HTML, CSS, JS, மற்றும் படங்களை பாதுகாப்பாக வழங்குதல்.',
      en: 'Serving static client assets securely with path traversal protection.'
    },
    sections: [
      {
        heading: { ta: 'நிலைக்கோப்பு சேவை அமைத்தல்', en: 'Registering Static Route' },
        code: `// public அடைவை /static என்ற பாதையில் பகிர்தல்
சேவையகம்.நிலைக்கோப்புகள்("/static", "public", {
  அதிகபட்சவயது: 3600, // 1 hour browser cache
});`,
        language: 'tamil'
      }
    ]
  },
  'errors': {
    title: { ta: 'பிழை மேலாண்மை (Error Handling)', en: 'Error Handling' },
    description: {
      ta: 'தமிழ் பிழைத் தலைப்புகள், ஏன், உதவி வழிகாட்டல்கள் மற்றும் பிழை வகுப்பு.',
      en: 'Tamil diagnostics, actionable remediation hints, and the பிழை class.'
    },
    sections: [
      {
        heading: { ta: 'விருப்ப பிழை கையாளுநர்', en: 'Custom Error Handler' },
        code: `இறக்குமதி { பிழை } இருந்து "@akazhi/node";

சேவையகம்.பிழை(செயல் (பிழைவிவரம், கோரிக்கை, பதில்) {
  அச்சிடு("பிழை நிகழ்ந்தது:", பிழைவிவரம்.message);
  பதில்.நிலை(500).ஜேசன்({
    பிழை: "உட்புற சேவையகப் பிழை",
    கோரிக்கைஐடி: பதில்.கோரிக்கைஐடி,
  });
});

// பிழை எறிதல்
சேவையகம்.பெறு("/test-error", செயல் () {
  எறி புதிய பிழை("ஏதோ தவறாக நடந்துவிட்டது!");
});`,
        language: 'tamil'
      }
    ]
  },
  'cli-overview': {
    title: { ta: 'CLI மேலோட்டம்', en: 'CLI Overview' },
    description: {
      ta: '@akazhi/cli தொகுப்பு மற்றும் akazhi கட்டளை வரி செயல்பாடுகள்.',
      en: 'Overview of the @akazhi/cli binary and supported commands.'
    },
    sections: [
      {
        heading: { ta: 'அங்கீகரிக்கப்பட்ட CLI கட்டளைகள்', en: 'Verified CLI Commands' },
        bullets: [
          { ta: 'akazhi create <folder> - புதிய பயன்பாட்டை உருவாக்குதல்', en: 'akazhi create <folder> - Scaffold new project from templates' },
          { ta: 'akazhi package create <folder> - புதிய மறுபயன்பாட்டு தமிழ் npm தொகுப்பு உருவாக்குதல்', en: 'akazhi package create <folder> - Create reusable Tamil npm package' },
          { ta: 'akazhi dev [folder] - வளர்ச்சி சேவையகத்தை தொடங்குதல்', en: 'akazhi dev [folder] - Start local dev server with console' },
          { ta: 'akazhi build [folder] - உற்பத்தி JavaScript தொகுப்பாக மாற்றுதல்', en: 'akazhi build [folder] - Compile .tamil sources into dist/' },
          { ta: 'akazhi start [folder] - உற்பத்தி பயன்பாட்டை இயக்குதல்', en: 'akazhi start [folder] - Run compiled production build' },
          { ta: 'akazhi check [paths...] - தொடரியல் மற்றும் இறக்குமதிகளை சரிபார்த்தல்', en: 'akazhi check [paths...] - Syntax check and static import verification' },
          { ta: 'akazhi format [paths...] - மூலக் குறியீட்டை அழகுபடுத்துதல்', en: 'akazhi format [paths...] - Format .tamil code AST-safely' },
          { ta: 'akazhi doctor [folder] - சூழல் மற்றும் திட்ட நலனை ஆய்வு செய்தல்', en: 'akazhi doctor [folder] - Diagnostic health check of setup' },
          { ta: 'akazhi console [folder|file] - ஆஃப்லைன் உலாவி பணியிடத்தைத் தொடங்குதல்', en: 'akazhi console [folder|file] - Launch browser interactive workspace' }
        ]
      }
    ]
  },
  'cmd-dev': {
    title: { ta: 'akazhi dev', en: 'akazhi dev' },
    description: { ta: 'வளர்ச்சி சேவையகத்தை தொடங்குதல்.', en: 'Start the development runtime with optional live reload.' },
    sections: [
      {
        heading: { ta: 'விருப்பக் கொடிகள் (Flags)', en: 'Command Options' },
        code: `$ akazhi dev
$ akazhi dev my-app --host 127.0.0.1 --port 3000
$ akazhi dev my-app --watch
$ akazhi dev my-app --no-console`,
        language: 'bash'
      }
    ]
  },
  'cmd-build': {
    title: { ta: 'akazhi build', en: 'akazhi build' },
    description: { ta: 'உற்பத்தி நிலைக்கு தொகுத்தல்.', en: 'Compile .tamil files to production-grade ECMAScript.' },
    sections: [
      {
        heading: { ta: 'தொகுத்தல் கட்டளை', en: 'Build Command' },
        code: `$ akazhi build
$ akazhi build my-app --outDir custom_dist`,
        language: 'bash'
      }
    ]
  },
  'cmd-start': {
    title: { ta: 'akazhi start', en: 'akazhi start' },
    description: { ta: 'உற்பத்தி பயன்பாட்டை இயக்குதல்.', en: 'Execute the compiled dist/ build in production mode.' },
    sections: [
      {
        heading: { ta: 'இயக்கும் முறை', en: 'Usage' },
        code: `$ akazhi start
$ akazhi start my-app --port 8080`,
        language: 'bash'
      }
    ]
  },
  'cmd-check': {
    title: { ta: 'akazhi check', en: 'akazhi check' },
    description: { ta: 'குறியீட்டு பிழை மற்றும் தொடரியல் ஆய்வு.', en: 'Check .tamil syntax and verify static imports.' },
    sections: [
      {
        heading: { ta: 'ஆய்வுக் கட்டளை', en: 'Usage' },
        code: `$ akazhi check
$ akazhi check src/main.tamil`,
        language: 'bash'
      }
    ]
  },
  'cmd-format': {
    title: { ta: 'akazhi format', en: 'akazhi format' },
    description: { ta: 'மூலக் குறியீட்டை AST முறையில் பாதுகாப்பாக அழகுபடுத்துதல்.', en: 'Format source code with AST preservation guarantees.' },
    sections: [
      {
        heading: { ta: 'வடிவமைப்பு கட்டளைகள்', en: 'Usage' },
        code: `$ akazhi format --check   # சரிபார்க்க மட்டும் (மாற்றாது)
$ akazhi format --write   # கோப்புகளை மாற்றி அமைக்கும்`,
        language: 'bash'
      }
    ]
  },
  'cmd-doctor': {
    title: { ta: 'akazhi doctor', en: 'akazhi doctor' },
    description: { ta: 'திட்டத்தின் நலன் மற்றும் தேவைகள் சோதனை.', en: 'Verify Node.js version, configuration, dependencies, and entry.' },
    sections: [
      {
        heading: { ta: 'மருத்துவர் கட்டளை', en: 'Usage' },
        code: `$ akazhi doctor`,
        language: 'bash'
      }
    ]
  },
  'cmd-console': {
    title: { ta: 'akazhi console', en: 'akazhi console' },
    description: { ta: 'ஆஃப்லைன் உலாவி பணியிடம் மற்றும் டெர்மினல்.', en: 'Launch the browser-based interactive REPL and workspace.' },
    sections: [
      {
        heading: { ta: 'பணியிடத் தொடக்கம்', en: 'Usage' },
        code: `$ akazhi console
$ akazhi console src/main.tamil --port 4000`,
        language: 'bash'
      }
    ]
  },
  'cmd-package': {
    title: { ta: 'akazhi package', en: 'akazhi package' },
    description: { ta: 'மறுபயன்பாட்டு தமிழ் npm தொகுப்பு உருவாக்குதல்.', en: 'Scaffold reusable Tamil npm packages with alias metadata.' },
    sections: [
      {
        heading: { ta: 'தொகுப்பு உருவாக்கம்', en: 'Usage' },
        code: `$ akazhi package create my-tamil-utils`,
        language: 'bash'
      }
    ]
  },
  'akazhi-config': {
    title: { ta: 'akazhi.config.json', en: 'akazhi.config.json' },
    description: { ta: 'சேவையகம் மற்றும் திட்ட அமைவடிவக் கோப்பு.', en: 'Root project configuration for server, formatter, and aliases.' },
    sections: [
      {
        heading: { ta: 'மாதிரி அமைவடிவம்', en: 'Configuration Schema' },
        code: `{
  "நுழைவு": "src/main.tamil",
  "துறைமுகம்": 3000,
  "முகவரி": "127.0.0.1",
  "அமைப்புகள்": {
    "அதிகபட்சஉடல்": 1048576,
    "பாதுகாப்பு": true
  },
  "வடிவமைப்பு": {
    "இடைவெளி": 2
  }
}`,
        language: 'json'
      }
    ]
  },
  'aliases': {
    title: { ta: 'மொழிபெயர்ப்புகள் (npm Aliases)', en: 'Third-Party npm Package Aliases' },
    description: { ta: 'மூன்றாம் தரப்பு npm தொகுப்புகளுக்கு தமிழ் முறைப்பெயர்கள் வழங்குதல்.', en: 'Wrapping npm libraries with Tamil method aliases using மொழிபெயர்ப்பு().' },
    sections: [
      {
        heading: { ta: 'மொழிபெயர்ப்பு பயன்பாடு', en: 'Aliasing an npm Package' },
        code: `இறக்குமதி express இருந்து "express";
இறக்குமதி { மொழிபெயர்ப்பு } இருந்து "@akazhi/node";

நிலையான செயலி = மொழிபெயர்ப்பு(express(), "express");

செயலி.பெறு("/", செயல் (கோரிக்கை, பதில்) {
  பதில்.ஜேசன்({ சரி: true });
});`,
        language: 'tamil'
      }
    ]
  },
  'graceful-shutdown': {
    title: { ta: 'முறைசார் நிறுத்தம் (Graceful Shutdown)', en: 'Graceful Shutdown Lifecycle' },
    description: { ta: 'SIGINT, SIGTERM சமிக்ஞைகளின் போது பாதுகாப்பாக இணைப்புகளை மூடுதல்.', en: 'Zero-drop graceful termination handling connections and cleanup.' },
    sections: [
      {
        heading: { ta: 'நிறுத்தும்போது() பயன்பாடு', en: 'Registering Shutdown Callback' },
        code: `சேவையகம்.நிறுத்தும்போது(செயல் () {
  அச்சிடு("சேவையகம் பாதுகாப்பாக மூடப்பட்டது; தரவுத்தள இணைப்புகள் விடுவிக்கப்பட்டன.");
});`,
        language: 'tamil'
      }
    ]
  },
  'security-headers': {
    title: { ta: 'பாதுகாப்பு மற்றும் பிழை மறைப்பு', en: 'Security & Error Masking' },
    description: { ta: 'உற்பத்தி சூழலில் இயல்பான பாதுகாப்பு தலைப்புகளும் பிழை மறைப்பும்.', en: 'Production security headers, nosniff, SAMEORIGIN, and safe error masking.' },
    sections: [
      {
        heading: { ta: 'இயல்புநிலை தலைப்புகள்', en: 'Default Security Headers' },
        bullets: [
          { ta: 'X-Content-Type-Options: nosniff (MIME sniffing தடுப்பு)', en: 'X-Content-Type-Options: nosniff' },
          { ta: 'X-Frame-Options: SAMEORIGIN (Clickjacking தடுப்பு)', en: 'X-Frame-Options: SAMEORIGIN' },
          { ta: 'Referrer-Policy: no-referrer (தனியுரிமைப் பாதுகாப்பு)', en: 'Referrer-Policy: no-referrer' },
          { ta: 'X-Request-Id: ஒவ்வொரு கோரிக்கைக்கும் தனித்துவ அடையாள எண்', en: 'X-Request-Id: Unique correlation ID for tracing' }
        ]
      }
    ]
  }
};
