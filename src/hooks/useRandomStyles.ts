import { useMemo } from 'react';

export function useRandomStyles() {
  return useMemo(() => {
    return () => ({
      opacity: Math.random() * 0.5 + 0.1,
      transform: `scale(${Math.random() * 0.5 + 0.5})`
    });
  }, []);
}