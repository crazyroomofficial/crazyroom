import React from 'react';
import { ZERO_TITLE_ASCII, SUBTITLE_ASCII } from './constants/ascii';
import GlitchLayer from './GlitchLayer';
import ZeroDecoration from './ZeroDecoration';

export default function ZeroTitle() {
  return (
    <div className="max-w-4xl mx-auto space-y-4 text-center">
      <div className="relative inline-block">
        {/* Main title */}
        <pre className="text-[8px] md:text-[10px] font-mono whitespace-pre text-white/90 leading-[1.1] tracking-[2px] md:tracking-[4px] transform hover:scale-[1.01] transition-transform duration-500">
          {ZERO_TITLE_ASCII}
        </pre>
        
        {/* Glitch effects */}
        <GlitchLayer text={ZERO_TITLE_ASCII} color="red" />
        <GlitchLayer text={ZERO_TITLE_ASCII} color="blue" />
      </div>

      {/* Subtitle */}
      <div className="relative">
        <pre className="text-[6px] md:text-[8px] font-mono whitespace-pre text-white/60 leading-[1.1] tracking-[2px] md:tracking-[4px]">
          {SUBTITLE_ASCII}
        </pre>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse" />
      </div>

      <div className="mt-8">
        <ZeroDecoration />
      </div>
    </div>
  );
}