import React from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

interface StartTerminalProps {
  onStart: () => void;
}

export default function StartTerminal({ onStart }: StartTerminalProps) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-8">
        <div className="space-y-2">
          <div className="text-[10px] text-white/20">{'0'.repeat(50)}</div>
          <h2 className="text-xl text-white/80 tracking-widest">INITIALIZE TERMINAL</h2>
          <div className="text-[10px] text-white/20">{'0'.repeat(50)}</div>
        </div>
        
        <button
          onClick={onStart}
          className="group relative px-8 py-4 bg-transparent border border-white/20 hover:border-white/40 transition-colors"
        >
          <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors" />
          <div className="relative flex items-center gap-3">
            <TerminalIcon className="w-5 h-5 text-white/60" />
            <span className="text-white/60 tracking-wider">START ZEROSHIT</span>
          </div>
        </button>

        <div className="grid grid-cols-12 gap-1">
          {Array.from({ length: 48 }).map((_, i) => (
            <span key={i} className="text-white/10 text-[8px]">{'0'.repeat(4)}</span>
          ))}
        </div>
      </div>
    </div>
  );
}