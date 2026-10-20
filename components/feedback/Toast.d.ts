import * as React from 'react';

/**
 * Ink notification card with coloured status glyph and optional action.
 */
export interface ToastProps { tone?: 'success'|'info'|'danger'; title?: string; message?: string; action?: string; onAction?: () => void; onClose?: () => void; style?: React.CSSProperties; }

export declare function Toast(props: ToastProps): JSX.Element;
