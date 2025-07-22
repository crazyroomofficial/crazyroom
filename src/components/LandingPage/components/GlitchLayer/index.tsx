import React from 'react';
import { GlitchLayerProps } from './types';

export default function GlitchLayer({ text, color }: GlitchLayerProps) {
  const colorClass = color === 'red' ? 'text-red-500/20' : 'text-blue-500/20';
  const animationClass = color === 'red' ? 'animate-glitch-1' : 'animate-glitch-2';

  return (
    <pre 
      className={`absolute top-0 left-0 text-[8px] md:text-[10px] font-mono whitespace-pre ${colorClass} leading-[1.1] tracking-[2px] md:tracking-[4px] ${animationClass} select-none`}
    >
      {text}
    </pre>
  );
}