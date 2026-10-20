import * as React from 'react';

/**
 * Lesson discussion comment with optional video timestamp, likes, replies.
 */
export interface CommentProps { author: string; time?: string; text: React.ReactNode; likes?: number; liked?: boolean; instructor?: boolean; timestamp?: string; onLike?: () => void; onReply?: () => void; children?: React.ReactNode; style?: React.CSSProperties; }

export declare function Comment(props: CommentProps): JSX.Element;
