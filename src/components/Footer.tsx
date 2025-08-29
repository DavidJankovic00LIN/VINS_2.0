'use client';

import { useState } from 'react';

export default function Footer() {
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
      <footer className="bg-black/[.05] dark:bg-white/[.05] border-t border-black/[.08] dark:border-white/[.12]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold mb-4">VINS Tourist Guide</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 max-w-md">
                Professional guided tours and travel experiences. Discover hidden gems, 
                rich history, and authentic local culture with our expert guides.
              </p>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <div>🏢 Company: VINS Tourist Services</div>
                <div>📋 PIB: 123456789</div>
                <div>📄 Registration: 123456/2024</div>
                <div>📍 Address: Belgrade, Serbia</div>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <div>📧 Email: info@vins-guide.com</div>
                <div>📱 Phone: +381 11 123 4567</div>
                <div>📱 WhatsApp: +381 60 123 4567</div>
                <div>📘 Instagram: @vins.guide</div>
                <div>📘 Facebook: VINS Tourist Guide</div>
              </div>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <div className="space-y-2 text-sm">
                <button
                  onClick={openTerms}
                  className="text-gray-600 dark:text-gray-400 hover:text-foreground transition-colors block"
                >
                  📋 Terms & Conditions
                </button>
                <button
                  onClick={openPrivacy}
                  className="text-gray-600 dark:text-gray-400 hover:text-foreground transition-colors block"
                >
                  🔒 Privacy Policy
                </button>
                <div className="text-gray-600 dark:text-gray-400">
                  🍪 Cookie Policy
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-8 pt-8 border-t border-black/[.08] dark:border-white/[.12] flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              © 2024 VINS Tourist Guide. All rights reserved.
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Made with ❤️ in Serbia
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
                <h2 className="text-2xl font-semibold">Terms & Conditions</h2>
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
                <h3 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  By accessing and using VINS Tourist Guide services, you accept and agree to be bound by the terms 
                  and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">2. Service Description</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  VINS Tourist Guide provides professional guided tours, travel planning, and tourism services. 
                  Our services include but are not limited to city tours, nature excursions, historical tours, 
                  and customized travel experiences.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">3. Booking and Cancellation</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  All bookings must be confirmed in advance. Cancellations made 24 hours before the tour will 
                  receive a full refund. Cancellations made less than 24 hours before the tour are non-refundable.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">4. Safety and Responsibility</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  While we prioritize your safety, participants acknowledge that outdoor activities carry inherent risks. 
                  VINS Tourist Guide is not liable for personal injury, property damage, or other losses during tours.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">5. Changes and Modifications</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We reserve the right to modify or cancel tours due to weather conditions, safety concerns, 
                  or other unforeseen circumstances. In such cases, alternative arrangements or full refunds will be provided.
                </p>
              </div>

              <div className="pt-6 border-t border-black/[.08] dark:border-white/[.12]">
                <button
                  onClick={closeModals}
                  className="inline-flex items-center justify-center w-full h-12 px-6 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
                >
                  Back to Exploring
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
                <h2 className="text-2xl font-semibold">Privacy Policy</h2>
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
                <h3 className="text-xl font-semibold mb-3">1. Information We Collect</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We collect information you provide directly to us, such as when you book a tour, contact us, 
                  or subscribe to our newsletter. This may include your name, email address, phone number, 
                  and travel preferences.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">2. How We Use Your Information</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We use the information we collect to provide, maintain, and improve our services, 
                  communicate with you about tours and updates, and ensure the safety and quality of our experiences.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">3. Information Sharing</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  without your consent, except as required by law or to provide our services.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">4. Data Security</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We implement appropriate security measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">5. Your Rights</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  You have the right to access, correct, or delete your personal information. 
                  You may also opt out of marketing communications at any time.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">6. Cookies and Tracking</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We use cookies and similar technologies to enhance your browsing experience, 
                  analyze site traffic, and understand where our visitors are coming from.
                </p>
              </div>

              <div className="pt-6 border-t border-black/[.08] dark:border-white/[.12]">
                <button
                  onClick={closeModals}
                  className="inline-flex items-center justify-center w-full h-12 px-6 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
                >
                  Back to Exploring
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

