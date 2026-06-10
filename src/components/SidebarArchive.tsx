"use client"
import { useLocale } from "@/context/LocaleContext"
import { useTheme } from "@/context/ThemeContext"
import { Sun, Moon } from "lucide-react"
import Link from "next/link"
import React from "react"

export default function SidebarArchive() {
  const { locale, setLocale, t } = useLocale()
  const { theme, toggleTheme } = useTheme()

  return (
    <aside className="hidden lg:flex flex-col fixed top-0 left-0 h-screen w-[280px] bg-[#000000] z-50 p-10 overflow-y-auto">
      
      {/* Identity / Brand */}
      <div className="mb-8">
        <Link href="/">
          <h1 className="[font-family:var(--font-gotfridus)] uppercase text-4xl text-[var(--text)] leading-none tracking-tight hover:text-[var(--accent-green)] transition-colors cursor-pointer">
            ALTAIR
            <br />
            STAR
          </h1>
        </Link>
        <p className="font-mono text-[10px] text-[var(--text-faint)] uppercase tracking-widest mt-4 mb-6">
          {t.sidebar.portfolio}
        </p>
        <p className="font-sans text-xs text-[var(--text-soft)] leading-relaxed">
          {t.sidebar.desc}
        </p>
      </div>

      {/* Navigation Directory */}
      <nav className="flex-1 flex flex-col gap-2 font-mono text-xs mb-8">
        {[
          { id: "/me", icon: "👤", label: t.nav.about },
          { id: "/craft", icon: "🗂", label: t.nav.projects },
          { id: "/skills", icon: "⚙", label: t.nav.skills },
        ].map((item) => (
          <Link
            key={item.id}
            href={item.id}
            className="group flex items-center justify-between py-2 text-[var(--text-soft)] hover:text-[var(--accent-green)] transition-all"
          >
            <span className="group-hover:translate-x-1 transition-transform">
              {item.label}
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
             {t.nav.contact}
          </span>
          <span className="opacity-50 group-hover:opacity-100 transition-opacity">
            ↗
          </span>
        </Link>
      </nav>

      {/* Controls */}
      <div className="mt-auto border-t border-[var(--border)] pt-6 flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <div className="font-mono text-xs flex border border-[var(--border)] overflow-hidden">
            {(["pt", "en", "es"] as const).map((l) => (
              <React.Fragment key={l}>
                <button
                  onClick={() => setLocale(l)}
                  className={`px-2 py-1 transition-colors hover:text-[var(--text)] ${
                    locale === l 
                      ? "bg-[var(--border)] text-[var(--text)]" 
                      : "text-[var(--text-soft)]"
                  }`}
                  aria-label={`Switch to ${l.toUpperCase()}`}
                >
                  {l.toUpperCase()}
                </button>
                {l !== "es" && <span className="py-1 text-[var(--text-soft)]">|</span>}
              </React.Fragment>
            ))}
          </div>
          
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
