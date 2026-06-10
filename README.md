# Randerson de Sá | Portfólio

Este é o meu portfólio pessoal e profissional, desenvolvido com Next.js, React e TailwindCSS v4, com animações utilizando Framer Motion. Ele apresenta minha trajetória acadêmica, competências técnicas e principais projetos nas áreas de desenvolvimento mobile, backend, integração de dados e inteligência artificial aplicada.

## 🚀 Tecnologias Utilizadas

- **Framework:** [Next.js 16](https://nextjs.org/)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Estilização:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animações:** [Framer Motion](https://www.framer.com/motion/)
- **Ícones:** [Lucide React](https://lucide.dev/)
- **Fontes:** Google Fonts (Germania One, Commissioner, Doto, etc.)

## 📦 Como rodar localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/Altaeir-13/Portifolo-com-Nicolinha.git
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Acesse `http://localhost:3000` no seu navegador.

## 🛠️ Como fazer o build estático

O projeto está 100% configurado para **Exportação Estática** (`output: "export"`). Para gerar a pasta `out` contendo os arquivos HTML, CSS e JS puros:

```bash
npm run build
```

## 🌐 Hospedagem no GitHub Pages

O site principal é publicado na URL raiz: **https://altaeir-13.github.io/**.
Este repositório principal atua como o GitHub Pages do perfil.

- **Framework:** Next.js com exportação estática
- **Deploy:** Feito via GitHub Actions (`.github/workflows/deploy.yml`)
- **Atenção:** Não é necessário usar `basePath` ou `assetPrefix` pois o site está na raiz do domínio.

## 📝 Onde alterar os dados pessoais

- **Informações principais e Projetos:** Edite o arquivo `src/app/page.tsx` (Procure pelos arrays `projects` e `skillGroups`).
- **Navegação e Logo:** Edite `src/components/header.tsx`.
- **Estilos Globais e Cores:** Edite `src/app/globals.css`.
- **Metadados (SEO):** Edite `src/app/layout.tsx`.

## ✅ Checklist antes de publicar

- [ ] Confirmar links de GitHub e LinkedIn (no `page.tsx`).
- [ ] Confirmar período atual do curso (IFMA).
- [ ] Adicionar links reais de repositórios/deploys na variável `projects` em `page.tsx` quando estiverem disponíveis.
- [ ] Descomentar o `basePath` no `next.config.ts` caso escolha a opção 2 (GitHub Pages em subdiretório).
