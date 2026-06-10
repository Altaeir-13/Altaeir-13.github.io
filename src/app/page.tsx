"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowUpRight, Github, Linkedin, Mail, Copy } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import SkillBadge from "@/components/SkillBadge";
import { useLocale } from "@/context/LocaleContext";

export default function Home() {
  const { t, locale } = useLocale();
  const heroRef = useRef<HTMLDivElement>(null);
  const [animationKey, setAnimationKey] = useState(0);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const moveLeft = useTransform(smoothProgress, [0, 0.8], [0, -600]);
  const moveRight = useTransform(smoothProgress, [0, 0.8], [0, 600]);
  const moveUp = useTransform(smoothProgress, [0, 0.8], [0, -300]);
  const moveDown = useTransform(smoothProgress, [0, 0.8], [0, 300]);
  const rotateIcon = useTransform(smoothProgress, [0, 1], [0, 90]);
  const opacityHero = useTransform(smoothProgress, [0, 0.7], [1, 0]);

  const triggerReveal = () => setAnimationKey(prev => prev + 1);

  useEffect(() => {
    window.addEventListener("triggerHeroReveal", triggerReveal);
    return () => window.removeEventListener("triggerHeroReveal", triggerReveal);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("randerson.sdsn@gmail.com");
    alert(t.contact.copied);
  };

  return (
    <div className="relative bg-[#050505] h-auto pb-32">
      <div ref={heroRef} className="h-[200vh]">
        <div key={animationKey} className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-32 top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          </div>

          <motion.main style={{ opacity: opacityHero }} className="hero-main w-full">
            <div className="hero-section">
              <div className="hero-content">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="hero-label flex flex-col gap-4"
                >
                  <span className="text-[var(--accent-pink)]">[{t.hero.labelTop}]</span>
                  <div className="font-mono text-[10px] text-[var(--muted)] flex flex-col border-l border-[var(--border-strong)] pl-4 lowercase">
                    <span><span className="text-[var(--accent-green)]">host:</span> randerson de sá</span>
                    <span><span className="text-[var(--accent-green)]">role:</span> {locale === 'pt' ? 'desenvolvedor em formação' : 'developer in training'}</span>
                    <span><span className="text-[var(--accent-green)]">focus:</span> flutter, supabase, postgresql</span>
                    <span><span className="text-[var(--accent-green)]">stack:</span> dart, typescript, python, sql</span>
                    <span><span className="text-[var(--accent-green)]">status:</span> {locale === 'pt' ? 'aberto a estágios' : 'open to internships'}</span>
                  </div>
                </motion.span>
                <div className="hero-title text-white">
                  <div className="hero-title-line">
                    <motion.span initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} style={{ x: moveLeft, y: moveUp }}>
                      {t.hero.motto1}
                    </motion.span>
                    <motion.span initial={{ scale: 0, rotate: -45 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: 0.3, type: "spring" }} style={{ rotate: rotateIcon, y: moveUp }} className="accent-box-lime">
                      <span className="text-2xl font-black text-black">*</span>
                    </motion.span>
                    <motion.span initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} style={{ x: moveRight, y: moveUp }}>
                      {t.hero.motto2}
                    </motion.span>
                  </div>
                  <div className="hero-title-line">
                    <motion.span initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} style={{ x: moveRight, y: moveUp }}>
                      {t.hero.motto3}
                    </motion.span>
                    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }} style={{ y: moveUp }} className="accent-box-grid">
                      <span /><span /><span /><span />
                    </motion.span>
                  </div>
                  <div className="hero-title-line">
                    <motion.span initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.1 }} style={{ x: moveLeft, y: moveDown }}>
                      
                    </motion.span>
                    <motion.span initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.1 }} style={{ x: moveRight, y: moveDown }} className="hero-accent-text">
                      
                    </motion.span>
                    <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 }} style={{ x: moveRight, y: moveDown }} className="accent-box-icon">
                      <ArrowUpRight className="h-6 w-6" />
                    </motion.span>
                  </div>
                </div>
              </div>

              <div className="hero-content mt-12">
                <motion.span style={{ x: moveLeft }} className="hero-label">{t.hero.labelBottom}</motion.span>
                <motion.a initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 }} href="#sobre" className="hero-CTA">
                  {t.hero.viewProfile}
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-black">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </motion.a>
              </div>
            </div>
          </motion.main>
        </div>
      </div>

      <section id="sobre" className="relative z-10 bg-background text-foreground pt-20 pb-10 px-6 sm:px-10 lg:px-20 border-t border-[var(--border)]">
        <div className="max-w-6xl mx-auto mt-10">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-normal uppercase tracking-tighter text-[var(--text)] font-display">
              /{t.nav.about.toLowerCase()}/randerson
            </h1>
            <h2 className="text-2xl md:text-3xl text-[var(--text-soft)] font-mono mt-6 max-w-3xl border-l-2 border-[var(--accent-green)] pl-4">
              {t.about.subheading}
            </h2>
            <div className="flex gap-4 mt-10 flex-wrap">
              <a href="https://github.com/Altaeir-13" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[var(--surface-elevated)] border border-[var(--border-strong)] text-[var(--text)] px-6 py-3 rounded-none hover:border-[var(--accent-pink)] hover:text-[var(--accent-pink)] transition-all font-mono uppercase tracking-wider text-xs shadow-sm hover:shadow-[0_0_15px_var(--accent-pink-soft)]">
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a href="https://linkedin.com/in/randersonsousa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[var(--surface-elevated)] border border-[var(--border-strong)] text-[var(--text)] px-6 py-3 rounded-none hover:border-[var(--accent-pink)] hover:text-[var(--accent-pink)] transition-all font-mono uppercase tracking-wider text-xs shadow-sm hover:shadow-[0_0_15px_var(--accent-pink-soft)]">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div className="mt-24 max-w-4xl text-lg md:text-xl text-[var(--text-soft)] space-y-6 leading-relaxed font-sans" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <SectionHeading title={t.about.title} />
            <p dangerouslySetInnerHTML={{ __html: t.about.p1.replace('Flutter, Dart, React, Next.js, TypeScript, Supabase/PostgreSQL e Python', '<strong>Flutter, Dart, React, Next.js, TypeScript, Supabase/PostgreSQL e Python</strong>').replace('Flutter, Dart, React, Next.js, TypeScript, Supabase/PostgreSQL, and Python', '<strong>Flutter, Dart, React, Next.js, TypeScript, Supabase/PostgreSQL, and Python</strong>') }} />
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
          </motion.div>
        </div>
      </section>

      <section id="projetos" className="bg-background text-foreground py-20 px-6 sm:px-10 lg:px-20 border-t border-[var(--border)]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-normal uppercase tracking-tighter text-[var(--text)] font-display">/{t.nav.projects.toLowerCase()}/log</h2>
            <div className="flex items-center gap-2 mt-6">
              <div className="h-1.5 w-16 bg-gradient-to-r from-[var(--accent-pink)] to-[var(--accent-green)] rounded-none"></div>
              <span className="font-mono text-xs text-[var(--muted)] opacity-50">sys.log</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.projects.list.map((proj, idx) => (
              <ProjectCard key={idx} {...proj} statusLabel={t.projects.statusLabel} contributionsLabel={t.projects.contributionsLabel} />
            ))}
          </div>
        </div>
      </section>

      <section id="habilidades" className="bg-background text-foreground py-20 px-6 sm:px-10 lg:px-20 border-t border-[var(--border)]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-normal uppercase tracking-tighter text-[var(--text)] font-display">/{t.nav.skills.toLowerCase()}/directories</h2>
            <div className="flex items-center gap-2 mt-6">
              <div className="h-1.5 w-16 bg-gradient-to-r from-[var(--accent-pink)] to-[var(--accent-green)] rounded-none"></div>
              <span className="font-mono text-xs text-[var(--muted)] opacity-50">sys.log</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {t.skills.groups.map((group, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                <h3 className="font-mono text-sm font-bold tracking-widest text-[var(--accent-green)] border-b border-[var(--border-strong)] pb-2 mb-2">/{group.title.toLowerCase()}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map(skill => (
                    <SkillBadge key={skill} skill={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experiencia" className="bg-[var(--bg-soft)] text-foreground py-20 px-6 sm:px-10 lg:px-20 border-t border-[var(--border)]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">
          <div>
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-normal uppercase tracking-tighter text-[var(--text)] font-display">/log/{t.nav.experience.toLowerCase()}</h2>
              <div className="flex items-center gap-2 mt-6">
                <div className="h-1.5 w-16 bg-gradient-to-r from-[var(--accent-pink)] to-[var(--accent-green)] rounded-none"></div>
                <span className="font-mono text-xs text-[var(--muted)] opacity-50">sys.log</span>
              </div>
            </div>
            <div className="space-y-12 font-sans">
              {t.experience.jobs.map((job, idx) => (
                <div key={idx} className="border-l border-[var(--accent-green)] pl-6 relative">
                  <div className="absolute w-2 h-2 bg-[var(--accent-pink)] -left-[4px] top-2"></div>
                  <h3 className="text-2xl font-bold font-sans text-[var(--text)]">{job.title}</h3>
                  <h4 className="text-lg text-[var(--text-soft)] mb-2">{job.company}</h4>
                  <p className="text-sm font-bold uppercase tracking-widest text-[var(--muted)] mb-4">{job.period}</p>
                  <p className="text-[var(--text-soft)] mb-4 text-sm">{job.description}</p>
                  <ul className="list-disc list-inside text-sm text-[var(--text-soft)] space-y-1">
                    {job.tasks.map((task, i) => (
                      <li key={i}>{task}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div id="formacao">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-normal uppercase tracking-tighter text-[var(--text)] font-display">/log/{t.nav.education.toLowerCase()}</h2>
              <div className="flex items-center gap-2 mt-6">
                <div className="h-1.5 w-16 bg-gradient-to-r from-[var(--accent-pink)] to-[var(--accent-green)] rounded-none"></div>
                <span className="font-mono text-xs text-[var(--muted)] opacity-50">sys.log</span>
              </div>
            </div>
            <div className="space-y-12 font-sans">
              <div className="border-l border-[var(--accent-green)] pl-6 relative">
                <div className="absolute w-2 h-2 bg-[var(--accent-pink)] -left-[4px] top-2"></div>
                <h3 className="text-2xl font-bold font-sans text-[var(--text)]">{t.education.degree}</h3>
                <h4 className="text-lg text-[var(--text-soft)] mb-2">{t.education.institution}</h4>
                <p className="text-sm font-bold uppercase tracking-widest text-[var(--muted)] mb-4">{t.education.period}</p>
                
                <h5 className="font-bold text-sm uppercase tracking-widest mt-6 mb-2 text-[var(--text)]">{t.education.awardsTitle}</h5>
                <p className="text-sm text-[var(--text-soft)]">{t.education.award}</p>
              </div>

              <div className="mt-12">
                <SectionHeading title={t.education.interestsTitle} />
                <ul className="list-disc list-inside text-[var(--text-soft)] space-y-2 mt-4 font-sans">
                  {t.education.interests.map((interest, i) => (
                    <li key={i}>{interest}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="bg-black border-t border-[var(--border)] text-foreground py-32 px-6 sm:px-10 lg:px-20">
        <div className="max-w-4xl mx-auto bg-[var(--surface)] p-8 md:p-12 border border-[var(--border)] shadow-[0_0_20px_var(--accent-green-soft)] rounded-none relative">
          <div className="absolute top-0 left-0 w-full h-8 bg-[var(--surface-elevated)] border-b border-[var(--border)] flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-4 font-mono text-[10px] text-[var(--muted)]">bash - randerson</span>
          </div>
          <div className="mt-8 text-left">
            <h2 className="text-xl md:text-2xl font-mono tracking-tighter mb-8 text-[var(--accent-green)]"><span className="text-[var(--accent-pink)]">www.randerson.dev:~$</span> {t.nav.contact.toLowerCase()} --open</h2>
            <p className="text-lg text-[var(--text-soft)] mb-12 font-mono">
              {"> "} {t.contact.subtitle}
              <span className="animate-pulse ml-1 inline-block w-2 h-4 bg-[var(--accent-green)] align-middle"></span>
            </p>
            <div className="flex flex-col sm:flex-row gap-6 font-mono">
              <a href="mailto:randerson.sdsn@gmail.com" className="flex items-center justify-center gap-3 border border-[var(--accent-pink)] text-[var(--accent-pink)] hover:bg-[var(--accent-pink)] hover:text-white px-8 py-4 rounded-none transition-all text-xs font-bold uppercase tracking-widest shadow-[0_0_10px_var(--accent-pink-soft)]">
                <Mail className="w-4 h-4" /> {t.contact.emailBtn}
              </a>
              <button onClick={copyEmail} className="flex items-center justify-center gap-3 bg-transparent border border-[var(--accent-green)] text-[var(--accent-green)] hover:bg-[var(--accent-green)] hover:text-black px-8 py-4 rounded-none transition-all text-xs font-bold uppercase tracking-widest shadow-[0_0_10px_var(--accent-green-soft)]">
                <Copy className="w-4 h-4" /> {t.contact.copyBtn}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}