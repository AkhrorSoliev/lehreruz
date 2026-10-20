import * as React from 'react';

/**
 * 20px radio — thick ink ring when checked.
 */
export interface RadioProps { checked?: boolean; onChange?: (v: any) => void; label?: React.ReactNode; description?: string; name?: string; value?: any; disabled?: boolean; style?: React.CSSProperties; }

export declare function Radio(props: RadioProps): JSX.Element;
