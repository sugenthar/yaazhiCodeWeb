import { STATUS } from './siteData';

const L = (en, ta) => ({ en, ta });

/** Capabilities confirmed in the current release. Future ideas live on /future only. */
export const advantages = [
  {
    id: 'tamil-syntax',
    title: L('Tamil-first syntax', 'தமிழ்-முதல் தொடரியல்'),
    body: L(
      'Variables, conditions, loops, functions, and modules are written with Tamil words such as மாறி, என்றால், ஒவ்வொரு, செயல், and இறக்குமதி.',
      'மாறிகள், நிபந்தனைகள், சுழற்சிகள், செயல்கள், தொகுதிகள் ஆகியவை மாறி, என்றால், ஒவ்வொரு, செயல், இறக்குமதி போன்ற தமிழ்ச் சொற்களால் எழுதப்படுகின்றன.',
    ),
    status: STATUS.available,
  },
  {
    id: 'learn-concepts',
    title: L('Learn real programming concepts', 'உண்மையான நிரலாக்கக் கருத்துகள்'),
    body: L(
      'Practice values, data types, operators, decisions, repetition, functions, collections, modules, and error handling in one language.',
      'மதிப்புகள், தரவு வகைகள், இயக்குகள், முடிவெடுத்தல், மீண்டும் செய்தல், செயல்கள், தொகுப்புகள், தொகுதிகள், பிழை கையாளுதல் ஆகியவற்றை ஒரே மொழியில் பயிற்சி செய்யலாம்.',
    ),
    status: STATUS.available,
  },
  {
    id: 'first-language',
    title: L('Begin in your first language', 'முதல் மொழியில் தொடங்குங்கள்'),
    body: L(
      'Tamil words help learners focus on the idea behind the code instead of translating keywords before writing the first line.',
      'தமிழ்ச் சொற்கள், முதல் வரியை எழுதுவதற்கு முன் சொற்களை மொழிபெயர்ப்பதற்குப் பதிலாகக் குறியீட்டின் கருத்தில் கவனம் செலுத்த உதவுகின்றன.',
    ),
    status: STATUS.available,
  },
  {
    id: 'cli',
    title: L('Official command line', 'அதிகாரப்பூர்வ கட்டளை வரி'),
    body: L(
      'Create projects, run programs, check source, format code, discover available APIs, and use an interactive session.',
      'திட்டங்களை உருவாக்க, நிரல்களை இயக்க, குறியீட்டைச் சரிபார்க்க மற்றும் வடிவமைக்க, கிடைக்கும் API-களைக் காண, ஊடாடும் அமர்வைப் பயன்படுத்தலாம்.',
    ),
    status: STATUS.available,
  },
  {
    id: 'ide',
    title: L('Official YaazhiCode IDE', 'அதிகாரப்பூர்வ YaazhiCode IDE'),
    body: L(
      'Write .yaazhi files, run them, view output and diagnostics, and use the terminal, interactive session, docs viewer, and example importer.',
      '.yaazhi கோப்புகளை எழுதி இயக்க, வெளியீடும் நோயறிதிகளையும் காண, முனையம், ஊடாடும் அமர்வு, ஆவணப் பார்வையாளர், எடுத்துக்காட்டு இறக்குமதி ஆகியவற்றைப் பயன்படுத்தலாம்.',
    ),
    status: STATUS.available,
  },
  {
    id: 'modules',
    title: L('Built-in Tamil modules', 'உள்ளமைந்த தமிழ் தொகுதிகள்'),
    body: L(
      'Seventeen named modules cover files, paths, addresses, utilities, assertions, time, events, web, security, process, and more.',
      'கோப்புகள், பாதைகள், முகவரிகள், பயன்பாடுகள், உறுதிப்படுத்தல், நேரம், நிகழ்வுகள், வலை, பாதுகாப்பு, செயல்முறை உட்பட 17 பெயரிடப்பட்ட தொகுதிகள் உள்ளன.',
    ),
    status: STATUS.available,
  },
  {
    id: 'local-web',
    title: L('Local web applications', 'உள்ளூர் வலைப் பயன்பாடுகள்'),
    body: L(
      'The வலை and பாதுகாப்புவலை modules support local HTTP and HTTPS servers, routes, and request and response handling.',
      'வலை, பாதுகாப்புவலை தொகுதிகள் உள்ளூர் HTTP, HTTPS சேவையகங்கள், வழிகள், கோரிக்கை மற்றும் பதில் கையாளுதலை ஆதரிக்கின்றன.',
    ),
    status: STATUS.available,
  },
  {
    id: 'open',
    title: L('Documented in public', 'பொதுவில் ஆவணப்படுத்தப்பட்டது'),
    body: L(
      'Source, guides, examples, and tests are public. The language package uses MIT; the official IDE uses Apache-2.0.',
      'மூலம், வழிகாட்டிகள், எடுத்துக்காட்டுகள், சோதனைகள் பொதுவில் உள்ளன. மொழித் தொகுப்பு MIT; அதிகாரப்பூர்வ IDE Apache-2.0.',
    ),
    status: STATUS.available,
  },
];

export const applications = [
  {
    id: 'learning',
    title: L('Learning and classrooms', 'கற்றல் மற்றும் வகுப்பறை'),
    now: L(
      'Write small programs to practise variables, conditions, loops, functions, and collections using Tamil words.',
      'மாறிகள், நிபந்தனைகள், சுழற்சிகள், செயல்கள், தொகுப்புகளைத் தமிழ்ச் சொற்களால் பயிற்சி செய்ய சிறு நிரல்கள் எழுதலாம்.',
    ),
    status: STATUS.available,
  },
  {
    id: 'local-tools',
    title: L('Local tools', 'உள்ளூர் கருவிகள்'),
    now: L(
      'Use file and path modules to read, write, organise, and process local text files.',
      'உள்ளூர் உரைக் கோப்புகளைப் படிக்க, எழுத, ஒழுங்கமைக்க, செயலாக்க கோப்பு மற்றும் பாதை தொகுதிகளைப் பயன்படுத்தலாம்.',
    ),
    status: STATUS.available,
  },
  {
    id: 'web',
    title: L('Local web services', 'உள்ளூர் வலைச் சேவைகள்'),
    now: L(
      'Build loopback HTTP and HTTPS servers with routes, text responses, and structured data.',
      'வழிகள், உரை பதில்கள், கட்டமைக்கப்பட்ட தரவுடன் உள்ளூர் HTTP, HTTPS சேவையகங்களை உருவாக்கலாம்.',
    ),
    status: STATUS.available,
  },
  {
    id: 'text-programs',
    title: L('Text-based programs', 'உரை-அடிப்படை நிரல்கள்'),
    now: L(
      'Build record lists, result checks, input prompts, and small command-line utilities in Tamil.',
      'தமிழில் பதிவுப் பட்டியல்கள், முடிவு சரிபார்ப்புகள், உள்ளீட்டுக் கேள்விகள், சிறு கட்டளைவரி கருவிகளை உருவாக்கலாம்.',
    ),
    status: STATUS.available,
  },
];

export const ecosystem = [
  {
    name: 'yaazhicode',
    role: L('Language and commands', 'மொழி மற்றும் கட்டளைகள்'),
    detail: L(
      'The official package provides the language, standard library, built-in modules, examples, and the yaazhicode command.',
      'அதிகாரப்பூர்வ தொகுப்பு மொழி, நிலையான நூலகம், உள்ளமைந்த தொகுதிகள், எடுத்துக்காட்டுகள், yaazhicode கட்டளையை வழங்குகிறது.',
    ),
    license: 'MIT',
    version: '0.1.0',
    status: STATUS.available,
  },
  {
    name: 'yaazhicode-ide',
    role: L('Official editor', 'அதிகாரப்பூர்வ எடிட்டர்'),
    detail: L(
      'The official IDE for writing .yaazhi files, running programs, viewing output, and opening local documentation and examples.',
      '.yaazhi கோப்புகளை எழுத, நிரல்களை இயக்க, வெளியீட்டைக் காண, உள்ளூர் ஆவணங்களையும் எடுத்துக்காட்டுகளையும் திறக்க அதிகாரப்பூர்வ IDE.',
    ),
    license: 'Apache-2.0',
    version: '0.1.0',
    status: STATUS.available,
  },
];

export const boundaries = [
  {
    title: L('Built-in imports only', 'உள்ளமைந்த இறக்குமதிகள் மட்டும்'),
    body: L(
      'Programs import relative .yaazhi files or one of the 17 Tamil built-in module names.',
      'நிரல்கள் ஒப்பீட்டு .yaazhi கோப்புகளையோ 17 தமிழ் உள்ளமைந்த தொகுதிப் பெயர்களையோ மட்டும் இறக்குமதி செய்கின்றன.',
    ),
  },
  {
    title: L('Local networking only', 'உள்ளூர் வலையமைப்பு மட்டும்'),
    body: L(
      'Web clients and servers accept loopback hosts only.',
      'வலை கிளையண்டுகளும் சேவையகங்களும் loopback முகவரிகளை மட்டும் ஏற்கின்றன.',
    ),
  },
  {
    title: L('Documentation website only', 'ஆவணத் தளம் மட்டும்'),
    body: L(
      'This website is documentation. Run programs locally with the official command line or IDE.',
      'இந்தத் தளம் ஆவணங்களுக்கானது. நிரல்களை அதிகாரப்பூர்வ கட்டளை வரி அல்லது IDE மூலம் உள்ளூரில் இயக்கவும்.',
    ),
  },
  {
    title: L('Verified on Windows x64', 'Windows x64-ல் சரிபார்க்கப்பட்டது'),
    body: L(
      'Windows 10/11 x64 is the verified platform for release 0.1.0.',
      'Windows 10/11 x64 என்பது 0.1.0 வெளியீட்டிற்கான சரிபார்க்கப்பட்ட தளம்.',
    ),
  },
];
