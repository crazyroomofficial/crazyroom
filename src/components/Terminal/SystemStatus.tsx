import React from 'react';
import { Cpu, Memory, Wifi } from 'lucide-react';
import { SystemHealth } from '../../types/terminal';

interface SystemStatusProps {
  health: SystemHealth;
}

export default function SystemStatus({ health }: SystemStatusProps) {
  return (
    <div className="grid grid-cols-3 gap-4 p-4 border border-white/10 bg-black/30">
      <MetricItem 
        icon={<Cpu className="w-3 h-3" />}
        label="CPU"
        value={health.cpu}
      />
      <MetricItem 
        icon={<Memory className="w-3 h-3" />}
        label="MEMORY"
        value={health.memory}
      />
      <MetricItem 
        icon={<Wifi className="w-3 h-3" />}
        label="NETWORK"
        value={health.network}
      />
    </div>
  );
}

interface MetricItemProps {
  icon: React.ReactNode;
  label: string;
  value: number;
}

function MetricItem({ icon, label, value }: MetricItemProps) {
  return (
    <div className="space-y-1">
      <div className="flex items-center gap-1 text-[10px] text-white/40">
        {icon}
        <span>{label}</span>
      </div>
      <div className="w-full bg-white/5 h-1">
        <div 
          className="h-full bg-white/30 transition-all duration-500"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}