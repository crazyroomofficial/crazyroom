import { useState, useEffect, useRef } from 'react';
import { SYSTEM_MESSAGES } from '../../../constants/terminalResponses';
import { TerminalState, Command, SystemHealth } from '../../../types/terminal';
import { AVAILABLE_COMMANDS } from '../../../constants/commands';
import { generateCrazyResponse } from '../../../utils/crazyResponseGenerator';

export function useTerminal() {
  const [input, setInput] = useState("");
  const [conversation, setConversation] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isWaitingForResponse, setIsWaitingForResponse] = useState(false);
  const [state, setState] = useState<TerminalState>({
    status: '0000',
    memory: '0'.repeat(8),
    cycle: 0,
  });
  const [systemHealth, setSystemHealth] = useState<SystemHealth>({
    cpu: Math.random() * 100,
    memory: Math.random() * 100,
    network: Math.random() * 100,
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
      
      setSystemHealth({
        cpu: Math.random() * 100,
        memory: Math.random() * 100,
        network: Math.random() * 100,
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCommandClick = (command: string) => {
    setInput(command);
  };

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
      // Handle special commands
      const command = AVAILABLE_COMMANDS.find(cmd => cmd.command === userInput);
      let response;
      
      if (command) {
        response = command.response;
      } else {
        // Generate a crazy response based on user input
        response = await generateCrazyResponse(userInput);
      }
      
      // Hide typing indicator and add response
      setIsTyping(false);
      setConversation(prev => [...prev, response]);
      
      if (Math.random() > 0.8) {
        const warning = SYSTEM_MESSAGES.warning[
          Math.floor(Math.random() * SYSTEM_MESSAGES.warning.length)
        ];
        // Add warning after a short delay
        setTimeout(() => {
          setConversation(prev => [...prev, warning]);
        }, 300);
      }
    } catch (error) {
      setIsTyping(false);
      setConversation(prev => [...prev, "000000 OOPS! MY BRAIN CRASHED BUT I'M STILL VIBING! TRY AGAIN BRO! 000000"]);
    } finally {
      setIsWaitingForResponse(false);
    }

    setState(prev => ({
      ...prev,
      status: Math.random() > 0.5 ? '0001' : '0002',
    }));
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [conversation, isTyping]);

  return {
    input,
    setInput,
    conversation,
    isTyping,
    isWaitingForResponse,
    state,
    handleSubmit,
    bottomRef,
    availableCommands: AVAILABLE_COMMANDS,
    handleCommandClick,
    systemHealth,
  };
}