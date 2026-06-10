"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { terminalCommands } from "@/lib/terminalCommands";

interface HistoryEntry {
  command: string;
  output: React.ReactNode;
  color?: string;
}

export default function InteractiveTerminal() {
  const router = useRouter();
  const [history, setHistory] = useState<HistoryEntry[]>(() => [
    {
      command: "neofetch",
      output: terminalCommands.neofetch([], router),
      color: "var(--terminal-green)",
    },
  ]);
  const [input, setInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleContainerClick = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.ctrlKey && e.key.toLowerCase() === "c") {
      e.preventDefault();
      setHistory((prev) => [...prev, { command: input + "^C", output: null, color: "var(--terminal-pink)" }]);
      setInput("");
      setHistoryIndex(-1);
      return;
    }
    
    if (e.ctrlKey && e.key.toLowerCase() === "l") {
      e.preventDefault();
      setHistory([]);
      return;
    }

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
      const matches = availableCmds.filter((cmd) => cmd.startsWith(input.toLowerCase()));
      if (matches.length === 1) {
        setInput(matches[0]);
      } else if (matches.length > 1) {
        setHistory((prev) => [
          ...prev, 
          { 
            command: input, 
            output: <div className="text-[var(--terminal-green)]">{matches.join("  ")}</div>,
            color: "var(--terminal-green)"
          }
        ]);
      }
    }
  };

  const executeCommand = (cmdStr: string) => {
    if (!cmdStr) {
      setHistory((prev) => [...prev, { command: "", output: null, color: "var(--terminal-green)" }]);
      return;
    }

    const newCommandHistory = [...commandHistory, cmdStr];
    setCommandHistory(newCommandHistory);
    setHistoryIndex(-1);
    setInput("");

    const baseCmd = cmdStr.split(" ")[0].toLowerCase();
    const lowerCmd = cmdStr.toLowerCase();
    
    if (lowerCmd === "clear" || lowerCmd === "cls") {
      setHistory([]);
      return;
    }

    // Try finding exact match or alias
    const handler = terminalCommands[lowerCmd] || terminalCommands[baseCmd];
    let output: React.ReactNode;
    let color = "var(--terminal-green)";

    if (handler) {
      const args = cmdStr.split(" ").slice(1);
      output = handler(args, router);
    } else {
      color = "var(--terminal-pink)";
      output = (
        <div className="text-[var(--terminal-pink)]">
          Command not found: {cmdStr}<br />
          Type <span className="text-[var(--terminal-green)]">help</span> to see available commands.
        </div>
      );
    }

    setHistory((prev) => [...prev, { command: cmdStr, output, color }]);
  };

  const baseCmdInput = input.trim().split(" ")[0].toLowerCase();
  const isCommandValid = input.trim() === "" || !!terminalCommands[input.trim().toLowerCase()] || !!terminalCommands[baseCmdInput];
  const inputColor = isCommandValid ? "var(--terminal-green)" : "var(--terminal-pink)";

  return (
    <div 
      className="w-full min-h-screen flex flex-col bg-[#000000] text-[var(--terminal-green)] font-typewriter text-sm md:text-base cursor-text overflow-hidden"
      onClick={handleContainerClick}
    >
      <div className="flex-1 overflow-y-auto px-6 py-6 md:px-12 md:py-12 space-y-4">
        {history.map((entry, idx) => (
          <div key={idx} className="space-y-2">
            <div className="flex flex-wrap gap-2 text-[var(--terminal-green)]">
              <span>www.randerson.dev:~$</span>
              <span style={{ color: entry.color || "var(--terminal-green)" }}>{entry.command}</span>
            </div>
            {entry.output && <div className="mb-4">{entry.output}</div>}
          </div>
        ))}

        <div className="flex flex-wrap gap-2 text-[var(--terminal-green)] items-center">
          <span>www.randerson.dev:~$</span>
          <div className="relative flex-1 min-w-[200px]">
            <span style={{ color: inputColor }} className="break-all">{input}</span>
            <span className="inline-block w-2 h-4 bg-[var(--terminal-green)] animate-pulse align-middle ml-1" />
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
      <div className="w-full px-6 py-4 md:px-12 font-typewriter text-xs md:text-sm text-[var(--terminal-green)] flex flex-wrap gap-2 opacity-70 border-t border-[var(--border)] shrink-0">
        <span>www.randerson.dev:~$</span>
        <span className="text-[var(--terminal-green)]">use sidebar to explore the archive or type help ...</span>
      </div>
    </div>
  );
}
