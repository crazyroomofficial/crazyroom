import React from 'react';

export default function ScrollPrompt() {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/40 animate-bounce">
      <div className="text-center space-y-2">
        <div className="text-[10px] tracking-widest">{'0'.repeat(20)}</div>
        <div className="text-xs">SCROLL DOWN</div>
        <div className="text-[10px] tracking-widest">{'0'.repeat(20)}</div>
      </div>
    </div>
  );
}