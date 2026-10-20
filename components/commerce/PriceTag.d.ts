import * as React from 'react';

/**
 * So‘m price with struck-through old price and red discount %.
 */
export interface PriceTagProps { price: number; oldPrice?: number; size?: 'sm'|'md'|'lg'; free?: boolean; showDiscount?: boolean; style?: React.CSSProperties; }

export declare function PriceTag(props: PriceTagProps): JSX.Element;
