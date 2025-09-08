'use client';

import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import { aboutPhoto } from '@/photos';
import { useI18n } from '@/i18n/I18nProvider';

export default function About() {
  const { t } = useI18n();
  const skills = [
    t('about_skill1'),
    t('about_skill2'), 
    t('about_skill3'),
    t('about_skill4'),
  ];

  const getSkillIcon = (text: string) => {
    return '⭐';
  };

  return (
    <section id="about" className="bg-gradient-to-b from-[#0085ca] to-[#fd8112] dark:bg-white/[.04]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <AnimatedSection direction="fade">
          <h2 className="text-3xl font-semibold tracking-tight text-white">{t('about_title')}</h2>
        </AnimatedSection>
        
        <div className="mt-8 grid lg:grid-cols-2 gap-12 items-start">
          {/* Text Content */}
          <AnimatedSection direction="left" className="space-y-4">
            <p className="text-base sm:text-lg text-white/90">
              {t('about_text1')} {t('about_text2')} {t('about_text3')}
            </p>

            <h3 className="text-2xl font-semibold tracking-tight text-white">{t('about_subtitle')}</h3>

            <p className="text-base sm:text-lg text-white/90">
              {t('about_text4')}
            </p>
            
          </AnimatedSection>
          
          {/* Photo */}
          <AnimatedSection direction="right">
            <div className="flex justify-center lg:justify-end">
              <div className="w-64 h-80 sm:w-80 sm:h-96 rounded-xl overflow-hidden border-4 border-white shadow-2xl">
                <Image
                  src={aboutPhoto}
                  alt={t('about_photo_alt')}
                  width={320}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
        
        {/* Skills Grid */}
        <AnimatedSection direction="fade">
          <h3 className="text-3xl font-semibold tracking-tight text-white text-center mt-16">{t('about_skills_title')}</h3>
        </AnimatedSection>
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill, idx) => (
            <AnimatedSection key={skill} direction="up" delayMs={idx * 60}>
              <div 
                className="h-full min-h-[140px] rounded-lg border border-white/20 p-4 text-sm text-center bg-white/20 backdrop-blur-sm hover:bg-white/30 hover:shadow-lg hover:scale-105 transition-all duration-300 text-white font-medium flex items-center justify-center"
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="text-2xl">{getSkillIcon(skill)}</div>
                  <div>{skill}</div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
