import * as React from 'react';

/**
 * Downloadable lesson resource row (PDF worksheet, MP3, ZIP).
 */
export interface FileItemProps { name: string; size?: string; kind?: 'pdf'|'audio'|'zip'; onDownload?: () => void; style?: React.CSSProperties; }

export declare function FileItem(props: FileItemProps): JSX.Element;
