import { ReactNode } from 'react';

export interface ContentSectionProps {
  title: string;
  content: string;
  delay: number;
  children?: ReactNode;
  manifesto?: string[];
  showAscii?: boolean;
}