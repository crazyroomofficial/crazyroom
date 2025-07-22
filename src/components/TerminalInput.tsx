import React from 'react';

interface TerminalInputProps {
  input: string;
  setInput: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function TerminalInput({ input, setInput, onSubmit }: TerminalInputProps) {
  return (
    <form onSubmit={onSubmit} className="relative">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full bg-black border border-white/10 p-2 text-white/90 focus:outline-none focus:border-white/30 transition-colors text-sm"
        placeholder="000000 000 0000"
      />
      <div className="absolute right-2 top-2 text-white/20 text-xs">
        {input ? '0'.repeat(input.length) : '000'}
      </div>
    </form>
  );
}