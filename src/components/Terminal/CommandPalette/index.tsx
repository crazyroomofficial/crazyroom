import React from 'react';
import { Command } from '../../../types/terminal';
import { Terminal as TerminalIcon, Zap, Shield, Database, Activity } from 'lucide-react';

const COMMAND_ICONS = {
  system: TerminalIcon,
  power: Zap,
  security: Shield,
  data: Database,
  monitor: Activity
};

interface CommandPaletteProps {
  commands: Command[];
  onCommandClick: (command: string) => void;
}

export default function CommandPalette({ commands, onCommandClick }: CommandPaletteProps) {
  return (
    <div className="border border-white/10 bg-black/50 backdrop-blur-sm p-4 h-full">
      <div className="text-[10px] text-white/40 mb-2">
        {'0'.repeat(20)} AVAILABLE COMMANDS {'0'.repeat(20)}
      </div>
      <div className="space-y-2">
        {commands.map((cmd) => {
          const Icon = COMMAND_ICONS[cmd.category] || TerminalIcon;
          return (
            <button
              key={cmd.id}
              onClick={() => onCommandClick(cmd.command)}
              className="w-full text-left p-2 hover:bg-white/5 transition-colors group border border-white/5 hover:border-white/20"
            >
              <div className="flex items-center gap-2">
                <Icon className="w-3 h-3 text-white/40 group-hover:text-white/60" />
                <span className="text-[10px] text-white/60 group-hover:text-white/80">
                  {cmd.command}
                </span>
              </div>
              <div className="mt-1 text-[8px] text-white/30">
                {cmd.description}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}