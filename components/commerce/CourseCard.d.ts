import * as React from 'react';

/**
 * Marketplace course tile — cover, title, instructor, rating, meta, price/badge or progress.
 * @startingPoint section="Commerce" subtitle="Course card, cover, price & payment" viewport="700x420"
 */
export interface CourseCardProps { course?: {title?:string;instructor?:string;rating?:number;reviews?:number;price?:number;oldPrice?:number;level?:string;cover?:{tone?:string;word?:string;label?:string;src?:string};lessons?:number;hours?:number;badge?:string}; progress?: number; layout?: 'vertical'|'horizontal'; onClick?: () => void; style?: React.CSSProperties; }

export declare function CourseCard(props: CourseCardProps): JSX.Element;
