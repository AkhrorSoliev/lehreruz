import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { IconButton } from '../core/IconButton.jsx';

const KIND = { pdf: ['file-text', 'var(--red-100)', 'var(--red-700)', 'PDF'], audio: ['file-audio', 'var(--blue-100)', 'var(--blue-700)', 'MP3'], zip: ['file-archive', 'var(--gold-100)', 'var(--gold-700)', 'ZIP'] };

export function FileItem({ name, size, kind = 'pdf', onDownload, style }) {
  const [icon, bg, fg, ext] = KIND[kind] || KIND.pdf;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '12px 12px 12px 14px', borderRadius: 14, border: '1px solid var(--border-hairline)', background: 'var(--surface-card)', fontFamily: 'var(--font-ui)', ...style }}>
      <span style={{ width: 40, height: 40, borderRadius: 10, flex: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: bg, color: fg }}><Icon name={icon} size={20} /></span>
      <span style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-strong)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{name}</span>
        <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>{ext} · {size}</span>
      </span>
      <IconButton icon="download" label="Yuklab olish" variant="secondary" size="sm" onClick={onDownload} />
    </div>
  );
}
