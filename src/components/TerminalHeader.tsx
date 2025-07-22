import React from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

export default function TerminalHeader() {
  return (
    <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
      <div className="flex items-center gap-2">
        <TerminalIcon className="w-5 h-5 text-white/80" />
        <div className="space-y-2">
          <h1 className="text-xl font-bold tracking-wider text-white/90">CRAZYROOM v0.0.0</h1>
          <div className="flex items-center gap-4 text-[10px]">
            <a 
              href="https://x.com/crazyroom_" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white/60 transition-colors"
            >
              [TWITTER]
            </a>
            <a 
              href="https://github.com/crazyroomofficial/crazyroom" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white/60 transition-colors"
            >
              [GITHUB]
            </a>
            <span className="text-white/40">CA: TO BE ANNOUNCED ON TWITTER</span>
          </div>
        </div>
      </div>
    </div>
  );
}