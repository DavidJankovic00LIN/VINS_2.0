"use client";
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function CustomTours() {
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
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">Privatne ture – putovanje po vašoj meri</h1>
            <p className="text-lg sm:text-xl text-gray-800 max-w-3xl mx-auto">
              Želite da svoje putovanje učinite potpuno intimnim i prilagođenim vama? Privatne ture su idealno rešenje –
              bilo da planirate porodični izlet, romantično putovanje ili avanturu sa prijateljima, osmisliću doživljaj koji odgovara samo vašoj grupi.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left copy */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight mb-3">Kako funkcioniše?</h2>
                <ol className="list-decimal pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                  <li><span className="font-medium">Odaberite turu:</span> Javite koju turu želite da posetite.</li>
                  <li><span className="font-medium">Odredite detalje:</span> Koliko osoba i koliko dugo želite da traje tura.</li>
                  <li><span className="font-medium">Pripremamo ponudu:</span> Na osnovu zahteva, trajanja i kilometraže, šaljemo personalizovanu ponudu sa cenom.</li>
                </ol>
              </div>

              <div>
                <h2 className="text-2xl font-semibold tracking-tight mb-3">Napomena</h2>
                <p className="text-gray-700 dark:text-gray-300">
                  Cena privatnih tura je fiksna i ne podleže cenkаnju. Formira se prema trajanju ture, broju učesnika i pređenim kilometrima,
                  kako bismo obezbedili najbolje iskustvo i kvalitetnu organizaciju.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold tracking-tight mb-3">Zašto odabrati privatnu turu?</h2>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>✓ Potpuna fleksibilnost – birate destinacije, vreme i tempo.</li>
                  <li>✓ Ekskluzivnost – tura samo za vašu grupu, bez gužve i čekanja.</li>
                  <li>✓ Prilagođeno iskustvo – priče, anegdote i zanimljivosti po vašoj meri.</li>
                </ul>
              </div>
            </div>

            {/* Right form */}
            <div className="rounded-2xl border border-black/[.08] dark:border-white/[.12] p-6 bg-white/80 dark:bg-background backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4">Pošaljite upit za privatnu turu</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm mb-1">Ime i prezime</label>
                  <input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full h-10 px-3 rounded-md border border-black/[.08] dark:border-white/[.12] bg-background focus:outline-none focus:ring-2 focus:ring-foreground/20"
                    placeholder="Vaše ime i prezime"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-1">E-mail</label>
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full h-10 px-3 rounded-md border border-black/[.08] dark:border-white/[.12] bg-background focus:outline-none focus:ring-2 focus:ring-foreground/20"
                      placeholder="vi@primer.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Telefon</label>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full h-10 px-3 rounded-md border border-black/[.08] dark:border-white/[.12] bg-background focus:outline-none focus:ring-2 focus:ring-foreground/20"
                      placeholder="+381 6x xxx xxxx"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm mb-1">Poruka</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full h-28 p-3 rounded-md border border-black/[.08] dark:border-white/[.12] bg-background focus:outline-none focus:ring-2 focus:ring-foreground/20"
                    placeholder="Navedite turu, broj osoba i željeno trajanje..."
                  />
                </div>
                <button
                  type="submit"
                  className="h-10 px-5 rounded-full bg-orange-600 text-white text-sm font-medium hover:bg-orange-700 transition-colors"
                >
                  Pošalji upit
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

