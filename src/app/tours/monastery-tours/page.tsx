'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useI18n } from '@/i18n/I18nProvider';
import { useState } from 'react';

export default function MonasteryTours() {
  const { t, lang } = useI18n();
  const [openTourId, setOpenTourId] = useState<string | null>(null);

  const tours = (() => {
    if (lang === 'ENG') {
      return [
        {
          id: 'tumane-nimnik-celodnevna',
          name: 'Spiritual Gems of Eastern Serbia – Tumane & Nimnik',
          duration: 'full-day tour',
          price: '',
          description:
            'A spiritual journey that refreshes the soul and brings peace – visit Tumane and Nimnik monasteries.',
          highlights: [
            'Tumane Monastery – known for healing prayers and miracles',
            'Nimnik Monastery – dedicated to a child martyr, surrounded by calming nature'
          ],
          practical: [
            '📍 Departure: Belgrade',
            '🕒 Duration: full day',
            '🎟 Limited seats – only 20 people',
            '🍴 Lunch break (restaurant recommendation)'
          ],
          fullDescription: [
            'Join us on a spiritual journey that refreshes the soul and brings peace. We will visit two monasteries considered guardians of faith and places of miracles – Tumane and Nimnik.',
            '✔ Tumane – renowned for healing prayers and miracles.',
            '✔ Nimnik – dedicated to a child martyr; a symbol of innocence and faith, embraced by nature.',
            'Not just sightseeing – a chance to pause, gather your thoughts and release everyday stress.'
          ],
          bookingLink: '/booking/tumane-nimnik'
        },
        {
          id: 'nimnik-jutarnja-liturgija',
          name: 'Morning in Nimnik – a day for the soul',
          duration: 'half-day tour',
          price: '',
          description:
            'Attend the morning liturgy in Nimnik and spend time in spiritual conversation and reflection.',
          highlights: [
            'Morning liturgy attendance',
            'Learn about Elder Elisej and inspiring miracles',
            'Conversations and guidance in the peace of the monastery'
          ],
          practical: [
            '📍 Departure: Belgrade (early morning)',
            '🕒 Duration: half day',
            '🎟 Limited participants for an intimate atmosphere (10–12)'
          ],
          fullDescription: [
            'This is not just a trip – it is a spiritual experience that can change your life.',
            'We start early to attend the morning liturgy at Nimnik, then learn about Elder Elisej and stories that inspire.',
            'After the liturgy, we stay in the serene ambiance of the monastery – to talk, share life stories and advice, and recharge for the days ahead.',
            '✔ Attend the liturgy',
            '✔ Learn about the saint and inspiring miracles',
            '✔ Conversations and guidance in a spiritual setting'
          ],
          bookingLink: '/booking/nimnik-jutro'
        },
        {
          id: 'fruska-gora-cetiri-manastira',
          name: 'Path of Spirituality on Fruška Gora – Four Sanctuaries',
          duration: 'full-day tour',
          price: '',
          description:
            'Fruška Gora – visit four monasteries: Krušedol, Novo Hopovo, Staro Hopovo and Grgetek.',
          highlights: [
            'Krušedol – endowment of the Branković family',
            'Novo Hopovo – famous for peace and frescoes',
            'Staro Hopovo – forest monastery of silence and introspection',
            'Grgetek – hidden sanctuary of simplicity and peace'
          ],
          practical: [
            '📍 Departure: Belgrade',
            '🕒 Duration: full day',
            '🎟 Limited seats – book on time!',
            '🍴 Lunch at a Vojvodinian cuisine restaurant'
          ],
          fullDescription: [
            'Fruška Gora hides the spiritual gems of Serbia. On this tour we visit four monasteries, each with a unique story.',
            '✔ Krušedol – historic jewel and spiritual heart of Fruška Gora.',
            '✔ Novo Hopovo – serene and adorned with beautiful frescoes.',
            '✔ Staro Hopovo – a monastery in the woods, a place of silence and reflection.',
            '✔ Grgetek – a hidden sanctuary captivating with simplicity and peace.',
            'A tour for those who want to feel the power of faith, history and nature.'
          ],
          bookingLink: '/booking/fruska-gora-cetiri'
        },
        {
          id: 'studenica-zica',
          name: 'Roots of Faith – Studenica & Žiča',
          duration: 'full-day tour',
          price: '',
          description:
            'A pilgrimage to two of the most significant Serbian monasteries: Studenica and Žiča.',
          highlights: [
            'Studenica – UNESCO-protected endowment of Stefan Nemanja',
            'Žiča – coronation site of the first Serbian kings'
          ],
          practical: [
            '📍 Departure: Belgrade',
            '🕒 Duration: full day',
            '🎟 Up to 20 people',
            '🍴 Lunch break (traditional restaurant)'
          ],
          fullDescription: [
            'Tarih ve imanın kaynaklarına yolculuk – iki anıtsal manastır.'
          ],
          bookingLink: '/booking/studenica-zica'
        },
        {
          id: 'ravanica-ljubostinja',
          name: 'Monasteries of Love & Faith – Ravanica & Ljubostinja',
          duration: 'full-day tour',
          price: '',
          description:
            'Ravanica and Ljubostinja – history, culture and love stories with a traditional lunch.',
          highlights: [
            'Ravanica – Prens Lazar’ın vakfı ve Kosova hikayeleri',
            'Ljubostinja – sırlar ve aşk hikayeleriyle dolu en güzel kadınlar manastırı',
            'Etno öğle yemeği – geleneksel mutfak (oruç menüsü mümkün)'
          ],
          practical: [
            '📍 Hareket: Belgrad (sabah)',
            '🕒 Süre: tam gün',
            '👥 Samimi grup – 12 kişiye kadar',
            '🎁 Her katılımcıya küçük sürpriz hediye'
          ],
          fullDescription: [
            'Tarih ve aşkın birleşimi – nadiren anlatılan hikayeler ve manevi güç.'
          ],
          bookingLink: '/booking/ravanica-ljubostinja'
        }
      ];
    }
    if (lang === 'TUR') {
      return [
        {
          id: 'tumane-nimnik-celodnevna',
          name: 'Doğu Sırbistan’ın Manevi Mücevherleri – Tumane & Nimnik',
          duration: 'tam günlük tur',
          price: '',
          description:
            'Ruhu tazeleyen ve huzur veren manevi yolculuk – Tumane ve Nimnik manastırları.',
          highlights: [
            'Tumane – şifa duaları ve mucizelerle bilinir',
            'Nimnik – çocuk şehide adanmış, huzurlu doğayla çevrili'
          ],
          practical: [
            '📍 Hareket: Belgrad',
            '🕒 Süre: tüm gün',
            '🎟 Sınırlı kontenjan – sadece 20 kişi',
            '🍴 Öğle arası (restoran önerisi)'
          ],
          fullDescription: [
            'İnancı ve mucizeleriyle bilinen iki manastıra ziyaret – Tumane ve Nimnik.',
            '✔ Tumane – şifa duaları ve mucizeler.',
            '✔ Nimnik – masumiyetin ve imanın sembolü.',
            'Sadece gezi değil – durup düşünmek ve stresten arınmak için fırsat.'
          ],
          bookingLink: '/booking/tumane-nimnik'
        },
        {
          id: 'nimnik-jutarnja-liturgija',
          name: 'Nimnik’te Sabah – ruh için bir gün',
          duration: 'yarım günlük tur',
          price: '',
          description:
            'Nimnik’te sabah ayinine katılım ve manevi sohbetler.',
          highlights: [
            'Sabah ayini',
            'Aziz Elisej’in hayatı ve ilham veren mucizeler',
            'Manastırın huzurunda sohbet ve rehberlik'
          ],
          practical: [
            '📍 Hareket: Belgrad (erken sabah)',
            '🕒 Süre: yarım gün',
            '🎟 Samimi atmosfer için sınırlı katılımcı (10–12)'
          ],
          fullDescription: [
            'Bu sadece bir yolculuk değil – manevi bir deneyim.',
            'Ayin için erken yola çıkıyoruz, ardından Aziz Elisej’in hayatını ve hikayelerini öğreniyoruz.',
            'Sonrasında manastırın huzurunda sohbet ederek günlere enerji topluyoruz.'
          ],
          bookingLink: '/booking/nimnik-jutro'
        },
        {
          id: 'fruska-gora-cetiri-manastira',
          name: 'Fruška Gora’da Maneviyat Yolu – Dört Kutsal Mekan',
          duration: 'tam günlük tur',
          price: '',
          description:
            'Fruška Gora – dört manastır ziyareti: Krušedol, Novo Hopovo, Staro Hopovo, Grgetek.',
          highlights: [
            'Krušedol – Branković vakfı',
            'Novo Hopovo – huzur ve freskler',
            'Staro Hopovo – ormanda sessizlik ve tefekkür',
            'Grgetek – sadelik ve huzurun kutsal yeri'
          ],
          practical: [
            '📍 Hareket: Belgrad',
            '🕒 Süre: tüm gün',
            '🎟 Sınırlı kontenjan – erken rezervasyon',
            '🍴 Vojvodina mutfağı restoranında öğle yemeği'
          ],
          fullDescription: [
            'Fruška Gora, Sırbistan’ın manevi mücevherlerini saklar – dört manastır, dört hikaye.'
          ],
          bookingLink: '/booking/fruska-gora-cetiri'
        },
        {
          id: 'studenica-zica',
          name: 'İmanın Kökleri – Studenica & Žiča',
          duration: 'tam günlük tur',
          price: '',
          description:
            'Studenica ve Žiča – Sırp tarihinin en önemli iki manastırı.',
          highlights: [
            'Studenica – UNESCO korumasında',
            'Žiča – ilk Sırp krallarının taç giydiği yer'
          ],
          practical: [
            '📍 Hareket: Belgrad',
            '🕒 Süre: tüm gün',
            '🎟 20 kişiye kadar',
            '🍴 Öğle arası (geleneksel restoran)'
          ],
          fullDescription: [
            'Tarih ve imanın kaynaklarına yolculuk – iki anıtsal manastır.'
          ],
          bookingLink: '/booking/studenica-zica'
        },
        {
          id: 'ravanica-ljubostinja',
          name: 'Aşk ve İmanın Manastırları – Ravanica & Ljubostinja',
          duration: 'tam günlük tur',
          price: '',
          description:
            'Ravanica ve Ljubostinja – tarih, kültür ve aşk hikayeleri, geleneksel öğle yemeği ile.',
          highlights: [
            'Ravanica – Prens Lazar’ın vakfı ve Kosova hikayeleri',
            'Ljubostinja – sırlar ve aşk hikayeleriyle dolu en güzel kadınlar manastırı',
            'Etno öğle yemeği – geleneksel mutfak (oruç menüsü mümkün)'
          ],
          practical: [
            '📍 Hareket: Belgrad (sabah)',
            '🕒 Süre: tam gün',
            '👥 Samimi grup – 12 kişiye kadar',
            '🎁 Her katılımcıya küçük sürpriz hediye'
          ],
          fullDescription: [
            'Tarih ve aşkın birleşimi – nadiren anlatılan hikayeler ve manevi güç.'
          ],
          bookingLink: '/booking/ravanica-ljubostinja'
        }
      ];
    }
    // Default SRB
    return [
      {
        id: 'tumane-nimnik-celodnevna',
        name: 'Duhovni biseri istočne Srbije – Tumane i Nimnik',
        duration: 'celodnevna tura',
        price: '',
        description:
          'Duhovno putovanje koje osvežava dušu i vraća mir – obilazak manastira Tumane i Nimnik.',
        highlights: [
          'Manastir Tumane – čuveni po isceliteljskim molitvama i čudima',
          'Manastir Nimnik – posvećen detetu mučeniku, okružen umirujućom prirodom'
        ],
        practical: [
          '📍 Polazak: Beograd',
          '🕒 Trajanje: ceo dan',
          '🎟 Broj mesta ograničen – samo 20 osoba',
          '🍴 Pauza za ručak (preporuka restorana)'
        ],
        fullDescription: [
          'Pridružite nam se na duhovnom putovanju koje osvežava dušu i vraća mir. Posetićemo dva manastira koji se smatraju čuvarima vere i mesta čuda – Tumane i Nimnik.',
          '✔ Manastir Tumane – čuveni po isceliteljskim molitvama i čudima, mesto gde je svaki kamen obojen molitvom.',
          '✔ Manastir Nimnik – posvećen detetu mučeniku, simbol nevinosti i vere, okružen prirodom koja umiruje.',
          'Ova tura nije samo obilazak – ovo je prilika da zastanete, saberete misli i oslobodite se svakodnevnog stresa.'
        ],
        bookingLink: '/booking/tumane-nimnik'
      },
      {
        id: 'nimnik-jutarnja-liturgija',
        name: 'Jutro u Nimniku – dan za dušu',
        duration: 'pola dana',
        price: '',
        description:
          'Prisustvujte jutarnjoj liturgiji u Nimniku i provedite dan u duhovnoj zajednici i razgovorima.',
        highlights: [
          'Prisutvovanje jutarnjoj liturgiji',
          'Upoznavanje života svetog oca Jeliseja',
          'Razgovori i savetovanje u miru manastira'
        ],
        practical: [
          '📍 Polazak: Beograd (rano ujutru)',
          '🕒 Trajanje: pola dana',
          '🎟 Ograničen broj učesnika za intimnu atmosferu (10–12)'
        ],
        fullDescription: [
          'Ovo nije samo putovanje – ovo je duhovno iskustvo koje menja život.',
          'Krećemo rano kako bismo prisustvovali jutarnjoj liturgiji u manastiru Nimnik, a zatim ćemo se upoznati sa životom svetog oca Jeliseja, njegovim mislima i pričama koje inspirišu.',
          'Posle liturgije, zadržaćemo se u mirnom ambijentu manastira – razgovaraćemo, deliti životne priče i savete, a sve u cilju da napunimo svoje „baterije“ za dane koji dolaze.',
          '✔ Prisutvujte liturgiji',
          '✔ Upoznajte život sveca i čuda koja inspirišu',
          '✔ Razgovori i savetovanje u duhovnom društvu'
        ],
        bookingLink: '/booking/nimnik-jutro'
      },
      {
        id: 'fruska-gora-cetiri-manastira',
        name: 'Put duhovnosti na Fruškoj gori – četiri svetinje',
        duration: 'celodnevna tura',
        price: '',
        description:
          'Fruška gora – obilazak četiri manastira: Krušedol, Novo Hopovo, Staro Hopovo i Grgetek.',
        highlights: [
          'Krušedol – zadužbina Brankovića, duhovno srce Fruške gore',
          'Novo Hopovo – čudesan mir i lepota fresaka',
          'Staro Hopovo – manastir u šumi, mesto tišine i introspektive',
          'Grgetek – skrivena svetinja jednostavnosti i mira'
        ],
        practical: [
          '📍 Polazak: Beograd',
          '🕒 Trajanje: ceo dan',
          '🎟 Ograničen broj mesta – rezervišite na vreme!',
          '🍴 Pauza za ručak u restoranu sa vojvođanskom kuhinjom'
        ],
        fullDescription: [
          'Fruška gora – planina koja krije duhovne bisere Srbije. Na ovoj turi obići ćemo četiri manastira, svako od njih priča posebnu priču.',
          '✔ Krušedol – zadužbina Brankovića, istorijski dragulj i duhovno srce Fruške gore.',
          '✔ Novo Hopovo – poznat po čudesnom miru i lepoti fresaka.',
          '✔ Staro Hopovo – manastir u šumi, mesto tišine i introspektive.',
          '✔ Grgetek – skrivena svetinja koja očarava svojom jednostavnošću i mirom.',
          'Ovo je tura za sve koji žele da osete snagu vere, istorije i prirode.'
        ],
        bookingLink: '/booking/fruska-gora-cetiri'
      },
      {
        id: 'studenica-zica',
        name: 'Koreni vere – Studenica i Žiča',
        duration: 'celodnevna tura',
        price: '',
        description:
          'Hodočasničko putovanje do dva najznačajnija manastira: Studenice i Žiče.',
        highlights: [
          'Studenica – zadužbina Stefana Nemanje, pod zaštitom UNESCO-a',
          'Žiča – mesto krunisanja prvih srpskih kraljeva'
        ],
        practical: [
          '📍 Polazak: Beograd',
          '🕒 Trajanje: ceo dan',
          '🎟 Broj mesta: do 20 osoba',
          '🍴 Pauza za ručak (domaća kuhinja)'
        ],
        fullDescription: [
          'Pridružite nam se na putovanju koje vodi ka izvorima naše istorije i vere. Posetićemo dva od najznačajnijih srpskih manastira.',
          '✔ Studenica – zadužbina Stefana Nemanje, pod zaštitom UNESCO-a, riznica fresaka i srpske duhovnosti.',
          '✔ Žiča – mesto gde su krunisani prvi srpski kraljevi i gde svaki kamen nosi priču o snazi i veri našeg naroda.',
          'Ovo nije običan izlet – ovo je hodočasničko iskustvo koje oplemenjuje dušu i daje snagu za svakodnevni život.'
        ],
        bookingLink: '/booking/studenica-zica'
      },
      {
        id: 'ravanica-ljubostinja',
        name: 'Manastiri ljubavi i vere – Ravanica & Ljubostinja',
        duration: 'celodnevna tura',
        price: '',
        description:
          'Tura kroz Ravanicu i Ljubostinju – istorija, kultura i ljubavne priče uz tradicionalni ručak.',
        highlights: [
          'Ravanica – zadužbina kneza Lazara, priče o Kosovskom boju',
          'Ljubostinja – najlepši ženski manastir, tajne i ljubavne priče',
          'Ručak u etno restoranu – tradicionalna kuhinja (po želji i posna)'
        ],
        practical: [
          '📍 Polazak: ujutru iz Beograda (ili po dogovoru)',
          '🕒 Trajanje: celodnevna tura',
          '👥 Intimna grupa – do 12 osoba',
          '🎁 Mali poklon iznenađenja za svakog učesnika'
        ],
        fullDescription: [
          'Spoj istorije i ljubavi – priče koje se retko pričaju, o ženama koje su čekale svoje junake i o tajnim zavetima.',
          'Posebna energija mesta – ovo nisu samo manastiri, već mesta sa duhovnom snagom koja inspiriše.',
          'Intimna grupa – mir i vreme za tišinu i razgovor.',
          '⚠ Mogućnost privatne ture za parove – romantičan način da spojite istoriju i ljubavnu priču kroz Srbiju.'
        ],
        bookingLink: '/booking/ravanica-ljubostinja'
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
              ⛪ {t('monastery_title')}
            </h1>
            <p className="text-lg sm:text-xl text-gray-800 max-w-3xl mx-auto">
              {t('monastery_intro')}
            </p>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section className="bg-gradient-to-br from-orange-600 via-orange-500 to-blue-700">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold tracking-tight mb-4 text-white">{t('section_spiritual_journeys')}</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              {t('monastery_intro')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <div 
                key={tour.id}
                className="rounded-2xl border border-orange-200 p-6 bg-white shadow-xl hover:shadow-2xl hover:border-orange-300 transition-all duration-200 text-gray-800"
              >
                <div className="text-4xl mb-4">⛪</div>
                <h3 className="text-xl font-semibold mb-3">{tour.name}</h3>
                <p className="text-gray-700 mb-4">{tour.description}</p>
                
                <div className="flex items-center gap-4 mb-4 text-sm">
                  <span>⏱️ {t('tour_duration')}: {tour.duration}</span>
                  {tour.price && <span>💰 {t('tour_price')}: {tour.price}</span>}
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
                    className="inline-flex items-center justify-center h-10 px-5 rounded-full border border-black/[.1] text-sm font-medium hover:bg-black/[.05] transition-colors"
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
              {(() => {
                const tour = tours.find(t => t.id === openTourId);
                if (!tour) return null;
                return (
                  <>
                    {tour.fullDescription && (
                      <div className="space-y-2 text-gray-700 dark:text-gray-300">
                        {tour.fullDescription.map((p: string, i: number) => (<p key={i}>{p}</p>))}
                      </div>
                    )}

                    {tour.practical && (
                      <div className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                        {tour.practical.map((inf: string, i: number) => (<div key={i}>{inf}</div>))}
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

