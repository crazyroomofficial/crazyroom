import React, { useState, useEffect, useRef } from 'react';
import { SYSTEM_MESSAGES } from '../constants/terminalResponses';
import { AVAILABLE_COMMANDS } from '../constants/commands';
import { generateCrazyResponse } from '../utils/crazyResponseGenerator';
import { TerminalState } from '../types/terminal';
import TerminalHeader from './TerminalHeader';
import TerminalInput from './TerminalInput';
import TerminalMessages from './TerminalMessages';
import TerminalDecoration from './TerminalDecoration';
import SystemStatus from './SystemStatus';
import MatrixBackground from './MatrixBackground';

export default function Terminal() {
  const [input, setInput] = useState("");
  const [conversation, setConversation] = useState<string[]>([]);
  const [isWaitingForResponse, setIsWaitingForResponse] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [state, setState] = useState<TerminalState>({
    status: '0000',
    memory: '0'.repeat(8),
    cycle: 0,
  });
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bootSequence = async () => {
      for (const message of SYSTEM_MESSAGES.boot) {
        setConversation(prev => [...prev, message]);
        await new Promise(resolve => setTimeout(resolve, 300));
      }
    };
    bootSequence();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setState(prev => ({
        ...prev,
        cycle: prev.cycle + 1,
        memory: '0'.repeat(8) + Math.floor(Math.random() * 99999999),
      }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isWaitingForResponse) return;

    setIsWaitingForResponse(true);

    // Show user message immediately
    const userMessage = `> ${input}`;
    setConversation(prev => [...prev, userMessage]);
    
    // Show typing indicator
    setIsTyping(true);
    
    const userInput = input;
    setInput(""); // Clear input immediately

    try {
      // Check if input is a command
      const command = AVAILABLE_COMMANDS.find(cmd => 
        userInput.toLowerCase().trim() === cmd.command.toLowerCase()
      );
      
      const response = command ? command.response : await generateCrazyResponse(userInput);

      // Hide typing indicator and add response
      setIsTyping(false);
      // Add response after generation
      setConversation(prev => [...prev, response]);
    } catch (error) {
      setIsTyping(false);
      setConversation(prev => [...prev, "000000 OOPS! MY BRAIN CRASHED BUT I'M STILL VIBING! TRY AGAIN BRO! 000000"]);
    } finally {
      setIsWaitingForResponse(false);
    }
    
    if (Math.random() > 0.8) {
      const warning = SYSTEM_MESSAGES.warning[
        Math.floor(Math.random() * SYSTEM_MESSAGES.warning.length)
      ];
      setTimeout(() => {
        setConversation(prev => [...prev, warning]);
      }, 300);
    }
    
    setState(prev => ({
      ...prev,
      status: Math.random() > 0.5 ? '0001' : '0002',
    }));
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [conversation]);

  return (
    <div className="relative min-h-screen bg-black p-4 font-mono">
      <MatrixBackground />
      <div className="relative max-w-3xl mx-auto">
        <TerminalHeader />
        <SystemStatus state={state} />
        <TerminalMessages conversation={conversation} isTyping={isTyping} bottomRef={bottomRef} />
        <TerminalInput 
          input={input} 
          setInput={setInput} 
          onSubmit={handleSubmit}
          isWaitingForResponse={isWaitingForResponse}
        />
        <TerminalDecoration />
      </div>
    </div>
  );
}