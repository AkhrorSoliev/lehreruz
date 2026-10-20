import * as React from 'react';

/**
 * Native select styled to match Input.
 */
export interface SelectProps { label?: string; options?: (string|{value:string;label:string})[]; value?: string; onChange?: (v: string) => void; size?: 'sm'|'md'; style?: React.CSSProperties; }

export declare function Select(props: SelectProps): JSX.Element;
