import React from 'react';

export default function TypingIndicator() {
  return (
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
  );
}