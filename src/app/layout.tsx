import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, JetBrains_Mono, EB_Garamond } from 'next/font/google';
import "./globals.css";
import { LocaleProvider } from "@/context/LocaleContext";
import { ThemeProvider } from "@/context/ThemeContext";
import SidebarArchive from "@/components/SidebarArchive";
import MobileHeader from "@/components/MobileHeader";

export const metadata: Metadata = {
  title: "Randerson de Sá | Portfólio",
  description: "Portfólio de Randerson de Sá, graduando em Ciência da Computação com foco em mobile, backend, dados e IA aplicada.",
};

const inter = Inter({
  subsets: ['latin'],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: "--font-jetbrains",
  display: "swap",
});

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  variable: "--font-garamond",
  display: "swap",
});

// --- FAMÍLIAS DE FONTES LOCAIS ---
const gotfridus = localFont({
  src: "./fonts/gotfridus/Gotfridus.ttf",
  variable: "--font-gotfridus",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('portfolio-theme');
                  var d = document.documentElement;
                  if (theme === 'light' || theme === 'dark') {
                    d.setAttribute('data-theme', theme);
                  } else {
                    var prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
                    d.setAttribute('data-theme', prefersLight ? 'light' : 'dark');
                  }

                  var lang = localStorage.getItem('portfolio-locale');
                  if (lang === 'en') {
                    d.lang = 'en';
                  } else {
                    d.lang = 'pt-BR';
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`
          ${inter.variable}
          ${jetbrainsMono.variable}
          ${ebGaramond.variable}
          ${gotfridus.variable}
          bg-background text-foreground antialiased font-sans
        `}
      >
        <LocaleProvider>
          <ThemeProvider>
            <div className="flex flex-col lg:flex-row min-h-screen bg-noise">
              <MobileHeader />
              <SidebarArchive />
              <main className="flex-1 w-full lg:ml-[280px] overflow-hidden">
                {children}
              </main>
            </div>
          </ThemeProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}