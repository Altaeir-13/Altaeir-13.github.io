"use client"
import { motion } from "framer-motion"
import { useLocale } from "@/context/LocaleContext"
import { useTheme } from "@/context/ThemeContext"
import { Sun, Moon } from "lucide-react"

export default function Header() {
  const { t, locale, setLocale } = useLocale()
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="header-container"
    >
      <div className="header-logo">
        Randerson de Sá
      </div>
      <nav className="header-nav flex items-center gap-6">
        <a href="#sobre">{t.nav.about}</a>
        <a href="#projetos">{t.nav.projects}</a>
        <a href="#habilidades">{t.nav.skills}</a>
        <a href="#experiencia">{t.nav.experience}</a>
        <a href="#formacao">{t.nav.education}</a>
        <a href="#contato">{t.nav.contact}</a>

        <div className="flex items-center gap-4 ml-4 pl-4 border-l border-[var(--border)]">
          <button 
            onClick={() => setLocale(locale === "pt" ? "en" : "pt")}
            className="px-3 py-1.5 text-xs font-bold rounded-md bg-[var(--surface-elevated)] border border-[var(--border)] text-[var(--text)] transition-all hover:border-[var(--accent-pink)] hover:text-[var(--accent-pink)] focus-visible:ring-2 focus-visible:ring-[var(--accent-pink)] shadow-sm"
            aria-label="Toggle language"
          >
            {locale === "pt" ? "PT | EN" : "EN | PT"}
          </button>
          
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-md bg-[var(--surface-elevated)] border border-[var(--border)] text-[var(--text)] transition-all hover:border-[var(--accent-pink)] hover:text-[var(--accent-pink)] focus-visible:ring-2 focus-visible:ring-[var(--accent-pink)] shadow-sm"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </nav>
    </motion.header>
  )
}