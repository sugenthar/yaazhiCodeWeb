import React from 'react';

// Token types for syntax highlighting
const KEYWORDS = new Set([
  'என்றால்', 'இல்லை', 'நிறுத்து', 'தொடர்', 'ஒவ்வொரு', 'செயல்', 'கொடு',
  'வகுப்பு', 'உருவாக்கு', 'இது', 'மேல்', 'சேர்தல்', 'நிலையான', 'மாறி', 'மாற்றி',
  'இருக்கும்வரை', 'செய்', 'தேர்ந்தெடு', 'நிலை', 'இயல்புநிலை', 'முயற்சி', 'பிடி',
  'இறுதியில்', 'எறி', 'புதிய', 'நீக்கு', 'வகை', 'உதாரணம்', 'உள்ளே', 'வெற்று',
  'ஒத்திசைவற்ற', 'காத்திரு', 'வழங்கு', 'இறக்குமதி', 'ஏற்றுமதி', 'இருந்து', 'ஆக',
  'உடன்', 'பிழைத்திருத்து', 'நிலையியல்',
  // JS fallbacks if mixed
  'import', 'export', 'from', 'as', 'const', 'let', 'var', 'function', 'return',
  'if', 'else', 'for', 'while', 'do', 'switch', 'case', 'default', 'try', 'catch',
  'finally', 'throw', 'new', 'delete', 'typeof', 'instanceof', 'in', 'void',
  'async', 'await', 'yield', 'class', 'extends', 'super', 'this', 'static'
]);

const BUILTINS = new Set([
  'வலைச்சேவையகம்', 'நிலை', 'சூழல்', 'கோப்பு', 'ஜேசன்', 'நேரம்', 'அச்சிடு',
  'மொழிபெயர்ப்பு', 'பதிவு', 'ஓடைமூலம்', 'பிழை', 'எண்ணாக்கு',
  'console', 'process', 'Promise', 'Error', 'JSON', 'Array', 'Object'
]);

const METHODS = new Set([
  'பெறு', 'அனுப்பு', 'மாற்று', 'நீக்கு', 'திருத்து', 'தலை', 'விருப்பங்கள்',
  'பாதை', 'பயன்படுத்து', 'நிலைக்கோப்புகள்', 'தொடங்கு', 'நிறுத்து', 'நிறுத்தும்போது',
  'தலைப்பு', 'ஓடை', 'படி', 'எழுது', 'படிJSON', 'எழுதுJSON', 'பட்டியல்', 'உள்ளதா',
  'தேவை', 'எண்', 'உண்மை', 'இப்போது', 'மில்லி', 'தமிழ்', 'முடிந்ததா', 'உரை'
]);

export function highlightTamilCode(code) {
  if (!code) return [];

  const lines = code.split('\n');
  return lines.map((line, lineIndex) => {
    const tokens = [];
    let i = 0;

    while (i < line.length) {
      // 1. Comments: //
      if (line.slice(i, i + 2) === '//') {
        tokens.push({ type: 'comment', value: line.slice(i) });
        break;
      }

      // 2. Strings: ", ', `
      if (line[i] === '"' || line[i] === "'" || line[i] === '`') {
        const quote = line[i];
        let str = quote;
        i++;
        while (i < line.length && line[i] !== quote) {
          if (line[i] === '\\' && i + 1 < line.length) {
            str += line[i] + line[i + 1];
            i += 2;
          } else {
            str += line[i];
            i++;
          }
        }
        if (i < line.length) {
          str += line[i];
          i++;
        }
        tokens.push({ type: 'string', value: str });
        continue;
      }

      // 3. Tamil Numerals: $ followed by Tamil digits (e.g. $௩௦௦௦, $௧..$௫, $௧௨.௫)
      if (line[i] === '$' && i + 1 < line.length && /[௦-௯]/.test(line[i + 1])) {
        let numStr = '$';
        i++;
        while (i < line.length && (/[௦-௯.]/.test(line[i]) || (line.slice(i, i + 2) === '..'))) {
          if (line.slice(i, i + 2) === '..') {
            numStr += '..';
            i += 2;
            if (line[i] === '$') {
              numStr += '$';
              i++;
            }
          } else {
            numStr += line[i];
            i++;
          }
        }
        tokens.push({ type: 'number', value: numStr });
        continue;
      }

      // 4. Regular ASCII numbers
      if (/[0-9]/.test(line[i])) {
        let numStr = '';
        while (i < line.length && /[0-9.]/.test(line[i])) {
          numStr += line[i];
          i++;
        }
        tokens.push({ type: 'number', value: numStr });
        continue;
      }

      // 5. Identifiers, keywords, built-ins (support Tamil unicode characters and ASCII)
      if (/[\u0B80-\u0BFFa-zA-Z_$]/.test(line[i])) {
        let word = '';
        while (i < line.length && /[\u0B80-\u0BFFa-zA-Z0-9_$]/.test(line[i])) {
          word += line[i];
          i++;
        }

        if (KEYWORDS.has(word)) {
          tokens.push({ type: 'keyword', value: word });
        } else if (BUILTINS.has(word)) {
          tokens.push({ type: 'builtin', value: word });
        } else if (METHODS.has(word)) {
          tokens.push({ type: 'method', value: word });
        } else {
          tokens.push({ type: 'identifier', value: word });
        }
        continue;
      }

      // 6. Operators and Punctuation
      const punct = line[i];
      tokens.push({ type: 'punctuation', value: punct });
      i++;
    }

    return tokens;
  });
}
