import { docsCategories, docsContent } from '../content/docsData';
import { tutorials } from '../content/tutorialsData';
import { packages } from '../content/packagesData';
import { coreKeywords, extendedKeywords } from '../content/tamilScriptData';
import { examples } from '../content/examplesData';
import { roadmapPhases } from '../content/roadmapData';

export function getSearchIndex() {
  const index = [];

  // 1. Index Docs
  docsCategories.forEach(cat => {
    cat.items.forEach(item => {
      const doc = docsContent[item.id];
      index.push({
        id: `doc-${item.id}`,
        type: 'docs',
        typeLabel: { ta: 'ஆவணம்', en: 'Documentation' },
        targetPage: 'docs',
        targetId: item.id,
        title: item.title,
        description: doc?.description || { ta: '', en: '' },
        keywords: `${item.title.ta} ${item.title.en} ${cat.title.ta} ${cat.title.en} ${item.id}`,
      });
    });
  });

  // 2. Index Tutorials / Learn
  tutorials.forEach(tut => {
    index.push({
      id: `tut-${tut.id}`,
      type: 'learn',
      typeLabel: { ta: 'பாடம்', en: 'Tutorial' },
      targetPage: 'learn',
      targetId: tut.id,
      title: tut.title,
      description: tut.summary,
      keywords: `${tut.title.ta} ${tut.title.en} ${tut.id} ${tut.summary.ta} ${tut.summary.en}`,
    });
  });

  // 3. Index Packages
  packages.forEach(pkg => {
    index.push({
      id: `pkg-${pkg.id}`,
      type: 'packages',
      typeLabel: { ta: 'தொகுப்பு', en: 'Package' },
      targetPage: 'packages',
      targetId: pkg.id,
      title: { ta: pkg.name, en: pkg.name },
      description: pkg.summary,
      keywords: `${pkg.name} ${pkg.id} ${pkg.summary.ta} ${pkg.summary.en} npm`,
    });
  });

  // 4. Index TamilScript Keywords
  [...coreKeywords, ...extendedKeywords].forEach(kw => {
    index.push({
      id: `kw-${kw.tamil}`,
      type: 'tamilscript',
      typeLabel: { ta: 'திறவுச்சொல்', en: 'Keyword' },
      targetPage: 'tamilscript',
      targetId: kw.tamil,
      title: { ta: `${kw.tamil} (${kw.js})`, en: `${kw.tamil} (${kw.js})` },
      description: {
        ta: `JavaScript '${kw.js}' சொல்லுக்கு இணையான தமிழ் திறவுச்சொல்.`,
        en: `TamilScript keyword mapping to JavaScript '${kw.js}'.`
      },
      keywords: `${kw.tamil} ${kw.js} keyword syntax`,
    });
  });

  // 5. Index Examples
  examples.forEach(ex => {
    index.push({
      id: `ex-${ex.id}`,
      type: 'examples',
      typeLabel: { ta: 'எடுத்துக்காட்டு', en: 'Example' },
      targetPage: 'examples',
      targetId: ex.id,
      title: ex.title,
      description: ex.summary,
      keywords: `${ex.title.ta} ${ex.title.en} ${ex.tags?.join(' ')} ${ex.id}`,
    });
  });

  // 6. Index Roadmap
  roadmapPhases.forEach(phase => {
    phase.items.forEach((item, idx) => {
      index.push({
        id: `road-${phase.id}-${idx}`,
        type: 'roadmap',
        typeLabel: { ta: 'செயல்திட்டம்', en: 'Roadmap' },
        targetPage: 'roadmap',
        targetId: phase.id,
        title: item.title,
        description: item.desc,
        keywords: `${item.title.ta} ${item.title.en} ${phase.title.ta} ${phase.title.en}`,
      });
    });
  });

  return index;
}

export function searchContent(query, language = 'ta') {
  if (!query || query.trim().length === 0) return [];

  const lowerQuery = query.toLowerCase().trim();
  const searchIndex = getSearchIndex();

  return searchIndex.filter(item => {
    const titleTa = (item.title.ta || '').toLowerCase();
    const titleEn = (item.title.en || '').toLowerCase();
    const descTa = (item.description.ta || '').toLowerCase();
    const descEn = (item.description.en || '').toLowerCase();
    const kw = (item.keywords || '').toLowerCase();

    return (
      titleTa.includes(lowerQuery) ||
      titleEn.includes(lowerQuery) ||
      descTa.includes(lowerQuery) ||
      descEn.includes(lowerQuery) ||
      kw.includes(lowerQuery)
    );
  }).slice(0, 8); // top 8 results
}
