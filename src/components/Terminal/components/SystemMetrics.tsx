import React from 'react';
import { Cpu, Memory, Wifi } from 'lucide-react';
import { SystemHealth } from '../../../types/terminal';
import MetricBar from './MetricBar';

interface SystemMetricsProps {
  health: SystemHealth;
}

export default function SystemMetrics({ health }: SystemMetricsProps) {
  return (
    <div className="grid grid-cols-3 gap-4 text-[10px]">
      <MetricBar 
        icon={<Cpu className="w-3 h-3" />}
        label="CPU"
        value={health.cpu}
      />
      <MetricBar 
        icon={<Memory className="w-3 h-3" />}
        label="MEMORY"
        value={health.memory}
      />
      <MetricBar 
        icon={<Wifi className="w-3 h-3" />}
        label="NETWORK"
        value={health.network}
      />
    </div>
  );
}