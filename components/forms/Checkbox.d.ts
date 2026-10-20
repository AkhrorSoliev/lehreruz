import * as React from 'react';

/**
 * 20px rounded checkbox — ink fill with gold check.
 */
export interface CheckboxProps { checked?: boolean; onChange?: (v: boolean) => void; label?: React.ReactNode; description?: string; disabled?: boolean; style?: React.CSSProperties; }

export declare function Checkbox(props: CheckboxProps): JSX.Element;
