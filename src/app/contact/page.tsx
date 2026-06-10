"use client";

import { useLocale } from "@/context/LocaleContext";
import { ArrowUpRight, Copy } from "lucide-react";

export default function ContactPage() {
  const { t } = useLocale();

  const copyEmail = () => {
    navigator.clipboard.writeText("randerson.sdsn@gmail.com");
    alert(t.contact.copied);
  };

  return (
    <div className="w-full h-full flex flex-col pt-20 lg:pt-0 animate-in fade-in duration-500">
      <section className="py-32 px-6 lg:px-16 min-h-screen bg-[#000000] text-white">
        <div className="max-w-3xl">
          <div className="font-mono text-sm md:text-base text-[var(--accent-green)] mb-8 flex flex-col md:flex-row md:items-center gap-2">
            <span>randerson@portfolio:~$</span>
            <span className="text-white">contact --open</span>
            <span className="inline-block w-2 h-4 bg-[var(--accent-green)] animate-pulse" />
          </div>

          <p className="font-mono text-sm md:text-base text-[var(--text-soft)] mb-12 leading-relaxed">
            {t.contact.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 font-mono text-xs">
            <a href="mailto:randerson.sdsn@gmail.com" className="button-primary">
               {t.contact.emailBtn} <ArrowUpRight className="ml-2 w-4 h-4" />
            </a>
            <button onClick={copyEmail} className="button-secondary">
               {t.contact.copyBtn} <Copy className="ml-2 w-4 h-4" />
            </button>
          </div>
          
          <div className="mt-16 pt-8 border-t border-[var(--border-strong)] flex flex-wrap gap-6 font-mono text-xs">
             <a href="https://github.com/Altaeir-13" target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-[var(--accent-green)] transition-colors">
               [github]
             </a>
             <a href="https://linkedin.com/in/randersonsousa" target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-[var(--accent-green)] transition-colors">
               [linkedin]
             </a>
          </div>
        </div>
      </section>
    </div>
  );
}
