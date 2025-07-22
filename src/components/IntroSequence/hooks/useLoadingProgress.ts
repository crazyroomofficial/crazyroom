import { useState, useEffect } from 'react';

interface UseLoadingProgressProps {
  onComplete?: () => void;
  delay?: number;
  duration?: number;
}

export function useLoadingProgress({ 
  onComplete, 
  delay = 0, 
  duration = 2000 
}: UseLoadingProgressProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let intervalId: NodeJS.Timeout;
    let startTime: number;

    const animate = () => {
      timeoutId = setTimeout(() => {
        startTime = Date.now();
        intervalId = setInterval(() => {
          const elapsed = Date.now() - startTime;
          const newProgress = Math.min((elapsed / duration) * 100, 100);
          setProgress(newProgress);

          if (newProgress === 100) {
            clearInterval(intervalId);
            onComplete?.();
          }
        }, 16);
      }, delay);
    };

    animate();

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [delay, duration, onComplete]);

  return progress;
}