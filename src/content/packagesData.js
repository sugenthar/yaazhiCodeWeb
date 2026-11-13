export const packages = [
  {
    id: 'core',
    name: '@akazhi/core',
    version: '0.1.0',
    type: 'main',
    status: 'published',
    summary: {
      ta: 'AKAZHI கட்டமைப்பின் மூலக்கரு. தமிழ் தொடரியல் சரிபார்ப்பு, பிழை மொழிபெயர்ப்பு மற்றும் கண்டறிதல் விதிகள்.',
      en: 'Core foundation primitives, TamilScript syntax validation, error translation, and diagnostic formatting.'
    },
    purpose: {
      ta: 'தமிழ் மூலக் குறியீடுகளை ஆய்வு செய்தல், தொடரியல் மற்றும் இறக்குமதி பிழைகளைக் கண்டறிதல், மற்றும் விரிவான தமிழ் கண்டறிதல் செய்திகளை உருவாக்குதல்.',
      en: 'Validates source code through TamilScript 0.3.0, translates parser diagnostics into clear Tamil, and formats terminal overlays.'
    },
    install: 'npm install @akazhi/core',
    isApplicationImport: false, // Internal/CLI dependency primarily
    responsibilities: [
      { ta: 'checkSource(): மூலக் குறியீட்டுத் தொடரியலை ஆய்வு செய்தல்', en: 'checkSource(): Analyzes source text and returns diagnostic errors/warnings' },
      { ta: 'translateError(): Babel/TamilScript பிழைகளை தமிழ் கண்டறிதல்களாக மாற்றுதல்', en: 'translateError(): Converts low-level parser errors to actionable Tamil diagnostics' },
      { ta: 'formatAkazhiDiagnostic(): முனையத்தில் வண்ணமயமான தமிழ் பிழைச் செய்திகளை அச்சிடுதல்', en: 'formatAkazhiDiagnostic(): Formats terminal messages with codeframes and remediation hints' },
      { ta: 'குறியீட்டு எச்சரிக்கைகள் (எ.கா: திருப்பி என்பதற்கு பதிலாக கொடு பயன்பாடு)', en: 'Lint warnings (e.g., suggesting கொடு instead of unsupported திருப்பி)' }
    ],
    publicApi: [
      { name: 'checkSource(source, options)', desc: { ta: 'மூலக் குறியீட்டு தொடரியல் சோதனை', en: 'Validate .tamil source syntax and imports' } },
      { name: 'translateError(err, options)', desc: { ta: 'பிழைகளை தமிழ் கண்டறிதலாக மாற்றுதல்', en: 'Translate runtime/parser error into Tamil diagnostic' } },
      { name: 'formatAkazhiDiagnostic(diagnostic)', desc: { ta: 'கண்டறிதலை உரை வடிவமாக வடிவமைத்தல்', en: 'Format diagnostic object with line, col, hint' } }
    ],
    dependencies: ['tamilscript'],
    usageExample: `import { checkSource, formatAkazhiDiagnostic } from "@akazhi/core";

const result = checkSource(tamilSourceCode, { filename: "src/main.tamil" });
for (const diagnostic of result.diagnostics) {
  console.log(formatAkazhiDiagnostic(diagnostic));
}`
  },
  {
    id: 'node',
    name: '@akazhi/node',
    version: '0.1.0',
    type: 'main',
    status: 'published',
    summary: {
      ta: 'Node.js இயங்குதளம். தமிழ்-முதல் HTTP வலைச்சேவையகம், கோப்பு, சூழல், ஸ்ட்ரீமிங் மற்றும் பிழை மேலாண்மை.',
      en: 'The Node.js runtime. Provides Tamil-first HTTP server, file utilities, environment config, streaming, and error APIs.'
    },
    purpose: {
      ta: 'Node.js-ல் `.tamil` கோப்புகளை நேரடியாக இயக்குதல் மற்றும் முழுமையான தமிழ் வலைச்சேவையக சேவைகளை வழங்குதல்.',
      en: 'Compiles and loads .tamil files as ES modules and provides comprehensive Tamil-first server and system capabilities.'
    },
    install: 'npm install @akazhi/node',
    isApplicationImport: true,
    responsibilities: [
      { ta: 'வலைச்சேவையகம்(): HTTP/1.1 சேவையகம், வழி அமைப்புகள் மற்றும் CORS/பாதுகாப்பு', en: 'வலைச்சேவையகம்(): Fast, secure HTTP server with routes and CORS support' },
      { ta: 'கோரிக்கை & பதில்: தமிழ் முறைப்பெயர்களுடன் கூடிய கோரிக்கை-பதில் மாதிரிகள்', en: 'Request & Response: Intuitive Tamil-native HTTP interaction primitives' },
      { ta: 'பதில்.ஓடை & ஓடைமூலம்: பேக்-பிரஷர் ஆதரவுடன் நினைவகச் சேமிப்பு ஸ்ட்ரீமிங்', en: 'பதில்.ஓடை & ஓடைமூலம்: Memory-efficient streaming with backpressure control' },
      { ta: 'கோப்பு & சூழல்: கோப்பு வாசிப்பு, எழுதுதல் மற்றும் சூழல் மாறிகள்', en: 'கோப்பு & சூழல்: File system I/O and process environment utilities' },
      { ta: 'நிறுத்தும்போது(): முறைசார் நிறுத்தம் மற்றும் சமிக்ஞை மேலாண்மை (SIGINT/SIGTERM)', en: 'நிறுத்தும்போது(): Graceful process termination and connection draining' }
    ],
    publicApi: [
      { name: 'வலைச்சேவையகம்(options)', desc: { ta: 'புதிய சேவையக நிகழ்வை உருவாக்குகிறது', en: 'Creates an HTTP server instance' } },
      { name: 'கோப்பு', desc: { ta: 'படி, எழுது, படிJSON, எழுதுJSON, உள்ளதா, பட்டியல்', en: 'File I/O utilities' } },
      { name: 'சூழல்', desc: { ta: 'பெறு, தேவை, எண், உண்மை, உள்ளதா', en: 'Environment variable utilities' } },
      { name: 'நிலை', desc: { ta: 'சரி (200), உருவாக்கப்பட்டது (201), தவறானகோரிக்கை (400), etc.', en: 'HTTP status codes constants' } },
      { name: 'ஓடைமூலம்(iterable)', desc: { ta: 'ஸ்ட்ரீமிங் பதில் உருவாக்கும் தமிழ் துணை நிரல்', en: 'Helper for streaming chunks' } },
      { name: 'அச்சிடு(...args)', desc: { ta: 'தமிழ் அச்சிடல் துணைச் செயல்பாடு', en: 'Print helper' } }
    ],
    dependencies: ['@akazhi/core', '@akazhi/errors', 'tamilscript'],
    usageExample: `இறக்குமதி { வலைச்சேவையகம், நிலை, அச்சிடு } இருந்து "@akazhi/node";

நிலையான சேவையகம் = வலைச்சேவையகம்();

சேவையகம்.பெறு("/", செயல் (கோரிக்கை, பதில்) {
  பதில்.நிலை(நிலை.சரி).ஜேசன்({ செய்தி: "வணக்கம் AKAZHI!" });
});

காத்திரு சேவையகம்.தொடங்கு({ துறைமுகம்: $௩௦௦௦ });`
  },
  {
    id: 'cli',
    name: '@akazhi/cli',
    version: '0.1.0',
    type: 'main',
    status: 'published',
    summary: {
      ta: 'AKAZHI கட்டளை வரி இடைமுகம் (CLI). dev, build, start, check, format, doctor மற்றும் console கட்டளைகள்.',
      en: 'The developer CLI binary providing commands for project management, compilation, linting, formatting, and diagnostics.'
    },
    purpose: {
      ta: 'திட்டங்களை உருவாக்குதல், கண்காணிக்கப்பட்ட வளர்ச்சிச் சூழலை இயக்குதல், உற்பத்திக்குத் தொகுத்தல், மற்றும் குறியீட்டு நலனைப் பேணுதல்.',
      en: 'Manages the complete development lifecycle from scaffolding to production compilation and diagnostics.'
    },
    install: 'npm install -g @akazhi/cli # அல்லது npx akazhi',
    isApplicationImport: false,
    responsibilities: [
      { ta: 'akazhi dev: வளர்ச்சி சேவையகம் மற்றும் ஆஃப்லைன் பணியிடம் தொடங்குதல்', en: 'akazhi dev: Starts dev server with watch mode and console integration' },
      { ta: 'akazhi build: `.tamil` கோப்புகளை உற்பத்தி ESM JavaScript ஆக மாற்றுதல்', en: 'akazhi build: Compiles sources to dist/ JavaScript and external source maps' },
      { ta: 'akazhi start: தொகுக்கப்பட்ட உற்பத்தி குறியீடுகளை இயக்குதல்', en: 'akazhi start: Runs dist/ output under production environment policy' },
      { ta: 'akazhi check & format: தொடரியல் சரிபார்ப்பு மற்றும் அழகுபடுத்துதல்', en: 'akazhi check & format: Validates syntax and safely formats source files' },
      { ta: 'akazhi doctor: கணினி மற்றும் திட்டத் தேவைகள் ஆரோக்கிய சோதனை', en: 'akazhi doctor: Diagnoses environment and dependency health' }
    ],
    publicApi: [
      { name: 'akazhi dev [--watch] [--host] [--port] [--no-console]', desc: { ta: 'வளர்ச்சி சேவையகம்', en: 'Development server' } },
      { name: 'akazhi build [--outDir]', desc: { ta: 'உற்பத்தி தொகுப்பு', en: 'Production compiler' } },
      { name: 'akazhi start [--host] [--port]', desc: { ta: 'உற்பத்தி இயக்கம்', en: 'Production server' } },
      { name: 'akazhi check [paths]', desc: { ta: 'தொடரியல் சோதனை', en: 'Syntax linter' } },
      { name: 'akazhi format [--check|--write]', desc: { ta: 'மூல வடிவமைப்பு', en: 'AST-safe formatter' } },
      { name: 'akazhi doctor', desc: { ta: 'நலன் சோதனை', en: 'System health check' } }
    ],
    dependencies: ['@akazhi/node', '@akazhi/core', '@akazhi/formatter', '@akazhi/console'],
    usageExample: `$ akazhi dev --watch
$ akazhi check src
$ akazhi format --write
$ akazhi build`
  },
  {
    id: 'create-akazhi',
    name: 'create-akazhi',
    version: '0.1.0',
    type: 'main',
    status: 'published',
    summary: {
      ta: '`npm create akazhi@latest` தொடக்கி. புதிய தமிழ்-முதல் Node.js திட்டங்களை உருவாக்குகிறது.',
      en: 'The project scaffolding initializer for npm create akazhi@latest.'
    },
    purpose: {
      ta: 'ஒரு கட்டளையில் சிறந்த கட்டமைப்புடனும் மாதிரி கோப்புகளுடனும் புதிய திட்டத்தை அமைத்துக் கொடுத்தல்.',
      en: 'Scaffolds production-structured AKAZHI applications with controllers, routes, config, and tests in seconds.'
    },
    install: 'npm create akazhi@latest my-app',
    isApplicationImport: false,
    responsibilities: [
      { ta: 'Node.js மாதிரித் திட்டத்தை உடனடியாக உருவாக்குதல்', en: 'Instant scaffolding of the official Node.js server template' },
      { ta: 'அமைவடிவக் கோப்பு (akazhi.config.json) மற்றும் package.json அமைத்தல்', en: 'Generates akazhi.config.json, sample data, and ESM package.json' },
      { ta: 'சார்புகளை தானாக நிறுவுதல் (npm install)', en: 'Runs npm install automatically unless --skip-install is specified' }
    ],
    publicApi: [
      { name: 'create-akazhi <project-directory> [--skip-install] [--force]', desc: { ta: 'திட்டம் உருவாக்கும் முதன்மை கட்டளை', en: 'Scaffolding launcher CLI' } }
    ],
    dependencies: ['@akazhi/cli'],
    usageExample: `$ npm create akazhi@latest my-tamil-backend
$ cd my-tamil-backend
$ npm run dev`
  },
  {
    id: 'akazhi',
    name: '@akazhi/akazhi',
    version: '0.1.0',
    type: 'main',
    status: 'workspace',
    summary: {
      ta: 'AKAZHI திட்டத்தின் முதன்மை குடைத் தொகுப்பு (Umbrella Package).',
      en: 'Main umbrella package of the AKAZHI framework workspace.'
    },
    purpose: {
      ta: 'கட்டமைப்பின் உட்கூறுகளை ஒருங்கிணைக்கும் தொகுப்பு. தற்போதைய தயாரிப்பு பயன்பாடுகளுக்கு `@akazhi/node` மற்றும் `@akazhi/cli` பரிந்துரைக்கப்படுகிறது.',
      en: 'Acts as the core umbrella within the repository workspace. Application developers directly install and use @akazhi/node and @akazhi/cli.'
    },
    install: 'npm install akazhi (களஞ்சியத்தில் உள்ளது)',
    isApplicationImport: false,
    responsibilities: [
      { ta: 'கட்டமைப்புக் கூறுகளை ஒருங்கிணைத்தல்', en: 'Framework umbrella coordination across monorepo packages' },
      { ta: 'களஞ்சிய நிலை சோதனைகள் மற்றும் ஒருங்கிணைப்பு', en: 'Ecosystem integration and shared package baseline' }
    ],
    publicApi: [
      { name: 'akazhi/compiler', desc: { ta: 'மூலக் குறியீட்டுத் தொகுப்பி', en: 'Internal compiler entry point' } },
      { name: 'akazhi/diagnostics', desc: { ta: 'கண்டறிதல் முறைமைகள்', en: 'Internal diagnostics utilities' } }
    ],
    dependencies: ['@akazhi/core', 'tamilscript'],
    usageExample: `// உட்புற குடைத் தொகுப்பு (Internal umbrella reference)
import { compileTamil } from "akazhi/compiler";`
  },
  {
    id: 'errors',
    name: '@akazhi/errors',
    version: '0.1.0',
    type: 'supporting',
    status: 'published',
    summary: {
      ta: 'தமிழ்-முதல் பிழை கண்டறிதல்கள், அடுக்குக் கண்காணிப்பு (Stack Trace), மற்றும் நகல் தடுப்பு.',
      en: 'Tamil-first error diagnostics, formatted stack handling, and duplicate error suppression.'
    },
    purpose: {
      ta: 'நிரல் பிழைகளை மூலக் குறியீட்டின் சரியான வரிகளுடன் இணைத்து, தெளிவான தமிழ் தலைப்பு மற்றும் உதவி வழிகாட்டல்களுடன் வழங்குதல்.',
      en: 'Maps runtime errors back to .tamil source lines using source maps, preventing confusing Node.js stack traces.'
    },
    install: 'npm install @akazhi/errors',
    isApplicationImport: false,
    responsibilities: [
      { ta: 'மூல வரைபடம் (Source Map) அடிப்படையிலான துல்லியமான வரி கண்டறிதல்', en: 'High-precision source map resolution for original .tamil files' },
      { ta: 'தமிழ் பிழைச் செய்திகள் மற்றும் தீர்வு யோசனைகள் வழங்குதல்', en: 'Provides clear Tamil error titles, causes (ஏன்), and hints (உதவி)' },
      { ta: 'ஒரே பிழை மீண்டும் மீண்டும் திரையில் தோன்றுவதைத் தடுத்தல் (Deduplication)', en: 'Deduplicates identical error storms during development' }
    ],
    publicApi: [
      { name: 'createDiagnostic(err, options)', desc: { ta: 'தமிழ் பிழைப் பொருளை உருவாக்குதல்', en: 'Constructs structured Tamil diagnostic object' } },
      { name: 'formatDiagnostic(diagnostic)', desc: { ta: 'முனையத்திற்கு ஏற்ற அழகிய வடிவமைப்பு', en: 'Pretty-prints terminal diagnostic box with codeframe' } }
    ],
    dependencies: ['@jridgewell/trace-mapping'],
    usageExample: `import { createDiagnostic, formatDiagnostic } from "@akazhi/errors";

const diag = createDiagnostic(new Error("File not found"), { file: "main.tamil", line: 12 });
console.error(formatDiagnostic(diag));`
  },
  {
    id: 'formatter',
    name: '@akazhi/formatter',
    version: '0.1.0',
    type: 'supporting',
    status: 'published',
    summary: {
      ta: 'TamilScript மற்றும் AKAZHI-க்கான பிரத்யேக தமிழ் மூலக் குறியீட்டு வடிவமைப்பாளர் (Source Formatter).',
      en: 'Dedicated AST-safe source code formatter tailored for TamilScript and AKAZHI syntax.'
    },
    purpose: {
      ta: 'தமிழ் திறவுச்சொற்கள், எண்கள் ($௩௦௦௦), மற்றும் வரம்புகளை எவ்வித சிதைவுமின்றி பாதுகாப்பாக வடிவமைத்து அழகுபடுத்துதல்.',
      en: 'Formats .tamil source files cleanly while guaranteeing AST preservation, comment preservation, and numeral safety.'
    },
    install: 'npm install @akazhi/formatter',
    isApplicationImport: false,
    responsibilities: [
      { ta: 'AST பாதுகாப்பு சரிபார்ப்பு: வடிவமைப்பிற்கு முன்/பின் AST ஒப்பிடுதல்', en: 'AST Safety: Verifies normalized AST identity before committing writes' },
      { ta: 'தமிழ் எண்கள் ($௧௦௦) மற்றும் வரம்புகளை ($௧..$௫) பாதுகாத்தல்', en: 'Preserves Tamil numerals, decimals, and range syntax completely' },
      { ta: 'அணுகல் முறைகள் மற்றும் இடைவெளிகளை சீரமைத்தல்', en: 'Normalizes indentation, spacing, and object layouts' }
    ],
    publicApi: [
      { name: 'format(source, options)', desc: { ta: 'மூலக் குறியீட்டை வடிவமைக்கிறது', en: 'Formats TamilScript code string' } },
      { name: 'formatFile(filePath, options)', desc: { ta: 'கோப்பை நேரடியாக வடிவமைக்கிறது', en: 'Formats a file on disk atomically' } }
    ],
    dependencies: ['tamilscript', 'acorn'],
    usageExample: `import { format } from "@akazhi/formatter";

const formattedCode = await format(rawTamilCode, { indent: 2 });`
  },
  {
    id: 'console',
    name: '@akazhi/console',
    version: '0.1.0',
    type: 'supporting',
    status: 'published',
    summary: {
      ta: 'ஆஃப்லைன் உலாவி அடிப்படையிலான ஊடாடும் முனையம் மற்றும் பணியிடம் (Browser Terminal & Workspace).',
      en: 'Offline browser-based development workspace and terminal for running TamilScript with the AKAZHI runtime.'
    },
    purpose: {
      ta: 'டெவலப்பர்கள் தங்கள் இணைய உலாவியிலேயே குறியீடுகளை இயக்கவும், பிழைகளை உடனுக்குடன் காணவும், ஊடாடவும் உதவுதல்.',
      en: 'Empowers developers with a visual in-browser terminal, live process controls, and runtime diagnostics without internet access.'
    },
    install: 'npm install @akazhi/console',
    isApplicationImport: false,
    responsibilities: [
      { ta: 'உள்ளூர் 127.0.0.1-ல் ஆஃப்லைனாக இயங்கும் உலாவிக் கட்டுப்பாட்டு அறை', en: 'Zero-cloud offline browser control plane running on localhost' },
      { ta: 'சேவையகத்தின் stdout/stderr பதிவுகளை நிகழ்நேரத்தில் காட்டுதல்', en: 'Live streaming of application stdout, stderr, and diagnostics' },
      { ta: 'இயக்கு, நிறுத்து, மற்றும் மறுதொடக்கம் கட்டுப்பாடுகள்', en: 'Start, Stop, and Restart controls bound directly to the runtime process' }
    ],
    publicApi: [
      { name: 'startConsole(options)', desc: { ta: 'உலாவி பணியிட சேவையகத்தைத் தொடங்குதல்', en: 'Launches the console HTTP server and workspace' } }
    ],
    dependencies: ['@akazhi/node', '@akazhi/errors'],
    usageExample: `$ akazhi console
# உலாவி தானாக http://127.0.0.1:<port>-ல் திறக்கும்`
  }
];
