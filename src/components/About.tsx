import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import { aboutPhoto } from '@/photos';

export default function About() {
  const skills = [
    'Iskustvo i znanje – Više godina u turizmu, od recepcije u luksuznim hotelima do vođenja grupa po najlepšim mestima',
    'Prilagođeno vama – Svaka tura je jedinstvena i osmišljena prema vašim željama.', 
    'Priče koje se pamte – Ne samo činjenice, već i legende, mitovi i zanimljivosti koje čine destinaciju živom.',
    'Sigurnost i organizacija – Sa mnom nema brige, samo uživanje.',
    
  ];

  const getSkillIcon = (text: string) => {
    const lower = text.toLowerCase();
    if (lower.includes('iskustvo') || lower.includes('znanje')) return '🎓';
    if (lower.includes('prilagođeno') || lower.includes('prilagodjeno') || lower.includes('željama') || lower.includes('zeljama')) return '👨‍👩';
    if (lower.includes('priče') || lower.includes('price') || lower.includes('legende') || lower.includes('mitovi')) return '📖';
    if (lower.includes('sigurnost') || lower.includes('organizacija')) return '🛡️';
    return '⭐';
  };

  return (
    <section id="about" className="bg-gradient-to-b from-[#0085ca] to-[#fd8112] dark:bg-white/[.04]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <AnimatedSection direction="fade">
          <h2 className="text-3xl font-semibold tracking-tight text-white">O meni</h2>
        </AnimatedSection>
        
        <div className="mt-8 grid lg:grid-cols-2 gap-12 items-start">
          {/* Text Content */}
          <AnimatedSection direction="left" className="space-y-4">
            <p className="text-base sm:text-lg text-white/90">
            Već više od pet godina vodim ljude kroz svet putovanja, otkrivajući im mesta koja pričaju priče. Volim da istražujem, učim nove stvari i delim pozitivnu energiju sa svima koji žele da dožive nešto posebno.
            Najviše me inspirišu destinacije sa dušom – one koje kriju ljubavne i misteriozne priče. Moj cilj je da vam pokažem ono što drugi često ne primete, da otkrijete magiju skrivenih kutaka i doživite autentična iskustva.
            Sa mnom imate mogućnost da birate – zajedno kreiramo putovanje koje odgovara vašem stilu, željama i mašti. Krenimo zajedno u istraživanje i napravimo uspomene koje ćete zauvek pamtiti!

            </p>

            <h3 className="text-2xl font-semibold tracking-tight text-white">Putuj drugačije, doživi više!</h3>

            <p className="text-base sm:text-lg text-white/90">
            Ja sam visegodisnji Vodic sa iskustvom u radu sa grupama svih uzrasta i željom da svako putovanje pretvorim u nezaboravnu avanturu.
            </p>
            
          </AnimatedSection>
          
          {/* Photo */}
          <AnimatedSection direction="right">
            <div className="flex justify-center lg:justify-end">
              <div className="w-64 h-80 sm:w-80 sm:h-96 rounded-xl overflow-hidden border-4 border-white shadow-2xl">
                <Image
                  src={aboutPhoto}
                  alt="About Me Photo"
                  width={320}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
        
        {/* Skills Grid */}
        <AnimatedSection direction="fade">
          <h3 className="text-3xl font-semibold tracking-tight text-white text-center mt-16">Zašto baš sa mnom?</h3>
        </AnimatedSection>
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill, idx) => (
            <AnimatedSection key={skill} direction="up" delayMs={idx * 60}>
              <div 
                className="h-full min-h-[140px] rounded-lg border border-white/20 p-4 text-sm text-center bg-white/20 backdrop-blur-sm hover:bg-white/30 hover:shadow-lg hover:scale-105 transition-all duration-300 text-white font-medium flex items-center justify-center"
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="text-2xl">{getSkillIcon(skill)}</div>
                  <div>{skill}</div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
