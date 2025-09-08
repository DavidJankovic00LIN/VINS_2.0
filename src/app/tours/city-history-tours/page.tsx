'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useI18n } from '@/i18n/I18nProvider';
import { useState } from 'react';

export default function CityHistoryTours() {
  const { t, lang } = useI18n();
  const [openTourId, setOpenTourId] = useState<string | null>(null);

  const tours = (() => {
    if (lang === 'ENG') {
      return [
        {
          id: 'karlovci-intimno',
          name: 'Karlovci Just for You – An Intimate Journey Through Time',
          duration: 'full-day tour',
          price: '',
          description:
            'A private experience for 3–4 people through charming Karlovci – the city of wine, love and cultural heritage.',
          highlights: [
            'Wine tasting and local specialties',
            'Stories of noble families and love legends',
            'Lunch in the heart of Karlovci – authentic Vojvodinian cuisine',
            'Sights: Patriarchate, Cathedral, Karlovci Gymnasium, Branko Radičević Square'
          ],
          details: [
            'Not an ordinary trip – a private experience for hedonists and history lovers! In a small group (3–4) we discover the spirit of Karlovci.'
          ],
          practical: [
            '📍 Departure: Belgrade',
            '🕒 Duration: full day',
            '🍷 Included: lunch + guide + wine recommendations',
            '🎟 Price: exclusive, limited availability'
          ],
          marketing: [
            '📌 Luxury & exclusivity – your private Vojvodina fairytale',
            '📌 Unique experience – avoid the crowds, enjoy Karlovci in peace',
            '📌 Hedonistic moment – a glass of wine and sunset over the Danube'
          ],
          bookingLink: '/booking/karlovci-intimno'
        },
        {
          id: 'brodic-noc-zalazak',
          name: 'Belgrade from the River – A Night of Magic',
          duration: '1.5–2 hours',
          price: '',
          description:
            'Night boat ride or sunset cruise – views of Kalemegdan, Branko’s Bridge and the city lights.',
          highlights: [
            'Options: Sunset or Night Belgrade',
            'Views: Kalemegdan, Confluence, bridges and skylines',
            'Welcome cocktail, music and themed evenings'
          ],
          details: [
            'Experience Belgrade from a new perspective while cruising the Sava and Danube.'
          ],
          practical: [
            '📍 Departure: Beton Hala or Zemun (upon reservation)',
            '🕒 Duration: 1.5–2 hours',
            '🍹 Included: welcome cocktail',
            '🎵 Music + optional themed nights'
          ],
          marketing: [
            '✔ Sunset – romantic atmosphere with a cocktail',
            '✔ Night cruise – magic of lights and music',
            '🐢 Boat “Kornjača” or luxury cruiser – elegance on the water'
          ],
          bookingLink: '/booking/beograd-noc-magije'
        },
        {
          id: 'manasija-lisine',
          name: 'Spirituality & Nature – Manasija & Lisine',
          duration: 'full-day tour',
          price: '',
          description:
            'Manasija – fortifications and frescoes; Lisine – waterfalls and nature; plus a special surprise.',
          highlights: [
            'Manasija – endowment of Despot Stefan Lazarević',
            'Lisine – waterfalls and fresh air',
            'Option: Museum of Monastery Models or Resava Cave'
          ],
          details: [
            'A day for lovers of history, spirituality and nature – three experiences in one.'
          ],
          practical: [
            '📍 Departure: Belgrade',
            '🕒 Duration: full day (limited to 20 people)',
            '🍴 Lunch at a restaurant by the waterfalls'
          ],
          marketing: [
            '📌 “One day – three experiences: monastery, waterfall and secret cave!”',
            '📌 “Ideal for nature and history lovers – sign up now!”'
          ],
          bookingLink: '/booking/manasija-lisine'
        },
        {
          id: 'dvorci-subotica',
          name: 'Vojvodina Castles & the Charm of Subotica',
          duration: 'full-day or two-day tour',
          price: '',
          description:
            'Opulence of Vojvodina castles, Art Nouveau Subotica and an optional visit to Lake Palić.',
          highlights: [
            'Walk through castles, parks and noble stories',
            'Subotica – Art Nouveau, cultural gems and gastronomy',
            'Option: Lake Palić – promenade, bike route or boat ride'
          ],
          details: [
            'A perfect blend of history, architecture and nature – explore northern Serbia at a relaxed pace.'
          ],
          practical: [
            '📍 Departure: Belgrade',
            '🕒 Duration: full day or 2 days',
            '🎟 Limited to 20 people',
            '🍴 Lunch/dinner break; 🏨 optional overnight stay (extra cost)'
          ],
          bookingLink: '/booking/dvorci-subotica'
        }
      ];
    }
    if (lang === 'TUR') {
      return [
        {
          id: 'karlovci-intimno',
          name: 'Sadece Sizin İçin Karlovci – Zamanda Samimi Bir Yolculuk',
          duration: 'tam günlük tur',
          price: '',
          description:
            '3–4 kişilik özel deneyim – şarap, aşk ve kültürel miras şehri Karlovci.’',
          highlights: [
            'Şarap tadımı ve yerel lezzetler',
            'Aileler ve aşk efsaneleri üzerine hikayeler',
            'Merkezde öğle yemeği – otantik Vojvodina mutfağı',
            'Görülecekler: Patrikhane, Katedral, Gimnazyum, Branko Radičević Meydanı'
          ],
          details: [
            'Sıradan bir gezi değil – hedonistler ve tarih tutkunları için özel bir deneyim!'
          ],
          practical: [
            '📍 Hareket: Belgrad',
            '🕒 Süre: tüm gün',
            '🍷 Dahil: öğle yemeği + rehber + şarap önerileri',
            '🎟 Fiyat: ayrıcalıklı, sınırlı kontenjan'
          ],
          marketing: [
            '📌 Lüks & ayrıcalık – size özel Vojvodina masalı',
            '📌 Eşsiz deneyim – kalabalıklardan uzak, huzurlu Karlovci',
            '📌 Hedonist an – şarap ve Tuna üzerinde gün batımı'
          ],
          bookingLink: '/booking/karlovci-intimno'
        },
        {
          id: 'brodic-noc-zalazak',
          name: 'Nehirden Belgrad – Büyülü Bir Gece',
          duration: '1.5–2 saat',
          price: '',
          description:
            'Gece tekne turu veya gün batımı gezisi – Kalemegdan, Branko Köprüsü ve şehir ışıkları.',
          highlights: [
            'Seçenekler: Gün batımı veya Gece Belgrad',
            'Manzaralar: Kalemegdan, birleşim, köprüler ve silüetler',
            'Hoş geldin kokteyli, müzik ve temalı geceler'
          ],
          details: [
            'Sava ve Tuna boyunca şehir manzaraları eşliğinde benzersiz bir deneyim.'
          ],
          practical: [
            '📍 Hareket: Beton Hala veya Zemun (rezervasyonla)',
            '🕒 Süre: 1.5–2 saat',
            '🍹 Dahil: karşılama kokteyli',
            '🎵 Müzik + temalı geceler (opsiyonel)'
          ],
          marketing: [
            '✔ Sunset – kokteyl eşliğinde romantik atmosfer',
            '✔ Gece turu – ışıkların ve müziğin büyüsü',
            '🐢 "Kornjača" teknesi veya lüks gemi – suda zarafet'
          ],
          bookingLink: '/booking/beograd-noc-magije'
        },
        {
          id: 'manasija-lisine',
          name: 'Maneviyat & Doğa – Manasija & Lisine',
          duration: 'tam günlük tur',
          price: '',
          description:
            'Manasija – surlar ve freskler; Lisine – şelaleler ve doğa; özel bir sürpriz ile.',
          highlights: [
            'Manasija – Despot Stefan Lazarević vakfı',
            'Lisine – şelaleler ve temiz hava',
            'Seçenek: Manastır Maketleri Müzesi veya Resava Mağarası'
          ],
          details: [
            'Tarih, maneviyat ve doğayı sevenler için gün – üç deneyim bir arada.'
          ],
          practical: [
            '📍 Hareket: Belgrad',
            '🕒 Süre: tüm gün (20 kişi ile sınırlı)',
            '🍴 Şelale yanındaki restoranda öğle yemeği'
          ],
          marketing: [
            '📌 "Bir gün – üç deneyim: manastır, şelale ve gizli mağara!"',
            '📌 "Doğa ve tarih tutkunları için ideal – hemen kaydolun!"'
          ],
          bookingLink: '/booking/manasija-lisine'
        },
        {
          id: 'dvorci-subotica',
          name: 'Vojvodina Şatoları & Subotica’nın Cazibesi',
          duration: 'tam günlük veya iki günlük tur',
          price: '',
          description:
            'Vojvodina şatolarının görkemi, Art Nouveau Subotica ve opsiyonel Palić Gölü ziyareti.',
          highlights: [
            'Şatolar, parklar ve soylu hikayeler arasında yürüyüş',
            'Subotica – Art Nouveau, kültürel zenginlikler ve gastronomija',
            'Opcija: Palić Gölü – yürüyüş, bisiklet veya tekne turu'
          ],
          details: [
            'Tarih, mimari ve doğanın mükemmel uyumu – Kuzey Sırbistan’ı sakin tempoda keşfedin.'
          ],
          practical: [
            '📍 Hareket: Belgrad',
            '🕒 Süre: tüm gün veya 2 gün',
            '🎟 20 kişi ile sınırlı',
            '🍴 Öğle/akşam yemeği molası; 🏨 opsiyonel konaklama (ek ücret)'
          ],
          bookingLink: '/booking/dvorci-subotica'
        }
      ];
    }
    // Default SRB content
    return [
      {
        id: 'karlovci-intimno',
        name: 'Karlovci samo za vas – intimno putovanje kroz vreme',
        duration: 'celodnevna tura',
        price: '',
        description:
          'Privatno iskustvo za 3–4 osobe kroz čarobne Karlovce – grad vina, ljubavi i kulturne baštine.',
        highlights: [
          'Degustacija vina i lokalnih specijaliteta',
          'Priče o porodicama i ljubavnim legendama',
          'Ručak u centru Karlovaca – autentična vojvođanska kuhinja',
          'Znamenitosti: Patrijaršija, Saborna crkva, Karlovačka gimnazija, Trg Branka Radičevića'
        ],
        details: [
          'Ovo nije običan izlet – privatno iskustvo za hedoniste i ljubitelje istorije! U intimnoj grupi (3–4) upoznajemo duh Karlovaca.'
        ],
        practical: [
          '📍 Polazak: Beograd',
          '🕒 Trajanje: ceo dan',
          '🍷 Uključeno: ručak + vodič + preporuke za vina',
          '🎟 Cena: ekskluzivno, ograničen broj mesta'
        ],
        marketing: [
          '📌 Luksuz i ekskluziva – privatna vojvođanska bajka',
          '📌 Jedinstven doživljaj – bez gužve, mir Karlovaca',
          '📌 Hedonistički momenat – čaša vina i zalazak nad Dunavom'
        ],
        bookingLink: '/booking/karlovci-intimno'
      },
      {
        id: 'brodic-noc-zalazak',
        name: 'Beograd sa reke – noć magije',
        duration: '1.5–2 sata',
        price: '',
        description:
          'Noćna vožnja brodićem ili zalazak sunca – pogled na Kalemegdan, Brankov most i svetla grada.',
        highlights: [
          'Opcije: Zalazak sunca ili Noćni Beograd',
          'Pogledi: Kalemegdan, Ušće, mostovi i panorame',
          'Dobrodošlica uz koktel, muzika i tematske večeri'
        ],
        details: [
          'Doživite Beograd iz nove perspektive tokom plovidbe Savom i Dunavom.'
        ],
        practical: [
          '📍 Polazak: Beton hala ili Zemun (po rezervaciji)',
          '🕒 Trajanje: 1.5–2 sata',
          '🍹 Uključeno: koktel dobrodošlice',
          '🎵 Muzika + opcione tematske večeri'
        ],
        marketing: [
          '✔ Zalazak sunca – romantična atmosfera uz koktel',
          '✔ Noćna vožnja – čarolija svetala i muzike',
          '🐢 Brodić „Kornjača” ili luksuzni brod – elegancija na vodi'
        ],
        bookingLink: '/booking/beograd-noc-magije'
      },
      {
        id: 'manasija-lisine',
        name: 'Duhovnost i priroda – Manasija & Lisine',
        duration: 'celodnevna tura',
        price: '',
        description:
          'Manasija – bedemi i freske; Lisine – vodopadi i priroda; uz posebno iznenađenje.',
        highlights: [
          'Manasija – zadužbina despota Stefana Lazarevića',
          'Lisine – vodopadi i čist vazduh',
          'Opcija: Muzej maketa manastira ili Resavska pećina'
        ],
        details: [
          'Dan za ljubitelje istorije, duhovnosti i prirode – tri iskustva u jednom.'
        ],
        practical: [
          '📍 Polazak: Beograd',
          '🕒 Trajanje: ceo dan (ograničeno na 20 osoba)',
          '🍴 Ručak u restoranu kod vodopada'
        ],
        marketing: [
          '📌 „Jedan dan – tri iskustva: manastir, vodopad i tajna pećina!“',
          '📌 „Idealno za ljubitelje prirode i istorije – prijavite se!”'
        ],
        bookingLink: '/booking/manasija-lisine'
      },
      {
        id: 'dvorci-subotica',
        name: 'Vojvođanski dvorci i šarm Subotice',
        duration: 'celodnevna ili dvodnevna tura',
        price: '',
        description:
          'Raskoš dvoraca Vojvodine, secesijska Subotica i opcija posete Palićkom jezeru.',
        highlights: [
          'Šetnja kroz dvorce, parkove i plemićke priče',
          'Subotica – secesija, kulturni dragulji i gastronomija',
          'Opcija: Palićko jezero – šetnja, bicikl ili vožnja čamcem'
        ],
        details: [
          'Savršen spoj istorije, arhitekture i prirode – sever Srbije u laganom ritmu.'
        ],
        practical: [
          '📍 Polazak: Beograd',
          '🕒 Trajanje: ceo dan ili 2 dana',
          '🎟 Ograničeno na 20 osoba',
          '🍴 Pauza za ručak/večeru; 🏨 opcija noćenja (doplatno)'
        ],
        bookingLink: '/booking/dvorci-subotica'
      }
    ];
  })();

  return (
    <main className="font-sans">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-b from-yellow-200 via-orange-200 to-orange-300">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 text-gray-900">
              🏛️ {t('city_title')}
            </h1>
            <p className="text-lg sm:text-xl text-gray-800 max-w-3xl mx-auto">
              {t('city_intro')}
            </p>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section className="bg-gradient-to-br from-orange-600 via-orange-500 to-blue-700">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold tracking-tight mb-4 text-white">{t('section_historical_adventures')}</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              {t('city_intro')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <div 
                key={tour.id}
                className="rounded-2xl border border-orange-200 p-6 bg-white shadow-xl hover:shadow-2xl hover:border-orange-300 transition-all duration-200 text-gray-800"
              >
                <div className="text-4xl mb-4">🏛️</div>
                <h3 className="text-xl font-semibold mb-3">{tour.name}</h3>
                <p className="text-gray-700 mb-4">{tour.description}</p>
                
                <div className="mb-4 text-sm space-y-2">
                  <div className="flex items-center gap-1">⏱️ {t('tour_duration')}: {tour.duration}</div>
                  {tour.price && <div className="flex items-center gap-1">💰 {t('tour_price')}: {tour.price}</div>}
                  <div className="flex items-center gap-1">👨‍👩 {t('tour_max')}: {(() => {
                    const pools = [tour.details, tour.practical, tour.marketing].flat().filter(Boolean) as string[];
                    const txt = pools.join(' ');
                    const m = txt.match(/\b(\d{1,3})(?:\s*[–-]\s*(\d{1,3}))?\b/);
                    if (m) {
                      const a = parseInt(m[1], 10);
                      const b = m[2] ? parseInt(m[2], 10) : a;
                      return Math.max(a, b);
                    }
                    return 66;
                  })()}</div>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium mb-2">{t('tour_highlights')}</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    {tour.highlights.map((highlight: string, index: number) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="text-orange-500">✓</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setOpenTourId(tour.id)}
                    className="inline-flex items-center justify-center h-10 px-5 rounded-full bg-amber-400 text-white text-sm font-medium hover:bg-amber-500 transition-colors shadow"
                  >
                    {t('tours_read_more')}
                  </button>
                <a
                  href={tour.bookingLink}
                    className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-orange-600 text-white font-medium hover:bg-orange-700 transition-colors"
                >
                    {t('tours_book_button')}
                </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {openTourId && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-background rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-black/[.08] dark:border-white/[.12] flex items-center justify-between">
              <h3 className="text-2xl font-semibold">{tours.find(t => t.id === openTourId)?.name}</h3>
              <button
                onClick={() => setOpenTourId(null)}
                className="p-2 hover:bg-black/[.05] dark:hover:bg-white/[.05] rounded-lg"
                aria-label="Close"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 space-y-6">
              {(() => {
                const tour = tours.find(t => t.id === openTourId);
                if (!tour) return null;
                return (
                  <>
                    {tour.details && (
                      <div className="space-y-2 text-gray-700 dark:text-gray-300">
                        {tour.details.map((p: string, i: number) => (<p key={i}>{p}</p>))}
                      </div>
                    )}
                    {tour.practical && (
                      <div className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                        {tour.practical.map((inf: string, i: number) => (<div key={i}>{inf}</div>))}
                      </div>
                    )}
                    {tour.marketing && (
                      <div className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                        {tour.marketing.map((m: string, i: number) => (<div key={i}>{m}</div>))}
                      </div>
                    )}
                  </>
                );
              })()}

              <div className="pt-4 border-t border-black/[.08] dark:border-white/[.12] flex justify-end">
                <a
                  href={tours.find(t => t.id === openTourId)?.bookingLink || '#'}
                  className="inline-flex items-center justify-center h-10 px-6 rounded-full bg-orange-600 text-white text-sm font-medium hover:bg-orange-700 transition-colors"
                >
                  {t('tours_book_button')}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}

