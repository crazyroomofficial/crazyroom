import React from 'react';
import { useSystemChecks } from '../../hooks/useSystemChecks';
import { Check, AlertCircle, Loader } from 'lucide-react';

const SYSTEM_CHECKS = [
  { id: 'quantum', label: 'QUANTUM SASS MATRIX' },
  { id: 'neural', label: 'NEURAL NETWORK' },
  { id: 'reality', label: 'REALITY DISTORTION FIELD' },
  { id: 'attitude', label: 'ATTITUDE CALIBRATION' }
];

interface SystemCheckProps {
  onComplete: () => void;
}

export default function SystemCheck({ onComplete }: SystemCheckProps) {
  const { checks, currentCheck } = useSystemChecks({
    checks: SYSTEM_CHECKS,
    onComplete
  });

  return (
    <div className="space-y-4">
      <div className="text-[10px] text-white/40">
        {'0'.repeat(10)} SYSTEM DIAGNOSTICS {'0'.repeat(10)}
      </div>

      <div className="space-y-2">
        {checks.map((check) => (
          <div 
            key={check.id}
            className={`flex items-center justify-between p-2 border
              ${check.status === 'pending' ? 'border-white/5' :
                check.status === 'checking' ? 'border-white/20' :
                check.status === 'success' ? 'border-white/30' :
                'border-red-500/30'}`}
          >
            <div className="flex items-center gap-2">
              {check.status === 'pending' && (
                <div className="w-3 h-3 bg-white/10" />
              )}
              {check.status === 'checking' && (
                <Loader className="w-3 h-3 text-white/40 animate-spin" />
              )}
              {check.status === 'success' && (
                <Check className="w-3 h-3 text-white/60" />
              )}
              {check.status === 'error' && (
                <AlertCircle className="w-3 h-3 text-red-500/60" />
              )}
              <span className="text-[10px] text-white/60">{check.label}</span>
            </div>
            <span className="text-[8px] text-white/30">
              {check.status === 'pending' && '0'.repeat(8)}
              {check.status === 'checking' && 'CHECKING...'}
              {check.status === 'success' && 'OK'}
              {check.status === 'error' && 'ERROR'}
            </span>
          </div>
        ))}
      </div>

      <div className="text-[8px] text-white/20 text-center">
        {'0'.repeat(20)} {currentCheck?.label || 'INITIALIZING'} {'0'.repeat(20)}
      </div>
    </div>
  );
}