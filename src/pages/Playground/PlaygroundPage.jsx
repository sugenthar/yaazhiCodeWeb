import React, { useState, useEffect, useRef } from 'react';
import { useLanguage, pick } from '../../context/LanguageContext';
import { PageHeader, StatusPill, Eyebrow } from '../../components/common/Ui';
import { Breadcrumb } from '../../components/navigation/Breadcrumb';
import { Badge } from '../../components/common/Badge';
import { CopyButton } from '../../components/common/CopyButton';
import { highlightTamilCode } from '../../components/code/TamilCodeHighlighter';
import {
  Play,
  RotateCcw,
  Share2,
  Copy,
  Check,
  Terminal,
  AlertTriangle,
  Clock,
  Sparkles,
  BookOpen,
  Code2,
} from 'lucide-react';

const L = (en, ta) => ({ en, ta });

const PLAYGROUND_EXAMPLES = [
  {
    id: 'hello',
    title: L('Hello World', 'வணக்கம் உலகம்'),
    description: L('Print greetings and join strings', 'வாழ்த்து அச்சிடுதல் மற்றும் உரை இணைத்தல்'),
    code: `// YaazhiCode முதல் நிரல்
அச்சிடு("வணக்கம், உலகம்!");
நிலையான மொழி = "YaazhiCode";
அச்சிடு("மொழி: " + மொழி);
அச்சிடு("தமிழ்த்தாயே வணக்கம்!");`,
  },
  {
    id: 'variables',
    title: L('Variables & Numerals', 'மாறிகள் மற்றும் எண்கள்'),
    description: L('Tamil numerals ($௦-$௯), mutable variables, arithmetic', 'தமிழ் எண்கள் ($௦-$௯), மாறிகள், கணக்கீடு'),
    code: `// மாறிகள் மற்றும் தமிழ் எண் கணிதம்
நிலையான முதல்_எண் = $௨௫;
நிலையான இரண்டாம்_எண் = $௧௫;

மாறி கூட்டு = முதல்_எண் + இரண்டாம்_எண்;
மாறி பெருக்கல் = முதல்_எண் * இரண்டாம்_எண்;

அச்சிடு("கூட்டு: " + உரையாக்கு(கூட்டு));
அச்சிடு("பெருக்கல்: " + உரையாக்கு(பெருக்கல்));

// தசம எண் உதாரணம்
நிலையான பை = $௩.௧௪;
மாறி ஆரம் = $௧௦;
மாறி பரப்பளவு = பை * ஆரம் * ஆரம்;
அச்சிடு("வட்டத்தின் பரப்பளவு: " + உரையாக்கு(பரப்பளவு));`,
  },
  {
    id: 'conditions',
    title: L('Conditions', 'நிபந்தனைகள்'),
    description: L('Decision making with என்றால் / இல்லையெனில் / இல்லை', 'என்றால் / இல்லையெனில் / இல்லை மூலம் முடிவெடுத்தல்'),
    code: `// நிபந்தனை உதாரணம்
நிலையான மதிப்பெண் = $௭௫;

என்றால் (மதிப்பெண் >= $௮௦) {
  அச்சிடு("சிறப்புத் தேர்ச்சி (Distinction)!");
} இல்லை {
  என்றால் (மதிப்பெண் >= $௪௦) {
    அச்சிடு("தேர்ச்சி (Passed)!");
  } இல்லை {
    அச்சிடு("மறுதேர்வு தேவை (Failed)!");
  }
}

// தேர்ந்தெடு (Switch-case)
தேர்ந்தெடு (மதிப்பெண்) {
  நிலை $௧௦௦:
    அச்சிடு("முழு மதிப்பெண் பெற்ற சாதனை!");
    நிறுத்து;
  இயல்புநிலை:
    அச்சிடு("மதிப்பெண்: " + உரையாக்கு(மதிப்பெண்));
}`,
  },
  {
    id: 'loops',
    title: L('Loops', 'சுழற்சிகள்'),
    description: L('Iteration with ஒவ்வொரு (for) and இருக்கும்வரை (while)', 'ஒவ்வொரு மற்றும் இருக்கும்வரை சுழற்சிகள்'),
    code: `// ஒவ்வொரு (for loop)
அச்சிடு("--- 1 முதல் 5 வரை எண்கள் ---");
ஒவ்வொரு (மாறி எண் = $௧; எண் <= $௫; எண் += $௧) {
  அச்சிடு("எண்: " + உரையாக்கு(எண்));
}

// இருக்கும்வரை (while loop)
அச்சிடு("\\n--- இருக்கும்வரை சுழற்சி ---");
மாற்றி கவுண்டர் = $௩;
இருக்கும்வரை (கவுண்டர் > $௦) {
  அச்சிடு("கவுண்ட்டவுன்: " + உரையாக்கு(கவுண்டர்));
  கவுண்டர் -= $௧;
}
அச்சிடு("தொடங்கியது!");`,
  },
  {
    id: 'functions',
    title: L('Functions', 'செயல்கள்'),
    description: L('Functions with arguments, return values, and recursion', 'செயல், வாதங்கள், கொடு (return), மறுநிகழ்வு'),
    code: `// காரணியாக்கம் (Factorial) செயல்
செயல் காரணியாக்கம்(எண்) {
  என்றால் (எண் <= $௧) {
    கொடு $௧;
  }
  கொடு எண் * காரணியாக்கம்(எண் - $௧);
}

// பிபொனாச்சி (Fibonacci) செயல்
செயல் பிபொனாச்சி(வரிசை) {
  என்றால் (வரிசை <= $௧) {
    கொடு வரிசை;
  }
  கொடு பிபொனாச்சி(வரிசை - $௧) + பிபொனாச்சி(வரிசை - $௨);
}

அச்சிடு("5-ன் காரணியாக்கம்: " + உரையாக்கு(காரணியாக்கம்($௫)));
அச்சிடு("8-வது பிபொனாச்சி எண்: " + உரையாக்கு(பிபொனாச்சி($௮)));`,
  },
  {
    id: 'arrays',
    title: L('Arrays & Collections', 'பட்டியல்கள்'),
    description: L('Array transformation, filtering, and joining', 'பட்டியலில் சேர்த்தல், வரைபடம், வடிகட்டு, இணைத்தல்'),
    code: `// பட்டியல்கள் (Arrays)
மாறி எண்கள் = [$௧, $௨, $௩, $௪, $௫];
சேர்(எண்கள், $௬);

அச்சிடு("அசல் எண்கள்: " + இணை(எண்கள், ", "));

// வரைபடம் (Map) மூலம் இருமடங்காக்குதல்
மாறி இருமடங்கு = வரைபடம்(எண்கள், செயல்(மதிப்பு) {
  கொடு மதிப்பு * $௨;
});
அச்சிடு("இருமடங்கு: " + இணை(இருமடங்கு, ", "));

// வடிகட்டு (Filter) மூலம் 5-க்கு மேற்பட்டவற்றை எடுத்தல்
மாறி பெரியவை = வடிகட்டு(இருமடங்கு, செயல்(மதிப்பு) {
  கொடு மதிப்பு > $௫;
});
அச்சிடு("5-க்கு மேற்பட்டவை: " + இணை(பெரியவை, ", "));`,
  },
  {
    id: 'classes',
    title: L('Classes & Objects', 'வகுப்புகள் மற்றும் பொருள்கள்'),
    description: L('Classes, constructors, methods, and instances', 'வகுப்பு, உருவாக்கு, முறை, புதிய பொருள்'),
    code: `// வகுப்பு (Class) வரையறை
வகுப்பு மாணவர் {
  உருவாக்கு(பெயர், வகுப்பு_எண்) {
    இது.பெயர் = பெயர்;
    இது.வகுப்பு_எண் = வகுப்பு_எண்;
  }

  அறிமுகம்() {
    கொடு "வணக்கம்! என் பெயர் " + இது.பெயர் + ", வகுப்பு: " + உரையாக்கு(இது.வகுப்பு_எண்);
  }

  நிலையியல் பள்ளி() {
    கொடு "தமிழ் கணினி ஆய்வகம்";
  }
}

மாறி மா = புதிய மாணவர்("செந்தில்", $௧௦);
அச்சிடு(மாணவர்.பள்ளி());
அச்சிடு(மா.அறிமுகம்());`,
  },
];

export function PlaygroundPage({ onNavigate }) {
  const { language, t } = useLanguage();
  const [selectedExampleId, setSelectedExampleId] = useState(PLAYGROUND_EXAMPLES[0].id);
  const [code, setCode] = useState(PLAYGROUND_EXAMPLES[0].code);
  const [output, setOutput] = useState('');
  const [error, setError] = useState(null);
  const [diagnostics, setDiagnostics] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const [executionTime, setExecutionTime] = useState(null);
  const [shareCopied, setShareCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('editor'); // 'editor' | 'preview'

  const textareaRef = useRef(null);

  // Load code from URL hash if present
  useEffect(() => {
    try {
      const hash = window.location.hash;
      if (hash && hash.startsWith('#code=')) {
        const encoded = hash.slice(6);
        const decoded = decodeURIComponent(atob(encoded));
        if (decoded) {
          setCode(decoded);
          setSelectedExampleId('custom');
        }
      }
    } catch {
      // Ignore hash decode errors
    }
  }, []);

  const handleSelectExample = (ex) => {
    setSelectedExampleId(ex.id);
    setCode(ex.code);
    setOutput('');
    setError(null);
    setDiagnostics([]);
    setExecutionTime(null);
  };

  const handleReset = () => {
    const ex = PLAYGROUND_EXAMPLES.find(item => item.id === selectedExampleId) || PLAYGROUND_EXAMPLES[0];
    setCode(ex.code);
    setOutput('');
    setError(null);
    setDiagnostics([]);
    setExecutionTime(null);
  };

  const handleShare = () => {
    try {
      const encoded = btoa(encodeURIComponent(code));
      const url = `${window.location.origin}/playground#code=${encoded}`;
      navigator.clipboard.writeText(url);
      setShareCopied(true);
      setTimeout(() => setShareCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const handleRun = async () => {
    if (!code.trim() || isRunning) return;

    setIsRunning(true);
    setError(null);
    setDiagnostics([]);
    setOutput('');

    try {
      const response = await fetch('/api/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, timeout: 5000 }),
      });

      const data = await response.json();

      setExecutionTime(data.executionTimeMs);
      if (data.success) {
        setOutput(data.output || '(வெளியீடு எதுவும் இல்லை / No output)');
        setError(null);
        setDiagnostics([]);
      } else {
        setOutput(data.output || '');
        setError(data.error || 'நிரல் இயக்கத்தில் பிழை ஏற்பட்டது.');
        setDiagnostics(data.diagnostics || []);
      }
    } catch (err) {
      setError(`சேவையகத்தை தொடர்பு கொள்ள முடியவில்லை: ${err.message}`);
    } finally {
      setIsRunning(false);
    }
  };

  // Keyboard shortcut: Ctrl+Enter or Cmd+Enter to run
  const handleKeyDown = (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault();
      handleRun();
    }
  };

  // Support Tab key in code editor
  const handleTextareaKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const target = e.target;
      const start = target.selectionStart;
      const end = target.selectionEnd;
      const newCode = code.substring(0, start) + '  ' + code.substring(end);
      setCode(newCode);
      setTimeout(() => {
        target.selectionStart = target.selectionEnd = start + 2;
      }, 0);
    } else {
      handleKeyDown(e);
    }
  };

  // Line numbers calculation
  const lineCount = Math.max(code.split('\n').length, 1);
  const lineNumbers = Array.from({ length: lineCount }, (_, i) => i + 1);

  return (
    <>
      <PageHeader
        eyebrow={language === 'ta' ? 'ஆன்லைன் சோதனைக்களம்' : 'Online Playground'}
        title={language === 'ta' ? 'உலாவியில் YaazhiCode-ஐ இயக்குங்கள்' : 'Run YaazhiCode in your browser'}
        lead={
          language === 'ta'
            ? 'மென்பொருள் நிறுவ தேவையின்றி இணையத்திலேயே நேரடியாக YaazhiCode குறியீட்டை எழுதி, உண்மையான சாண்ட்பாக்ஸ் சூழலில் இயக்கி பார்க்கலாம்.'
            : 'Write, edit, and execute real YaazhiCode programs directly online with secure sandboxed execution.'
        }
        badge={<StatusPill status="available" />}
      />

      <div className="shell py-6 sm:py-10 lg:py-14">
        <Breadcrumb
          items={[{ label: language === 'ta' ? 'சோதனைக்களம்' : 'Playground' }]}
          onNavigate={onNavigate}
        />

        {/* Example Selector Bar */}
        <section className="mb-6 rounded-xl border border-line bg-panel p-3 sm:p-4">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
            <div className="flex items-center gap-2">
              <Code2 className="h-4 w-4 text-accent" />
              <h2 className="text-sm font-semibold text-ink">
                {language === 'ta' ? 'எடுத்துக்காட்டு நிரலைத் தேர்வு செய்க' : 'Choose an example program'}
              </h2>
            </div>
            <span className="font-mono text-xs text-faint">
              {language === 'ta' ? 'உண்மையான சாண்ட்பாக்ஸ் இயக்கம்' : 'Real sandboxed execution'}
            </span>
          </div>

          <div className="flex flex-wrap gap-2" role="group" aria-label="Playground examples">
            {PLAYGROUND_EXAMPLES.map((ex) => (
              <button
                key={ex.id}
                type="button"
                onClick={() => handleSelectExample(ex)}
                className={`min-h-[38px] rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${
                  selectedExampleId === ex.id
                    ? 'border-accent/50 bg-accent-soft text-accent shadow-sm'
                    : 'border-line bg-app text-muted hover:text-ink'
                }`}
              >
                {pick(ex.title, language)}
              </button>
            ))}
          </div>
        </section>

        {/* Playground Workspace Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Left Column: Code Editor */}
          <div className="flex flex-col rounded-xl border border-line bg-app/80 overflow-hidden shadow-sm">
            {/* Editor Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line bg-panel px-3 sm:px-4 py-2 sm:py-2.5">
              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="font-semibold text-ink">main.yaazhi</span>
                <span className="rounded border border-line bg-raised px-1.5 py-0.5 text-faint">
                  v0.1.0
                </span>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex min-h-[34px] items-center gap-1.5 rounded-md border border-line bg-raised px-2.5 py-1 text-xs text-muted transition-colors hover:text-ink"
                  title={language === 'ta' ? 'மீட்டமை' : 'Reset code'}
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">{language === 'ta' ? 'மீட்டமை' : 'Reset'}</span>
                </button>

                <CopyButton text={code} className="min-h-[34px] text-xs" />

                <button
                  type="button"
                  onClick={handleShare}
                  className="inline-flex min-h-[34px] items-center gap-1.5 rounded-md border border-line bg-raised px-2.5 py-1 text-xs text-muted transition-colors hover:text-accent"
                  title={language === 'ta' ? 'பகிர்' : 'Share link'}
                >
                  {shareCopied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-positive" />
                      <span className="text-positive">{language === 'ta' ? 'நகலெடுக்கப்பட்டது!' : 'Copied!'}</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="h-3.5 w-3.5" />
                      <span className="hidden sm:inline">{language === 'ta' ? 'பகிர்' : 'Share'}</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleRun}
                  disabled={isRunning}
                  className="inline-flex min-h-[36px] items-center gap-2 rounded-lg bg-accent px-4 py-1.5 text-xs sm:text-sm font-semibold text-accent-ink transition-opacity hover:opacity-90 disabled:opacity-60 shadow-sm"
                  title="Ctrl + Enter"
                >
                  <Play className={`h-4 w-4 ${isRunning ? 'animate-spin' : ''}`} />
                  <span>{isRunning ? (language === 'ta' ? 'இயங்குகிறது...' : 'Running...') : (language === 'ta' ? 'இயக்கு' : 'Run')}</span>
                </button>
              </div>
            </div>

            {/* Code Textarea & Line Numbers */}
            <div className="relative flex flex-1 min-h-[360px] sm:min-h-[460px] font-mono text-xs sm:text-sm">
              <div className="select-none bg-panel/70 border-r border-line px-2.5 py-3 text-right text-xs text-faint font-mono">
                {lineNumbers.map((num) => (
                  <div key={num} className="leading-6">
                    {num}
                  </div>
                ))}
              </div>
              <textarea
                ref={textareaRef}
                value={code}
                onChange={(e) => setCode(e.target.value)}
                onKeyDown={handleTextareaKeyDown}
                spellCheck="false"
                className="w-full flex-1 resize-none bg-transparent p-3 font-mono text-xs sm:text-sm leading-6 text-ink focus:outline-none"
                placeholder={language === 'ta' ? 'இங்கு YaazhiCode நிரலை எழுதுங்கள்...' : 'Write YaazhiCode program here...'}
              />
            </div>

            {/* Keyboard shortcut hint bar */}
            <div className="border-t border-line bg-panel px-3 py-1.5 text-right font-mono text-xs text-faint">
              <kbd className="rounded border border-line bg-app px-1.5 py-0.5">Ctrl</kbd> + <kbd className="rounded border border-line bg-app px-1.5 py-0.5">Enter</kbd> {language === 'ta' ? 'மூலம் இயக்கலாம்' : 'to run'}
            </div>
          </div>

          {/* Right Column: Output & Diagnostics */}
          <div className="flex flex-col rounded-xl border border-line bg-app/80 overflow-hidden shadow-sm">
            {/* Output Header */}
            <div className="flex items-center justify-between border-b border-line bg-panel px-3 sm:px-4 py-2 sm:py-2.5">
              <div className="flex items-center gap-2 text-xs font-mono font-medium text-ink">
                <Terminal className="h-4 w-4 text-accent" />
                <span>{language === 'ta' ? 'வெளியீடு (Output)' : 'Program Output'}</span>
              </div>

              {executionTime !== null && (
                <div className="flex items-center gap-1.5 font-mono text-xs text-faint">
                  <Clock className="h-3.5 w-3.5 text-accent" />
                  <span>{executionTime}ms</span>
                </div>
              )}
            </div>

            {/* Output Body */}
            <div className="flex-1 min-h-[220px] sm:min-h-[280px] p-4 font-mono text-xs sm:text-sm leading-6 overflow-x-auto bg-raised/40">
              {output ? (
                <pre className="whitespace-pre-wrap text-ink">{output}</pre>
              ) : error ? null : (
                <p className="text-faint italic">
                  {language === 'ta'
                    ? 'நிரலை இயக்க மேலே உள்ள "இயக்கு" (Run) பொத்தானை அழுத்தவும்.'
                    : 'Click "Run" above or press Ctrl+Enter to execute the program.'}
                </p>
              )}
            </div>

            {/* Diagnostics / Error Panel */}
            {error && (
              <div className="border-t border-caution/40 bg-caution/10 p-4">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-caution">
                  <AlertTriangle className="h-4 w-4 shrink-0" />
                  <span>{language === 'ta' ? 'பிழை அறிக்கை (Diagnostics)' : 'Diagnostic Report'}</span>
                </div>
                <p className="mt-2 text-xs sm:text-sm text-ink leading-relaxed font-mono whitespace-pre-wrap">
                  {error}
                </p>

                {diagnostics.length > 0 && (
                  <div className="mt-3 space-y-2 border-t border-caution/20 pt-2 font-mono text-xs">
                    {diagnostics.map((d, i) => (
                      <div key={i} className="text-muted">
                        <span className="font-semibold text-accent">[{d.code}]</span>
                        {d.line && <span> வரி: {d.line}, நிரல்: {d.column}</span>}
                        {d.suggestion && <p className="mt-1 text-faint">பரிந்துரை: {d.suggestion}</p>}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Security Guarantee Notice */}
            <div className="border-t border-line bg-panel p-3 text-xs text-faint leading-relaxed">
              <p className="flex items-start gap-1.5">
                <Sparkles className="h-3.5 w-3.5 shrink-0 text-accent mt-0.5" />
                <span>
                  {language === 'ta'
                    ? 'பாதுகாப்பான சாண்ட்பாக்ஸ்: கோப்பு முறைமை மற்றும் நெட்வொர்க் அணுகல் கட்டுப்படுத்தப்பட்டு, உத்தியோகபூர்வ YaazhiCode இன்டர்பிரெட்டர் மூலம் இயக்கப்படுகிறது.'
                    : 'Secure Sandbox: Executed with the official YaazhiCode interpreter in a restricted sandbox with rate limits and timeout guards.'}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Language Tips & Syntax Rules for Learners */}
        <section className="mt-10 sm:mt-14 rounded-xl border border-line bg-panel p-4 sm:p-6">
          <Eyebrow>{language === 'ta' ? 'நினைவில் கொள்ள வேண்டியவை' : 'Important Rules'}</Eyebrow>
          <h3 className="mt-2 text-lg sm:text-xl font-bold text-ink">
            {language === 'ta' ? 'YaazhiCode தொடரியல் குறிப்புகள்' : 'YaazhiCode Syntax Rules'}
          </h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 text-xs sm:text-sm text-muted">
            <div className="rounded-lg border border-line bg-app p-3 sm:p-4">
              <p className="font-semibold text-ink">{language === 'ta' ? '1. தமிழ் எண்கள்' : '1. Tamil Numerals'}</p>
              <p className="mt-1 text-faint">
                {language === 'ta'
                  ? 'எண்களுக்கு $ குறியுடன் கூடிய தமிழ் இலக்கங்களைப் ($௦-$௯) பயன்படுத்தவும் (எ.கா: $௧, $௨௫, $௧௦௦). ASCII 0-9 எண்களை ஏற்காது.'
                  : 'Numbers must use Tamil digits with a $ prefix ($௦-$௯, e.g. $௧, $௨௫). Raw ASCII digits 0-9 are not allowed in code.'}
              </p>
            </div>
            <div className="rounded-lg border border-line bg-app p-3 sm:p-4">
              <p className="font-semibold text-ink">{language === 'ta' ? '2. தமிழ் மாறிகள்' : '2. Tamil Identifiers'}</p>
              <p className="mt-1 text-faint">
                {language === 'ta'
                  ? 'மாறி, செயல் மற்றும் வகுப்புப் பெயர்கள் அனைத்தும் தமிழ் எழுத்துகளிலேயே இருக்க வேண்டும். ஆங்கில எழுத்துகளைப் பயன்படுத்த முடியாது.'
                  : 'Variable, function, and class names must use Tamil script. Latin letters are not permitted as identifiers.'}
              </p>
            </div>
            <div className="rounded-lg border border-line bg-app p-3 sm:p-4">
              <p className="font-semibold text-ink">{language === 'ta' ? '3. அச்சிடுதல்' : '3. Printing Output'}</p>
              <p className="mt-1 text-faint">
                {language === 'ta'
                  ? 'முடிவுகளைக் காட்ட அச்சிடு(...) கட்டளையையும், எண்களை உரையோடு இணைக்க உரையாக்கு(...) கட்டளையையும் பயன்படுத்தவும்.'
                  : 'Use அச்சிடு(...) to print to stdout and உரையாக்கு(...) to convert numbers to strings when concatenating.'}
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
