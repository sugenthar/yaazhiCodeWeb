import React from 'react';

export function Badge({ children, variant = 'default', size = 'sm', className = '' }) {
  const variants = {
    default: 'bg-surface-100 text-silver-300 border-border',
    silver: 'bg-white/10 text-white border-white/20',
    amber: 'bg-amber-950/40 text-amber-300 border-amber-800/40',
    emerald: 'bg-emerald-950/40 text-emerald-300 border-emerald-800/40',
    purple: 'bg-purple-950/40 text-purple-300 border-purple-800/40',
    outline: 'bg-transparent text-silver-400 border-border/80',
  };

  const sizes = {
    xs: 'px-1.5 py-0.5 text-[10px]',
    sm: 'px-2 py-0.5 text-[11px]',
    md: 'px-2.5 py-1 text-xs',
  };

  return (
    <span
      className={`inline-flex items-center gap-1 font-mono font-medium rounded-full border ${variants[variant] || variants.default} ${sizes[size] || sizes.sm} ${className}`}
    >
      {children}
    </span>
  );
}

export function Card({ children, className = '', hover = true, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`rounded-xl border border-border bg-[#0d0e13] p-5 ${
        hover ? 'hover:border-border-hover hover:bg-[#12131a] transition-all duration-200' : ''
      } ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
