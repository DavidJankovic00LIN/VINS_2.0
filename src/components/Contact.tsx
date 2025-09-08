'use client';

import { useState } from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { useI18n } from '@/i18n/I18nProvider';

export default function Contact() {
  const { t } = useI18n();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="bg-gradient-to-b from-[#fd8112] to-[#0085ca]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <AnimatedSection direction="fade">
          <h2 className="text-3xl font-semibold tracking-tight text-white">{t('contact_title')}</h2>
        </AnimatedSection>
        <AnimatedSection direction="fade" delayMs={100}>
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm mb-1 text-white font-medium">{t('contact_name_label')}</label>
                <input 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full h-10 px-3 rounded-md border border-white/30 bg-white/20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all text-white placeholder-white/70" 
                  placeholder={t('contact_name_placeholder')} 
                />
              </div>
              <div>
                <label className="block text-sm mb-1 text-white font-medium">{t('contact_email_label')}</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-10 px-3 rounded-md border border-white/30 bg-white/20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all text-white placeholder-white/70" 
                  placeholder={t('contact_email_placeholder')} 
                />
              </div>
              <div>
                <label className="block text-sm mb-1 text-white font-medium">{t('contact_message_label')}</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full h-28 p-3 rounded-md border border-white/30 bg-white/20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all text-white placeholder-white/70" 
                  placeholder={t('contact_message_placeholder')} 
                />
              </div>
              <button 
                type="submit" 
                className="h-10 px-5 rounded-full bg-white text-[#0085ca] text-sm font-medium hover:bg-white/90 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                {t('contact_submit')}
              </button>
            </form>
            
            <div className="text-sm space-y-4">
              <div className="p-4 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30">
                <div className="font-medium text-white">{t('contact_email_title')}</div>
                <a href="mailto:guide@example.com" className="text-white/90 hover:text-white transition-colors">guide@example.com</a>
              </div>
              <div className="p-4 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30">
                <div className="font-medium text-white">{t('contact_instagram_title')}</div>
                <a href="#" className="text-white/90 hover:text-white transition-colors">@vins.guide</a>
              </div>
              <div className="p-4 rounded-lg bg-white/20 backdrop-blur-sm border border:white/30">
                <div className="font-medium text-white">{t('contact_response_title')}</div>
                <span className="text-white/90">{t('contact_response_text')}</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}


