import * as React from 'react';

/**
 * Text field with label, hint/error and optional icons — 46px tall, gold focus ring.
 * @startingPoint section="Forms" subtitle="Inputs, selects & toggles" viewport="700x340"
 */
export interface InputProps { label?: string; hint?: string; error?: string; iconLeft?: string; iconRight?: string; size?: 'sm'|'md'|'lg'; type?: string; placeholder?: string; value?: string; defaultValue?: string; onChange?: (e: any) => void; name?: string; autoFocus?: boolean; disabled?: boolean; style?: React.CSSProperties; }

export declare function Input(props: InputProps): JSX.Element;
