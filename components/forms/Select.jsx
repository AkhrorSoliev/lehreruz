import React, { useState } from 'react';
import { Icon } from '../core/Icon.jsx';

export function Select({ label, options = [], value, onChange, size = 'md', style }) {
  const [focus, setFocus] = useState(false);
  const h = size === 'sm' ? 38 : 46;
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--font-ui)', ...style }}>
      {label && <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-strong)' }}>{label}</span>}
      <span style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        <select value={value} onChange={e => onChange && onChange(e.target.value)} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{ appearance: 'none', width: '100%', height: h, padding: '0 40px 0 14px', borderRadius: 12, cursor: 'pointer',
            border: '1px solid ' + (focus ? 'var(--ink-900)' : 'var(--border-default)'), background: 'var(--surface-card)',
            boxShadow: focus ? 'var(--focus-ring)' : 'var(--shadow-xs)', outline: 0, fontSize: size === 'sm' ? 14 : 15, color: 'var(--text-strong)' }}>
          {options.map(o => typeof o === 'string' ? <option key={o} value={o}>{o}</option> : <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
        <Icon name="chevron-down" size={18} color="var(--text-muted)" style={{ position: 'absolute', right: 14, pointerEvents: 'none' }} />
      </span>
    </label>
  );
}
