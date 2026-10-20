import * as React from 'react';

/**
 * Radio-card for choosing Click / Payme / Uzum / card at checkout.
 */
export interface PaymentMethodProps { provider?: 'click'|'payme'|'uzum'|'card'; logoSrc?: string; title?: string; subtitle?: string; selected?: boolean; onSelect?: (p: string) => void; style?: React.CSSProperties; }

export declare function PaymentMethod(props: PaymentMethodProps): JSX.Element;
