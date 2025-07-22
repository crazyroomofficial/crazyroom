import React from 'react';
import { useTerminal } from './hooks/useTerminal';
import TerminalHeader from './TerminalHeader';
import TerminalInput from './TerminalInput';
import TerminalMessages from './TerminalMessages';
import TerminalDecoration from './TerminalDecoration';
import SystemStatus from './SystemStatus';
import MatrixBackground from '../shared/MatrixBackground';

export default function Terminal() {
  const { 
    input, 
    setInput, 
    conversation, 
    isTyping,
    isWaitingForResponse,
    systemHealth,
    handleSubmit, 
    bottomRef 
  } = useTerminal();

  return (
    <div className="relative min-h-screen bg-black p-4 font-mono">
      <MatrixBackground />
      <div className="relative max-w-3xl mx-auto space-y-4">
        <TerminalHeader />
        <SystemStatus health={systemHealth} />
        <TerminalMessages conversation={conversation} isTyping={isTyping} bottomRef={bottomRef} />
        <TerminalInput 
          input={input} 
          setInput={setInput} 
          onSubmit={handleSubmit} 
          disabled={isWaitingForResponse}
          isWaitingForResponse={isWaitingForResponse}
          placeholder="Tell me a shit nonsense"
        />
        <TerminalDecoration />
      </div>
    </div>
  );
}