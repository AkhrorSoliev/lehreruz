import React from 'react';

export const formatSom = n => Math.round(n).toLocaleString('ru-RU').replace(/\u00a0/g, ' ') + ' so‘m';

export function PriceTag({ price, oldPrice, size = 'md', free = false, showDiscount = true, style }) {
  const fs = size === 'lg' ? 32 : size === 'sm' ? 15 : 18;
  const pct = oldPrice && oldPrice > price ? Math.round((1 - price / oldPrice) * 100) : 0;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'baseline', flexWrap: 'wrap', gap: size === 'lg' ? 12 : 8, fontFamily: 'var(--font-ui)', ...style }}>
      <b style={{ fontFamily: size === 'lg' ? 'var(--font-display)' : 'var(--font-ui)', fontSize: fs, fontWeight: 700, letterSpacing: size === 'lg' ? '-0.02em' : '-0.01em', color: 'var(--text-strong)' }}>{free ? 'Bepul' : formatSom(price)}</b>
      {!free && oldPrice > price && <s style={{ fontSize: Math.round(fs * 0.72), color: 'var(--text-subtle)' }}>{formatSom(oldPrice)}</s>}
      {!free && showDiscount && pct > 0 && <span style={{ fontSize: Math.max(12, Math.round(fs * 0.62)), fontWeight: 700, color: 'var(--text-sale)' }}>−{pct}%</span>}
    </span>
  );
}
