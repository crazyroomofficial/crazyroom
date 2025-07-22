export function getMessageStyle(message: string): string {
  if (message.startsWith('>')) {
    return 'text-white/30';
  }
  if (message.includes('ERROR')) {
    return 'text-red-500/70';
  }
  if (message.includes('WARNING')) {
    return 'text-yellow-500/70';
  }
  return 'text-white/70';
}