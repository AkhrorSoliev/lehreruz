import React from 'react';

export function Radio({ checked = false, onChange, label, description, name, value, disabled = false, style }) {
  return (
    <label style={{ display: 'flex', alignItems: 'flex-start', gap: 10, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, fontFamily: 'var(--font-ui)', ...style }}>
      <input type="radio" name={name} value={value} checked={checked} disabled={disabled} onChange={() => onChange && onChange(value)} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
      <span style={{ width: 20, height: 20, marginTop: 1, borderRadius: '50%', flex: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        background: 'var(--surface-card)', border: (checked ? '6px solid var(--ink-900)' : '1.5px solid var(--ink-300)'), transition: 'border var(--dur-fast) var(--ease-out)' }} />
      {(label || description) && (
        <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {label && <span style={{ fontSize: 15, color: 'var(--text-strong)' }}>{label}</span>}
          {description && <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>{description}</span>}
        </span>
      )}
    </label>
  );
}
