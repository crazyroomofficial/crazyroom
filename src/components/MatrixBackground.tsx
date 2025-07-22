import React, { useEffect, useRef } from 'react';

export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const zeros = '0'.repeat(50).split('');
    const columns = canvas.width / 10;
    const drops: number[] = Array(Math.floor(columns)).fill(1);

    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#fff';
      ctx.font = '10px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = zeros[Math.floor(Math.random() * zeros.length)];
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.2})`;
        ctx.fillText(text, i * 10, drops[i] * 10);
        
        if (drops[i] * 10 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 33);
    return () => clearInterval(interval);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-20"
    />
  );
}