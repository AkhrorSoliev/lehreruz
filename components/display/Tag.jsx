import React, { useState } from 'react';
import { Icon } from '../core/Icon.jsx';

export function Tag({ children, selected = false, icon, count, onClick, style }) {
  const [hover, setHover] = useState(false);
  return (
    <button type="button" onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 6, height: 36, padding: '0 14px', borderRadius: 999,
        fontFamily: 'var(--font-ui)', fontSize: 14, fontWeight: 500, cursor: 'pointer', whiteSpace: 'nowrap',
        background: selected ? 'var(--ink-900)' : hover ? 'var(--paper-100)' : 'var(--surface-card)',
        color: selected ? '#fff' : 'var(--text-strong)',
        border: '1px solid ' + (selected ? 'var(--ink-900)' : 'var(--border-default)'),
        transition: 'background var(--dur-fast) var(--ease-out)', ...style }}>
      {icon && <Icon name={icon} size={16} />}
      {children}
      {count != null && <span style={{ fontSize: 12, opacity: 0.6, fontWeight: 500 }}>{count}</span>}
    </button>
  );
}
