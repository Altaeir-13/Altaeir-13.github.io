"use client"
import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLocale } from "@/context/LocaleContext"
import { useTheme } from "@/context/ThemeContext"
import { Sun, Moon, Menu, X } from "lucide-react"
import Link from "next/link"

export default function MobileHeader() {
  const { locale, setLocale, t } = useLocale()
  const { theme, toggleTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className="lg:hidden fixed top-0 w-full z-50 bg-[var(--surface)] border-b border-[var(--border)] px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <div className="[font-family:var(--font-gotfridus)] uppercase text-xl text-[var(--text)] leading-none tracking-tight cursor-pointer hover:text-[var(--color-primary)] transition-colors">
            RDS
          </div>
        </Link>
        
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="text-[var(--text-soft)] hover:text-[var(--color-primary)] transition-colors"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            onClick={() => setIsOpen(true)}
            className="text-[var(--text-soft)] hover:text-[var(--color-secondary)] transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="lg:hidden fixed inset-0 z-[60] bg-[var(--bg)] p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-12">
               <Link href="/">
                 <div className="[font-family:var(--font-gotfridus)] uppercase text-xl text-[var(--text)] leading-none tracking-tight hover:text-[var(--color-primary)] transition-colors cursor-pointer">
                    ALTAIR STAR
                  </div>
               </Link>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-[var(--text-soft)] hover:text-[var(--color-secondary)]"
                >
                  <X className="w-8 h-8" />
                </button>
            </div>

            <nav className="flex flex-col gap-6 font-mono text-lg">
              {[
                { id: "/me", label: t.nav.about },
                { id: "/craft", label: t.nav.projects },
                { id: "/skills", label: t.nav.skills },
                { id: "/contact", label: t.nav.contact },
              ].map((item) => (
                <Link
                  key={item.id}
                  href={item.id}
                  onClick={() => setIsOpen(false)}
                  className="text-[var(--text)] hover:text-[var(--color-primary)] transition-colors border-b border-[var(--border)] pb-4"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto pt-8 flex font-mono text-sm w-full border border-[var(--border)] overflow-hidden">
              {(["pt", "en", "es"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLocale(l)}
                  className={`flex-1 py-3 transition-colors ${
                    locale === l 
                      ? "bg-[var(--border)] text-[var(--text)]" 
                      : "text-[var(--text-soft)] hover:text-[var(--text)]"
                  }`}
                  aria-label={`Switch to ${l.toUpperCase()}`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
