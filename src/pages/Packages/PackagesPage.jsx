import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { packages } from '../../content/packagesData';
import { CodeBlock } from '../../components/code/CodeBlock';
import { Badge } from '../../components/common/Badge';
import { Breadcrumb } from '../../components/navigation/Breadcrumb';
import { Package, Terminal, Layers, CheckCircle2, ChevronRight, ArrowLeft } from 'lucide-react';

export function PackagesPage({ initialPackageId, onNavigate }) {
  const { language, t } = useLanguage();
  const [selectedPkgId, setSelectedPkgId] = useState(initialPackageId || 'node');

  useEffect(() => {
    if (initialPackageId) {
      setSelectedPkgId(initialPackageId);
    }
  }, [initialPackageId]);

  const selectedPkg = packages.find(p => p.id === selectedPkgId) || packages[0];
  const mainPackages = packages.filter(p => p.type === 'main');
  const supportingPackages = packages.filter(p => p.type === 'supporting');

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <Breadcrumb
        items={[
          { label: t('nav_packages', 'Packages'), action: () => setSelectedPkgId('node') },
          { label: selectedPkg.name }
        ]}
        onNavigate={onNavigate}
      />

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Package Selector Sidebar */}
        <aside className="w-full lg:w-72 flex-shrink-0 lg:sticky lg:top-20 lg:h-[calc(100vh-6rem)] lg:overflow-y-auto pb-8 space-y-6">
          {/* Main Packages */}
          <div className="p-4 rounded-xl border border-border bg-[#0d0e14] space-y-3">
            <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-white">
              {language === 'ta' ? 'முதன்மை தொகுப்புகள்' : 'Main Packages'}
            </h2>
            <div className="space-y-1">
              {mainPackages.map((pkg) => {
                const isActive = pkg.id === selectedPkg.id;
                return (
                  <button
                    key={pkg.id}
                    onClick={() => setSelectedPkgId(pkg.id)}
                    className={`w-full flex items-center justify-between p-2.5 rounded-lg text-left text-xs font-mono transition-colors ${
                      isActive
                        ? 'bg-surface-100 text-white border border-border font-semibold'
                        : 'text-silver-400 hover:text-silver-200 hover:bg-surface-200/50'
                    }`}
                  >
                    <span className="truncate">{pkg.name}</span>
                    {isActive && <ChevronRight className="w-3.5 h-3.5 text-white flex-shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Supporting Packages */}
          <div className="p-4 rounded-xl border border-border bg-[#0d0e14] space-y-3">
            <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-silver-400">
              {language === 'ta' ? 'துணைத் தொகுப்புகள்' : 'Supporting Packages'}
            </h2>
            <div className="space-y-1">
              {supportingPackages.map((pkg) => {
                const isActive = pkg.id === selectedPkg.id;
                return (
                  <button
                    key={pkg.id}
                    onClick={() => setSelectedPkgId(pkg.id)}
                    className={`w-full flex items-center justify-between p-2.5 rounded-lg text-left text-xs font-mono transition-colors ${
                      isActive
                        ? 'bg-surface-100 text-white border border-border font-semibold'
                        : 'text-silver-400 hover:text-silver-200 hover:bg-surface-200/50'
                    }`}
                  >
                    <span className="truncate">{pkg.name}</span>
                    {isActive && <ChevronRight className="w-3.5 h-3.5 text-white flex-shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        {/* Right Package Detail Main Content */}
        <main className="flex-1 min-w-0 max-w-4xl space-y-8">
          {/* Header */}
          <div className="space-y-4 pb-6 border-b border-border/60">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant={selectedPkg.type === 'main' ? 'silver' : 'outline'} size="sm">
                {selectedPkg.type === 'main' ? t('verified_package', 'Main Package') : t('supporting_package', 'Supporting Package')}
              </Badge>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-surface-100 border border-border text-silver-300">
                v{selectedPkg.version}
              </span>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5 rounded">
                {selectedPkg.status === 'published' ? t('status_published', 'Published (v0.1.0)') : t('status_repo_active', 'Active Monorepo')}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-mono font-bold tracking-tight text-white">
              {selectedPkg.name}
            </h1>

            <p className="text-base text-silver-300 leading-relaxed font-sans">
              {selectedPkg.summary[language] || selectedPkg.summary.ta}
            </p>
          </div>

          {/* Installation */}
          <section className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-silver-400 font-semibold">
              {language === 'ta' ? 'நிறுவுதல்' : 'Installation'}
            </h2>
            <CodeBlock
              code={selectedPkg.install}
              language="bash"
              filename=""
              showLineNumbers={false}
            />
          </section>

          {/* Purpose & Scope */}
          <section className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-silver-400 font-semibold">
              {language === 'ta' ? 'நோக்கமும் கடமைகளும்' : 'Purpose & Responsibilities'}
            </h2>
            <div className="p-4 rounded-xl border border-border bg-[#0d0e14] text-sm text-silver-300 leading-relaxed mb-4">
              {selectedPkg.purpose[language] || selectedPkg.purpose.ta}
            </div>

            <ul className="space-y-2 text-sm text-silver-300">
              {selectedPkg.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                  <span className="leading-relaxed">{resp[language] || resp.ta}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Public API Reference */}
          {selectedPkg.publicApi && selectedPkg.publicApi.length > 0 && (
            <section className="space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-wider text-silver-400 font-semibold">
                {language === 'ta' ? 'பொது API இடைமுகங்கள்' : 'Public API Reference'}
              </h2>
              <div className="rounded-xl border border-border bg-[#0c0d12] divide-y divide-border/60 overflow-hidden font-mono text-xs">
                {selectedPkg.publicApi.map((api, idx) => (
                  <div key={idx} className="p-4 space-y-1 hover:bg-surface-100/40 transition-colors">
                    <span className="text-pink-300 font-semibold">{api.name}</span>
                    <p className="font-sans text-xs text-silver-400 leading-relaxed">
                      {api.desc[language] || api.desc.ta}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Usage Example */}
          <section className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-silver-400 font-semibold">
              {language === 'ta' ? 'பயன்பாட்டு எடுத்துக்காட்டு' : 'Usage Example'}
            </h2>
            <CodeBlock
              code={selectedPkg.usageExample}
              language={selectedPkg.isApplicationImport ? 'tamil' : 'js'}
              filename={selectedPkg.isApplicationImport ? 'app.tamil' : 'example.js'}
              showLineNumbers={true}
            />
          </section>

          {/* Dependencies */}
          <section className="space-y-3 pt-2">
            <h2 className="text-xs font-mono uppercase tracking-wider text-silver-400 font-semibold">
              {language === 'ta' ? 'சார்ந்திருக்கும் தொகுப்புகள்' : 'Dependencies'}
            </h2>
            <div className="flex flex-wrap gap-2">
              {selectedPkg.dependencies.map((dep, idx) => (
                <span
                  key={idx}
                  className="font-mono text-xs px-2.5 py-1 rounded bg-surface-100 border border-border text-silver-300"
                >
                  {dep}
                </span>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
