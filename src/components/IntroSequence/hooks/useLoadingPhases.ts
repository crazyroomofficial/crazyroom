import { useState, useCallback } from 'react';
import { Phase } from '../types';

interface UseLoadingPhasesProps {
  phases: Phase[];
  onComplete: () => void;
}

export function useLoadingPhases({ phases, onComplete }: UseLoadingPhasesProps) {
  const [phaseIndex, setPhaseIndex] = useState(0);

  const handlePhaseComplete = useCallback(() => {
    if (phaseIndex < phases.length - 1) {
      setPhaseIndex(prev => prev + 1);
    } else {
      onComplete();
    }
  }, [phaseIndex, phases.length, onComplete]);

  return {
    currentPhase: phases[phaseIndex],
    phaseIndex,
    handlePhaseComplete
  };
}