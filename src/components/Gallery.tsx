'use client';

import { useState } from 'react';
import Image from 'next/image';
import { 
  nature1, nature2, nature3, nature4, nature5, nature6, nature7, nature8,
  city1, city2, city3, city4, city5, city6, city7, city8,
  culture1, culture2, culture3, culture4, culture5, culture6, culture7, culture8,
  food1, food2, food3, food4, food5, food6, food7, food8
} from '@/photos';

export default function Gallery() {
  const [selectedSet, setSelectedSet] = useState('nature');

  const photoSets = {
    nature: {
      name: 'Nature & Landscapes',
      photos: [
        { id: 1, src: nature1, title: 'Nature Photo 1', category: 'nature' },
        { id: 2, src: nature2, title: 'Nature Photo 2', category: 'nature' },
        { id: 3, src: nature3, title: 'Nature Photo 3', category: 'nature' },
        { id: 4, src: nature4, title: 'Nature Photo 4', category: 'nature' },
        { id: 5, src: nature5, title: 'Nature Photo 5', category: 'nature' },
        { id: 6, src: nature6, title: 'Nature Photo 6', category: 'nature' },
        { id: 7, src: nature7, title: 'Nature Photo 7', category: 'nature' },
        { id: 8, src: nature8, title: 'Nature Photo 8', category: 'nature' }
      ]
    },
    city: {
      name: 'City & Architecture',
      photos: [
        { id: 1, src: city1, title: 'City Photo 1', category: 'city' },
        { id: 2, src: city2, title: 'City Photo 2', category: 'city' },
        { id: 3, src: city3, title: 'City Photo 3', category: 'city' },
        { id: 4, src: city4, title: 'City Photo 4', category: 'city' },
        { id: 5, src: city5, title: 'City Photo 5', category: 'city' },
        { id: 6, src: city6, title: 'City Photo 6', category: 'city' },
        { id: 7, src: city7, title: 'City Photo 7', category: 'city' },
        { id: 8, src: city8, title: 'City Photo 8', category: 'city' }
      ]
    },
    culture: {
      name: 'Culture & People',
      photos: [
        { id: 1, src: culture1, title: 'Culture Photo 1', category: 'culture' },
        { id: 2, src: culture2, title: 'Culture Photo 2', category: 'culture' },
        { id: 3, src: culture3, title: 'Culture Photo 3', category: 'culture' },
        { id: 4, src: culture4, title: 'Culture Photo 4', category: 'culture' },
        { id: 5, src: culture5, title: 'Culture Photo 5', category: 'culture' },
        { id: 6, src: culture6, title: 'Culture Photo 6', category: 'culture' },
        { id: 7, src: culture7, title: 'Culture Photo 7', category: 'culture' },
        { id: 8, src: culture8, title: 'Culture Photo 8', category: 'culture' }
      ]
    },
    food: {
      name: 'Food & Cuisine',
      photos: [
        { id: 1, src: food1, title: 'Food Photo 1', category: 'food' },
        { id: 2, src: food2, title: 'Food Photo 2', category: 'food' },
        { id: 3, src: food3, title: 'Food Photo 3', category: 'food' },
        { id: 4, src: food4, title: 'Food Photo 4', category: 'food' },
        { id: 5, src: food5, title: 'Food Photo 5', category: 'food' },
        { id: 6, src: food6, title: 'Food Photo 6', category: 'food' },
        { id: 7, src: food7, title: 'Food Photo 7', category: 'food' },
        { id: 8, src: food8, title: 'Food Photo 8', category: 'food' }
      ]
    }
  };

  const currentPhotos = photoSets[selectedSet as keyof typeof photoSets].photos;

  return (
    <section id="gallery" className="bg-gradient-to-b from-[#fd8112] to-[#0085ca]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h2 className="text-3xl font-semibold tracking-tight text-white">Gallery</h2>
        
        {/* Photo Set Selector */}
        <div className="mt-6 mb-8">
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
            {Object.entries(photoSets).map(([key, set]) => (
              <button
                key={key}
                onClick={() => setSelectedSet(key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedSet === key
                    ? 'bg-white text-[#0085ca] shadow-lg font-semibold'
                    : 'bg-white/20 backdrop-blur-sm hover:bg-white/30 hover:shadow-md border border-white/30 text-white'
                }`}
              >
                {set.name}
              </button>
            ))}
          </div>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {currentPhotos.map((photo) => (
            <div 
              key={`${selectedSet}-${photo.id}`}
              className="aspect-[4/3] rounded-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group relative border-2 border-transparent hover:border-white/50"
            >
              <Image
                src={photo.src}
                alt={photo.title}
                width={400}
                height={300}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
              />
            </div>
          ))}
        </div>
        

      </div>
    </section>
  );
}
