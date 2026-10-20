import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Tabs({ items = [], value, onChange, variant = 'underline', inverse = false, style }) {
  if (variant === 'pill') {
    return (
      <div role="tablist" style={{ display: 'inline-flex', gap: 4, padding: 4, borderRadius: 12, background: 'var(--paper-100)', fontFamily: 'var(--font-ui)', ...style }}>
        {items.map(it => {
          const on = it.id === value;
          return (
            <button key={it.id} role="tab" aria-selected={on} type="button" onClick={() => onChange && onChange(it.id)}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 6, height: 34, padding: '0 14px', borderRadius: 9, border: 0, cursor: 'pointer',
                fontSize: 14, fontWeight: 600, background: on ? 'var(--surface-card)' : 'transparent', color: on ? 'var(--text-strong)' : 'var(--text-muted)',
                boxShadow: on ? 'var(--shadow-sm)' : 'none', transition: 'background var(--dur-fast) var(--ease-out)' }}>
              {it.icon && <Icon name={it.icon} size={16} />}{it.label}
            </button>
          );
        })}
      </div>
    );
  }
  return (
    <div role="tablist" style={{ display: 'flex', gap: 28, borderBottom: '1px solid ' + (inverse ? 'rgba(255,255,255,.12)' : 'var(--border-hairline)'), fontFamily: 'var(--font-ui)', overflowX: 'auto', overflowY: 'hidden', scrollbarWidth: 'none', ...style }}>
      {items.map(it => {
        const on = it.id === value;
        return (
          <button key={it.id} role="tab" aria-selected={on} type="button" onClick={() => onChange && onChange(it.id)}
            style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', gap: 8, height: 48, padding: 0, border: 0, background: 'transparent', cursor: 'pointer',
              fontSize: 15, fontWeight: 600, whiteSpace: 'nowrap', color: on ? (inverse ? '#fff' : 'var(--text-strong)') : (inverse ? 'rgba(255,255,255,.55)' : 'var(--text-muted)') }}>
            {it.icon && <Icon name={it.icon} size={18} />}{it.label}
            {it.count != null && <span style={{ fontSize: 12, fontWeight: 600, padding: '1px 7px', borderRadius: 999, background: on ? 'var(--gold-500)' : (inverse ? 'rgba(255,255,255,.1)' : 'var(--paper-100)'), color: on ? 'var(--ink-900)' : 'inherit' }}>{it.count}</span>}
            <span style={{ position: 'absolute', left: 0, right: 0, bottom: -1, height: 2, borderRadius: 2, background: on ? (inverse ? 'var(--gold-500)' : 'var(--ink-900)') : 'transparent' }} />
          </button>
        );
      })}
    </div>
  );
}
