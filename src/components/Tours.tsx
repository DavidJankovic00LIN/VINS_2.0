'use client';

import { useState } from 'react';

export default function Tours() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTour, setSelectedTour] = useState<string | null>(null);

  const tourCategories = {
    city: {
      name: 'City Tours',
      description: 'Explore urban landscapes, architecture, and city life',
      icon: '🏛️',
      tours: [
        {
          id: 'city-highlights',
          name: 'City Highlights',
          duration: '3 hours',
          price: '€60 / person',
          description: 'Discover the most iconic sights and hidden gems of the city. Perfect introduction for first-time visitors.',
          highlights: ['Historic landmarks', 'Local markets', 'Hidden courtyards', 'Photo opportunities'],
          bookingLink: '/booking/city-highlights'
        },
        {
          id: 'architectural-walk',
          name: 'Architectural Walk',
          duration: '2.5 hours',
          price: '€55 / person',
          description: 'Explore the city\'s diverse architectural styles from medieval to modern.',
          highlights: ['Gothic cathedrals', 'Art Nouveau buildings', 'Modern structures', 'Design insights'],
          bookingLink: '/booking/architectural-walk'
        }
      ]
    },
    nature: {
      name: 'Nature & Outdoor',
      description: 'Connect with nature through scenic hikes and outdoor adventures',
      icon: '🌲',
      tours: [
        {
          id: 'mountain-hike',
          name: 'Mountain Hike',
          duration: '4-5 hours',
          price: '€75 / person',
          description: 'Scenic mountain trails with breathtaking views and local flora identification.',
          highlights: ['Mountain trails', 'Panoramic views', 'Local wildlife', 'Fresh air'],
          bookingLink: '/booking/mountain-hike'
        },
        {
          id: 'forest-exploration',
          name: 'Forest Exploration',
          duration: '3 hours',
          price: '€65 / person',
          description: 'Peaceful forest walks with nature interpretation and meditation spots.',
          highlights: ['Ancient trees', 'Bird watching', 'Meditation spots', 'Nature sounds'],
          bookingLink: '/booking/forest-exploration'
        }
      ]
    },
    history: {
      name: 'Historical Tours',
      description: 'Journey through time with stories of the past',
      icon: '📚',
      tours: [
        {
          id: 'medieval-history',
          name: 'Medieval History',
          duration: '3.5 hours',
          price: '€70 / person',
          description: 'Step back in time to explore medieval castles, churches, and historical sites.',
          highlights: ['Medieval castles', 'Ancient churches', 'Historical artifacts', 'Period stories'],
          bookingLink: '/booking/medieval-history'
        },
        {
          id: 'war-history',
          name: 'War History',
          duration: '2.5 hours',
          price: '€60 / person',
          description: 'Visit significant war sites and learn about local wartime experiences.',
          highlights: ['War memorials', 'Historical sites', 'Personal stories', 'Peace messages'],
          bookingLink: '/booking/war-history'
        },
        {
          id: 'cultural-heritage',
          name: 'Cultural Heritage',
          duration: '4 hours',
          price: '€80 / person',
          description: 'Explore cultural traditions, crafts, and heritage sites.',
          highlights: ['Traditional crafts', 'Cultural sites', 'Local traditions', 'Heritage preservation'],
          bookingLink: '/booking/cultural-heritage'
        }
      ]
    }
  };

  const openCategoryModal = (category: string) => {
    setSelectedCategory(category);
    setSelectedTour(null);
  };

  const openTourModal = (tourId: string) => {
    setSelectedTour(tourId);
  };

  const closeModals = () => {
    setSelectedCategory(null);
    setSelectedTour(null);
  };

  const getCurrentTour = () => {
    if (!selectedCategory || !selectedTour) return null;
    return tourCategories[selectedCategory as keyof typeof tourCategories].tours.find(
      tour => tour.id === selectedTour
    );
  };

  return (
    <section id="tours" className="bg-black/[.03] dark:bg-white/[.04]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h2 className="text-3xl font-semibold tracking-tight">Tours</h2>
        <p className="mt-3 text-base sm:text-lg max-w-3xl">
          Choose from our carefully curated tour categories, each offering unique experiences 
          tailored to different interests and preferences.
        </p>
        
        {/* Tour Categories Grid */}
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(tourCategories).map(([key, category]) => (
            <div 
              key={key}
              onClick={() => openCategoryModal(key)}
              className="rounded-xl border border-black/[.08] dark:border-white/[.12] p-6 bg-background hover:shadow-lg transition-all duration-200 cursor-pointer group"
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{category.description}</p>
              <div className="text-sm font-medium text-foreground group-hover:opacity-80">
                {category.tours.length} tours available →
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Category Modal */}
      {selectedCategory && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-background rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-black/[.08] dark:border-white/[.12]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{tourCategories[selectedCategory as keyof typeof tourCategories].icon}</span>
                  <h3 className="text-2xl font-semibold">{tourCategories[selectedCategory as keyof typeof tourCategories].name}</h3>
                </div>
                <button
                  onClick={closeModals}
                  className="p-2 hover:bg-black/[.05] dark:hover:bg-white/[.05] rounded-lg transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {tourCategories[selectedCategory as keyof typeof tourCategories].description}
              </p>
            </div>
            
            <div className="p-6 space-y-4">
              {tourCategories[selectedCategory as keyof typeof tourCategories].tours.map((tour) => (
                <div 
                  key={tour.id}
                  className="border border-black/[.08] dark:border-white/[.12] rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => openTourModal(tour.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg">{tour.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{tour.description}</p>
                      <div className="flex items-center gap-4 mt-3 text-sm">
                        <span>⏱️ {tour.duration}</span>
                        <span>💰 {tour.price}</span>
                      </div>
                    </div>
                    <button className="text-foreground hover:opacity-80 transition-opacity">
                      Read More →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Individual Tour Modal */}
      {selectedTour && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-background rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-black/[.08] dark:border-white/[.12]">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold">{getCurrentTour()?.name}</h3>
                <button
                  onClick={closeModals}
                  className="p-2 hover:bg-black/[.05] dark:hover:bg-white/[.05] rounded-lg transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-2">Tour Details</h4>
                <p className="text-gray-600 dark:text-gray-400">{getCurrentTour()?.description}</p>
              </div>
              
              <div className="flex items-center gap-6 text-sm">
                <span>⏱️ Duration: {getCurrentTour()?.duration}</span>
                <span>💰 Price: {getCurrentTour()?.price}</span>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-3">Highlights</h4>
                <ul className="space-y-2">
                  {getCurrentTour()?.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-4 border-t border-black/[.08] dark:border-white/[.12]">
                <a
                  href={getCurrentTour()?.bookingLink}
                  className="inline-flex items-center justify-center w-full h-12 px-6 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
                >
                  Book This Tour
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
