import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import { testimonial1, testimonial2, testimonial3 } from '@/photos';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Anna, DE',
      photo: testimonial1,
      text: 'Wonderful tour, felt safe and inspired. Highly recommend!'
    },
    {
      name: 'Sofia, IT',
      photo: testimonial2, 
      text: 'Amazing experience! Learned so much about local culture and history.'
    },
    {
      name: 'Maya, IL',
      photo: testimonial3,
      text: 'Perfect day trip! The guide was knowledgeable and friendly.'
    }
  ];

  const directions = ['left', 'down', 'right'] as const;

  return (
    <section id="testimonials" className="bg-gradient-to-b from-[#0085ca] to-[#fd8112]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <AnimatedSection direction="fade">
          <h2 className="text-3xl font-semibold tracking-tight text-white">Utisci</h2>
        </AnimatedSection>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <AnimatedSection key={testimonial.name} direction={directions[idx % directions.length]} delayMs={idx * 80}>
              <div 
                className="rounded-xl border border-white/30 p-6 bg-white/20 backdrop-blur-sm hover:shadow-xl hover:scale-105 transition-all duration-300 hover:bg:white/30"
              >
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.photo}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-sm font-medium text-white">{testimonial.name}</div>
                </div>
                <p className="mt-3 text-sm text:white/90">"{testimonial.text}"</p>

                <div className="mt-4 rounded-lg overflow-hidden border border-white/30">
                  <Image
                    src={testimonial.photo}
                    alt={`${testimonial.name} - photo`}
                    width={800}
                    height={450}
                    className="w-full h-56 md:h-64 object-cover"
                  />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
