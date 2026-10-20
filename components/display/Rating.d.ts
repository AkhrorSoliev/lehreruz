import * as React from 'react';

/**
 * Star rating with numeric value and review count.
 */
export interface RatingProps { value?: number; count?: number; size?: 'sm'|'md'|'lg'; showValue?: boolean; style?: React.CSSProperties; }

export declare function Rating(props: RatingProps): JSX.Element;
