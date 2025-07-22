import React from 'react';
import { ZEROSHIT_ASCII, POOP_ASCII, FUNNY_DESCRIPTIONS } from '../../constants/ascii';
import AsciiDisplay from '../AsciiDisplay';

export default function ZeroShitAscii() {
  return (
    <div className="space-y-8 flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto">
        <div className="space-y-4 flex flex-col items-center">
          <AsciiDisplay
            art={ZEROSHIT_ASCII}
            className="text-white/60 text-sm leading-[1.2] tracking-tight text-center"
          />
          <div className="text-center text-[10px] text-white/30">
            {'0'.repeat(20)} SUPER CRAZY PROCESSOR {'0'.repeat(20)}
          </div>
        </div>
        
        <div className="space-y-4 flex flex-col items-center">
          <AsciiDisplay
            art={POOP_ASCII}
            className="text-white/60 text-sm leading-[1.2] tracking-tight text-center"
          />
          <div className="text-center text-[10px] text-white/30">
            {'0'.repeat(20)} CRAZY TOLERANCE MODE ENGAGED {'0'.repeat(20)}
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