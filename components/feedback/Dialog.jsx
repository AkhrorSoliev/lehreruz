import React, { useEffect } from 'react';
import { IconButton } from '../core/IconButton.jsx';

export function Dialog({ open = false, onClose, title, subtitle, children, footer, width = 520, style }) {
  useEffect(() => {
    if (!open) return;
    const k = e => { if (e.key === 'Escape' && onClose) onClose(); };
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, background: 'rgba(14,16,20,0.52)' }}>
      <div role="dialog" aria-modal="true" onClick={e => e.stopPropagation()}
        style={{ width: '100%', maxWidth: width, maxHeight: 'calc(100vh - 48px)', overflow: 'auto', background: 'var(--surface-raised)', borderRadius: 24, boxShadow: 'var(--shadow-lg)', fontFamily: 'var(--font-ui)', ...style }}>
        {(title || onClose) && (
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, padding: '24px 24px 0' }}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
              {title && <div style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--text-strong)', lineHeight: 1.2 }}>{title}</div>}
              {subtitle && <div style={{ fontSize: 14, color: 'var(--text-muted)' }}>{subtitle}</div>}
            </div>
            {onClose && <IconButton icon="x" label="Yopish" size="sm" variant="ghost" onClick={onClose} />}
          </div>
        )}
        <div style={{ padding: 24 }}>{children}</div>
        {footer && <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12, padding: '16px 24px', borderTop: '1px solid var(--border-hairline)' }}>{footer}</div>}
      </div>
    </div>
  );
}
