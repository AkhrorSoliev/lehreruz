import React from 'react';

export function Switch({ checked = false, onChange, label, disabled = false, style }) {
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: 10, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, fontFamily: 'var(--font-ui)', fontSize: 15, color: 'var(--text-strong)', ...style }}>
      <button type="button" role="switch" aria-checked={checked} disabled={disabled} onClick={() => onChange && onChange(!checked)}
        style={{ width: 40, height: 24, padding: 2, borderRadius: 999, border: 0, cursor: 'inherit', flex: 'none',
          background: checked ? 'var(--ink-900)' : 'var(--ink-300)', transition: 'background var(--dur-base) var(--ease-out)' }}>
        <span style={{ display: 'block', width: 20, height: 20, borderRadius: '50%', background: checked ? 'var(--gold-500)' : '#fff', boxShadow: 'var(--shadow-xs)',
          transform: checked ? 'translateX(16px)' : 'none', transition: 'transform var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out)' }} />
      </button>
      {label}
    </label>
  );
}
