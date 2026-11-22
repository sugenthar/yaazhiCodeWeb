const L = (en, ta) => ({ en, ta });

export const exampleCategories = [
  { id: 'all', label: L('All examples', 'அனைத்தும்') },
  { id: 'basics', label: L('Basics', 'அடிப்படை') },
  { id: 'control', label: L('Control flow', 'கட்டுப்பாட்டு ஓட்டம்') },
  { id: 'collections', label: L('Collections', 'தொகுப்புகள்') },
  { id: 'files', label: L('Files and input', 'கோப்புகளும் உள்ளீடும்') },
];

/**
 * Every program below was run with the 0.1.0 YaazhiCode command line.
 * Expected output is the exact stdout; the input example assumes the typed value
 * shown in its note.
 */
export const examples = [
  {
    id: 'hello-world',
    title: L('Hello World', 'வணக்கம் உலகம்'),
    category: 'basics',
    summary: L(
      'Print a greeting, declare a constant, and join text. This is the first program from the language repository.',
      'வாழ்த்து அச்சிடுதல், மாறிலி பிரகடனம், உரை இணைத்தல். இது மொழிக் களஞ்சியத்தில் உள்ள முதல் நிரல்.',
    ),
    code: '// YaazhiCode வணக்கம் உதாரணம்\nஅச்சிடு("வணக்கம், உலகம்!");\nநிலையான பெயர் = "YaazhiCode";\nஅச்சிடு("மொழி: " + பெயர்);',
    output: 'வணக்கம், உலகம்!\nமொழி: YaazhiCode',
    run: 'yaazhicode run ".\\வணக்கம்.yaazhi"',
  },
  {
    id: 'variables',
    title: L('Variables', 'மாறிகள்'),
    category: 'basics',
    summary: L(
      'Use நிலையான, மாறி, and மாற்றி with Tamil digit literals and a formatted message.',
      'நிலையான, மாறி, மாற்றி ஆகியவற்றைத் தமிழ் இலக்க எண்களுடனும் வடிவமைக்கப்பட்ட செய்தியுடனும் பயன்படுத்துதல்.',
    ),
    code: 'நிலையான பெயர் = "YaazhiCode";\nமாறி வயது = $௨௫;\nமாற்றி எண்ணிக்கை = $௦;\n\nஎண்ணிக்கை += $௧;\nஅச்சிடு(வடிவமை("{} : {} : {}", பெயர், வயது, எண்ணிக்கை));',
    output: 'YaazhiCode : 25 : 1',
    run: 'yaazhicode run ".\\மாறிகள்.yaazhi"',
  },
  {
    id: 'conditions',
    title: L('Conditions', 'நிபந்தனைகள்'),
    category: 'control',
    summary: L('Make a decision with என்றால் / இல்லை and choose a matching case with தேர்ந்தெடு.', 'என்றால் / இல்லை மூலம் முடிவெடுத்தல், தேர்ந்தெடு மூலம் பொருத்தமான நிலையைத் தேர்வு செய்தல்.'),
    code: 'நிலையான மதிப்பெண் = $௭௫;\n\nஎன்றால் (மதிப்பெண் >= $௪௦) {\n  அச்சிடு("தேர்ச்சி");\n} இல்லை {\n  அச்சிடு("தோல்வி");\n}\n\nதேர்ந்தெடு (மதிப்பெண்) {\n  நிலை $௧௦௦:\n    அச்சிடு("முழு மதிப்பெண்");\n    நிறுத்து;\n  இயல்புநிலை:\n    அச்சிடு("மதிப்பெண்: " + உரையாக்கு(மதிப்பெண்));\n}',
    output: 'தேர்ச்சி\nமதிப்பெண்: 75',
    run: 'yaazhicode run ".\\நிபந்தனை.yaazhi"',
  },
  {
    id: 'loops',
    title: L('Loops', 'சுழற்சிகள்'),
    category: 'control',
    summary: L('Repeat with ஒவ்வொரு, walk a list, and count with இருக்கும்வரை.', 'ஒவ்வொரு மூலம் மீண்டும் செய்தல், பட்டியலை ஊடலைதல், இருக்கும்வரை மூலம் எண்ணுதல்.'),
    code: 'ஒவ்வொரு (மாறி எண் = $௦; எண் < $௫; எண் += $௧) {\n  அச்சிடு("எண்: " + உரையாக்கு(எண்));\n}\n\nஒவ்வொரு (மாறி மதிப்பு உள்ளே [$௨, $௪, $௬]) {\n  அச்சிடு("மதிப்பு: " + உரையாக்கு(மதிப்பு));\n}\n\nமாற்றி கூட்டு = $௦;\nஇருக்கும்வரை (கூட்டு < $௩) {\n  கூட்டு += $௧;\n}\nஅச்சிடு("கூட்டு: " + உரையாக்கு(கூட்டு));',
    output: 'எண்: 0\nஎண்: 1\nஎண்: 2\nஎண்: 3\nஎண்: 4\nமதிப்பு: 2\nமதிப்பு: 4\nமதிப்பு: 6\nகூட்டு: 3',
    run: 'yaazhicode run ".\\சுழற்சிகள்.yaazhi"',
  },
  {
    id: 'functions',
    title: L('Functions', 'செயல்கள்'),
    category: 'basics',
    summary: L('Declare a function with செயல், return a value with கொடு, and call the function itself.', 'செயல் மூலம் செயலை அறிவித்து, கொடு மூலம் மதிப்பைத் திருப்பி, அதே செயலை மீண்டும் அழைத்தல்.'),
    code: 'செயல் பிபொனாச்சி(எண்) {\n  என்றால் (எண் <= $௧) {\n    கொடு எண்;\n  }\n  கொடு பிபொனாச்சி(எண் - $௧) + பிபொனாச்சி(எண் - $௨);\n}\n\nஅச்சிடு(பிபொனாச்சி($௧௦));',
    output: '55',
    run: 'yaazhicode run ".\\செயல்கள்.yaazhi"',
  },
  {
    id: 'arrays',
    title: L('Arrays', 'பட்டியல்கள்'),
    category: 'collections',
    summary: L('Add to a list, transform values with வரைபடம், filter with வடிகட்டு, and join with இணை.', 'பட்டியலில் சேர்த்தல், வரைபடம் மூலம் மாற்றம், வடிகட்டு மூலம் தேர்வு, இணை மூலம் இணைத்தல்.'),
    code: 'மாறி எண்கள் = [$௧, $௨, $௩, $௪];\nசேர்(எண்கள், $௫);\n\nமாறி இரட்டை = வரைபடம்(எண்கள், செயல்(எண்) {\n  கொடு எண் * $௨;\n});\n\nமாறி பெரியவை = வடிகட்டு(இரட்டை, செயல்(எண்) {\n  கொடு எண் > $௪;\n});\n\nஅச்சிடு(இணை(பெரியவை, ", "));',
    output: '6, 8, 10',
    run: 'yaazhicode run ".\\பட்டியல்கள்.yaazhi"',
  },
  {
    id: 'objects',
    title: L('Objects', 'பொருள்கள்'),
    category: 'collections',
    summary: L('Create a class with a constructor, a method, and a static method.', 'உருவாக்கி, முறை, நிலையியல் முறையுடன் வகுப்பை உருவாக்குதல்.'),
    code: 'வகுப்பு வட்டம் {\n  உருவாக்கு(ஆரம்) {\n    இது.ஆரம் = ஆரம்;\n  }\n\n  பரப்பளவு() {\n    கொடு $௩.௧௪ * இது.ஆரம் * இது.ஆரம்;\n  }\n\n  நிலையியல் வகை() {\n    கொடு "வட்டம்";\n  }\n}\n\nமாறி வ = புதிய வட்டம்($௨);\nஅச்சிடு(வட்டம்.வகை() + ": " + உரையாக்கு(வ.பரப்பளவு()));',
    output: 'வட்டம்: 12.56',
    run: 'yaazhicode run ".\\வகுப்புகள்.yaazhi"',
  },
  {
    id: 'input',
    title: L('User input', 'பயனரிடமிருந்து உள்ளீடு'),
    category: 'files',
    summary: L('Read one line from the terminal with உள்ளீடு and use it in a greeting.', 'உள்ளீடு மூலம் முனையத்திலிருந்து ஒரு வரி பெற்று வாழ்த்தில் பயன்படுத்துதல்.'),
    note: L('Type Yaazhi when the prompt appears.', 'கேள்விக்கு Yaazhi என உள்ளிடவும்.'),
    code: 'நிலையான பெயர் = உள்ளீடு("உங்கள் பெயர்: ");\nஅச்சிடு("வணக்கம், " + பெயர் + "!");',
    output: 'உங்கள் பெயர்: வணக்கம், Yaazhi!',
    run: 'yaazhicode run ".\\உள்ளீடு.yaazhi"',
  },
  {
    id: 'file-operations',
    title: L('File operations', 'கோப்பு செயல்பாடுகள்'),
    category: 'files',
    summary: L('Write, append, read, inspect, and remove a local text file with the கோப்பு module.', 'கோப்பு தொகுதியுடன் உள்ளூர் உரைக் கோப்பை எழுத, சேர், படி, ஆய்வு செய்ய, நீக்க.'),
    code: '// கோப்பு — பாதுகாப்பான கோப்பு படித்தல், எழுதுதல், தகவல், நீக்கல்\n// இயக்கும்போது தற்போதைய கோப்பகத்தில் ஒரு தற்காலிகக் கோப்பை உருவாக்கி நீக்குகிறது.\n\nஇறக்குமதி * ஆக கோப்பு இருந்து "கோப்பு";\n\nநிலையான பாதை = "yaazhicode_கோப்பு_உதாரணம்.txt";\n\nகோப்பு.எழுது(பாதை, "முதல் வரி\\n");\nகோப்பு.சேர்(பாதை, "இரண்டாம் வரி\\n");\n\nஅச்சிடு("உள்ளடக்கம்:");\nஅச்சிடு(கோப்பு.படி(பாதை));\nஅச்சிடு("கோப்பு உள்ளதா: " + கோப்பு.கோப்பு_உள்ளதா(பாதை));\nஅச்சிடு("கோப்பகம் உள்ளதா: " + கோப்பு.கோப்பகம்_உள்ளதா(பாதை));\nஅச்சிடு("வகை: " + கோப்பு.தகவல்(பாதை).வகை);\nஅச்சிடு("அளவு பூஜ்யத்தை விட பெரியது: " + (கோப்பு.தகவல்(பாதை).அளவு > $௦));\n\nகோப்பு.கோப்பு_நீக்கு(பாதை);\nஅச்சிடு("நீக்கிய பிறகு உள்ளதா: " + கோப்பு.உள்ளதா(பாதை));',
    output: 'உள்ளடக்கம்:\nமுதல் வரி\nஇரண்டாம் வரி\n\nகோப்பு உள்ளதா: உண்மை\nகோப்பகம் உள்ளதா: பொய்\nவகை: கோப்பு\nஅளவு பூஜ்யத்தை விட பெரியது: உண்மை\nநீக்கிய பிறகு உள்ளதா: பொய்',
    run: 'yaazhicode run ".\\கோப்பு.yaazhi"',
  },
  {
    id: 'practical',
    title: L('Practical applications', 'நடைமுறைப் பயன்பாடுகள்'),
    category: 'collections',
    summary: L('Store student records, filter by result, map to names, and print the final list.', 'மாணவர் தகவல்களைச் சேமித்து, முடிவின் அடிப்படையில் வடிகட்டி, பெயர்களாக மாற்றி, இறுதிப் பட்டியலை அச்சிடுதல்.'),
    code: 'மாறி மாணவர்கள் = [\n  { பெயர்: "அமிழ்தன்", மதிப்பெண்: $௯௫ },\n  { பெயர்: "கயல்விழி", மதிப்பெண்: $௩௮ },\n  { பெயர்: "முத்து", மதிப்பெண்: $௭௨ },\n];\n\nசெயல் தேர்ச்சி(மாணவர்) {\n  கொடு மாணவர்.மதிப்பெண் >= $௪௦;\n}\n\nமாறி தேர்ச்சி_பெற்றவர்கள் = வடிகட்டு(மாணவர்கள், தேர்ச்சி);\nமாறி பெயர்கள் = வரைபடம்(தேர்ச்சி_பெற்றவர்கள், செயல்(மாணவர்) {\n  கொடு மாணவர்.பெயர்;\n});\n\nஅச்சிடு("தேர்ச்சி: " + இணை(பெயர்கள், ", "));',
    output: 'தேர்ச்சி: அமிழ்தன், முத்து',
    run: 'yaazhicode run ".\\மாணவர்கள்.yaazhi"',
  },
];
