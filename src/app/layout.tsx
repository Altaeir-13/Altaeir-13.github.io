import type { Metadata } from "next";
import localFont from "next/font/local";
import { Doto, Young_Serif, Germania_One, Commissioner, JetBrains_Mono} from 'next/font/google';
import "./globals.css";
import Header from "@/components/header";
import { LocaleProvider } from "@/context/LocaleContext";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  title: "Randerson de Sá | Portfólio",
  description: "Portfólio de Randerson de Sá, estudante de Ciência da Computação com foco em Flutter, Supabase, PostgreSQL, Next.js, React, Python, dados e IA aplicada.",
};

const doto = Doto({
  subsets: ['latin'],
  variable: "--font-doto",
  weight: "900",
  display: "swap",
});

const youngSerif = Young_Serif({
  subsets: ['latin'],
  variable: "--font-young-serif",
  weight: "400",
  display: "swap"
});

const germaniaOne = Germania_One({
  subsets: ['latin'],
  variable: "--font-germania-one",
  weight: "400",
  display: "swap",
});

const commissioner = Commissioner({
  subsets: ['latin'],
  variable: "--font-commissioner",
  weight: "400",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: "--font-jetbrains-mono",
  display: "swap",
});
// --- FAMÍLIAS DE FONTES LOCAIS ---

const bounded = localFont({
  src: [
    { path: "./fonts/bounded/Bounded-ExtraLight.ttf", weight: "200" },
    { path: "./fonts/bounded/Bounded-Regular.ttf", weight: "400" },
    { path: "./fonts/bounded/Bounded-Black.ttf", weight: "900" },
  ],
  variable: "--font-bounded",
});

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
          ${doto.variable}
          ${bounded.variable}
          ${germaniaOne.variable}
          ${gotfridus.variable}
          ${youngSerif.variable}
          ${commissioner.variable}
          ${jetbrainsMono.variable}
          bg-background text-foreground antialiased font-sans
        `}
      >
        <LocaleProvider>
          <ThemeProvider>
            <Header />
            {children}
          </ThemeProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}