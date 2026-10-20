import * as React from 'react';

/**
 * Ink tooltip on hover for icon buttons and truncated meta.
 */
export interface TooltipProps { label: React.ReactNode; children: React.ReactNode; placement?: 'top'|'bottom'; open?: boolean; style?: React.CSSProperties; }

export declare function Tooltip(props: TooltipProps): JSX.Element;
