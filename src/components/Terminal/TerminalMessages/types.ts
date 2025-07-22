export interface MessageItemProps {
  message: string;
}

export interface MessagesProps {
  conversation: string[];
  isTyping: boolean;
  bottomRef: React.RefObject<HTMLDivElement>;
}