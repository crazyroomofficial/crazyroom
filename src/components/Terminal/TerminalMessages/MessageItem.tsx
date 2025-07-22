import React from 'react';
import { MessageItemProps } from './types';
import { getMessageStyle } from './utils';

export default function MessageItem({ message }: MessageItemProps) {
  const style = getMessageStyle(message);
  
  return (
    <div className={`mb-2 text-[10px] ${style}`}>
      {message}
    </div>
  );
}