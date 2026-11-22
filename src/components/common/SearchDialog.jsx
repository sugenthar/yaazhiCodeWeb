import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, BookOpen, Terminal, Route, FileText, Code2, Braces } from 'lucide-react';
import { searchContent } from '../../utils/searchIndex';
import { useLanguage } from '../../context/LanguageContext';
import { pick } from '../../context/LanguageContext';

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
    setResults(searchContent(query, language));
    setSelectedIndex(0);
  }, [query, language]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev < results.length - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : 0));
    } else if (e.key === 'Enter' && results[selectedIndex]) {
      e.preventDefault();
      handleSelect(results[selectedIndex]);
    }
  };

  const handleSelect = (item) => {
    onNavigate(item.targetPage, item.targetId);
    onClose();
  };

  if (!isOpen) return null;

  const typeIcon = (type) => {
    const cls = 'h-4 w-4';
    switch (type) {
      case 'lesson': return <BookOpen className={`${cls} text-accent`} />;
      case 'language': return <Braces className={`${cls} text-accent`} />;
      case 'example': return <Code2 className={`${cls} text-positive`} />;
      case 'cli': return <Terminal className={`${cls} text-caution`} />;
      case 'future': return <Route className={`${cls} text-muted`} />;
      case 'page': return <FileText className={`${cls} text-muted`} />;
      default: return <Search className={`${cls} text-faint`} />;
    }
  };

  return (
    <div
      className="animate-fade-in fixed inset-0 z-50 flex items-start justify-center bg-app/85 px-3 pt-8 backdrop-blur-sm sm:px-4 sm:pt-20"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="w-full max-w-2xl overflow-hidden rounded-xl border border-line bg-panel shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={t('nav_search', 'Search')}
      >
        <div className="flex items-center gap-3 border-b border-line bg-raised px-4 py-3.5">
          <Search className="h-5 w-5 shrink-0 text-faint" aria-hidden="true" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={t('search_placeholder', 'Search docs, examples, commands...')}
            className="w-full bg-transparent text-sm text-ink placeholder:text-faint focus:outline-none"
            aria-label={t('search_placeholder', 'Search')}
          />
          {query ? (
            <button type="button" onClick={() => setQuery('')} className="rounded p-1 text-faint hover:text-ink" aria-label="Clear search">
              <X className="h-4 w-4" />
            </button>
          ) : (
            <kbd className="hidden rounded border border-line bg-panel px-1.5 py-0.5 font-mono text-xs text-faint sm:inline-flex">ESC</kbd>
          )}
        </div>

        <div className="max-h-[60vh] sm:max-h-[380px] overflow-y-auto p-2">
          {query && results.length === 0 ? (
            <div className="py-12 text-center text-sm text-faint">{t('search_no_results', 'No matching results found')}</div>
          ) : (
            <div className="space-y-1" role="listbox">
              {results.map((item, index) => {
                const isSelected = index === selectedIndex;
                return (
                  <div
                    key={item.id}
                    onClick={() => handleSelect(item)}
                    onMouseEnter={() => setSelectedIndex(index)}
                    role="option"
                    aria-selected={isSelected}
                    className={`flex cursor-pointer items-start gap-3 rounded-lg border p-3 transition-colors ${
                      isSelected ? 'border-accent/40 bg-accent-soft' : 'border-transparent hover:bg-raised'
                    }`}
                  >
                    <div className="mt-0.5 rounded-md border border-line bg-app p-1.5">{typeIcon(item.type)}</div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="rounded bg-raised px-1.5 py-0.5 font-mono text-xs uppercase tracking-wide text-faint">
                          {pick(item.typeLabel, language)}
                        </span>
                        <span className="truncate text-sm font-medium text-ink">{pick(item.title, language)}</span>
                      </div>
                      <p className="mt-0.5 truncate text-xs text-muted">{pick(item.description, language)}</p>
                    </div>
                    {isSelected && <ArrowRight className="h-4 w-4 shrink-0 self-center text-faint" aria-hidden="true" />}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="flex items-center justify-between border-t border-line bg-raised px-4 py-2.5 font-mono text-xs text-faint">
          <div className="flex items-center gap-3">
            <span>↑↓ {t('search_navigate', 'Navigate')}</span>
            <span>↵ {t('search_open', 'Open')}</span>
          </div>
          <span>ESC {t('search_esc', 'Exit')}</span>
        </div>
      </div>
    </div>
  );
}
