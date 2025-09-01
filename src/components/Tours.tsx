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
    <section id="tours" className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h2 className="text-3xl font-semibold tracking-tight text-white">Tours</h2>
        <p className="mt-3 text-base sm:text-lg max-w-3xl text-blue-200">
          Choose from our carefully curated tour categories, each offering unique experiences 
          tailored to different interests and preferences.
        </p>
        
        {/* Tour Categories Grid */}
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(tourCategories).map(([key, category]) => (
            <a 
              key={key}
              href={category.link}
              className="rounded-xl border border-blue-400/30 p-6 bg-white/10 backdrop-blur-sm hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group block hover:bg-white/20"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">{category.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{category.name}</h3>
              <p className="text-sm text-blue-200 mb-4">{category.description}</p>
              <div className="text-sm font-medium text-blue-300 group-hover:text-white transition-all">
                {category.tourCount} tours available →
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
