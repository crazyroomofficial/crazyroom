import { useMemo } from 'react';
import { BINARY_DESCRIPTIONS } from '../constants';

export function useBinaryDescriptions() {
  return useMemo(() => BINARY_DESCRIPTIONS, []);
}