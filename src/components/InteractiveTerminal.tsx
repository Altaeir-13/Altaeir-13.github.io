"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { terminalCommands, getCommand } from "@/lib/terminalCommands";
import { useLocale } from "@/context/LocaleContext";
import BootSequence from "@/components/BootSequence";

interface HistoryEntry {
  command: string;
  output: React.ReactNode;
  color?: string;
}

export default function InteractiveTerminal() {
  const router = useRouter();
  const { locale, t } = useLocale();
  const [isMounted, setIsMounted] = useState(false);
  const [hasBooted, setHasBooted] = useState(false);
  
  const [history, setHistory] = useState<HistoryEntry[]>(() => [
    {
      command: "neofetch",
      output: terminalCommands.neofetch([], router, t, locale),
      color: "var(--terminal-command-valid)",
    },
  ]);
  const [input, setInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
    const skipBoot = 
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      sessionStorage.getItem('portfolioBootSeen') === 'true';

    if (skipBoot) {
      setHasBooted(true);
    }
  }, []);

  useEffect(() => {
    if (hasBooted && isMounted) {
      inputRef.current?.focus();
    }
  }, [hasBooted, isMounted]);

  const handleContainerClick = () => {
    if (hasBooted) {
      inputRef.current?.focus();
    }
  };

  useEffect(() => {
    if (hasBooted) {
      endRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [history, hasBooted]);

  const handleBootComplete = () => {
    sessionStorage.setItem('portfolioBootSeen', 'true');
    setHasBooted(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.ctrlKey && e.key.toLowerCase() === "c") {
      e.preventDefault();
      setHistory((prev) => [...prev, { command: input + "^C", output: null, color: "var(--terminal-command-invalid)" }]);
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
      const availableCmds = Object.keys(terminalCommands).filter(c => !c.includes(" "));
      const matches = availableCmds.filter((cmd) => cmd.startsWith(input.toLowerCase()));
      if (matches.length === 1) {
        setInput(matches[0]);
      } else if (matches.length > 1) {
        setHistory((prev) => [
          ...prev, 
          { 
            command: input, 
            output: <div className="text-[var(--terminal-output)]">{matches.join("  ")}</div>,
            color: "var(--terminal-command-valid)"
          }
        ]);
      }
    }
  };

  const executeCommand = (cmdStr: string) => {
    if (!cmdStr) {
      setHistory((prev) => [...prev, { command: "", output: null, color: "var(--terminal-command-valid)" }]);
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

    // Try finding exact match or alias
    const handler = getCommand(cmdStr);
    let output: React.ReactNode;
    let color = "var(--terminal-command-valid)";

    if (handler) {
      const args = cmdStr.split(" ").slice(1);
      output = handler(args, router, t, locale);
    } else {
      color = "var(--terminal-command-invalid)";
      output = (
        <div className="text-[var(--terminal-command-invalid)]">
          {t.terminal.notFound} {cmdStr}<br />
          {t.terminal.typeHelp}
        </div>
      );
    }

    setHistory((prev) => [...prev, { command: cmdStr, output, color }]);
  };

  const isCommandValid = input.trim() === "" || !!getCommand(input);
  const inputColor = isCommandValid ? "var(--terminal-command-valid)" : "var(--terminal-command-invalid)";

  if (!isMounted) {
    return <div className="w-full min-h-screen bg-transparent" />;
  }

  return (
    <div 
      className="w-full min-h-screen flex flex-col bg-transparent text-[var(--terminal-output)] font-typewriter text-sm md:text-base cursor-text overflow-hidden relative"
      onClick={handleContainerClick}
    >
      {!hasBooted && (
        <BootSequence onComplete={handleBootComplete} />
      )}

      {hasBooted && (
        <>
          <div className="flex-1 overflow-y-auto px-6 py-6 md:px-12 md:py-12 space-y-4">
            {history.map((entry, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex flex-wrap gap-2 text-[var(--terminal-prompt)]">
                  <span>www.randerson.dev:~$</span>
                  <span style={{ color: entry.color || "var(--terminal-command-valid)" }}>{entry.command}</span>
                </div>
                {entry.output && <div className="mb-4">{entry.output}</div>}
              </div>
            ))}

            <div className="flex flex-wrap gap-2 text-[var(--terminal-prompt)] items-center">
              <span>www.randerson.dev:~$</span>
              <div className="relative flex-1 min-w-[200px]">
                <span style={{ color: inputColor }} className="break-all">{input}</span>
                <span className="inline-block w-2 h-4 bg-[var(--terminal-prompt)] animate-pulse align-middle ml-1" />
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
          <div className="w-full px-6 py-4 md:px-12 font-typewriter text-xs md:text-sm text-[var(--terminal-prompt)] flex flex-wrap gap-2 opacity-70 border-t border-[var(--border)] shrink-0">
            <span>www.randerson.dev:~$</span>
            <span className="text-[var(--terminal-prompt)]">{t.terminal.sidebarPrompt}</span>
          </div>
        </>
      )}
    </div>
  );
}
