import React from 'react';

export default function TerminalDecoration() {
  return (
    <div className="mt-4 text-[10px] tracking-wider leading-relaxed">
      <div className="grid grid-cols-12 gap-1">
        {Array.from({ length: 48 }).map((_, i) => (
          <span key={i} className="text-white/20">{'0'.repeat(4)}</span>
        ))}
      </div>
      <div className="mt-2 flex justify-between text-white/30">
        <span>{'0'.repeat(30)}</span>
        <span>{'0'.repeat(30)}</span>
      </div>
      <div className="mt-2 grid grid-cols-16 gap-1">
        {Array.from({ length: 64 }).map((_, i) => (
          <span key={i} className="text-white/10">{'0'.repeat(2)}</span>
        ))}
      </div>
    </div>
  );
}