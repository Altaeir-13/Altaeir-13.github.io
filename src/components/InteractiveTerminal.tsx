"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { terminalCommands } from "@/lib/terminalCommands";

interface HistoryEntry {
  command: string;
  output: React.ReactNode;
}

export default function InteractiveTerminal() {
  const router = useRouter();
  const [history, setHistory] = useState<HistoryEntry[]>(() => [
    {
      command: "neofetch",
      output: terminalCommands.neofetch([], router),
    },
  ]);
  const [input, setInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  // Focus input on load and when clicking the terminal body
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleContainerClick = () => {
    inputRef.current?.focus();
  };

  // Scroll to bottom when history changes
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      executeCommand(input.trim());
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex + 1 < commandHistory.length ? historyIndex + 1 : historyIndex;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex] || "");
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex] || "");
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const availableCmds = Object.keys(terminalCommands);
      const match = availableCmds.find((cmd) => cmd.startsWith(input.toLowerCase()));
      if (match) {
        setInput(match);
      }
    }
  };

  const executeCommand = (cmdStr: string) => {
    if (!cmdStr) {
      setHistory((prev) => [...prev, { command: "", output: null }]);
      return;
    }

    const newCommandHistory = [...commandHistory, cmdStr];
    setCommandHistory(newCommandHistory);
    setHistoryIndex(-1);
    setInput("");

    const lowerCmd = cmdStr.toLowerCase();
    
    if (lowerCmd === "clear" || lowerCmd === "cls") {
      setHistory([]);
      return;
    }

    const handler = terminalCommands[lowerCmd];
    let output: React.ReactNode;

    if (handler) {
      const args = cmdStr.split(" ").slice(1);
      output = handler(args, router);
    } else {
      output = (
        <div className="text-red-400">
          Command not found: {cmdStr}<br />
          Type <span className="text-[var(--accent-green)]">help</span> to see available commands.
        </div>
      );
    }

    setHistory((prev) => [...prev, { command: cmdStr, output }]);
  };

  return (
    <div 
      className="w-full min-h-screen flex flex-col bg-[#000000] text-white font-mono text-sm md:text-base cursor-text overflow-hidden"
      onClick={handleContainerClick}
    >
      <div className="flex-1 overflow-y-auto px-6 py-6 md:px-12 md:py-12 space-y-4">
        {history.map((entry, idx) => (
          <div key={idx} className="space-y-2">
            <div className="flex flex-wrap gap-2 text-[var(--accent-green)]">
              <span>www.randerson.dev:~$</span>
              <span className="text-white">{entry.command}</span>
            </div>
            {entry.output && <div className="mb-4">{entry.output}</div>}
          </div>
        ))}

        <div className="flex flex-wrap gap-2 text-[var(--accent-green)] items-center">
          <span>www.randerson.dev:~$</span>
          <div className="relative flex-1 min-w-[200px]">
            <span className="text-white break-all">{input}</span>
            <span className="inline-block w-2 h-4 bg-[var(--accent-green)] animate-pulse align-middle ml-1" />
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="absolute inset-0 opacity-0 cursor-text w-full"
              autoFocus
              aria-label="Terminal input"
              autoComplete="off"
              spellCheck="false"
            />
          </div>
        </div>
        <div ref={endRef} />
      </div>

      {/* Bottom Prompt */}
      <div className="w-full px-6 py-4 md:px-12 font-mono text-xs md:text-sm text-[var(--accent-green)] flex flex-wrap gap-2 opacity-70 border-t border-[var(--border)] shrink-0">
        <span>www.randerson.dev:~$</span>
        <span className="text-[var(--text-soft)]">use sidebar to explore the archive or type help ...</span>
      </div>
    </div>
  );
}
