"use client";

import { useLocale } from "@/context/LocaleContext";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const { locale } = useLocale();

  return (
    <div className="w-full h-full flex flex-col pt-20 lg:pt-0 animate-in fade-in duration-500">
      <section 
        className="relative min-h-screen flex flex-col justify-center px-6 lg:px-16 bg-[#000000] text-white overflow-hidden bg-noise"
      >
        <div className="relative z-10 max-w-5xl">
          {/* Terminal Prompt */}
          <div className="font-mono text-xs md:text-sm text-[var(--accent-green)] mb-6 opacity-90 flex items-center gap-2">
            <span>www.randerson.dev:~$</span>
            <span className="text-white">open /profile</span>
            <span className="inline-block w-2 h-4 bg-[var(--accent-green)] animate-pulse" />
          </div>

          <div className="font-mono text-[10px] text-[var(--text-faint)] uppercase tracking-[0.2em] mb-4">
            MOBILE · WEB · DATA · AI
          </div>

          {/* ASCII / Terminal Art */}
          <div className="hidden md:block font-mono text-[8px] leading-none text-[var(--accent-magenta)] mb-8 opacity-70 select-none whitespace-pre">
{`
   _____               _                              _         _____   __
  |  __ \\             | |                            | |       / ____| /_/
  | |__) |__ _  _ __  | |  __ _  _ __   ___   ___  _ | |      | (___   __ _ 
  |  _  // _\` || '_ \\ | | / _\` || '_ \\ / __| / _ \\| '_ \\      \\___ \\ / _\` |
  | | \\ \\ (_| || | | || || (_| || | | |\\__ \\| (_) | | | |     ____) | (_| |
  |_|  \\_\\__,_||_| |_||_| \\__,_||_| |_||___/ \\___/|_| |_|    |_____/ \\__,_|
                                                                           
`}
          </div>

          {/* Gothic Phrase */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-[7rem] leading-[0.85] text-white tracking-tight relative mb-12">
            <span className="block hover:text-[var(--text-soft)] transition-colors">NOT ALL THOSE</span>
            <span className="block hover:text-[var(--text-soft)] transition-colors">WHO WANDER</span>
            <span className="flex items-center gap-4 hover:text-[var(--text-soft)] transition-colors">
              <span className="inline-block w-12 h-12 md:w-16 md:h-16 bg-[var(--accent-green)] shadow-[var(--shadow-green)]"></span>
              ARE LOST
            </span>
          </h1>

          {/* Terminal Block Secondary */}
          <div className="font-mono text-xs md:text-sm text-[var(--text-muted)] border-l-2 border-[var(--border-strong)] pl-4 py-2 mb-12 space-y-1">
            <p><span className="text-[var(--accent-magenta)]">Host:</span> Randerson de Sá</p>
            <p><span className="text-[var(--accent-magenta)]">Role:</span> Developer in Training</p>
            <p><span className="text-[var(--accent-magenta)]">Focus:</span> Mobile, Backend, Data, Applied AI</p>
            <p><span className="text-[var(--accent-magenta)]">Stack:</span> Flutter, Dart, Supabase, PostgreSQL, Next.js, Python</p>
            <p><span className="text-[var(--accent-green)]">Status:</span> open to internships</p>
            <p><span className="text-[var(--accent-green)]">Location:</span> Brazil</p>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/me" className="button-primary w-fit">
              {locale === "pt" ? "VER PERFIL" : "VIEW PROFILE"} <ArrowUpRight className="ml-2 w-4 h-4" />
            </Link>
            <Link href="/craft" className="button-secondary w-fit">
              {locale === "pt" ? "VER PROJETOS" : "SEE PROJECTS"} <span className="ml-2">↘</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}