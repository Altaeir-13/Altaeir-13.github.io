import React from "react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export type CommandHandler = (args: string[], router: AppRouterInstance) => React.ReactNode | string | null;

export const terminalCommands: Record<string, CommandHandler> = {
  help: () => (
    <div className="text-[var(--text-soft)]">
      Available commands:<br />
      <span className="text-[var(--accent-green)]">about, banner, curiosity, date, donate, email, github, help, linkedin, clear, neofetch, projects, repos, snake, sudo, team, vi, vim, weather, whoami</span>
      <br /><br />
      <span className="text-[var(--accent-magenta)]">Aliases:</span> me, craft, skills, contact, cls
    </div>
  ),

  about: () => (
    <div className="text-[var(--text-soft)]">
      Randerson de Sá is a developer in training focused on mobile, backend, data and applied AI.<br />
      This portfolio works as a personal archive of projects, skills and experiments.
    </div>
  ),

  whoami: () => (
    <div className="text-[var(--text-soft)] leading-relaxed">
      <span className="text-[var(--accent-green)]">randerson</span><br />
      Developer in Training<br />
      Focus: Mobile, Backend, Data, Applied AI<br />
      Location: Brazil
    </div>
  ),
  
  "who am i": () => terminalCommands.whoami([], {} as AppRouterInstance), // Alias

  banner: () => (
    <div className="mb-4">
      <h1 className="[font-family:var(--font-gotfridus)] uppercase text-4xl lg:text-5xl text-white tracking-tight mb-2">
        RANDERSON DE SÁ
      </h1>
      <div className="[font-family:var(--font-gotfridus)] uppercase text-xl lg:text-2xl text-[var(--text-soft)] tracking-tight leading-[1.1]">
        <span className="block">NOT ALL THOSE WHO WANDER</span>
        <span className="block text-white mt-1">ARE LOST</span>
      </div>
    </div>
  ),

  neofetch: () => (
    <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-16 items-start justify-start py-4">
      <div className="hidden md:block flex-shrink-0 font-mono text-[8px] lg:text-[10px] xl:text-[12px] leading-[1.1] text-[var(--accent-magenta)] opacity-90 select-none whitespace-pre">
{`                 ..:---===---:..                 
            ..-==+**%@@@@@@@@%**+==..            
         .:-=+**%@@@@@@@@@@@@@@@@%**+=-:.         
       .-=+**%@@@@@@@@@@@@@@@@@@@@@@@@%**+-.       
     .-=+*%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%*=-.     
    .-+*%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%*-.    
   .-+*%@@@@@@@@@@@@@@@%****%@@@@@@@@@@@@@@@%*-.   
  .-+*%@@@@@@@@@@@@@%*+=::::=+*%@@@@@@@@@@@@@%*-.  
  -=*%@@@@@@@@@@@@%*=-::::::::-=%@@@@@@@@@@@@%*=-  
 .-+*%@@@@@@@@@@@@%=-:::::::::::=%@@@@@@@@@@@@*+-. 
 .-+*%@@@@@@@@@@@@%=-:::::::::::=%@@@@@@@@@@@@*+-. 
 .-+*%@@@@@@@@@@@@%*=-::::::::-=%@@@@@@@@@@@@%*+-. 
 .-+*%@@@@@@@@@@@@@@%*+=::::=+*%@@@@@@@@@@@@@%*+-. 
  -=*%@@@@@@@@@@@@@@@@@%****%@@@@@@@@@@@@@@@@%*=-  
  .-+*%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%*-.  
   .-+*%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%*-.   
    .-+*%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%*-.    
     .-=+*%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%*=-.     
       .-=+**%@@@@@@@@@@@@@@@@@@@@@@@@%**+-.       
         .:-=+**%@@@@@@@@@@@@@@@@@@%**+=-:.         
            ..-==+**%@@@@@@@@@@%**+==..            
                 ..:---===---:..                 `}
      </div>
      <div className="flex-1 w-full max-w-xl flex flex-col justify-center">
        <div className="mb-6">
          <h1 className="[font-family:var(--font-gotfridus)] uppercase text-4xl lg:text-5xl text-white tracking-tight mb-2">
            RANDERSON DE SÁ
          </h1>
          <div className="[font-family:var(--font-gotfridus)] uppercase text-xl lg:text-2xl text-[var(--text-soft)] tracking-tight leading-[1.1]">
            <span className="block">NOT ALL THOSE WHO WANDER</span>
            <span className="block text-white mt-1">ARE LOST</span>
          </div>
        </div>
        <div className="font-mono text-sm lg:text-base text-[var(--text-soft)] space-y-2">
          <p><span className="text-[var(--accent-magenta)] mr-3">Host:</span> <span className="text-[var(--accent-green)]">Randerson de Sá</span></p>
          <p><span className="text-[var(--accent-magenta)] mr-3">OS:</span> <span className="text-[var(--accent-green)]">Portfolio Archive</span></p>
          <p><span className="text-[var(--accent-magenta)] mr-3">Role:</span> <span className="text-[var(--accent-green)]">Developer in Training</span></p>
          <p><span className="text-[var(--accent-magenta)] mr-3">Focus:</span> <span className="text-[var(--accent-green)]">Mobile, Backend, Data, Applied AI</span></p>
          <p><span className="text-[var(--accent-magenta)] mr-3">Stack:</span> <span className="text-[var(--accent-green)]">Flutter, Dart, Supabase, PostgreSQL, Next.js, Python</span></p>
          <p><span className="text-[var(--accent-magenta)] mr-3">Status:</span> <span className="text-[var(--accent-green)]">open to internships</span></p>
          <p><span className="text-[var(--accent-magenta)] mr-3">Location:</span> <span className="text-[var(--accent-green)]">Brazil</span></p>
        </div>
      </div>
    </div>
  ),

  projects: () => (
    <div className="text-[var(--text-soft)] leading-relaxed">
      <span className="text-[var(--accent-magenta)]">Projects archive:</span><br />
      <span className="text-white">[01]</span> FADIR<br />
      <span className="text-white">[02]</span> Ecossistema Integrado SAMU<br />
      <span className="text-white">[03]</span> Plataforma de Adoção de Animais<br />
      <span className="text-white">[04]</span> Astroturfing Detection<br /><br />
      Type <span className="text-[var(--accent-green)]">open craft</span> or use the sidebar to inspect project files.
    </div>
  ),

  repos: () => (
    <div className="text-[var(--text-soft)]">
      Repository index is not fully configured yet.<br />
      Use: <span className="text-[var(--accent-green)]">github</span>
    </div>
  ),

  github: () => (
    <div className="text-[var(--text-soft)]">
      GitHub integration pending final link setup.<br />
      Check back later.
    </div>
  ),

  linkedin: () => (
    <div className="text-[var(--text-soft)]">
      LinkedIn integration pending final link setup.<br />
      Check back later.
    </div>
  ),

  email: () => (
    <div className="text-[var(--text-soft)]">
      Email not configured yet.
    </div>
  ),

  date: () => {
    return new Date().toLocaleString();
  },

  curiosity: () => {
    const facts = [
      "The first computer bug was an actual real bug: a moth found trapped in a Harvard Mark II computer in 1947.",
      "The term 'hacker' originally referred to people who built model trains in MIT's Tech Model Railroad Club.",
      "The Apollo 11 Guidance Computer had less processing power than a modern USB-C charger.",
      "C was originally called 'NB' (New B), until it was finalized in 1972.",
      "The first virus was created in 1983 as an experiment to prove that an application could be infectious."
    ];
    return facts[Math.floor(Math.random() * facts.length)];
  },

  donate: () => (
    <div className="text-[var(--text-soft)]">
      No donation endpoint configured. Support by exploring the archive.
    </div>
  ),

  sudo: () => (
    <div className="text-[#ff0000]">
      Permission denied: this incident will be reported.
    </div>
  ),

  team: () => (
    <div className="text-[var(--text-soft)]">
      Solo archive maintained by <span className="text-white">Randerson de Sá</span>.<br />
      Collaborations may appear inside project files.
    </div>
  ),

  vi: () => (
    <div className="text-[var(--text-soft)]">
      Opening vim...<br />
      Just kidding. Press <span className="text-white">:q</span> to escape imaginary mode.
    </div>
  ),
  
  vim: () => terminalCommands.vi([], {} as AppRouterInstance), // Alias

  ":q": () => (
    <div className="text-[var(--accent-green)]">
      Exited imaginary vim.
    </div>
  ),

  weather: () => (
    <div className="text-[var(--text-soft)] leading-relaxed">
      Weather service unavailable in static archive mode.<br />
      Current forecast: <span className="text-[var(--accent-magenta)]">dark theme</span>, <span className="text-gray-500">neon fog</span>, <span className="text-[var(--accent-green)]">100% chance of code</span>.
    </div>
  ),

  snake: () => (
    <div className="text-[var(--text-soft)]">
      Snake module loaded. Use arrow keys. Press ESC to quit.<br />
      <span className="text-[var(--accent-magenta)] opacity-70">(Terminal mode restricted: game engine offline)</span>
    </div>
  ),

  // Special commands handled internally by the component or navigation
  clear: () => null,
  cls: () => null,

  me: (_, router) => {
    router.push("/me");
    return "Navigating to /me...";
  },
  "open me": (_, router) => terminalCommands.me([], router),
  
  craft: (_, router) => {
    router.push("/craft");
    return "Navigating to /craft...";
  },
  "open craft": (_, router) => terminalCommands.craft([], router),
  
  skills: (_, router) => {
    router.push("/skills");
    return "Navigating to /skills...";
  },
  "open skills": (_, router) => terminalCommands.skills([], router),
  
  contact: (_, router) => {
    router.push("/contact");
    return "Navigating to /contact...";
  },
  "open contact": (_, router) => terminalCommands.contact([], router),
};
