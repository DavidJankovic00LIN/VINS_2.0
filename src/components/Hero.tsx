import Image from 'next/image';
import { profilePhoto } from '@/photos';

export default function Hero() {
  return (
    <section id="home" className="relative isolate bg-gradient-to-br from-[#fd8112] via-[#ff6b35] to-[#0085ca] dark:bg-white/[.04]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
              Private Guided Tours by a Local Expert
            </h1>
            <p className="mt-4 text-base sm:text-lg max-w-2xl text-white/90">
              Discover hidden gems, history, and culture with tailored experiences for solo travelers, couples, and small groups.
            </p>
            <div className="mt-8 flex gap-4">
              <a 
                href="#tours" 
                className="h-10 px-5 rounded-full bg-white text-[#0085ca] text-sm font-medium inline-flex items-center hover:bg-white/90 transition-colors shadow-lg"
              >
                Explore Tours
              </a>
              <a 
                href="#contact" 
                className="h-10 px-5 rounded-full border-2 border-white text-white text-sm inline-flex items-center hover:bg-white hover:text-[#0085ca] transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <Image
                  src={profilePhoto}
                  alt="Tourist Guide Profile"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-pulse">
                Available Today
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
