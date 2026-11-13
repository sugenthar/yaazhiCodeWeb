import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Badge } from '../../components/common/Badge';
import { Server, Database, Globe, Smartphone, Monitor, Gamepad2, Brain, CheckCircle2, Clock } from 'lucide-react';

export function CapabilitiesSection() {
  const { language } = useLanguage();

  const currentCapabilities = [
    {
      icon: <Server className="w-5 h-5 text-emerald-400" />,
      title: { ta: 'உயர் செயல்திறன் வலைச்சேவையகங்கள்', en: 'High-Performance HTTP Servers' },
      desc: {
        ta: 'Node.js உள்ளமைவு கொண்டு மைக்ரோசெகண்டுகளில் இயங்கும் வேகமான HTTP/1.1 சேவையகங்கள்.',
        en: 'Blazing-fast HTTP/1.1 microservices powered directly by Node.js event loops.'
      }
    },
    {
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      title: { ta: 'REST API & நுண் சேவைகள்', en: 'RESTful APIs & Microservices' },
      desc: {
        ta: 'JSON கோரிக்கைகளை வாசித்தல், வழி அளவுருக்கள் (:id), மற்றும் நிலை குறியீடுகள் மேலாண்மை.',
        en: 'Dynamic parameterized routing, async JSON payloads, and clean HTTP status responses.'
      }
    },
    {
      icon: <Globe className="w-5 h-5 text-emerald-400" />,
      title: { ta: 'நிலைக்கோப்புகள் & வலைத்தளங்கள்', en: 'Static Files & Web Hosting' },
      desc: {
        ta: 'பாதுகாப்பான அடைவு கண்காணிப்புடன் HTML, CSS, JS கோப்புகளை உலாவிகளுக்கு வழங்குதல்.',
        en: 'Path-traversal safe static asset delivery with caching headers.'
      }
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-400" />,
      title: { ta: 'கட்டளை வரி கருவிகள் (CLI Utilities)', en: 'Developer CLI Utilities' },
      desc: {
        ta: 'ஆவண சரிபார்ப்பு, தானியங்கி தொகுப்பு, AST வடிவமைப்பு, மற்றும் கணினி நலன் சோதனைகள்.',
        en: 'Project diagnostics, AST-safe source formatting, and automated builds.'
      }
    }
  ];

  const futureCapabilities = [
    {
      icon: <Monitor className="w-5 h-5 text-silver-400" />,
      title: { ta: 'கணினி பயன்பாடுகள் (Desktop)', en: 'Desktop Applications' },
      desc: {
        ta: 'Windows, macOS, மற்றும் Linux இயங்குதளங்களுக்கான கணினி மென்பொருட்கள்.',
        en: 'Cross-platform native desktop GUI applications authored directly in Tamil.'
      }
    },
    {
      icon: <Smartphone className="w-5 h-5 text-silver-400" />,
      title: { ta: 'கைபேசி செயலிகள் (Mobile)', en: 'Mobile Applications' },
      desc: {
        ta: 'Android மற்றும் iOS இயங்குதளங்களுக்கான கைபேசி பயன்பாடுகள்.',
        en: 'Native mobile application runtimes for Android and iOS.'
      }
    },
    {
      icon: <Gamepad2 className="w-5 h-5 text-silver-400" />,
      title: { ta: 'விளையாட்டு உருவாக்கம் (Games)', en: 'Game Development' },
      desc: {
        ta: '2D/3D விளையாட்டு என்ஜின்களுக்கான தமிழ் இயக்க மாதிரிகள்.',
        en: 'Gaming logic and game loops driven natively by TamilScript.'
      }
    },
    {
      icon: <Brain className="w-5 h-5 text-silver-400" />,
      title: { ta: 'செயற்கை நுண்ணறிவு (AI Apps)', en: 'AI & Inference Utilities' },
      desc: {
        ta: 'LLM மற்றும் மொழி மாதிரிகளுடன் தமிழிலேயே உரையாடி முடிவுகளைப் பெறும் வசதிகள்.',
        en: 'Direct Tamil-native inference adapters for large language models.'
      }
    }
  ];

  return (
    <section className="py-20 border-b border-border/60 bg-[#07080a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-silver-400">
            {language === 'ta' ? 'நீங்கள் என்ன உருவாக்கலாம்?' : 'What Can You Build?'}
          </h2>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {language === 'ta'
              ? 'இன்று நீங்கள் உருவாக்கக்கூடியவையும் எதிர்கால இலக்குகளும்'
              : 'Implemented Today & Future Horizons'}
          </p>
          <p className="text-sm text-silver-400">
            {language === 'ta'
              ? 'செயல்படுத்தப்பட்ட வசதிகளும், எதிர்கால தொலைநோக்கு திட்டங்களும் தெளிவாக பிரிக்கப்பட்டுள்ளன.'
              : 'Implemented capabilities and future ambitions are clearly distinguished.'}
          </p>
        </div>

        {/* Implemented Today */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <Badge variant="emerald" size="sm">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{language === 'ta' ? 'இன்று நீங்கள் உருவாக்கலாம் (v0.1.0)' : 'Available Today (v0.1.0)'}</span>
            </Badge>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {currentCapabilities.map((cap, idx) => (
              <div key={idx} className="rounded-xl border border-emerald-900/30 bg-[#0c0e12] p-5 space-y-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-950/50 border border-emerald-800/40 flex items-center justify-center">
                  {cap.icon}
                </div>
                <h3 className="text-sm font-semibold text-white">
                  {cap.title[language] || cap.title.ta}
                </h3>
                <p className="text-xs text-silver-400 leading-relaxed">
                  {cap.desc[language] || cap.desc.ta}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Future Vision */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Badge variant="outline" size="sm">
              <Clock className="w-3.5 h-3.5 text-silver-400" />
              <span>{language === 'ta' ? 'எதிர்கால தொலைநோக்கு (Future Vision)' : 'Future Vision (Roadmap)'}</span>
            </Badge>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 opacity-80 hover:opacity-100 transition-opacity">
            {futureCapabilities.map((cap, idx) => (
              <div key={idx} className="rounded-xl border border-border/60 bg-[#0a0b0e] p-5 space-y-3">
                <div className="w-9 h-9 rounded-lg bg-surface-100 border border-border/40 flex items-center justify-center">
                  {cap.icon}
                </div>
                <h3 className="text-sm font-semibold text-silver-200">
                  {cap.title[language] || cap.title.ta}
                </h3>
                <p className="text-xs text-silver-500 leading-relaxed">
                  {cap.desc[language] || cap.desc.ta}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
