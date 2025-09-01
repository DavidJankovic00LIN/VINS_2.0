import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function CustomTours() {
  const customOptions = [
    {
      id: 'private-tour',
      name: 'Private Guided Tour',
      duration: 'Flexible',
      price: 'From €100 / group',
      description: 'Completely personalized tour designed around your interests, schedule, and preferences.',
      highlights: ['Personalized itinerary', 'Private guide', 'Flexible timing', 'Custom locations'],
      bookingLink: '/booking/private-tour'
    },
    {
      id: 'group-tour',
      name: 'Group Custom Tour',
      duration: 'Flexible',
      price: 'From €50 / person',
      description: 'Perfect for families, friends, or corporate groups with specific interests and requirements.',
      highlights: ['Group discounts', 'Custom activities', 'Flexible group size', 'Special arrangements'],
      bookingLink: '/booking/group-tour'
    },
    {
      id: 'photography-tour',
      name: 'Photography Tour',
      duration: '4-6 hours',
      price: 'From €80 / person',
      description: 'Designed for photography enthusiasts with access to the best photo spots and golden hour timing.',
      highlights: ['Best photo locations', 'Golden hour timing', 'Photography tips', 'Unique perspectives'],
      bookingLink: '/booking/photography-tour'
    },
    {
      id: 'culinary-tour',
      name: 'Culinary Experience',
      duration: '3-5 hours',
      price: 'From €70 / person',
      description: 'Food-focused tour featuring local cuisine, traditional recipes, and authentic dining experiences.',
      highlights: ['Local cuisine', 'Traditional recipes', 'Food markets', 'Cooking demonstrations'],
      bookingLink: '/booking/culinary-tour'
    },
    {
      id: 'adventure-tour',
      name: 'Adventure Tour',
      duration: '6-8 hours',
      price: 'From €90 / person',
      description: 'Active exploration combining hiking, outdoor activities, and adventure sports.',
      highlights: ['Hiking trails', 'Outdoor activities', 'Adventure sports', 'Nature exploration'],
      bookingLink: '/booking/adventure-tour'
    },
    {
      id: 'educational-tour',
      name: 'Educational Tour',
      duration: 'Flexible',
      price: 'From €60 / person',
      description: 'Learning-focused tours perfect for students, researchers, or anyone seeking deeper knowledge.',
      highlights: ['Educational content', 'Expert guides', 'Learning materials', 'Academic focus'],
      bookingLink: '/booking/educational-tour'
    }
  ];

  return (
    <main className="font-sans">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              🎯 Custom Tours
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Create your perfect tour experience! We specialize in crafting unique, personalized tours 
              tailored to your interests, schedule, and group size.
            </p>
          </div>
        </div>
      </section>

      {/* Custom Options Section */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold tracking-tight mb-4">Custom Tour Options</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Choose from our popular custom tour types or let us create something completely unique for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customOptions.map((option) => (
              <div 
                key={option.id}
                className="rounded-xl border border-black/[.08] dark:border-white/[.12] p-6 bg-background hover:shadow-lg transition-all duration-200"
              >
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-3">{option.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{option.description}</p>
                
                <div className="flex items-center gap-4 mb-4 text-sm">
                  <span>⏱️ {option.duration}</span>
                  <span>💰 {option.price}</span>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium mb-2">Features:</h4>
                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    {option.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={option.bookingLink}
                  className="inline-flex items-center justify-center w-full h-12 px-6 rounded-full bg-green-600 text-white font-medium hover:bg-green-700 transition-colors"
                >
                  Request This Tour
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-black/[.03] dark:bg-white/[.04]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight mb-4">Need Something Different?</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Have a specific idea in mind? Contact us and we'll work together to create the perfect tour experience for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
              >
                Contact Us
              </a>
              <a
                href="mailto:info@vinsguide.com"
                className="inline-flex items-center justify-center h-12 px-8 rounded-full border border-black/[.08] dark:border-white/[.12] font-medium hover:bg-black/[.05] dark:hover:bg-white/[.05] transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

