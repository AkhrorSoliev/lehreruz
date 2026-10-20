import React, { useState } from 'react';
import { Icon } from '../core/Icon.jsx';

export function Input({ label, hint, error, iconLeft, iconRight, size = 'md', type = 'text', placeholder, value, defaultValue, onChange, name, autoFocus, disabled = false, style }) {
  const [focus, setFocus] = useState(false);
  const h = size === 'lg' ? 52 : size === 'sm' ? 38 : 46;
  const border = error ? 'var(--red-500)' : focus ? 'var(--ink-900)' : 'var(--border-default)';
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--font-ui)', ...style }}>
      {label && <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-strong)' }}>{label}</span>}
      <span style={{ display: 'flex', alignItems: 'center', gap: 10, height: h, padding: '0 14px', borderRadius: 12,
        background: disabled ? 'var(--paper-100)' : 'var(--surface-card)', border: '1px solid ' + border,
        boxShadow: focus ? (error ? '0 0 0 3px var(--red-100)' : 'var(--focus-ring)') : 'var(--shadow-xs)',
        color: 'var(--text-muted)', transition: 'box-shadow var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)' }}>
        {iconLeft && <Icon name={iconLeft} size={18} />}
        <input type={type} name={name} placeholder={placeholder} value={value} defaultValue={defaultValue} onChange={onChange} autoFocus={autoFocus} disabled={disabled}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{ flex: 1, minWidth: 0, height: '100%', border: 0, outline: 0, background: 'transparent', fontSize: size === 'sm' ? 14 : 15, color: 'var(--text-strong)' }} />
        {iconRight && <Icon name={iconRight} size={18} />}
      </span>
      {(error || hint) && <span style={{ fontSize: 13, color: error ? 'var(--red-600)' : 'var(--text-muted)' }}>{error || hint}</span>}
    </label>
  );
}
