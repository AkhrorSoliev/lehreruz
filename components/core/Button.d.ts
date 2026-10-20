import * as React from 'react';

/**
 * Primary action button — ink primary, gold accent for buying, secondary/ghost/danger/inverse.
 * @startingPoint section="Core" subtitle="Ink, gold & ghost buttons" viewport="700x260"
 */
export interface ButtonProps { children?: React.ReactNode; variant?: 'primary'|'accent'|'secondary'|'ghost'|'danger'|'inverse'; size?: 'sm'|'md'|'lg'; iconLeft?: string; iconRight?: string; fullWidth?: boolean; disabled?: boolean; type?: 'button'|'submit'; onClick?: (e: any) => void; style?: React.CSSProperties; }

export declare function Button(props: ButtonProps): JSX.Element;
