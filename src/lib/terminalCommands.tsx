import React from "react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export type CommandHandler = (args: string[], router: AppRouterInstance) => React.ReactNode | string | null;

export const terminalCommands: Record<string, CommandHandler> = {
  help: () => (
    <div className="text-[var(--terminal-green)] leading-relaxed">
      Available commands:<br />
      about, banner, curiosity, date, donate, email, github, help, linkedin, clear, neofetch, projects, repos, snake, sudo, team, vi, vim, weather, whoami
      <br /><br />
      [tab]       trigger completion.<br />
      [ctrl+l]    clear terminal.<br />
      [ctrl+c]    cancel command.
    </div>
  ),

  about: () => (
    <div className="text-[var(--terminal-green)] leading-relaxed">
      Randerson de Sá is a developer in training focused on mobile, backend, data and applied AI.<br />
      <br />
      This portfolio works as a personal archive of projects, skills and experiments.
    </div>
  ),

  whoami: () => (
    <div className="text-[var(--terminal-green)] leading-relaxed">
      randerson<br />
      Developer in Training<br />
      Focus: Mobile, Backend, Data, Applied AI<br />
      Location: Brazil
    </div>
  ),
  
  "who am i": () => terminalCommands.whoami([], {} as AppRouterInstance), // Alias

  banner: () => (
    <div className="mb-4">
      <h1 className="[font-family:var(--font-gotfridus)] uppercase text-4xl lg:text-5xl text-[var(--terminal-green)] tracking-tight mb-2">
        RANDERSON DE SÁ
      </h1>
      <div className="[font-family:var(--font-gotfridus)] uppercase text-xl lg:text-2xl text-[var(--terminal-green)] tracking-tight leading-[1.1]">
        <span className="block">NOT ALL THOSE WHO WANDER</span>
        <span className="block mt-1">ARE LOST</span>
      </div>
    </div>
  ),

  neofetch: () => (
    <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-16 items-start justify-start py-4">
      <div className="hidden md:block flex-shrink-0 font-typewriter text-[8px] lg:text-[10px] xl:text-[12px] leading-[1.1] text-[var(--terminal-pink)] opacity-90 select-none whitespace-pre">
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
          <h1 className="[font-family:var(--font-gotfridus)] uppercase text-4xl lg:text-5xl text-[var(--text)] tracking-tight mb-2">
            RANDERSON DE SÁ
          </h1>
          <div className="[font-family:var(--font-gotfridus)] uppercase text-xl lg:text-2xl text-[var(--terminal-green)] tracking-tight leading-[1.1]">
            <span className="block">NOT ALL THOSE WHO WANDER</span>
            <span className="block text-[var(--text)] mt-1">ARE LOST</span>
          </div>
        </div>
        <div className="font-typewriter text-sm lg:text-base text-[var(--terminal-green)] space-y-2">
          <p><span className="text-[var(--terminal-pink)] mr-3">Host:</span> Randerson de Sá</p>
          <p><span className="text-[var(--terminal-pink)] mr-3">OS:</span> Portfolio Archive</p>
          <p><span className="text-[var(--terminal-pink)] mr-3">Role:</span> Developer in Training</p>
          <p><span className="text-[var(--terminal-pink)] mr-3">Focus:</span> Mobile, Backend, Data, Applied AI</p>
          <p><span className="text-[var(--terminal-pink)] mr-3">Stack:</span> Flutter, Dart, Supabase, PostgreSQL, Next.js, Python</p>
          <p><span className="text-[var(--terminal-pink)] mr-3">Status:</span> open to internships</p>
          <p><span className="text-[var(--terminal-pink)] mr-3">Location:</span> Brazil</p>
        </div>
      </div>
    </div>
  ),

  projects: () => (
    <div className="text-[var(--terminal-green)] leading-relaxed">
      Projects archive:<br />
      [01] FADIR<br />
      [02] Ecossistema Integrado SAMU<br />
      [03] Plataforma de Adoção de Animais<br />
      [04] Astroturfing Detection<br /><br />
      Type &quot;open craft&quot; or use the sidebar to inspect project files.
    </div>
  ),

  repos: () => (
    <div className="text-[var(--terminal-green)]">
      Repository index is not fully configured yet.<br />
      Use: github
    </div>
  ),

  github: () => (
    <div className="text-[var(--terminal-green)]">
      GitHub integration pending final link setup.
    </div>
  ),

  linkedin: () => (
    <div className="text-[var(--terminal-green)]">
      LinkedIn integration pending final link setup.
    </div>
  ),

  email: () => (
    <div className="text-[var(--terminal-green)]">
      Email not configured yet.
    </div>
  ),

  date: () => {
    const d = new Date();
    
    const start = new Date(d.getFullYear(), 0, 0);
    const diff = d.getTime() - start.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    const timeStr = d.toLocaleTimeString('en-US', { hour12: false });
    
    let tzName = "Unknown";
    try {
      tzName = Intl.DateTimeFormat().resolvedOptions().timeZone;
    } catch(_e) {}
    
    // Offset calculation
    const offsetMin = d.getTimezoneOffset();
    const offsetHours = Math.abs(Math.floor(offsetMin / 60));
    const offsetMins = Math.abs(offsetMin % 60);
    const offsetSign = offsetMin > 0 ? "-" : "+";
    const offsetStr = `GMT${offsetSign}${String(offsetHours).padStart(2, "0")}${String(offsetMins).padStart(2, "0")}`;

    const localeStr = navigator.language || "en-US";

    return (
      <div className="text-[var(--terminal-green)] leading-relaxed whitespace-pre">
{`${d.toString()}

Weekday: ${weekdays[d.getDay()]}
Month: ${months[d.getMonth()]}
Day of month: ${d.getDate()}
Day of year: ${dayOfYear}
Year: ${d.getFullYear()}
Time: ${timeStr}
Timezone offset: ${offsetStr}
Timezone name: ${tzName}
Locale: ${localeStr}`}
      </div>
    );
  },

  curiosity: () => {
    const facts = [
      "The first computer bug was an actual real bug: a moth found trapped in a Harvard Mark II computer in 1947.",
      "The term 'hacker' originally referred to people who built model trains in MIT's Tech Model Railroad Club.",
      "The Apollo 11 Guidance Computer had less processing power than a modern USB-C charger.",
      "C was originally called 'NB' (New B), until it was finalized in 1972.",
      "The first virus was created in 1983 as an experiment to prove that an application could be infectious."
    ];
    return <div className="text-[var(--terminal-green)]">{facts[Math.floor(Math.random() * facts.length)]}</div>;
  },

  donate: () => (
    <div className="text-[var(--terminal-green)]">
      No donation endpoint configured. Support by exploring the archive.
    </div>
  ),

  sudo: () => (
    <div className="text-[var(--terminal-pink)]">
      Permission denied: this incident will be reported.
    </div>
  ),

  team: () => (
    <div className="text-[var(--terminal-green)]">
      Solo archive maintained by Randerson de Sá.<br />
      Collaborations may appear inside project files.
    </div>
  ),

  vi: () => (
    <div className="text-[var(--terminal-green)]">
      Opening vim...<br />
      Just kidding. Press :q to escape imaginary mode.
    </div>
  ),
  
  vim: () => terminalCommands.vi([], {} as AppRouterInstance), // Alias

  ":q": () => (
    <div className="text-[var(--terminal-green)]">
      Exited imaginary vim.
    </div>
  ),

  weather: () => (
    <div className="text-[var(--terminal-green)] leading-relaxed">
      Weather service unavailable in static archive mode.<br />
      Current forecast: dark theme, neon fog, 100% chance of code.
    </div>
  ),

  snake: () => (
    <div className="text-[var(--terminal-green)]">
      Snake module loaded.<br />
      Use arrow keys. Press ESC to quit.
    </div>
  ),

  // Special commands handled internally by the component or navigation
  clear: () => null,
  cls: () => null,

  me: (_, router) => {
    router.push("/me");
    return <div className="text-[var(--terminal-green)]">Navigating to /me...</div>;
  },
  "open me": (_, router) => terminalCommands.me([], router),
  
  craft: (_, router) => {
    router.push("/craft");
    return <div className="text-[var(--terminal-green)]">Navigating to /craft...</div>;
  },
  "open craft": (_, router) => terminalCommands.craft([], router),
  
  skills: (_, router) => {
    router.push("/skills");
    return <div className="text-[var(--terminal-green)]">Navigating to /skills...</div>;
  },
  "open skills": (_, router) => terminalCommands.skills([], router),
  
  contact: (_, router) => {
    router.push("/contact");
    return <div className="text-[var(--terminal-green)]">Navigating to /contact...</div>;
  },
  "open contact": (_, router) => terminalCommands.contact([], router),
};
