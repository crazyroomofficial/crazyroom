import React from 'react';

export default function TerminalHeader() {
  return (
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
  );
}