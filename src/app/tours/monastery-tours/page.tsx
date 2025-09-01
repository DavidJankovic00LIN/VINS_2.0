import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function MonasteryTours() {
  const tours = [
    {
      id: 'sacred-monasteries',
      name: 'Sacred Monasteries Tour',
      duration: '6 hours',
      price: '€95 / person',
      description: 'Visit the most significant monasteries and religious sites, learning about their spiritual and historical importance.',
      highlights: ['Ancient monasteries', 'Religious artifacts', 'Spiritual history', 'Peaceful atmosphere'],
      bookingLink: '/booking/sacred-monasteries'
    },
    {
      id: 'monastic-life',
      name: 'Monastic Life Experience',
      duration: '4 hours',
      price: '€75 / person',
      description: 'Experience the peaceful monastic way of life and learn about centuries-old traditions.',
      highlights: ['Monastic traditions', 'Meditation practices', 'Historical architecture', 'Spiritual guidance'],
      bookingLink: '/booking/monastic-life'
    },
    {
      id: 'heritage-monasteries',
      name: 'Heritage Monasteries',
      duration: '5 hours',
      price: '€85 / person',
      description: 'Explore UNESCO-listed monasteries and their cultural significance in the region.',
      highlights: ['UNESCO sites', 'Cultural heritage', 'Architectural marvels', 'Historical significance'],
      bookingLink: '/booking/heritage-monasteries'
    },
    {
      id: 'pilgrimage-tour',
      name: 'Pilgrimage Tour',
      duration: '8 hours',
      price: '€120 / person',
      description: 'A spiritual journey through multiple monasteries, perfect for those seeking deeper spiritual connection.',
      highlights: ['Multiple monasteries', 'Pilgrimage routes', 'Spiritual reflection', 'Cultural immersion'],
      bookingLink: '/booking/pilgrimage-tour'
    }
  ];

  return (
    <main className="font-sans">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              ⛪ Monastery Tours
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover the spiritual heritage and peaceful beauty of ancient monasteries. 
              Experience centuries of tradition, architecture, and spiritual wisdom.
            </p>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold tracking-tight mb-4">Spiritual Journeys</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Each monastery tour offers a unique opportunity to connect with history, spirituality, and inner peace.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <div 
                key={tour.id}
                className="rounded-xl border border-black/[.08] dark:border-white/[.12] p-6 bg-background hover:shadow-lg transition-all duration-200"
              >
                <div className="text-4xl mb-4">⛪</div>
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
                        <span className="text-amber-500">✓</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={tour.bookingLink}
                  className="inline-flex items-center justify-center w-full h-12 px-6 rounded-full bg-amber-600 text-white font-medium hover:bg-amber-700 transition-colors"
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

