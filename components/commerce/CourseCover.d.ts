import * as React from 'react';

/**
 * Typographic course thumbnail — tone field, level chip, German word, giant ghost level.
 */
export interface CourseCoverProps { level?: string; word?: string; tone?: 'gold'|'ink'|'paper'|'red'|'green'|'blue'; label?: string; src?: string; ratio?: string; radius?: number; style?: React.CSSProperties; }

export declare function CourseCover(props: CourseCoverProps): JSX.Element;
