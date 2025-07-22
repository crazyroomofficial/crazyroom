import React, { useEffect, useRef } from 'react';

export default function ZeroMatrix() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 2;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const columns = Math.floor(canvas.width / 14);
    const rows = Math.floor(canvas.height / 14);
    const matrix: string[][] = Array(rows).fill(0).map(() => 
      Array(columns).fill('0')
    );
    
    let frame = 0;

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      frame++;

      for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
          const opacity = Math.sin((i + j + frame) * 0.01) * 0.5 + 0.5;
          ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.3})`;
          ctx.font = '12px monospace';
          ctx.fillText(matrix[j][i], i * 14, j * 14);
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.15 }}
    />
  );
}