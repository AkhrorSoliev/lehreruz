import React, { useState } from 'react';
import { Icon } from '../core/Icon.jsx';

const NAMES = { click: 'Click', payme: 'Payme', uzum: 'Uzum', card: 'Bank kartasi' };

export function PaymentMethod({ provider = 'click', logoSrc, title, subtitle, selected = false, onSelect, style }) {
  const [hover, setHover] = useState(false);
  const [broken, setBroken] = useState(false);
  const name = title || NAMES[provider] || provider;
  return (
    <button type="button" role="radio" aria-checked={selected} onClick={() => onSelect && onSelect(provider)}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: 'flex', alignItems: 'center', gap: 14, width: '100%', minHeight: 64, padding: '12px 16px', borderRadius: 14, cursor: 'pointer', textAlign: 'left',
        background: 'var(--surface-card)', fontFamily: 'var(--font-ui)',
        border: '1px solid ' + (selected ? 'var(--ink-900)' : hover ? 'var(--ink-400)' : 'var(--border-default)'),
        boxShadow: selected ? 'inset 0 0 0 1px var(--ink-900), var(--focus-ring)' : 'none', transition: 'border-color var(--dur-fast) var(--ease-out)', ...style }}>
      <span style={{ width: 20, height: 20, borderRadius: '50%', flex: 'none', background: '#fff', border: selected ? '6px solid var(--ink-900)' : '1.5px solid var(--ink-300)' }} />
      <span style={{ width: 96, height: 32, flex: 'none', display: 'flex', alignItems: 'center' }}>
        {provider === 'card' ? <Icon name="credit-card" size={26} color="var(--ink-900)" /> :
          logoSrc && !broken ? <img src={logoSrc} alt={name} onError={() => setBroken(true)} style={{ maxHeight: 26, maxWidth: 96, objectFit: 'contain' }} /> :
          <span style={{ fontSize: 18, fontWeight: 700, color: 'var(--ink-900)' }}>{name}</span>}
      </span>
      <span style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2, minWidth: 0 }}>
        <span style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-strong)' }}>{provider === 'card' ? name : name + ' orqali'}</span>
        {subtitle && <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>{subtitle}</span>}
      </span>
    </button>
  );
}
