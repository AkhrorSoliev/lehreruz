import React, { useState } from 'react';

export function Tooltip({ label, children, placement = 'top', open, style }) {
  const [hover, setHover] = useState(false);
  const show = open ?? hover;
  const pos = placement === 'bottom' ? { top: 'calc(100% + 8px)' } : { bottom: 'calc(100% + 8px)' };
  return (
    <span style={{ position: 'relative', display: 'inline-flex', ...style }} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      {children}
      <span role="tooltip" style={{ position: 'absolute', left: '50%', ...pos, transform: 'translateX(-50%) translateY(' + (show ? 0 : placement === 'bottom' ? -4 : 4) + 'px)',
        opacity: show ? 1 : 0, pointerEvents: 'none', whiteSpace: 'nowrap', zIndex: 50,
        background: 'var(--ink-900)', color: '#fff', fontFamily: 'var(--font-ui)', fontSize: 12, fontWeight: 500, lineHeight: 1.3,
        padding: '6px 10px', borderRadius: 8, boxShadow: 'var(--shadow-md)',
        transition: 'opacity var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)' }}>{label}</span>
    </span>
  );
}
