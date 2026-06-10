"use client"
import React, { createContext, useContext, useEffect, useState } from "react";
import { Locale, translations } from "@/data/translations";

type LocaleContextType = {
  locale: Locale;
  t: typeof translations.pt;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("pt");

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-locale") as Locale;
    if (saved === "pt" || saved === "en") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLocaleState(saved);
      document.documentElement.lang = saved === "pt" ? "pt-BR" : "en";
    } else {
      document.documentElement.lang = "pt-BR";
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("portfolio-locale", newLocale);
    document.documentElement.lang = newLocale === "pt" ? "pt-BR" : "en";
  };

  const t = translations[locale];

  return (
    <LocaleContext.Provider value={{ locale, t, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) throw new Error("useLocale must be used within LocaleProvider");
  return context;
}
