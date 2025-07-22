import React from 'react';
import { useLoadingProgress } from '../../hooks/useLoadingProgress';

interface LoadingBarProps {
  onComplete?: () => void;
  delay?: number;
}

export default function LoadingBar({ onComplete, delay = 0 }: LoadingBarProps) {
  const progress = useLoadingProgress({ onComplete, delay });

  return (
    <div className="space-y-1">
      <div className="h-1 bg-white/5 relative overflow-hidden">
        <div 
          className="h-full bg-white/30 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
        <div className="absolute top-0 left-0 w-full h-full">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute top-0 h-full w-px bg-white/10"
              style={{ 
                left: `${(i + 1) * 5}%`,
                opacity: Math.random() * 0.5 + 0.5
              }}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-between text-[8px] text-white/30">
        <span>{'0'.repeat(8)}</span>
        <span>{Math.floor(progress)}%</span>
        <span>{'0'.repeat(8)}</span>
      </div>
    </div>
  );
}