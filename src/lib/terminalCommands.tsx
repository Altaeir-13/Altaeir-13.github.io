import React from "react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { translations } from "@/data/translations";

export type Dictionary = typeof translations["pt"];

export type CommandHandler = (args: string[], router: AppRouterInstance, t: Dictionary, locale: string) => React.ReactNode | string | null;

export const terminalCommands: Record<string, CommandHandler> = {
  help: (_args, _router, t) => (
    <div className="text-[var(--terminal-green)] leading-relaxed whitespace-pre">
      {t.terminal.helpText}
    </div>
  ),

  about: (_args, _router, t) => (
    <div className="text-[var(--terminal-green)] leading-relaxed whitespace-pre">
      {t.terminal.aboutText}
    </div>
  ),

  whoami: (_args, _router, t) => (
    <div className="text-[var(--terminal-green)] leading-relaxed whitespace-pre">
      {t.terminal.whoamiText}
    </div>
  ),
  
  "who am i": (_args, _router, t, locale) => terminalCommands.whoami([], _router, t, locale), // Alias

  banner: () => (
    <div className="mb-4">
      <h1 className="[font-family:var(--font-gotfridus)] uppercase text-4xl lg:text-5xl text-[var(--terminal-green)] tracking-tight mb-2">
        ALTAIR STAR
      </h1>
      <div className="[font-family:var(--font-gotfridus)] uppercase text-xl lg:text-2xl text-[var(--terminal-green)] tracking-tight leading-[1.1]">
        NOT ALL THOSE WHO WANDER<br />ARE LOST
      </div>
    </div>
  ),

  neofetch: (_args, _router, t) => (
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
      <div className="flex-1 w-full max-w-2xl flex flex-col justify-center">
        <div className="mb-6">
          <h1 className="[font-family:var(--font-gotfridus)] uppercase text-4xl lg:text-5xl text-[var(--text)] tracking-tight mb-2">
            ALTAIR STAR
          </h1>
          <div className="[font-family:var(--font-gotfridus)] uppercase text-xl lg:text-2xl text-[var(--terminal-green)] tracking-tight leading-[1.1]">
            NOT ALL THOSE WHO WANDER<br />ARE LOST
          </div>
        </div>
        <div className="font-typewriter text-sm lg:text-base text-[var(--terminal-green)] space-y-2">
          <p><span className="text-[var(--terminal-pink)] mr-3">Host:</span> Randerson de Sá</p>
          <p><span className="text-[var(--terminal-pink)] mr-3">OS:</span> Portfolio OS</p>
          <p><span className="text-[var(--terminal-pink)] mr-3">Role:</span> {t.terminal.neofetch.role}</p>
          <p><span className="text-[var(--terminal-pink)] mr-3">Focus:</span> {t.terminal.neofetch.focus}</p>
          <p><span className="text-[var(--terminal-pink)] mr-3">Stack:</span> Flutter, Dart, Supabase, PostgreSQL, Next.js, Python</p>
          <p><span className="text-[var(--terminal-pink)] mr-3">Status:</span> {t.terminal.neofetch.status}</p>
          <p><span className="text-[var(--terminal-pink)] mr-3">Location:</span> {t.terminal.neofetch.location}</p>
        </div>
      </div>
    </div>
  ),

  projects: (_args, _router, t) => (
    <div className="text-[var(--terminal-green)] leading-relaxed whitespace-pre">
      {t.terminal.projectsText}
    </div>
  ),

  repos: (_args, _router, t) => (
    <div className="text-[var(--terminal-green)] whitespace-pre">
      {t.terminal.reposText}
    </div>
  ),

  github: (_args, _router, t) => (
    <div className="text-[var(--terminal-green)]">
      {t.terminal.githubText}
    </div>
  ),

  linkedin: (_args, _router, t) => (
    <div className="text-[var(--terminal-green)]">
      {t.terminal.linkedinText}
    </div>
  ),

  email: (_args, _router, t) => (
    <div className="text-[var(--terminal-green)]">
      {t.terminal.emailText}
    </div>
  ),

  date: (_args, _router, t, locale) => {
    const d = new Date();
    
    const start = new Date(d.getFullYear(), 0, 0);
    const diff = d.getTime() - start.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    
    const timeStr = d.toLocaleTimeString('en-US', { hour12: false });
    
    let tzName = "Unknown";
    try {
      tzName = Intl.DateTimeFormat().resolvedOptions().timeZone;
    } catch {
      // ignore
    }
    
    // Offset calculation
    const offsetMin = d.getTimezoneOffset();
    const offsetHours = Math.abs(Math.floor(offsetMin / 60));
    const offsetMins = Math.abs(offsetMin % 60);
    const offsetSign = offsetMin > 0 ? "-" : "+";
    const offsetStr = `GMT${offsetSign}${String(offsetHours).padStart(2, "0")}${String(offsetMins).padStart(2, "0")}`;

    let localeStr = "en-US";
    if (locale === "pt") localeStr = "pt-BR";
    else if (locale === "es") localeStr = "es-ES";

    let weekdayName = "";
    let monthName = "";
    try {
      weekdayName = new Intl.DateTimeFormat(localeStr, { weekday: 'long' }).format(d);
      monthName = new Intl.DateTimeFormat(localeStr, { month: 'long' }).format(d);
    } catch {
      // ignore
    }

    return (
      <div className="text-[var(--terminal-green)] leading-relaxed whitespace-pre">
{`${d.toString()}

${t.terminal.dateLabels.weekday} ${weekdayName}
${t.terminal.dateLabels.month} ${monthName}
${t.terminal.dateLabels.day} ${d.getDate()}
${t.terminal.dateLabels.dayYear} ${dayOfYear}
${t.terminal.dateLabels.year} ${d.getFullYear()}
${t.terminal.dateLabels.time} ${timeStr}
${t.terminal.dateLabels.tzOffset} ${offsetStr}
${t.terminal.dateLabels.tzName} ${tzName}
${t.terminal.dateLabels.locale} ${localeStr}`}
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

  donate: (_args, _router, t) => (
    <div className="text-[var(--terminal-green)]">
      {t.terminal.donateText}
    </div>
  ),

  sudo: (_args, _router, t) => (
    <div className="text-[var(--terminal-pink)]">
      {t.terminal.sudoText}
    </div>
  ),

  team: (_args, _router, t) => (
    <div className="text-[var(--terminal-green)] whitespace-pre">
      {t.terminal.teamText}
    </div>
  ),

  vi: (_args, _router, t) => (
    <div className="text-[var(--terminal-green)] whitespace-pre">
      {t.terminal.viText}
    </div>
  ),
  
  vim: (_args, _router, t, locale) => terminalCommands.vi([], _router, t, locale), // Alias

  ":q": (_args, _router, t) => (
    <div className="text-[var(--terminal-green)]">
      {t.terminal.qText}
    </div>
  ),

  weather: (_args, _router, t) => (
    <div className="text-[var(--terminal-green)] leading-relaxed whitespace-pre">
      {t.terminal.weatherText}
    </div>
  ),

  snake: (_args, _router, t) => (
    <div className="text-[var(--terminal-green)] whitespace-pre">
      {t.terminal.snakeText}
    </div>
  ),

  // Special commands handled internally by the component or navigation
  clear: () => null,
  cls: () => null,

  me: (_, router, t) => {
    router.push("/me");
    return <div className="text-[var(--terminal-green)]">{t.terminal.navigating} /me...</div>;
  },
  "open me": (_, router, t, locale) => terminalCommands.me([], router, t, locale),
  
  craft: (_, router, t) => {
    router.push("/craft");
    return <div className="text-[var(--terminal-green)]">{t.terminal.navigating} /craft...</div>;
  },
  "open craft": (_, router, t, locale) => terminalCommands.craft([], router, t, locale),
  
  skills: (_, router, t) => {
    router.push("/skills");
    return <div className="text-[var(--terminal-green)]">{t.terminal.navigating} /skills...</div>;
  },
  "open skills": (_, router, t, locale) => terminalCommands.skills([], router, t, locale),
  
  contact: (_, router, t) => {
    router.push("/contact");
    return <div className="text-[var(--terminal-green)]">{t.terminal.navigating} /contact...</div>;
  },
  "open contact": (_, router, t, locale) => terminalCommands.contact([], router, t, locale),
};

// Aliases integration
const aliases: Record<string, string> = {
  // PT aliases
  "ajuda": "help",
  "sobre": "about",
  "projetos": "projects",
  "contato": "open contact",
  "limpar": "clear",
  // ES aliases
  "ayuda": "help",
  "proyectos": "projects",
  "contacto": "open contact",
  "limpiar": "clear",
};

export const getCommand = (input: string) => {
  const normalized = input.trim().toLowerCase();
  if (terminalCommands[normalized]) return terminalCommands[normalized];
  if (aliases[normalized] && terminalCommands[aliases[normalized]]) return terminalCommands[aliases[normalized]];
  return null;
};
