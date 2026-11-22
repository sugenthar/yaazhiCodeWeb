const L = (en, ta) => ({ en, ta });

export const requirements = [
  {
    label: L('Operating system', 'இயக்க முறைமை'),
    value: L('Windows 10/11 x64 — verified in this release', 'Windows 10/11 x64 — இந்த வெளியீட்டில் சரிபார்க்கப்பட்டது'),
  },
  { label: L('Install prerequisite', 'நிறுவல் முன்நிபந்தனை'), value: 'Node.js 22.18.0 or newer' },
  { label: L('Package manager', 'தொகுப்பு மேலாளர்'), value: 'npm' },
  { label: L('Shell', 'ஷெல்'), value: L('PowerShell or terminal', 'PowerShell அல்லது முனையம்') },
  { label: L('Terminal font', 'முனைய எழுத்துரு'), value: L('Tamil-capable font (Windows Terminal recommended)', 'தமிழ் எழுத்துரு (Windows Terminal பரிந்துரை)') },
];

export const cliInstallSteps = [
  {
    n: '01',
    title: L('Check the prerequisite', 'முன்நிபந்தனையைச் சரிபார்'),
    body: L('Install Node.js 22.18.0 or newer if these commands are not available.', 'இந்தக் கட்டளைகள் இல்லையெனில் Node.js 22.18.0 அல்லது புதியதை நிறுவவும்.'),
    code: 'node --version\nnpm --version',
  },
  {
    n: '02',
    title: L('Open PowerShell', 'PowerShell திற'),
    body: L('Use a normal user terminal. Administrator rights are usually unnecessary.', 'இயல்புநிலை பயனர் முனையம் பயன்படுத்தவும். பொதுவாக administrator தேவையில்லை.'),
    code: '# Start menu → Windows PowerShell',
  },
  {
    n: '03',
    title: L('Install YaazhiCode', 'YaazhiCode-ஐ நிறுவு'),
    body: L('Install the package that provides the yaazhicode command.', 'yaazhicode கட்டளையை வழங்கும் தொகுப்பை நிறுவவும்.'),
    code: 'npm install -g yaazhicode',
  },
  {
    n: '04',
    title: L('Verify the install', 'நிறுவலை உறுதிப்படு'),
    body: L('The installed command reports the version and the full command list.', 'நிறுவப்பட்ட கட்டளை பதிப்பையும் முழு கட்டளைப் பட்டியலையும் காட்டும்.'),
    code: 'yaazhicode --version\nyaazhicode --help',
  },
  {
    n: '05',
    title: L('Create your first .yaazhi file', 'முதல் .yaazhi கோப்பை உருவாக்கு'),
    body: L('Source files are UTF-8 and use the .yaazhi extension.', 'மூலக் கோப்புகள் UTF-8 மற்றும் .yaazhi நீட்டிப்பைப் பயன்படுத்தும்.'),
    code: '// வணக்கம்.yaazhi\nஅச்சிடு("வணக்கம், உலகம்!");\nநிலையான பெயர் = "YaazhiCode";\nஅச்சிடு("மொழி: " + பெயர்);',
  },
  {
    n: '06',
    title: L('Run the program', 'நிரலை இயக்கு'),
    body: L('Quote paths containing spaces or Tamil characters.', 'இடைவெளி அல்லது தமிழ் எழுத்துகள் உள்ள பாதைகளை மேற்கோளிடவும்.'),
    code: 'yaazhicode run ".\\வணக்கம்.yaazhi"',
  },
];

export const localSourceInstall = {
  title: L('Build and install from a source checkout', 'மூலக் களஞ்சியத்திலிருந்து உருவாக்கி நிறுவுதல்'),
  body: L('When working from a source checkout, build the package and install the generated file.', 'மூலக் களஞ்சியத்திலிருந்து பணியாற்றும்போது தொகுப்பை உருவாக்கி உருவான கோப்பை நிறுவவும்.'),
  code: "Set-Location 'path\\to\\YaazhiCode'\nnpm ci\nnpm run build\nnpm pack\nnpm install -g .\\yaazhicode-0.1.0.tgz",
};

export const ideSteps = [
  {
    n: '01',
    title: L('Install the IDE', 'IDE-ஐ நிறுவு'),
    body: L('Install the official editor package. It brings the matching language package with it.', 'அதிகாரப்பூர்வ எடிட்டர் தொகுப்பை நிறுவவும். அது பொருந்தும் மொழித் தொகுப்பையும் கொண்டு வரும்.'),
    code: 'npm install -g yaazhicode-ide',
  },
  {
    n: '02',
    title: L('Open the IDE', 'IDE-ஐத் திற'),
    body: L('It opens at a local address. Use --no-open to print the address instead.', 'இது உள்ளூர் முகவரியில் திறக்கும். முகவரியை மட்டும் காண --no-open பயன்படுத்தவும்.'),
    code: 'yaazhicode-ide\nyaazhicode-ide --no-open\nyaazhicode-ide "D:\\Projects\\My Tamil Project" --port 5174',
  },
  {
    n: '03',
    title: L('Create or open a project', 'திட்டத்தை உருவாக்கு அல்லது திற'),
    body: L('New projects receive src/main.yaazhi and README.md. Tamil names and spaces are supported.', 'புதிய திட்டங்களில் src/main.yaazhi, README.md உருவாகும். தமிழ்ப் பெயர்களும் இடைவெளிகளும் ஆதரிக்கப்படும்.'),
    code: '# Welcome view → New Project / Open Project',
  },
  {
    n: '04',
    title: L('Create a file', 'கோப்பை உருவாக்கு'),
    body: L('Use Explorer to create files and folders, rename items, and delete items after confirmation.', 'Explorer மூலம் கோப்புகளையும் கோப்பகங்களையும் உருவாக்க, பெயர் மாற்ற, உறுதிப்பட்ட பின் நீக்கலாம்.'),
    code: '# Explorer → New File → பெயர்.yaazhi',
  },
  {
    n: '05',
    title: L('Write and run', 'எழுதி இயக்கு'),
    body: L('Edit a .yaazhi file, then run it. Output and Tamil diagnostics appear in the bottom panel.', '.yaazhi கோப்பைத் திருத்தி இயக்கவும். வெளியீடும் தமிழ் நோயறிதிகளும் கீழ் பலகையில் தோன்றும்.'),
    code: 'F5 / Ctrl+Enter   Run\nShift+F5          Stop\nCtrl+S            Save\nCtrl+Space        Completions\nShift+Alt+F       Format\nAlt+T             Tamil / Tanglish / English',
  },
];

export const ideFeatureMatrix = [
  { feature: L('Editor', 'எடிட்டர்'), detail: L('Line numbers, word wrap, find and replace, format on save, and Tamil word completions', 'வரி எண்கள், வரி மடிப்பு, தேடல் மற்றும் மாற்றம், சேமிப்பில் வடிவமைப்பு, தமிழ்ச் சொல் பரிந்துரைகள்'), available: true },
  { feature: L('Run / Check / Format', 'இயக்கு / சரிபார் / வடிவமை'), detail: L('Uses the installed official yaazhicode command', 'நிறுவப்பட்ட அதிகாரப்பூர்வ yaazhicode கட்டளையைப் பயன்படுத்தும்'), available: true },
  { feature: L('Terminal and session', 'முனையம் மற்றும் அமர்வு'), detail: L('A project terminal and an interactive YaazhiCode session with streamed output', 'திட்ட முனையம் மற்றும் ஓட்ட வெளியீட்டுடன் ஊடாடும் YaazhiCode அமர்வு'), available: true },
  { feature: L('Docs and examples', 'ஆவணங்கள் மற்றும் எடுத்துக்காட்டுகள்'), detail: L('Local documentation viewer and official example importer', 'உள்ளூர் ஆவணப் பார்வையாளர், அதிகாரப்பூர்வ எடுத்துக்காட்டு இறக்குமதி'), available: true },
  { feature: L('Interactive debugging', 'ஊடாடும் பிழைத் திருத்தம்'), detail: L('Breakpoints, stepping, and variable inspection are not available', 'குறிப்பிட்ட இடங்களில் நிறுத்தம், படிப்படியான இயக்கம், மாறி ஆய்வு கிடைக்கவில்லை'), available: false },
];

export const ideShortcuts = [
  ['F5 / Ctrl+Enter', L('Save and run', 'சேமித்து இயக்கு')],
  ['Shift+F5', L('Stop the active run', 'இயங்கும் நிரலை நிறுத்து')],
  ['Ctrl+S', L('Save the active file', 'தற்போதைய கோப்பைச் சேமி')],
  ['Ctrl+B', L('Toggle the sidebar', 'பக்கப்பட்டியை மாற்று')],
  ['Ctrl+F', L('Find and replace', 'கண்டுபிடித்து மாற்று')],
  ['Ctrl+Shift+F', L('Search the project', 'திட்டத்தில் தேடு')],
  ['Ctrl+Space', L('Open completions', 'பரிந்துரைகளைத் திற')],
  ['Alt+T', L('Cycle Tamil / Tanglish / English typing', 'தமிழ் / Tanglish / ஆங்கில தட்டச்சு மாற்று')],
  ['Shift+Alt+F', L('Format the active file', 'தற்போதைய கோப்பை வடிவமை')],
  ['Ctrl+L', L('Clear terminal or session output', 'முனையம் அல்லது அமர்வு வெளியீட்டை அழி')],
  ['Escape', L('Close dialogs and popups', 'உரையாடல்களை மூடு')],
];

export const troubleshooting = [
  {
    title: L('Install prerequisite missing', 'நிறுவல் முன்நிபந்தனை இல்லை'),
    body: L('Install Node.js 22.18.0 or newer, restart the terminal, then run node --version.', 'Node.js 22.18.0 அல்லது புதியதை நிறுவி, முனையத்தை மறுதொடக்கம் செய்து node --version இயக்கவும்.'),
  },
  {
    title: L('npm command not recognised', 'npm கட்டளை அங்கீகரிக்கப்படவில்லை'),
    body: L('Reopen the terminal after installing the prerequisite and check where npm.', 'முன்நிபந்தனை நிறுவிய பின் முனையத்தை மீண்டும் திறந்து where npm என சரிபார்க்கவும்.'),
  },
  {
    title: L('Package installation errors', 'தொகுப்பு நிறுவல் பிழைகள்'),
    body: L('EACCES or EPERM usually means the chosen global install location is not writable. Use a user-level location.', 'EACCES/EPERM என்பது தேர்ந்தெடுத்த உலகளாவிய நிறுவல் இடம் எழுதக்கூடியதாக இல்லை என்பதைக் குறிக்கும். பயனர்-நிலை இடத்தைப் பயன்படுத்தவும்.'),
  },
  {
    title: L('Command not found after install', 'நிறுவலுக்குப் பின் கட்டளை இல்லை'),
    body: L('Open a new terminal, run where yaazhicode, and check %APPDATA%\\npm. For the current session only: $env:PATH += ";$env:APPDATA\\npm".', 'புதிய முனையம் திறந்து where yaazhicode இயக்கி %APPDATA%\\npm சரிபார்க்கவும். தற்போதைய session-க்கு மட்டும்: $env:PATH += ";$env:APPDATA\\npm".'),
  },
  {
    title: L('IDE not opening', 'IDE திறக்கவில்லை'),
    body: L('Run yaazhicode-ide --no-open to see the local address. Change the port with --port 5174 and confirm the matching language version is installed.', 'உள்ளூர் முகவரி காண yaazhicode-ide --no-open இயக்கவும். --port 5174 மூலம் துறைமுகத்தை மாற்றி, பொருந்தும் மொழிப் பதிப்பு உள்ளதா என உறுதிப்படுத்தவும்.'),
  },
  {
    title: L('Tamil text looks incorrect', 'தமிழ் உரை சரியாகத் தெரியவில்லை'),
    body: L('Use Windows Terminal with a Tamil-capable font. For garbled output, run chcp 65001.', 'தமிழ் எழுத்துரு கொண்ட Windows Terminal பயன்படுத்தவும். சிதறிய வெளியீட்டுக்கு chcp 65001 இயக்கவும்.'),
  },
  {
    title: L('Program errors', 'நிரல் பிழைகள்'),
    body: L('Read the Tamil diagnostic with file, line, and column. Run yaazhicode check to validate imports. Write numerals with the $ prefix, for example $௧௨.', 'கோப்பு, வரி, நெடுவரிசையுடன் தமிழ் நோயறிதியைப் படிக்கவும். இறக்குமதிகளைச் சரிபார்க்க yaazhicode check இயக்கவும். எண்களை $௧௨ போல $ முன்னொட்டுடன் எழுதவும்.'),
  },
];
