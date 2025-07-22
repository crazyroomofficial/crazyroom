import React from 'react';
import AsciiDisplay from './AsciiDisplay';
import { TSM_LOGO } from './constants';

export default function AsciiGrid() {
  return (
    <div className="flex justify-center items-center py-8">
      <AsciiDisplay 
        art={TSM_LOGO} 
        className="text-[24px] text-white/90 animate-pulse leading-[1.2]" 
      />
    </div>
  );
}