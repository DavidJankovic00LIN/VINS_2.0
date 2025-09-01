import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function CityHistoryTours() {
  const tours = [
    {
      id: 'historic-city-center',
      name: 'Historic City Center',
      duration: '3 hours',
      price: '€65 / person',
      description: 'Explore the heart of the city with its historic buildings, squares, and centuries of stories.',
      highlights: ['Historic landmarks', 'City squares', 'Architectural gems', 'Local legends'],
      bookingLink: '/booking/historic-city-center'
    },
    {
      id: 'medieval-fortress',
      name: 'Medieval Fortress Tour',
      duration: '2.5 hours',
      price: '€55 / person',
      description: 'Step back in time as you explore ancient fortifications and learn about medieval life.',
      highlights: ['Ancient walls', 'Medieval architecture', 'Historical artifacts', 'Battle stories'],
      bookingLink: '/booking/medieval-fortress'
    },
    {
      id: 'cultural-heritage',
      name: 'Cultural Heritage Walk',
      duration: '4 hours',
      price: '€80 / person',
      description: 'Discover the rich cultural heritage through museums, galleries, and traditional neighborhoods.',
      highlights: ['Museums & galleries', 'Traditional crafts', 'Cultural sites', 'Local traditions'],
      bookingLink: '/booking/cultural-heritage'
    },
    {
      id: 'war-history',
      name: 'War History & Memorials',
      duration: '3.5 hours',
      price: '€70 / person',
      description: 'Learn about significant historical events and visit memorials that shaped the region.',
      highlights: ['War memorials', 'Historical sites', 'Personal stories', 'Peace messages'],
      bookingLink: '/booking/war-history'
    },
    {
      id: 'architectural-evolution',
      name: 'Architectural Evolution',
      duration: '3 hours',
      price: '€65 / person',
      description: 'Trace the architectural development from medieval times to modern day.',
      highlights: ['Gothic cathedrals', 'Baroque palaces', 'Art Nouveau', 'Modern structures'],
      bookingLink: '/booking/architectural-evolution'
    }
  ];

  return (
    <main className="font-sans">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              🏛️ City & History Tours
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Journey through time and discover the rich history, culture, and architectural marvels 
              that have shaped this beautiful city and region.
            </p>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold tracking-tight mb-4">Historical Adventures</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Each tour offers a unique perspective on the city's past, present, and cultural significance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <div 
                key={tour.id}
                className="rounded-xl border border-black/[.08] dark:border-white/[.12] p-6 bg-background hover:shadow-lg transition-all duration-200"
              >
                <div className="text-4xl mb-4">🏛️</div>
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
                        <span className="text-blue-500">✓</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={tour.bookingLink}
                  className="inline-flex items-center justify-center w-full h-12 px-6 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
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

