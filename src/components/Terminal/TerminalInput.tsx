import React from 'react';

interface TerminalInputProps {
  input: string;
  setInput: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  disabled?: boolean;
  placeholder?: string;
  isWaitingForResponse?: boolean;
}

function LoadingBar() {
  return (
    <div className="relative">
      <div className="w-full bg-black border border-white/10 p-2 h-[42px] flex items-center">
        <div className="flex-1 bg-white/5 h-2 relative overflow-hidden">
          <div 
            className="absolute top-0 left-0 h-full bg-white/30 transition-all duration-300"
            style={{
              width: '100%',
              animation: 'loading-sweep 2s ease-in-out infinite'
            }}
          />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="flex gap-px text-[8px] text-white/40 font-mono">
              {Array.from({ length: 40 }).map((_, i) => (
                <span
                  key={i}
                  className="animate-pulse"
                  style={{
                    animationDelay: `${i * 50}ms`,
                    animationDuration: '1s'
                  }}
                >
                  0
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-2 top-2 text-white/40 text-xs flex items-center gap-2">
        <span>CRAZYROOM is thinking</span>
        <div className="flex gap-1">
          <div 
            className="w-1 h-1 bg-white/60 rounded-full animate-bounce"
            style={{ animationDelay: '0ms' }}
          />
          <div 
            className="w-1 h-1 bg-white/60 rounded-full animate-bounce"
            style={{ animationDelay: '150ms' }}
          />
          <div 
            className="w-1 h-1 bg-white/60 rounded-full animate-bounce"
            style={{ animationDelay: '300ms' }}
          />
        </div>
      </div>
      
      <style jsx>{`
        @keyframes loading-sweep {
          0% { 
            transform: translateX(-100%);
            opacity: 0.3;
          }
          50% { 
            transform: translateX(0%);
            opacity: 0.6;
          }
          100% { 
            transform: translateX(100%);
            opacity: 0.3;
          }
        }
      `}</style>
    </div>
  );
}

export default function TerminalInput({ 
  input, 
  setInput, 
  onSubmit,
  disabled = false,
  placeholder = "Tell me a shit nonsense",
  isWaitingForResponse = false
}: TerminalInputProps) {
  
  // Show loading bar when waiting for response
  if (isWaitingForResponse) {
    return <LoadingBar />;
  }

  return (
    <form onSubmit={onSubmit} className="relative">
      <input
        type="text"
        value={input}
        disabled={disabled}
        onChange={(e) => setInput(e.target.value)}
        className={`w-full bg-black border p-2 text-white/90 
          focus:outline-none transition-colors text-sm ${
            disabled 
              ? 'border-white/5 text-white/30 cursor-not-allowed' 
              : 'border-white/10 focus:border-white/30'
          }`}
        placeholder={disabled ? "CRAZYROOM is thinking..." : placeholder}
      />
      <div className="absolute right-2 top-2 text-white/20 text-xs">
        {input ? '0'.repeat(input.length) : '000'}
      </div>
    </form>
  );
}