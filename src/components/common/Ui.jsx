import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage, pick } from '../../context/LanguageContext';
import { STATUS } from '../../content/siteData';
import { BrandLogo } from './BrandLogo';

/** Status pill coloured by release maturity. Accepts a STATUS key or a { en, ta } object. */
export function StatusPill({ status = STATUS.available, className = '' }) {
  const { language } = useLanguage();
  const key = typeof status === 'string' ? status : null;
  const label = key ? STATUS[key] : status;

  const tones = {
    available: 'border-positive/40 bg-positive/10 text-positive',
    development: 'border-caution/40 bg-caution/10 text-caution',
    planned: 'border-line bg-raised text-muted',
    concept: 'border-caution/40 bg-caution/10 text-caution',
    future: 'border-line bg-raised text-muted',
  };
  const tone = tones[key] || tones.planned;
  const dot = {
    available: 'bg-positive',
    development: 'bg-caution',
    planned: 'bg-faint',
    concept: 'bg-caution',
    future: 'bg-faint',
  }[key] || 'bg-faint';

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wide ${tone} ${className}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${dot}`} aria-hidden="true" />
      {pick(label, language)}
    </span>
  );
}

export function Eyebrow({ children, className = '' }) {
  return (
    <p className={`font-mono text-xs font-semibold uppercase tracking-[0.18em] text-accent ${className}`}>
      {children}
    </p>
  );
}

export function PageHeader({ eyebrow, title, lead, badge, children }) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-gradient-to-b from-accent-soft/40 to-transparent">
      <div className="subtle-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="shell relative py-14 sm:py-20">
        <div className="max-w-3xl">
          <BrandLogo className="mb-5 h-10 w-10 sm:h-12 sm:w-12" />
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">{title}</h1>
            {badge}
          </div>
          {lead && <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">{lead}</p>}
          {children}
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={`${align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} mb-8 sm:mb-10`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-2 text-2xl font-bold tracking-tight text-ink sm:text-3xl">{title}</h2>
      {description && <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{description}</p>}
    </div>
  );
}

export function ActionLink({ href, children, variant = 'solid', className = '' }) {
  const external = href.startsWith('http');
  const base = 'inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors';
  const variants = {
    solid: 'bg-accent text-accent-ink hover:opacity-90',
    outline: 'border border-line bg-panel text-ink hover:border-accent/60',
  };
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
      {external && <ArrowUpRight className="h-4 w-4" aria-hidden="true" />}
    </a>
  );
}
