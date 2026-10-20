import * as React from 'react';

/**
 * Underline tabs (course page, player) or pill segmented control.
 */
export interface TabsProps { items: {id:string;label:string;icon?:string;count?:number}[]; value: string; onChange?: (id: string) => void; variant?: 'underline'|'pill'; inverse?: boolean; style?: React.CSSProperties; }

export declare function Tabs(props: TabsProps): JSX.Element;
