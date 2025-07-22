import React from 'react';

interface MetricBarProps {
  icon: React.ReactNode;
  label: string;
  value: number;
}

export default function MetricBar({ icon, label, value }: MetricBarProps) {
  return (
    <div className="space-y-1">
      <div className="flex items-center gap-1 text-white/40">
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