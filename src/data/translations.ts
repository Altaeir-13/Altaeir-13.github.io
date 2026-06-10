export type Locale = "pt" | "en";

export const translations = {
  pt: {
    nav: {
      about: "Sobre",
      projects: "Projetos",
      skills: "Habilidades",
      experience: "Experiência",
      education: "Formação",
      contact: "Contato"
    },
    hero: {
      labelTop: "Mobile, Web & Dados",
      motto1: "Nem todos",
      motto2: "os que vagam",
      motto3: "estão perdidos",
      labelBottom: "Desenvolvedor em Formação",
      viewProfile: "Ver Perfil"
    },
    about: {
      title: "Sobre",
      heading: "Randerson de Sá",
      subheading: "Desenvolvedor em formação | Flutter, Supabase, PostgreSQL, React e Python",
      p1: "Sou graduando em Ciência da Computação pelo IFMA, com interesse em desenvolvimento de software, mobile/backend, dados e inteligência artificial aplicada. Minha trajetória envolve projetos acadêmicos e aplicados com Flutter, Dart, React, Next.js, TypeScript, Supabase/PostgreSQL e Python.",
      p2: "Tenho experiência na criação de interfaces web e mobile, integração com banco de dados, autenticação, persistência, organização de fluxos e consumo de dados. Também desenvolvo estudos e projetos em NLP, processamento de dados e segurança aplicada ao desenvolvimento, especialmente em temas como Trust & Safety, LGPD e controle de acesso.",
      p3: "Busco oportunidades de estágio ou início de carreira em tecnologia para contribuir em projetos reais, evoluir tecnicamente em equipe e aplicar boas práticas de desenvolvimento, versionamento e organização de sistemas."
    },
    projects: {
      title: "Projetos",
      subtitle: "Principais experiências acadêmicas, pessoais e de pesquisa",
      statusLabel: "Status:",
      contributionsLabel: "Principais Contribuições:",
      list: [
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
      ]
    },
    skills: {
      title: "Habilidades",
      subtitle: "Tecnologias e metodologias que estudo e aplico",
      groups: [
        { title: "Mobile", skills: ["Flutter", "Dart", "Prototipagem", "Integração Supabase", "Persistência local/remota", "Consumo de dados"] },
        { title: "Backend & DB", skills: ["Supabase", "PostgreSQL", "SQL", "PostgREST", "Autenticação", "Row Level Security (RLS)", "APIs RESTful", "Modelagem relacional"] },
        { title: "Frontend", skills: ["React", "Next.js", "Vite", "TypeScript", "React Query", "Formulários", "Rotas", "Estados assíncronos"] },
        { title: "Dados e IA", skills: ["Python", "Pandas", "Matplotlib", "Scikit-learn", "TF-IDF", "NLP", "OpenCV", "NumPy"] },
        { title: "Versionamento", skills: ["Git", "GitHub", "Commits", "Branches", "Pull requests", "Cypress", "Testes manuais"] },
        { title: "Engenharia", skills: ["Lógica de programação", "Separação de responsabilidades", "Arquitetura em camadas", "UML", "Documentação técnica", "Modelagem de sistemas"] },
        { title: "Segurança Aplicada", skills: ["LGPD", "Controle de acesso", "Privacidade", "Trust & Safety", "Fundamentos de criptografia"] }
      ]
    },
    experience: {
      title: "Experiência",
      jobs: [
        {
          title: "Instrutor e Bolsista",
          company: "Raspberry Pi Foundation - Projeto de Extensão",
          period: "Jun 2025 – Dez 2025 | Caxias, MA",
          description: "Atuação no ensino de lógica de programação, fundamentos de sistemas e conceitos técnicos para estudantes em formação.",
          tasks: [
            "Ensino de lógica de programação e fundamentos de sistemas.",
            "Explicação de fluxos de backend e arquitetura de forma acessível.",
            "Apoio a estudantes em atividades práticas.",
            "Desenvolvimento de comunicação técnica e didática."
          ]
        },
        {
          title: "Desenvolvedor de Sistemas Embarcados & Instrutor",
          company: "Clube de Robótica do IFMA",
          period: "2023 – Presente | Caxias, MA",
          description: "Atuação em projetos de robótica, programação e integração hardware/software.",
          tasks: [
            "Tutoria de novos membros.",
            "Ensino de eletrônica, circuitos e microcontroladores Arduino/ESP32.",
            "Apoio em depuração e processamento de sensores.",
            "Aplicação de lógica de programação em projetos físicos."
          ]
        }
      ]
    },
    education: {
      title: "Formação",
      degree: "Bacharelado em Ciência da Computação",
      institution: "Instituto Federal do Maranhão (IFMA)",
      period: "2023 – 2027 | Caxias, MA",
      awardsTitle: "Premiação:",
      award: "Medalhista de Prata - Olimpíada Brasileira de Astronomia e Astronáutica (OBA), 2022",
      interestsTitle: "Interesses Acadêmicos",
      interests: [
        "NLP e detecção de astroturfing",
        "Trust & Safety e integridade da informação",
        "Processamento de dados textuais em português",
        "Segurança aplicada ao desenvolvimento, LGPD e RLS",
        "Visão computacional acadêmica (OpenCV, Proc. Digital de Imagens)"
      ]
    },
    contact: {
      title: "Vamos Conversar",
      subtitle: "Estou aberto a oportunidades de estágio, projetos acadêmicos e colaborações em desenvolvimento mobile, backend, dados e IA aplicada.",
      emailBtn: "Enviar E-mail",
      copyBtn: "Copiar Endereço",
      copied: "E-mail copiado para a área de transferência!"
    }
  },
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      skills: "Skills",
      experience: "Experience",
      education: "Education",
      contact: "Contact"
    },
    hero: {
      labelTop: "Mobile, Web & Data",
      motto1: "Not All",
      motto2: "Those Who Wander",
      motto3: "Are Lost",
      labelBottom: "Developer in Training",
      viewProfile: "View Profile"
    },
    about: {
      title: "About",
      heading: "Randerson de Sá",
      subheading: "Developer in training | Flutter, Supabase, PostgreSQL, React and Python",
      p1: "I am a Computer Science undergraduate at IFMA, with interests in software development, mobile/backend, data, and applied artificial intelligence. My background involves academic and applied projects using Flutter, Dart, React, Next.js, TypeScript, Supabase/PostgreSQL, and Python.",
      p2: "I have experience creating web and mobile interfaces, integrating databases, authentication, persistence, flow organization, and data consumption. I also conduct studies and projects in NLP, data processing, and applied development security, especially in topics like Trust & Safety, LGPD, and access control.",
      p3: "I am looking for internship or entry-level technology opportunities to contribute to real projects, evolve technically within a team, and apply good practices in development, versioning, and system organization."
    },
    projects: {
      title: "Projects",
      subtitle: "Main academic, personal, and research experiences",
      statusLabel: "Status:",
      contributionsLabel: "Main Contributions:",
      list: [
        {
          title: "FADIR",
          status: "In progress",
          type: "Personal/academic project",
          description: "Mobile project in development to study and apply architecture with backend as a service, authentication, data persistence, and data separation per user.",
          technologies: ["Flutter", "Dart", "Supabase", "PostgreSQL", "RLS"],
          contributions: [
            "Development of mobile screens and flows with Flutter/Dart.",
            "Integration with Supabase/PostgreSQL.",
            "Study and application of authentication and RLS for access control.",
            "Separation between interface, business rules, and persistence."
          ]
        },
        {
          title: "Integrated SAMU Ecosystem",
          status: "Completed",
          type: "Academic/applied project",
          description: "Integrated solution aimed at attendance and dispatch management, involving an administrative web panel and support for mobile prototyping.",
          technologies: ["Next.js", "Flutter", "TypeScript", "Supabase", "React Query"],
          contributions: [
            "Participation in the development of the administrative web panel.",
            "Support for mobile prototyping.",
            "Integration with Supabase/PostgreSQL and use of React Query for synchronization.",
            "Organization of data-connected interfaces."
          ]
        },
        {
          title: "Animal Adoption Platform",
          status: "Completed",
          type: "Academic/social project",
          description: "Web application for registration, visualization, and organization of animals available for adoption in an academic/social context.",
          technologies: ["React", "Vite", "TypeScript", "Supabase", "PostgreSQL"],
          contributions: [
            "SPA development with React/Vite.",
            "Creation of forms and registration screens.",
            "Integration with Supabase/PostgreSQL.",
            "Organization of adoption data and flows."
          ]
        },
        {
          title: "Automatic Astroturfing Detection in Portuguese Consumer Reviews",
          status: "In progress",
          type: "Undergraduate thesis / Research",
          description: "Academic research focused on identifying fake, artificial, or coordinated reviews in Portuguese using Natural Language Processing and classical Machine Learning techniques.",
          technologies: ["Python", "Scikit-learn", "TF-IDF", "NLTK/spaCy", "Pandas"],
          contributions: [
            "Study of text classification and preprocessing of Portuguese texts.",
            "Vectorization with TF-IDF and experimentation with Logistic Regression.",
            "Evaluation with metrics (accuracy, precision, recall, F1-score).",
            "Connection to Trust & Safety and information integrity."
          ]
        },
        {
          title: "Biomedical Data Processing",
          status: "Completed",
          type: "Technical support in research",
          description: "Technical support in cleaning, organizing, and visualizing numerical data extracted from cytological samples.",
          technologies: ["Python", "Pandas", "Matplotlib"],
          contributions: [
            "Basic data cleaning with Pandas.",
            "Organization of DataFrames.",
            "Generation of histograms and scatter plots with Matplotlib.",
            "Support for visual interpretation of biomedical patterns."
          ]
        },
        {
          title: "Opportunity Screening Automation",
          status: "Study/applied project",
          type: "Personal automation",
          description: "Automation flow for screening and categorizing opportunities, jobs, and scholarships using orchestration with n8n and prompt engineering techniques.",
          technologies: ["Python", "n8n", "LLM APIs", "JSON/Markdown"],
          contributions: [
            "Structuring of automated flows.",
            "Use of prompts for structured output.",
            "Organization of information in JSON and Markdown.",
            "Application for personal productivity."
          ]
        }
      ]
    },
    skills: {
      title: "Skills",
      subtitle: "Technologies and methodologies I study and apply",
      groups: [
        { title: "Mobile", skills: ["Flutter", "Dart", "Prototyping", "Supabase Integration", "Local/remote persistence", "Data consumption"] },
        { title: "Backend & DB", skills: ["Supabase", "PostgreSQL", "SQL", "PostgREST", "Authentication", "Row Level Security (RLS)", "RESTful APIs", "Relational modeling"] },
        { title: "Frontend", skills: ["React", "Next.js", "Vite", "TypeScript", "React Query", "Forms", "Routing", "Async states"] },
        { title: "Data & AI", skills: ["Python", "Pandas", "Matplotlib", "Scikit-learn", "TF-IDF", "NLP", "OpenCV", "NumPy"] },
        { title: "Versioning", skills: ["Git", "GitHub", "Commits", "Branches", "Pull requests", "Cypress", "Manual testing"] },
        { title: "Engineering", skills: ["Programming logic", "Separation of concerns", "Layered architecture", "UML", "Technical documentation", "System modeling"] },
        { title: "Applied Security", skills: ["GDPR/LGPD", "Access control", "Privacy", "Trust & Safety", "Cryptography basics"] }
      ]
    },
    experience: {
      title: "Experience",
      jobs: [
        {
          title: "Instructor and Fellow",
          company: "Raspberry Pi Foundation - Extension Project",
          period: "Jun 2025 – Dec 2025 | Caxias, MA",
          description: "Working on teaching programming logic, system fundamentals, and technical concepts to students in training.",
          tasks: [
            "Teaching programming logic and system fundamentals.",
            "Explaining backend flows and architecture in an accessible way.",
            "Supporting students in practical activities.",
            "Development of technical and didactic communication."
          ]
        },
        {
          title: "Embedded Systems Developer & Instructor",
          company: "IFMA Robotics Club",
          period: "2023 – Present | Caxias, MA",
          description: "Working on robotics projects, programming, and hardware/software integration.",
          tasks: [
            "Tutoring new members.",
            "Teaching electronics, circuits, and Arduino/ESP32 microcontrollers.",
            "Support in debugging and sensor processing.",
            "Application of programming logic in physical projects."
          ]
        }
      ]
    },
    education: {
      title: "Education",
      degree: "Bachelor's Degree in Computer Science",
      institution: "Federal Institute of Maranhão (IFMA)",
      period: "2023 – 2027 | Caxias, MA",
      awardsTitle: "Awards:",
      award: "Silver Medalist - Brazilian Astronomy and Astronautics Olympics (OBA), 2022",
      interestsTitle: "Academic Interests",
      interests: [
        "NLP and astroturfing detection",
        "Trust & Safety and information integrity",
        "Processing of text data in Portuguese",
        "Applied development security, LGPD and RLS",
        "Academic computer vision (OpenCV, Digital Image Processing)"
      ]
    },
    contact: {
      title: "Get in Touch",
      subtitle: "Open to internship opportunities, academic projects, and collaborations in mobile development, backend, data, and applied AI.",
      emailBtn: "Send E-mail",
      copyBtn: "Copy Address",
      copied: "E-mail copied to clipboard!"
    }
  }
};
