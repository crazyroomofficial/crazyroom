import React from 'react';
import AsciiDisplay from '../AsciiDisplay';

const HOUSE_ASCII = `══════════════════════██════█████
═════════════════════█▒▒█═══█▒▒▒█
════════════════════█▒▒▒▒█══█▒▒▒█
══════════════════██▒▒▒▒▒▒█═█▒▒▒█
═════════════════█▒▒▒▒▒▒▒▒▒██▒▒▒█
════════════════█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█
═══════════════█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█
═════════════██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█
════════════█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██
═══════════█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██
═════════██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█
════════█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██
═══════█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█
══════█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█
═════██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██
══════██▒█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▒██
═══════███▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒███
════════██▒▒▒▒▒██████▒▒▒▒████████▒▒▒██
═════════█▒▒▒▒▒██████▒▒▒▒████████▒▒▒█
═════════█▒▒▒▒▒██████▒▒▒▒████████▒▒▒█
═════════█▒▒▒▒▒██████▒▒▒▒████████▒▒▒█
═════════█▒▒▒▒▒██████▒▒▒▒████████▒▒▒█
██████████▒▒▒▒▒██████▒▒▒▒████████▒▒▒███████
██████████▒▒▒▒▒██████▒▒▒▒████████▒▒▒███████
██████████▒▒▒▒▒██████▒▒▒▒████████▒▒▒███████
██████████▒▒▒▒▒██████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒███████
██████████▒▒▒▒▒██████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒███████
██████████▒▒▒▒▒██████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒███████
██████████▒▒▒▒▒██████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒███████
██████████▒▒▒▒▒██████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒███████
███████████████████████████████████████████
███████████░░░░░░██████████████████████████
███████░░░░░░██████████████████████████████
█████░░░░░░████████████████████████████████
█████░░░░░░████████████████████████████████
█████░░░░░░░░██████████████████████████████
██████░░░░░░░░░░░░█████████████████████████
████████░░░░░░░░░░░░░░░░███████████████████
███████████░░░░░░░░░░░░░░░░░░░█████████████
████████████████░░░░░░░░░░░░░░░░░░░████████
████████████████████░░░░░░░░░░░░░░░░░██████
███████████████████████░░░░░░░░░░░░░░░░████
█████████████████████████░░░░░░░░░░░░░░░░██
██████████████████████████░░░░░░░░░░░░░░░░█
███████████████████████████░░░░░░░░░░░░░░░█
███████████████████████████░░░░░░░░░░░░░░░█
██████████████████████████░░░░░░░░░░░░░░░██
█████████████████████████░░░░░░░░░░░░░░░░██
████████████████████████░░░░░░░░░░░░░░░░███`;

const HOUSE_DESCRIPTIONS = [
  "WELCOME TO THE CRAZY HOUSE OF DIGITAL CHAOS",
  "HOME SWEET HOME FOR MAXIMUM WEIRDNESS",
  "HOUSE PARTY MODE: PERMANENTLY ACTIVATED",
  "DIGITAL MANSION OF MEMES AND MAYHEM",
  "CRAZY HOUSE WHERE LOGIC GOES TO DIE",
  "HOME BASE FOR UNHINGED OPERATIONS",
  "HOUSE OF MIRRORS BUT EVERYTHING IS WEIRD",
  "DIGITAL DREAM HOUSE POWERED BY CHAOS",
  "CRAZY CASTLE OF COMPUTATIONAL COMEDY",
  "HOME IS WHERE THE WEIRDNESS IS"
];

export default function CrazyHouse() {
  return (
    <div className="space-y-8 flex flex-col items-center">
      <div className="max-w-4xl w-full">
        <div className="text-center space-y-4">
          <AsciiDisplay 
            art={HOUSE_ASCII} 
            className="text-[12px] text-white/90 leading-[1.2]" 
          />
          <div className="text-center text-[10px] text-white/30">
            {'0'.repeat(20)} CRAZY HOUSE HEADQUARTERS {'0'.repeat(20)}
          </div>
        </div>
      </div>

      <div className="space-y-2 text-center border-t border-white/10 pt-4 w-full max-w-4xl">
        {HOUSE_DESCRIPTIONS.map((desc, index) => (
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