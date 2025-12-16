import { useState } from 'react';

interface SuggestionsProps {
  onSelectTrip: (tripId: string) => void;
}

interface TripSuggestion {
  id: string;
  title: string;
  location: string;
  duration: string;
  image: string;
  matchScore: number;
  highlights: string[];
  basedOn: { icon: string; text: string; }[];
  priceRange: string;
  season: string;
}

export default function Suggestions({ onSelectTrip }: SuggestionsProps) {
  const [selectedTrip, setSelectedTrip] = useState<string | null>(null);

  const trips: TripSuggestion[] = [
    {
      id: 'brazil-gp',
      title: 'Brazilian Grand Prix & Surf Adventure',
      location: 'São Paulo & Florianópolis, Brazil',
      duration: '10 days',
      image: '🏎️',
      matchScore: 98,
      highlights: [
        'VIP tickets to Brazilian Grand Prix',
        'Surf lessons at Joaquina Beach',
        'Samba club experiences in São Paulo',
        'Brazilian BBQ & cuisine tour'
      ],
      basedOn: [
        { icon: '🏆', text: 'F1 content on ESPN' },
        { icon: '🎵', text: '247 Brazilian music tracks' },
        { icon: '📸', text: 'Following surf accounts' },
        { icon: '📺', text: 'Drive to Survive binge' }
      ],
      priceRange: '$4,200 - $5,800',
      season: 'November'
    },
    {
      id: 'japan-tech',
      title: 'Tokyo Tech & Culture Fusion',
      location: 'Tokyo & Kyoto, Japan',
      duration: '8 days',
      image: '🗾',
      matchScore: 92,
      highlights: [
        'TeamLab Borderless digital art',
        'Akihabara gaming & tech district',
        'Traditional tea ceremony',
        'Mount Fuji day trip'
      ],
      basedOn: [
        { icon: '📸', text: 'Tech & gadget posts' },
        { icon: '📺', text: 'Anime on Netflix' },
        { icon: '🎵', text: 'J-pop playlists' },
        { icon: '🏆', text: 'Esports viewing' }
      ],
      priceRange: '$3,800 - $5,200',
      season: 'March-April'
    },
    {
      id: 'morocco-adventure',
      title: 'Moroccan Desert to Coast',
      location: 'Marrakech & Essaouira, Morocco',
      duration: '7 days',
      image: '🏜️',
      matchScore: 85,
      highlights: [
        'Sahara desert camping',
        'Coastal kite surfing',
        'Medina food tours',
        'Atlas Mountains hiking'
      ],
      basedOn: [
        { icon: '📸', text: 'Adventure travel saves' },
        { icon: '🎵', text: 'World music mix' },
        { icon: '📺', text: 'Travel documentaries' },
        { icon: '🏆', text: 'Extreme sports clips' }
      ],
      priceRange: '$2,400 - $3,600',
      season: 'September-October'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col p-6 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="glass-effect rounded-full px-6 py-2 text-sm font-semibold text-pink-300">
              Step 3 of 3
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Your Perfect Trips
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Personalized adventures crafted from your passions
          </p>
        </div>

        {/* Trip cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {trips.map((trip, index) => (
            <div
              key={trip.id}
              className={`
                glass-effect rounded-3xl overflow-hidden cursor-pointer
                transform transition-all duration-300
                ${selectedTrip === trip.id ? 'ring-4 ring-white/30 scale-105' : 'hover:scale-102'}
              `}
              onClick={() => setSelectedTrip(trip.id)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Match score badge */}
              <div className="relative">
                <div className="absolute top-4 right-4 z-10">
                  <div className="glass-effect rounded-full px-4 py-2 flex items-center gap-2">
                    <span className="text-2xl">✨</span>
                    <span className="font-bold text-lg">{trip.matchScore}%</span>
                  </div>
                </div>

                {/* Hero section */}
                <div className="relative h-48 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                  <span className="text-8xl">{trip.image}</span>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{trip.title}</h3>
                <div className="flex items-center gap-2 text-gray-400 mb-4">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm">{trip.location}</span>
                </div>

                <div className="flex items-center gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{trip.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{trip.priceRange}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">HIGHLIGHTS</h4>
                  <ul className="space-y-1">
                    {trip.highlights.slice(0, 3).map((highlight, idx) => (
                      <li key={idx} className="text-sm flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Based on */}
                <div className="pt-4 border-t border-white/10">
                  <h4 className="text-xs font-semibold text-gray-500 mb-2">BASED ON YOUR:</h4>
                  <div className="flex flex-wrap gap-2">
                    {trip.basedOn.map((item, idx) => (
                      <div key={idx} className="glass-effect rounded-full px-3 py-1 text-xs flex items-center gap-1">
                        <span>{item.icon}</span>
                        <span className="text-gray-300">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action button */}
        <div className="text-center">
          <button
            onClick={() => selectedTrip && onSelectTrip(selectedTrip)}
            disabled={!selectedTrip}
            className={`
              px-12 py-5 rounded-full font-bold text-lg
              transition-all duration-300
              ${selectedTrip
                ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 cursor-pointer'
                : 'bg-gray-700 text-gray-500 cursor-not-allowed opacity-50'
              }
            `}
          >
            {selectedTrip ? (
              <span className="flex items-center gap-3">
                See Full Trip Details
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            ) : (
              'Select a trip to continue'
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
