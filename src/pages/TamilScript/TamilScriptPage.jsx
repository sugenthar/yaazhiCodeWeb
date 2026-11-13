import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { coreKeywords, extendedKeywords, tamilNumeralsTable, deferredKeywords } from '../../content/tamilScriptData';
import { CodeBlock } from '../../components/code/CodeBlock';
import { Badge } from '../../components/common/Badge';
import { Breadcrumb } from '../../components/navigation/Breadcrumb';
import { Code2, Hash, Cpu, AlertTriangle, Layers, Filter } from 'lucide-react';

export function TamilScriptPage({ onNavigate }) {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState('keywords'); // keywords, numerals, grammar, limitations
  const [keywordCategory, setKeywordCategory] = useState('all');

  const allKeywords = [...coreKeywords, ...extendedKeywords];

  const filteredKeywords = keywordCategory === 'all'
    ? allKeywords
    : allKeywords.filter(k => k.category === keywordCategory);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-10">
      <Breadcrumb
        items={[
          { label: 'TamilScript' }
        ]}
        onNavigate={onNavigate}
      />

      {/* Header Banner */}
      <div className="space-y-4 pb-8 border-b border-border/60">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface-100 text-xs font-mono text-silver-300">
          <Code2 className="w-3.5 h-3.5 text-pink-400" />
          <span>Independent NPM Package • tamilscript@0.3.0</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          {language === 'ta'
            ? 'தமிழ்ஸ்கிரிப்ட் தொடரியல் குறிப்பேடு'
            : 'TamilScript Language Reference'}
        </h1>

        <p className="text-base text-silver-300 max-w-3xl leading-relaxed">
          {language === 'ta'
            ? 'TamilScript என்பது ஜாவாஸ்கிரிப்ட்டிற்கான ஒரு சுயாதீன மொழி மாற்றியாகும் (Source Transformer). இது தமிழ் திறவுச்சொற்களையும் எண்களையும் தூய ஜாவாஸ்கிரிப்ட்டாக மாற்றுகிறது. AKAZHI கட்டமைப்பால் இயங்குதளத்தில் பயன்படுத்தப்படுகிறது.'
            : 'TamilScript is an independent source-to-source transformer for JavaScript. It rewrites supported Tamil keywords and numeric literals into standard JavaScript tokens before Node.js parses the code.'}
        </p>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-border/40">
          <button
            onClick={() => setActiveTab('keywords')}
            className={`px-4 py-2 rounded-lg text-xs font-mono transition-colors ${
              activeTab === 'keywords'
                ? 'bg-white text-black font-semibold'
                : 'bg-surface-100 text-silver-400 hover:text-white border border-border'
            }`}
          >
            {language === 'ta' ? '40 திறவுச்சொற்கள் (Keywords)' : '40 Keywords Registry'}
          </button>
          <button
            onClick={() => setActiveTab('numerals')}
            className={`px-4 py-2 rounded-lg text-xs font-mono transition-colors ${
              activeTab === 'numerals'
                ? 'bg-white text-black font-semibold'
                : 'bg-surface-100 text-silver-400 hover:text-white border border-border'
            }`}
          >
            {language === 'ta' ? 'தமிழ் எண்கள் ($௦-$௯)' : 'Tamil Numerals & Ranges'}
          </button>
          <button
            onClick={() => setActiveTab('grammar')}
            className={`px-4 py-2 rounded-lg text-xs font-mono transition-colors ${
              activeTab === 'grammar'
                ? 'bg-white text-black font-semibold'
                : 'bg-surface-100 text-silver-400 hover:text-white border border-border'
            }`}
          >
            {language === 'ta' ? 'இலக்கண விதிகள் & சூழல்' : 'Context-Sensitive Rewriting'}
          </button>
          <button
            onClick={() => setActiveTab('limitations')}
            className={`px-4 py-2 rounded-lg text-xs font-mono transition-colors ${
              activeTab === 'limitations'
                ? 'bg-white text-black font-semibold'
                : 'bg-surface-100 text-silver-400 hover:text-white border border-border'
            }`}
          >
            {language === 'ta' ? 'வரம்புகள் & ஒத்திவைக்கப்பட்டவை' : 'Limitations & Deferred'}
          </button>
        </div>
      </div>

      {/* Tab 1: Keywords */}
      {activeTab === 'keywords' && (
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-white">
                {language === 'ta' ? 'அங்கீகரிக்கப்பட்ட 40 தமிழ் திறவுச்சொற்கள்' : '40 Supported Tamil Keywords'}
              </h2>
              <p className="text-xs text-silver-400 mt-1">
                {language === 'ta'
                  ? '15 முதன்மைத் திறவுச்சொற்கள் + 25 விரிவாக்கப்பட்ட திறவுச்சொற்கள்.'
                  : '15 core aliases + 25 extended grammatical aliases.'}
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-1.5 text-xs font-mono">
              {['all', 'declaration', 'control', 'loop', 'core', 'async', 'oop', 'error', 'operator', 'module'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setKeywordCategory(cat)}
                  className={`px-2.5 py-1 rounded text-[11px] capitalize transition-colors ${
                    keywordCategory === cat
                      ? 'bg-surface-50 text-white border border-border'
                      : 'text-silver-500 hover:text-silver-300'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-[#0b0c10] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono text-xs">
                <thead className="bg-[#0f1016] border-b border-border/80 text-silver-400">
                  <tr>
                    <th className="py-3 px-4 font-semibold">{language === 'ta' ? 'தமிழ் திறவுச்சொல்' : 'Tamil Keyword'}</th>
                    <th className="py-3 px-4 font-semibold">JavaScript Equivalent</th>
                    <th className="py-3 px-4 font-semibold">{language === 'ta' ? 'வகை' : 'Category'}</th>
                    <th className="py-3 px-4 font-semibold">{language === 'ta' ? 'மாதிரி பயன்பாடு' : 'Example'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40">
                  {filteredKeywords.map((kw, idx) => (
                    <tr key={idx} className="hover:bg-surface-200/40 transition-colors">
                      <td className="py-3 px-4 text-pink-400 font-semibold text-sm">
                        {kw.tamil}
                      </td>
                      <td className="py-3 px-4 text-sky-300 font-semibold">
                        {kw.js}
                      </td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-0.5 rounded text-[10px] bg-surface-100 text-silver-400 border border-border/50 uppercase">
                          {kw.category}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-silver-300 whitespace-nowrap">
                        {kw.example}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Tab 2: Numerals */}
      {activeTab === 'numerals' && (
        <section className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-xl font-bold text-white">
              {language === 'ta' ? 'தமிழ் எண்கள் மற்றும் வரம்புகள்' : 'Tamil Numerals & Inclusive Ranges'}
            </h2>
            <p className="text-sm text-silver-400">
              {language === 'ta'
                ? 'TamilScript-ல் $ குறியீட்டுடன் தமிழ் எண்களைப் ($௦-$௯) பயன்படுத்தி எண்களையும், தசமங்களையும், அணிகளையும் நேரடியாக உருவாக்கலாம்.'
                : 'TamilScript maps $ followed by Tamil digits (௦-௯) to standard IEEE 754 numeric values.'}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {tamilNumeralsTable.map(num => (
              <div key={num.digit} className="p-3 rounded-lg border border-border bg-[#0d0e14] text-center space-y-1">
                <span className="font-mono text-2xl font-bold text-amber-300">${num.digit}</span>
                <span className="block text-xs font-mono text-silver-500">= {num.value}</span>
              </div>
            ))}
          </div>

          <div className="space-y-4 pt-4">
            <h3 className="text-base font-semibold text-white font-mono">
              1. {language === 'ta' ? 'தசம எண்கள் (Decimals)' : 'Decimal Literals'}
            </h3>
            <p className="text-xs text-silver-400">
              {language === 'ta'
                ? '$ குறியீடு, தமிழ் எண்கள், ஒரு புள்ளி (.), பின்னர் தமிழ் எண்கள்:'
                : 'Prefix $, Tamil digits, single ASCII dot (.), then Tamil digits:'}
            </p>
            <CodeBlock
              code={`நிலையான விலை = $௧௨.௫;      // -> 12.5
நிலையான வரி = $௦.௧௮;       // -> 0.18
நிலையான கூட்டு = $௧௨.௫ + $௨.௫; // -> 15`}
              language="tamil"
              filename=""
              showLineNumbers={false}
            />
          </div>

          <div className="space-y-4 pt-4">
            <h3 className="text-base font-semibold text-white font-mono">
              2. {language === 'ta' ? 'உள்ளடக்கிய வரம்புகள் (Inclusive Ranges: $௧..$௫)' : 'Inclusive Ranges ($௧..$௫)'}
            </h3>
            <p className="text-xs text-silver-400">
              {language === 'ta'
                ? 'இரண்டு முனைகளையும் உள்ளடக்கிய வரிசை அணியை (Array) உடனடியாக உருவாக்கும்:'
                : 'Yields an ascending array including both endpoints without referencing global Array constructors:'}
            </p>
            <CodeBlock
              code={`நிலையான ஒன்று_முதல்_ஐந்து = $௧..$௫; // -> [1, 2, 3, 4, 5]
நிலையான பூஜ்ஜியம்_முதல்_இரண்டு = $௦..$௨; // -> [0, 1, 2]

ஒவ்வொரு (const x of $௧..$௩) {
  அச்சிடு(x);
}`}
              language="tamil"
              filename=""
              showLineNumbers={false}
            />
          </div>
        </section>
      )}

      {/* Tab 3: Grammar & Lexical Contexts */}
      {activeTab === 'grammar' && (
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl font-bold text-white">
              {language === 'ta' ? 'சூழல் உணர் இலக்கண விதிகள் (Context-Sensitive)' : 'Context-Sensitive Scanner Rules'}
            </h2>
            <p className="text-sm text-silver-400">
              {language === 'ta'
                ? 'TamilScript என்பது கண்மூடித்தனமான உரை மாற்றி அல்ல; அது இலக்கண ரீதியான இடங்களில் மட்டுமே திறவுச்சொற்களை மாற்றும் உண்மையான ஸ்கேனர் ஆகும்.'
                : 'The transformer uses a stateful lexical scanner. It rewrites aliases only where their equivalent JavaScript keyword is grammatical.'}
            </p>
          </div>

          <div className="space-y-4 text-sm text-silver-300">
            <div className="p-4 rounded-xl border border-border bg-[#0d0e14] space-y-2">
              <h3 className="text-white font-semibold font-mono text-sm">
                1. {language === 'ta' ? 'பண்புப் பெயர்கள் மாற்றப்படாது (Property Names are Safe)' : 'Property Names are Untouched'}
              </h3>
              <p className="text-xs text-silver-400 leading-relaxed">
                {`obj.என்றால் அல்லது { என்றால்: 1 } போன்ற பண்புப் பெயர்களில் தமிழ் சொல் அப்படியே இருக்கும். அது obj.if என தவறாக மாற்றப்படாது.`}
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border bg-[#0d0e14] space-y-2">
              <h3 className="text-white font-semibold font-mono text-sm">
                2. {language === 'ta' ? 'சரங்கள் மற்றும் குறிப்புகள் தொடப்படாது (Strings & Comments)' : 'Strings & Comments are Verbatim'}
              </h3>
              <p className="text-xs text-silver-400 leading-relaxed">
                சரங்களுக்குள் இருக்கும் `"செயல்"` அல்லது குறிப்புகளில் (`// செயல்`) உள்ள வார்த்தைகள் ஒருபோதும் மாற்றப்படாது.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border bg-[#0d0e14] space-y-2">
              <h3 className="text-white font-semibold font-mono text-sm">
                3. {language === 'ta' ? 'இயல்பான சரங்கள் ($ prefix இல்லை)' : 'Ordinary Strings require NO $'}
              </h3>
              <p className="text-xs text-silver-400 leading-relaxed">
                தமிழ் உரையை எழுத `"வணக்கம்"` என்று எழுதினால் போதுமானது. பழைய பதிப்புகளில் இருந்த `$"..."` வடிவம் முற்றிலுமாக நீக்கப்பட்டுள்ளது; பயன்படுத்தினால் தெளிவான வழிகாட்டல் பிழை தோன்றும்.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Tab 4: Limitations & Deferred */}
      {activeTab === 'limitations' && (
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl font-bold text-white">
              {language === 'ta' ? 'ஒத்திவைக்கப்பட்ட சொற்களும் தற்போதைய வரம்புகளும்' : 'Deferred Keywords & Limitations'}
            </h2>
            <p className="text-sm text-silver-400">
              {language === 'ta'
                ? 'தவறான வாக்குறுதிகளைத் தவிர்த்து, உண்மை நிலையை வெளிப்படையாக ஆவணப்படுத்துகிறோம்.'
                : 'Explicit technical documentation of deferred proposals and intentional boundaries.'}
            </p>
          </div>

          <div className="rounded-xl border border-border bg-[#0b0c10] overflow-hidden">
            <table className="w-full text-left font-mono text-xs">
              <thead className="bg-[#0f1016] border-b border-border/80 text-silver-400">
                <tr>
                  <th className="py-3 px-4 font-semibold">{language === 'ta' ? 'முன்மொழியப்பட்ட சொல்' : 'Proposed Word'}</th>
                  <th className="py-3 px-4 font-semibold">Intended Meaning</th>
                  <th className="py-3 px-4 font-semibold">{language === 'ta' ? 'ஒத்திவைக்கப்பட்டதன் காரணம்' : 'Why Deferred'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40">
                {deferredKeywords.map((def, idx) => (
                  <tr key={idx} className="hover:bg-surface-200/40">
                    <td className="py-3 px-4 text-pink-400 font-semibold">{def.tamil}</td>
                    <td className="py-3 px-4 text-sky-300 font-semibold">{def.proposed}</td>
                    <td className="py-3 px-4 font-sans text-silver-400">
                      {def.reason[language] || def.reason.ta}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 rounded-xl border border-amber-900/30 bg-amber-950/20 text-xs text-amber-200/90 space-y-2">
            <div className="flex items-center gap-2 font-mono font-bold text-amber-300">
              <AlertTriangle className="w-4 h-4" />
              <span>{language === 'ta' ? 'முக்கிய வரம்புகள்' : 'Known Current Boundaries'}</span>
            </div>
            <ul className="list-disc list-inside space-y-1">
              <li>BigInt literals are not supported with Tamil digits (`$௧n` is rejected; use `18n`).</li>
              <li>Maximum range size is 100,000 values to prevent allocation bombs.</li>
              <li>TamilScript does not lower JSX; it preserves JSX tokens intact for React/Vite bundlers.</li>
            </ul>
          </div>
        </section>
      )}
    </div>
  );
}
