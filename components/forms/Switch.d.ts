import * as React from 'react';

/**
 * 40×24 toggle — ink track, gold knob when on.
 */
export interface SwitchProps { checked?: boolean; onChange?: (v: boolean) => void; label?: React.ReactNode; disabled?: boolean; style?: React.CSSProperties; }

export declare function Switch(props: SwitchProps): JSX.Element;
