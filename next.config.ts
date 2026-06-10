import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  // ====== CONFIGURAÇÕES DE DEPLOY ======
  // Publicando no repositório principal (Altaeir-13.github.io):
  // Não usamos basePath nem assetPrefix.
  trailingSlash: true,
};

export default nextConfig;
