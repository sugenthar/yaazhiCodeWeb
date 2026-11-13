import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Card } from '../../components/common/Card';
import { Globe2, Cpu, Sparkles, ShieldCheck, Zap, Code } from 'lucide-react';

export function WhySection() {
  const { language } = useLanguage();

  const points = [
    {
      icon: <Globe2 className="w-5 h-5 text-silver-300" />,
      title: {
        ta: 'மொழித் தடையை உடைத்தல்',
        en: 'Breaking the Language Barrier',
      },
      desc: {
        ta: 'நிரலாக்கம் என்பது தூய தர்க்க சிந்தனையே. ஆங்கிலப் புலமை இல்லாத காரணத்தால் எந்தவொரு தமிழ் மாணவரின் அறிவாற்றலும் வீணாகிவிடக் கூடாது.',
        en: 'Programming is fundamentally about logical problem-solving. No aspiring developer should be held back by mandatory English fluency.',
      },
    },
    {
      icon: <Cpu className="w-5 h-5 text-silver-300" />,
      title: {
        ta: 'உண்மையான Node.js இயங்குதளம்',
        en: 'Real Node.js Backend Engine',
      },
      desc: {
        ta: 'AKAZHI ஒரு கற்பனை மொழி அல்ல; உட்புறமாக நம்பகமான Node.js மற்றும் ES Modules கொண்டு உயர் செயல்திறன் சேவையகங்களை உருவாக்குகிறது.',
        en: 'AKAZHI is not a mock environment; it compiles to pure ECMAScript and runs natively on the robust Node.js runtime.',
      },
    },
    {
      icon: <Code className="w-5 h-5 text-silver-300" />,
      title: {
        ta: 'நேரடி தமிழ் தொடரியல் & எண்கள்',
        en: 'Native Tamil Syntax & Numerals',
      },
      desc: {
        ta: 'மாறிகள், செயல்பாடுகள், மற்றும் நிபந்தனைகளுடன் $௦-$௯ தமிழ் எண்கள், $௧௨.௫ தசமங்கள், மற்றும் $௧..$௫ வரம்புகள் இயல்பாக ஆதரிக்கப்படுகின்றன.',
        en: 'Write natural Tamil keywords alongside Tamil integers ($௦-$௯), decimals ($௧௨.௫), and range expressions ($௧..$௫).',
      },
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-silver-300" />,
      title: {
        ta: 'தெளிவான தமிழ் பிழை வழிகாட்டல்',
        en: 'Tamil Diagnostics & Explanations',
      },
      desc: {
        ta: 'புரியாத ஆங்கிலப் பிழைச் செய்திகளுக்குப் பதிலாக, எங்கு பிழை நிகழ்ந்தது மற்றும் எவ்வாறு திருத்துவது என்ற தெளிவான தமிழ் வழிகாட்டல்கள்.',
        en: 'Actionable Tamil diagnostic messages pinpointing source lines with clear explanations and remediation hints.',
      },
    },
    {
      icon: <Zap className="w-5 h-5 text-silver-300" />,
      title: {
        ta: 'AST-பாதுகாப்பான வடிவமைப்பாளர்',
        en: 'AST-Safe Code Formatter',
      },
      desc: {
        ta: '@akazhi/formatter தொகுப்பு உங்கள் தமிழ் மூலக் குறியீட்டை எவ்வித சிதைவுமின்றி பாதுகாப்பாக வடிவமைத்து அழகுபடுத்துகிறது.',
        en: 'The @akazhi/formatter validates AST identity before writing, guaranteeing safe indentation and formatting.',
      },
    },
    {
      icon: <Sparkles className="w-5 h-5 text-silver-300" />,
      title: {
        ta: 'ஆஃப்லைன் உலாவி பணியிடம்',
        en: 'Offline Browser Workspace',
      },
      desc: {
        ta: '@akazhi/console உங்கள் உலாவியிலேயே ஒரு முழுமையான முனையத்தையும், செயலாக்கக் கட்டுப்பாட்டையும் ஆஃப்லைனாக வழங்குகிறது.',
        en: 'The @akazhi/console runs on localhost, giving developers an interactive browser-based terminal with zero internet needed.',
      },
    },
  ];

  return (
    <section className="py-20 border-b border-border/60 bg-[#08090d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-silver-400">
            {language === 'ta' ? 'ஏன் AKAZHI?' : 'Why AKAZHI?'}
          </h2>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {language === 'ta'
              ? 'உங்கள் சொந்த சிந்தனை மொழியில் மென்பொருள் உருவாக்கம்'
              : 'Engineered for Native Language Software Development'}
          </p>
          <p className="text-sm text-silver-400">
            {language === 'ta'
              ? 'மொழி என்பது அறிவை வெளிப்படுத்தும் கருவியே தவிர அறிவின் எல்லையாக இருக்கக் கூடாது.'
              : 'Language should be a vehicle for technological empowerment, not a prerequisite barrier.'}
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((pt, idx) => (
            <Card key={idx} className="space-y-3 bg-[#0d0e14] border-border/70 hover:border-silver-500/40">
              <div className="w-9 h-9 rounded-lg bg-surface-100 border border-border/60 flex items-center justify-center">
                {pt.icon}
              </div>
              <h3 className="text-base font-semibold text-silver-100">
                {pt.title[language] || pt.title.ta}
              </h3>
              <p className="text-xs text-silver-400 leading-relaxed">
                {pt.desc[language] || pt.desc.ta}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
