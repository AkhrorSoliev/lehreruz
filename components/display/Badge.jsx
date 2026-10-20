import React from 'react';
import { Icon } from '../core/Icon.jsx';

const TONES = {
  neutral: ['var(--paper-100)', 'var(--ink-700)'],
  gold:    ['var(--gold-500)', 'var(--ink-900)'],
  goldSoft:['var(--gold-100)', 'var(--gold-700)'],
  success: ['var(--status-success-soft)', 'var(--status-success-text)'],
  danger:  ['var(--status-danger-soft)', 'var(--status-danger-text)'],
  sale:    ['var(--red-500)', '#fff'],
  info:    ['var(--status-info-soft)', 'var(--status-info-text)'],
  inverse: ['var(--ink-900)', '#fff'],
};

export function Badge({ children, tone = 'neutral', size = 'md', icon, style }) {
  const [bg, fg] = TONES[tone] || TONES.neutral;
  const sm = size === 'sm';
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, height: sm ? 20 : 24, padding: sm ? '0 6px' : '0 8px',
      borderRadius: 6, background: bg, color: fg, fontFamily: 'var(--font-ui)', fontSize: sm ? 11 : 12, fontWeight: 600,
      letterSpacing: '0.01em', whiteSpace: 'nowrap', ...style }}>
      {icon && <Icon name={icon} size={sm ? 12 : 14} strokeWidth={2.25} />}
      {children}
    </span>
  );
}
