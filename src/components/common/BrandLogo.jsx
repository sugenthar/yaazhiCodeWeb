import React from 'react';

/**
 * The official YaazhiCode logo. Always points at the untouched /logo.svg asset.
 * `decorative` should be used when adjacent text already names the brand.
 */
export function BrandLogo({ className = 'h-8 w-8', alt = 'YaazhiCode', decorative = false }) {
  return (
    <img
      src="/logo.svg"
      alt={decorative ? '' : alt}
      width="64"
      height="64"
      decoding="async"
      className={`block object-contain ${className}`}
    />
  );
}
