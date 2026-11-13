import React from 'react';

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
