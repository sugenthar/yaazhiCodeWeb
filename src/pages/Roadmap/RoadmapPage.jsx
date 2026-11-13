import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { roadmapPhases } from '../../content/roadmapData';
import { Badge } from '../../components/common/Badge';
import { Breadcrumb } from '../../components/navigation/Breadcrumb';
import { CheckCircle2, Clock, Sparkles, ArrowRight, Compass } from 'lucide-react';

export function RoadmapPage({ onNavigate }) {
  const { language, t } = useLanguage();

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-12">
      <Breadcrumb
        items={[
          { label: t('nav_roadmap', 'Roadmap') }
        ]}
        onNavigate={onNavigate}
      />

      {/* Header */}
      <div className="space-y-4 pb-6 border-b border-border/60">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface-100 text-xs font-mono text-silver-300">
          <Compass className="w-3.5 h-3.5 text-silver-400" />
          <span>Strategic Framework Evolution</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          {language === 'ta'
            ? 'கட்டமைப்பின் வளர்ச்சிச் செயல்திட்டம்'
            : 'Framework Architecture Roadmap'}
        </h1>

        <p className="text-base text-silver-300 max-w-3xl leading-relaxed">
          {language === 'ta'
            ? 'AKAZHI கட்டமைப்பின் இன்றைய உண்மை நிலையும், எதிர்கால விரிவுபடுத்தல்களும் வெளிப்படையாக ஆவணப்படுத்தப்பட்டுள்ளன. தற்போது செயல்படுத்தப்பட்ட திறன்களும், நீண்டகால தொலைநோக்குகளும் இங்கே தெளிவாகப் பிரிக்கப்பட்டுள்ளன.'
            : 'A transparent engineering trajectory distinguishing verified production releases (v0.1.0) from near-term milestones and long-term full-stack aspirations.'}
        </p>
      </div>

      {/* Roadmap Timeline */}
      <div className="space-y-12">
        {roadmapPhases.map((phase) => {
          let badgeVariant = 'outline';
          if (phase.status === 'completed') badgeVariant = 'emerald';
          else if (phase.status === 'active') badgeVariant = 'silver';
          else if (phase.status === 'planned') badgeVariant = 'amber';

          return (
            <div key={phase.id} className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-border/60">
                <div className="space-y-1">
                  <div className="flex items-center gap-2.5">
                    <Badge variant={badgeVariant} size="sm">
                      {phase.badge[language] || phase.badge.ta}
                    </Badge>
                    <h2 className="text-xl sm:text-2xl font-bold text-white">
                      {phase.title[language] || phase.title.ta}
                    </h2>
                  </div>
                  <p className="text-xs text-silver-400">
                    {phase.description[language] || phase.description.ta}
                  </p>
                </div>
              </div>

              {/* Items Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {phase.items.map((item, idx) => (
                  <div
                    key={idx}
                    className={`rounded-xl border p-5 space-y-3 ${
                      phase.status === 'completed'
                        ? 'border-emerald-900/40 bg-[#0c0e12]'
                        : phase.status === 'active'
                        ? 'border-border/80 bg-[#0d0e14]'
                        : 'border-border/50 bg-[#0a0b0e]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-silver-500">
                        0{idx + 1}
                      </span>
                      {phase.status === 'completed' && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      )}
                    </div>

                    <h3 className="text-sm font-semibold text-white">
                      {item.title[language] || item.title.ta}
                    </h3>

                    <p className="text-xs text-silver-400 leading-relaxed font-sans">
                      {item.desc[language] || item.desc.ta}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
