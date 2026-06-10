import type { Metadata } from "next";
import localFont from "next/font/local";
import { Doto, Young_Serif, Germania_One, Commissioner} from 'next/font/google';
import "./globals.css";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Randerson de Sá | Portfólio",
  description: "Portfólio de Randerson de Sá, graduando em Ciência da Computação com foco em Flutter, Supabase, PostgreSQL, React, TypeScript, Python, dados e IA aplicada.",
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
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`
          ${doto.variable}
          ${bounded.variable}
          ${germaniaOne.variable}
          ${gotfridus.variable}
          ${youngSerif.variable}
          ${ commissioner.variable }
          bg-background text-foreground antialiased font-sans
        `}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}