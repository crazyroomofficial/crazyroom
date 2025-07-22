import React, { ReactNode } from 'react';
import GlitchText from '../IntroSequence/GlitchText';
import ZeroShitAscii from './AsciiArt/ZeroShitAscii';

interface ContentSectionProps {
  title: string;
  content: string;
  delay: number;
  children?: ReactNode;
  manifesto?: string[];
  showAscii?: boolean;
}

export default function ContentSection({ 
  title, 
  content, 
  delay, 
  children, 
  manifesto,
  showAscii = false
}: ContentSectionProps) {
  return (
    <div 
      className="min-h-screen flex items-center justify-center p-8"
      style={{ 
        animation: `fadeIn 1s ease-out ${delay}s both`
      }}
    >
      <div className="max-w-2xl w-full space-y-8">
        <GlitchText
          text={title}
          className="text-2xl font-bold tracking-wider text-white/80"
        />
        
        <div className="space-y-6">
          <p className="text-white/60 leading-relaxed">{content}</p>
          
          {manifesto && (
            <div className="space-y-4 mt-8">
              {manifesto.map((line, index) => (
                <div key={index} className="flex items-start gap-4">
                  <span className="text-white/30 font-mono">{'0'.repeat(4)}</span>
                  <p className="text-white/50 flex-1">{line}</p>
                </div>
              ))}
            </div>
          )}

          {showAscii && (
            <div className="mt-8 border border-white/10 p-4 bg-black/30">
              <ZeroShitAscii />
            </div>
          )}
          
          {children}
        </div>
      </div>
    </div>
  );
}