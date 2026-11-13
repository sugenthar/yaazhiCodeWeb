export const tutorials = [
  {
    id: 'intro-programming',
    title: { ta: '1. தமிழில் நிரலாக்க அறிமுகம்', en: '1. Introduction to Programming in Tamil' },
    summary: {
      ta: 'நிரலாக்கம் என்றால் என்ன? கணினியிடம் உங்கள் தாய்மொழியிலேயே கட்டளைகளைப் பிறப்பிப்பது எப்படி?',
      en: 'What is programming? How to instruct computers directly in your native language.'
    },
    category: 'basics',
    explanation: {
      ta: 'நிரலாக்கம் என்பது ஒரு குறிப்பிட்ட பணியைச் செய்ய கணினிக்குப் படிப்படியான வழிமுறைகளை வழங்குவதாகும். AKAZHI மற்றும் TamilScript வழியாக, நீங்கள் ஆங்கிலத்தில் மனப்பாடம் செய்யாமல், உங்கள் அன்றாட சிந்தனை மொழியிலேயே தர்க்கங்களை உருவாக்க முடியும்.',
      en: 'Programming is providing step-by-step instructions for a computer to solve a problem. With AKAZHI and TamilScript, you express logic in your everyday thinking language without memorizing foreign constructs.'
    },
    code: `// உங்கள் முதல் தமிழ் நிரல்
அச்சிடு("வணக்கம் உலகம்!");
அச்சிடு("தமிழில் நிரலாக்கம் செய்வது இனிது.");`,
    codeExplanation: {
      ta: 'இங்கே `அச்சிடு` என்பது கணினித் திரையில் (முனையத்தில்) நாம் கொடுக்கும் உரையை அச்சிட்டு காட்டும் ஓர் உள்ளமைக்கப்பட்ட செயல்பாடாகும்.',
      en: 'Here, `அச்சிடு` is the built-in print helper that outputs the given text string to the terminal output.'
    },
    output: `வணக்கம் உலகம்!
தமிழில் நிரலாக்கம் செய்வது இனிது.`,
    nextStep: 'variables'
  },
  {
    id: 'variables',
    title: { ta: '2. மாறிகளும் மாறிலிகளும்', en: '2. Variables & Constants' },
    summary: {
      ta: 'தரவுகளை சேமிக்க `நிலையான`, `மாறி`, மற்றும் `மாற்றி` பயன்பாடுகள்.',
      en: 'Storing data with `நிலையான` (const), `மாறி` (let), and `மாற்றி` (var).'
    },
    category: 'basics',
    explanation: {
      ta: 'நிரலில் தகவல்களைச் சேமித்து வைக்க மாறிகள் பயன்படுகின்றன. மதிப்பு மாறக் கூடாது என்றால் `நிலையான` (const) என்பதையும், பின்னர் மதிப்பு மாற்றப்படலாம் என்றால் `மாறி` (let) என்பதையும் பயன்படுத்துங்கள்.',
      en: 'Variables store data for computation. Use `நிலையான` (const) when the reference should never be reassigned, and `மாறி` (let) when the value will change over time.'
    },
    code: `நிலையான மொழி = "தமிழ்";
மாறி பதிப்பு = $௧;

அச்சிடு("மொழி: " + மொழி);
அச்சிடு("பதிப்பு: " + பதிப்பு);

// மதிப்பை மாற்றுதல்
பதிப்பு = பதிப்பு + $௧;
அச்சிடு("புதிய பதிப்பு: " + பதிப்பு);`,
    codeExplanation: {
      ta: '`நிலையான மொழி` என்பது மறுமதிப்பீடு செய்ய முடியாத மாறிலி. `மாறி பதிப்பு` என்பது மாற்றக்கூடிய மாறி. `$௧` என்பது தமிழ் எண் ஒன்று.',
      en: '`நிலையான மொழி` is a constant string. `மாறி பதிப்பு` is a mutable variable initialized to Tamil numeral `$௧` (1) and incremented.'
    },
    output: `மொழி: தமிழ்
பதிப்பு: 1
புதிய பதிப்பு: 2`,
    nextStep: 'numerals'
  },
  {
    id: 'numerals',
    title: { ta: '3. தமிழ் எண்களும் வரம்புகளும்', en: '3. Tamil Numerals & Ranges' },
    summary: {
      ta: 'முழு எண்கள் ($௩௦௦௦), தசமங்கள் ($௧௨.௫), மற்றும் தொடர் வரம்புகள் ($௧..$௫).',
      en: 'Tamil integers ($௩௦௦௦), decimals ($௧௨.௫), and range arrays ($௧..$௫).'
    },
    category: 'basics',
    explanation: {
      ta: 'TamilScript $ குறியீட்டுடன் தொடங்கும் தமிழ் எண்களை ஆதரிக்கிறது ($௦-$௯). மேலும் $௧..$௫ வடிவில் எளிய வரம்புகளை எழுதலாம்.',
      en: 'TamilScript supports native Tamil numerals prefixed by `$` ($௦-$௯), decimals ($௧௨.௫), and ascending range expressions ($௧..$௫).'
    },
    code: `நிலையான விலை = $௧௦௦;
நிலையான வரி = $௦.௧௮;
நிலையான மொத்த_விலை = விலை + (விலை * வரி);

அச்சிடு("மொத்தம்: " + மொத்த_விலை);

// வரம்பு எடுத்துக்காட்டு (1 முதல் 5 வரை)
நிலையான எண்கள் = $௧..$௫;
அச்சிடு("வரம்பு எண்கள்: " + எண்கள்.join(", "));`,
    codeExplanation: {
      ta: '`$௧௦௦` என்பது 100, `$௦.௧௮` என்பது 0.18 (தசமம்), மற்றும் `$௧..$௫` என்பது [1, 2, 3, 4, 5] என்ற அணியை உருவாக்குகிறது.',
      en: '`$௧௦௦` evaluates to 100, `$௦.௧௮` evaluates to 0.18, and `$௧..$௫` yields an array `[1, 2, 3, 4, 5]`.'
    },
    output: `மொத்தம்: 118
வரம்பு எண்கள்: 1, 2, 3, 4, 5`,
    nextStep: 'conditions'
  },
  {
    id: 'conditions',
    title: { ta: '4. நிபந்தனைகள் (Conditions)', en: '4. Conditional Branching' },
    summary: {
      ta: 'தர்க்க முடிவுகளை எடுக்க `என்றால்` (if) மற்றும் `இல்லை` (else) பயன்பாடுகள்.',
      en: 'Controlling execution flow with `என்றால்` (if) and `இல்லை` (else).'
    },
    category: 'control',
    explanation: {
      ta: 'ஒரு நிபந்தனை உண்மையாக இருக்கும்போது ஒரு குறியீட்டுப் பகுதியையும், தவறாக இருக்கும்போது வேறொரு பகுதியையும் இயக்க `என்றால்` மற்றும் `இல்லை` உதவுகின்றன.',
      en: 'Conditional statements allow programs to make decisions and execute different branches of logic.'
    },
    code: `நிலையான மதிப்பெண் = $௮௫;

என்றால் (மதிப்பெண் >= $௮௦) {
  அச்சிடு("சிறந்த தேர்ச்சி (Distinction)");
} இல்லை என்றால் (மதிப்பெண் >= $௩௫) {
  அச்சிடு("தேர்ச்சி பெற்றது (Pass)");
} இல்லை {
  அச்சிடு("மீண்டும் முயற்சி செய்க (Fail)");
}`,
    codeExplanation: {
      ta: 'மதிப்பெண் 80-க்கு மேல் இருந்தால் முதல் பகுதி இயங்கும். `என்றால்` மற்றும் `இல்லை` இயல்பாக JavaScript if/else ஆக செயல்படுகிறது.',
      en: 'Since score is 85, the first condition matches. These keywords translate directly to `if` and `else`.'
    },
    output: `சிறந்த தேர்ச்சி (Distinction)`,
    nextStep: 'loops'
  },
  {
    id: 'loops',
    title: { ta: '5. சுழற்சிகள் (Loops)', en: '5. Loops & Iteration' },
    summary: {
      ta: 'மீண்டும் மீண்டும் இயக்க `ஒவ்வொரு` (for) மற்றும் `இருக்கும்வரை` (while).',
      en: 'Repeating operations with `ஒவ்வொரு` (for) and `இருக்கும்வரை` (while).'
    },
    category: 'control',
    explanation: {
      ta: 'ஒரு குறிப்பிட்ட தொகுதி குறியீட்டை பலமுறை இயக்க சுழற்சிகள் பயன்படுகின்றன. `தொடர்` (continue) அடுத்த சுழற்சிக்கு செல்லவும், `நிறுத்து` (break) சுழற்சியை முடிக்கவும் பயன்படும்.',
      en: 'Loops repeat code execution. `ஒவ்வொரு` maps to `for`, `தொடர்` to `continue`, and `நிறுத்து` to `break`.'
    },
    code: `நிலையான பழங்கள் = ["மாம்பழம்", "வாழைப்பழம்", "பலாப்பழம்"];

ஒவ்வொரு (const பழம் of பழங்கள்) {
  அச்சிடு("சுவையான: " + பழம்);
}

மாறி எண்ணிக்கை = $௩;
இருக்கும்வரை (எண்ணிக்கை > $௦) {
  அச்சிடு("கவுண்ட்டவுன்: " + எண்ணிக்கை);
  எண்ணிக்கை = எண்ணிக்கை - $௧;
}`,
    codeExplanation: {
      ta: '`ஒவ்வொரு (... of ...)` அணி உறுப்புகளை ஒவ்வொன்றாக எடுக்கிறது. `இருக்கும்வரை` நிபந்தனை முடியும் வரை இயங்குகிறது.',
      en: 'Iterates through the fruits list with `for..of` and decrements a countdown counter with `while`.'
    },
    output: `சுவையான: மாம்பழம்
சுவையான: வாழைப்பழம்
சுவையான: பலாப்பழம்
கவுண்ட்டவுன்: 3
கவுண்ட்டவுன்: 2
கவுண்ட்டவுன்: 1`,
    nextStep: 'functions'
  },
  {
    id: 'functions',
    title: { ta: '6. செயல்பாடுகள் (Functions)', en: '6. Functions' },
    summary: {
      ta: 'மறுபயன்பாட்டு தர்க்கங்களை `செயல்` மற்றும் `கொடு` (return) கொண்டு உருவாக்குதல்.',
      en: 'Writing modular reusable logic with `செயல்` (function) and `கொடு` (return).'
    },
    category: 'core',
    explanation: {
      ta: 'ஒரு குறிப்பிட்ட வேலையைச் செய்யக்கூடிய குறியீட்டுத் தொகுப்பை `செயல்` மூலம் உருவாக்கலாம். அதன் விடையைத் திருப்பி அனுப்ப `கொடு` பயன்படுகிறது.',
      en: 'Functions encapsulate reusable logic. Declare with `செயல்` and return values with `கொடு`.'
    },
    code: `செயல் கூட்டு(முதல், இரண்டாவது) {
  கொடு முதல் + இரண்டாவது;
}

செயல் வணக்கம்_சொல்(பெயர் = "நண்பரே") {
  கொடு "வணக்கம் " + பெயர் + "!";
}

அச்சிடு(கூட்டு($௧௦, $௨௦));
அச்சிடு(வணக்கம்_சொல்("அகழி"));`,
    codeExplanation: {
      ta: '`செயல் கூட்டு` இரண்டு எண்களைப் பெற்று கூட்டிக் கொடுக்கிறது. `கொடு` என்பது JavaScript `return` ஆகும்.',
      en: 'Defines math addition and greeting functions using `செயல்` and `கொடு`.'
    },
    output: `30
வணக்கம் அகழி!`,
    nextStep: 'classes'
  },
  {
    id: 'classes',
    title: { ta: '7. வகுப்புகளும் பொருள்களும் (Classes)', en: '7. Classes & OOP' },
    summary: {
      ta: 'பொருள்சார் நிரலாக்கத்திற்கு `வகுப்பு`, `உருவாக்கு`, `இது`, மற்றும் `சேர்தல்`.',
      en: 'Object-oriented programming with `வகுப்பு` (class) and `உருவாக்கு` (constructor).'
    },
    category: 'core',
    explanation: {
      ta: 'பொருட்களின் பண்புகளையும் செயல்களையும் வரையறுக்க `வகுப்பு` (class) பயன்படுகிறது. பொருளை உருவாக்கும் போது `உருவாக்கு` (constructor) இயங்கும்.',
      en: 'Object-oriented programming using classes, constructors, `this` (`இது`), and inheritance.'
    },
    code: `வகுப்பு பயனர் {
  உருவாக்கு(பெயர், வயது) {
    இது.பெயர் = பெயர்;
    இது.வயது = வயது;
  }

  விவரம்() {
    கொடு இது.பெயர் + " (" + இது.வயது + " வயது)";
  }
}

நிலையான கனிமொழி = புதிய பயனர்("கனிமொழி", $௨௫);
அச்சிடு(கனிமொழி.விவரம்());`,
    codeExplanation: {
      ta: '`வகுப்பு` என்பது class, `உருவாக்கு` constructor, `இது` this, மற்றும் `புதிய` new operator ஆகும்.',
      en: 'Defines a class `பயனர்`, binds properties on `இது`, and instantiates an object with `புதிய`.'
    },
    output: `கனிமொழி (25 வயது)`,
    nextStep: 'async-await'
  },
  {
    id: 'async-await',
    title: { ta: '8. ஒத்திசைவற்ற நிரலாக்கம் (Async / Await)', en: '8. Async & Await' },
    summary: {
      ta: 'நேரம் எடுக்கும் பணிகளை காத்திருக்க வைக்க `ஒத்திசைவற்ற` மற்றும் `காத்திரு`.',
      en: 'Non-blocking asynchronous flows with `ஒத்திசைவற்ற` (async) and `காத்திரு` (await).'
    },
    category: 'core',
    explanation: {
      ta: 'வலைப்பின்னல் அழைப்புகள், கோப்பு வாசிப்பு போன்ற தாமதமாகும் பணிகளை செய்யும்போது செயலியை முடக்காமல் இயக்க `ஒத்திசைவற்ற` மற்றும் `காத்திரு` பயன்படுகின்றன.',
      en: 'Handle asynchronous I/O and promises cleanly using `ஒத்திசைவற்ற` and `காத்திரு`.'
    },
    code: `செயல் தாமதம்(மில்லிசெகண்ட்) {
  கொடு புதிய Promise(செயல் (தீர்வு) {
    setTimeout(தீர்வு, மில்லிசெகண்ட்);
  });
}

ஒத்திசைவற்ற செயல் தரவு_ஏற்று() {
  அச்சிடு("தரவு ஏற்றப்படுகிறது...");
  காத்திரு தாமதம்($௧௦௦);
  கொடு "தரவு வெற்றிகரமாக பெறப்பட்டது!";
}

ஒத்திசைவற்ற செயல் முக்கிய() {
  நிலையான முடிவு = காத்திரு தரவு_ஏற்று();
  அச்சிடு(முடிவு);
}

முக்கிய();`,
    codeExplanation: {
      ta: '`ஒத்திசைவற்ற செயல்` என்பது `async function`. `காத்திரு` என்பது `await` ஆகும்.',
      en: 'Demonstrates promise-based delayed execution using native async/await keywords in Tamil.'
    },
    output: `தரவு ஏற்றப்படுகிறது...
தரவு வெற்றிகரமாக பெறப்பட்டது!`,
    nextStep: 'modules'
  },
  {
    id: 'modules',
    title: { ta: '9. தொகுதிகள் மற்றும் இறக்குமதி (Modules)', en: '9. Modules & Imports' },
    summary: {
      ta: 'கோப்புகளுக்கு இடையே குறியீடுகளைப் பகிர `இறக்குமதி`, `ஏற்றுமதி`, `இருந்து`.',
      en: 'Splitting programs across files with `இறக்குமதி` (import) and `ஏற்றுமதி` (export).'
    },
    category: 'core',
    explanation: {
      ta: 'பெரிய திட்டங்களை சிறிய கோப்புகளாகப் பிரித்து நிர்வகிக்க ES Modules முறைமை பயன்படுகிறது. `ஏற்றுமதி` குறியீட்டை வெளியிடுகிறது, `இறக்குமதி` அதைப் பெறுகிறது.',
      en: 'ES Modules allow clean separation of code across files using native Tamil keywords.'
    },
    code: `// கணிதம்.tamil
ஏற்றுமதி செயல் கூட்டு(a, b) { கொடு a + b; }
ஏற்றுமதி செயல் பெருக்கு(a, b) { கொடு a * b; }

// main.tamil
இறக்குமதி { கூட்டு, பெருக்கு } இருந்து "./கணிதம்.tamil";

அச்சிடு("கூட்டல்: " + கூட்டு($௫, $௧௦));
அச்சிடு("பெருக்கல்: " + பெருக்கு($௫, $௧௦));`,
    codeExplanation: {
      ta: '`ஏற்றுமதி` என்பது `export`, `இறக்குமதி` என்பது `import`, மற்றும் `இருந்து` என்பது `from` ஆகும்.',
      en: 'Exports functions from one module and imports them into another.'
    },
    output: `கூட்டல்: 15
பெருக்கல்: 50`,
    nextStep: 'first-server'
  },
  {
    id: 'first-server',
    title: { ta: '10. முதல் வலைச்சேவையகம் (First Web Server)', en: '10. Build Your First Server' },
    summary: {
      ta: 'AKAZHI வலைச்சேவையகம்() மூலம் முதல் HTTP சேவையகத்தைத் தொடங்குதல்.',
      en: 'Spinning up a production-ready HTTP server with AKAZHI.'
    },
    category: 'akazhi',
    explanation: {
      ta: 'இப்போது நாம் AKAZHI கட்டமைப்பிற்குள் நுழைகிறோம்! `@akazhi/node` தொகுப்பிலிருந்து `வலைச்சேவையகம்` இறக்குமதி செய்து சில வரிகளில் சேவையகத்தை இயக்கலாம்.',
      en: 'Step into backend engineering with AKAZHI! Import `வலைச்சேவையகம்` from `@akazhi/node` to run an HTTP server.'
    },
    code: `இறக்குமதி { வலைச்சேவையகம், அச்சிடு } இருந்து "@akazhi/node";

நிலையான சேவையகம் = வலைச்சேவையகம்();

சேவையகம்.பெறு("/", செயல் (கோரிக்கை, பதில்) {
  பதில்.ஜேசன்({
    செய்தி: "வணக்கம் AKAZHI!",
    நிலை: "வெற்றிகரமாக இயங்குகிறது",
  });
});

நிலையான தகவல் = காத்திரு சேவையகம்.தொடங்கு({
  துறைமுகம்: $௩௦௦௦,
});

அச்சிடு(\`சேவையகம் http://\${தகவல்.முகவரி}:\${தகவல்.துறைமுகம்}-ல் இயங்குகிறது\`);`,
    codeExplanation: {
      ta: '`சேவையகம்.பெறு` என்பது GET வழிப்பாதை. `பதில்.ஜேசன்` JSON தரவை வாடிக்கையாளருக்கு அனுப்புகிறது. `காத்திரு சேவையகம்.தொடங்கு` சேவையகத்தைத் தொடங்குகிறது.',
      en: 'Registers a GET route on `/`, sends a JSON payload, and begins listening on port 3000.'
    },
    output: `சேவையகம் http://127.0.0.1:3000-ல் இயங்குகிறது`,
    nextStep: 'rest-apis'
  },
  {
    id: 'rest-apis',
    title: { ta: '11. REST API மற்றும் POST உடற்பகுதி', en: '11. Building REST APIs' },
    summary: {
      ta: 'JSON கோரிக்கைகளை வாசித்தல் (`கோரிக்கை.ஜேசன்()`) மற்றும் நிலை குறியீடுகள்.',
      en: 'Handling JSON bodies with `கோரிக்கை.ஜேசன்()` and HTTP status codes.'
    },
    category: 'akazhi',
    explanation: {
      ta: 'REST API என்பது இணைய பயன்பாடுகள் தகவல் பரிமாறிக்கொள்ளும் வழியாகும். `அனுப்பு` (POST) வழியில் வாடிக்கையாளர் அனுப்பும் தரவை `காத்திரு கோரிக்கை.ஜேசன்()` மூலம் வாசிக்கலாம்.',
      en: 'APIs allow frontend apps and mobile apps to communicate with backends. Read JSON payloads with `await கோரிக்கை.ஜேசன்()`.'
    },
    code: `இறக்குமதி { வலைச்சேவையகம், நிலை } இருந்து "@akazhi/node";

நிலையான சேவையகம் = வலைச்சேவையகம்();

// POST கோரிக்கை
சேவையகம்.அனுப்பு("/api/messages", ஒத்திசைவற்ற செயல் (கோரிக்கை, பதில்) {
  நிலையான உடல் = காத்திரு கோரிக்கை.ஜேசன்();
  
  என்றால் (!உடல் || !உடல்.செய்தி) {
    பதில்.நிலை(நிலை.தவறானகோரிக்கை).ஜேசன்({ பிழை: "செய்தி தேவை" });
    கொடு;
  }
  
  பதில்.நிலை(நிலை.உருவாக்கப்பட்டது).ஜேசன்({
    வெற்றி: true,
    சேமிக்கப்பட்டது: உடல்.செய்தி,
  });
});

காத்திரு சேவையகம்.தொடங்கு({ துறைமுகம்: $௩௦௦௦ });`,
    codeExplanation: {
      ta: 'நிலை.உருவாக்கப்பட்டது என்பது 201 நிலை குறியீடு. நிலை.தவறானகோரிக்கை என்பது 400 ஆகும்.',
      en: 'Validates incoming JSON payload and returns 201 Created or 400 Bad Request.'
    },
    output: `POST /api/messages -> 201 Created {"வெற்றி": true, "சேமிக்கப்பட்டது": "..."}`,
    nextStep: 'routing-controllers'
  },
  {
    id: 'routing-controllers',
    title: { ta: '12. வழிகளும் கையாளுநர்களும் (Controllers)', en: '12. Routes & Controllers' },
    summary: {
      ta: 'கோப்பமைப்பை ஒழுங்கமைத்து வழிகளையும் தர்க்கங்களையும் பிரித்தல்.',
      en: 'Architecting maintainable web servers by decoupling routes and controllers.'
    },
    category: 'akazhi',
    explanation: {
      ta: 'திட்டம் வளரும்போது அனைத்து வழிகளையும் ஒரே கோப்பில் எழுதக் கூடாது. வழிகளை `routes/` அடைவிலும், செயல்பாட்டு தர்க்கங்களை `controllers/` அடைவிலும் பிரிக்க வேண்டும்.',
      en: 'Structure enterprise backends cleanly by separating endpoint paths from business controller handlers.'
    },
    code: `// controllers/users.tamil
ஏற்றுமதி செயல் அனைவரையும்_பெறு(கோரிக்கை, பதில்) {
  பதில்.ஜேசன்({ பயனர்கள்: ["முகிலன்", "இளவேனில்", "கயல்விழி"] });
}

// routes/users.tamil
இறக்குமதி { அனைவரையும்_பெறு } இருந்து "../controllers/users.tamil";

ஏற்றுமதி செயல் பயனர்_வழிகள்(சேவையகம்) {
  சேவையகம்.பெறு("/api/users", அனைவரையும்_பெறு);
}`,
    codeExplanation: {
      ta: 'கையாளுநர் தர்க்கமும் வழியும் தனித்தனி கோப்புகளாக பிரிக்கப்பட்டு சுத்தமான கட்டமைப்பு உருவாகிறது.',
      en: 'Cleaner maintainability by routing to dedicated controller functions.'
    },
    output: `GET /api/users -> {"பயனர்கள்": ["முகிலன்", "இளவேனில்", "கயல்விழி"]}`,
    nextStep: 'middleware-pipeline'
  },
  {
    id: 'middleware-pipeline',
    title: { ta: '13. இடைத்தரகர் அடுக்கு (Middleware Pipeline)', en: '13. Middleware Pipelines' },
    summary: {
      ta: 'கோரிக்கைப் பதிவு, அனுமதி சரிபார்ப்பு, மற்றும் `காத்திரு அடுத்து()`.',
      en: 'Request logging and auth guards using `சேவையகம்.பயன்படுத்து`.'
    },
    category: 'akazhi',
    explanation: {
      ta: 'ஒரு கோரிக்கை வழிப்பாதைக்கு செல்லும் முன் அதை ஆராயவோ அல்லது தலைப்புகளைச் சேர்க்கவோ இடைத்தரகர் உதவுகிறது. `காத்திரு அடுத்து()` அடுத்த கட்டத்திற்கு அனுப்புகிறது.',
      en: 'Middlewares intercept HTTP requests before routing. Always invoke `await அடுத்து()` to advance the pipeline.'
    },
    code: `இறக்குமதி { வலைச்சேவையகம், அச்சிடு } இருந்து "@akazhi/node";

நிலையான சேவையகம் = வலைச்சேவையகம்();

// கோரிக்கை பதிவு இடைத்தரகர்
சேவையகம்.பயன்படுத்து(ஒத்திசைவற்ற செயல் (கோரிக்கை, பதில், அடுத்து) {
  நிலையான நேரம் = Date.now();
  காத்திரு அடுத்து();
  நிலையான காலஅளவு = Date.now() - நேரம்;
  அச்சிடு(\`[\${கோரிக்கை.முறை}] \${கோரிக்கை.பாதை} - \${காலஅளவு}ms\`);
});

சேவையகம்.பெறு("/health", செயல் (_கோரிக்கை, பதில்) {
  பதில்.ஜேசன்({ நிலை: "நலமாக உள்ளது" });
});

காத்திரு சேவையகம்.தொடங்கு({ துறைமுகம்: $௩௦௦௦ });`,
    codeExplanation: {
      ta: 'கோரிக்கையின் தொடக்க நேரத்தைக் குறித்துக்கொண்டு, `அடுத்து()` முடித்த பின் செயல்பட்ட நேரத்தை மில்லிசெகண்டில் அச்சிடுகிறது.',
      en: 'Logs incoming request path, method, and response latency in milliseconds.'
    },
    output: `[GET] /health - 3ms`,
    nextStep: 'file-operations'
  },
  {
    id: 'file-operations',
    title: { ta: '14. கோப்பு செயல்பாடுகள் (File Utilities)', en: '14. File Operations with கோப்பு' },
    summary: {
      ta: 'உள்ளூர் கோப்புகளை எளிதாக வாசித்தல், எழுதுதல் மற்றும் சேமித்தல்.',
      en: 'Reading, writing, and parsing files with the built-in கோப்பு utility.'
    },
    category: 'akazhi',
    explanation: {
      ta: 'AKAZHI-ல் `கோப்பு` என்ற தமிழ் API உள்ளமைக்கப்பட்டுள்ளது. இது Node.js fs தொகுப்பைத் தனியாக அழைக்க வேண்டிய அவசியமின்றி தமிழ் வழியிலேயே கோப்புகளை கையாள வழிவகுக்கிறது.',
      en: 'AKAZHI ships with the native `கோப்பு` namespace for reading, writing, and checking files without importing Node fs directly.'
    },
    code: `இறக்குமதி { கோப்பு, அச்சிடு } இருந்து "@akazhi/node";

ஒத்திசைவற்ற செயல் கோப்பு_சோதனை() {
  // உரை எழுதுதல்
  காத்திரு கோப்பு.எழுது("logs.txt", "முதல் பதிவு வரி\\n");

  // உரை படித்தல்
  நிலையான உள்ளடக்கம் = காத்திரு கோப்பு.படி("logs.txt");
  அச்சிடு("கோப்பின் உள்ளடக்கம்: " + உள்ளடக்கம்);

  // JSON படித்தல்
  நிலையான உள்ளதா = காத்திரு கோப்பு.உள்ளதா("logs.txt");
  அச்சிடு("கோப்பு உள்ளதா? " + உள்ளதா);
}

கோப்பு_சோதனை();`,
    codeExplanation: {
      ta: '`கோப்பு.எழுது`, `கோப்பு.படி`, மற்றும் `கோப்பு.உள்ளதா` அனைத்தும் நவீன Promise முறையில் ஒத்திசைவற்றவையாக இயங்குகின்றன.',
      en: 'Provides clean async/await file manipulation without complex buffer handling.'
    },
    output: `கோப்பின் உள்ளடக்கம்: முதல் பதிவு வரி
கோப்பு உள்ளதா? true`,
    nextStep: 'error-handling'
  },
  {
    id: 'error-handling',
    title: { ta: '15. பிழை மேலாண்மை (Error Handling)', en: '15. Error Handling & Diagnostics' },
    summary: {
      ta: '`முயற்சி`, `பிடி`, `எறி` மற்றும் தமிழ் பிழைத் தகவல்கள்.',
      en: 'Robust exception handling with `முயற்சி` (try) and `பிடி` (catch).'
    },
    category: 'akazhi',
    explanation: {
      ta: 'நிரல் இயங்கும் போது எதிர்பாராத பிழைகள் ஏற்பட்டால் செயலி முடங்கிவிடாமல் பாதுகாக்க `முயற்சி` மற்றும் `பிடி` உதவுகிறது.',
      en: 'Prevent runtime crashes and return informative diagnostics using TamilScript error keywords.'
    },
    code: `இறக்குமதி { வலைச்சேவையகம், பிழை, அச்சிடு } இருந்து "@akazhi/node";

நிலையான சேவையகம் = வலைச்சேவையகம்();

சேவையகம்.பெறு("/வகுத்தல்", செயல் (கோரிக்கை, பதில்) {
  முயற்சி {
    நிலையான எண்1 = Number(கோரிக்கை.வினவல்["a"]);
    நிலையான எண்2 = Number(கோரிக்கை.வினவல்["b"]);
    
    என்றால் (எண்2 === $௦) {
      எறி புதிய பிழை("பூஜ்ஜியத்தால் வகுக்க முடியாது!");
    }
    
    பதில்.ஜேசன்({ விடை: எண்1 / எண்2 });
  } பிடி (பிழைவிவரம்) {
    பதில்.நிலை(400).ஜேசன்({ பிழை: பிழைவிவரம்.message });
  }
});

காத்திரு சேவையகம்.தொடங்கு({ துறைமுகம்: $௩௦௦௦ });`,
    codeExplanation: {
      ta: '`முயற்சி` (try), `பிடி` (catch), மற்றும் `எறி` (throw) மூலம் பிழையை எதிர்கொண்டு 400 தவறான கோரிக்கை பதில் அளிக்கப்படுகிறது.',
      en: 'Demonstrates zero-crash runtime exception handling and clean API error reporting.'
    },
    output: `GET /வகுத்தல்?a=10&b=0 -> 400 {"பிழை": "பூஜ்ஜியத்தால் வகுக்க முடியாது!"}`,
    nextStep: null
  }
];
