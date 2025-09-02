"use client";
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function MonasteryTours() {
  const [openTourId, setOpenTourId] = useState<string | null>(null);

  const tours = [
    {
      id: 'tumane-nimnik-celodnevno',
      name: 'Duhovni biseri istočne Srbije – Tumane i Nimnik',
      duration: 'celodnevna tura',
      price: '[ubaci cenu] ',
      description:
        'Duhovno putovanje koje osvežava dušu i vraća mir. Poseta manastirima Tumane i Nimnik, mestima vere i čuda.',
      highlights: [
        'Broj učesnika: do 19–20 osoba',
        'Polazak: Beograd',
        'Pauza za ručak (preporuka restorana)'
      ],
      opis: [
        'Pridružite nam se na duhovnom putovanju koje osvežava dušu i vraća mir. Posetićemo dva manastira koji se smatraju čuvarima vere i mesta čuda – Tumane i Nimnik.',
        'Manastir Tumane – čuveni po isceliteljskim molitvama i čudima, mesto gde je svaki kamen obojen molitvom.',
        'Manastir Nimnik – posvećen detetu mučeniku, simbol nevinosti i vere, okružen prirodom koja umiruje.',
        'Ova tura nije samo obilazak – ovo je prilika da zastanete, saberete misli i oslobodite se svakodnevnog stresa.'
      ],
      info: [
        '📍 Polazak: Beograd',
        '🕒 Trajanje: ceo dan',
        '🎟 Broj mesta ograničen – samo 20 osoba',
        '🍴 Pauza za ručak (preporuka restorana)'
      ],
      preporuke: [
        'Poklonite sebi dan mira i duhovne snage – prijavite se odmah, broj mesta je ograničen! ',
        'Tumane i Nimnik – mesta gde se duša odmara.'
      ],
      bookingLink: '/booking/tumane-nimnik'
    },
    {
      id: 'nimnik-jutarnja-liturgija',
      name: 'Jutro u Nimniku – dan za dušu',
      duration: 'pola dana',
      price: '[ubaci cenu] ',
      description:
        'Rani polazak na jutarnju liturgiju u manastiru Nimnik i duhovni razgovori u mirnom ambijentu.',
      highlights: [
        'Ograničen broj mesta: 10–12 osoba (intimniji doživljaj)',
        'Termin: subota ili nedelja'
      ],
      opis: [
        'Ovo nije samo putovanje – ovo je duhovno iskustvo koje menja život.',
        'Prisustvujemo jutarnjoj liturgiji u manastiru Nimnik, potom razgovori i upoznavanje sa životom svetog oca Jeliseja.',
        'Zadržavanje u mirnom ambijentu manastira – razmena životnih priča i saveta za duhovno osnaženje.'
      ],
      staVasOcekuje: [
        'Prisutvujte liturgiji',
        'Upoznajte život sveca i čuda koja inspirišu',
        'Razgovori i savetovanje u duhovnom društvu'
      ],
      info: [
        '📍 Polazak: Beograd (rano ujutru)',
        '🕒 Trajanje: pola dana'
      ],
      preporuke: [
        'Potreban vam je mir? Ova tura je kao lek za dušu.',
        'Samo za one koji žele promenu – unutrašnju snagu i inspiraciju.'
      ],
      bookingLink: '/booking/nimnik-jutro'
    },
    {
      id: 'fruska-gora-cetiri-manastira',
      name: 'Put duhovnosti na Fruškoj gori – četiri svetinje',
      duration: 'celodnevna tura',
      price: '[ubaci cenu] ',
      description:
        'Obilazak manastira Krušedol, Novo Hopovo, Staro Hopovo i Grgetek – snaga vere, istorije i prirode.',
      highlights: [
        'Manastiri: Krušedol, Novo Hopovo, Staro Hopovo, Grgetek',
        'Broj učesnika: do 20 osoba'
      ],
      opis: [
        'Fruška gora – planina koja krije duhovne bisere Srbije. Na ovoj turi obići ćemo četiri manastira, svako od njih priča posebnu priču: ',
        'Krušedol – zadužbina Brankovića, istorijski dragulj i duhovno srce Fruške gore.',
        'Novo Hopovo – poznat po čudesnom miru i lepoti fresaka.',
        'Staro Hopovo – manastir u šumi, mesto tišine i introspektive.',
        'Grgetek – skrivena svetinja koja očarava svojom jednostavnošću i mirom.'
      ],
      info: [
        '📍 Polazak: Beograd',
        '🕒 Trajanje: ceo dan',
        '🎟 Broj mesta ograničen – rezervišite na vreme!',
        '🍴 Pauza za ručak u restoranu sa vojvođanskom kuhinjom'
      ],
      preporuke: [
        'Dan na Fruškoj gori koji puni srce i dušu – pridružite se!',
        'Četiri manastira, beskonačno mnogo mira.'
      ],
      bookingLink: '/booking/fruska-gora-cetiri-manastira'
    },
    {
      id: 'studenica-zica',
      name: 'Koreni vere – Studenica i Žiča',
      duration: 'celodnevna tura',
      price: '[ubaci cenu] ',
      description:
        'Poseta Studenici i Žiči – dvoje najznačajnijih manastira srpske istorije i duhovnosti.',
      highlights: [
        'Broj učesnika: do 20 osoba'
      ],
      opis: [
        'Pridružite nam se na putovanju koje vodi ka izvorima naše istorije i vere. Posetićemo: ',
        'Studenica – zadužbina Stefana Nemanje, UNESCO, riznica fresaka i srpske duhovnosti.',
        'Žiča – mesto krunisanja prvih srpskih kraljeva; svaki kamen nosi priču o snazi i veri.'
      ],
      info: [
        '📍 Polazak: Beograd',
        '🕒 Trajanje: ceo dan',
        '🎟 Broj mesta: ograničeno na 20 osoba',
        '🍴 Pauza za ručak (restoran sa domaćom kuhinjom)'
      ],
      preporuke: [
        'Dodirnite istoriju i duhovnost – Studenica i Žiča vas čekaju.',
        'Ovo je putovanje koje se pamti zauvek.'
      ],
      bookingLink: '/booking/studenica-zica'
    }
  ];

  return (
    <main className="font-sans">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              ⛪ Manastirske ture
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Duhovna putovanja kroz najznačajnije svetinje Srbije – tradicija, istorija i mir duše.
            </p>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold tracking-tight mb-4">Izaberite turu</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Svaka tura je pažljivo pripremljena kako bismo vam pružili duhovno, kulturno i bezbedno iskustvo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {tours.map((tour) => (
              <div 
                key={tour.id}
                className="rounded-xl border border-black/[.08] dark:border-white/[.12] p-6 bg-background hover:shadow-lg transition-all duration-200"
              >
                <div className="text-4xl mb-4">⛪</div>
                <h3 className="text-xl font-semibold mb-3">{tour.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{tour.description}</p>
                
                <div className="flex items-center gap-4 mb-4 text-sm">
                  <span>⏱️ {tour.duration}</span>
                  <span>💰 {tour.price}</span>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium mb-2">Napomene:</h4>
                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    {tour.highlights.map((highlight: string, index: number) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="text-amber-500">✓</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setOpenTourId(tour.id)}
                    className="inline-flex items-center justify-center h-10 px-5 rounded-full border border-black/[.1] dark:border-white/[.15] text-sm font-medium hover:bg-black/[.05] dark:hover:bg-white/[.05] transition-colors"
                  >
                    Pročitaj više
                  </button>
                  <a
                    href={tour.bookingLink}
                    className="inline-flex items-center justify-center h-10 px-6 rounded-full bg-amber-600 text-white text-sm font-medium hover:bg-amber-700 transition-colors"
                  >
                    Rezerviši turu
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
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
                const t = tours.find(tt => tt.id === openTourId);
                if (!t) return null;
                return (
                  <>
                    {/* Opis */}
                    {t.opis && (
                      <div className="space-y-3">
                        {t.opis.map((p, i) => (
                          <p key={i} className="text-gray-700 dark:text-gray-300">{p}</p>
                        ))}
                      </div>
                    )}

                    {/* Šta vas očekuje */}
                    {t.staVasOcekuje && (
                      <div>
                        <h4 className="font-medium mb-2">Šta vas očekuje:</h4>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                          {t.staVasOcekuje.map((it, i) => (
                            <li key={i} className="flex items-center gap-2"><span className="text-amber-500">✓</span>{it}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Info */}
                    {t.info && (
                      <div className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                        {t.info.map((inf, i) => (<div key={i}>{inf}</div>))}
                      </div>
                    )}

                    {/* Preporuke (bivši marketing) */}
                    {t.preporuke && (
                      <div>
                        <h4 className="font-medium mb-2">Preporuke:</h4>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                          {t.preporuke.map((it, i) => (
                            <li key={i} className="flex items-center gap-2"><span className="text-amber-500">•</span>{it}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="pt-4 border-t border-black/[.08] dark:border-white/[.12] flex justify-end">
                      <a
                        href={t.bookingLink || '#'}
                        className="inline-flex items-center justify-center h-10 px-6 rounded-full bg-amber-600 text-white text-sm font-medium hover:bg-amber-700 transition-colors"
                      >
                        Rezerviši turu
                      </a>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}

