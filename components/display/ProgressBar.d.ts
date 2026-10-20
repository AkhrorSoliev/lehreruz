import * as React from 'react';

/**
 * Thin rounded progress track for course completion and video position.
 */
export interface ProgressBarProps { value?: number; tone?: 'gold'|'success'|'ink'|'inverse'; height?: number; label?: string; showValue?: boolean; style?: React.CSSProperties; }

export declare function ProgressBar(props: ProgressBarProps): JSX.Element;
