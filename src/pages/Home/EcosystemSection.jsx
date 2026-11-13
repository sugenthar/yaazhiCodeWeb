import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';
import { packages } from '../../content/packagesData';
import { ArrowUpRight, Package } from 'lucide-react';

export function EcosystemSection({ onNavigate }) {
  const { language } = useLanguage();

  return (
    <section className="py-20 border-b border-border/60 bg-[#07080a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-silver-400">
            {language === 'ta' ? 'சுற்றுச்சூழல் தொகுப்புகள்' : 'Verified Package Ecosystem'}
          </h2>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {language === 'ta'
              ? 'அங்கீகரிக்கப்பட்ட AKAZHI தொகுப்புகள்'
              : 'Official AKAZHI Packages'}
          </p>
          <p className="text-sm text-silver-400">
            {language === 'ta'
              ? 'உண்மையில் உருவாக்கப்பட்ட மற்றும் சரிபார்க்கப்பட்ட தொகுப்புகள் மட்டுமே ஆவணப்படுத்தப்பட்டுள்ளன.'
              : 'Only verified and implemented packages are documented in this ecosystem.'}
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {packages.map((pkg) => {
            const isMain = pkg.type === 'main';
            return (
              <Card
                key={pkg.id}
                onClick={() => onNavigate('packages', pkg.id)}
                className="flex flex-col justify-between space-y-4 bg-[#0c0d12] border-border/70 hover:border-silver-400/50"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant={isMain ? 'silver' : 'outline'} size="xs">
                      {isMain ? 'Main' : 'Supporting'}
                    </Badge>
                    <span className="font-mono text-[11px] text-silver-500">
                      v{pkg.version}
                    </span>
                  </div>

                  <h3 className="font-mono text-sm font-semibold text-white tracking-wide">
                    {pkg.name}
                  </h3>

                  <p className="text-xs text-silver-400 leading-relaxed line-clamp-3">
                    {pkg.summary[language] || pkg.summary.ta}
                  </p>
                </div>

                <div className="pt-2 border-t border-border/40 flex items-center justify-between text-xs text-silver-400 font-mono">
                  <span>{pkg.status === 'published' ? 'NPM Live' : 'Workspace'}</span>
                  <div className="flex items-center gap-1 text-white group-hover:translate-x-0.5 transition-transform">
                    <span>{language === 'ta' ? 'ஆவணம்' : 'Details'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
