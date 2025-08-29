import Image from 'next/image';
import { aboutPhoto } from '@/photos';

export default function About() {
  const skills = [
    'History',
    'Architecture', 
    'Culinary',
    'Wine',
    'Museums',
    'Hiking',
    'Photography',
    'Family-friendly'
  ];

  return (
    <section id="about" className="bg-black/[.03] dark:bg-white/[.04]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h2 className="text-3xl font-semibold tracking-tight">About Me</h2>
        
        <div className="mt-8 grid lg:grid-cols-2 gap-12 items-start">
          {/* Text Content */}
          <div className="space-y-4">
            <p className="text-base sm:text-lg">
              I'm a licensed female tourist guide with a passion for storytelling and crafting memorable experiences. 
              I focus on authentic, safe, and engaging tours tailored to your interests.
            </p>
            <p className="text-base sm:text-lg">
              With over 5 years of experience leading tours across the region, I've developed deep connections with local communities 
              and discovered hidden gems that most visitors never see. My approach combines historical knowledge with personal stories 
              to create truly immersive experiences.
            </p>
          </div>
          
          {/* Photo */}
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
        </div>
        
        {/* Skills Grid */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div 
              key={skill} 
              className="rounded-lg border border-black/[.08] dark:border-white/[.12] p-4 text-sm text-center bg-background hover:shadow-md transition-shadow"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
