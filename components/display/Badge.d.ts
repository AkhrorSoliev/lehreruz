import * as React from 'react';

/**
 * Small status label on cards and lists — Bestseller, Yangi, −40%, Tugallandi.
 */
export interface BadgeProps { children?: React.ReactNode; tone?: 'neutral'|'gold'|'goldSoft'|'success'|'danger'|'sale'|'info'|'inverse'; size?: 'sm'|'md'; icon?: string; style?: React.CSSProperties; }

export declare function Badge(props: BadgeProps): JSX.Element;
