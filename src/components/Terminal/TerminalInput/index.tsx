import React from 'react';
import { useTerminalInput } from '../hooks/useTerminalInput';
import { InputProps } from './types';

export default function TerminalInput({ input, setInput, onSubmit, disabled = false }: InputProps) {
  const { handleKeyPress } = useTerminalInput({ onSubmit });

  return (
    <form onSubmit={onSubmit} className="relative">
      <input
        type="text"
        value={input}
        disabled={disabled}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyPress}
        className={`w-full bg-black border p-2 text-white/90 
          focus:outline-none transition-colors text-sm ${
            disabled 
              ? 'border-white/5 text-white/30 cursor-not-allowed' 
              : 'border-white/10 focus:border-white/30'
          }`}
        placeholder={disabled ? "CRAZYROOM is thinking..." : "Tell me a shit nonsense"}
      />
      <div className="absolute right-2 top-2 text-white/20 text-xs">
        {input ? '0'.repeat(input.length) : '000'}
      </div>
    </form>
  );
}