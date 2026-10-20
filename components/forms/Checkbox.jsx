import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Checkbox({ checked = false, onChange, label, description, disabled = false, style }) {
  return (
    <label style={{ display: 'flex', alignItems: 'flex-start', gap: 10, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, fontFamily: 'var(--font-ui)', ...style }}>
      <input type="checkbox" checked={checked} disabled={disabled} onChange={e => onChange && onChange(e.target.checked)} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
      <span style={{ width: 20, height: 20, marginTop: 1, borderRadius: 6, flex: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        background: checked ? 'var(--ink-900)' : 'var(--surface-card)', border: '1.5px solid ' + (checked ? 'var(--ink-900)' : 'var(--ink-300)'), color: 'var(--gold-500)',
        transition: 'background var(--dur-fast) var(--ease-out)' }}>
        {checked && <Icon name="check" size={14} strokeWidth={3} />}
      </span>
      {(label || description) && (
        <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {label && <span style={{ fontSize: 15, color: 'var(--text-strong)' }}>{label}</span>}
          {description && <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>{description}</span>}
        </span>
      )}
    </label>
  );
}
