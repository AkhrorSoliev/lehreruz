import * as React from 'react';

/**
 * Pill-shaped filter chip (level, topic) — toggles ink when selected.
 */
export interface TagProps { children?: React.ReactNode; selected?: boolean; icon?: string; count?: number; onClick?: () => void; style?: React.CSSProperties; }

export declare function Tag(props: TagProps): JSX.Element;
