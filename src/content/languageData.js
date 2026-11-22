const L = (en, ta) => ({ en, ta });

/**
 * The 40 active Tamil keyword spellings from docs/KEYWORDS.md.
 * Roles are written in plain language; internal token names are intentionally omitted.
 */
export const keywordGroups = [
  {
    id: 'declarations',
    title: L('Declarations', 'பிரகடனங்கள்'),
    keywords: [
      { word: 'நிலையான', role: L('Constant declaration', 'மாறிலி பிரகடனம்') },
      { word: 'மாறி', role: L('Changeable declaration', 'மாறக்கூடிய பிரகடனம்') },
      { word: 'மாற்றி', role: L('Changeable declaration', 'மாறக்கூடிய பிரகடனம்') },
      { word: 'செயல்', role: L('Function declaration', 'செயல் பிரகடனம்') },
      { word: 'வகுப்பு', role: L('Class declaration', 'வகுப்பு பிரகடனம்') },
      { word: 'உருவாக்கு', role: L('Class constructor', 'வகுப்பு உருவாக்கி') },
      { word: 'நிலையியல்', role: L('Class static member', 'வகுப்பு நிலையியல் உறுப்பு') },
    ],
  },
  {
    id: 'choices',
    title: L('Choices and loops', 'தேர்வுகளும் சுழற்சிகளும்'),
    keywords: [
      { word: 'என்றால்', role: L('If', 'என்றால்') },
      { word: 'இல்லை', role: L('Else', 'இல்லை') },
      { word: 'தேர்ந்தெடு', role: L('Select a case', 'நிலையைத் தேர்ந்தெடுக்கும்') },
      { word: 'நிலை', role: L('Case', 'நிலை') },
      { word: 'இயல்புநிலை', role: L('Default case', 'இயல்புநிலை') },
      { word: 'ஒவ்வொரு', role: L('For loop', 'ஒவ்வொரு சுழற்சி') },
      { word: 'இருக்கும்வரை', role: L('While loop', 'இருக்கும்வரை சுழற்சி') },
      { word: 'செய்', role: L('Do-while loop', 'செய்-இருக்கும்வரை சுழற்சி') },
      { word: 'நிறுத்து', role: L('Stop a loop or case', 'சுழற்சி அல்லது நிலையை நிறுத்தும்') },
      { word: 'தொடர்', role: L('Next iteration', 'அடுத்த சுற்றுக்குச் செல்லும்') },
    ],
  },
  {
    id: 'values',
    title: L('Values and functions', 'மதிப்புகளும் செயல்களும்'),
    keywords: [
      { word: 'கொடு', role: L('Return a value', 'மதிப்பைத் திருப்பும்') },
      { word: 'இது', role: L('Current object', 'தற்போதைய பொருள்') },
      { word: 'மேல்', role: L('Parent class', 'மேல் வகுப்பு') },
      { word: 'சேர்தல்', role: L('Inherit from a class', 'வகுப்பிலிருந்து பெற்றுக்கொள்ளும்') },
      { word: 'புதிய', role: L('Create an instance', 'புதிய நிகழ்வை உருவாக்கும்') },
      { word: 'நீக்கு', role: L('Delete a property', 'பண்பை நீக்கும்') },
      { word: 'வகை', role: L('Type query', 'வகைக் கேள்வி') },
      { word: 'உதாரணம்', role: L('Instance query', 'நிகழ்வுக் கேள்வி') },
      { word: 'உள்ளே', role: L('Membership query', 'உறுப்பினர் கேள்வி') },
      { word: 'வெற்று', role: L('Void expression', 'வெற்று கோவை') },
    ],
  },
  {
    id: 'modules-errors',
    title: L('Modules and errors', 'தொகுதிகளும் பிழைகளும்'),
    keywords: [
      { word: 'இறக்குமதி', role: L('Import', 'இறக்குமதி') },
      { word: 'ஏற்றுமதி', role: L('Export', 'ஏற்றுமதி') },
      { word: 'இருந்து', role: L('From', 'இருந்து') },
      { word: 'ஆக', role: L('Alias', 'மாற்றுப்பெயர்') },
      { word: 'முயற்சி', role: L('Try', 'முயற்சி') },
      { word: 'பிடி', role: L('Catch', 'பிடி') },
      { word: 'இறுதியில்', role: L('Finally', 'இறுதியில்') },
      { word: 'எறி', role: L('Raise an error', 'பிழையை எறியும்') },
    ],
  },
  {
    id: 'more-vocabulary',
    title: L('More vocabulary', 'மேலும் சொற்கள்'),
    keywords: [
      { word: 'ஒத்திசைவற்ற', role: L('Asynchronous modifier', 'ஒத்திசைவற்ற மாற்றி') },
      { word: 'காத்திரு', role: L('Wait expression', 'காத்திரு கோவை') },
      { word: 'வழங்கு', role: L('Expression keyword', 'கோவைச் சொற்குறி') },
      { word: 'உடன்', role: L('With statement', 'உடன் கூற்று') },
      { word: 'பிழைத்திருத்து', role: L('Statement keyword', 'கூற்றுச் சொற்குறி') },
    ],
  },
];

export const languageNotes = [
  {
    title: L('Numbers use a $ marker', 'எண்களுக்கு $ குறி தேவை'),
    body: L(
      'Write Tamil digits after $, for example $௧௨, $௧.௫, and $௧..$௫.',
      'தமிழ் இலக்கங்களுக்கு முன் $ குறி எழுதவும்; எடுத்துக்காட்டு $௧௨, $௧.௫, $௧..$௫.',
    ),
  },
  {
    title: L('Strings use double quotes', 'உரைக்கு இரட்டை மேற்கோள்கள்'),
    body: L(
      'Use "..." for text. Use வடிவமை to insert values into a message.',
      'உரைக்கு "..." பயன்படுத்தவும். செய்தியில் மதிப்புகளைச் சேர்க்க வடிவமை பயன்படுத்தவும்.',
    ),
  },
  {
    title: L('Statements end with a semicolon', 'கூற்றுகள் ; மூலம் முடியும்'),
    body: L('End each statement with ; in .yaazhi files.', '.yaazhi கோப்புகளில் ஒவ்வொரு கூற்றையும் ; மூலம் முடிக்கவும்.'),
  },
  {
    title: L('Not every Tamil word is a keyword', 'ஒவ்வொரு தமிழ்ச் சொல்லும் சொற்குறி அல்ல'),
    body: L('அச்சிடு is a standard-library function, and மாறும் is not an active keyword.', 'அச்சிடு என்பது நிலையான நூலகச் செயல்; மாறும் செயலில் உள்ள சொற்குறி அல்ல.'),
  },
];

export const operators = [
  { title: L('Arithmetic', 'கணிதம்'), values: ['+', '-', '*', '/', '%'] },
  { title: L('Assignment', 'மதிப்பளிப்பு'), values: ['=', '+=', '-=', '*=', '/='] },
  { title: L('Comparison', 'ஒப்பீடு'), values: ['==', '!=', '<', '<=', '>', '>='] },
  { title: L('Logical', 'தர்க்கம்'), values: ['!', '&&', '||'] },
];

export const builtinModules = [
  'கோப்பு', 'பாதை', 'முகவரி', 'இடையகம்', 'பயன்பாடு', 'உறுதிப்படுத்து', 'நேரிகள்',
  'உறுதி', 'நிகழ்வு', 'வலை', 'பாதுகாப்புவலை', 'இயங்குதளம்', 'முனையம்', 'செயல்முறை',
  'வரிவாசிப்பு', 'மறையியல்', 'ஓடை',
];

/** All snippets below were run with the 0.1.0 YaazhiCode command line. */
export const syntaxExamples = [
  {
    id: 'hello',
    title: L('Hello program', 'வணக்க நிரல்'),
    note: L('The first program from the language repository.', 'மொழிக் களஞ்சியத்தில் உள்ள முதல் நிரல்.'),
    code: '// YaazhiCode வணக்கம் உதாரணம்\nஅச்சிடு("வணக்கம், உலகம்!");\nநிலையான பெயர் = "YaazhiCode";\nஅச்சிடு("மொழி: " + பெயர்);',
  },
  {
    id: 'numbers',
    title: L('Numbers and text', 'எண்களும் உரையும்'),
    note: L('Tamil numerals require the $ marker.', 'தமிழ் எண்களுக்கு $ குறி அவசியம்.'),
    code: 'நிலையான எண் = $௧௨;\nநிலையான உரை = "தமிழ்";\nஅச்சிடு(வடிவமை("{} : {}", உரை, எண்));',
  },
  {
    id: 'variables',
    title: L('Declarations', 'பிரகடனங்கள்'),
    note: L('Fixed and changeable values.', 'மாறாத மற்றும் மாறக்கூடிய மதிப்புகள்.'),
    code: 'நிலையான பெயர் = "YaazhiCode";\nமாறி வயது = $௨௫;\nமாற்றி எண்ணிக்கை = $௦;\nஎண்ணிக்கை += $௧;',
  },
  {
    id: 'condition',
    title: L('Condition and cases', 'நிபந்தனையும் நிலைகளும்'),
    note: L('Choose a path with என்றால் and தேர்ந்தெடு.', 'என்றால், தேர்ந்தெடு மூலம் பாதையைத் தேர்வு செய்யவும்.'),
    code: 'நிலையான மதிப்பெண் = $௭௫;\n\nஎன்றால் (மதிப்பெண் >= $௪௦) {\n  அச்சிடு("தேர்ச்சி");\n} இல்லை {\n  அச்சிடு("தோல்வி");\n}\n\nதேர்ந்தெடு (மதிப்பெண்) {\n  நிலை $௧௦௦:\n    அச்சிடு("முழு மதிப்பெண்");\n    நிறுத்து;\n  இயல்புநிலை:\n    அச்சிடு("மதிப்பெண்: " + உரையாக்கு(மதிப்பெண்));\n}',
  },
  {
    id: 'loops',
    title: L('Loops', 'சுழற்சிகள்'),
    note: L('Count with ஒவ்வொரு and display with உரையாக்கு.', 'ஒவ்வொரு மூலம் எண்ணி, உரையாக்கு மூலம் காட்டவும்.'),
    code: 'ஒவ்வொரு (மாறி எண் = $௦; எண் < $௩; எண் += $௧) {\n  அச்சிடு("எண்: " + உரையாக்கு(எண்));\n}',
  },
  {
    id: 'function',
    title: L('Function', 'செயல்'),
    note: L('Return a value with கொடு.', 'கொடு மூலம் மதிப்பைத் திருப்பவும்.'),
    code: 'செயல் கூட்டு(அ, ஆ) {\n  கொடு அ + ஆ;\n}\n\nஅச்சிடு(கூட்டு($௨, $௩));',
  },
  {
    id: 'class',
    title: L('Class', 'வகுப்பு'),
    note: L('Constructor, method, and static member.', 'உருவாக்கி, முறை, நிலையியல் உறுப்பு.'),
    code: 'வகுப்பு வட்டம் {\n  உருவாக்கு(ஆரம்) {\n    இது.ஆரம் = ஆரம்;\n  }\n\n  பரப்பளவு() {\n    கொடு $௩.௧௪ * இது.ஆரம் * இது.ஆரம்;\n  }\n\n  நிலையியல் வகை() {\n    கொடு "வட்டம்";\n  }\n}\n\nமாறி வ = புதிய வட்டம்($௨);\nஅச்சிடு(வட்டம்.வகை() + ": " + உரையாக்கு(வ.பரப்பளவு()));',
  },
  {
    id: 'modules',
    title: L('Module import', 'தொகுதி இறக்குமதி'),
    note: L('Import an exact built-in Tamil module name.', 'சரியான உள்ளமைந்த தமிழ் தொகுதிப் பெயரை இறக்குமதி செய்யவும்.'),
    code: 'இறக்குமதி * ஆக கோப்பு இருந்து "கோப்பு";\n\nஅச்சிடு(கோப்பு.உள்ளதா("main.yaazhi"));',
  },
  {
    id: 'errors',
    title: L('Error handling', 'பிழை கையாளுதல்'),
    note: L('Try, catch, and finish.', 'முயற்சி, பிடி, இறுதியில்.'),
    code: 'முயற்சி {\n  எறி பிழை("எதிர்மறை மதிப்பு", "YAAZHICODE_எடுத்துக்காட்டு");\n} பிடி (பிழை) {\n  அச்சிடு(பிழை.குறியீடு + ": " + பிழை.செய்தி);\n} இறுதியில் {\n  அச்சிடு("முடிந்தது");\n}',
  },
];
