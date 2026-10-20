import React from 'react';

export function Wordmark({ size = 26, inverse = false, style }) {
  return (
    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: size, lineHeight: 1, letterSpacing: '-0.04em',
      color: inverse ? 'var(--paper-0)' : 'var(--ink-900)', whiteSpace: 'nowrap', ...style }}>
      lehrer<span style={{ color: inverse ? 'var(--gold-500)' : 'var(--gold-600)' }}>.uz</span>
    </span>
  );
}
