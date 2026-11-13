import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, BookOpen, Package, Code2, Compass, Layers } from 'lucide-react';
import { searchContent } from '../../utils/searchIndex';
import { useLanguage } from '../../context/LanguageContext';

export function SearchDialog({ isOpen, onClose, onNavigate }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const { language, t } = useLanguage();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setResults([]);
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const res = searchContent(query, language);
    setResults(res);
    setSelectedIndex(0);
  }, [query, language]);

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev < results.length - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (results[selectedIndex]) {
        handleSelect(results[selectedIndex]);
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  const handleSelect = (item) => {
    onNavigate(item.targetPage, item.targetId);
    onClose();
  };

  if (!isOpen) return null;

  const getTypeIcon = (type) => {
    switch (type) {
      case 'docs': return <BookOpen className="w-4 h-4 text-sky-400" />;
      case 'learn': return <Compass className="w-4 h-4 text-emerald-400" />;
      case 'packages': return <Package className="w-4 h-4 text-amber-400" />;
      case 'tamilscript': return <Code2 className="w-4 h-4 text-pink-400" />;
      case 'examples': return <Layers className="w-4 h-4 text-purple-400" />;
      default: return <Search className="w-4 h-4 text-silver-400" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-2xl rounded-xl border border-border bg-[#0f1016] shadow-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-border/80 bg-surface-100">
          <Search className="w-5 h-5 text-silver-400 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={t('search_placeholder', 'Search documentation, syntax, packages...')}
            className="w-full bg-transparent text-silver-100 placeholder-silver-500 text-sm focus:outline-none font-sans"
          />
          {query ? (
            <button
              onClick={() => setQuery('')}
              className="text-silver-500 hover:text-silver-300 p-1 rounded"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <kbd className="hidden sm:inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono text-silver-400 bg-surface-200 border border-border rounded">
              ESC
            </kbd>
          )}
        </div>

        {/* Results List */}
        <div className="max-h-[380px] overflow-y-auto p-2">
          {query && results.length === 0 ? (
            <div className="py-12 text-center text-silver-500 text-sm">
              {t('search_no_results', 'No matching results found')}
            </div>
          ) : (
            <div className="space-y-1">
              {results.map((item, index) => {
                const isSelected = index === selectedIndex;
                return (
                  <div
                    key={item.id}
                    onClick={() => handleSelect(item)}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                      isSelected
                        ? 'bg-surface-50 border border-border-hover'
                        : 'hover:bg-surface-200/50 border border-transparent'
                    }`}
                  >
                    <div className="mt-0.5 p-1.5 rounded-md bg-surface-200 border border-border/40 flex-shrink-0">
                      {getTypeIcon(item.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs uppercase tracking-wider font-mono text-silver-500">
                          {item.typeLabel[language] || item.typeLabel.ta}
                        </span>
                        <h4 className="text-sm font-medium text-silver-100 truncate">
                          {item.title[language] || item.title.ta}
                        </h4>
                      </div>
                      <p className="text-xs text-silver-400 truncate mt-0.5">
                        {item.description[language] || item.description.ta}
                      </p>
                    </div>
                    {isSelected && (
                      <ArrowRight className="w-4 h-4 text-silver-400 flex-shrink-0 self-center" />
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="flex items-center justify-between px-4 py-2.5 border-t border-border/60 bg-surface-200/50 text-[11px] font-mono text-silver-500">
          <div className="flex items-center gap-3">
            <span>↑↓ தேர்வு செய் (Navigate)</span>
            <span>↵ திற (Open)</span>
          </div>
          <span>ESC வெளியேறு</span>
        </div>
      </div>
    </div>
  );
}
