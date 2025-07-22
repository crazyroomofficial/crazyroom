import React, { useEffect, useRef } from 'react';

export default function BinaryWave() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = 200;

    let phase = 0;
    const zeros = Array(50).fill('0');

    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.font = '12px monospace';

      for (let x = 0; x < canvas.width; x += 20) {
        const y = Math.sin(x * 0.02 + phase) * 50 + canvas.height / 2;
        const zero = zeros[Math.floor(Math.random() * zeros.length)];
        ctx.fillText(zero, x, y);
      }

      phase += 0.05;
      requestAnimationFrame(draw);
    }

    draw();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-1/2 left-0 transform -translate-y-1/2 opacity-30"
    />
  );
}