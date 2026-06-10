"use client";

export default function Home() {

  return (
    <div className="w-full h-full flex flex-col animate-in fade-in duration-500 bg-[#000000] text-white">
      {/* Top Prompt */}
      <div className="w-full px-8 py-6 font-mono text-xs md:text-sm text-[var(--accent-green)] opacity-90 flex items-center gap-2">
        <span>www.randerson.dev:~$</span>
        <span className="text-white">neofetch</span>
        <span className="inline-block w-2 h-4 bg-[var(--accent-green)] animate-pulse" />
      </div>

      <section className="flex-1 flex flex-col justify-center px-8 lg:px-16 overflow-hidden bg-noise pb-20">
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-16 lg:gap-24 items-center md:items-start justify-center">
          
          {/* Left Column: Huge Gothic R ASCII Art */}
          <div className="hidden md:block flex-shrink-0 font-mono text-[10px] lg:text-[12px] xl:text-[14px] leading-tight text-[var(--accent-magenta)] opacity-80 select-none whitespace-pre">
{`
    ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄.
    █████████████████████████████▄.
    ██████▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀██████.
    ██████                   ██████.
    ██████                   ██████.
    ██████                   ██████.
    ██████                 ▄██████▀
    ████████████████████████████▀
    ██████████████████████████▀
    ██████               ██████.
    ██████                ██████.
    ██████                 ██████.
    ██████                  ██████.
    ██████                   ██████.
    ██████                    ██████.
    ▀▀▀▀▀▀                     ▀▀▀▀▀▀.
`}
          </div>

          {/* Right Column: Identity / Neofetch Data */}
          <div className="flex-1 w-full max-w-2xl">
            
            {/* ASCII Name */}
            <div className="font-mono text-[8px] sm:text-[10px] md:text-[8px] lg:text-[10px] xl:text-[12px] leading-none text-[var(--accent-green)] mb-6 select-none whitespace-pre overflow-x-auto overflow-y-hidden">
{`
  _____               _                                 _         _____    __  
 |  __ \\             | |                               | |       / ____|  /  \\ 
 | |__) |__ _  _ __  | |  __ _  _ __   ___   ___  _ __ | |      | (___   / /\\ \\
 |  _  // _\` || '_ \\ | | / _\` || '_ \\ / __| / _ \\| '_ \\| |       \\___ \\ / ____ \\
 | | \\ \\ (_| || | | || || (_| || | | |\\__ \\| (_) | | | | |____   ____) | /    \\ \\
 |_|  \\_\\__,_||_| |_||_| \\__,_||_| |_||___/ \\___/|_| |_|______| |_____/|/      \\|
`}
            </div>

            {/* Gothic Phrase */}
            <div className="font-display text-2xl lg:text-3xl text-white tracking-tight mb-12 opacity-90 border-l-2 border-[var(--border-strong)] pl-6">
              <span className="block">NOT ALL THOSE</span>
              <span className="block">WHO WANDER ARE LOST</span>
            </div>

            {/* Terminal Block Secondary */}
            <div className="font-mono text-sm lg:text-base text-[var(--accent-green)] space-y-2">
              <p><span className="text-[var(--accent-magenta)]">OS:</span> Portfolio OS v1.0</p>
              <p><span className="text-[var(--accent-magenta)]">Host:</span> Randerson de Sá</p>
              <p><span className="text-[var(--accent-magenta)]">Role:</span> Developer in Training</p>
              <p><span className="text-[var(--accent-magenta)]">Focus:</span> Mobile, Backend, Data, Applied AI</p>
              <p><span className="text-[var(--accent-magenta)]">Stack:</span> Flutter, Dart, Supabase, PostgreSQL, Next.js, Python</p>
              <p><span className="text-[var(--accent-magenta)]">Status:</span> open to internships</p>
              <p><span className="text-[var(--accent-magenta)]">Location:</span> Brazil</p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Bottom Prompt */}
      <div className="w-full px-8 py-6 font-mono text-xs md:text-sm text-[var(--accent-green)] opacity-70 mt-auto flex flex-wrap gap-2 border-t border-[var(--border-strong)]">
        <span>www.randerson.dev:~$</span>
        <span className="text-[var(--text-soft)]">use sidebar to explore the archive ...</span>
      </div>
    </div>
  );
}