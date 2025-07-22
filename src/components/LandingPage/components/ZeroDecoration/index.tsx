import React from 'react';

export default function ZeroDecoration() {
  return (
    <div className="grid grid-cols-16 gap-px">
      {Array.from({ length: 32 }).map((_, i) => (
        <span 
          key={i} 
          className="text-[8px] text-white/20 animate-pulse" 
          style={{
            animationDelay: `${i * 100}ms`
          }}
        >
          {'0'.repeat(2)}
        </span>
      ))}
    </div>
  );
}