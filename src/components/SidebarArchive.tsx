"use client"
import { useLocale } from "@/context/LocaleContext"
import { useTheme } from "@/context/ThemeContext"
import { Sun, Moon } from "lucide-react"
import Link from "next/link"

export default function SidebarArchive() {
  const { locale, setLocale } = useLocale()
  const { theme, toggleTheme } = useTheme()

  return (
    <aside className="hidden lg:flex flex-col fixed top-0 left-0 h-screen w-[280px] border-r border-[var(--border)] bg-[var(--surface)] z-50 p-8 overflow-y-auto">
      
      {/* Identity / Brand */}
      <div className="mb-8">
        <h1 className="font-display text-4xl text-[var(--text)] leading-none tracking-tight">
          RANDERSON
          <br />
          DE SÁ
        </h1>
        <p className="font-mono text-[10px] text-[var(--text-faint)] uppercase tracking-widest mt-4 mb-6">
          Portfolio Archive
        </p>
        <p className="font-sans text-xs text-[var(--text-soft)] leading-relaxed">
          {locale === "pt" 
            ? "Desenvolvedor em formação, estudante de Ciência da Computação, interessado em mobile, backend, dados e IA aplicada."
            : "Developer in training and Computer Science student focused on mobile, backend, data, and applied AI."}
        </p>
      </div>

      {/* Navigation Directory */}
      <nav className="flex-1 flex flex-col gap-2 font-mono text-xs mb-8">
        {[
          { id: "/", icon: "🙂", pt: "/Home", en: "/Home" },
          { id: "/me", icon: "👤", pt: "#Me", en: "#Me" },
          { id: "/craft", icon: "🗂", pt: "My Craft", en: "My Craft" },
          { id: "/skills", icon: "⚙", pt: "Skills", en: "Skills" },
        ].map((item) => (
          <Link
            key={item.id}
            href={item.id}
            className="group flex items-center justify-between py-2 text-[var(--text-soft)] hover:text-[var(--accent-green)] transition-all"
          >
            <span className="group-hover:translate-x-1 transition-transform">
              {locale === "pt" ? item.pt : item.en}
            </span>
            <span className="opacity-50 group-hover:opacity-100 transition-opacity">
              {item.icon}
            </span>
          </Link>
        ))}
        <Link 
          href="/contact"
          className="group flex items-center justify-between py-2 mt-4 text-[var(--text-soft)] hover:text-[var(--accent-magenta)] transition-all"
        >
          <span className="group-hover:translate-x-1 transition-transform">
             Contact
          </span>
          <span className="opacity-50 group-hover:opacity-100 transition-opacity">
            ↗
          </span>
        </Link>
      </nav>

      {/* Controls */}
      <div className="mt-auto border-t border-[var(--border)] pt-6 flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setLocale(locale === "pt" ? "en" : "pt")}
            className="font-mono text-xs text-[var(--text-soft)] hover:text-[var(--text)] transition-colors px-2 py-1 border border-[var(--border)] hover:border-[var(--accent-magenta)]"
            aria-label="Toggle language"
          >
            {locale === "pt" ? "PT | EN" : "EN | PT"}
          </button>
          
          <button
            onClick={toggleTheme}
            className="font-mono text-xs text-[var(--text-soft)] hover:text-[var(--text)] transition-colors px-2 py-1 border border-[var(--border)] hover:border-[var(--accent-green)] flex items-center justify-center"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>
    </aside>
  )
}
