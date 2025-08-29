import Hero from '@/components/Hero';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Tours from '@/components/Tours';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="font-sans">
      <Hero />
      <About />
      <Gallery />
      <Tours />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
