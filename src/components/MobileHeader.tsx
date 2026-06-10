"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLocale } from "@/context/LocaleContext"
import { useTheme } from "@/context/ThemeContext"
import { Sun, Moon, Menu, X } from "lucide-react"
import Link from "next/link"

export default function MobileHeader() {
  const { locale, setLocale } = useLocale()
  const { theme, toggleTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className="lg:hidden fixed top-0 w-full z-50 bg-[var(--surface)] border-b border-[var(--border)] px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <div className="font-display text-xl text-[var(--text)] leading-none tracking-tight cursor-pointer hover:text-[var(--accent-green)] transition-colors">
            RDS
          </div>
        </Link>
        
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="text-[var(--text-soft)] hover:text-[var(--accent-green)] transition-colors"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            onClick={() => setIsOpen(true)}
            className="text-[var(--text-soft)] hover:text-[var(--accent-magenta)] transition-colors"
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
                 <div className="font-display text-xl text-[var(--text)] leading-none tracking-tight hover:text-[var(--accent-green)] transition-colors cursor-pointer">
                    RANDERSON DE SÁ
                  </div>
               </Link>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-[var(--text-soft)] hover:text-[var(--accent-magenta)]"
                >
                  <X className="w-8 h-8" />
                </button>
            </div>

            <nav className="flex flex-col gap-6 font-mono text-lg">
              {[
                { id: "/me", pt: "#Me", en: "#Me" },
                { id: "/craft", pt: "My Craft", en: "My Craft" },
                { id: "/skills", pt: "Skills", en: "Skills" },
                { id: "/contact", pt: "Contact", en: "Contact" },
              ].map((item) => (
                <Link
                  key={item.id}
                  href={item.id}
                  onClick={() => setIsOpen(false)}
                  className="text-[var(--text)] hover:text-[var(--accent-green)] transition-colors border-b border-[var(--border)] pb-4"
                >
                  {locale === "pt" ? item.pt : item.en}
                </Link>
              ))}
            </nav>

            <div className="mt-auto pt-8">
              <button 
                onClick={() => setLocale(locale === "pt" ? "en" : "pt")}
                className="font-mono text-sm text-[var(--text)] px-4 py-2 border border-[var(--border)] hover:border-[var(--accent-magenta)] w-full text-center"
              >
                {locale === "pt" ? "MUDAR PARA INGLÊS (EN)" : "SWITCH TO PORTUGUESE (PT)"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
