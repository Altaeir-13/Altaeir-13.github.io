"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowUpRight, Github, Linkedin, Mail, Copy } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import SkillBadge from "@/components/SkillBadge";
import { useLocale } from "@/context/LocaleContext";

export default function Home() {
  const { t } = useLocale();
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
                  className="hero-label"
                >
                  {t.hero.labelTop}
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

      <section id="sobre" className="relative z-10 bg-background text-foreground pt-20 pb-10 px-6 sm:px-10 lg:px-20 -mt-[20vh] rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <div className="max-w-6xl mx-auto mt-10">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter" style={{ fontFamily: 'var(--font-germania-one)' }}>
              {t.about.heading}
            </h1>
            <h2 className="text-2xl md:text-3xl text-[var(--text-secondary)] font-sans mt-4 max-w-3xl">
              {t.about.subheading}
            </h2>
            <div className="flex gap-4 mt-8 flex-wrap">
              <a href="https://github.com/Altaeir-13" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[var(--bg-secondary)] border border-[var(--border-dark)] text-foreground px-6 py-3 rounded-full hover:bg-[var(--accent-color)] hover:text-white hover:border-[var(--accent-color)] transition-colors font-bold uppercase tracking-wider text-xs">
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a href="https://linkedin.com/in/randersonsousa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[var(--bg-secondary)] border border-[var(--border-dark)] text-foreground px-6 py-3 rounded-full hover:bg-[var(--accent-color)] hover:text-white hover:border-[var(--accent-color)] transition-colors font-bold uppercase tracking-wider text-xs">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div className="mt-24 max-w-4xl text-lg md:text-xl text-[var(--text-secondary)] space-y-6 leading-relaxed font-sans" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <SectionHeading title={t.about.title} />
            <p dangerouslySetInnerHTML={{ __html: t.about.p1.replace('Flutter, Dart, React, Next.js, TypeScript, Supabase/PostgreSQL e Python', '<strong>Flutter, Dart, React, Next.js, TypeScript, Supabase/PostgreSQL e Python</strong>').replace('Flutter, Dart, React, Next.js, TypeScript, Supabase/PostgreSQL, and Python', '<strong>Flutter, Dart, React, Next.js, TypeScript, Supabase/PostgreSQL, and Python</strong>') }} />
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
          </motion.div>
        </div>
      </section>

      <section id="projetos" className="bg-background text-foreground py-20 px-6 sm:px-10 lg:px-20 border-t border-[var(--border-light)]">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title={t.projects.title} subtitle={t.projects.subtitle} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.projects.list.map((proj, idx) => (
              <ProjectCard key={idx} {...proj} statusLabel={t.projects.statusLabel} contributionsLabel={t.projects.contributionsLabel} />
            ))}
          </div>
        </div>
      </section>

      <section id="habilidades" className="bg-background text-foreground py-20 px-6 sm:px-10 lg:px-20 border-t border-[var(--border-light)]">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title={t.skills.title} subtitle={t.skills.subtitle} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {t.skills.groups.map((group, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                <h3 className="text-xl font-bold uppercase tracking-widest text-[var(--accent-color)]">{group.title}</h3>
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

      <section id="experiencia" className="bg-[var(--bg-secondary)] text-foreground py-20 px-6 sm:px-10 lg:px-20 border-t border-[var(--border-light)]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">
          <div>
            <SectionHeading title={t.experience.title} />
            <div className="space-y-12">
              {t.experience.jobs.map((job, idx) => (
                <div key={idx} className="border-l-2 border-[var(--accent-color)] pl-6 relative">
                  <div className="absolute w-4 h-4 rounded-full bg-[var(--accent-color)] -left-[9px] top-1"></div>
                  <h3 className="text-2xl font-bold font-sans">{job.title}</h3>
                  <h4 className="text-lg text-[var(--text-secondary)] mb-2">{job.company}</h4>
                  <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">{job.period}</p>
                  <p className="text-[var(--text-secondary)] mb-4 text-sm">{job.description}</p>
                  <ul className="list-disc list-inside text-sm text-[var(--text-secondary)] space-y-1">
                    {job.tasks.map((task, i) => (
                      <li key={i}>{task}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div id="formacao">
            <SectionHeading title={t.education.title} />
            <div className="space-y-12">
              <div className="border-l-2 border-foreground pl-6 relative">
                <div className="absolute w-4 h-4 rounded-full bg-foreground -left-[9px] top-1"></div>
                <h3 className="text-2xl font-bold font-sans">{t.education.degree}</h3>
                <h4 className="text-lg text-[var(--text-secondary)] mb-2">{t.education.institution}</h4>
                <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">{t.education.period}</p>
                
                <h5 className="font-bold text-sm uppercase tracking-widest mt-6 mb-2">{t.education.awardsTitle}</h5>
                <p className="text-sm text-[var(--text-secondary)]">{t.education.award}</p>
              </div>

              <div className="mt-12">
                <SectionHeading title={t.education.interestsTitle} />
                <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2 mt-4 font-sans">
                  {t.education.interests.map((interest, i) => (
                    <li key={i}>{interest}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="bg-[var(--bg-secondary)] border-t border-[var(--border-light)] text-foreground py-32 px-6 sm:px-10 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8" style={{ fontFamily: 'var(--font-germania-one)' }}>{t.contact.title}</h2>
          <p className="text-xl text-[var(--text-secondary)] mb-12">
            {t.contact.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="mailto:randerson.sdsn@gmail.com" className="flex items-center justify-center gap-3 bg-[var(--accent-color)] text-white px-8 py-4 rounded-full hover:bg-foreground hover:text-background transition-colors font-bold uppercase tracking-widest">
              <Mail className="w-5 h-5" /> {t.contact.emailBtn}
            </a>
            <button onClick={copyEmail} className="flex items-center justify-center gap-3 border border-[var(--border-dark)] px-8 py-4 rounded-full hover:bg-foreground hover:text-background transition-colors font-bold uppercase tracking-widest">
              <Copy className="w-5 h-5" /> {t.contact.copyBtn}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}