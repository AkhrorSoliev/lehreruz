import * as React from 'react';

/**
 * Curriculum row — numbered / done / current / locked, with type + duration.
 */
export interface LessonItemProps { index?: number; title: string; duration?: string; type?: 'video'|'quiz'|'file'|'audio'; state?: 'open'|'current'|'done'|'locked'; preview?: boolean; onClick?: () => void; inverse?: boolean; style?: React.CSSProperties; }

export declare function LessonItem(props: LessonItemProps): JSX.Element;
