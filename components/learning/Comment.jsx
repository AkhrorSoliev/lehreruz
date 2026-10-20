import React from 'react';
import { Avatar } from '../display/Avatar.jsx';
import { Badge } from '../display/Badge.jsx';
import { Icon } from '../core/Icon.jsx';

export function Comment({ author, time, text, likes = 0, liked = false, instructor = false, timestamp, onLike, onReply, children, style }) {
  const act = { display: 'inline-flex', alignItems: 'center', gap: 5, border: 0, background: 'transparent', padding: 0, cursor: 'pointer', fontSize: 13, fontWeight: 600, color: 'var(--text-muted)', fontFamily: 'var(--font-ui)' };
  return (
    <div style={{ display: 'flex', gap: 12, fontFamily: 'var(--font-ui)', ...style }}>
      <Avatar name={author} size={36} ring={instructor} />
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
          <b style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-strong)' }}>{author}</b>
          {instructor && <Badge tone="gold" size="sm">O‘qituvchi</Badge>}
          <span style={{ fontSize: 12, color: 'var(--text-subtle)' }}>{time}</span>
        </div>
        <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: 'var(--text-body)' }}>
          {timestamp && <span className="lz-mono" style={{ fontSize: 13, padding: '1px 6px', marginRight: 6, borderRadius: 6, background: 'var(--gold-100)', color: 'var(--gold-700)' }}>{timestamp}</span>}
          {text}
        </p>
        <div style={{ display: 'flex', gap: 16 }}>
          <button type="button" onClick={onLike} style={{ ...act, color: liked ? 'var(--ink-900)' : act.color }}><Icon name="thumbs-up" size={15} fill={liked ? 'var(--gold-500)' : 'none'} />{likes}</button>
          {onReply && <button type="button" onClick={onReply} style={act}><Icon name="message-circle" size={15} />Javob berish</button>}
        </div>
        {children && <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 8, paddingLeft: 4 }}>{children}</div>}
      </div>
    </div>
  );
}
