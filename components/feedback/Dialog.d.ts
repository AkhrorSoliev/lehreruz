import * as React from 'react';

/**
 * Modal sheet — 24px radius, ink scrim, Esc closes. Used for checkout and login.
 */
export interface DialogProps { open?: boolean; onClose?: () => void; title?: React.ReactNode; subtitle?: React.ReactNode; children?: React.ReactNode; footer?: React.ReactNode; width?: number; style?: React.CSSProperties; }

export declare function Dialog(props: DialogProps): JSX.Element;
