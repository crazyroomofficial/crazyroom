import React, { useState } from 'react';
import BinaryWave from './BinaryWave';
import IntroText from './IntroText';
import GlitchText from './GlitchText';
import LoadingPhase from './components/LoadingPhase';
import SystemCheck from './components/SystemCheck';
import { LOADING_PHASES } from './constants';

interface IntroSequenceProps {
  onComplete: () => void;
}

export default function IntroSequence({ onComplete }: IntroSequenceProps) {
  const [stage, setStage] = useState(0);

  const advanceStage = () => {
    if (stage < 3) {
      setStage(stage + 1);
    } else {
      onComplete();
    }
  };

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center">
      <BinaryWave />
      
      <div className="relative z-10 space-y-8 max-w-2xl mx-auto p-8">
        {stage >= 0 && (
          <IntroText
            text={'0'.repeat(64)}
            className="text-white/20 text-xs tracking-wider"
            delay={0}
            onComplete={() => advanceStage()}
          />
        )}
        
        {stage >= 1 && (
          <>
            <GlitchText
              text="CRAZYROOM TERMINAL SYSTEM"
              className="text-white/80 text-2xl font-bold tracking-widest mb-8"
            />
            <LoadingPhase 
              phases={LOADING_PHASES}
              onComplete={() => advanceStage()}
            />
          </>
        )}
        
        {stage >= 2 && (
          <SystemCheck onComplete={() => advanceStage()} />
        )}
      </div>
    </div>
  );
}