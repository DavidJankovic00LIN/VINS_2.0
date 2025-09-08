'use client';

import { useState } from 'react';
import { useI18n } from '@/i18n/I18nProvider';

export default function Footer() {
  const { t } = useI18n();
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const openTerms = () => setShowTerms(true);
  const openPrivacy = () => setShowPrivacy(true);
  const closeModals = () => {
    setShowTerms(false);
    setShowPrivacy(false);
  };

  return (
    <>
      <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 border-t border-blue-500/20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold mb-4 text-white">{t('footer_company')}</h3>
              <p className="text-sm text-blue-200 mb-4 max-w-md">
                {t('footer_description')}
              </p>
              <div className="space-y-2 text-sm text-blue-200">
                <div>🏢 {t('footer_company_info')}</div>
                <div>📍 {t('footer_address')}</div>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4 text-white">{t('footer_contact_title')}</h4>
              <div className="space-y-2 text-sm text-blue-200">
                <div>📧 {t('footer_email')}</div>
                <div>📘 {t('footer_instagram')}</div>
                <div>📘 {t('footer_facebook')}</div>
              </div>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="font-semibold mb-4 text-white">{t('footer_legal_title')}</h4>
              <div className="space-y-2 text-sm">
                <button
                  onClick={openTerms}
                  className="text-blue-200 hover:text-white transition-colors block"
                >
                  📋 {t('footer_terms')}
                </button>
                <button
                  onClick={openPrivacy}
                  className="text-blue-200 hover:text-white transition-colors block"
                >
                  🔒 {t('footer_privacy')}
                </button>
                <div className="text-blue-200">
                  🍪 {t('footer_cookies')}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-8 pt-8 border-t border-blue-500/20 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-blue-300">
              {t('footer_copyright')}
            </div>
            <div className="text-sm text-blue-300">
              
            </div>
          </div>
        </div>
      </footer>

      {/* Terms & Conditions Modal */}
      {showTerms && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-background rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-background border-b border-black/[.08] dark:border-white/[.12] p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">{t('footer_terms_title')}</h2>
                <button
                  onClick={closeModals}
                  className="p-2 hover:bg-black/[.05] dark:hover:bg-white/[.05] rounded-lg transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">{t('terms_acceptance_title')}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {t('terms_acceptance_text')}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">{t('terms_service_title')}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {t('terms_service_text')}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">{t('terms_booking_title')}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {t('terms_booking_text')}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">{t('terms_safety_title')}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {t('terms_safety_text')}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">{t('terms_changes_title')}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {t('terms_changes_text')}
                </p>
              </div>

              <div className="pt-6 border-t border-black/[.08] dark:border-white/[.12]">
                <button
                  onClick={closeModals}
                  className="inline-flex items-center justify-center w-full h-12 px-6 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium hover:from-blue-600 hover:to-indigo-600 transition-all shadow-lg"
                >
                  {t('footer_back_to_site')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Privacy Policy Modal */}
      {showPrivacy && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-background rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-background border-b border-black/[.08] dark:border-white/[.12] p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">{t('footer_privacy_title')}</h2>
                <button
                  onClick={closeModals}
                  className="p-2 hover:bg-black/[.05] dark:hover:bg-white/[.05] rounded-lg transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">{t('privacy_info_title')}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {t('privacy_info_text')}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">{t('privacy_usage_title')}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {t('privacy_usage_text')}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">{t('privacy_sharing_title')}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {t('privacy_sharing_text')}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">{t('privacy_security_title')}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {t('privacy_security_text')}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">{t('privacy_rights_title')}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {t('privacy_rights_text')}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">{t('privacy_cookies_title')}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {t('privacy_cookies_text')}
                </p>
              </div>

              <div className="pt-6 border-t border-black/[.08] dark:border-white/[.12]">
                <button
                  onClick={closeModals}
                  className="inline-flex items-center justify-center w-full h-12 px-6 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium hover:from-blue-600 hover:to-indigo-600 transition-all shadow-lg"
                >
                  {t('footer_back_to_site')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}




