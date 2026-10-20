import React, { useState } from 'react';
import { Icon } from './Icon.jsx';

const SIZES = { sm: [32, 16, 8], md: [40, 20, 10], lg: [48, 22, 12] };
const VARIANTS = {
  ghost:     { bg: 'transparent', hover: 'var(--paper-100)', fg: 'var(--text-strong)', border: 'transparent' },
  secondary: { bg: 'var(--surface-card)', hover: 'var(--paper-100)', fg: 'var(--text-strong)', border: 'var(--border-default)' },
  primary:   { bg: 'var(--action-primary)', hover: 'var(--action-primary-hover)', fg: 'var(--text-inverse)', border: 'transparent' },
  accent:    { bg: 'var(--action-accent)', hover: 'var(--action-accent-hover)', fg: 'var(--ink-900)', border: 'transparent' },
  player:    { bg: 'transparent', hover: 'rgba(255,255,255,0.12)', fg: '#fff', border: 'transparent' },
};

export function IconButton({ icon, label, variant = 'ghost', size = 'md', round = false, active = false, badge, disabled = false, onClick, style }) {
  const [hover, setHover] = useState(false);
  const [d, i, r] = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.ghost;
  return (
    <button type="button" aria-label={label} title={label} disabled={disabled} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative', width: d, height: d, padding: 0, flex: 'none',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        color: active && variant !== 'player' ? 'var(--ink-900)' : v.fg,
        background: active && variant !== 'player' ? 'var(--gold-100)' : hover && !disabled ? v.hover : v.bg,
        border: '1px solid ' + v.border, borderRadius: round ? 999 : r,
        cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.4 : 1,
        transition: 'background var(--dur-fast) var(--ease-out)', ...style,
      }}>
      <Icon name={icon} size={i} fill={active && icon === 'heart' ? 'currentColor' : 'none'} />
      {badge != null && (
        <span style={{ position: 'absolute', top: -4, right: -4, minWidth: 18, height: 18, padding: '0 5px', borderRadius: 999,
          background: 'var(--red-500)', color: '#fff', fontSize: 11, fontWeight: 700, lineHeight: '18px', fontFamily: 'var(--font-ui)',
          boxShadow: '0 0 0 2px var(--paper-0)' }}>{badge}</span>
      )}
    </button>
  );
}
