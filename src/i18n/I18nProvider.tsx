"use client";
import { createContext, useContext, useEffect, useMemo, useState, PropsWithChildren } from 'react';
import sr from './dictionaries/sr';
import en from './dictionaries/en';
import tr from './dictionaries/tr';

type Lang = 'SRB' | 'ENG' | 'TUR';

type Dict = Record<string, string>;

const DICTS: Record<Lang, Dict> = {
  SRB: sr,
  ENG: en,
  TUR: tr,
};

interface I18nContextValue {
  lang: Lang;
  t: (key: string) => string;
  setLanguage: (lang: Lang) => void;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: PropsWithChildren) {
  const [lang, setLang] = useState<Lang>('SRB');

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? (localStorage.getItem('lang') as Lang | null) : null;
    if (stored && (stored === 'SRB' || stored === 'ENG' || stored === 'TUR')) setLang(stored);
  }, []);

  const setLanguage = (l: Lang) => {
    setLang(l);
    if (typeof window !== 'undefined') localStorage.setItem('lang', l);
  };

  const dict = useMemo(() => DICTS[lang], [lang]);

  const t = (key: string) => dict[key] ?? key;

  const value: I18nContextValue = { lang, t, setLanguage };
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}
