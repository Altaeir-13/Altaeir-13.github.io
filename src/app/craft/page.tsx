"use client";

import { useLocale } from "@/context/LocaleContext";
import ProjectCard from "@/components/ProjectCard";

export default function CraftPage() {
  const { t } = useLocale();

  return (
    <div className="w-full h-full flex flex-col pt-20 lg:pt-0 animate-in fade-in duration-500">
      <section className="py-32 px-6 lg:px-16 min-h-screen">
        <div className="max-w-5xl">
          <div className="font-mono text-xs text-[var(--text-muted)] mb-8 uppercase tracking-widest">
            /path/projects
          </div>
          <h2 className="font-display text-4xl md:text-6xl mb-4 text-[var(--text)] uppercase">
            {t.projects.title}
          </h2>
          <p className="font-mono text-sm text-[var(--text-soft)] mb-16">
            {t.projects.subtitle}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.projects.list.map((proj, idx) => (
              <ProjectCard 
                key={idx} 
                {...proj} 
                index={String(idx + 1).padStart(2, '0')}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
