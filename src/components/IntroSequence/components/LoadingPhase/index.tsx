import React from 'react';
import { useLoadingPhases } from '../../hooks/useLoadingPhases';
import LoadingBar from '../LoadingBar';
import { Phase } from '../../types';

interface LoadingPhaseProps {
  phases: Phase[];
  onComplete: () => void;
}

export default function LoadingPhase({ phases, onComplete }: LoadingPhaseProps) {
  const { currentPhase, phaseIndex, handlePhaseComplete } = useLoadingPhases({
    phases,
    onComplete
  });

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <div className="text-[10px] text-white/40">
          {'0'.repeat(10)} LOADING PHASE {phaseIndex + 1}/{phases.length} {'0'.repeat(10)}
        </div>
        <div className="text-sm text-white/60 tracking-wider">
          {currentPhase.title}
        </div>
      </div>

      <LoadingBar 
        onComplete={handlePhaseComplete}
        delay={currentPhase.delay}
      />

      <div className="grid grid-cols-4 gap-1">
        {phases.map((phase, index) => (
          <div 
            key={index}
            className={`h-1 ${index <= phaseIndex ? 'bg-white/30' : 'bg-white/5'} 
              transition-colors duration-300`}
          />
        ))}
      </div>
    </div>
  );
}