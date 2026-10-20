import React from 'react';

const PALETTE = [['var(--gold-100)', 'var(--gold-700)'], ['var(--green-100)', 'var(--green-700)'], ['var(--blue-100)', 'var(--blue-700)'], ['var(--red-100)', 'var(--red-700)'], ['var(--paper-200)', 'var(--ink-700)']];

export function Avatar({ name = '', src, size = 40, ring = false, style }) {
  const initials = name.split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  const idx = [...name].reduce((a, c) => a + c.charCodeAt(0), 0) % PALETTE.length;
  const [bg, fg] = PALETTE[idx];
  return (
    <span style={{ width: size, height: size, borderRadius: '50%', flex: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden', background: bg, color: fg, fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: Math.round(size * 0.38),
      boxShadow: ring ? '0 0 0 2px var(--paper-0), 0 0 0 4px var(--gold-500)' : 'none', ...style }}>
      {src ? <img src={src} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : initials}
    </span>
  );
}
