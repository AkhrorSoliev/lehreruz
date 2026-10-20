import React from 'react';

const TONES = {
  gold:  { bg: 'var(--gold-500)', fg: 'var(--ink-900)', ghost: 'rgba(20,22,27,0.08)', chip: 'var(--ink-900)', chipFg: '#fff' },
  ink:   { bg: 'var(--ink-900)', fg: '#fff', ghost: 'rgba(255,198,41,0.14)', chip: 'var(--gold-500)', chipFg: 'var(--ink-900)' },
  paper: { bg: 'var(--paper-100)', fg: 'var(--ink-900)', ghost: 'rgba(20,22,27,0.06)', chip: 'var(--ink-900)', chipFg: '#fff' },
  red:   { bg: 'var(--red-500)', fg: '#fff', ghost: 'rgba(255,255,255,0.14)', chip: '#fff', chipFg: 'var(--red-700)' },
  green: { bg: 'var(--green-600)', fg: '#fff', ghost: 'rgba(255,255,255,0.12)', chip: 'var(--gold-500)', chipFg: 'var(--ink-900)' },
  blue:  { bg: 'var(--blue-500)', fg: '#fff', ghost: 'rgba(255,255,255,0.13)', chip: '#fff', chipFg: 'var(--blue-700)' },
};

export function CourseCover({ level = 'A1', word = 'Hallo!', tone = 'gold', label = 'Deutsch', src, ratio = '16 / 9', radius = 12, style }) {
  const t = TONES[tone] || TONES.gold;
  return (
    <div style={{ position: 'relative', aspectRatio: ratio, borderRadius: radius, overflow: 'hidden', background: t.bg, color: t.fg, containerType: 'inline-size', ...style }}>
      {src ? <img src={src} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} /> : (
        <>
          <span aria-hidden="true" style={{ position: 'absolute', right: '-4cqw', bottom: '-14cqw', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '62cqw', lineHeight: 1, letterSpacing: '-0.06em', color: t.ghost }}>{level}</span>
          <span style={{ position: 'absolute', left: '6cqw', top: '6cqw', display: 'inline-flex', alignItems: 'center', gap: '1.6cqw', padding: '1.2cqw 2.6cqw', borderRadius: 999, background: t.chip, color: t.chipFg, fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 'max(10px, 3.6cqw)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>{label} · {level}</span>
          <span style={{ position: 'absolute', left: '6cqw', right: '6cqw', bottom: '6cqw', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '11cqw', lineHeight: 0.98, letterSpacing: '-0.04em', textWrap: 'balance' }}>{word}</span>
        </>
      )}
    </div>
  );
}
