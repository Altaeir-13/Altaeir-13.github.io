export type Locale = "pt" | "en" | "es";

export const translations = {
  pt: {
    nav: {
      about: "#Eu",
      projects: "Meu Ofício",
      skills: "Habilidades",
      experience: "Experiência",
      education: "Formação",
      contact: "Contato"
    },
    sidebar: {
      desc: "Desenvolvedor em formação e estudante de Ciência da Computação, interessado em mobile, backend, dados e IA aplicada.",
      portfolio: "Portfolio Archive"
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
      dossier: "Um curto dossiê técnico-pessoal.",
      metaTitle: "[metadados do terminal]",
      metaStatus: "Status:",
      metaFocus: "Foco:",
      metaLocation: "Localização:",
      metaInterests: "Interesses:",
      statusText: "Estudante de Ciência da Computação",
      focusText: "Mobile, Backend, Dados",
      locationText: "Brasil",
      interestsText: "IA Aplicada, arquitetura de software, escrita técnica",
      heading: "Randerson de Sá",
      subheading: "Desenvolvedor em formação | Flutter, Supabase, PostgreSQL, React e Python",
      p1: "Sou graduando em Ciência da Computação pelo IFMA, com interesse em desenvolvimento de software, mobile/backend, dados e inteligência artificial aplicada. Minha trajetória envolve projetos acadêmicos e aplicados com Flutter, Dart, React, Next.js, TypeScript, Supabase/PostgreSQL e Python.",
      p2: "Tenho experiência na criação de interfaces web e mobile, integração com banco de dados, autenticação, persistência, organização de fluxos e consumo de dados. Também desenvolvo estudos e projetos em NLP, processamento de dados e segurança aplicada ao desenvolvimento, especialmente em temas como Trust & Safety, LGPD e controle de acesso.",
      p3: "Busco oportunidades de estágio ou início de carreira em tecnologia para contribuir em projetos reais, evoluir tecnicamente em equipe e aplicar boas práticas de desenvolvimento, versionamento e organização de sistemas."
    },
    projects: {
      title: "Meus Projetos",
      subtitle: "Um arquivo de experimentos, produtos e repositórios open-source.",
      labels: {
        status: "Status:",
        type: "Tipo:",
        stack: "Stack:",
        contributions: "Contribuições:"
      },
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
      contextLabel: "Contexto:",
      impactLabel: "Impacto:",
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
      title: "Formação & Academia",
      degreeLabel: "Grau:",
      institutionLabel: "Instituição:",
      locationLabel: "Localização:",
      periodLabel: "Período:",
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
      title: "Contato",
      subtitle: "Estou aberto a oportunidades de estágio, projetos acadêmicos e colaborações em desenvolvimento mobile, backend, dados e IA aplicada.",
      emailBtn: "Enviar E-mail",
      copyBtn: "Copiar Endereço",
      copied: "E-mail copiado para a área de transferência!"
    },
    terminal: {
      helpText: `Comandos disponíveis:\nabout, banner, curiosity, date, donate, email, github, help, linkedin, clear, neofetch, projects, repos, snake, sudo, team, vi, vim, weather, whoami\n\n[tab]       completa comandos.\n[ctrl+l]    limpa o terminal.\n[ctrl+c]    cancela o comando atual.`,
      notFound: "Comando não encontrado:",
      typeHelp: 'Digite "help" para ver os comandos disponíveis.',
      dateLabels: {
        weekday: "Dia da semana:", month: "Mês:", day: "Dia do mês:", dayYear: "Dia do ano:", year: "Ano:", time: "Hora:", tzOffset: "Fuso horário:", tzName: "Nome do fuso:", locale: "Localidade:"
      },
      neofetch: {
        role: "Estudante de Ciência da Computação",
        focus: "Mobile, Backend, Dados, IA Aplicada",
        status: "aberto a oportunidades de estágio",
        location: "Brasil"
      },
      aboutText: "Randerson de Sá é um desenvolvedor em formação focado em mobile, backend, dados e IA aplicada.\n\nEste portfólio funciona como um arquivo pessoal de projetos, habilidades e experimentos.",
      whoamiText: "randerson\nEstudante de Ciência da Computação\nFoco: Mobile, Backend, Dados, IA Aplicada\nLocalização: Brasil",
      projectsText: `Arquivo de projetos:\n[01] FADIR\n[02] Ecossistema Integrado SAMU\n[03] Plataforma de Adoção de Animais\n[04] Astroturfing Detection\n\nDigite "open craft" ou use a barra lateral para inspecionar arquivos de projeto.`,
      reposText: "Índice de repositório não configurado completamente.\nUse: github",
      githubText: "Integração do GitHub aguardando setup final.",
      linkedinText: "Integração do LinkedIn aguardando setup final.",
      emailText: "E-mail não configurado ainda.",
      donateText: "Sem endpoint de doação configurado. Apoie explorando o arquivo.",
      sudoText: "Permissão negada: este incidente será reportado.",
      teamText: "Arquivo solo mantido por Randerson de Sá.\nColaborações podem aparecer dentro dos arquivos de projeto.",
      viText: "Abrindo vim...\nBrincadeira. Pressione :q para escapar do modo imaginário.",
      qText: "Saiu do vim imaginário.",
      weatherText: "Serviço de clima indisponível em modo de arquivo estático.\nPrevisão atual: tema escuro, névoa neon, 100% de chance de código.",
      snakeText: "Módulo snake carregado.\nUse as setas. Pressione ESC para sair.",
      navigating: "Navegando para",
      sidebarPrompt: "use a barra lateral para explorar o arquivo ou digite help ...",
      bootLog1: "Inicializando portfolio_archive...",
      bootLog2: "Carregando módulos de memória...",
      bootLog3: "Montando interface do terminal..."
    }
  },
  en: {
    nav: {
      about: "#Me",
      projects: "My Craft",
      skills: "Skills",
      experience: "Experience",
      education: "Education",
      contact: "Contact"
    },
    sidebar: {
      desc: "Developer in training and Computer Science student focused on mobile, backend, data and applied AI.",
      portfolio: "Portfolio Archive"
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
      dossier: "A short technical-personal dossier.",
      metaTitle: "[terminal metadata]",
      metaStatus: "Status:",
      metaFocus: "Focus:",
      metaLocation: "Location:",
      metaInterests: "Interests:",
      statusText: "Computer Science student",
      focusText: "Mobile, Backend, Data",
      locationText: "Brazil",
      interestsText: "Applied AI, software architecture, technical writing",
      heading: "Randerson de Sá",
      subheading: "Developer in training | Flutter, Supabase, PostgreSQL, React and Python",
      p1: "I am a Computer Science undergraduate at IFMA, with interests in software development, mobile/backend, data, and applied artificial intelligence. My background involves academic and applied projects using Flutter, Dart, React, Next.js, TypeScript, Supabase/PostgreSQL, and Python.",
      p2: "I have experience creating web and mobile interfaces, integrating databases, authentication, persistence, flow organization, and data consumption. I also conduct studies and projects in NLP, data processing, and applied development security, especially in topics like Trust & Safety, LGPD, and access control.",
      p3: "I am looking for internship or entry-level technology opportunities to contribute to real projects, evolve technically within a team, and apply good practices in development, versioning, and system organization."
    },
    projects: {
      title: "My Craft",
      subtitle: "An archive of experiments, products, and open-source repositories.",
      labels: {
        status: "Status:",
        type: "Type:",
        stack: "Stack:",
        contributions: "Contributions:"
      },
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
      contextLabel: "Context:",
      impactLabel: "Impact:",
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
      title: "Education & Academia",
      degreeLabel: "Degree:",
      institutionLabel: "Institution:",
      locationLabel: "Location:",
      periodLabel: "Period:",
      degree: "Bachelor's in Computer Science",
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
      title: "Contact",
      subtitle: "Open to internship opportunities, academic projects, and collaborations in mobile development, backend, data, and applied AI.",
      emailBtn: "Send E-mail",
      copyBtn: "Copy Address",
      copied: "E-mail copied to clipboard!"
    },
    terminal: {
      helpText: `Available commands:\nabout, banner, curiosity, date, donate, email, github, help, linkedin, clear, neofetch, projects, repos, snake, sudo, team, vi, vim, weather, whoami\n\n[tab]       trigger completion.\n[ctrl+l]    clear terminal.\n[ctrl+c]    cancel current command.`,
      notFound: "Command not found:",
      typeHelp: 'Type "help" to see available commands.',
      dateLabels: {
        weekday: "Weekday:", month: "Month:", day: "Day of month:", dayYear: "Day of year:", year: "Year:", time: "Time:", tzOffset: "Timezone offset:", tzName: "Timezone name:", locale: "Locale:"
      },
      neofetch: {
        role: "Computer Science Student",
        focus: "Mobile, Backend, Data, Applied AI",
        status: "open to internship opportunities",
        location: "Brazil"
      },
      aboutText: "Randerson de Sá is a developer in training focused on mobile, backend, data and applied AI.\n\nThis portfolio works as a personal archive of projects, skills and experiments.",
      whoamiText: "randerson\nComputer Science Student\nFocus: Mobile, Backend, Data, Applied AI\nLocation: Brazil",
      projectsText: `Projects archive:\n[01] FADIR\n[02] Integrated SAMU Ecosystem\n[03] Animal Adoption Platform\n[04] Astroturfing Detection\n\nType "open craft" or use the sidebar to inspect project files.`,
      reposText: "Repository index is not fully configured yet.\nUse: github",
      githubText: "GitHub integration pending final link setup.",
      linkedinText: "LinkedIn integration pending final link setup.",
      emailText: "Email not configured yet.",
      donateText: "No donation endpoint configured. Support by exploring the archive.",
      sudoText: "Permission denied: this incident will be reported.",
      teamText: "Solo archive maintained by Randerson de Sá.\nCollaborations may appear inside project files.",
      viText: "Opening vim...\nJust kidding. Press :q to escape imaginary mode.",
      qText: "Exited imaginary vim.",
      weatherText: "Weather service unavailable in static archive mode.\nCurrent forecast: dark theme, neon fog, 100% chance of code.",
      snakeText: "Snake module loaded.\nUse arrow keys. Press ESC to quit.",
      navigating: "Navigating to",
      sidebarPrompt: "use sidebar to explore the archive or type help ...",
      bootLog1: "Initializing portfolio_archive...",
      bootLog2: "Loading memory modules...",
      bootLog3: "Mounting terminal interface..."
    }
  },
  es: {
    nav: {
      about: "#Yo",
      projects: "Mi Oficio",
      skills: "Habilidades",
      experience: "Experiencia",
      education: "Educación",
      contact: "Contacto"
    },
    sidebar: {
      desc: "Desarrollador en formación y estudiante de Ciencias de la Computación, interesado en mobile, backend, datos e IA aplicada.",
      portfolio: "Portfolio Archive"
    },
    hero: {
      labelTop: "Mobile, Web & Datos",
      motto1: "No todos",
      motto2: "los que vagan",
      motto3: "están perdidos",
      labelBottom: "Desarrollador en formación",
      viewProfile: "Ver Perfil"
    },
    about: {
      title: "Sobre mí",
      dossier: "Un breve dossier técnico-personal.",
      metaTitle: "[metadatos del terminal]",
      metaStatus: "Estado:",
      metaFocus: "Enfoque:",
      metaLocation: "Ubicación:",
      metaInterests: "Intereses:",
      statusText: "Estudiante de Ciencias de la Computación",
      focusText: "Mobile, Backend, Datos",
      locationText: "Brasil",
      interestsText: "IA Aplicada, arquitectura de software, redacción técnica",
      heading: "Randerson de Sá",
      subheading: "Desarrollador en formación | Flutter, Supabase, PostgreSQL, React y Python",
      p1: "Soy estudiante de Ciencias de la Computación en el IFMA, con interés en desarrollo de software, mobile/backend, datos e inteligencia artificial aplicada. Mi trayectoria involucra proyectos académicos y aplicados con Flutter, Dart, React, Next.js, TypeScript, Supabase/PostgreSQL y Python.",
      p2: "Tengo experiencia en la creación de interfaces web y mobile, integración con bases de datos, autenticación, persistencia, organización de flujos y consumo de datos. También desarrollo estudios y proyectos en PNL, procesamiento de datos y seguridad aplicada al desarrollo, especialmente en temas como Trust & Safety, LGPD y control de acceso.",
      p3: "Busco oportunidades de prácticas o inicio de carrera en tecnología para contribuir en proyectos reales, evolucionar técnicamente en equipo y aplicar buenas prácticas de desarrollo, versionado y organización de sistemas."
    },
    projects: {
      title: "Mis Proyectos",
      subtitle: "Un archivo de experimentos, productos y repositorios de código abierto.",
      labels: {
        status: "Estado:",
        type: "Tipo:",
        stack: "Stack:",
        contributions: "Contribuciones:"
      },
      list: [
        {
          title: "FADIR",
          status: "En progreso",
          type: "Proyecto personal/académico",
          description: "Proyecto mobile en desarrollo para estudio y aplicación de arquitectura con backend as a service, autenticación, persistencia de datos y separación de datos por usuario.",
          technologies: ["Flutter", "Dart", "Supabase", "PostgreSQL", "RLS"],
          contributions: [
            "Desarrollo de pantallas y flujos mobile con Flutter/Dart.",
            "Integración con Supabase/PostgreSQL.",
            "Estudio y aplicación de autenticación y RLS para control de acceso.",
            "Separación entre interfaz, reglas de negocio y persistencia."
          ]
        },
        {
          title: "Ecosistema Integrado SAMU",
          status: "Completado",
          type: "Proyecto académico/aplicado",
          description: "Solución integrada orientada a la gestión de atención y despacho, involucrando un panel web administrativo y apoyo a la creación de prototipos mobile.",
          technologies: ["Next.js", "Flutter", "TypeScript", "Supabase", "React Query"],
          contributions: [
            "Participación en el desarrollo del panel web administrativo.",
            "Apoyo a la creación de prototipos mobile.",
            "Integración con Supabase/PostgreSQL y uso de React Query para sincronización.",
            "Organización de interfaces conectadas a datos."
          ]
        },
        {
          title: "Plataforma de Adopción de Animales",
          status: "Completado",
          type: "Proyecto académico/social",
          description: "Aplicación web para el registro, visualización y organización de animales disponibles para adopción en el contexto académico/social.",
          technologies: ["React", "Vite", "TypeScript", "Supabase", "PostgreSQL"],
          contributions: [
            "Desarrollo de SPA con React/Vite.",
            "Creación de formularios y pantallas de registro.",
            "Integración with Supabase/PostgreSQL.",
            "Organización de datos y flujos de adopción."
          ]
        },
        {
          title: "Detección Automática de Astroturfing en Reseñas de Consumidores en Portugués",
          status: "En progreso",
          type: "Tesis de grado / Investigación",
          description: "Investigación académica enfocada en identificar reseñas falsas, artificiales o coordinadas en portugués utilizando técnicas de Procesamiento de Lenguaje Natural y Machine Learning clásico.",
          technologies: ["Python", "Scikit-learn", "TF-IDF", "NLTK/spaCy", "Pandas"],
          contributions: [
            "Estudio de clasificación textual y preprocesamiento de textos en portugués.",
            "Vectorización con TF-IDF y experimentación con Regresión Logística.",
            "Evaluación con métricas (precisión, recall, F1-score).",
            "Relación con Trust & Safety e integridad de la información."
          ]
        },
        {
          title: "Procesamiento de Datos Biomédicos",
          status: "Completado",
          type: "Apoyo técnico en investigación",
          description: "Apoyo técnico en la limpieza, organización y visualización de datos numéricos extraídos de muestras citológicas.",
          technologies: ["Python", "Pandas", "Matplotlib"],
          contributions: [
            "Limpieza básica de datos con Pandas.",
            "Organización de DataFrames.",
            "Generación de histogramas y gráficos de dispersión con Matplotlib.",
            "Apoyo en la interpretación visual de patrones biomédicos."
          ]
        },
        {
          title: "Automatización de Selección de Oportunidades",
          status: "Estudio/proyecto aplicado",
          type: "Automatización personal",
          description: "Flujo de automatización para seleccionar y categorizar oportunidades, trabajos y becas utilizando orquestación con n8n y técnicas de ingeniería de prompts.",
          technologies: ["Python", "n8n", "APIs de LLM", "JSON/Markdown"],
          contributions: [
            "Estructuración de flujos automatizados.",
            "Uso de prompts para salida estructurada.",
            "Organización de información en JSON y Markdown.",
            "Aplicación para la productividad personal."
          ]
        }
      ]
    },
    skills: {
      title: "Habilidades",
      subtitle: "Tecnologías y metodologías que estudio y aplico",
      groups: [
        { title: "Mobile", skills: ["Flutter", "Dart", "Prototipado", "Integración Supabase", "Persistencia local/remota", "Consumo de datos"] },
        { title: "Backend & DB", skills: ["Supabase", "PostgreSQL", "SQL", "PostgREST", "Autenticación", "Row Level Security (RLS)", "APIs RESTful", "Modelado relacional"] },
        { title: "Frontend", skills: ["React", "Next.js", "Vite", "TypeScript", "React Query", "Formularios", "Enrutamiento", "Estados asíncronos"] },
        { title: "Data & AI", skills: ["Python", "Pandas", "Matplotlib", "Scikit-learn", "TF-IDF", "PNL", "OpenCV", "NumPy"] },
        { title: "Versionado", skills: ["Git", "GitHub", "Commits", "Branches", "Pull requests", "Cypress", "Pruebas manuales"] },
        { title: "Ingeniería", skills: ["Lógica de programación", "Separación de responsabilidades", "Arquitectura en capas", "UML", "Documentación técnica", "Modelado de sistemas"] },
        { title: "Seguridad Aplicada", skills: ["LGPD", "Control de acceso", "Privacidad", "Trust & Safety", "Conceptos básicos de criptografía"] }
      ]
    },
    experience: {
      title: "Experiencia",
      contextLabel: "Contexto:",
      impactLabel: "Impacto:",
      jobs: [
        {
          title: "Instructor y Becario",
          company: "Raspberry Pi Foundation - Proyecto de Extensión",
          period: "Jun 2025 – Dic 2025 | Caxias, MA",
          description: "Trabajando en la enseñanza de lógica de programación, fundamentos de sistemas y conceptos técnicos a estudiantes en formación.",
          tasks: [
            "Enseñanza de lógica de programación y fundamentos de sistemas.",
            "Explicación de flujos de backend y arquitectura de forma accesible.",
            "Apoyo a estudiantes en actividades prácticas.",
            "Desarrollo de comunicación técnica y didáctica."
          ]
        },
        {
          title: "Desarrollador de Sistemas Embebidos e Instructor",
          company: "Club de Robótica del IFMA",
          period: "2023 – Presente | Caxias, MA",
          description: "Trabajando en proyectos de robótica, programación e integración hardware/software.",
          tasks: [
            "Tutoría a nuevos miembros.",
            "Enseñanza de electrónica, circuitos y microcontroladores Arduino/ESP32.",
            "Apoyo en depuración y procesamiento de sensores.",
            "Aplicación de lógica de programación en proyectos físicos."
          ]
        }
      ]
    },
    education: {
      title: "Formación y Academia",
      degreeLabel: "Grado:",
      institutionLabel: "Institución:",
      locationLabel: "Ubicación:",
      periodLabel: "Período:",
      degree: "Licenciatura en Ciencias de la Computación",
      institution: "Instituto Federal do Maranhão (IFMA)",
      period: "2023 – 2027 | Caxias, MA",
      awardsTitle: "Premios:",
      award: "Medallista de Plata - Olimpiada Brasileña de Astronomía y Astronáutica (OBA), 2022",
      interestsTitle: "Intereses Académicos",
      interests: [
        "PNL y detección de astroturfing",
        "Trust & Safety e integridad de la información",
        "Procesamiento de datos de texto en portugués",
        "Seguridad aplicada al desarrollo, LGPD y RLS",
        "Visión artificial académica (OpenCV, Procesamiento Digital de Imágenes)"
      ]
    },
    contact: {
      title: "Contacto",
      subtitle: "Abierta a oportunidades de prácticas, proyectos académicos y colaboraciones en desarrollo mobile, backend, datos e IA aplicada.",
      emailBtn: "Enviar E-mail",
      copyBtn: "Copiar Dirección",
      copied: "¡E-mail copiado al portapapeles!"
    },
    terminal: {
      helpText: `Comandos disponibles:\nabout, banner, curiosity, date, donate, email, github, help, linkedin, clear, neofetch, projects, repos, snake, sudo, team, vi, vim, weather, whoami\n\n[tab]       completa comandos.\n[ctrl+l]    limpia el terminal.\n[ctrl+c]    cancela el comando actual.`,
      notFound: "Comando no encontrado:",
      typeHelp: 'Escribe "help" para ver los comandos disponibles.',
      dateLabels: {
        weekday: "Día de la semana:", month: "Mes:", day: "Día del mes:", dayYear: "Día del año:", year: "Año:", time: "Hora:", tzOffset: "Zona horaria:", tzName: "Nombre de la zona:", locale: "Configuración regional:"
      },
      neofetch: {
        role: "Estudiante de Ciencias de la Computación",
        focus: "Mobile, Backend, Datos, IA Aplicada",
        status: "abierta a oportunidades de prácticas",
        location: "Brasil"
      },
      aboutText: "Randerson de Sá es un desarrollador en formación enfocado en mobile, backend, datos e IA aplicada.\n\nEste portafolio funciona como un archivo personal de proyectos, habilidades y experimentos.",
      whoamiText: "randerson\nEstudiante de Ciencias de la Computación\nEnfoque: Mobile, Backend, Datos, IA Aplicada\nUbicación: Brasil",
      projectsText: `Archivo de proyectos:\n[01] FADIR\n[02] Ecosistema Integrado SAMU\n[03] Plataforma de Adopción de Animales\n[04] Astroturfing Detection\n\nEscribe "open craft" o usa la barra lateral para inspeccionar los archivos de proyecto.`,
      reposText: "Índice de repositorio no configurado completamente.\nUsa: github",
      githubText: "Integración de GitHub pendiente de configuración final.",
      linkedinText: "Integración de LinkedIn pendiente de configuración final.",
      emailText: "Email aún no configurado.",
      donateText: "No hay punto de donación configurado. Apoya explorando el archivo.",
      sudoText: "Permiso denegado: este incidente será reportado.",
      teamText: "Archivo en solitario mantenido por Randerson de Sá.\nLas colaboraciones pueden aparecer dentro de los archivos de proyecto.",
      viText: "Abriendo vim...\nEs broma. Presiona :q para escapar del modo imaginario.",
      qText: "Salió de vim imaginario.",
      weatherText: "Servicio meteorológico no disponible en modo de archivo estático.\nPronóstico actual: tema oscuro, niebla de neón, 100% de probabilidad de código.",
      snakeText: "Módulo snake cargado.\nUsa las flechas. Presiona ESC para salir.",
      navigating: "Navegando a",
      sidebarPrompt: "usa la barra lateral para explorar el archivo o escribe help ...",
      bootLog1: "Inicializando portfolio_archive...",
      bootLog2: "Cargando módulos de memoria...",
      bootLog3: "Montando interfaz del terminal..."
    }
  }
};
