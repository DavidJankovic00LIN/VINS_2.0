'use client';

import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import { city1, nature1 } from '@/photos';
import { useI18n } from '@/i18n/I18nProvider';

export default function Tours() {
  const { t } = useI18n();
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
      </div>
    </section>
  );
}
