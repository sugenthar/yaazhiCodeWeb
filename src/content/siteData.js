/**
 * Verified YaazhiCode facts for the official website.
 * Sources: the language repository, the official IDE repository, and published
 * package metadata. Page copy stays focused on using and learning the language.
 */
export const LINKS = {
  repository: 'https://github.com/sugenthar/yaazhiCode',
  issues: 'https://github.com/sugenthar/yaazhiCode/issues',
  languageSource: 'https://github.com/sugenthar/yaazhiCode/tree/main/YaazhiCode',
  ideSource: 'https://github.com/sugenthar/yaazhiCode/tree/main/Console',
  npmLanguage: 'https://www.npmjs.com/package/yaazhicode',
  npmIde: 'https://www.npmjs.com/package/yaazhicode-ide',
};

export const PROJECT_FACTS = {
  version: '0.1.0',
  nodeRequirement: '>=22.18.0',
  sourceExtension: '.yaazhi',
  languageLicense: 'MIT',
  ideLicense: 'Apache-2.0',
  keywordCount: 40,
  builtinModuleCount: 17,
  verifiedPlatform: { en: 'Windows 10/11 x64', ta: 'Windows 10/11 x64' },
  npmRegistryNote: {
    en: 'Both packages were listed at 0.1.0 when this site was last verified. Check the published version before installing.',
    ta: 'இந்தத் தளம் கடைசியாகச் சரிபார்க்கப்பட்டபோது இரண்டு தொகுப்புகளும் 0.1.0 ஆக இருந்தன. நிறுவுவதற்கு முன் வெளியிடப்பட்ட பதிப்பைச் சரிபார்க்கவும்.',
  },
};

export const BRAND = {
  name: 'YaazhiCode',
  tagline: { en: 'Programming in Tamil.', ta: 'தமிழில் நிரலாக்கம்.' },
  message: {
    en: 'Think in your language. Program in your language.',
    ta: 'உங்கள் மொழியில் சிந்தியுங்கள். உங்கள் மொழியில் நிரலாக்குங்கள்.',
  },
  heroTitle: { en: 'Programming in Tamil.', ta: 'தமிழில் நிரலாக்கம்.' },
  heroLead: {
    en: 'YaazhiCode brings programming concepts, creativity, and technology closer to Tamil speakers.',
    ta: 'YaazhiCode நிரலாக்கக் கருத்துகள், படைப்பாற்றல், தொழில்நுட்பம் ஆகியவற்றைத் தமிழ் பேசும் மக்களுக்கு நெருக்கமாகக் கொண்டு வருகிறது.',
  },
};

export const NAV_ITEMS = [
  { id: 'home', key: 'nav_home' },
  { id: 'about', key: 'nav_about' },
  { id: 'features', key: 'nav_features' },
  { id: 'install', key: 'nav_install' },
  { id: 'learn', key: 'nav_learn' },
  { id: 'language', key: 'nav_language' },
  { id: 'examples', key: 'nav_examples' },
  { id: 'ide', key: 'nav_ide' },
  { id: 'future', key: 'nav_future' },
];

/** Basic loopback server pattern from examples/http-api-0.1.0/01-basic-server.yaazhi. */
export const SERVER_CODE = `இறக்குமதி { சேவகன் } இருந்து "வலை";

நிலையான சே = சேவகன்();

சே.பெறு("/", செயல்(கோரிக்கை, பதில்) {
  பதில்.உரை_அனுப்பு("Yaazhicode running!");
});

ஒத்திசைவற்ற செயல் முதன்மை() {
  காத்திரு சே.கேள்($௩௦௦௦, "127.0.0.1");
  அச்சிடு("Listening on http://127.0.0.1:" + உரையாக்கு(சே.துறை_பெறு()) + "/");
}

முதன்மை();`;

export const HERO_CODE = SERVER_CODE;

export const OUTPUT_SERVER = 'Listening on http://127.0.0.1:3000/';

export const SERVER_RESPONSE = 'Yaazhicode running!';

export const STATUS = {
  available: { en: 'Available now', ta: 'இப்போது கிடைக்கிறது' },
  development: { en: 'In development', ta: 'வளர்ச்சியில் உள்ளது' },
  planned: { en: 'Planned — not available', ta: 'திட்டமிடப்பட்டது — இல்லை' },
  concept: { en: 'Future concept', ta: 'எதிர்காலக் கருத்து' },
  future: { en: 'Future possibility', ta: 'எதிர்கால சாத்தியம்' },
};

/** Exact command surface from the published CLI help and docs/CLI.md. */
export const CLI_COMMANDS = [
  { command: 'yaazhicode init [project]', en: 'Create a new project.', ta: 'புதிய திட்டத்தை உருவாக்கும்.' },
  { command: 'yaazhicode run <file.yaazhi>', en: 'Run a .yaazhi program.', ta: 'ஒரு .yaazhi நிரலை இயக்கும்.' },
  { command: 'yaazhicode check <file.yaazhi>', en: 'Show diagnostics without running.', ta: 'இயக்காமல் நோயறிதிகளைக் காட்டும்.' },
  { command: 'yaazhicode format [--write|--check] <file.yaazhi>', en: 'Format source or check its formatting.', ta: 'குறியீட்டை வடிவமைக்கும் அல்லது சரிபார்க்கும்.' },
  { command: 'yaazhicode fmt <file.yaazhi>', en: 'Short form of format.', ta: 'format கட்டளையின் குறுகிய வடிவம்.' },
  { command: 'yaazhicode test [files...]', en: 'Run .yaazhi test programs.', ta: '.yaazhi சோதனை நிரல்களை இயக்கும்.' },
  { command: 'yaazhicode debug <file.yaazhi>', en: 'Run with source-aware error detail.', ta: 'மூலத்தையறிந்த பிழை விவரங்களுடன் இயக்கும்.' },
  { command: 'yaazhicode repl', en: 'Start an interactive session.', ta: 'ஊடாடும் அமர்வைத் தொடங்கும்.' },
  { command: 'yaazhicode version', en: 'Show the installed version.', ta: 'நிறுவப்பட்ட பதிப்பைக் காட்டும்.' },
  { command: 'yaazhicode api [module] [--json] [--search term]', en: 'Discover available language APIs.', ta: 'கிடைக்கும் மொழி API-களைக் காணும்.' },
  { command: 'yaazhicode console [folder]', en: 'Open a folder in the local IDE.', ta: 'கோப்பகத்தை உள்ளூர் IDE-ல் திறக்கும்.' },
  { command: 'yaazhicode ide [folder]', en: 'Open the official IDE.', ta: 'அதிகாரப்பூர்வ IDE-ஐத் திறக்கும்.' },
  { command: 'yaazhicode migrate [folder] [--dry-run] [--yes]', en: 'Convert a pre-YaazhiCode project to .yaazhi.', ta: 'பழைய திட்டத்தை .yaazhi ஆக மாற்றும்.' },
  { command: 'yaazhicode help', en: 'Show all commands.', ta: 'அனைத்து கட்டளைகளையும் காட்டும்.' },
];
