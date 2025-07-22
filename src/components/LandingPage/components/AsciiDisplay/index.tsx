import React from 'react';

interface AsciiDisplayProps {
  art: string;
  className?: string;
  animate?: boolean;
}

export default function AsciiDisplay({ art, className = '', animate = false }: AsciiDisplayProps) {
  return (
    <div className="flex justify-center w-full">
      <pre className={`font-mono whitespace-pre ${animate ? 'animate-pulse' : ''} ${className}`}>
        {art}
      </pre>
    </div>
  );
}