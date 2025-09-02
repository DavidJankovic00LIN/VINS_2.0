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
      <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 border-t border-blue-500/20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold mb-4 text-white">VINS Turistički vodič</h3>
              <p className="text-sm text-blue-200 mb-4 max-w-md">
                Profesionalne vođene ture i putnička iskustva. Otkrijte skrivene dragulje, 
                bogatu istoriju i autentičnu lokalnu kulturu uz naše stručne vodiče.
              </p>
              <div className="space-y-2 text-sm text-blue-200">
                <div>🏢 Kompanija: VINS Turističke Usluge</div>
                <div>📋 PIB: 123456789</div>
                <div>📄 Registracija: 123456/2024</div>
                <div>📍 Adresa: Beograd, Srbija</div>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Kontakt</h4>
              <div className="space-y-2 text-sm text-blue-200">
                <div>📧 E-mail: info@vins-guide.com</div>
                <div>📱 Telefon: +381 11 123 4567</div>
                <div>📱 WhatsApp: +381 60 123 4567</div>
                <div>📘 Instagram: @vins.guide</div>
                <div>📘 Facebook: VINS Turistički vodič</div>
              </div>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Pravna dokumenta</h4>
              <div className="space-y-2 text-sm">
                <button
                  onClick={openTerms}
                  className="text-blue-200 hover:text-white transition-colors block"
                >
                  📋 Uslovi korišćenja
                </button>
                <button
                  onClick={openPrivacy}
                  className="text-blue-200 hover:text-white transition-colors block"
                >
                  🔒 Politika privatnosti
                </button>
                <div className="text-blue-200">
                  🍪 Politika kolačića
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-8 pt-8 border-t border-blue-500/20 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-blue-300">
              © 2025 VINS Turistički vodič. Sva prava zadržana.
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
                <h2 className="text-2xl font-semibold">Uslovi korišćenja</h2>
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
                <h3 className="text-xl font-semibold mb-3">1. Prihvatanje uslova</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Korišćenjem usluga VINS Turističkog vodiča prihvatate i slažete se sa uslovima 
                  ove saglasnosti. Ako se ne slažete sa navedenim, molimo ne koristite ovu uslugu.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">2. Opis usluge</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  VINS Turistički vodič pruža profesionalne vođene ture, planiranje putovanja i turističke usluge. 
                  Naše usluge uključuju, između ostalog, gradske ture, izlete u prirodu, istorijske ture 
                  i prilagođena turistička iskustva.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">3. Rezervacije i otkazivanje</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Sve rezervacije moraju biti potvrđene unapred. Otkazivanja izvršena 24 sata pre ture 
                  imaju pravo na pun povraćaj. Otkazivanja kraća od 24 sata pre ture ne podležu povraćaju.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">4. Bezbednost i odgovornost</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Iako nam je vaša bezbednost prioritet, učesnici prihvataju da aktivnosti na otvorenom nose određene rizike. 
                  VINS Turistički vodič ne snosi odgovornost za lične povrede, štetu na imovini ili druge gubitke tokom tura.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">5. Promene i izmene</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Zadržavamo pravo izmene ili otkazivanja tura zbog vremenskih uslova, bezbednosnih razloga 
                  ili drugih nepredviđenih okolnosti. U takvim slučajevima biće obezbeđene alternativne opcije ili pun povraćaj.
                </p>
              </div>

              <div className="pt-6 border-t border-black/[.08] dark:border-white/[.12]">
                <button
                  onClick={closeModals}
                  className="inline-flex items-center justify-center w-full h-12 px-6 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium hover:from-blue-600 hover:to-indigo-600 transition-all shadow-lg"
                >
                  Nazad na sajt
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
                <h2 className="text-2xl font-semibold">Politika privatnosti</h2>
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
                <h3 className="text-xl font-semibold mb-3">1. Informacije koje prikupljamo</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Prikupljamo informacije koje nam direktno pružite, poput rezervacije ture, kontakt forme 
                  ili prijave na newsletter. To može uključivati vaše ime, e-mail, broj telefona 
                  i putne preferencije.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">2. Kako koristimo informacije</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Koristimo prikupljene informacije kako bismo pružili, održavali i unapređivali naše usluge, 
                  komunicirali sa vama o turama i novostima i osigurali bezbednost i kvalitet iskustva.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">3. Deljenje informacija</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Ne prodajemo, ne razmenjujemo niti na drugi način ne prenosimo vaše lične podatke trećim stranama 
                  bez vašeg pristanka, osim ako je to zakonom zahtevano ili potrebno za pružanje usluga.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">4. Bezbednost podataka</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Primenujemo odgovarajuće bezbednosne mere radi zaštite vaših ličnih podataka od 
                  neovlašćenog pristupa, izmene, otkrivanja ili uništenja.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">5. Vaša prava</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Imate pravo da pristupite, ispravite ili obrišete svoje lične podatke. 
                  Takođe se možete odjaviti od marketinških komunikacija u bilo kom trenutku.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">6. Kolačići i praćenje</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Koristimo kolačiće i slične tehnologije kako bismo poboljšali vaše iskustvo, 
                  analizirali saobraćaj na sajtu i razumeli odakle dolaze posetioci.
                </p>
              </div>

              <div className="pt-6 border-t border-black/[.08] dark:border-white/[.12]">
                <button
                  onClick={closeModals}
                  className="inline-flex items-center justify-center w-full h-12 px-6 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium hover:from-blue-600 hover:to-indigo-600 transition-all shadow-lg"
                >
                  Nazad na sajt
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}




