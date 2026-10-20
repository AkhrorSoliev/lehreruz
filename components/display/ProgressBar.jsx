import React from 'react';

const TONES = { gold: 'var(--gold-500)', success: 'var(--green-500)', ink: 'var(--ink-900)', inverse: 'var(--gold-500)' };

export function ProgressBar({ value = 0, tone = 'gold', height = 6, label, showValue = false, style }) {
  const v = Math.max(0, Math.min(100, value));
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }}>
      {(label || showValue) && (
        <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-ui)', fontSize: 13, color: tone === 'inverse' ? 'rgba(255,255,255,.7)' : 'var(--text-muted)' }}>
          <span>{label}</span>{showValue && <span style={{ fontWeight: 600, color: tone === 'inverse' ? '#fff' : 'var(--text-strong)' }}>{Math.round(v)}%</span>}
        </div>
      )}
      <div style={{ height, borderRadius: 999, background: tone === 'inverse' ? 'rgba(255,255,255,.18)' : 'var(--paper-200)', overflow: 'hidden' }}>
        <div style={{ width: v + '%', height: '100%', borderRadius: 999, background: TONES[tone] || TONES.gold, transition: 'width var(--dur-slow) var(--ease-out)' }} />
      </div>
    </div>
  );
}
