"use client";
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function LoveTours() {
  const [openTourId, setOpenTourId] = useState<string | null>(null);
  const tours = [
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

  return (
    <main className="font-sans">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-pink-50 to-rose-100 dark:from-pink-900/20 dark:to-rose-900/20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              💕 Ture za parove – savršen poklon i nezaboravno iskustvo
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Želite da iznenadite svog partnera ili partnerku za godišnjicu, rođendan ili poseban trenutak? Putovanje za dvoje je savršen izbor – najbolji poklon koji ostaje u sećanju zauvek!

Ove ture su kreirane tako da pružaju romantičnu atmosferu, intimnost i jedinstvena iskustva – od šetnji kroz istorijske ulice i duhovne manastire, do vožnji brodićem uz zalazak sunca ili degustacija vina u skrivenim kutcima Srbije.

Uz privatnu turu za parove, sve se prilagođava vama: tempo, destinacije, trajanje i detalji koji čine vaše putovanje savršenim i nezaboravnim.
            </p>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold tracking-tight mb-4">Ljubavne ture</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Svaka tura je osmišljena da stvori posebne trenutke i nezaboravne uspomene.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <div 
                key={tour.id}
                className="rounded-xl border border-black/[.08] dark:border-white/[.12] p-6 bg-background hover:shadow-lg transition-all duration-200"
              >
                <div className="text-4xl mb-4">💕</div>
                <h3 className="text-xl font-semibold mb-3">{tour.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{tour.description}</p>
                
                <div className="flex items-center gap-4 mb-4 text-sm">
                  <span>⏱️ {tour.duration}</span>
                  <span>💰 {tour.price}</span>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium mb-2">Detalji i napomene:</h4>
                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    {tour.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="text-pink-500">✓</span>
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
                    className="inline-flex items-center justify-center h-10 px-6 rounded-full bg-pink-600 text-white text-sm font-medium hover:bg-pink-700 transition-colors"
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
              {/* Meta */}
              {(() => {
                const t = tours.find(t => t.id === openTourId) as any;
                return t?.meta ? (
                  <div className="grid sm:grid-cols-3 gap-3 text-sm text-gray-700 dark:text-gray-300">
                    {t.meta.max && <div>👥 {t.meta.max}</div>}
                    {t.meta.term && <div>🗓️ {t.meta.term}</div>}
                    {t.meta.start && <div>⏱️ Početak: {t.meta.start}</div>}
                  </div>
                ) : null;
              })()}

              {/* Opis */}
              {(() => {
                const t = tours.find(t => t.id === openTourId) as any;
                return t?.opis ? (
                  <div className="space-y-3">
                    {t.opis.map((p: string, i: number) => (
                      <p key={i} className="text-gray-700 dark:text-gray-300">{p}</p>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-700 dark:text-gray-300">{t?.description}</p>
                );
              })()}

              {/* Saznaćete */}
              {(() => {
                const t = tours.find(t => t.id === openTourId) as any;
                return t?.saznacete ? (
                  <div>
                    <h4 className="font-medium mb-2">Na ovoj turi saznaćete:</h4>
                    <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      {t.saznacete.map((it: string, i: number) => (
                        <li key={i} className="flex items-center gap-2"><span className="text-pink-500">✓</span>{it}</li>
                      ))}
                    </ul>
                  </div>
                ) : null;
              })()}

              {/* Zašto */}
              {(() => {
                const t = tours.find(t => t.id === openTourId) as any;
                return t?.zasto ? (
                  <div>
                    <h4 className="font-medium mb-2">Zašto ne smete propustiti?</h4>
                    <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      {t.zasto.map((it: string, i: number) => (
                        <li key={i} className="flex items-center gap-2"><span className="text-pink-500">✓</span>{it}</li>
                      ))}
                    </ul>
                  </div>
                ) : null;
              })()}

              {/* Šta vas očekuje */}
              {(() => {
                const t = tours.find(t => t.id === openTourId) as any;
                return t?.staVasOcekuje ? (
                  <div>
                    <h4 className="font-medium mb-2">Šta vas očekuje:</h4>
                    <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      {t.staVasOcekuje.map((it: string, i: number) => (
                        <li key={i} className="flex items-center gap-2"><span className="text-pink-500">✓</span>{it}</li>
                      ))}
                    </ul>
                  </div>
                ) : null;
              })()}

              {/* Marketing */}
              {(() => {
                const t = tours.find(t => t.id === openTourId) as any;
                return t?.marketing ? (
                  <div className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    {t.marketing.map((m: string, i: number) => (<div key={i}>{m}</div>))}
                  </div>
                ) : null;
              })()}

              {/* Info */}
              {(() => {
                const t = tours.find(t => t.id === openTourId) as any;
                return t?.info ? (
                  <div className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    {t.info.map((inf: string, i: number) => (<div key={i}>{inf}</div>))}
                  </div>
                ) : null;
              })()}

              {/* Ponesite */}
              {(() => {
                const t = tours.find(t => t.id === openTourId) as any;
                return t?.ponesite ? (
                  <div>
                    <h4 className="font-medium mb-2">Ponesite:</h4>
                    <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      {t.ponesite.map((it: string, i: number) => (
                        <li key={i} className="flex items-center gap-2"><span className="text-pink-500">✓</span>{it}</li>
                      ))}
                    </ul>
                  </div>
                ) : null;
              })()}
              <div className="pt-4 border-t border-black/[.08] dark:border-white/[.12] flex justify-end">
                <a
                  href={tours.find(t => t.id === openTourId)?.bookingLink || '#'}
                  className="inline-flex items-center justify-center h-10 px-6 rounded-full bg-pink-600 text-white text-sm font-medium hover:bg-pink-700 transition-colors"
                >
                  Rezerviši turu
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

