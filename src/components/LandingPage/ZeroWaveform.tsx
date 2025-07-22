import React, { useEffect, useRef } from 'react';

export default function ZeroWaveform() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 300;
    canvas.height = 100;

    let phase = 0;
    const amplitude = 30;
    const frequency = 0.05;

    function animate() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.beginPath();
      ctx.moveTo(0, canvas.height / 2);

      for (let x = 0; x < canvas.width; x++) {
        const y = canvas.height / 2 + 
                 Math.sin(x * frequency + phase) * amplitude * 
                 Math.sin(x * 0.02) * 
                 Math.cos(x * 0.01);
        
        ctx.lineTo(x, y);
        
        // Draw zeros along the wave
        if (x % 20 === 0) {
          ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1})`;
          ctx.fillText('0', x - 2, y);
        }
      }

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.stroke();

      phase += 0.05;
      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="mx-auto opacity-60"
    />
  );
}