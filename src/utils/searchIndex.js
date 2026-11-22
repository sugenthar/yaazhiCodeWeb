import { learnCategories, learnContent } from '../content/docsData';
import { examples } from '../content/examplesData';
import { syntaxExamples } from '../content/languageData';
import { futurePhases } from '../content/futureData';
import { CLI_COMMANDS } from '../content/siteData';

const L = (en, ta) => ({ en, ta });

export function getSearchIndex() {
  const index = [];

  learnCategories.forEach(category => {
    category.items.forEach(item => {
      const lesson = learnContent[item.id];
      index.push({
        id: `lesson-${item.id}`,
        type: 'lesson',
        typeLabel: L('Lesson', 'பாடம்'),
        targetPage: 'learn',
        targetId: item.id,
        title: item.title,
        description: lesson?.description || L('', ''),
        keywords: `${item.title.en} ${item.title.ta} ${category.title.en} ${category.title.ta} ${item.id}`,
      });
    });
  });

  syntaxExamples.forEach(sample => {
    index.push({
      id: `syntax-${sample.id}`,
      type: 'language',
      typeLabel: L('Syntax', 'தொடரியல்'),
      targetPage: 'language',
      targetId: sample.id,
      title: sample.title,
      description: sample.note,
      keywords: `${sample.title.en} ${sample.title.ta} ${sample.id} yaazhi`,
    });
  });

  examples.forEach(example => {
    index.push({
      id: `example-${example.id}`,
      type: 'example',
      typeLabel: L('Example', 'எடுத்துக்காட்டு'),
      targetPage: 'examples',
      targetId: example.id,
      title: example.title,
      description: example.summary,
      keywords: `${example.title.en} ${example.title.ta} ${example.id} ${example.category}`,
    });
  });

  CLI_COMMANDS.forEach(command => {
    index.push({
      id: `cli-${command.command}`,
      type: 'cli',
      typeLabel: L('Command', 'கட்டளை'),
      targetPage: 'install',
      targetId: null,
      title: L(command.command, command.command),
      description: L(command.en, command.ta),
      keywords: `${command.command} cli command yaazhicode`,
    });
  });

  futurePhases.forEach(phase => {
    index.push({
      id: `future-${phase.id}`,
      type: 'future',
      typeLabel: L('Future possibility', 'எதிர்கால சாத்தியம்'),
      targetPage: 'future',
      targetId: phase.id,
      title: phase.title,
      description: phase.description,
      keywords: `${phase.title.en} ${phase.title.ta} ${phase.id} future`,
    });
  });

  [
    ['about', L('About YaazhiCode', 'YaazhiCode பற்றி'), L('Goals and current release', 'இலக்குகளும் தற்போதைய வெளியீடும்')],
    ['features', L('Features', 'அம்சங்கள்'), L('What YaazhiCode offers today', 'இன்று YaazhiCode வழங்குவது')],
    ['install', L('Install', 'நிறுவுதல்'), L('Command line and IDE setup', 'கட்டளை வரி மற்றும் IDE அமைப்பு')],
    ['learn', L('Learn', 'கற்க'), L('Fourteen guided lessons', 'பதினான்கு வழிகாட்டும் பாடங்கள்')],
    ['language', L('Language reference', 'மொழி குறிப்பு'), L('Keywords, syntax, and modules', 'திறவுச்சொற்கள், தொடரியல், தொகுதிகள்')],
    ['examples', L('Examples', 'எடுத்துக்காட்டுகள்'), L('Verified .yaazhi programs', 'சரிபார்க்கப்பட்ட .yaazhi நிரல்கள்')],
    ['ide', L('Official IDE', 'அதிகாரப்பூர்வ IDE'), L('Projects, editor, output, and troubleshooting', 'திட்டங்கள், எடிட்டர், வெளியீடு, சிக்கல் தீர்வு')],
    ['future', L('Future', 'எதிர்காலம்'), L('Available features and future possibilities', 'கிடைக்கும் அம்சங்களும் எதிர்கால சாத்தியங்களும்')],
  ].forEach(([id, title, description]) => {
    index.push({
      id: `page-${id}`,
      type: 'page',
      typeLabel: L('Page', 'பக்கம்'),
      targetPage: id,
      targetId: null,
      title,
      description,
      keywords: `${title.en} ${title.ta} ${id}`,
    });
  });

  return index;
}

export function searchContent(query, language = 'en') {
  const q = query.trim().toLocaleLowerCase();
  if (!q) return [];
  const terms = q.split(/\s+/);

  return getSearchIndex()
    .map(item => {
      const title = item.title?.[language] || item.title?.en || '';
      const description = item.description?.[language] || item.description?.en || '';
      const haystack = `${title} ${description} ${item.keywords || ''}`.toLocaleLowerCase();
      if (!terms.every(term => haystack.includes(term))) return null;
      const score = title.toLocaleLowerCase().includes(q) ? 2 : haystack.includes(q) ? 1 : 0;
      return { ...item, score };
    })
    .filter(Boolean)
    .sort((a, b) => b.score - a.score)
    .slice(0, 12);
}
