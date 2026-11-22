import { STATUS } from './siteData';

const L = (en, ta) => ({ en, ta });
const S = (heading, content, extra = {}) => ({ heading, content, ...extra });

const CODE = { filename: 'main.yaazhi' };
const TEXT = { language: 'text', filename: 'output.txt' };

/** Every lesson follows the same beginner-friendly shape. */
function lesson({ title, description, explanation, tamil, syntax, example, output, use, mistakes, filename = 'main.yaazhi', supporting }) {
  return {
    title,
    description,
    status: STATUS.available,
    sections: [
      S(L('Simple explanation', 'எளிய விளக்கம்'), explanation),
      S(L('Tamil explanation', 'தமிழ் விளக்கம்'), tamil),
      S(
        L('Syntax', 'தொடரியல்'),
        L('Write this form in a .yaazhi source file.', 'இந்த வடிவத்தை .yaazhi மூலக் கோப்பில் எழுதவும்.'),
        { code: syntax, ...CODE },
      ),
      S(
        L('Real example', 'உண்மையான எடுத்துக்காட்டு'),
        L('Copy this program and run it locally.', 'இந்த நிரலை நகலெடுத்து உள்ளூரில் இயக்கவும்.'),
        { code: example, filename, ...(supporting ? { supporting } : {}) },
      ),
      S(
        L('Expected output', 'எதிர்பார்க்கும் வெளியீடு'),
        L('This is what the command line shows.', 'கட்டளை வரி இதனைக் காட்டும்.'),
        { code: output, ...TEXT },
      ),
      S(L('Practical use', 'நடைமுறை பயன்பாடு'), use),
      S(L('Common mistakes', 'பொதுவான தவறுகள'), L('Check these points if the program does not behave as expected.', 'நிரல் எதிர்பார்த்தபடி இயங்கவில்லை எனில் இந்தக் குறிப்புகளைப் பார்க்கவும்.'), { bullets: mistakes }),
    ],
  };
}

const HELLO = `// YaazhiCode வணக்கம் உதாரணம்
அச்சிடு("வணக்கம், உலகம்!");
நிலையான பெயர் = "YaazhiCode";
அச்சிடு("மொழி: " + பெயர்);`;

const HELLO_OUTPUT = `வணக்கம், உலகம்!
மொழி: YaazhiCode`;

export const learnCategories = [
  {
    id: 'learn',
    title: L('Learn YaazhiCode', 'YaazhiCode கற்க'),
    items: [
      { id: 'introduction', title: L('1. Introduction to YaazhiCode', '1. YaazhiCode அறிமுகம்') },
      { id: 'first-program', title: L('2. Your first program', '2. உங்கள் முதல் நிரல்') },
      { id: 'variables', title: L('3. Variables', '3. மாறிகள்') },
      { id: 'data-types', title: L('4. Data types', '4. தரவு வகைகள்') },
      { id: 'operators', title: L('5. Operators', '5. இயக்குகள்') },
      { id: 'conditionals', title: L('6. Conditional statements', '6. நிபந்தனைக் கூற்றுகள்') },
      { id: 'loops', title: L('7. Loops', '7. சுழற்சிகள்') },
      { id: 'functions', title: L('8. Functions', '8. செயல்கள்') },
      { id: 'arrays', title: L('9. Arrays', '9. பட்டியல்கள்') },
      { id: 'objects', title: L('10. Objects', '10. பொருள்கள்') },
      { id: 'modules', title: L('11. Modules', '11. தொகுதிகள்') },
      { id: 'error-handling', title: L('12. Error handling', '12. பிழை கையாளுதல்') },
      { id: 'file-operations', title: L('13. File operations', '13. கோப்பு செயல்பாடுகள்') },
      { id: 'practical-examples', title: L('14. Practical programming examples', '14. நடைமுறை நிரலாக்க எடுத்துக்காட்டுகள்') },
    ],
  },
];

export const LEARN_DOC_IDS = learnCategories[0].items.map(item => item.id);

export const learnContent = {
  introduction: lesson({
    title: L('Introduction to YaazhiCode', 'YaazhiCode அறிமுகம்'),
    description: L('YaazhiCode is a programming language built around Tamil syntax.', 'YaazhiCode என்பது தமிழ்ச் சொற்களை அடிப்படையாகக் கொண்ட நிரலாக்க மொழி.'),
    explanation: L(
      'YaazhiCode lets you write programs using Tamil words. You will learn the same core ideas used in programming: values, decisions, repetition, functions, and collections.',
      'YaazhiCode மூலம் தமிழ்ச் சொற்களைப் பயன்படுத்தி நிரல்கள் எழுதலாம். மதிப்புகள், முடிவுகள், மீண்டும் செய்தல், செயல்கள், தொகுப்புகள் போன்ற அடிப்படைக் கருத்துகளை இங்கே கற்கிறீர்கள்.',
    ),
    tamil: L(
      'The purpose of YaazhiCode is that a Tamil speaker can think in their own language from the very first program.',
      'தமிழ் மொழி பேசும் ஒருவர் முதல் நிரலை எழுதும்போதே தனது மொழியில் சிந்திக்க முடியும் என்பதே YaazhiCode-ன் நோக்கம்.',
    ),
    syntax: '// filename.yaazhi\nஅச்சிடு("...");',
    example: HELLO,
    output: HELLO_OUTPUT,
    use: L('Use this lesson to understand what the language is for before installing it.', 'நிறுவுவதற்கு முன் மொழியின் நோக்கத்தைப் புரிந்துகொள்ள இந்தப் பாடம் உதவும்.'),
    mistakes: [
      L('Use .yaazhi as the file extension.', 'கோப்பு நீட்டிப்பாக .yaazhi பயன்படுத்தவும்.'),
      L('Save the file as UTF-8 so Tamil characters remain intact.', 'தமிழ் எழுத்துகள் பாதுகாக்கப்பட UTF-8 ஆகச் சேமிக்கவும்.'),
    ],
  }),
  'first-program': lesson({
    title: L('Your first program', 'உங்கள் முதல் நிரல்'),
    description: L('Create a small file and print your first Tamil greeting.', 'சிறிய கோப்பை உருவாக்கி முதல் தமிழ் வாழ்த்தை அச்சிடுங்கள்.'),
    explanation: L('A program is a list of instructions. அச்சிடு writes a value to the terminal.', 'நிரல் என்பது வழிமுறைகளின் பட்டியல். அச்சிடு ஒரு மதிப்பை முனையத்தில் எழுதும்.'),
    tamil: L('The first program prints a greeting, declares a constant, and joins text.', 'முதல் நிரலில் வாழ்த்து அச்சிடுதல், ஒரு மாறிலி, உரை இணைத்தல் உள்ளன.'),
    syntax: 'அச்சிடு("வாழ்த்து");\nநிலையான பெயர் = "பெயர்";',
    example: HELLO,
    output: HELLO_OUTPUT,
    use: L('Confirm that your installation works before moving to other lessons.', 'மற்ற பாடங்களுக்குச் செல்ல முன் நிறுவல் சரியாக இயங்குகிறதா என உறுதிப்படுத்த.'),
    mistakes: [
      L('Use straight quotes " around text.', 'உரையை இடுவதற்கு நேரான " மேற்கோள்களைப் பயன்படுத்தவும்.'),
      L('End each statement with a semicolon ;.', 'ஒவ்வொரு கூற்றையும் ; மூலம் முடிக்கவும்.'),
    ],
    filename: 'வணக்கம்.yaazhi',
  }),
  variables: lesson({
    title: L('Variables', 'மாறிகள்'),
    description: L('Store values with நிலையான, மாறி, and மாற்றி.', 'நிலையான, மாறி, மாற்றி மூலம் மதிப்புகளைச் சேமிக்கவும்.'),
    explanation: L('நிலையான stores a value that should stay fixed. மாறி stores a value you can change. மாற்றி is another variable spelling in the language.', 'நிலையான மாறாத மதிப்பைச் சேமிக்கும். மாறி மாற்றக்கூடிய மதிப்பைச் சேமிக்கும். மாற்றி என்பதும் மொழியில் உள்ள மாறி வடிவம்.'),
    tamil: L('A variable is a named box. It can hold a number, text, list, or another value.', 'மாறி என்பது ஒரு பெயருடைய பெட்டி. அதில் எண், உரை, பட்டியல் போன்ற மதிப்புகளை வைக்கலாம்.'),
    syntax: 'நிலையான பெயர் = "மதிப்பு";\nமாறி எண் = $௧;\nமாற்றி எண்ணிக்கை = $௦;',
    example: 'நிலையான பெயர் = "YaazhiCode";\nமாறி வயது = $௨௫;\nமாற்றி எண்ணிக்கை = $௦;\n\nஎண்ணிக்கை += $௧;\nஅச்சிடு(வடிவமை("{} : {} : {}", பெயர், வயது, எண்ணிக்கை));',
    output: 'YaazhiCode : 25 : 1',
    use: L('Use variables for a student name, a score, a counter, or any value your program needs to remember.', 'மாணவர் பெயர், மதிப்பெண், எண்ணிக்கை போன்ற நிரல் நினைவில் வைக்க வேண்டிய மதிப்புகளுக்கு மாறிகளைப் பயன்படுத்தவும்.'),
    mistakes: [
      L('Do not use மாறும்; it is not an active keyword.', 'மாறும் பயன்படுத்த வேண்டாம்; அது செயலில் உள்ள சொல் அல்ல.'),
      L('Write Tamil numerals with the $ prefix, such as $௨௫.', 'தமிழ் எண்களை $ முன்னொட்டுடன் எழுதவும்; எடுத்துக்காட்டு $௨௫.'),
    ],
    filename: 'மாறிகள்.yaazhi',
  }),
  'data-types': lesson({
    title: L('Data types', 'தரவு வகைகள்'),
    description: L('Recognise numbers, text, logical values, lists, objects, and more.', 'எண்கள், உரை, தர்க்க மதிப்புகள், பட்டியல்கள், பொருள்கள் போன்றவற்றை அறியவும்.'),
    explanation: L('A data type tells you what kind of value you are working with. Numbers can be calculated, text can be joined, and logical values can be true or false.', 'தரவு வகை என்பது மதிப்பின் இயல்பைக் கூறும். எண்களைக் கணக்கிடலாம், உரையை இணைக்கலாம், தர்க்க மதிப்புகள் உண்மை அல்லது பொய் ஆகும்.'),
    tamil: L('The word வகை helps show the type of a value.', 'வகை என்னும் சொல் ஒரு மதிப்பின் வகையைக் காட்ட உதவும்.'),
    syntax: 'நிலையான எண் = $௧௦;\nநிலையான உரை = "தமிழ்";\nஅச்சிடு(வகை(எண்));',
    example: 'நிலையான எண் = $௧௦;\nநிலையான உரை = "தமிழ்";\nநிலையான மதிப்பு = உண்மை;\n\nஅச்சிடு(வகை(எண்));\nஅச்சிடு(வகை(உரை));\nஅச்சிடு(வகை(மதிப்பு));',
    output: 'எண்\nசொல்\nதர்க்கம்',
    use: L('Knowing the type helps you choose the right operation, such as adding numbers or joining text.', 'வகையை அறிந்தால் எண்களைக் கூட்டுவது போன்றோ உரையை இணைப்பது போன்றோ சரியான செயலைத் தேர்வு செய்யலாம்.'),
    mistakes: [
      L('Do not add a number directly to text; convert with உரையாக்கு.', 'எண்ணை உரையுடன் நேரடியாகக் கூட்ட வேண்டாம்; உரையாக்கு மூலம் மாற்றவும்.'),
      L('Use உண்மை and பொய் for logical values.', 'தர்க்க மதிப்புகளுக்கு உண்மை, பொய் ஆகியவற்றைப் பயன்படுத்தவும்.'),
    ],
    filename: 'தரவு_வகைகள்.yaazhi',
  }),
  operators: lesson({
    title: L('Operators', 'இயக்குகள்'),
    description: L('Calculate values and compare them.', 'மதிப்புகளைக் கணக்கிட்டு ஒப்பிடுங்கள்.'),
    explanation: L('Arithmetic operators combine numbers. Comparison operators answer true or false questions.', 'கணித இயக்குகள் எண்களை இணைக்கும். ஒப்பீட்டு இயக்குகள் உண்மை/பொய் கேள்விகளுக்கு விடை தரும்.'),
    tamil: L('Symbols such as +, -, *, /, and % help with calculation; >, <, ==, and >= help with comparison.', '+, -, *, /, % போன்ற குறிகள் கணக்கிற்கும், >, <, ==, >= போன்றவை ஒப்பீட்டிற்கும் உதவும்.'),
    syntax: 'அச்சிடு($௨ + $௩);\nஅச்சிடு($௫ > $௩);',
    example: 'அச்சிடு(வடிவமை("{} + {} = {}", $௨, $௩, $௨ + $௩));\nஅச்சிடு(வடிவமை("{} > {} → {}", $௫, $௩, $௫ > $௩));\nஅச்சிடு(வடிவமை("{} == {} → {}", $௨, $௨, $௨ == $௨));',
    output: '2 + 3 = 5\n5 > 3 → உண்மை\n2 == 2 → உண்மை',
    use: L('Use comparison operators inside conditions to decide which path a program should take.', 'நிரல் எந்தப் பாதையில் செல்ல வேண்டும் என முடிவு செய்ய ஒப்பீட்டு இயக்குகளை நிபந்தனைகளில் பயன்படுத்தவும்.'),
    mistakes: [
      L('Use == to compare values; a single = assigns a value.', 'மதிப்புகளை ஒப்பிட == பயன்படுத்தவும்; ஒற்றை = மதிப்பைச் சேமிக்கும்.'),
      L('There is no exponentiation operator. Use the சக்தி helper.', 'அடுக்கு கணக்கிற்கு தனி குறி இல்லை. சக்தி உதவி செயலைப் பயன்படுத்தவும்.'),
    ],
    filename: 'இயக்குகள்.yaazhi',
  }),
  conditionals: lesson({
    title: L('Conditional statements', 'நிபந்தனைக் கூற்றுகள்'),
    description: L('Choose what happens when a condition is true.', 'நிபந்தனை உண்மையானபோது எது நடக்க வேண்டும் எனத் தேர்வு செய்யுங்கள்.'),
    explanation: L('என்றால் runs a block when a condition is true. இல்லை runs when it is false. தேர்ந்தெடு handles several named cases.', 'நிபந்தனை உண்மையானால் என்றால் ஒரு தொகுதியை இயக்கும். பொய்யானால் இல்லை இயங்கும். பல வழக்குகளைத் தேர்ந்தெடு கையாளும்.'),
    tamil: L('Here is a simple decision that prints pass when a score is 40 or more.', 'மதிப்பெண் 40 அல்லது அதற்கு மேல் இருந்தால் தேர்ச்சி என அச்சிடும் எளிய முடிவு இங்கே உள்ளது.'),
    syntax: 'என்றால் (நிபந்தனை) {\n  // உண்மையானால்\n} இல்லை {\n  // பொய்யானால்\n}',
    example: 'நிலையான மதிப்பெண் = $௭௫;\n\nஎன்றால் (மதிப்பெண் >= $௪௦) {\n  அச்சிடு("தேர்ச்சி");\n} இல்லை {\n  அச்சிடு("தோல்வி");\n}\n\nதேர்ந்தெடு (மதிப்பெண்) {\n  நிலை $௧௦௦:\n    அச்சிடு("முழு மதிப்பெண்");\n    நிறுத்து;\n  இயல்புநிலை:\n    அச்சிடு("மதிப்பெண்: " + உரையாக்கு(மதிப்பெண்));\n}',
    output: 'தேர்ச்சி\nமதிப்பெண்: 75',
    use: L('Use conditions for result checks, login states, menu choices, and validation.', 'முடிவு சரிபார்ப்பு, உள்நுழைவு நிலை, பட்டியல் தேர்வு, செல்லுபடியாக்கம் ஆகியவற்றிற்கு நிபந்தனைகளைப் பயன்படுத்தவும்.'),
    mistakes: [
      L('Use == inside the condition, not =.', 'நிபந்தனையில் = அல்ல, == பயன்படுத்தவும்.'),
      L('Use நிறுத்து to stop after a matching case in தேர்ந்தெடு.', 'தேர்ந்தெடு-ல் பொருத்தமான நிலைக்குப் பின் நிறுத்து பயன்படுத்தவும்.'),
    ],
    filename: 'நிபந்தனை.yaazhi',
  }),
  loops: lesson({
    title: L('Loops', 'சுழற்சிகள்'),
    description: L('Repeat work safely with ஒவ்வொரு, இருக்கும்வரை, and செய்.', 'ஒவ்வொரு, இருக்கும்வரை, செய் மூலம் வேலையை மீண்டும் செய்யவும்.'),
    explanation: L('A loop repeats a block. ஒவ்வொரு can count or walk through a list. இருக்கும்வரை repeats while a condition holds.', 'சுழற்சி ஒரு தொகுதியை மீண்டும் இயக்கும். ஒவ்வொரு எண்ணிடவோ பட்டியலை ஊடலையோ செய்யும். இருக்கும்வரை நிபந்தனை உள்ளவரை மீண்டும் செய்யும்.'),
    tamil: L('A loop helps inspect every value in a list.', 'ஒரு பட்டியலில் உள்ள ஒவ்வொரு மதிப்பையும் பார்வையிட சுழற்சி உதவும்.'),
    syntax: 'ஒவ்வொரு (மாறி எண் = $௦; எண் < $௫; எண் += $௧) {\n  அச்சிடு(எண்);\n}',
    example: 'ஒவ்வொரு (மாறி எண் = $௦; எண் < $௫; எண் += $௧) {\n  அச்சிடு("எண்: " + உரையாக்கு(எண்));\n}\n\nஒவ்வொரு (மாறி மதிப்பு உள்ளே [$௨, $௪, $௬]) {\n  அச்சிடு("மதிப்பு: " + உரையாக்கு(மதிப்பு));\n}\n\nமாற்றி கூட்டு = $௦;\nஇருக்கும்வரை (கூட்டு < $௩) {\n  கூட்டு += $௧;\n}\nஅச்சிடு("கூட்டு: " + உரையாக்கு(கூட்டு));',
    output: 'எண்: 0\nஎண்: 1\nஎண்: 2\nஎண்: 3\nஎண்: 4\nமதிப்பு: 2\nமதிப்பு: 4\nமதிப்பு: 6\nகூட்டு: 3',
    use: L('Use loops to process all students, all lines in a file, or all items in a list.', 'அனைத்து மாணவர்கள், கோப்பில் உள்ள அனைத்து வரிகள், பட்டியலில் உள்ள அனைத்து பொருட்களைச் செயலாக்க சுழற்சிகளைப் பயன்படுத்தவும்.'),
    mistakes: [
      L('Make sure the loop condition eventually becomes false.', 'சுழற்சி நிபந்தனை இறுதியில் பொய்யாகும் என உறுதிப்படுத்தவும்.'),
      L('Use தொடர் to skip one pass and நிறுத்து to leave the loop.', 'ஒரு சுற்றைத் தவிர்க்க தொடர், சுழற்சியை விட்டு வெளியேற நிறுத்து பயன்படுத்தவும்.'),
    ],
    filename: 'சுழற்சிகள்.yaazhi',
  }),
  functions: lesson({
    title: L('Functions', 'செயல்கள்'),
    description: L('Name a reusable block of work with செயல் and return a value with கொடு.', 'செயல் மூலம் மீண்டும் பயன்படுத்தும் வேலைக்குப் பெயரிட்டு, கொடு மூலம் மதிப்பு திருப்புங்கள்.'),
    explanation: L('A function groups instructions. You call it by name and can give it inputs called parameters.', 'செயல் பல வழிமுறைகளை ஒரு பெயரில் தொகுக்கும். அதைப் பெயரால் அழைத்து, உள்ளீடுகளாக அளவுருக்களை கொடுக்கலாம்.'),
    tamil: L('கொடு is the spelling that sends a value back from a function.', 'கொடு என்பது செயலில் இருந்து மதிப்பைத் திருப்பி அனுப்பும் சொல்.'),
    syntax: 'செயல் பெயர்(அளவுரு) {\n  கொடு மதிப்பு;\n}\nஅச்சிடு(பெயர்(மதிப்பு));',
    example: 'செயல் பிபொனாச்சி(எண்) {\n  என்றால் (எண் <= $௧) {\n    கொடு எண்;\n  }\n  கொடு பிபொனாச்சி(எண் - $௧) + பிபொனாச்சி(எண் - $௨);\n}\n\nஅச்சிடு(பிபொனாச்சி($௧௦));',
    output: '55',
    use: L('Use functions for repeated calculations such as totals, grades, formatting, or checks.', 'மொத்தங்கள், மதிப்பீடுகள், வடிவமைப்பு, சரிபார்ப்புகள் போன்ற மீண்டும் மீண்டும் வரும் கணக்குகளுக்குச் செயல்களைப் பயன்படுத்தவும்.'),
    mistakes: [
      L('Every path in a value-returning function should end with கொடு.', 'மதிப்பு திருப்பும் செயலில் ஒவ்வொரு பாதையும் கொடு மூலம் முடியவேண்டும்.'),
      L('Call a function with parentheses, for example பிபொனாச்சி($௧௦).', 'செயலை எடுத்துக்காட்டு பிபொனாச்சி($௧௦) போல அடைப்புகளுடன் அழைக்கவும்.'),
    ],
    filename: 'செயல்கள்.yaazhi',
  }),
  arrays: lesson({
    title: L('Arrays', 'பட்டியல்கள்'),
    description: L('Store ordered values in a list and work with them using helpers.', 'வரிசையான மதிப்புகளைப் பட்டியலில் சேமித்து உதவிச் செயல்களுடன் பயன்படுத்தவும்.'),
    explanation: L('An array is an ordered collection. You can add values, transform each value, filter values, and join them into text.', 'பட்டியல் என்பது வரிசையான தொகுப்பு. மதிப்புகளைச் சேர்க்க, ஒவ்வொன்றையும் மாற்ற, வடிகட்ட, உரையாக இணைக்கலாம்.'),
    tamil: L('சேர், வரைபடம், வடிகட்டு, and இணை are helpers used with lists.', 'சேர், வரைபடம், வடிகட்டு, இணை ஆகியவை பட்டியல்களுடன் பயன்படும் உதவிச் செயல்கள்.'),
    syntax: 'மாறி பட்டியல் = [$௧, $௨];\nசேர்(பட்டியல், $௩);\nஅச்சிடு(இணை(பட்டியல், ", "));',
    example: 'மாறி எண்கள் = [$௧, $௨, $௩, $௪];\nசேர்(எண்கள், $௫);\n\nமாறி இரட்டை = வரைபடம்(எண்கள், செயல்(எண்) {\n  கொடு எண் * $௨;\n});\n\nமாறி பெரியவை = வடிகட்டு(இரட்டை, செயல்(எண்) {\n  கொடு எண் > $௪;\n});\n\nஅச்சிடு(இணை(பெரியவை, ", "));',
    output: '6, 8, 10',
    use: L('Use lists for marks, item names, file lines, and any collection of values with the same shape.', 'மதிப்பெண்கள், பொருட்களின் பெயர்கள், கோப்பு வரிகள் போன்ற ஒரே வடிவ மதிப்புகளுக்குப் பட்டியல்களைப் பயன்படுத்தவும்.'),
    mistakes: [
      L('Index positions begin at zero.', 'இடக் குறியீடுகள் பூஜ்யத்திலிருந்து தொடங்கும்.'),
      L('வரைபடம் and வடிகட்டு expect a function, not just a value.', 'வரைபடம், வடிகட்டு ஆகியவற்றுக்கு மதிப்பல்ல, ஒரு செயல் தேவை.'),
    ],
    filename: 'பட்டியல்கள்.yaazhi',
  }),
  objects: lesson({
    title: L('Objects', 'பொருள்கள்'),
    description: L('Group named values and create reusable types with classes.', 'பெயரிடப்பட்ட மதிப்புகளைத் தொகுத்து, வகுப்புகளுடன் மீண்டும் பயன்படுத்தும் வகைகளை உருவாக்கவும்.'),
    explanation: L('An object stores named fields. A class is a blueprint for objects, with a constructor, methods, and static members.', 'பொருள் பெயரிடப்பட்ட புலங்களைச் சேமிக்கும். வகுப்பு என்பது பொருட்களுக்கான வரைபடம்; உருவாக்கி, முறைகள், நிலையியல் உறுப்புகளைக் கொண்டது.'),
    tamil: L('இது refers to the current object.', 'இது என்னும் சொல் தற்போதைய பொருளைக் குறிக்கும்.'),
    syntax: 'மாறி பொருள் = { பெயர்: "மதிப்பு" };\nஅச்சிடு(பொருள்.பெயர்);',
    example: 'வகுப்பு வட்டம் {\n  உருவாக்கு(ஆரம்) {\n    இது.ஆரம் = ஆரம்;\n  }\n\n  பரப்பளவு() {\n    கொடு $௩.௧௪ * இது.ஆரம் * இது.ஆரம்;\n  }\n\n  நிலையியல் வகை() {\n    கொடு "வட்டம்";\n  }\n}\n\nமாறி வ = புதிய வட்டம்($௨);\nஅச்சிடு(வட்டம்.வகை() + ": " + உரையாக்கு(வ.பரப்பளவு()));',
    output: 'வட்டம்: 12.56',
    use: L('Use objects for records such as a student, a book, or a configuration.', 'மாணவர், புத்தகம், அமைப்பு போன்ற பதிவுகளுக்குப் பொருட்களைப் பயன்படுத்தவும்.'),
    mistakes: [
      L('Access a field with a dot, for example மாணவர்.பெயர்.', 'புலத்தை மாணவர்.பெயர் போல புள்ளியுடன் அணுகவும்.'),
      L('Call a static member on the class name, not on an instance.', 'நிலையியல் உறுப்பை நிகழ்வினை விட வகுப்பின் பெயரிலிருந்து அழைக்கவும்.'),
    ],
    filename: 'வகுப்புகள்.yaazhi',
  }),
  modules: lesson({
    title: L('Modules', 'தொகுதிகள்'),
    description: L('Share code between .yaazhi files with இறக்குமதி and ஏற்றுமதி.', '.yaazhi கோப்புகளுக்கிடையே இறக்குமதி, ஏற்றுமதி மூலம் குறியீட்டைப் பகிரவும்.'),
    explanation: L('A module is another .yaazhi file. Export values with ஏற்றுமதி and import them with இறக்குமதி. Built-in modules use exact Tamil names such as "கோப்பு".', 'தொகுதி என்பது மற்றொரு .yaazhi கோப்பு. ஏற்றுமதி மூலம் மதிப்புகளை வெளியிட்டு, இறக்குமதி மூலம் எடுக்கலாம். உள்ளமைந்த தொகுதிகள் "கோப்பு" போன்ற சரியான தமிழ்ப் பெயர்களைப் பயன்படுத்தும்.'),
    tamil: L('Besides built-in modules, your own files can be used as modules.', 'உள்ளமைந்த தொகுதிகளைத் தவிர, உங்கள் சொந்தக் கோப்புகளையும் தொகுதிகளாகப் பயன்படுத்தலாம்.'),
    syntax: 'இறக்குமதி { பெயர் } இருந்து "./கோப்பு.yaazhi";\n\n// மற்ற கோப்பில்:\nஏற்றுமதி நிலையான பெயர் = "மதிப்பு";',
    example: 'இறக்குமதி { கூட்டு, கணிதப்_பெயர் } இருந்து "./தொகுதிகள்/கணிதம்.yaazhi";\n\nஅச்சிடு(கணிதப்_பெயர்);\nஅச்சிடு(கூட்டு($௨, $௩));',
    output: 'YaazhiCode கணிதம்\n5',
    use: L('Place reusable helpers in a separate file so several programs can use the same code.', 'பல நிரல்கள் ஒரே குறியீட்டைப் பயன்படுத்த, மீண்டும் பயன்படும் உதவிகளைத் தனிக் கோப்பில் வைக்கவும்.'),
    mistakes: [
      L('Relative imports must end in .yaazhi.', 'ஒப்பீட்டு இறக்குமதிகள் .yaazhi மூலம் முடிய வேண்டும்.'),
      L('Built-in modules use their exact Tamil names.', 'உள்ளமைந்த தொகுதிகளை அவற்றின் சரியான தமிழ்ப் பெயர்களால் இறக்குமதி செய்யவும்.'),
    ],
    filename: 'main.yaazhi',
    supporting: [
      {
        filename: 'தொகுதிகள்/கணிதம்.yaazhi',
        code: 'ஏற்றுமதி செயல் கூட்டு(அ, ஆ) {\n  கொடு அ + ஆ;\n}\n\nஏற்றுமதி நிலையான கணிதப்_பெயர் = "YaazhiCode கணிதம்";',
      },
    ],
  }),
  'error-handling': lesson({
    title: L('Error handling', 'பிழை கையாளுதல்'),
    description: L('Raise a Tamil error with எறி and handle it with முயற்சி / பிடி / இறுதியில்.', 'எறி மூலம் தமிழ்ப் பிழையை எழுப்பி, முயற்சி / பிடி / இறுதியில் மூலம் கையாளவும்.'),
    explanation: L('முயற்சி contains code that might fail. பிடி runs when an error is raised. இறுதியில் always runs afterwards.', 'முயற்சி தோல்வியடையக்கூடிய குறியீட்டைக் கொண்டது. பிழை எழுந்தால் பிடி இயங்கும். இறுதியில் எப்போதும் இயங்கும்.'),
    tamil: L('An error value carries information such as a code and a message.', 'பிழை மதிப்பில் குறியீடு, செய்தி போன்ற தகவல்கள் உள்ளன.'),
    syntax: 'முயற்சி {\n  // செயல்\n} பிடி (பிழை) {\n  அச்சிடு(பிழை.செய்தி);\n} இறுதியில் {\n  // முடிவு\n}',
    example: 'செயல் சரிபார்(மதிப்பு) {\n  என்றால் (மதிப்பு < $௦) {\n    எறி பிழை("எதிர்மறை மதிப்பு", "YAAZHICODE_எடுத்துக்காட்டு");\n  }\n  கொடு மதிப்பு;\n}\n\nமுயற்சி {\n  சரிபார்(-$௧);\n} பிடி (பிழை) {\n  அச்சிடு(பிழை.குறியீடு + ": " + பிழை.செய்தி);\n} இறுதியில் {\n  அச்சிடு("சரிபார்ப்பு முடிந்தது");\n}',
    output: 'YAAZHICODE_எடுத்துக்காட்டு: எதிர்மறை மதிப்பு\nசரிபார்ப்பு முடிந்தது',
    use: L('Use error handling for invalid input, failed validation, and file operations that may not succeed.', 'தவறான உள்ளீடு, தோல்வியடையும் சரிபார்ப்பு, வெற்றிபெறாத கோப்பு செயல்பாடுகளுக்குப் பிழை கையாளுதலைப் பயன்படுத்தவும்.'),
    mistakes: [
      L('Use the keyword எறி to raise an error.', 'பிழையை எழுப்ப எறி என்னும் சொல்லைப் பயன்படுத்தவும்.'),
      L('Do not ignore Tamil diagnostics; they include file, line, and column.', 'தமிழ் நோயறிதிகளைப் புறக்கணிக்க வேண்டாம்; அவற்றில் கோப்பு, வரி, நெடுவரிசை உள்ளது.'),
    ],
    filename: 'பிழை.yaazhi',
  }),
  'file-operations': lesson({
    title: L('File operations', 'கோப்பு செயல்பாடுகள்'),
    description: L('Read, write, append, inspect, and remove local text files.', 'உள்ளூர் உரைக் கோப்புகளைப் படிக்க, எழுத, சேர், ஆய்வு செய்ய, நீக்க.'),
    explanation: L('Import the built-in கோப்பு module, then call its named operations. The example creates a temporary file and removes it at the end.', 'உள்ளமைந்த கோப்பு தொகுதியை இறக்குமதி செய்து, அதன் பெயரிடப்பட்ட செயல்களை அழைக்கவும். எடுத்துக்காட்டு ஒரு தற்காலிகக் கோப்பை உருவாக்கி இறுதியில் நீக்கும்.'),
    tamil: L('File paths should stay inside your project.', 'கோப்பு பாதைகள் உங்கள் திட்டத்திற்குள் இருக்க வேண்டும்.'),
    syntax: 'இறக்குமதி * ஆக கோப்பு இருந்து "கோப்பு";\nகோப்பு.எழுது(பாதை, "உரை");\nஅச்சிடு(கோப்பு.படி(பாதை));',
    example: 'இறக்குமதி * ஆக கோப்பு இருந்து "கோப்பு";\n\nநிலையான பாதை = "yaazhicode_கோப்பு_உதாரணம்.txt";\n\nகோப்பு.எழுது(பாதை, "முதல் வரி\\n");\nகோப்பு.சேர்(பாதை, "இரண்டாம் வரி\\n");\n\nஅச்சிடு("உள்ளடக்கம்:");\nஅச்சிடு(கோப்பு.படி(பாதை));\nகோப்பு.கோப்பு_நீக்கு(பாதை);\nஅச்சிடு("நீக்கிய பிறகு உள்ளதா: " + கோப்பு.உள்ளதா(பாதை));',
    output: 'உள்ளடக்கம்:\nமுதல் வரி\nஇரண்டாம் வரி\n\nநீக்கிய பிறகு உள்ளதா: பொய்',
    use: L('Use file operations for notes, logs, small datasets, and generated text.', 'குறிப்புகள், பதிவுகள், சிறிய தரவு, உருவாக்கப்பட்ட உரை ஆகியவற்றிற்குக் கோப்பு செயல்பாடுகளைப் பயன்படுத்தவும்.'),
    mistakes: [
      L('Import the exact module name "கோப்பு".', 'சரியான தொகுதிப் பெயரான "கோப்பு" பயன்படுத்தவும்.'),
      L('Use \\n inside strings when you want a new line.', 'புதிய வரி தேவைப்பட்டால் உரையில் \\n பயன்படுத்தவும்.'),
    ],
    filename: 'கோப்பு.yaazhi',
  }),
  'practical-examples': lesson({
    title: L('Practical programming examples', 'நடைமுறை நிரலாக்க எடுத்துக்காட்டுகள்'),
    description: L('Combine lists, objects, functions, and helpers into a useful program.', 'பட்டியல்கள், பொருள்கள், செயல்கள், உதவிகளை ஒரு பயனுள்ள நிரலாக இணைக்கவும்.'),
    explanation: L('This program stores student records, filters those who passed, maps them to names, and prints the final list.', 'இந்த நிரல் மாணவர் தகவல்களைச் சேமித்து, தேர்ச்சி பெற்றவர்களை வடிகட்டி, அவர்களின் பெயர்களைப் பட்டியலிட்டு அச்சிடும்.'),
    tamil: L('A practical program combines several simple ideas.', 'ஒரு நடைமுறை நிரல் பல எளிய கருத்துகளை இணைக்கும்.'),
    syntax: 'மாறி மதிப்புகள் = வடிகட்டு(பட்டியல், செயல்(உருப்பு) {\n  கொடு உருப்பு.மதிப்பெண் >= $௪௦;\n});',
    example: 'மாறி மாணவர்கள் = [\n  { பெயர்: "அமிழ்தன்", மதிப்பெண்: $௯௫ },\n  { பெயர்: "கயல்விழி", மதிப்பெண்: $௩௮ },\n  { பெயர்: "முத்து", மதிப்பெண்: $௭௨ },\n];\n\nசெயல் தேர்ச்சி(மாணவர்) {\n  கொடு மாணவர்.மதிப்பெண் >= $௪௦;\n}\n\nமாறி தேர்ச்சி_பெற்றவர்கள் = வடிகட்டு(மாணவர்கள், தேர்ச்சி);\nமாறி பெயர்கள் = வரைபடம்(தேர்ச்சி_பெற்றவர்கள், செயல்(மாணவர்) {\n  கொடு மாணவர்.பெயர்;\n});\n\nஅச்சிடு("தேர்ச்சி: " + இணை(பெயர்கள், ", "));',
    output: 'தேர்ச்சி: அமிழ்தன், முத்து',
    use: L('Adapt the pattern for stock lists, attendance, expense records, or any record filtering task.', 'இந்த வடிவத்தைப் பங்கு பட்டியல்கள், வருகைப் பதிவுகள், செலவுப் பதிவுகள் போன்ற எந்தப் பதிவு வடிகட்டல் வேலைக்கும் மாற்றிக் கொள்ளலாம்.'),
    mistakes: [
      L('Keep each record with the same field names.', 'ஒவ்வொரு பதிவிலும் ஒரே புலப் பெயர்கள் இருக்கும் என உறுதிப்படுத்தவும்.'),
      L('Return a logical value from the filter function.', 'வடிகட்டு செயலில் இருந்து தர்க்க மதிப்பு திரும்ப வேண்டும்.'),
    ],
    filename: 'மாணவர்கள்.yaazhi',
  }),
};

export const allLessons = LEARN_DOC_IDS.map(id => ({ id, title: learnContent[id].title }));
