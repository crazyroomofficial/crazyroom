import React from 'react';

export default function ZeroGrid() {
  return (
    <div className="grid grid-cols-16 gap-px bg-white/5 p-4">
      {Array.from({ length: 256 }).map((_, i) => (
        <div
          key={i}
          className="aspect-square flex items-center justify-center"
          style={{
            opacity: Math.random() * 0.5 + 0.1,
            transform: `scale(${Math.random() * 0.5 + 0.5})`
          }}
        >
          <span className="text-[8px] text-white/40">0</span>
        </div>
      ))}
    </div>
  );
}