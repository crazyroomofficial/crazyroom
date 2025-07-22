import React from 'react';
import AsciiSection from '../../../shared/AsciiSection';
import { QUANTUM_ASCII, QUANTUM_DESCRIPTIONS } from './constants';

export default function QuantumProcessor() {
  return (
    <AsciiSection
      ascii={QUANTUM_ASCII}
      title="QUANTUM PROCESSING MATRIX"
      descriptions={QUANTUM_DESCRIPTIONS}
    />
  );
}