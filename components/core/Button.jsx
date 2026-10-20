import React, { useState } from 'react';
import { Icon } from './Icon.jsx';

const SIZES = {
  sm: { height: 36, padding: '0 14px', fontSize: 14, gap: 6, icon: 16, radius: 10 },
  md: { height: 44, padding: '0 18px', fontSize: 15, gap: 8, icon: 18, radius: 12 },
  lg: { height: 52, padding: '0 24px', fontSize: 16, gap: 10, icon: 20, radius: 12 },
};
const VARIANTS = {
  primary:   { bg: 'var(--action-primary)', hover: 'var(--action-primary-hover)', press: 'var(--action-primary-press)', fg: 'var(--text-inverse)', border: 'transparent' },
  accent:    { bg: 'var(--action-accent)', hover: 'var(--action-accent-hover)', press: 'var(--action-accent-press)', fg: 'var(--text-on-gold)', border: 'transparent' },
  secondary: { bg: 'var(--surface-card)', hover: 'var(--paper-100)', press: 'var(--paper-200)', fg: 'var(--text-strong)', border: 'var(--border-default)' },
  ghost:     { bg: 'transparent', hover: 'var(--action-ghost-hover)', press: 'var(--paper-200)', fg: 'var(--text-strong)', border: 'transparent' },
  danger:    { bg: 'var(--red-500)', hover: 'var(--red-600)', press: 'var(--red-700)', fg: 'var(--text-inverse)', border: 'transparent' },
  inverse:   { bg: 'var(--paper-0)', hover: 'var(--gold-100)', press: 'var(--gold-200)', fg: 'var(--ink-900)', border: 'transparent' },
};

export function Button({ children, variant = 'primary', size = 'md', iconLeft, iconRight, fullWidth = false, disabled = false, type = 'button', onClick, style }) {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  const bg = disabled ? v.bg : press ? v.press : hover ? v.hover : v.bg;
  return (
    <button type={type} disabled={disabled} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: s.gap,
        height: s.height, padding: s.padding, width: fullWidth ? '100%' : undefined,
        fontFamily: 'var(--font-ui)', fontSize: s.fontSize, fontWeight: 600, letterSpacing: '-0.005em', whiteSpace: 'nowrap',
        color: v.fg, background: bg, border: '1px solid ' + v.border, borderRadius: s.radius,
        cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.45 : 1,
        transform: press && !disabled ? 'scale(0.98)' : 'none',
        transition: 'background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
        ...style,
      }}>
      {iconLeft && <Icon name={iconLeft} size={s.icon} />}
      {children}
      {iconRight && <Icon name={iconRight} size={s.icon} />}
    </button>
  );
}
