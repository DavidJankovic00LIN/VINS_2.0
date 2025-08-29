import Image from 'next/image';
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

  return (
    <section id="testimonials">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h2 className="text-3xl font-semibold tracking-tight">Testimonials</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.name} 
              className="rounded-xl border border-black/[.08] dark:border-white/[.12] p-6 bg-background hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.photo}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-sm font-medium">{testimonial.name}</div>
              </div>
              <p className="mt-3 text-sm">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
