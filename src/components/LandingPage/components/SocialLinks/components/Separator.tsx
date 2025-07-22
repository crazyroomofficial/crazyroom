import React from 'react';
import { DECORATIONS } from '../constants';

export default function Separator() {
  return (
    <div className="text-[10px] text-white/20">
      {'0'.repeat(DECORATIONS.SEPARATOR_LENGTH)}
    </div>
  );
}