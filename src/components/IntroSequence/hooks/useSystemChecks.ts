import { useState, useEffect } from 'react';
import { SystemCheck } from '../types';

interface UseSystemChecksProps {
  checks: { id: string; label: string }[];
  onComplete: () => void;
}

export function useSystemChecks({ checks, onComplete }: UseSystemChecksProps) {
  const [systemChecks, setSystemChecks] = useState<SystemCheck[]>(
    checks.map(check => ({ ...check, status: 'pending' }))
  );

  useEffect(() => {
    let currentIndex = 0;

    const runCheck = () => {
      if (currentIndex >= checks.length) {
        onComplete();
        return;
      }

      setSystemChecks(prev => prev.map((check, i) => ({
        ...check,
        status: i === currentIndex ? 'checking' : check.status
      })));

      setTimeout(() => {
        setSystemChecks(prev => prev.map((check, i) => ({
          ...check,
          status: i === currentIndex 
            ? Math.random() > 0.2 ? 'success' : 'error'
            : check.status
        })));
        currentIndex++;
        runCheck();
      }, 1000 + Math.random() * 1000);
    };

    runCheck();
  }, [checks, onComplete]);

  return {
    checks: systemChecks,
    currentCheck: systemChecks.find(check => check.status === 'checking')
  };
}