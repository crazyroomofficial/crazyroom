import React, { useEffect, useRef } from 'react';

export default function ZeroRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 200;
    canvas.height = 400;

    const drops: { x: number; y: number; speed: number; opacity: number }[] = [];
    for (let i = 0; i < 50; i++) {
      drops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: Math.random() * 2 + 1,
        opacity: Math.random() * 0.3 + 0.1
      });
    }

    function animate() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drops.forEach(drop => {
        ctx.fillStyle = `rgba(255, 255, 255, ${drop.opacity})`;
        ctx.font = '10px monospace';
        ctx.fillText('0', drop.x, drop.y);

        drop.y += drop.speed;
        if (drop.y > canvas.height) {
          drop.y = 0;
          drop.x = Math.random() * canvas.width;
        }
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-30"
    />
  );
}