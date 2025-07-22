import React from 'react';
import { useEffect, useState } from 'react';

interface IntroTextProps {
  text: string;
  delay?: number;
  onComplete?: () => void;
  className?: string;
}

export default function IntroText({ text, delay = 0, onComplete, className = '' }: IntroTextProps) {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    const timer = setTimeout(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
          onComplete?.();
        }
      }, 50);
      
      return () => clearInterval(interval);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [text, delay, onComplete]);

  return (
    <div className={`font-mono ${className}`}>
      {displayText}
    </div>
  );
}