"use client";

import { useLocale } from "@/context/LocaleContext";

export default function MePage() {
  const { t } = useLocale();

  return (
    <div className="w-full h-full flex flex-col pt-20 lg:pt-0 animate-in fade-in duration-500">
      {/* ------------------------------------------------------------------ */}
      {/* ABOUT SECTION */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-32 px-6 lg:px-16 min-h-screen">
        <div className="max-w-4xl">
          <div className="font-mono text-xs text-[var(--text-muted)] mb-8 uppercase tracking-widest">
            /path/about
          </div>
          <h2 className="font-display text-4xl md:text-6xl mb-4 text-[var(--text)] uppercase">
            {t.about.title}
          </h2>
          <p className="font-mono text-sm text-[var(--text-soft)] mb-16">
            {t.about.dossier}
          </p>

          <div className="grid md:grid-cols-[1fr_300px] gap-12 lg:gap-24">
            {/* Narrative */}
            <div className="font-serif text-lg md:text-xl text-[var(--text-soft)] leading-relaxed space-y-6">
              <p dangerouslySetInnerHTML={{ __html: t.about.p1.replace('Flutter, Dart, React, Next.js, TypeScript, Supabase/PostgreSQL e Python', '<strong class="text-[var(--text)]">Flutter, Dart, React, Next.js, TypeScript, Supabase/PostgreSQL e Python</strong>').replace('Flutter, Dart, React, Next.js, TypeScript, Supabase/PostgreSQL, and Python', '<strong class="text-[var(--text)]">Flutter, Dart, React, Next.js, TypeScript, Supabase/PostgreSQL, and Python</strong>') }} />
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </div>

            {/* Metadata */}
            <div className="font-mono text-xs text-[var(--text-soft)] bg-[var(--surface-elevated)] border border-[var(--border)] p-6 h-fit">
              <div className="mb-4 text-[var(--color-primary)] border-b border-[var(--border-strong)] pb-2">{t.about.metaTitle}</div>
              <ul className="space-y-3">
                <li><strong className="text-[var(--text)] block mb-1">{t.about.metaStatus}</strong> {t.about.statusText}</li>
                <li><strong className="text-[var(--text)] block mb-1">{t.about.metaFocus}</strong> {t.about.focusText}</li>
                <li><strong className="text-[var(--text)] block mb-1">{t.about.metaLocation}</strong> {t.about.locationText}</li>
                <li><strong className="text-[var(--text)] block mb-1">{t.about.metaInterests}</strong> {t.about.interestsText}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* EXPERIENCE & EDUCATION SECTION */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-32 px-6 lg:px-16 border-t border-[var(--border)]">
        <div className="max-w-5xl grid lg:grid-cols-2 gap-24">
          
          {/* Experience */}
          <div>
            <div className="font-mono text-xs text-[var(--text-muted)] mb-8 uppercase tracking-widest">
              /log/experience
            </div>
            <h2 className="font-display text-4xl mb-12 text-[var(--text)] uppercase">
              {t.experience.title}
            </h2>
            
            <div className="space-y-12">
              {t.experience.jobs.map((job, idx) => (
                <div key={idx} className="font-mono text-sm group">
                  <div className="text-[var(--text)] mb-2 font-bold">
                    [{job.period.split(' | ')[0]}] <span className="text-[var(--color-secondary)] group-hover:text-[var(--color-primary)] transition-colors">{job.title}</span> — {job.company}
                  </div>
                  <div className="text-[var(--text-soft)] text-xs space-y-2 pl-4 border-l border-[var(--border-strong)]">
                    <p><strong className="text-[var(--text)]">{t.experience.contextLabel}</strong> {job.description}</p>
                    <p><strong className="text-[var(--text)]">{t.experience.impactLabel}</strong> {job.tasks.join(" ")}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
             <div className="font-mono text-xs text-[var(--text-muted)] mb-8 uppercase tracking-widest">
              /education/main
            </div>
            <h2 className="font-display text-4xl mb-12 text-[var(--text)] uppercase">
              {t.education.title}
            </h2>

            <div className="font-mono text-sm">
              <div className="text-[var(--text)] mb-4 bg-[var(--surface-elevated)] border border-[var(--border)] p-4">
                <p className="mb-2"><span className="text-[var(--color-primary)]">{t.education.degreeLabel}</span> {t.education.degree}</p>
                <p className="mb-2"><span className="text-[var(--color-primary)]">{t.education.institutionLabel}</span> {t.education.institution}</p>
                <p className="mb-2"><span className="text-[var(--color-primary)]">{t.education.locationLabel}</span> {t.education.period.split(' | ')[1]}</p>
                <p><span className="text-[var(--color-primary)]">{t.education.periodLabel}</span> {t.education.period.split(' | ')[0]}</p>
              </div>

              <div className="mt-8 border-l border-[var(--border-strong)] pl-4">
                <h4 className="text-[var(--color-secondary)] mb-2">{t.education.awardsTitle}</h4>
                <p className="text-xs text-[var(--text-soft)]">{t.education.award}</p>
              </div>

              <div className="mt-8 border-l border-[var(--border-strong)] pl-4">
                <h4 className="text-[var(--color-secondary)] mb-2">{t.education.interestsTitle}</h4>
                <ul className="text-xs text-[var(--text-soft)] list-disc list-inside space-y-1">
                  {t.education.interests.map((interest, idx) => (
                    <li key={idx}>{interest}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
