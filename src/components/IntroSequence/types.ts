export interface Phase {
  id: string;
  title: string;
  delay: number;
}

export interface SystemCheck {
  id: string;
  label: string;
  status: 'pending' | 'checking' | 'success' | 'error';
}