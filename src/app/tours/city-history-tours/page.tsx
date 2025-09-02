"use client";
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function CityHistoryTours() {
  const [openTourId, setOpenTourId] = useState<string | null>(null);

  const tours = [
    {
      id: 'nocna-voznja-brodicem',
      name: 'Beograd sa reke – noć magije',
      duration: 'oko 1,5–2 sata',
      price: '[ubaci cenu]',
      description:
        'Noćna ili zalazak-sunca vožnja brodićem – doživite Kalemegdan, Brankov most, Ušće i svetla grada sa reke.',
      highlights: [
        'Broj učesnika: zavisi od broda (ograničen broj mesta – rezervišite!)',
        'Polazak: Beton hala ili Zemun',
        'Uključeno: koktel dobrodošlice',
        'Muzika + mogućnost tematskih večeri'
      ],
      opcije: [
        'Zalazak sunca – romantičan trenutak, zlatne nijanse i opuštena atmosfera',
        'Noćni Beograd – magija svetala i muzika'
      ],
      brodovi: [
        '🐢 Kornjača – autentičan beogradski brodić',
        '🛳 Veliki luksuzni brod – doživljaj elegancije, u rangu budimpeštanskih krstarenja'
      ],
      info: [
        '📍 Polazak: Beton hala ili Zemun (precizira se pri rezervaciji)',
        '🕒 Trajanje: oko 1,5–2 sata',
        '🍹 Uključeno: koktel dobrodošlice',
        '🎵 Muzika / tematske večeri'
      ],
      preporuke: [
        'Beograd nikada nije izgledao ovako – sa reke je još lepši!',
        'Ovo nije obična vožnja – ovo je doživljaj koji se pamti!',
        'Savršeno za parove, prijatelje i sve koji žele noć za pamćenje.'
      ],
      bookingLink: '/booking/nocna-voznja-reka'
    },
    {
      id: 'manasija-lisine-iznenadjenje',
      name: 'Duhovnost i priroda – Manasija & Lisine',
      duration: 'celodnevna tura',
      price: '[ubaci cenu]',
      description:
        'Manasija – srednjovekovni dragulj despota Stefana; Lisine – jedan od najlepših vodopada Srbije.',
      highlights: [
        'Broj učesnika: do 20 osoba',
        'Pauza za ručak kod vodopada',
        'Opcija: Muzej maketa srpskih manastira ili Resavska pećina'
      ],
      opis: [
        'Dan za ljubitelje istorije, duhovnosti i prirode. Manasija – impresivni bedemi i freske; Lisine – vodopad i svež vazduh.',
        'Posebno iznenađenje: mogućnost posete Muzeju maketa srpskih manastira ili Resavskoj pećini.'
      ],
      info: [
        '📍 Polazak: Beograd',
        '🕒 Trajanje: ceo dan',
        '🎟 Broj mesta: ograničeno na 20 osoba',
        '🍴 Ručak kod vodopada (preporuka restorana)'
      ],
      preporuke: [
        'Jedan dan – tri doživljaja: manastir, vodopad i tajna pećina!',
        'Idealno za ljubitelje prirode i istorije – prijavite se odmah!'
      ],
      bookingLink: '/booking/manasija-lisine'
    },
    {
      id: 'vojvodjanski-dvorci-subotica',
      name: 'Vojvođanski dvorci i šarm Subotice',
      duration: 'celodnevna ili dvodnevna (sa noćenjem)',
      price: '[ubaci cenu] ',
      description:
        'Raskoš dvoraca Vojvodine, secesijska Subotica i opcioni izlet na Palićko jezero.',
      highlights: [
        'Broj učesnika: do 20 osoba',
        'Opcija noćenja u Subotici (dodatna cena, po dogovoru)'
      ],
      opis: [
        'Obilazak vojvođanskih dvoraca – arhitektura i priče plemićkih porodica. Subotica – secesija, kultura i šarm.',
        'Opcionalno: noćenje u Subotici (šetnja, gastronomija) i Palić – šetnja, bicikl, vožnja čamcem.'
      ],
      info: [
        '📍 Polazak: Beograd',
        '🕒 Trajanje: celodnevna ili dvodnevna tura',
        '🎟 Ograničen broj mesta (20)',
        '🍴 Pauza za ručak i/ili večeru u Subotici',
        '🏨 Noćenje u Subotici (opciono)'
      ],
      preporuke: [
        'Dva dana vojvođanske elegancije – dvorci, Palić i Subotica!',
        'Fotografije za pamćenje – od dvoraca do jezera!',
        'Ograničen broj mesta – rezervišite na vreme!'
      ],
      bookingLink: '/booking/vojvodjanski-dvorci-subotica'
    },
    {
      id: 'karlovci-intimna-tura',
      name: 'Karlovci samo za vas – intimno putovanje kroz vreme',
      duration: 'celodnevna tura',
      price: '[ubaci cenu – ekskluzivno, malo mesta] ',
      description:
        'Privatno iskustvo za 3–4 osobe u Sremskim Karlovcima – vino, istorija i autentična vojvođanska kuhinja.',
      highlights: [
        'Broj učesnika: maksimalno 3–4 osobe',
        'Uključeno: ručak u centru Karlovaca'
      ],
      opis: [
        'U intimnoj grupi vodićemo vas kroz čarobne Karlovce – grad vina, ljubavi i kulturne baštine.',
        'Degustacija vina i lokalnih specijaliteta; priče o porodicama i legendama; ručak u autentičnom restoranu.',
        'Znamenitosti: Patrijaršija, Saborna crkva, Karlovačka gimnazija, Trg Branka Radičevića.'
      ],
      info: [
        '📍 Polazak: Beograd',
        '🕒 Trajanje: ceo dan',
        '🍷 Uključeno: ručak + vodič + preporuke za vina'
      ],
      preporuke: [
        'Luksuz i ekskluziva: Ovo nije tura za mase – ovo je vaša privatna vojvođanska bajka.',
        'Želite mir i bez gužve? Karlovci samo za vas.',
        'Hedonizam: čaša vina, zalazak nad Dunavom i priče koje nećete naći u vodičima.'
      ],
      bookingLink: '/booking/karlovci-intimno'
    }
  ];

  return (
    <main className="font-sans">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              🏛️ Gradske i istorijske ture
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Ture koje spajaju istoriju, arhitekturu i savremeni duh grada – na kopnu i sa reke.
            </p>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold tracking-tight mb-4">Izdvojene ture</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Svaka tura nudi poseban doživljaj – istorijski, kulturni ili romantični.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <div 
                key={tour.id}
                className="rounded-xl border border-black/[.08] dark:border-white/[.12] p-6 bg-background hover:shadow-lg transition-all duration-200"
              >
                <div className="text-4xl mb-4">🏛️</div>
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
                        <span className="text-blue-500">✓</span>
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
                    className="inline-flex items-center justify-center h-10 px-6 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    Rezerviši turu
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
                const t: any = tours.find(tt => tt.id === openTourId);
                if (!t) return null;
                return (
                  <>
                    {t.opcije && (
                      <div>
                        <h4 className="font-medium mb-2">Opcije:</h4>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                          {t.opcije.map((it: string, i: number) => (
                            <li key={i} className="flex items-center gap-2"><span className="text-blue-500">•</span>{it}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {t.brodovi && (
                      <div>
                        <h4 className="font-medium mb-2">Brodići:</h4>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                          {t.brodovi.map((it: string, i: number) => (
                            <li key={i} className="flex items-center gap-2"><span className="text-blue-500">•</span>{it}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {t.opis && (
                      <div className="space-y-3">
                        {t.opis.map((p: string, i: number) => (
                          <p key={i} className="text-gray-700 dark:text-gray-300">{p}</p>
                        ))}
                      </div>
                    )}

                    {t.info && (
                      <div className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                        {t.info.map((inf: string, i: number) => (<div key={i}>{inf}</div>))}
                      </div>
                    )}

                    {t.preporuke && (
                      <div>
                        <h4 className="font-medium mb-2">Preporuke:</h4>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                          {t.preporuke.map((it: string, i: number) => (
                            <li key={i} className="flex items-center gap-2"><span className="text-blue-500">•</span>{it}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="pt-4 border-t border-black/[.08] dark:border-white/[.12] flex justify-end">
                      <a
                        href={t.bookingLink || '#'}
                        className="inline-flex items-center justify-center h-10 px-6 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
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

