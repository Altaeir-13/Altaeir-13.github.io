"use client";

import { useLocale } from "@/context/LocaleContext";

export default function SkillsPage() {
  const { t } = useLocale();

  return (
    <div className="w-full h-full flex flex-col pt-20 lg:pt-0 animate-in fade-in duration-500">
      <section className="py-32 px-6 lg:px-16 min-h-screen bg-[var(--bg-soft)]">
        <div className="max-w-5xl">
          <div className="font-mono text-xs text-[var(--text-muted)] mb-8 uppercase tracking-widest">
            /path/skills
          </div>
          <h2 className="font-display text-4xl md:text-6xl mb-4 text-[var(--text)] uppercase">
            {t.skills.title}
          </h2>
          <p className="font-mono text-sm text-[var(--text-soft)] mb-16">
            {t.skills.subtitle}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 font-mono">
            {t.skills.groups.map((group, idx) => (
              <div key={idx} className="group">
                <h3 className="text-sm text-[var(--accent-magenta)] mb-2 group-hover:text-[var(--accent-green)] transition-colors">
                  /skills/{group.title.toLowerCase().replace(' & ', '-').replace(' ', '-')}
                </h3>
                <p className="text-xs text-[var(--text-soft)] leading-loose">
                  {group.skills.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
