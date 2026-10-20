import * as React from 'react';

/**
 * Round avatar with deterministic warm initials; optional photo.
 */
export interface AvatarProps { name?: string; src?: string; size?: number; ring?: boolean; style?: React.CSSProperties; }

export declare function Avatar(props: AvatarProps): JSX.Element;
