import { useCallback } from 'react';

interface UseTerminalInputProps {
  onSubmit: (e: React.FormEvent) => void;
}

export function useTerminalInput({ onSubmit }: UseTerminalInputProps) {
  const handleKeyPress = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      // Command auto-completion could be added here
    }
  }, []);

  return {
    handleKeyPress
  };
}