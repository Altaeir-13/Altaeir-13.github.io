# DESIGN.md — Modular Terminal Gothic Portfolio

## 1. Objetivo do documento

Este arquivo define a especificação visual, estrutural e comportamental do portfólio pessoal de **Randerson de Sá**.

Ele deve ser usado como fonte principal por uma IA implementadora ou por uma pessoa desenvolvedora. O objetivo não é gerar um template genérico de portfólio, mas reformular o site para uma experiência **modular, terminal, gótica, escura e autoral**, inspirada na lógica visual de interfaces experimentais com sidebar fixa, terminal, neofetch, preto absoluto, neon e navegação por seções independentes.

A referência estética principal é o padrão visual de sites como Hana Sachiko Company: sidebar fixa à esquerda, conteúdo principal como tela de terminal/arquivo, navegação por páginas internas, estética preta, metadados, ASCII art, neon verde/magenta e composição editorial. A referência deve orientar a estrutura e a atmosfera, mas não deve ser copiada de forma literal.

Não copiar marca, logotipo, textos, imagens, GIFs, personagens, frases, identidade visual proprietária ou assets de terceiros.

O resultado esperado é um portfólio que pareça:

```txt
um terminal pessoal aberto,
um arquivo técnico autoral,
um site experimental,
e ainda um portfólio profissional legível.
```

---

## 2. Mudança estrutural principal

A principal mudança em relação ao site atual é substituir a experiência de **landing page vertical com header superior** por uma experiência de **site modular com sidebar fixa**.

### 2.1 O que deve ser removido no desktop

Remover a barra superior convencional com links como:

```txt
RANDERSON DE SÁ    ABOUT    PROJECTS    SKILLS    EXPERIENCE    EDUCATION    CONTACT
```

Essa estrutura faz o site parecer um portfólio comum. A nova interface deve abandonar o padrão de navbar horizontal no desktop.

### 2.2 O que deve entrar no lugar

No desktop, o site deve ter:

```txt
┌────────────────────────┬────────────────────────────────────────────┐
│                        │                                            │
│  SIDEBAR FIXA          │  TELA PRINCIPAL MODULAR                    │
│                        │                                            │
│  RANDERSON DE SÁ       │  Home terminal / Me / My Craft / Skills    │
│  bio curta             │  Contact                                  │
│  #Me                   │                                            │
│  My Craft              │  O conteúdo muda conforme o item clicado.  │
│  Skills                │  Não é uma landing page vertical comum.    │
│  Contact               │                                            │
│                        │                                            │
└────────────────────────┴────────────────────────────────────────────┘
```

A pessoa visitante deve navegar clicando nos itens da sidebar. O site não deve depender de rolar para baixo para consumir todas as informações em sequência.

### 2.3 Regra de experiência

O site deve funcionar como um **sistema de telas/seções acessadas por navegação**, não como uma página única em que tudo aparece em sequência vertical.

Permitido:

- cada página/painel ter scroll interno quando o conteúdo for maior que a tela;
- rolagem curta em páginas como projetos, se houver muitos cards;
- rotas reais, como `/me`, `/craft`, `/skills`, `/contact`;
- ou estado interno, se o projeto for SPA.

Não permitido:

- uma home única gigante com About, Projects, Skills, Experience, Education e Contact empilhados verticalmente;
- depender apenas do scroll do mouse para descobrir todo o site;
- manter a navbar superior desktop como navegação principal;
- esconder a navegação em uma seção do topo.

---

## 3. Elementos obrigatórios a preservar

Preservar obrigatoriamente:

1. O nome **Randerson de Sá**.
2. A frase de efeito:

```txt
NOT ALL THOSE WHO WANDER ARE LOST
```

3. A fonte gótica/display já existente, especialmente aplicada à frase de efeito.
4. A identidade escura como base visual principal.
5. A paleta atual baseada em preto, branco, verde neon e rosa/magenta.
6. O botão rosa como elemento de ação, se ele já existir.
7. O bloco verde como detalhe gráfico da identidade, se ele já existir.
8. A arte/ícone já existente do site, chamada aqui de **SK Art**, usada atualmente no topo/ícone do site. Ela deve ser reaproveitada como arte terminal/ASCII/neofetch, sem importar assets externos copiados.
9. Suporte a tema claro/escuro, se já existir.
10. Suporte a inglês/português, se já existir.

Todo o restante pode ser alterado: layout, header, estrutura de páginas, disposição de cards, componentes, nomes internos dos componentes e estética das seções.

---

## 4. Princípio visual

O site deve parecer um **terminal gótico pessoal**.

A interface mistura quatro camadas:

1. **Terminal**: prompt, comandos simulados, neofetch, metadados, caminhos de arquivo, logs.
2. **Gótico/display**: fonte de impacto, frase memorável, títulos grandes, composição dramática.
3. **Arquivo pessoal**: seções como dossiês, páginas de perfil, registros técnicos, case files.
4. **Portfólio profissional**: projetos, skills, experiência, formação e contato organizados com clareza.

A estética experimental não pode prejudicar leitura, navegação, acessibilidade ou entendimento profissional.

---

## 5. Estrutura global recomendada

### 5.1 Desktop

Usar layout de duas regiões:

```txt
body
├─ SidebarArchive        largura fixa entre 220px e 300px
└─ MainTerminalViewport  ocupa o restante da tela
```

A sidebar deve ficar fixa à esquerda. O conteúdo principal deve ocupar o restante da largura, com fundo preto absoluto.

Valores recomendados:

```css
--sidebar-width: clamp(220px, 16vw, 300px);
--main-padding-x: clamp(24px, 5vw, 88px);
--main-padding-y: clamp(32px, 6vh, 96px);
```

A área principal deve ter altura mínima de `100vh`.

### 5.2 Tablet

A sidebar pode ser reduzida, mas ainda pode existir se houver largura suficiente. Se ficar apertado, transformar em header compacto com menu lateral/drawer.

### 5.3 Mobile

No mobile, não usar sidebar fixa ocupando espaço horizontal. Usar:

- header compacto;
- botão de menu;
- drawer/overlay com os mesmos itens da sidebar;
- conteúdo em coluna única;
- tipografia grande, mas sem overflow horizontal.

---

## 6. SidebarArchive

A sidebar é a âncora visual do site. Ela substitui o header superior.

### 6.1 Composição da sidebar

A sidebar deve conter, nesta ordem:

1. Nome/marca pessoal.
2. Subtítulo curto.
3. Bio curta.
4. Navegação principal.
5. Botão secundário ou CTA curto.
6. Controles de idioma e tema.

Estrutura visual aproximada:

```txt
THE
RANDERSON
DE SÁ

PORTFOLIO ARCHIVE

Developer in training,
Computer Science student,
working with mobile,
backend, data and AI.

#Me          🙂
My Craft     🗂
Skills       ⚙
Contact      ↗

[Want more?]

EN | PT    ◐
```

A palavra “THE” é opcional. Se usada, deve ser discreta, apenas como detalhe editorial.

### 6.2 Navegação principal

A navegação deve ter poucos itens. Não usar uma lista longa.

Itens obrigatórios:

```txt
#Me
My Craft
Skills
Contact
```

Função de cada item:

- `#Me`: perfil, resumo, formação, experiência, trajetória e identidade.
- `My Craft`: projetos, trabalhos, estudos aplicados, cases e pesquisa prática.
- `Skills`: competências técnicas organizadas como diretórios.
- `Contact`: contato, links, currículo e chamada final.

Se o idioma português estiver ativo, usar equivalentes consistentes:

```txt
#Eu
Meu Trabalho
Skills
Contato
```

A palavra `Skills` pode permanecer em inglês mesmo em português se for uma decisão de identidade visual, mas o restante da interface não deve ficar misturado sem critério.

### 6.3 Item ativo

O item ativo da sidebar deve ter destaque discreto:

- cor verde neon ou magenta;
- brilho leve;
- marcador lateral;
- opacidade maior;
- sem animações exageradas.

Exemplo:

```css
.sidebar-link.active {
  color: var(--accent-green);
  text-shadow: 0 0 18px rgba(0, 255, 65, 0.28);
}

.sidebar-link.active::before {
  content: "~";
  color: var(--accent-magenta);
}
```

### 6.4 O que evitar na sidebar

Não fazer:

- sidebar colorida demais;
- ícones grandes demais;
- bio longa;
- muitos links;
- submenu complexo;
- animações que competem com o conteúdo principal.

A sidebar deve parecer fixa, silenciosa e reconhecível.

---

## 7. Home terminal

A primeira tela aberta pelo link principal deve seguir a lógica da tela terminal/neofetch da referência.

### 7.1 Objetivo da home

A home deve funcionar como uma apresentação inicial do sistema:

```txt
randerson@portfolio:~$ neofetch
```

Ela deve comunicar rapidamente:

- quem é Randerson;
- qual é a estética do site;
- qual é a frase de efeito;
- quais áreas técnicas aparecem no portfólio;
- como navegar.

### 7.2 Estrutura visual da home

No desktop, a home deve ser composta por:

```txt
[linha de prompt no topo]
randerson@portfolio:~$ neofetch

[duas colunas centrais]

COLUNA ESQUERDA                         COLUNA DIREITA
ASCII/SK Art em magenta                  RANDERSON DE SÁ
ou arte terminal                          NOT ALL THOSE WHO WANDER ARE LOST
                                         Host: Randerson de Sá
                                         Role: Developer in Training
                                         Focus: Mobile, Web, Data, AI
                                         Shell: terminal-gothic
                                         Theme: black archive
                                         Status: open to opportunities

[linha de prompt inferior]
randerson@portfolio:~$ choose a file from the sidebar or type help
```

A home não deve ser uma hero tradicional com texto centralizado e botão apenas. Ela deve parecer uma tela de terminal autoral.

### 7.3 Uso da frase de efeito

A frase:

```txt
NOT ALL THOSE WHO WANDER ARE LOST
```

é obrigatória e deve aparecer na home.

Ela deve usar a fonte gótica/display. Pode aparecer como:

- bloco de destaque ao lado dos metadados;
- linha principal abaixo do nome;
- valor de metadado `Resolution:` apenas se ainda estiver visualmente forte;
- composição híbrida: parte como título, parte como terminal.

Não reduzir a frase a texto pequeno comum. Ela é um elemento de identidade.

### 7.4 Nome na home

O nome **Randerson de Sá** também deve aparecer na home. Pode aparecer em:

- fonte display/gótica;
- fonte terminal estilizada;
- bloco neofetch como `Host:`;
- ou combinação dos três.

### 7.5 SK Art / ASCII art

Usar a arte/ícone já existente do site, chamada aqui de **SK Art**, como base visual para a coluna esquerda da home.

Implementações aceitáveis:

1. Converter visualmente a SK Art em ASCII/monograma manual.
2. Usar a SK Art como SVG/asset existente com tratamento de terminal.
3. Renderizar a SK Art como bloco gráfico em magenta, simulando arte ASCII.
4. Criar uma versão textual/monoespaçada inspirada no ícone.

Regras:

- não usar imagem externa copiada;
- não usar assets da referência Hana Sachiko;
- manter peso visual semelhante ao ASCII da referência;
- usar magenta/rosa neon como cor principal;
- garantir que no mobile essa arte reduza ou seja ocultada se causar overflow.

### 7.6 Neofetch adaptado

O bloco de metadados pode seguir este modelo:

```txt
Host: Randerson de Sá
OS: Portfolio 1.0
Role: Developer in Training
Packages: Flutter, Dart, Supabase, PostgreSQL, Next.js, Python
Resolution: Not all those who wander are lost
Shell: terminal-gothic
Theme: black archive
Repo: github.com/Altair-13
Uptime: currently building
Status: open to internships
```

Se as informações reais do portfólio forem diferentes, ajustar conforme os dados existentes no projeto. Não inventar experiências ou tecnologias que não estejam no conteúdo atual do site.

### 7.7 Prompt inferior

Adicionar uma linha inferior semelhante à referência:

```txt
randerson@portfolio:~$ choose a file from the sidebar or type “help”
```

ou em português:

```txt
randerson@portfolio:~$ escolha um arquivo na sidebar ou digite “help”
```

Essa linha pode ser apenas visual. Se houver campo interativo real, deve ser acessível e não prejudicar navegação.

---

## 8. Navegação modular

### 8.1 Modelo preferencial

Preferir rotas reais para cada módulo, pois isso melhora navegação, compartilhamento de links e SEO.

Sugestão para Next.js App Router:

```txt
src/app/page.tsx              -> Home terminal
src/app/me/page.tsx           -> #Me
src/app/craft/page.tsx        -> My Craft
src/app/skills/page.tsx       -> Skills
src/app/contact/page.tsx      -> Contact
```

A sidebar deve aparecer em todas as rotas.

### 8.2 Alternativa aceitável

Se o projeto estiver mais simples, pode ser uma SPA com estado interno:

```txt
currentPanel = "home" | "me" | "craft" | "skills" | "contact"
```

Nesse caso, ainda assim o comportamento visual deve ser modular: clicar muda o painel principal, não apenas rola a página até uma seção.

### 8.3 Deep links

Se tecnicamente viável, cada módulo deve ter URL própria:

```txt
/
/me
/craft
/skills
/contact
```

Evitar depender apenas de `#about`, `#projects`, `#skills`, porque isso mantém a sensação de landing page vertical.

---

## 9. Página #Me

A página `#Me` deve substituir a ideia de seções separadas About, Experience e Education empilhadas na home.

Ela deve funcionar como um dossiê pessoal.

### 9.1 Estrutura recomendada

```txt
randerson@portfolio:~$ cat /me/profile.md

# Randerson de Sá

[texto curto de apresentação]

Metadata:
Status: Computer Science student
Focus: Mobile, Backend, Data, Applied AI
Location: Brazil
Mode: developer in training

/log/education
[formação acadêmica]

/log/experience
[experiências relevantes]
```

### 9.2 Conteúdo

A página deve conter:

- resumo profissional curto;
- formação;
- experiência principal;
- interesses técnicos;
- links para CV ou LinkedIn, se houver.

Não deve ser longa demais. O objetivo é dar contexto pessoal e acadêmico.

---

## 10. Página My Craft

A página `My Craft` deve concentrar projetos e trabalhos técnicos.

### 10.1 Conceito

Projetos devem parecer arquivos/cases dentro de um diretório:

```txt
randerson@portfolio:~$ ls /craft
```

ou:

```txt
/craft
├─ fadir.project
├─ samu-ecosystem.project
├─ adoption-platform.project
├─ astroturfing-detection.research
└─ data-processing.lab
```

### 10.2 Cards de projeto

Cada projeto deve usar aparência de arquivo técnico:

```txt
/project/fadir
Status: in progress
Type: Mobile + BaaS
Stack: Flutter · Dart · Supabase · PostgreSQL
Role: implementation, auth flow, data persistence
```

Depois dos metadados, incluir descrição curta, responsabilidades e links.

### 10.3 Layout

No desktop, usar grid modular. No mobile, coluna única.

O grid pode rolar internamente se houver muitos projetos, mas a navegação geral do site continua modular.

### 10.4 O que evitar

Não usar cards genéricos com fundo claro e botão comum. Não depender apenas de imagem de projeto. O card deve comunicar tecnicamente mesmo sem imagem.

---

## 11. Página Skills

A página `Skills` deve ser independente e acessível pela sidebar.

### 11.1 Conceito

Skills devem parecer diretórios técnicos, não barras de porcentagem.

Exemplo:

```txt
randerson@portfolio:~$ tree /skills

/skills/mobile
Flutter · Dart · UI flows · API consumption

/skills/backend
Supabase · PostgreSQL · MySQL · Firebase · SQLite · REST APIs · Auth · RLS

/skills/frontend
Next.js · React · TypeScript · Vue · Vite

/skills/data-ai
Python · Pandas · Scikit-learn · NLP · Matplotlib · NumPy

/skills/tools
Git · GitHub · Branches · Pull Requests · Documentation · Testing

/skills/fundamentals
Software Architecture · Layered Architecture · UML · Relational Modeling
```

### 11.2 Visual

Cada grupo de skills deve parecer um diretório ou bloco de configuração:

```txt
[DIR] /skills/mobile
[PKG] Flutter
[PKG] Dart
[API] REST consumption
```

Usar badges com fonte monoespaçada, bordas discretas e hover neon.

### 11.3 Não usar

Não usar barra de progresso de habilidade, porcentagens ou estrelas. Isso costuma parecer impreciso e pouco profissional.

---

## 12. Página Contact

A página `Contact` deve funcionar como o encerramento do sistema.

### 12.1 Conceito

```txt
randerson@portfolio:~$ contact --open
```

A página deve ser direta e visualmente forte.

### 12.2 Conteúdo

Incluir:

- e-mail;
- GitHub;
- LinkedIn;
- currículo/CV, se houver;
- botão copiar e-mail, se for simples implementar;
- CTA curto.

Texto sugerido em inglês:

```txt
Open to internships, academic projects and collaborations in mobile, backend, data and applied AI.
```

Texto sugerido em português:

```txt
Aberto a oportunidades de estágio, projetos acadêmicos e colaborações em mobile, backend, dados e IA aplicada.
```

### 12.3 Botão

Usar botão rosa/magenta como ação principal:

```txt
SEND MESSAGE ↗
```

ou:

```txt
CONTACT ME ↗
```

Não criar formulário sem backend funcional. Se houver formulário, deixar claro que usa `mailto:` ou serviço configurado.

---

## 13. Tipografia

### 13.1 Fonte display/gótica

A fonte gótica atual deve ser preservada e usada para:

- frase de efeito;
- nome/marca em momentos de impacto;
- títulos curtos;
- detalhes editoriais grandes.

Não usar para:

- parágrafos longos;
- listas extensas;
- metadados técnicos;
- descrições de projetos;
- navegação pequena se prejudicar legibilidade.

### 13.2 Fonte monoespaçada

Usar para:

- prompts;
- neofetch;
- metadados;
- caminhos de arquivo;
- badges;
- status;
- navegação;
- comandos simulados.

Sugestão:

```css
--font-mono: "JetBrains Mono", "Fira Code", "IBM Plex Mono", monospace;
```

### 13.3 Fonte de leitura

Usar uma sans-serif limpa para descrições e conteúdo profissional:

```css
--font-body: "Inter", "Space Grotesk", system-ui, sans-serif;
```

### 13.4 Fonte editorial opcional

Uma serifada pode ser usada em textos narrativos curtos, mas com moderação:

```css
--font-serif: "EB Garamond", "Cormorant Garamond", Georgia, serif;
```

---

## 14. Paleta de cores

A paleta deve manter as cores atuais: preto, branco, verde neon e rosa/magenta.

### 14.1 Tema escuro principal

```css
:root,
[data-theme="dark"] {
  --bg: #000000;
  --bg-soft: #050505;
  --surface: #080808;
  --surface-elevated: #101010;

  --text: #ffffff;
  --text-soft: #e8e8e8;
  --text-muted: #9ca3af;
  --text-faint: #666666;

  --border: rgba(255, 255, 255, 0.12);
  --border-strong: rgba(255, 255, 255, 0.26);

  --accent-green: #00ff41;
  --accent-green-soft: rgba(0, 255, 65, 0.16);
  --accent-green-glow: rgba(0, 255, 65, 0.32);

  --accent-magenta: #ff2e9f;
  --accent-magenta-strong: #ff007f;
  --accent-magenta-soft: rgba(255, 46, 159, 0.18);
  --accent-magenta-glow: rgba(255, 46, 159, 0.34);

  --accent-blue-shadow: #1f6fff;
}
```

### 14.2 Tema claro

O tema claro deve ser secundário. Ele deve parecer papel terminal/editorial, não branco genérico.

```css
[data-theme="light"] {
  --bg: #f5f2ea;
  --bg-soft: #ebe6dc;
  --surface: #fffaf0;
  --surface-elevated: #ffffff;

  --text: #101010;
  --text-soft: #2b2b2b;
  --text-muted: #666666;
  --text-faint: #8a8a8a;

  --border: rgba(0, 0, 0, 0.14);
  --border-strong: rgba(0, 0, 0, 0.26);

  --accent-green: #007f30;
  --accent-green-soft: rgba(0, 127, 48, 0.12);
  --accent-green-glow: rgba(0, 127, 48, 0.22);

  --accent-magenta: #c2186a;
  --accent-magenta-strong: #9f0f55;
  --accent-magenta-soft: rgba(194, 24, 106, 0.12);
  --accent-magenta-glow: rgba(194, 24, 106, 0.22);
}
```

### 14.3 Regra especial

A home terminal e qualquer área de impacto principal devem permanecer escuras mesmo no tema claro, para preservar a identidade visual.

---

## 15. Componentes recomendados

A IA implementadora deve preferir componentes claros e separados.

### 15.1 `SiteShell`

Responsável por:

- layout global;
- sidebar fixa no desktop;
- header/drawer no mobile;
- tema;
- idioma;
- fundo e ruído visual.

### 15.2 `SidebarArchive`

Responsável por:

- nome/marca;
- bio curta;
- navegação modular;
- estado ativo;
- controles de idioma/tema;
- CTA.

### 15.3 `TerminalHome`

Responsável por:

- prompt superior;
- SK Art/ASCII;
- nome;
- frase de efeito em fonte gótica;
- neofetch metadata;
- prompt inferior.

### 15.4 `MePanel` ou `MePage`

Responsável por:

- resumo pessoal;
- formação;
- experiência;
- metadados pessoais/técnicos.

### 15.5 `CraftPanel` ou `CraftPage`

Responsável por:

- projetos;
- cards como arquivos;
- pesquisa e trabalhos técnicos.

### 15.6 `SkillsPanel` ou `SkillsPage`

Responsável por:

- diretórios de skills;
- badges técnicos;
- agrupamento por área.

### 15.7 `ContactPanel` ou `ContactPage`

Responsável por:

- prompt de contato;
- links;
- CTA;
- e-mail e redes.

---

## 16. Efeitos visuais

### 16.1 Ruído e textura

Usar ruído de fundo muito sutil para evitar preto plano demais.

Regras:

- baixa opacidade;
- não prejudicar leitura;
- não pesar no mobile;
- preferir CSS/gradientes em vez de imagens externas.

### 16.2 Scanlines

Scanlines são permitidas, mas devem ser muito sutis.

Não criar efeito forte que dificulte leitura.

### 16.3 Neon

Usar neon para:

- prompt ativo;
- destaque da navegação;
- bordas em hover;
- cursor;
- detalhes do neofetch;
- pequenos elementos geométricos.

Não usar neon em todos os textos.

### 16.4 ASCII / arte terminal

A arte terminal deve ter presença forte na home, principalmente usando a SK Art como base.

Nas demais páginas, usar ASCII com moderação.

---

## 17. Botões

### 17.1 Botão principal

O botão principal deve preservar a linguagem rosa/magenta.

```css
.button-primary {
  border: 1px solid var(--accent-magenta);
  background: var(--accent-magenta);
  color: #ffffff;
  border-radius: 999px;
  min-height: 46px;
  padding: 0 26px;
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
```

### 17.2 Botão secundário

```css
.button-secondary {
  border: 1px solid var(--border-strong);
  background: transparent;
  color: var(--text);
  border-radius: 999px;
  min-height: 46px;
  padding: 0 26px;
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
```

### 17.3 Estados obrigatórios

Todo botão deve ter:

- hover;
- focus-visible;
- active;
- disabled, se aplicável.

---

## 18. Idiomas

O site pode continuar bilíngue, mas sem misturar textos indevidamente.

Regras:

- A frase `NOT ALL THOSE WHO WANDER ARE LOST` pode permanecer sempre em inglês como assinatura visual.
- Termos de navegação podem ser fixos em inglês se forem tratados como nomes de módulos do sistema.
- Se houver alternância PT/EN, textos narrativos e botões devem trocar juntos.
- Tecnologias não devem ser traduzidas.

---

## 19. Responsividade

### 19.1 Desktop

- sidebar fixa;
- home com duas colunas;
- SK Art/ASCII visível;
- neofetch visível;
- frase de efeito forte;
- sem navbar superior.

### 19.2 Tablet

- sidebar menor ou drawer;
- home pode virar coluna única se necessário;
- reduzir ASCII;
- manter legibilidade.

### 19.3 Mobile

- header compacto;
- menu em drawer;
- ASCII reduzido ou oculto;
- frase de efeito menor;
- metadados quebrando linha;
- cards em coluna única;
- sem overflow horizontal.

---

## 20. Acessibilidade

Requisitos obrigatórios:

- contraste adequado;
- foco visível;
- navegação por teclado;
- links semanticamente corretos;
- botões com `aria-label` quando forem só ícone;
- não depender apenas de cor para indicar estado;
- respeitar `prefers-reduced-motion`;
- não bloquear scroll interno quando o conteúdo exceder a tela;
- não criar terminal falso que impeça uso por teclado/leitor de tela.

Exemplo:

```css
:focus-visible {
  outline: 2px solid var(--accent-green);
  outline-offset: 4px;
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 21. SEO e rotas

Se usar rotas reais, configurar metadados por página.

Sugestão:

```txt
/         Randerson de Sá | Terminal Portfolio
/me       Randerson de Sá | Profile
/craft    Randerson de Sá | Projects
/skills   Randerson de Sá | Skills
/contact  Randerson de Sá | Contact
```

Descrição geral:

```txt
Portfólio de Randerson de Sá, estudante de Ciência da Computação com foco em desenvolvimento mobile, backend, dados e inteligência artificial aplicada.
```

---

## 22. Diretrizes de implementação

Ao aplicar este design:

1. Ler este `DESIGN.md` antes de editar componentes.
2. Não recriar o projeto do zero sem necessidade.
3. Não trocar o framework.
4. Remover a navbar superior desktop como navegação principal.
5. Implementar sidebar fixa no desktop.
6. Transformar a experiência vertical em navegação modular.
7. Criar home terminal com estrutura semelhante a neofetch.
8. Usar a SK Art existente como arte/ASCII/neofetch.
9. Preservar nome, frase de efeito e fonte gótica.
10. Preservar preto, verde neon e magenta.
11. Criar ou ajustar rotas/painéis: Home, Me, My Craft, Skills, Contact.
12. Garantir responsividade.
13. Garantir acessibilidade básica.
14. Não copiar assets ou textos da referência.
15. Rodar lint e build ao final.

---

## 23. Critérios de aceite

O resultado estará correto se:

```txt
[ ] A barra superior desktop foi removida ou deixou de ser a navegação principal.
[ ] Existe sidebar fixa no desktop.
[ ] A sidebar contém #Me, My Craft, Skills e Contact.
[ ] A home parece uma tela terminal/neofetch.
[ ] A home usa a SK Art existente como arte terminal ou elemento visual principal.
[ ] O nome Randerson de Sá aparece com destaque.
[ ] A frase NOT ALL THOSE WHO WANDER ARE LOST aparece na home em fonte gótica/display.
[ ] O site não é mais uma landing page vertical comum.
[ ] Clicar na sidebar troca de módulo/página.
[ ] Projetos ficam em My Craft.
[ ] Skills têm página própria.
[ ] Formação/experiência ficam em #Me ou em sub-blocos do dossiê pessoal.
[ ] Contato fica em Contact.
[ ] O tema escuro continua sendo a identidade principal.
[ ] Verde neon e magenta são usados como acentos.
[ ] Não há cópia de marca, textos ou assets da referência.
[ ] O site funciona bem em desktop, tablet e mobile.
[ ] Não há overflow horizontal.
[ ] Lint e build passam.
```

---

## 24. Resumo executivo para IA implementadora

Refatore o portfólio de Randerson de Sá para deixar de ser uma landing page vertical com navbar superior e passar a ser uma experiência modular com sidebar fixa, inspirada em terminal/neofetch. A tela inicial deve ter estrutura de terminal: prompt superior, arte/ASCII usando a SK Art existente, nome Randerson de Sá, frase “NOT ALL THOSE WHO WANDER ARE LOST” em fonte gótica/display, metadados técnicos e prompt inferior. A sidebar desktop deve substituir a navbar e conter os módulos `#Me`, `My Craft`, `Skills` e `Contact`. Clicar nesses itens deve trocar o painel ou rota principal, não apenas rolar a página. Preservar a estética escura, verde neon, magenta, fonte gótica, nome e frase de efeito. Não copiar assets/textos da referência. Garantir responsividade, acessibilidade, tema/idioma se já existirem, e rodar lint/build ao final.
