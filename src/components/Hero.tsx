'use client';

import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import { profilePhoto } from '@/photos';
import { useI18n } from '@/i18n/I18nProvider';

export default function Hero() {
  const { t } = useI18n();
  return (
    <section id="home" className="relative isolate bg-gradient-to-br from-[#fd8112] via-[#ff6b35] to-[#0085ca] dark:bg-white/[.04]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left" delayMs={0}>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
              {t('hero_title')}
            </h1>
            <p className="mt-4 text-base sm:text-lg max-w-2xl text-white/90">
              {t('hero_subtitle')}
            </p>
            <div className="mt-8 flex gap-4">
              <a 
                href="#tours" 
                className="h-10 px-5 rounded-full bg-white text-[#0085ca] text-sm font-medium inline-flex items-center hover:bg-white/90 transition-colors shadow-lg"
              >
                {t('hero_cta_tours')}
              </a>
              <a 
                href="#contact" 
                className="h-10 px-5 rounded-full border-2 border-white text-white text-sm inline-flex items-center hover:bg-white hover:text-[#0085ca] transition-colors"
              >
                {t('hero_cta_contact')}
              </a>
            </div>
          </AnimatedSection>
          
          <AnimatedSection direction="right" delayMs={150}>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <Image
                    src={profilePhoto}
                    alt={t('hero_profile_alt')}
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-pulse">
                  {t('hero_available')}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
