'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useI18n } from '@/i18n/I18nProvider';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isToursMenuOpen, setIsToursMenuOpen] = useState(false);
  const { lang, setLanguage, t } = useI18n();

  const languages = [
    { code: 'SRB', name: 'Srpski' },
    { code: 'ENG', name: 'English' },
    { code: 'TUR', name: 'Türkçe' },
    { code: 'DEU', name: 'Deutsch' },
  ];

  const tourCategories = [
    { name: t('nav_tours') + ' - Ljubavne', link: '/tours/love-tours', icon: '💕' },
    { name: t('nav_tours') + ' - Manastirske', link: '/tours/monastery-tours', icon: '⛪' },
    { name: t('nav_tours') + ' - Gradske i istorijske', link: '/tours/city-history-tours', icon: '🏛️' },
    { name: t('nav_tours') + ' - Privatne', link: '/tours/custom-tours', icon: '🎯' }
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleLanguageMenu = () => setIsLanguageMenuOpen(!isLanguageMenuOpen);
  const toggleToursMenu = () => setIsToursMenuOpen(!isToursMenuOpen);

  const selectLanguage = (code: string) => {
    setLanguage(code as 'SRB' | 'ENG' | 'TUR' | 'DEU');
    setIsLanguageMenuOpen(false);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 backdrop-blur border-b border-blue-500/20 shadow-lg">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight text-white hover:text-blue-300 transition-colors">{t('brand')}</Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 text-sm">
          <Link href="/#about" className="text-white hover:text-blue-300 hover:scale-105 transition-all duration-200">{t('nav_about')}</Link>
          <Link href="/#gallery" className="text-white hover:text-blue-300 hover:scale-105 transition-all duration-200">{t('nav_gallery')}</Link>
          
          {/* Tours Dropdown */}
          <div className="relative">
            <button onClick={toggleToursMenu} className="text-white hover:text-blue-300 hover:scale-105 transition-all duration-200 flex items-center gap-1">
              {t('nav_tours')}
              <svg className={`w-4 h-4 transition-transform ${isToursMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isToursMenuOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-background border border-black/[.08] dark:border-white/[.12] rounded-lg shadow-lg py-2 z-50">
                {tourCategories.map((tour) => (
                  <Link key={tour.link} href={tour.link} className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-black/[.05] dark:hover:bg-white/[.05] transition-colors" onClick={() => setIsToursMenuOpen(false)}>
                    <span className="text-lg">{tour.icon}</span>
                    {tour.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          <Link href="/#testimonials" className="text-white hover:text-blue-300 hover:scale-105 transition-all duration-200">{t('nav_testimonials')}</Link>
          <Link href="/#contact" className="text-white hover:text-blue-300 hover:scale-105 transition-all duration-200">{t('nav_contact')}</Link>
        </div>
        
        {/* Desktop Language Selector */}
        <div className="hidden md:block relative">
          <button onClick={toggleLanguageMenu} className="h-9 px-4 rounded-full border border-blue-400/30 text-white text-sm font-medium hover:bg-blue-500/20 hover:border-blue-400/50 hover:scale-105 transition-all flex items-center gap-2">
            {lang}
            <svg className={`w-4 h-4 transition-transform ${isLanguageMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {isLanguageMenuOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-gradient-to-b from-slate-900 to-indigo-900 border border-blue-400/30 rounded-lg shadow-xl py-1 z-50">
              {languages.map((lng) => (
                <button key={lng.code} onClick={() => selectLanguage(lng.code)} className={`w-full text-left px-4 py-2 text-sm text-white hover:bg-blue-500/20 transition-colors ${lang === lng.code ? 'bg-blue-500/30 font-medium' : ''}`}>
                  {lng.code} - {lng.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Mobile Burger Menu */}
        <button onClick={toggleMobileMenu} className="md:hidden p-2 hover:bg-blue-500/20 rounded-lg transition-colors text-white" aria-label="Otvori mobilni meni">
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span className={`block w-5 h-0.5 bg-current transform transition duration-300 ease-in-out ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
            <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-5 h-0.5 bg-current transform transition duration-300 ease-in-out ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
          </div>
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-gradient-to-b from-slate-900 to-indigo-900 backdrop-blur border-t border-blue-500/20 px-4 py-4 space-y-3">
          <Link href="/#about" className="block py-2 text-sm text-white hover:text-blue-300 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{t('nav_about')}</Link>
          <Link href="/#gallery" className="block py-2 text-sm text-white hover:text-blue-300 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{t('nav_gallery')}</Link>
          
          {/* Mobile Tours Dropdown */}
          <div>
            <button onClick={toggleToursMenu} className="flex items-center justify-between w-full py-2 text-sm text-white hover:text-blue-300 transition-colors">
              {t('nav_tours')}
              <svg className={`w-4 h-4 transition-transform ${isToursMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isToursMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="pl-4 space-y-2 mt-2">
                {tourCategories.map((tour) => (
                  <Link key={tour.link} href={tour.link} className="flex items-center gap-3 py-2 text-sm text-white hover:text-blue-300 transition-colors" onClick={() => { setIsMobileMenuOpen(false); setIsToursMenuOpen(false); }}>
                    <span className="text-lg">{tour.icon}</span>
                    {tour.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          <Link href="/#testimonials" className="block py-2 text-sm text-white hover:text-blue-300 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{t('nav_testimonials')}</Link>
          <Link href="/#contact" className="block py-2 text-sm text-white hover:text-blue-300 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{t('nav_contact')}</Link>
          
          {/* Mobile Language Selector */}
          <div className="pt-3 border-t border-blue-500/20 mt-3">
            <div className="text-xs text-blue-300 mb-3 font-medium">{t('nav_language')}</div>
            <div className="grid grid-cols-2 gap-2">
              {languages.map((lng) => (
                <button key={lng.code} onClick={() => { selectLanguage(lng.code); setIsMobileMenuOpen(false); }} className={`text-left px-3 py-2 text-sm rounded-lg transition-colors ${lang === lng.code ? 'bg-blue-500 text-white font-medium' : 'bg-blue-500/10 text-white hover:bg-blue-500/20'}`}>
                  {lng.code} - {lng.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}


