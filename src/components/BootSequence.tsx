"use client";

import React, { useState, useEffect } from "react";
import { useLocale } from "@/context/LocaleContext";

const ASCII_LINES = [
  "                 ..:---===---:..                 ",
  "            ..-==+**%@@@@@@@@%**+==..            ",
  "         .:-=+**%@@@@@@@@@@@@@@@@%**+=-:.         ",
  "       .-=+**%@@@@@@@@@@@@@@@@@@@@@@@@%**+-.       ",
  "     .-=+*%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%*=-.     ",
  "    .-+*%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%*-.    ",
  "   .-+*%@@@@@@@@@@@@@@@%****%@@@@@@@@@@@@@@@%*-.   ",
  "  .-+*%@@@@@@@@@@@@@%*+=::::=+*%@@@@@@@@@@@@@%*-.  ",
  "  -=*%@@@@@@@@@@@@%*=-::::::::-=%@@@@@@@@@@@@%*=-  ",
  " .-+*%@@@@@@@@@@@@%=-:::::::::::=%@@@@@@@@@@@@*+-. ",
  " .-+*%@@@@@@@@@@@@%=-:::::::::::=%@@@@@@@@@@@@*+-. ",
  " .-+*%@@@@@@@@@@@@%*=-::::::::-=%@@@@@@@@@@@@%*+-. ",
  " .-+*%@@@@@@@@@@@@@@%*+=::::=+*%@@@@@@@@@@@@@%*+-. ",
  "  -=*%@@@@@@@@@@@@@@@@@%****%@@@@@@@@@@@@@@@@%*=-  ",
  "  .-+*%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%*-.  ",
  "   .-+*%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%*-.   ",
  "    .-+*%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%*-.    ",
  "     .-=+*%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%*=-.     ",
  "       .-=+**%@@@@@@@@@@@@@@@@@@@@@@@@%**+-.       ",
  "         .:-=+**%@@@@@@@@@@@@@@@@@@%**+=-:.         ",
  "            ..-==+**%@@@@@@@@@@%**+==..            ",
  "                 ..:---===---:..                 "
];

interface BootSequenceProps {
  onComplete: () => void;
}

export default function BootSequence({ onComplete }: BootSequenceProps) {
  const { t } = useLocale();
  const [phase, setPhase] = useState<"grid" | "ascii" | "done">("grid");
  const [visibleLines, setVisibleLines] = useState<number>(0);

  // Skip animation completely
  const skip = React.useCallback(() => {
    setPhase("done");
    setVisibleLines(ASCII_LINES.length);
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    // Listen for skip events
    const handleSkip = () => {
      // Prevent skipping if it's an internal interaction we might not want to capture,
      // but generally any key or click should skip.
      skip();
    };

    window.addEventListener("keydown", handleSkip);
    window.addEventListener("pointerdown", handleSkip);
    window.addEventListener("touchstart", handleSkip);

    return () => {
      window.removeEventListener("keydown", handleSkip);
      window.removeEventListener("pointerdown", handleSkip);
      window.removeEventListener("touchstart", handleSkip);
    };
  }, [skip]);

  useEffect(() => {
    if (phase === "grid") {
      const timer = setTimeout(() => {
        setPhase("ascii");
      }, 800); // Wait for the scanline to pass
      return () => clearTimeout(timer);
    }

    if (phase === "ascii") {
      if (visibleLines < ASCII_LINES.length) {
        const timer = setTimeout(() => {
          setVisibleLines((prev) => prev + 1);
        }, 40); // Print speed
        return () => clearTimeout(timer);
      } else {
        // Ascii finished printing
        const timer = setTimeout(() => {
          setPhase("done");
          onComplete();
        }, 200); // brief pause before yielding control
        return () => clearTimeout(timer);
      }
    }
  }, [phase, visibleLines, onComplete]);

  // Once done, we technically shouldn't render the animation wrapper anymore,
  // but just in case, we render the final static version if phase === "done".
  if (phase === "done") {
    return null; // Will be unmounted by parent
  }

  return (
    <div className="absolute inset-0 z-50 bg-[#000000] text-[var(--terminal-green)] font-typewriter overflow-hidden select-none pointer-events-auto">
      
      {/* Grid phase: overlay matrix */}
      {phase === "grid" && (
        <div className="absolute inset-0 matrix-grid opacity-50">
          <div className="w-full h-[50vh] bg-gradient-to-b from-transparent via-[rgba(0,255,65,0.4)] to-transparent animate-scanline absolute top-0 left-0" />
        </div>
      )}

      {/* Terminal boot text & ASCII reveal */}
      <div className="absolute inset-0 p-6 md:p-12 space-y-4">
        
        {phase === "grid" && (
          <div className="opacity-80">
            <p>{t.terminal.bootLog1}</p>
            <p>{t.terminal.bootLog2}</p>
            <p>{t.terminal.bootLog3}</p>
          </div>
        )}

        {phase === "ascii" && (
          <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-16 items-start justify-start py-4">
            <div className="hidden md:block flex-shrink-0 text-[8px] lg:text-[10px] xl:text-[12px] leading-[1.1] text-[var(--terminal-pink)] opacity-90 whitespace-pre">
              {ASCII_LINES.slice(0, visibleLines).join("\n")}
            </div>
            
            {/* Identity block appears after half of ascii is printed to simulate system info load */}
            {visibleLines > ASCII_LINES.length / 2 && (
              <div className="flex-1 w-full max-w-2xl flex flex-col justify-center animate-pulse">
                <div className="mb-6">
                  <h1 className="[font-family:var(--font-gotfridus)] uppercase text-4xl lg:text-5xl text-[var(--text)] tracking-tight mb-2">
                    ALTAIR STAR
                  </h1>
                  <div className="[font-family:var(--font-gotfridus)] uppercase text-xl lg:text-2xl text-[var(--terminal-green)] tracking-tight leading-[1.1]">
                    NOT ALL THOSE WHO WANDER<br />ARE LOST
                  </div>
                </div>
                <div className="text-sm lg:text-base space-y-2">
                  <p><span className="text-[var(--terminal-pink)] mr-3">Host:</span> Randerson de Sá</p>
                  <p><span className="text-[var(--terminal-pink)] mr-3">OS:</span> Portfolio OS</p>
                  <p><span className="text-[var(--terminal-pink)] mr-3">Role:</span> {t.terminal.neofetch.role}</p>
                  <p><span className="text-[var(--terminal-pink)] mr-3">Focus:</span> {t.terminal.neofetch.focus}</p>
                  <p><span className="text-[var(--terminal-pink)] mr-3">Stack:</span> Flutter, Dart, Supabase, PostgreSQL, Next.js, Python</p>
                  <p><span className="text-[var(--terminal-pink)] mr-3">Status:</span> {t.terminal.neofetch.status}</p>
                  <p><span className="text-[var(--terminal-pink)] mr-3">Location:</span> {t.terminal.neofetch.location}</p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

    </div>
  );
}
