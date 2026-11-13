import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { SearchDialog } from './components/common/SearchDialog';
import { HomePage } from './pages/Home/HomePage';
import { LearnPage } from './pages/Learn/LearnPage';
import { DocsPage } from './pages/Docs/DocsPage';
import { PackagesPage } from './pages/Packages/PackagesPage';
import { TamilScriptPage } from './pages/TamilScript/TamilScriptPage';
import { ExamplesPage } from './pages/Examples/ExamplesPage';
import { RoadmapPage } from './pages/Roadmap/RoadmapPage';

function AppContent() {
  const [activePage, setActivePage] = useState('home');
  const [targetId, setTargetId] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);

  // Global Ctrl+K / Cmd+K search shortcut
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavigate = (page, id = null) => {
    setActivePage(page);
    setTargetId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#07080a] text-[#f3f4f6]">
      {/* Navbar */}
      <Navbar
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenSearch={() => setSearchOpen(true)}
      />

      {/* Main Page Content */}
      <div className="flex-1">
        {activePage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {activePage === 'learn' && (
          <LearnPage initialTutorialId={targetId} onNavigate={handleNavigate} />
        )}
        {activePage === 'docs' && (
          <DocsPage initialDocId={targetId} onNavigate={handleNavigate} />
        )}
        {activePage === 'packages' && (
          <PackagesPage initialPackageId={targetId} onNavigate={handleNavigate} />
        )}
        {activePage === 'tamilscript' && (
          <TamilScriptPage onNavigate={handleNavigate} />
        )}
        {activePage === 'examples' && (
          <ExamplesPage onNavigate={handleNavigate} />
        )}
        {activePage === 'roadmap' && (
          <RoadmapPage onNavigate={handleNavigate} />
        )}
      </div>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Global Search Dialog */}
      <SearchDialog
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onNavigate={handleNavigate}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
