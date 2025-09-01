export default function Tours() {
  const tourCategories = {
    love: {
      name: 'Love Tours',
      description: 'Create unforgettable romantic memories with our specially curated love tours',
      icon: '💕',
      link: '/tours/love-tours',
      tourCount: 3
    },
    monastery: {
      name: 'Monastery Tours',
      description: 'Discover the spiritual heritage and peaceful beauty of ancient monasteries',
      icon: '⛪',
      link: '/tours/monastery-tours',
      tourCount: 4
    },
    cityHistory: {
      name: 'City & History Tours',
      description: 'Journey through time and discover the rich history and architectural marvels',
      icon: '🏛️',
      link: '/tours/city-history-tours',
      tourCount: 5
    },
    custom: {
      name: 'Custom Tours',
      description: 'Create your perfect tour experience tailored to your interests and schedule',
      icon: '🎯',
      link: '/tours/custom-tours',
      tourCount: 6
    }
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
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(tourCategories).map(([key, category]) => (
            <a 
              key={key}
              href={category.link}
              className="rounded-xl border border-black/[.08] dark:border-white/[.12] p-6 bg-background hover:shadow-lg transition-all duration-200 cursor-pointer group block"
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{category.description}</p>
              <div className="text-sm font-medium text-foreground group-hover:opacity-80">
                {category.tourCount} tours available →
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
