import React from 'react';
import { useZeroRain } from './hooks/useZeroRain';

export default function ZeroRain() {
  const canvasRef = useZeroRain();

  return (
    <canvas
      ref={canvasRef}
      className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-30"
      width="200"
      height="400"
    />
  );
}