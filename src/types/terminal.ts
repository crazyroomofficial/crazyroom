export interface TerminalState {
  status: '0000' | '0001' | '0002' | '0003';
  memory: string;
  cycle: number;
}

export interface SystemMessage {
  type: 'error' | 'warning' | 'info' | 'success';
  content: string;
}

export interface Command {
  id: string;
  command: string;
  description: string;
  category: 'system' | 'power' | 'security' | 'data' | 'monitor';
  response: string;
}

export interface SystemHealth {
  cpu: number;
  memory: number;
  network: number;
}