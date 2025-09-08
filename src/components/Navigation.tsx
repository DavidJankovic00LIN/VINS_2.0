'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useI18n } from '@/i18n/I18nProvider';
import logo from '@/photos/logo.png';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isToursMenuOpen, setIsToursMenuOpen] = useState(false);
  const { lang, setLanguage, t } = useI18n();

  const languages = [
    { code: 'ENG', name: 'English' },
    { code: 'SRB', name: 'Srpski' },
    { code: 'TUR', name: 'Türkçe' }
  ];

  const flagFor = (code: 'ENG' | 'SRB' | 'TUR') => {
    if (code === 'ENG') return '🇬🇧';
    if (code === 'SRB') return '🇷🇸';
    return '🇹🇷';
  };

  const tourCategories = [
    { name: 'Love Tours', link: '/tours/love-tours', icon: '💕' },
    { name: 'Monastery Tours', link: '/tours/monastery-tours', icon: '⛪' },
    { name: 'City & History Tours', link: '/tours/city-history-tours', icon: '🏛️' },
    { name: 'Custom Tours', link: '/tours/custom-tours', icon: '🎯' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  const toggleToursMenu = () => {
    setIsToursMenuOpen(!isToursMenuOpen);
  };

  const selectLanguage = (code: 'ENG' | 'SRB' | 'TUR') => {
    setLanguage(code);
    setIsLanguageMenuOpen(false);
  };

  return (
         <header className="fixed top-0 inset-x-0 z-50 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 backdrop-blur border-b border-blue-500/20 shadow-lg">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
        {/* Mobile Burger Menu */}
               <button
         onClick={toggleMobileMenu}
         className="md:hidden p-2 hover:bg-blue-500/20 rounded-lg transition-colors text-white order-1"
         aria-label="Toggle mobile menu"
       >
        <div className="w-6 h-6 flex flex-col justify-center items-center">
          <span className={`block w-5 h-0.5 bg-current transform transition duration-300 ease-in-out ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
          <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-5 h-0.5 bg-current transform transition duration-300 ease-in-out ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
        </div>
      </button>

        {/* Brand Logo: left on desktop, right on mobile */}
                 <Link href="/" className="order-2 md:order-1 inline-flex items-center">
          <Image src={logo} alt="Maja Tours" className="h-11 w-auto object-contain" priority />
        </Link>

        {/* Desktop Navigation */}
                 <div className="hidden md:flex gap-6 text-sm order-2">
          <Link href="/#about" className="text-white hover:text-blue-300 hover:scale-105 transition-all duration-200">{t('nav_about')}</Link>
          <Link href="/#gallery" className="text-white hover:text-blue-300 hover:scale-105 transition-all duration-200">{t('nav_gallery')}</Link>
          
          {/* Tours Dropdown */}
          <div className="relative">
                        <button
              onClick={toggleToursMenu}
              className="text-white hover:text-blue-300 hover:scale-105 transition-all duration-200 flex items-center gap-1"
            >
              {t('nav_tours')}
             <svg className={`w-4 h-4 transition-transform ${isToursMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
             </svg>
           </button>
           
           {isToursMenuOpen && (
            <div className="absolute top-full left-0 mt-2 w-64 bg-gradient-to-b from-slate-900 to-indigo-900 border border-blue-400/30 rounded-lg shadow-lg py-2 z-50">
               {tourCategories.map((tour) => (
                 <Link
                   key={tour.link}
                   href={tour.link}
                   className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-blue-500/20 transition-colors"
                   onClick={() => setIsToursMenuOpen(false)}
                 >
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
      <div className="hidden md:block relative order-3">
        <button
          onClick={toggleLanguageMenu}
          className="h-9 px-3 rounded-full border border-orange-500/40 bg-orange-600 text-white text-sm font-medium hover:bg-orange-700 hover:border-orange-500/60 hover:scale-105 transition-all flex items-center gap-2"
          aria-label="Select language"
        >
          <Image src={`/flags/${lang === 'ENG' ? 'eng' : lang === 'SRB' ? 'srb' : 'tur'}.svg`} alt={lang} width={20} height={14} className="h-[14px] w-auto" />
          <svg className={`w-4 h-4 transition-transform ${isLanguageMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {isLanguageMenuOpen && (
          <div className="absolute right-0 mt-2 w-28 bg-gradient-to-b from-slate-900 to-indigo-900 border border-blue-400/30 rounded-lg shadow-xl py-1 z-50">
            {languages.map((lng) => (
              <button
                key={lng.code}
                onClick={() => selectLanguage(lng.code as 'ENG' | 'SRB' | 'TUR')}
                className={`w-full text-left px-3 py-2 text-sm text-white hover:bg-blue-500/20 transition-colors ${
                  lang === lng.code ? 'bg-blue-500/30 font-medium' : ''
                }`}
              >
                <Image src={`/flags/${lng.code === 'ENG' ? 'eng' : lng.code === 'SRB' ? 'srb' : 'tur'}.svg`} alt={lng.name} width={20} height={14} className="h-[14px] w-auto" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Mobile Language Selector (mobile right) */}
      <div className="relative md:hidden order-3">
        <button
          onClick={toggleLanguageMenu}
          className="h-9 px-3 rounded-full border border-orange-500/40 bg-orange-600 text-white text-sm font-medium hover:bg-orange-700 hover:border-orange-500/60 transition-all flex items-center gap-2"
          aria-label="Select language"
        >
          <Image src={`/flags/${lang === 'ENG' ? 'eng' : lang === 'SRB' ? 'srb' : 'tur'}.svg`} alt={lang} width={20} height={14} className="h-[14px] w-auto" />
          <svg className={`w-4 h-4 transition-transform ${isLanguageMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {isLanguageMenuOpen && (
          <div className="absolute right-0 mt-2 w-28 bg-gradient-to-b from-slate-900 to-indigo-900 border border-blue-400/30 rounded-lg shadow-xl py-1 z-50">
            {languages.map((lng) => (
              <button
                key={lng.code}
                onClick={() => selectLanguage(lng.code as 'ENG' | 'SRB' | 'TUR')}
                className={`w-full text-left px-3 py-2 text-sm text-white hover:bg-blue-500/20 transition-colors ${
                  lang === lng.code ? 'bg-blue-500/30 font-medium' : ''
                }`}
              >
                <Image src={`/flags/${lng.code === 'ENG' ? 'eng' : lng.code === 'SRB' ? 'srb' : 'tur'}.svg`} alt={lng.name} width={20} height={14} className="h-[14px] w-auto" />
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>

      {/* Mobile Dropdown Menu */}
              <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-gradient-to-b from-slate-900 to-indigo-900 backdrop-blur border-t border-blue-500/20 px-4 py-4 space-y-3">
         <Link href="/#about" className="block py-2 text-sm text-white hover:text-blue-300 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{t('nav_about')}</Link>
         <Link href="/#gallery" className="block py-2 text-sm text-white hover:text-blue-300 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{t('nav_gallery')}</Link>
         
         {/* Mobile Tours Dropdown */}
         <div>
           <button
             onClick={toggleToursMenu}
             className="flex items-center justify-between w-full py-2 text-sm text-white hover:text-blue-300 transition-colors"
           >
             {t('nav_tours')}
             <svg className={`w-4 h-4 transition-transform ${isToursMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
             </svg>
           </button>
           
           <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isToursMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
             <div className="pl-4 space-y-2 mt-2">
               {tourCategories.map((tour) => (
                                    <Link
                  key={tour.link}
                  href={tour.link}
                  className="flex items-center gap-3 py-2 text-sm text-white hover:text-blue-300 transition-colors"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsToursMenuOpen(false);
                  }}
                >
                 <span className="text-lg">{tour.icon}</span>
                 {tour.name}
               </Link>
               ))}
             </div>
           </div>
         </div>
         
         <Link href="/#testimonials" className="block py-2 text-sm text-white hover:text-blue-300 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{t('nav_testimonials')}</Link>
         <Link href="/#contact" className="block py-2 text-sm text-white hover:text-blue-300 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{t('nav_contact')}</Link>
         
         {/* Mobile Language Selector moved to top bar */}
       </div>
      </div>
    </header>
 );
}


