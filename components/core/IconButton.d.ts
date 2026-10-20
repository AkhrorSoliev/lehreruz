import * as React from 'react';

/**
 * Square/round icon-only button for toolbars, player controls, wishlist and cart.
 */
export interface IconButtonProps { icon: string; label: string; variant?: 'ghost'|'secondary'|'primary'|'accent'|'player'; size?: 'sm'|'md'|'lg'; round?: boolean; active?: boolean; badge?: number|string; disabled?: boolean; onClick?: () => void; style?: React.CSSProperties; }

export declare function IconButton(props: IconButtonProps): JSX.Element;
