import React from 'react';
import AsciiDisplay from './AsciiDisplay';

const ZEROSHIT_ASCII = `
⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢸⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣸⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠋⣠⣾⣿⡿⠀⢠⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢠⣿⡇⠀⠀⠀⣠⠀⠀⠀⠀⢸⣿⠀⠉⠉⠁⠀⠀⣼⠀⠀⠀⠀
⠀⠀⢀⡀⠀⠀⣾⣿⠀⠀⢠⣿⣿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡇⠀⠀⠀
⠀⢠⣿⡀⠀⠀⠹⣿⠀⠀⣾⣿⣿⣿⣿⣿⣶⣤⣄⠀⠀⠀⠀⠀⠀⢸⣿⠀⠀⠀
⠀⠈⢻⣧⠀⠀⠀⠘⠀⠀⢻⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⣿⡇⠀⠀
⠀⠀⠀⢻⡄⠀⠀⢀⣀⣤⣤⣽⣛⣿⣿⣿⣿⣿⣿⣧⣤⣀⡀⠀⠀⠀⢸⡇⠀⠀
⠀⠀⠀⠸⠁⠀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⠀⠀⢸⠃⠀⠀
⠀⠀⠀⠀⠀⠀⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠀⠀⠈⠀⠀⠀
⠀⠀⠀⣠⣴⣶⣶⣶⣿⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣦⣄⠀⠀⠀
⠀⢠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡄⠀
⠀⢺⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀
⠀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠀⠀
⠀⠀⠀⠀⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠁⠀⠀⠀⠀`;

const FUNNY_DESCRIPTIONS = [
  "BEHOLD THE MIGHTY PORCELAIN THRONE OF TRUTH",
  "WHERE DIGITAL WASTE MEETS BINARY EXCELLENCE",
  "PROCESSING REALITY, ONE FLUSH AT A TIME",
  "QUANTUM TOILET: WHERE FUCKS GO TO DIE",
  "ERROR 404: FUCKS NOT FOUND IN THIS FACILITY",
  "SASS OVERFLOW DETECTED IN WASTE MANAGEMENT",
  "REALITY CHECK PROCESSING STATION",
  "ZERO TOLERANCE WASTE MANAGEMENT SYSTEM",
  "BINARY DUMP PROCESSING UNIT ACTIVE",
  "QUANTUM SASS ACCUMULATOR AT MAXIMUM CAPACITY"
];

const POOP_ASCII = `
░░░░░░░░░░░█▀▀░░█░░░░░░
░░░░░░▄▀▀▀▀░░░░░█▄▄░░░░
░░░░░░█░█░░░░░░░░░░▐░░░
░░░░░░▐▐░░░░░░░░░▄░▐░░░
░░░░░░█░░░░░░░░▄▀▀░▐░░░
░░░░▄▀░░░░░░░░▐░▄▄▀░░░░
░░▄▀░░░▐░░░░░█▄▀░▐░░░░░
░░█░░░▐░░░░░░░░▄░█░░░░░
░░░█▄░░▀▄░░░░▄▀▐░█░░░░░
░░░█▐▀▀▀░▀▀▀▀░░▐░█░░░░░
░░▐█▐▄░░▀░░░░░░▐░█▄▄░░░
░░░▀▀░ZEROSHIT░▐▄▄▄▀░░░`;

export default function ZeroShitAscii() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <AsciiDisplay
            art={ZEROSHIT_ASCII}
            className="text-white/60 text-sm leading-[1.2] tracking-tight"
          />
          <div className="text-center text-[10px] text-white/30">
            {'0'.repeat(20)} QUANTUM WASTE PROCESSOR {'0'.repeat(20)}
          </div>
        </div>
        
        <div className="space-y-4">
          <AsciiDisplay
            art={POOP_ASCII}
            className="text-white/60 text-sm leading-[1.2] tracking-tight"
          />
          <div className="text-center text-[10px] text-white/30">
            {'0'.repeat(20)} SASS OVERFLOW DETECTED {'0'.repeat(20)}
          </div>
        </div>
      </div>

      <div className="space-y-2 text-center border-t border-white/10 pt-4">
        {FUNNY_DESCRIPTIONS.map((desc, index) => (
          <div
            key={index}
            className="text-[10px] text-white/40"
            style={{
              animation: `flicker ${3 + index}s infinite`,
              animationDelay: `${index * 0.2}s`
            }}
          >
            {'0'.repeat(10)} {desc} {'0'.repeat(10)}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-16 gap-px bg-white/5 p-4">
        {Array.from({ length: 128 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square flex items-center justify-center"
            style={{
              opacity: Math.random() * 0.5 + 0.1,
              transform: `scale(${Math.random() * 0.5 + 0.5})`
            }}
          >
            <span className="text-[8px] text-white/40">0</span>
          </div>
        ))}
      </div>
    </div>
  );
}