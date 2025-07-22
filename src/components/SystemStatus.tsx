import React from 'react';
import { TerminalState } from '../types/terminal';

interface SystemStatusProps {
  state: TerminalState;
}

export default function SystemStatus({ state }: SystemStatusProps) {
  return (
    <div className="grid grid-cols-3 gap-2 mb-4 text-[10px] border border-white/10 p-2">
      <div className="space-y-1">
        <p className="text-white/40">{'0'.repeat(20)}</p>
        <p className="text-white/60">MEMORY: {state.memory}</p>
        <p className="text-white/40">{'0'.repeat(20)}</p>
      </div>
      <div className="space-y-1">
        <p className="text-white/40">{'0'.repeat(20)}</p>
        <p className="text-white/60">CYCLE: {state.cycle}</p>
        <p className="text-white/40">{'0'.repeat(20)}</p>
      </div>
      <div className="space-y-1">
        <p className="text-white/40">{'0'.repeat(20)}</p>
        <p className="text-white/60">STATUS: {state.status}</p>
        <p className="text-white/40">{'0'.repeat(20)}</p>
      </div>
    </div>
  );
}