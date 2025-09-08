"use client";
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useI18n } from '@/i18n/I18nProvider';

type Tour = {
  id: string;
  name: string;
  duration: string;
  price: string;
  description: string;
  highlights: string[];
  bookingLink: string;
  // Optional extended fields (used in SR content)
  meta?: { max?: string; term?: string; start?: string };
  opis?: string[];
  saznacete?: string[];
  zasto?: string[];
  staVasOcekuje?: string[];
  marketing?: string[];
  info?: string[];
  ponesite?: string[];
};

export default function LoveTours() {
  const { t, lang } = useI18n();
  const [openTourId, setOpenTourId] = useState<string | null>(null);
  const srTours: Tour[] = [
    {
      id: 'bgd-setnja-ljubavne-price',
      name: 'Beograd – Šetnja kroz tajne i ljubavne priče',
      duration: 'oko 2 sata',
      price: '[ubaci cenu]',
      description:
        'Neobična šetnja kroz centar Beograda sa pričama o bogatašima, umetnicima i ljubavima skrivenim iza starih fasada.',
      highlights: [
        'Maksimalan broj učesnika: 25–30 (ograničena mesta)',
        'Termin: svakog petka i nedelje',
        'Ko su bili najbogatiji Beograđani i njihove palate',
        'Najlepše i najtragičnije ljubavne priče Knez Mihailove',
        'Misterije i tajne glavne ulice',
        'Savršeno za Instagram kadrove'
      ],
      meta: {
        max: 'Maksimalan broj učesnika: 25–30 osoba (mesta su ograničena!)',
        term: 'Svakog petka i nedelje',
        start: '[ubaci vreme, npr. 18:00]'
      },
      opis: [
        'Ovo nije klasična šetnja Beogradom. Zaboravite suve činjenice i pripremite se za putovanje kroz vreme – u doba kada su ovim ulicama šetali bogataši, umetnici i zaljubljeni parovi čije su tajne ostale skrivene iza starih fasada.',
        'Knez Mihailova ulica, centar današnjeg Beograda, krije mnoštvo priča koje ne pišu u vodičima.'
      ],
      saznacete: [
        'Ko su bili najbogatiji ljudi Beograda i kakve luksuzne palate su gradili.',
        'Najlepše, ali i najtragičnije ljubavne priče koje se prepričavaju i danas.',
        'Misterije i tajne zidova glavne ulice koje malo ko zna.'
      ],
      zasto: [
        'Nije klasična istorijska tura – ovo je priča o životu, ljubavi i tajnama Beograda.',
        'Ekskluzivne priče – otkrivam vam ono što vodiči obično prećutkuju.',
        'Mali broj ljudi – intimna atmosfera, idealna za interakciju i pitanja.',
        'Savršeno za Instagram – najlepši delovi Beograda i zanimljive priče za vaše objave!'
      ],
      info: [
        '📍 Mesto polaska: Studentski trg (ispred Filozofskog fakulteta)',
        '🕒 Vreme početka: [ubaci vreme, npr. 18:00]',
        '💵 Cena: [ubaci cenu – mogu pomoći oko ponude]'
      ],
      ponesite: [
        'Lepeze, flašicu vode i šešir/kapu ako je vruće.',
        'Jaknu i kišobran ako pada kiša.',
        'Tura se ne odlaže zbog kiše – samo u slučaju nevremena ili grada pomeramo za drugi dan.'
      ],
      bookingLink: '/booking/beograd-setnja-ljubavne-price'
    },
    {
      id: 'dunavska-romansa-ns-karlovci',
      name: 'Dunavska romansa – Novi Sad & Sremski Karlovci',
      duration: 'celodnevna tura',
      price: '[ubaci cenu – ograničen broj mesta] ',
      description:
        'Vojvođanski šarm Petrovaradinske tvrđave, ulice Novog Sada i romantični Karlovci – grad vina, ljubavi i istorije.',
      highlights: [
        'Broj učesnika: 10–15 osoba',
        'Znamenitosti NS: Dunavski park, Zmaj Jovina, Dunavska ulica',
        'Degustacija lokalnih vina (opciono)',
        'Posebni foto-momenati sa pogledom na Dunav',
        'Polazak iz Beograda, ceo dan'
      ],
      opis: [
        'Krenite sa mnom na putovanje kroz vojvođanski šarm i duh prošlih vremena! Na ovoj turi ćete otkriti skrivene priče Petrovaradinske tvrđave, šarmantne ulice Novog Sada i znamenitosti poput Dunavskog parka, Zmaj Jovine i Dunavske ulice.',
        'Zatim nastavljamo u Sremske Karlovce – gradić vina, ljubavi i istorije.'
      ],
      staVasOcekuje: [
        'Najlepše priče o vojvođanskim porodicama i ljubavima koje su se prepričavale vekovima',
        'Degustacija lokalnih vina (opciono)',
        'Poseta znamenitostima u centru Sremskih Karlovaca',
        'Slobodno vreme za fotografisanje na najlepšim mestima'
      ],
      marketing: [
        '📌 „Tajna Petrovaradina – znaš li koja legenda se krije ispod tvrđave?“',
        '📌 „Karlovci – grad vina i ljubavi! Da li znaš za fontanu koja ispunjava želje zaljubljenima?“',
        '📌 „Fotografija sa pogledom na Dunav koja će zapaliti tvoj feed!“'
      ],
      info: [
        '📍 Polazak: Beograd',
        '🕒 Trajanje: ceo dan',
        '🎟 Cena: [ubaci cenu – ograničen broj mesta] ',
        '🍴 Uključeno: obilazak + slobodno vreme za ručak (preporuka restorana)'
      ],
      ponesite: [
        'Udobnu obuću, flašicu vode, šešir po potrebi, fotoaparat za najbolje uspomene.',
        'VAŽNO: Broj učesnika je ograničen na 10–15 osoba – rezervišite na vreme!'
      ],
      bookingLink: '/booking/dunavska-romansa-novi-sad-karlovci'
    }
  ];

  const enTours: Tour[] = [
    {
      id: 'bgd-setnja-ljubavne-price',
      name: 'Belgrade – A Walk Through Secrets and Love Stories',
      duration: 'about 2 hours',
      price: '[set price]',
      description:
        'An unusual walk through the center of Belgrade with stories of wealthy patrons, artists and love hidden behind old facades.',
      highlights: [
        'Max participants: 25–30 (limited seats)',
        'Schedule: every Friday and Sunday',
        'Who were the richest Belgraders and their palaces',
        'The most beautiful and most tragic love stories of Knez Mihailova',
        'Mysteries and secrets of the main street',
        'Perfect for Instagram shots'
      ],
      bookingLink: '/booking/beograd-setnja-ljubavne-price'
    },
    {
      id: 'dunavska-romansa-ns-karlovci',
      name: 'Danube Romance – Novi Sad & Sremski Karlovci',
      duration: 'full-day tour',
      price: '[set price – limited seats]',
      description:
        'Vojvodina charm of Petrovaradin Fortress, Novi Sad streets and romantic Karlovci – city of wine, love and history.',
      highlights: [
        'Participants: 10–15 people',
        'Novi Sad sights: Danube Park, Zmaj Jovina, Dunavska Street',
        'Local wine tasting (optional)',
        'Special photo moments with a view of the Danube',
        'Departure from Belgrade, whole day'
      ],
      bookingLink: '/booking/dunavska-romansa-novi-sad-karlovci'
    }
  ];

  const trTours: Tour[] = [
    {
      id: 'bgd-setnja-ljubavne-price',
      name: 'Belgrad – Sırlar ve Aşk Hikayeleri Yürüyüşü',
      duration: 'yaklaşık 2 saat',
      price: '[fiyat ekle]',
      description:
        'Belgrad merkezinde eski cephelerin ardına saklanan zenginler, sanatçılar ve aşkların hikayeleriyle sıra dışı bir yürüyüş.',
      highlights: [
        'Maks katılımcı: 25–30 (sınırlı yer)',
        'Program: her Cuma ve Pazar',
        'En zengin Belgradlılar ve sarayları kimlerdi',
        'Knez Mihailova’nın en güzel ve en trajik aşk hikayeleri',
        'Ana caddenin gizemleri ve sırları',
        'Instagram için mükemmel kareler'
      ],
      bookingLink: '/booking/beograd-setnja-ljubavne-price'
    },
    {
      id: 'dunavska-romansa-ns-karlovci',
      name: 'Tuna Romantizmi – Novi Sad & Sremski Karlovci',
      duration: 'tüm gün tur',
      price: '[fiyat – sınırlı yer]',
      description:
        'Petrovaradin Kalesi, Novi Sad sokakları ve romantik Karlovci – şarap, aşk ve tarihin şehri.',
      highlights: [
        'Katılımcılar: 10–15 kişi',
        'Novi Sad: Tuna Parkı, Zmaj Jovina, Dunavska Caddesi',
        'Yerel şarap tadımı (opsiyonel)',
        'Tuna manzaralı özel fotoğraf anları',
        'Belgrad’dan hareket, tüm gün'
      ],
      bookingLink: '/booking/dunavska-romansa-novi-sad-karlovci'
    }
  ];

  const tours: Tour[] = lang === 'ENG' ? enTours : lang === 'TUR' ? trTours : srTours;

  return (
    <main className="font-sans">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-b from-yellow-200 via-orange-200 to-orange-300">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 text-gray-900">
              💕 {t('love_title')}
            </h1>
            <p className="text-lg sm:text-xl text-gray-800 max-w-3xl mx-auto font-medium">
              {t('love_intro_1')}
              <br/>
              <br/>
              {t('love_intro_2')}
              <br/>
              <br/>
              {t('love_intro_3')}
            </p>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section className="bg-gradient-to-br from-orange-600 via-orange-500 to-blue-700">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold tracking-tight mb-4 text-white">{t('section_love_tours')}</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              {t('section_love_tours_sub')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <div 
                key={tour.id}
                className="rounded-2xl border border-orange-200 p-6 bg-white shadow-xl hover:shadow-2xl hover:border-orange-300 transition-all duration-200 text-gray-800"
              >
                <div className="text-4xl mb-4">💕</div>
                <h3 className="text-xl font-semibold mb-3">{tour.name}</h3>
                <p className="text-gray-700 mb-4">{tour.description}</p>
                
                <div className="mb-4 text-sm space-y-2">
                  <div className="flex items-center gap-1">⏱️ {t('tour_duration')}: {tour.duration}</div>
                  <div className="flex items-center gap-1">💰 {t('tour_price')}: {tour.price}</div>
                  <div className="flex items-center gap-1">👨‍👩 {t('tour_max')}: {(() => {
                    const pools = [tour.highlights].flat().filter(Boolean) as string[];
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
                  <h4 className="font-medium mb-2">{t('tour_details_notes')}</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    {tour.highlights.map((highlight, index) => (
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
                    className="inline-flex items-center justify-center h-10 px-6 rounded-full bg-orange-600 text-white text-sm font-medium hover:bg-orange-700 transition-colors"
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
                aria-label="Zatvori"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 space-y-6">
              {/* Meta */}
              {(() => {
                const tItem = tours.find(t => t.id === openTourId);
                return tItem?.meta ? (
                  <div className="grid sm:grid-cols-3 gap-3 text-sm text-gray-700 dark:text-gray-300">
                    {tItem.meta.max && <div>👥 {tItem.meta.max}</div>}
                    {tItem.meta.term && <div>🗓️ {tItem.meta.term}</div>}
                    {tItem.meta.start && <div>⏱️ Početak: {tItem.meta.start}</div>}
                  </div>
                ) : null;
              })()}

              {/* Opis */}
              {(() => {
                const tItem = tours.find(t => t.id === openTourId);
                return tItem?.opis ? (
                  <div className="space-y-3">
                    {tItem.opis.map((p, i) => (
                      <p key={i} className="text-gray-700 dark:text-gray-300">{p}</p>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-700 dark:text-gray-300">{tItem?.description}</p>
                );
              })()}

              {/* Saznaćete */}
              {(() => {
                const tItem = tours.find(t => t.id === openTourId);
                return tItem?.saznacete ? (
                  <div>
                    <h4 className="font-medium mb-2">{t('tour_learn_title')}</h4>
                    <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      {tItem.saznacete.map((it, i) => (
                        <li key={i} className="flex items-center gap-2"><span className="text-orange-500">✓</span>{it}</li>
                      ))}
                    </ul>
                  </div>
                ) : null;
              })()}

              {/* Zašto */}
              {(() => {
                const tItem = tours.find(t => t.id === openTourId);
                return tItem?.zasto ? (
                  <div>
                    <h4 className="font-medium mb-2">{t('tour_why_title')}</h4>
                    <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      {tItem.zasto.map((it, i) => (
                        <li key={i} className="flex items-center gap-2"><span className="text-orange-500">✓</span>{it}</li>
                      ))}
                    </ul>
                  </div>
                ) : null;
              })()}

              {/* Šta vas očekuje */}
              {(() => {
                const tItem = tours.find(t => t.id === openTourId);
                return tItem?.staVasOcekuje ? (
                  <div>
                    <h4 className="font-medium mb-2">{t('tour_expect_title')}</h4>
                    <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      {tItem.staVasOcekuje.map((it, i) => (
                        <li key={i} className="flex items-center gap-2"><span className="text-orange-500">✓</span>{it}</li>
                      ))}
                    </ul>
                  </div>
                ) : null;
              })()}

              {/* Marketing */}
              {(() => {
                const tItem = tours.find(t => t.id === openTourId);
                return tItem?.marketing ? (
                  <div className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    {tItem.marketing.map((m, i) => (<div key={i}>{m}</div>))}
                  </div>
                ) : null;
              })()}

              {/* Info */}
              {(() => {
                const tItem = tours.find(t => t.id === openTourId);
                return tItem?.info ? (
                  <div className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    {tItem.info.map((inf, i) => (<div key={i}>{inf}</div>))}
                  </div>
                ) : null;
              })()}

              {/* Ponesite */}
              {(() => {
                const tItem = tours.find(t => t.id === openTourId);
                return tItem?.ponesite ? (
                  <div>
                    <h4 className="font-medium mb-2">{t('tour_pack_title')}</h4>
                    <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      {tItem.ponesite.map((it, i) => (
                        <li key={i} className="flex items-center gap-2"><span className="text-orange-500">✓</span>{it}</li>
                      ))}
                    </ul>
                  </div>
                ) : null;
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

