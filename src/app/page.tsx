"use client";

export default function Home() {

  return (
    <div className="w-full min-h-screen flex flex-col bg-[#000000] text-white">
      {/* Top Prompt */}
      <div className="w-full px-8 py-6 font-mono text-sm text-[var(--accent-green)] flex items-center gap-2">
        <span>www.randerson.dev:~$</span>
        <span>neofetch</span>
        <span className="inline-block w-2 h-4 bg-[var(--accent-green)] animate-pulse" />
      </div>

      <section className="flex-1 flex flex-col justify-center px-8 lg:px-16 overflow-hidden">
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32 items-center lg:items-start justify-center">
          
          {/* Left Column: Abstract Magenta Art */}
          <div className="flex w-full lg:w-[45%] flex-shrink-0 font-mono text-[8px] sm:text-[10px] lg:text-[10px] xl:text-[12px] leading-[1.1] text-[var(--accent-magenta)] opacity-90 select-none whitespace-pre justify-center lg:justify-start overflow-hidden">
{`
                 ..:---===---:..                 
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
                 ..:---===---:..                 
`}
          </div>

          {/* Right Column: Identity / Neofetch Data */}
          <div className="flex-1 w-full max-w-xl flex flex-col justify-center">
            
            {/* Identity Block */}
            <div className="mb-10">
              <h1 className="[font-family:var(--font-gotfridus)] uppercase text-5xl lg:text-6xl text-white tracking-tight mb-4">
                RANDERSON DE SÁ
              </h1>
              
              <div className="[font-family:var(--font-gotfridus)] uppercase text-2xl lg:text-3xl text-[var(--text-soft)] tracking-tight leading-[1.1]">
                <span className="block">NOT ALL THOSE WHO WANDER</span>
                <span className="block text-white mt-1">ARE LOST</span>
              </div>
            </div>

            {/* Terminal Block Secondary */}
            <div className="font-mono text-sm lg:text-base text-[var(--text-soft)] space-y-2.5">
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
      </section>

      {/* Bottom Prompt */}
      <div className="w-full px-8 py-6 font-mono text-sm text-[var(--accent-green)] flex flex-wrap gap-2">
        <span>www.randerson.dev:~$</span>
        <span className="text-[var(--text-soft)]">use sidebar to explore the archive ...</span>
      </div>
    </div>
  );
}