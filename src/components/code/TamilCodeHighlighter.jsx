import React from 'react';

/**
 * Display-only highlighter for YaazhiCode source shown on this website.
 * Spellings follow the official keyword, standard-library, and module references.
 */
const KEYWORDS = new Set([
  'என்றால்', 'இல்லை', 'நிறுத்து', 'தொடர்', 'ஒவ்வொரு', 'செயல்', 'கொடு',
  'வகுப்பு', 'உருவாக்கு', 'இது', 'மேல்', 'சேர்தல்', 'நிலையான', 'மாறி', 'மாற்றி',
  'இருக்கும்வரை', 'செய்', 'தேர்ந்தெடு', 'நிலை', 'இயல்புநிலை', 'முயற்சி', 'பிடி',
  'இறுதியில்', 'எறி', 'புதிய', 'நீக்கு', 'வகை', 'உதாரணம்', 'உள்ளே', 'வெற்று',
  'ஒத்திசைவற்ற', 'காத்திரு', 'வழங்கு', 'இறக்குமதி', 'ஏற்றுமதி', 'இருந்து', 'ஆக',
  'உடன்', 'பிழைத்திருத்து', 'நிலையியல்',
]);

const BUILTINS = new Set([
  'அச்சிடு', 'எழுது', 'உள்ளீடு', 'வடிவமை', 'உண்மை', 'பொய்', 'வெற்றிடம்', 'வாதங்கள்',
  'எண்ணாக்கு', 'உரையாக்கு', 'எண்ணா', 'சரமா', 'பட்டியலா', 'பொருளா', 'செயலா',
  'வெற்றிடமா', 'வகுப்பா', 'சேர்', 'அகற்று', 'வரைபடம்', 'வடிகட்டு', 'குறை',
  'ஒவ்வொன்றும்', 'வரிசை', 'வரிசைப்படுத்து', 'நீளம்', 'தேடு', 'மாற்று', 'பிரி',
  'இணை', 'விசைகள்', 'மதிப்புகள்', 'இணைப்புகள்', 'புதுப்பி', 'நகல்', 'உள்ளதா',
  'வடிவமை', 'சக்தி', 'வர்க்கம்', 'வர்க்கமூலம்', 'பை', 'இ', 'பிழை',
  'கோப்பு_படி', 'கோப்பு_எழுது', 'கோப்பு_சேர்', 'கோப்பு_உள்ளதா',
  'கோப்பகம்_உருவாக்கு', 'கோப்பக_பட்டியல்', 'தற்போதைய_கோப்பகம்',
]);

const METHODS = new Set([
  'பெறு', 'அனுப்பு', 'கேள்', 'துறை_பெறு', 'உரை_அனுப்பு', 'நிலையானகோப்புகள்',
  'தலைப்புகள்', 'நிலை', 'அனுப்பு', 'கோப்புஅனுப்பு', 'படி', 'எழுது', 'சேர்',
  'பட்டியல்', 'தகவல்', 'உள்ளதா', 'தீர்மானி', 'இணை', 'அடிப்பெயர்',
  'கோப்பகம்', 'நீட்டிப்பு', 'பிரி', 'குறியீடு', 'செய்தி', 'படிவம்',
  'அளவுருக்கள்', 'உடல்', 'உரை', 'ஜேசன்',
]);

const KEYWORD_RE = /^[\u0B80-\u0BFFA-Za-z_$][\u0B80-\u0BFFA-Za-z0-9_$]*$/;

export function highlightTamilCode(code) {
  if (!code) return [];

  return code.split('\n').map(line => {
    const tokens = [];
    let i = 0;

    while (i < line.length) {
      if (line.slice(i, i + 2) === '//') {
        tokens.push({ type: 'comment', value: line.slice(i) });
        break;
      }

      if (line.slice(i, i + 2) === '/*') {
        const end = line.indexOf('*/', i + 2);
        const stop = end === -1 ? line.length : end + 2;
        tokens.push({ type: 'comment', value: line.slice(i, stop) });
        i = stop;
        continue;
      }

      if (i === 0 && /^\s*\*/.test(line)) {
        tokens.push({ type: 'comment', value: line });
        break;
      }

      const char = line[i];
      if (char === '"' || char === "'" || char === '`') {
        let str = char;
        i += 1;
        while (i < line.length && line[i] !== char) {
          if (line[i] === '\\' && i + 1 < line.length) {
            str += line[i] + line[i + 1];
            i += 2;
          } else {
            str += line[i];
            i += 1;
          }
        }
        if (i < line.length) {
          str += line[i];
          i += 1;
        }
        tokens.push({ type: 'string', value: str });
        continue;
      }

      if (char === '$' && /[௦-௯]/.test(line[i + 1] || '')) {
        let num = '$';
        i += 1;
        while (i < line.length && (/[௦-௯.]/.test(line[i]) || line.slice(i, i + 2) === '..')) {
          if (line.slice(i, i + 2) === '..') {
            num += '..';
            i += 2;
            if (line[i] === '$') { num += '$'; i += 1; }
          } else {
            num += line[i];
            i += 1;
          }
        }
        tokens.push({ type: 'number', value: num });
        continue;
      }

      if (/[0-9]/.test(char)) {
        let num = '';
        while (i < line.length && /[0-9.]/.test(line[i])) { num += line[i]; i += 1; }
        tokens.push({ type: 'number', value: num });
        continue;
      }

      if (/[\u0B80-\u0BFFA-Za-z_$]/.test(char)) {
        let word = '';
        while (i < line.length && /[\u0B80-\u0BFFA-Za-z0-9_$]/.test(line[i])) {
          word += line[i];
          i += 1;
        }
        if (KEYWORDS.has(word)) tokens.push({ type: 'keyword', value: word });
        else if (BUILTINS.has(word)) tokens.push({ type: 'builtin', value: word });
        else if (METHODS.has(word)) tokens.push({ type: 'method', value: word });
        else tokens.push({ type: 'identifier', value: word });
        continue;
      }

      tokens.push({ type: 'punctuation', value: char });
      i += 1;
    }

    return tokens.filter(token => KEYWORD_RE.test(token.value) || token.type !== 'identifier');
  });
}
