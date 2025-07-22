import React from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
}

export default function GlitchText({ text, className = '' }: GlitchTextProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute top-0 left-0 w-full glitch-1">{text}</div>
      <div className="absolute top-0 left-0 w-full glitch-2">{text}</div>
      <div>{text}</div>
    </div>
  );
}