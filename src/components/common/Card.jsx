import React from 'react';

export function Card({ children, className = '', hover = true, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`rounded-xl border border-line bg-panel p-5 ${
        hover ? 'transition-colors hover:border-accent/50' : ''
      } ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
