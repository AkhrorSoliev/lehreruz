import React, { useState } from 'react';
import { Icon } from '../core/Icon.jsx';

const TYPE_ICON = { video: 'circle-play', quiz: 'notebook-pen', file: 'file-text', audio: 'headphones' };

export function LessonItem({ index, title, duration, type = 'video', state = 'open', preview = false, onClick, inverse = false, style }) {
  const [hover, setHover] = useState(false);
  const current = state === 'current', done = state === 'done', locked = state === 'locked';
  const fg = inverse ? '#fff' : 'var(--text-strong)';
  const muted = inverse ? 'rgba(255,255,255,.55)' : 'var(--text-muted)';
  return (
    <button type="button" onClick={locked ? undefined : onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: 'flex', alignItems: 'center', gap: 12, width: '100%', padding: '10px 12px', border: 0, borderRadius: 10, textAlign: 'left', fontFamily: 'var(--font-ui)',
        cursor: locked ? 'default' : 'pointer',
        background: current ? (inverse ? 'rgba(255,198,41,.14)' : 'var(--gold-100)') : hover && !locked ? (inverse ? 'rgba(255,255,255,.06)' : 'var(--paper-100)') : 'transparent',
        transition: 'background var(--dur-fast) var(--ease-out)', ...style }}>
      <span style={{ width: 28, height: 28, borderRadius: '50%', flex: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700,
        background: done ? 'var(--green-500)' : current ? 'var(--gold-500)' : inverse ? 'rgba(255,255,255,.08)' : 'var(--paper-100)',
        color: done ? '#fff' : current ? 'var(--ink-900)' : muted }}>
        {done ? <Icon name="check" size={15} strokeWidth={3} /> : current ? <Icon name="play" size={13} fill="currentColor" /> : locked ? <Icon name="lock" size={13} /> : index}
      </span>
      <span style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <span style={{ fontSize: 14, fontWeight: current ? 700 : 500, color: locked ? muted : fg, lineHeight: 1.35 }}>{title}</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: muted }}>
          <Icon name={TYPE_ICON[type] || 'circle-play'} size={13} />{duration}
          {preview && <span style={{ color: inverse ? 'var(--gold-500)' : 'var(--gold-700)', fontWeight: 600 }}>· Bepul ko‘rish</span>}
        </span>
      </span>
    </button>
  );
}
