import React from 'react';

interface TerminalMessagesProps {
  conversation: string[];
  isTyping: boolean;
  bottomRef: React.RefObject<HTMLDivElement>;
}

export default function TerminalMessages({ conversation, isTyping, bottomRef }: TerminalMessagesProps) {
  return (
    <div className="terminal-content mb-4 h-[60vh] overflow-y-auto custom-scrollbar backdrop-blur-sm bg-black/50">
      <div className="space-y-1 mb-4 text-[10px]">
        <p className="text-white/40">{'0'.repeat(50)}</p>
        <p className="text-white/60">{'0'.repeat(10)} CRAZYROOM TERMINAL {'0'.repeat(10)}</p>
        <p className="text-white/40">{'0'.repeat(50)}</p>
        <p className="text-white/60">{'0'.repeat(8)} INITIALIZING SYSTEM {'0'.repeat(8)}</p>
        <p className="text-white/40">{'0'.repeat(50)}</p>
        <div className="grid grid-cols-8 gap-1">
          {Array.from({ length: 32 }).map((_, i) => (
            <span key={i} className="text-white/20">{'0'.repeat(4)}</span>
          ))}
        </div>
      </div>

      {conversation.map((message, index) => (
        <div 
          key={index} 
          className={`mb-2 text-[10px] ${
            message.startsWith('>') 
              ? 'text-white/30' 
              : message.includes('ERROR') 
                ? 'text-red-500/70' 
                : message.includes('WARNING') 
                  ? 'text-yellow-500/70' 
                  : 'text-white/70'
          }`}
        >
          {message}
        </div>
      ))}
      
      {isTyping && (
        <div className="mb-2 text-[10px] text-white/50 flex items-center gap-2 animate-pulse">
          <span className="text-white/60">000000</span>
          <span className="text-white/80">CRAZYROOM is thinking crazy thoughts</span>
          <div className="flex gap-1">
            <div 
              className="w-1 h-1 bg-white/60 rounded-full animate-bounce"
              style={{ animationDelay: '0ms' }}
            />
            <div 
              className="w-1 h-1 bg-white/60 rounded-full animate-bounce"
              style={{ animationDelay: '150ms' }}
            />
            <div 
              className="w-1 h-1 bg-white/60 rounded-full animate-bounce"
              style={{ animationDelay: '300ms' }}
            />
          </div>
          <span className="text-white/30">000000</span>
        </div>
      )}
      
      <div ref={bottomRef} />
    </div>
  );
}