'use client';

import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import { city1, nature1 } from '@/photos';
import { useI18n } from '@/i18n/I18nProvider';
import { useState } from 'react';

export default function Tours() {
  const { t } = useI18n();
  const [openFeaturedId, setOpenFeaturedId] = useState<string | null>(null);
  const tourCategories = {
    love: {
      name: t('tours_love_name'),
      description: t('tours_love_desc'),
      link: '/tours/love-tours',
      tourCount: 3
    },
    monastery: {
      name: t('tours_monastery_name'),
      description: t('tours_monastery_desc'),
      link: '/tours/monastery-tours',
      tourCount: 4
    },
    cityHistory: {
      name: t('tours_city_name'),
      description: t('tours_city_desc'),
      link: '/tours/city-history-tours',
      tourCount: 5
    },
    custom: {
      name: t('tours_custom_name'),
      description: t('tours_custom_desc'),
      link: '/tours/custom-tours',
      tourCount: 6
    }
  };

  const getCategoryImage = (key: string) => {
    // Privremene slike (koristiću dve postojeće, korisnik će kasnije zameniti)
    if (key === 'love' || key === 'custom') return city1;
    return nature1;
  };


  return (
    <section id="tours" className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <AnimatedSection direction="fade">
          <h2 className="text-3xl font-semibold tracking-tight text-white">{t('tours_title')}</h2>
          <p className="mt-3 text-base sm:text-lg max-w-3xl text-blue-200">
            {t('tours_subtitle')}
          </p>
        </AnimatedSection>
        
        {/* Tour Categories Grid */}
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(tourCategories).map(([key, category], idx) => (
            <AnimatedSection key={key} direction="up" delayMs={idx * 80}>
              <a 
                href={category.link}
                className="rounded-xl border border-blue-400/30 p-6 bg-white/10 backdrop-blur-sm hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group block hover:bg-white/20 flex flex-col h-full min-h-[360px]"
              >
                <div className="mb-4 rounded-lg overflow-hidden border border-blue-400/30 bg-white/5">
                  <Image
                    src={getCategoryImage(key)}
                    alt={category.name}
                    width={640}
                    height={360}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    priority={false}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-white">{category.name}</h3>
                  <p className="text-sm text-blue-200 mb-4">{category.description}</p>
                </div>
                <div className="pt-2 mt-auto text-sm font-medium text-blue-300 group-hover:text-white transition-all">
                  {t('tours_cta')} →
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>

        {/* Featured: Tours of the month */}
         <AnimatedSection direction="fade" delayMs={100}>
          <h3 className="mt-16 text-2xl font-semibold tracking-tight text-white">{t('tours_featured_title')}</h3>
          <p className="mt-2 text-blue-200 max-w-3xl">{t('tours_featured_desc')}</p>
        </AnimatedSection>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[{
              id: 'love-walk-bgd',
              key: 'love',
              link: tourCategories.love.link,
              name: 'Beograd – Šetnja kroz tajne i ljubavne priče',
              description: 'Neobična šetnja kroz centar Beograda sa pričama o bogatašima, umetnicima i ljubavima skrivenim iza starih fasada.',
              duration: 'oko 2 sata',
              price: '',
              highlights: [
                'Maksimalan broj učesnika: 25–30 (ograničena mesta)',
                'Najlepše i najtragičnije ljubavne priče Knez Mihailove',
                'Misterije i tajne glavne ulice'
              ],
              bookingLink: '/booking/beograd-setnja-ljubavne-price'
            },
            {
              id: 'nimnik-morning',
              key: 'monastery',
              link: tourCategories.monastery.link,
              name: 'Jutro u Nimniku – dan za dušu',
              description: 'Prisustvo jutarnjoj liturgiji u Nimniku i vreme provedeno u duhovnom razgovoru i tišini manastira.',
              duration: 'pola dana',
              price: '',
              highlights: [
                'Prisustvovanje jutarnjoj liturgiji',
                'Priče o čudima i duhovni razgovori'
              ],
              bookingLink: '/booking/nimnik-jutro'
            },
            {
              id: 'bgd-night-river',
              key: 'cityHistory',
              link: tourCategories.cityHistory.link,
              name: 'Beograd sa reke – noć magije',
              description: 'Noćna vožnja brodićem ili tura u zalazak sunca – pogledi na Kalemegdan, Ušće, mostove i svetla grada.',
              duration: '1.5–2 sata',
              price: '',
              highlights: [
                'Opcije: Zalazak sunca ili Noćni Beograd',
                'Pogledi: Kalemegdan, Ušće, mostovi i panorame'
              ],
              bookingLink: '/booking/beograd-noc-magije'
            }].map((f, idx) => (
            <AnimatedSection key={f.key} direction="up" delayMs={idx * 80}>
              <div 
                className="rounded-xl border border-orange-200 p-6 bg-white text-gray-800 hover:shadow-xl hover:scale-105 transition-all duration-300 group hover:border-orange-300 flex flex-col h-full min-h-[360px]"
              >
                <div className="mb-4 rounded-lg overflow-hidden border border-blue-400/30 bg-white/5">
                  <Image
                    src={getCategoryImage(f.key)}
                    alt={f.name}
                    width={640}
                    height={360}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    priority={false}
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold mb-2">{f.name}</h4>
                  <p className="text-sm text-gray-700 mb-4">{f.description}</p>
                  <div className="mb-4 text-sm space-y-2">
                    <div className="flex items-center gap-1">⏱️ {t('tour_duration')}: {f.duration}</div>
                    {f.price !== undefined && (
                      <div className="flex items-center gap-1">💰 {t('tour_price')}: {f.price || '—'}</div>
                    )}
                    <div className="flex items-center gap-1">👨‍👩 {t('tour_max')}: {(() => {
                      const txt = [f.description, ...(f.highlights || [])].join(' ');
                      const m = txt.match(/\b(\d{1,3})(?:\s*[–-]\s*(\d{1,3}))?\b/);
                      if (m) {
                        const a = parseInt(m[1], 10);
                        const b = m[2] ? parseInt(m[2], 10) : a;
                        return Math.max(a, b);
                      }
                      return 66;
                    })()}</div>
                  </div>
                  {f.highlights && f.highlights.length > 0 && (
                    <div className="mb-4">
                      <h5 className="font-medium mb-1">{t('tour_highlights')}</h5>
                      <ul className="space-y-1 text-sm text-gray-700">
                        {f.highlights.map((h, i) => (
                          <li key={i} className="flex items-center gap-2"><span className="text-orange-500">✓</span>{h}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <div className="pt-2 mt-auto flex gap-2 flex-wrap">
                  <a
                    href={f.link}
                    className="inline-flex items-center justify-center h-10 px-4 rounded-full bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 transition-colors"
                  >
                    {t('tours_cta')}
                  </a>
                  <button
                    onClick={(e) => { e.preventDefault(); setOpenFeaturedId(f.id); }}
                    className="inline-flex items-center justify-center h-10 px-4 rounded-full bg-amber-400 text-white text-sm font-medium hover:bg-amber-500 transition-colors shadow"
                  >
                    {t('tours_read_more')}
                  </button>
                  <a
                    href={f.bookingLink}
                    className="inline-flex items-center justify-center h-10 px-4 rounded-full bg-orange-600 text-white text-sm font-medium hover:bg-orange-700 transition-colors"
                  >
                    {t('tours_book_button')}
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Featured Modal */}
        {openFeaturedId && (() => {
          const items = [{
              id: 'love-walk-bgd',
              name: 'Beograd – Šetnja kroz tajne i ljubavne priče',
              description: 'Neobična šetnja kroz centar Beograda sa pričama o bogatašima, umetnicima i ljubavima skrivenim iza starih fasada.',
              highlights: [
                'Maksimalan broj učesnika: 25–30 (ograničena mesta)',
                'Najlepše i najtragičnije ljubavne priče Knez Mihailove',
                'Misterije i tajne glavne ulice'
              ],
              bookingLink: '/booking/beograd-setnja-ljubavne-price'
            },
            {
              id: 'nimnik-morning',
              name: 'Jutro u Nimniku – dan za dušu',
              description: 'Prisustvo jutarnjoj liturgiji u Nimniku i vreme provedeno u duhovnom razgovoru i tišini manastira.',
              highlights: [
                'Prisustvovanje jutarnjoj liturgiji',
                'Priče o čudima i duhovni razgovori'
              ],
              bookingLink: '/booking/nimnik-jutro'
            },
            {
              id: 'bgd-night-river',
              name: 'Beograd sa reke – noć magije',
              description: 'Noćna vožnja brodićem ili tura u zalazak sunca – pogledi na Kalemegdan, Ušće, mostove i svetla grada.',
              highlights: [
                'Opcije: Zalazak sunca ili Noćni Beograd',
                'Pogledi: Kalemegdan, Ušće, mostovi i panorame'
              ],
              bookingLink: '/booking/beograd-noc-magije'
            }];
          const item = items.find(it => it.id === openFeaturedId);
          if (!item) return null;
          return (
            <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
              <div className="bg-background rounded-2xl max-w-2xl w-full overflow-hidden">
                <div className="p-6 border-b border-black/[.08] dark:border-white/[.12] flex items-center justify-between">
                  <h3 className="text-2xl font-semibold text-foreground">{item.name}</h3>
                  <button
                    onClick={() => setOpenFeaturedId(null)}
                    className="p-2 hover:bg-black/[.05] dark:hover:bg-white/[.05] rounded-lg"
                    aria-label="Close"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="p-6 space-y-4 text-gray-700 dark:text-gray-300">
                  <p>{item.description}</p>
                  {item.highlights && (
                    <div>
                      <h4 className="font-medium mb-2">{t('tour_highlights')}</h4>
                      <ul className="space-y-1 text-sm">
                        {item.highlights.map((h, i) => (
                          <li key={i} className="flex items-center gap-2"><span className="text-orange-500">✓</span>{h}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="pt-2 flex justify-end gap-3">
                    <a
                      href={item.bookingLink}
                      className="inline-flex items-center justify-center h-10 px-6 rounded-full bg-orange-600 text-white text-sm font-medium hover:bg-orange-700 transition-colors"
                    >
                      {t('tours_book_button')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
}
