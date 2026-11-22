import React from 'react';

export function Badge({ children, variant = 'default', size = 'sm', className = '' }) {
  const variants = {
    default: 'border-line bg-raised text-muted',
    accent: 'border-accent/40 bg-accent-soft text-accent',
    positive: 'border-positive/40 bg-positive/10 text-positive',
    caution: 'border-caution/40 bg-caution/10 text-caution',
    outline: 'border-line bg-transparent text-faint',
  };
  const sizes = {
    xs: 'px-1.5 py-0.5 text-[10px]',
    sm: 'px-2 py-0.5 text-[11px]',
    md: 'px-2.5 py-1 text-xs',
  };

  return (
    <span className={`inline-flex items-center gap-1 rounded-full border font-mono font-medium ${variants[variant] || variants.default} ${sizes[size] || sizes.sm} ${className}`}>
      {children}
    </span>
  );
}
