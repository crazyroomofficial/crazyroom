import React from 'react';
import { MessagesProps } from './types';
import MessageItem from './MessageItem';
import TerminalHeader from './TerminalHeader';
import TypingIndicator from './TypingIndicator';

export default function TerminalMessages({ conversation, isTyping, bottomRef }: MessagesProps) {
  return (
    <div className="terminal-content mb-4 h-[60vh] overflow-y-auto custom-scrollbar backdrop-blur-sm bg-black/50">
      <TerminalHeader />
      
      {conversation.map((message, index) => (
        <MessageItem key={index} message={message} />
      ))}
      
      {isTyping && <TypingIndicator />}
      
      <div ref={bottomRef} />
    </div>
  );
}