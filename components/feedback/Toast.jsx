import React from 'react';
import { Icon } from '../core/Icon.jsx';

const TONES = { success: ['circle-check', 'var(--green-500)'], info: ['info', 'var(--gold-500)'], danger: ['circle-alert', 'var(--red-500)'] };

export function Toast({ tone = 'success', title, message, action, onAction, onClose, style }) {
  const [icon, color] = TONES[tone] || TONES.info;
  return (
    <div role="status" style={{ display: 'flex', alignItems: 'flex-start', gap: 12, width: 380, maxWidth: '100%', padding: '14px 14px 14px 16px', borderRadius: 14,
      background: 'var(--ink-900)', color: '#fff', boxShadow: 'var(--shadow-lg)', fontFamily: 'var(--font-ui)', ...style }}>
      <Icon name={icon} size={20} color={color} style={{ marginTop: 1 }} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
        {title && <div style={{ fontSize: 15, fontWeight: 600 }}>{title}</div>}
        {message && <div style={{ fontSize: 14, color: 'rgba(255,255,255,.7)', lineHeight: 1.45 }}>{message}</div>}
      </div>
      {action && <button type="button" onClick={onAction} style={{ border: 0, background: 'transparent', color: 'var(--gold-500)', fontWeight: 600, fontSize: 14, cursor: 'pointer', padding: '2px 4px' }}>{action}</button>}
      {onClose && <button type="button" aria-label="Yopish" onClick={onClose} style={{ border: 0, background: 'transparent', color: 'rgba(255,255,255,.6)', cursor: 'pointer', padding: 0 }}><Icon name="x" size={18} /></button>}
    </div>
  );
}
