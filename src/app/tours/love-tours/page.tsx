import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function LoveTours() {
  const tours = [
    {
      id: 'romantic-city-walk',
      name: 'Romantic City Walk',
      duration: '2.5 hours',
      price: '€65 / person',
      description: 'Perfect for couples seeking a romantic experience through the most beautiful and intimate corners of the city.',
      highlights: ['Historic romantic spots', 'Scenic viewpoints', 'Local love stories', 'Photo opportunities'],
      bookingLink: '/booking/romantic-city-walk'
    },
    {
      id: 'sunset-love-tour',
      name: 'Sunset Love Tour',
      duration: '3 hours',
      price: '€75 / person',
      description: 'Watch the sunset together while exploring the city\'s most romantic locations and hidden gems.',
      highlights: ['Sunset viewpoints', 'Romantic dinner spots', 'Love lock bridges', 'Evening atmosphere'],
      bookingLink: '/booking/sunset-love-tour'
    },
    {
      id: 'couples-heritage',
      name: 'Couples Heritage Tour',
      duration: '4 hours',
      price: '€85 / person',
      description: 'Discover the romantic history and cultural heritage of the region together.',
      highlights: ['Historic love stories', 'Cultural sites', 'Traditional crafts', 'Local legends'],
      bookingLink: '/booking/couples-heritage'
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
              💕 Love Tours
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Create unforgettable romantic memories with our specially curated love tours. 
              Perfect for couples, anniversaries, proposals, or simply celebrating your love.
            </p>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold tracking-tight mb-4">Romantic Experiences</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Each tour is designed to create magical moments and lasting memories for you and your loved one.
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
                  <h4 className="font-medium mb-2">Highlights:</h4>
                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    {tour.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="text-pink-500">✓</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={tour.bookingLink}
                  className="inline-flex items-center justify-center w-full h-12 px-6 rounded-full bg-pink-600 text-white font-medium hover:bg-pink-700 transition-colors"
                >
                  Book This Tour
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

