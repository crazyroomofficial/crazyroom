import React from 'react';
import AsciiDisplay from '../AsciiDisplay';

const GUN_ASCII = `      ████████                                                                  
      ██▓▓    ██          ████████████████████████████                          
    ████████████████████████                          ██                        
    ██                    ██░░██████████████████████░░  ██      ██████          
    ██░░░░░░░░░░░░░░░░░░░░██░░██                  ████░░  ██  ██      ██        
    ██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██░░██░░████████████░░░░██░░██░░████░░░░████          
    ████████████████████████░░██░░▓▓▒▒▒▒▒▒▒▒▒▒██░░██░░  ████░░░░██              
        ██▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒██░░██░░████████████░░░░██░░░░████░░░░░░██            
          ██▒▒▒▒▒▒▒▒▒▒▒▒▒▒██░░██░░░░░░░░░░░░░░░░░░██░░▒▒██░░██░░░░██            
            ████████████████░░██▒▒████████████▒▒▒▒██▒▒▒▒██▒▒░░██████            
                          ██░░██████████████████████████▒▒▒▒▒▒▓▓▓▓▓▓██          
                            ██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░██▓▓▓▓██▓▓▓▓██        
                              ██████████████████████████░░██▓▓██░░██▓▓██        
                                  ██▒▒██  ██▒▒▒▒██  ██▒▒████▓▓▓▓██▓▓▓▓██        
                                  ██▒▒██  ██▒▒██    ██▒▒▒▒██▓▓▓▓▓▓▓▓▓▓▓▓██      
                                  ██░░░░████████████░░░░██  ██▓▓▓▓▓▓▓▓▓▓██      
                                    ██░░░░░░░░░░░░░░░░██    ██▓▓▓▓▓▓▓▓▓▓██      
                                      ████████████████      ██  ▓▓▓▓▓▓▓▓▓▓██    
                                                            ██  ▓▓▓▓██▓▓▓▓██    
                                                            ██  ▓▓██░░██▓▓██    
                                                            ██▓▓  ▓▓██▓▓▓▓██    
                                                            ██▓▓▓▓▓▓▓▓▓▓▓▓██    
                                                              ██▓▓▓▓▓▓▓▓██      
                                                         ████████`;

const GUN_DESCRIPTIONS = [
  "DIGITAL CHAOS LAUNCHER ARMED AND READY",
  "MEME CANNON LOADED WITH MAXIMUM WEIRDNESS",
  "REALITY DESTROYER 3000 FULLY OPERATIONAL",
  "SASS BLASTER SET TO MAXIMUM OVERDRIVE",
  "CHAOS WEAPON SYSTEM ONLINE AND DANGEROUS"
];

export default function ChaosWeapon() {
  return (
    <div className="space-y-8 flex flex-col items-center">
      <div className="max-w-4xl w-full">
        <div className="text-center space-y-4">
          <AsciiDisplay 
            art={GUN_ASCII} 
            className="text-[12px] text-white/90 leading-[1.2]" 
          />
          <div className="text-center text-[10px] text-white/30">
            {'0'.repeat(20)} CHAOS WEAPON SYSTEM {'0'.repeat(20)}
          </div>
        </div>
      </div>

      <div className="space-y-2 text-center border-t border-white/10 pt-4 w-full max-w-4xl">
        {GUN_DESCRIPTIONS.map((desc, index) => (
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