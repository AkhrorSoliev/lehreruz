import React from 'react';
import { ICONS } from './iconData.js';

export function Icon({ name, size = 20, strokeWidth = 2, color = 'currentColor', fill = 'none', style, title }) {
  const inner = ICONS[name];
  if (!inner) return null;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={color} strokeWidth={strokeWidth}
      strokeLinecap="round" strokeLinejoin="round" aria-hidden={title ? undefined : true} role={title ? 'img' : undefined}
      style={{ flex: 'none', display: 'block', ...style }} dangerouslySetInnerHTML={{ __html: (title ? '<title>' + title + '</title>' : '') + inner }} />
  );
}
