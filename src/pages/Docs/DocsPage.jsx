import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { docsCategories, docsContent } from '../../content/docsData';
import { DocumentationSidebar } from '../../components/documentation/DocumentationSidebar';
import { TableOfContents } from '../../components/documentation/TableOfContents';
import { DocPager } from '../../components/documentation/DocPager';
import { Breadcrumb } from '../../components/navigation/Breadcrumb';
import { CodeBlock } from '../../components/code/CodeBlock';
import { Menu, X } from 'lucide-react';

export function DocsPage({ initialDocId, onNavigate }) {
  const { language, t } = useLanguage();
  const [activeDocId, setActiveDocId] = useState(initialDocId || 'what-is-akazhi');
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  useEffect(() => {
    if (initialDocId) {
      setActiveDocId(initialDocId);
    }
  }, [initialDocId]);

  // Flatten items to compute prev/next
  const allDocItems = docsCategories.flatMap(cat => cat.items);
  const currentIndex = allDocItems.findIndex(item => item.id === activeDocId);
  const currentDocMeta = allDocItems[currentIndex] || allDocItems[0];
  const prevDoc = currentIndex > 0 ? allDocItems[currentIndex - 1] : null;
  const nextDoc = currentIndex < allDocItems.length - 1 ? allDocItems[currentIndex + 1] : null;

  const doc = docsContent[activeDocId] || docsContent['what-is-akazhi'];

  const handleSelectDoc = (id) => {
    setActiveDocId(id);
    setMobileSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Mobile Sidebar Toggle */}
      <div className="lg:hidden mb-4 flex items-center justify-between pb-3 border-b border-border/60">
        <button
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-border bg-surface-100 text-xs font-mono text-silver-200"
        >
          {mobileSidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          <span>{language === 'ta' ? 'ஆவண பொருளடக்கம்' : 'Documentation Menu'}</span>
        </button>
        <span className="text-xs font-mono text-silver-400">
          {currentDocMeta.title[language] || currentDocMeta.title.ta}
        </span>
      </div>

      <Breadcrumb
        items={[
          { label: t('nav_docs', 'Documentation'), action: () => handleSelectDoc('what-is-akazhi') },
          { label: currentDocMeta.title[language] || currentDocMeta.title.ta }
        ]}
        onNavigate={onNavigate}
      />

      <div className="flex gap-10 items-start">
        {/* Left Sidebar (Desktop) */}
        <DocumentationSidebar
          categories={docsCategories}
          activeDocId={activeDocId}
          onSelectDoc={handleSelectDoc}
          className="hidden lg:block"
        />

        {/* Mobile Drawer Sidebar */}
        {mobileSidebarOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-black/80 backdrop-blur-sm p-4 flex flex-col justify-start">
            <div className="flex justify-between items-center mb-4 pb-2 border-b border-border">
              <span className="text-sm font-mono font-bold text-white">ஆவணங்கள் (Docs)</span>
              <button
                onClick={() => setMobileSidebarOpen(false)}
                className="p-1 text-silver-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="overflow-y-auto max-h-[80vh]">
              <DocumentationSidebar
                categories={docsCategories}
                activeDocId={activeDocId}
                onSelectDoc={handleSelectDoc}
              />
            </div>
          </div>
        )}

        {/* Main Documentation Body */}
        <main className="flex-1 min-w-0 max-w-3xl space-y-10">
          {/* Header */}
          <div className="space-y-3 pb-6 border-b border-border/60">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              {doc.title[language] || doc.title.ta}
            </h1>
            <p className="text-sm sm:text-base text-silver-400 leading-relaxed">
              {doc.description[language] || doc.description.ta}
            </p>
          </div>

          {/* Render Sections */}
          {doc.sections && doc.sections.map((sec, secIdx) => (
            <section key={secIdx} id={`sec-${secIdx}`} className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl font-semibold text-white tracking-tight flex items-center gap-2">
                <span className="text-silver-500 font-mono text-sm">#</span>
                <span>{sec.heading[language] || sec.heading.ta}</span>
              </h2>

              {sec.content && (
                <p className="text-sm text-silver-300 leading-relaxed font-sans">
                  {sec.content[language] || sec.content.ta}
                </p>
              )}

              {sec.bullets && (
                <ul className="space-y-2 text-sm text-silver-300">
                  {sec.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-silver-500 mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">
                        {b[language] || b.ta}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              {sec.code && (
                <CodeBlock
                  code={sec.code}
                  language={sec.language || 'tamil'}
                  filename=""
                  showLineNumbers={true}
                />
              )}
            </section>
          ))}

          {/* Prev / Next Document Navigation */}
          <DocPager
            prevDoc={prevDoc}
            nextDoc={nextDoc}
            onSelectDoc={handleSelectDoc}
          />
        </main>

        {/* Right Table of Contents (On this page) */}
        <TableOfContents sections={doc.sections} />
      </div>
    </div>
  );
}
