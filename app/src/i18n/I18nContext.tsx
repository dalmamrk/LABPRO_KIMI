import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import type { Language, Translations } from './translations';
import { translations } from './translations';

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  toggleLanguage: () => void;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children, initialLang = 'it' }: { children: React.ReactNode; initialLang?: Language }) {
  const [language, setLanguageState] = useState<Language>(initialLang);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    // Store preference in localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('labpro-language', lang);
    }
    // Update HTML lang attribute
    document.documentElement.lang = lang;
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage(language === 'it' ? 'en' : 'it');
  }, [language, setLanguage]);

  // Load saved preference on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('labpro-language') as Language | null;
      if (saved && (saved === 'it' || saved === 'en')) {
        setLanguageState(saved);
        document.documentElement.lang = saved;
      }
    }
  }, []);

  const value: I18nContextType = {
    language,
    setLanguage,
    t: translations[language],
    toggleLanguage,
  };

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}
