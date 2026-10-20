import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Rating({ value = 0, count, size = 'md', showValue = true, style }) {
  const px = size === 'sm' ? 13 : size === 'lg' ? 18 : 15;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-ui)', fontSize: px, ...style }}>
      {showValue && <b style={{ fontWeight: 700, color: 'var(--gold-700)' }}>{value.toFixed(1).replace('.', ',')}</b>}
      <span style={{ display: 'inline-flex', gap: 1, color: 'var(--rating-star)' }}>
        {[0, 1, 2, 3, 4].map(i => (
          <Icon key={i} name="star" size={px} strokeWidth={1.75} fill={value >= i + 0.75 ? 'currentColor' : 'none'}
            color={value >= i + 0.25 ? 'currentColor' : 'var(--ink-300)'} />
        ))}
      </span>
      {count != null && <span style={{ color: 'var(--text-muted)', fontSize: px - 1 }}>({count.toLocaleString('ru-RU')})</span>}
    </span>
  );
}
