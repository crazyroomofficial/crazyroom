import React from 'react';
import { POOP_ASCII, FUNNY_DESCRIPTIONS } from '../../constants/ascii';
import AsciiDisplay from '../AsciiDisplay';

export default function MainContent() {
  return (
    <div className="space-y-12 flex flex-col items-center">
      <div className="max-w-4xl w-full">
        <div className="text-center space-y-4">
          <AsciiDisplay 
            art={POOP_ASCII} 
            className="text-[24px] text-white/90 leading-[1.2]" 
          />
          <div className="text-center text-[10px] text-white/30">
            {'0'.repeat(20)} SUPER CRAZY PROCESSOR {'0'.repeat(20)}
          </div>
        </div>
      </div>

      <div className="space-y-2 text-center border-t border-white/10 pt-4 w-full max-w-4xl">
        {FUNNY_DESCRIPTIONS.map((desc, index) => (
          <div
            key={index}
            className="text-[10px] text-white/40"
            style={{
              animation: `flicker ${3 + index}s infinite`,
              animationDelay: `${index * 0.2}s`
            }}
          >
            {'0'.repeat(10)} {desc} {'0'.repeat(10)}
          </div>
        ))}
      </div>
    </div>
  );
}