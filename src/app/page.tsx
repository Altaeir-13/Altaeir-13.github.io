"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowUpRight, Github, Linkedin, Mail, Copy } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import SkillBadge from "@/components/SkillBadge";

export default function Home() {
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
    alert("E-mail copiado para a área de transferência!");
  };

  const projects = [
    {
      title: "FADIR",
      status: "Em andamento",
      type: "Projeto pessoal/acadêmico",
      description: "Projeto mobile em desenvolvimento para estudo e aplicação de arquitetura com backend as a service, autenticação, persistência de dados e separação de dados por usuário.",
      technologies: ["Flutter", "Dart", "Supabase", "PostgreSQL", "RLS"],
      contributions: [
        "Desenvolvimento de telas e fluxos mobile com Flutter/Dart.",
        "Integração com Supabase/PostgreSQL.",
        "Estudo e aplicação de autenticação e RLS para controle de acesso.",
        "Separação entre interface, regras de negócio e persistência."
      ]
    },
    {
      title: "Ecossistema Integrado SAMU",
      status: "Concluído",
      type: "Projeto acadêmico/aplicado",
      description: "Solução integrada voltada à gestão de atendimento e despacho, envolvendo painel web administrativo e apoio à prototipagem mobile.",
      technologies: ["Next.js", "Flutter", "TypeScript", "Supabase", "React Query"],
      contributions: [
        "Participação no desenvolvimento do painel web administrativo.",
        "Apoio à prototipagem mobile.",
        "Integração com Supabase/PostgreSQL e uso de React Query para sincronização.",
        "Organização de interfaces conectadas a dados."
      ]
    },
    {
      title: "Plataforma de Adoção de Animais",
      status: "Concluído",
      type: "Projeto acadêmico/social",
      description: "Aplicação web para cadastro, visualização e organização de animais disponíveis para adoção no contexto acadêmico/social.",
      technologies: ["React", "Vite", "TypeScript", "Supabase", "PostgreSQL"],
      contributions: [
        "Desenvolvimento de SPA com React/Vite.",
        "Criação de formulários e telas de cadastro.",
        "Integração com Supabase/PostgreSQL.",
        "Organização de dados e fluxos de adoção."
      ]
    },
    {
      title: "Detecção Automática de Astroturfing em Avaliações em Português",
      status: "Em andamento",
      type: "Pesquisa acadêmica / TCC",
      description: "Pesquisa acadêmica voltada à identificação de avaliações falsas, artificiais ou coordenadas em português usando técnicas de Processamento de Linguagem Natural e Machine Learning clássico.",
      technologies: ["Python", "Scikit-learn", "TF-IDF", "NLTK/spaCy", "Pandas"],
      contributions: [
        "Estudo de classificação textual e pré-processamento de textos em português.",
        "Vetorização com TF-IDF e experimentação com Regressão Logística.",
        "Avaliação com métricas (acurácia, precision, recall, F1-score).",
        "Relação com Trust & Safety e integridade da informação."
      ]
    },
    {
      title: "Processamento de Dados Biomédicos",
      status: "Concluído",
      type: "Apoio técnico em pesquisa",
      description: "Apoio técnico na limpeza, organização e visualização de dados numéricos extraídos de amostras citológicas.",
      technologies: ["Python", "Pandas", "Matplotlib"],
      contributions: [
        "Limpeza básica de dados com Pandas.",
        "Organização de DataFrames.",
        "Geração de histogramas e gráficos de dispersão com Matplotlib.",
        "Apoio à interpretação visual de padrões biomédicos."
      ]
    },
    {
      title: "Automação e Triagem de Oportunidades",
      status: "Estudo/projeto aplicado",
      type: "Automação pessoal",
      description: "Fluxo de automação para triagem e categorização de oportunidades, vagas e bolsas usando orquestração com n8n e técnicas de engenharia de prompts.",
      technologies: ["Python", "n8n", "APIs de LLM", "JSON/Markdown"],
      contributions: [
        "Estruturação de fluxos automatizados.",
        "Uso de prompts para saída estruturada.",
        "Organização de informações em JSON e Markdown.",
        "Aplicação para produtividade pessoal."
      ]
    }
  ];

  const skillGroups = [
    { title: "Mobile", skills: ["Flutter", "Dart", "Prototipagem", "Integração Supabase", "Persistência local/remota", "Consumo de dados"] },
    { title: "Backend & DB", skills: ["Supabase", "PostgreSQL", "SQL", "PostgREST", "Autenticação", "Row Level Security (RLS)", "APIs RESTful", "Modelagem relacional"] },
    { title: "Frontend", skills: ["React", "Next.js", "Vite", "TypeScript", "React Query", "Formulários", "Rotas", "Estados assíncronos"] },
    { title: "Dados e IA", skills: ["Python", "Pandas", "Matplotlib", "Scikit-learn", "TF-IDF", "NLP", "OpenCV", "NumPy"] },
    { title: "Versionamento", skills: ["Git", "GitHub", "Commits", "Branches", "Pull requests", "Cypress", "Testes manuais"] },
    { title: "Engenharia", skills: ["Lógica de programação", "Separação de responsabilidades", "Arquitetura em camadas", "UML", "Documentação técnica", "Modelagem de sistemas"] },
    { title: "Segurança Aplicada", skills: ["LGPD", "Controle de acesso", "Privacidade", "Trust & Safety", "Fundamentos de criptografia"] }
  ];

  return (
    <div className="relative bg-black h-auto pb-32">
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
                  Mobile, Web & Dados
                </motion.span>
                <div className="hero-title">
                  <div className="hero-title-line">
                    <motion.span initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} style={{ x: moveLeft, y: moveUp }}>
                      Not All
                    </motion.span>
                    <motion.span initial={{ scale: 0, rotate: -45 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: 0.3, type: "spring" }} style={{ rotate: rotateIcon, y: moveUp }} className="accent-box-lime">
                      <span className="text-2xl font-black">*</span>
                    </motion.span>
                    <motion.span initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} style={{ x: moveRight, y: moveUp }}>
                      Those
                    </motion.span>
                  </div>
                  <div className="hero-title-line">
                    <motion.span initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} style={{ x: moveRight, y: moveUp }}>
                      Who Wander
                    </motion.span>
                    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }} style={{ y: moveUp }} className="accent-box-grid">
                      <span /><span /><span /><span />
                    </motion.span>
                  </div>
                  <div className="hero-title-line">
                    <motion.span initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.1 }} style={{ x: moveLeft, y: moveDown }}>
                      Are
                    </motion.span>
                    <motion.span initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.1 }} style={{ x: moveRight, y: moveDown }} className="hero-accent-text">
                      Lost
                    </motion.span>
                    <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 }} style={{ x: moveRight, y: moveDown }} className="accent-box-icon">
                      <ArrowUpRight className="h-6 w-6" />
                    </motion.span>
                  </div>
                </div>
              </div>

              <div className="hero-content mt-12">
                <motion.span style={{ x: moveLeft }} className="hero-label">Desenvolvedor em Formação</motion.span>
                <motion.a initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 }} href="#sobre" className="hero-CTA">
                  Ver Perfil
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-black">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </motion.a>
              </div>
            </div>
          </motion.main>
        </div>
      </div>

      <section id="sobre" className="relative z-10 bg-white text-black pt-20 pb-10 px-6 sm:px-10 lg:px-20 -mt-[20vh] rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <div className="max-w-6xl mx-auto mt-10">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter" style={{ fontFamily: 'var(--font-germania-one)' }}>
              Randerson de Sá
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-500 font-sans mt-4 max-w-3xl">
              Desenvolvedor em formação | Flutter, Supabase, PostgreSQL, React e Python
            </h2>
            <div className="flex gap-4 mt-8 flex-wrap">
              <a href="https://github.com/Altaeir-13" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-[var(--accent-color)] transition-colors font-bold uppercase tracking-wider text-xs">
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a href="https://linkedin.com/in/randersonsousa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-[var(--accent-color)] transition-colors font-bold uppercase tracking-wider text-xs">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div className="mt-24 max-w-4xl text-lg md:text-xl text-gray-700 space-y-6 leading-relaxed font-sans" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <SectionHeading title="Sobre" />
            <p>
              Sou graduando em Ciência da Computação pelo IFMA, com interesse em desenvolvimento de software, mobile/backend, dados e inteligência artificial aplicada. Minha trajetória envolve projetos acadêmicos e aplicados com <strong>Flutter, Dart, React, Next.js, TypeScript, Supabase/PostgreSQL e Python</strong>.
            </p>
            <p>
              Tenho experiência na criação de interfaces web e mobile, integração com banco de dados, autenticação, persistência, organização de fluxos e consumo de dados. Também desenvolvo estudos e projetos em NLP, processamento de dados e segurança aplicada ao desenvolvimento, especialmente em temas como Trust & Safety, LGPD e controle de acesso.
            </p>
            <p>
              Busco oportunidades de estágio ou início de carreira em tecnologia para contribuir em projetos reais, evoluir tecnicamente em equipe e aplicar boas práticas de desenvolvimento, versionamento e organização de sistemas.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="projetos" className="bg-white text-black py-20 px-6 sm:px-10 lg:px-20 border-t border-black/5">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="Projetos" subtitle="Principais experiências acadêmicas, pessoais e de pesquisa" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((proj, idx) => (
              <ProjectCard key={idx} {...proj} />
            ))}
          </div>
        </div>
      </section>

      <section id="habilidades" className="bg-white text-black py-20 px-6 sm:px-10 lg:px-20 border-t border-black/5">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="Habilidades" subtitle="Tecnologias e metodologias que estudo e aplico" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {skillGroups.map((group, idx) => (
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

      <section id="experiencia" className="bg-[var(--bg-secondary)] text-black py-20 px-6 sm:px-10 lg:px-20 border-t border-black/5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">
          <div>
            <SectionHeading title="Experiência" />
            <div className="space-y-12">
              <div className="border-l-2 border-[var(--accent-color)] pl-6 relative">
                <div className="absolute w-4 h-4 rounded-full bg-[var(--accent-color)] -left-[9px] top-1"></div>
                <h3 className="text-2xl font-bold font-sans">Instructor and Fellow</h3>
                <h4 className="text-lg text-gray-600 mb-2">Raspberry Pi Foundation - Extension Project</h4>
                <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Jun 2025 – Dec 2025 | Caxias, MA</p>
                <p className="text-gray-700 mb-4 text-sm">Atuação no ensino de lógica de programação, fundamentos de sistemas e conceitos técnicos para estudantes em formação.</p>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  <li>Ensino de lógica de programação e fundamentos de sistemas.</li>
                  <li>Explicação de fluxos de backend e arquitetura de forma acessível.</li>
                  <li>Apoio a estudantes em atividades práticas.</li>
                  <li>Desenvolvimento de comunicação técnica e didática.</li>
                </ul>
              </div>

              <div className="border-l-2 border-[var(--accent-color)] pl-6 relative">
                <div className="absolute w-4 h-4 rounded-full bg-[var(--accent-color)] -left-[9px] top-1"></div>
                <h3 className="text-2xl font-bold font-sans">Embedded Systems Developer & Instructor</h3>
                <h4 className="text-lg text-gray-600 mb-2">IFMA Robotics Club</h4>
                <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">2023 – Presente | Caxias, MA</p>
                <p className="text-gray-700 mb-4 text-sm">Atuação em projetos de robótica, programação e integração hardware/software.</p>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  <li>Tutoria de novos membros.</li>
                  <li>Ensino de eletrônica, circuitos e microcontroladores Arduino/ESP32.</li>
                  <li>Apoio em depuração e processamento de sensores.</li>
                  <li>Aplicação de lógica de programação em projetos físicos.</li>
                </ul>
              </div>
            </div>
          </div>

          <div id="formacao">
            <SectionHeading title="Formação" />
            <div className="space-y-12">
              <div className="border-l-2 border-black pl-6 relative">
                <div className="absolute w-4 h-4 rounded-full bg-black -left-[9px] top-1"></div>
                <h3 className="text-2xl font-bold font-sans">Bacharelado em Ciência da Computação</h3>
                <h4 className="text-lg text-gray-600 mb-2">Instituto Federal do Maranhão (IFMA)</h4>
                <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">2023 – 2027 | Caxias, MA</p>
                
                <h5 className="font-bold text-sm uppercase tracking-widest mt-6 mb-2">Premiação:</h5>
                <p className="text-sm text-gray-700">Silver Medalist - Brazilian Astronomy and Astronautics Olympics (OBA), 2022</p>
              </div>

              <div className="mt-12">
                <SectionHeading title="Interesses Acadêmicos" />
                <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4 font-sans">
                  <li>NLP e detecção de astroturfing</li>
                  <li>Trust & Safety e integridade da informação</li>
                  <li>Processamento de dados textuais em português</li>
                  <li>Segurança aplicada ao desenvolvimento, LGPD e RLS</li>
                  <li>Visão computacional acadêmica (OpenCV, Proc. Digital de Imagens)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="bg-black text-white py-32 px-6 sm:px-10 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8" style={{ fontFamily: 'var(--font-germania-one)' }}>Vamos Conversar</h2>
          <p className="text-xl text-gray-400 mb-12">
            Estou aberto a oportunidades de estágio, projetos acadêmicos e colaborações em desenvolvimento mobile, backend, dados e IA aplicada.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="mailto:randerson.sdsn@gmail.com" className="flex items-center justify-center gap-3 bg-[var(--accent-color)] text-black px-8 py-4 rounded-full hover:bg-white transition-colors font-bold uppercase tracking-widest">
              <Mail className="w-5 h-5" /> Enviar E-mail
            </a>
            <button onClick={copyEmail} className="flex items-center justify-center gap-3 border border-white/20 px-8 py-4 rounded-full hover:bg-white/10 transition-colors font-bold uppercase tracking-widest">
              <Copy className="w-5 h-5" /> Copiar Endereço
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}