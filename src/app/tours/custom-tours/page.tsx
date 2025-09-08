"use client";
import { useState } from 'react';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useI18n } from '@/i18n/I18nProvider';

export default function CustomTours() {
  const { t } = useI18n();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: send form
    console.log('Private custom tour inquiry:', formData);
  };

  return (
    <main className="font-sans">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-16 bg-gradient-to-b from-yellow-200 via-orange-200 to-orange-300">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 text-gray-900 dark:text-grey-800">{t('custom_tours_hero_title')}</h1>
            <p className="text-lg sm:text-xl text-gray-800 dark:text-gray-800 max-w-3xl mx-auto">
              {t('custom_tours_hero_description')}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-gradient-to-br from-orange-600 via-orange-500 to-blue-700">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left copy */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h2 className="text-2xl font-semibold tracking-tight mb-3 text-gray-900">{t('custom_tours_how_it_works_title')}</h2>
                <ol className="list-decimal pl-5 space-y-2 text-gray-800">
                  <li><span className="font-medium">{t('custom_tours_step1_title')}:</span> {t('custom_tours_step1_desc')}</li>
                  <li><span className="font-medium">{t('custom_tours_step2_title')}:</span> {t('custom_tours_step2_desc')}</li>
                  <li><span className="font-medium">{t('custom_tours_step3_title')}:</span> {t('custom_tours_step3_desc')}</li>
                </ol>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h2 className="text-2xl font-semibold tracking-tight mb-3 text-gray-900">{t('custom_tours_note_title')}</h2>
                <p className="text-gray-800">
                  {t('custom_tours_note_description')}
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h2 className="text-2xl font-semibold tracking-tight mb-3 text-gray-900">{t('custom_tours_why_choose_title')}</h2>
                <ul className="space-y-2 text-gray-800">
                  <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">✓</span> {t('custom_tours_benefit1')}</li>
                  <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">✓</span> {t('custom_tours_benefit2')}</li>
                  <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">✓</span> {t('custom_tours_benefit3')}</li>
                </ul>
              </div>
            </div>

            {/* Right form */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-orange-200">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">{t('custom_tours_form_title')}</h3>
              <div className="text-sm text-gray-700 mb-3">👨‍👩 {t('tour_max')}: 66</div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm mb-1 text-gray-800">{t('custom_tours_form_name')}</label>
                  <input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full h-10 px-3 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder={t('custom_tours_form_name_placeholder')}
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-1 text-gray-800">{t('custom_tours_form_email')}</label>
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full h-10 px-3 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder={t('custom_tours_form_email_placeholder')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1 text-gray-800">{t('custom_tours_form_phone')}</label>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full h-10 px-3 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder={t('custom_tours_form_phone_placeholder')}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm mb-1 text-gray-800">{t('custom_tours_form_message')}</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full h-28 p-3 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder={t('custom_tours_form_message_placeholder')}
                  />
                </div>
                <button
                  type="submit"
                  className="h-10 px-5 rounded-full bg-orange-600 text-white text-sm font-medium hover:bg-orange-700 transition-colors"
                >
                  {t('custom_tours_form_submit')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

