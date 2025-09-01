'use client';

import { useState } from 'react';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isToursMenuOpen, setIsToursMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('ENG');

  const languages = [
    { code: 'ENG', name: 'English' },
    { code: 'SRB', name: 'Srpski' },
    { code: 'TR', name: 'Türkçe' },
    { code: 'GER', name: 'Deutsch' }
  ];

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

  const selectLanguage = (language: string) => {
    setSelectedLanguage(language);
    setIsLanguageMenuOpen(false);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#0b0f2b] backdrop-blur border-b border-black/[.08] dark:border-white/[.12]">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight hover:opacity-80 transition-opacity">VINS Guide</a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 text-sm">
          <a href="#about" className="hover:opacity-80 transition-opacity">About</a>
          <a href="#gallery" className="hover:opacity-80 transition-opacity">Gallery</a>
          
          {/* Tours Dropdown */}
          <div className="relative">
            <button
              onClick={toggleToursMenu}
              className="hover:opacity-80 transition-opacity flex items-center gap-1"
            >
              Tours
              <svg className={`w-4 h-4 transition-transform ${isToursMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isToursMenuOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-background border border-black/[.08] dark:border-white/[.12] rounded-lg shadow-lg py-2 z-50">
                {tourCategories.map((tour) => (
                  <a
                    key={tour.link}
                    href={tour.link}
                    className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-black/[.05] dark:hover:bg-white/[.05] transition-colors"
                    onClick={() => setIsToursMenuOpen(false)}
                  >
                    <span className="text-lg">{tour.icon}</span>
                    {tour.name}
                  </a>
                ))}
              </div>
            )}
          </div>
          
          <a href="#testimonials" className="hover:opacity-80 transition-opacity">Testimonials</a>
          <a href="#contact" className="hover:opacity-80 transition-opacity">Contact</a>
        </div>
        
        {/* Desktop Language Selector */}
        <div className="hidden md:block relative">
          <button
            onClick={toggleLanguageMenu}
            className="h-9 px-4 rounded-full border border-black/[.08] dark:border-white/[.12] text-sm font-medium hover:bg-black/[.05] dark:hover:bg-white/[.05] transition-colors flex items-center gap-2"
          >
            {selectedLanguage}
            <svg className={`w-4 h-4 transition-transform ${isLanguageMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {isLanguageMenuOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-background border border-black/[.08] dark:border-white/[.12] rounded-lg shadow-lg py-1 z-50">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => selectLanguage(lang.code)}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-black/[.05] dark:hover:bg-white/[.05] transition-colors ${
                    selectedLanguage === lang.code ? 'bg-black/[.05] dark:bg-white/[.05] font-medium' : ''
                  }`}
                >
                  {lang.code} - {lang.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Mobile Burger Menu */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 hover:bg-black/[.05] dark:hover:bg-white/[.05] rounded-lg transition-colors"
          aria-label="Toggle mobile menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span className={`block w-5 h-0.5 bg-current transform transition duration-300 ease-in-out ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
            <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-5 h-0.5 bg-current transform transition duration-300 ease-in-out ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
          </div>
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-background/95 backdrop-blur border-t border-black/[.08] dark:border-white/[.12] px-4 py-4 space-y-3">
          <a href="#about" className="block py-2 text-sm hover:opacity-80 transition-opacity" onClick={() => setIsMobileMenuOpen(false)}>About</a>
          <a href="#gallery" className="block py-2 text-sm hover:opacity-80 transition-opacity" onClick={() => setIsMobileMenuOpen(false)}>Gallery</a>
          
          {/* Mobile Tours Dropdown */}
          <div>
            <button
              onClick={toggleToursMenu}
              className="flex items-center justify-between w-full py-2 text-sm hover:opacity-80 transition-opacity"
            >
              Tours
              <svg className={`w-4 h-4 transition-transform ${isToursMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isToursMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="pl-4 space-y-2 mt-2">
                {tourCategories.map((tour) => (
                  <a
                    key={tour.link}
                    href={tour.link}
                    className="flex items-center gap-3 py-2 text-sm hover:opacity-80 transition-opacity"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsToursMenuOpen(false);
                    }}
                  >
                    <span className="text-lg">{tour.icon}</span>
                    {tour.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <a href="#testimonials" className="block py-2 text-sm hover:opacity-80 transition-opacity" onClick={() => setIsMobileMenuOpen(false)}>Testimonials</a>
          <a href="#contact" className="block py-2 text-sm hover:opacity-80 transition-opacity" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
          
          {/* Mobile Language Selector */}
          <div className="pt-3 border-t border-black/[.08] dark:border-white/[.12] mt-3">
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-3 font-medium">Select Language</div>
            <div className="grid grid-cols-2 gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    selectLanguage(lang.code);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                    selectedLanguage === lang.code 
                      ? 'bg-foreground text-background font-medium' 
                      : 'bg-black/[.03] dark:bg-white/[.03] hover:bg-black/[.08] dark:hover:bg-white/[.08]'
                  }`}
                >
                  {lang.code} - {lang.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}


