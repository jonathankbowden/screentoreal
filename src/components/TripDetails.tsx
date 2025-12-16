import { useState } from 'react';

interface TripDetailsProps {
  tripId: string;
}

interface DayPlan {
  day: number;
  title: string;
  location: string;
  activities: Activity[];
}

interface Activity {
  time: string;
  title: string;
  description: string;
  icon: string;
  aiReason: string;
}

export default function TripDetails({ tripId: _tripId }: TripDetailsProps) {
  const [selectedDay, setSelectedDay] = useState(1);
  // Note: _tripId is reserved for future use when multiple trips are supported

  const tripData = {
    title: 'Brazilian Grand Prix & Surf Adventure',
    subtitle: 'Your screen life, now real',
    location: 'São Paulo & Florianópolis, Brazil',
    dates: 'November 2-12, 2024',
    price: '$4,850',
    matchScore: 98,
    totalDays: 10
  };

  const itinerary: DayPlan[] = [
    {
      day: 1,
      title: 'Arrival in São Paulo',
      location: 'São Paulo',
      activities: [
        {
          time: '2:00 PM',
          title: 'Arrive at GRU Airport',
          description: 'Private transfer to boutique hotel in Jardins district',
          icon: '✈️',
          aiReason: 'Premium experience based on your lifestyle preferences'
        },
        {
          time: '7:00 PM',
          title: 'Welcome Dinner at D.O.M.',
          description: 'Michelin-starred Brazilian cuisine with sommelier pairing',
          icon: '🍽️',
          aiReason: 'Matches your foodie Instagram posts'
        },
        {
          time: '9:30 PM',
          title: 'Samba Club Experience',
          description: 'VIP table at authentic samba venue in Vila Madalena',
          icon: '🎵',
          aiReason: 'You\'ve listened to 247 Brazilian samba tracks on Spotify'
        }
      ]
    },
    {
      day: 2,
      title: 'F1 Qualifying Day',
      location: 'Interlagos Circuit',
      activities: [
        {
          time: '9:00 AM',
          title: 'Brazilian Breakfast',
          description: 'Traditional pão de queijo and fresh açaí bowl',
          icon: '🥐',
          aiReason: 'Authentic local experience'
        },
        {
          time: '11:00 AM',
          title: 'Paddock Club Access',
          description: 'VIP access, pit lane walk, meet team principals',
          icon: '🏎️',
          aiReason: 'Drive to Survive viewing history & F1 ESPN engagement'
        },
        {
          time: '2:00 PM',
          title: 'Qualifying Session',
          description: 'Premium grandstand seats at Turn 1',
          icon: '🏁',
          aiReason: 'High engagement with São Paulo GP content'
        },
        {
          time: '7:00 PM',
          title: 'Churrascaria Experience',
          description: 'Premium Brazilian BBQ at Fogo de Chão',
          icon: '🥩',
          aiReason: 'Saved posts about Brazilian cuisine'
        }
      ]
    },
    {
      day: 3,
      title: 'Grand Prix Race Day',
      location: 'Interlagos Circuit',
      activities: [
        {
          time: '10:00 AM',
          title: 'Pre-Race Paddock Access',
          description: 'Grid walk, driver interviews, champagne brunch',
          icon: '🏆',
          aiReason: 'VIP F1 experience matching your viewing patterns'
        },
        {
          time: '2:00 PM',
          title: 'Brazilian Grand Prix',
          description: 'VIP suite with live timing and radio access',
          icon: '🏎️',
          aiReason: 'Peak F1 interest based on ESPN data'
        },
        {
          time: '6:00 PM',
          title: 'Victory Celebration',
          description: 'Post-race party with F1 personalities',
          icon: '🍾',
          aiReason: 'Premium networking opportunity'
        }
      ]
    },
    {
      day: 4,
      title: 'Flight to Florianópolis',
      location: 'Travel Day',
      activities: [
        {
          time: '11:00 AM',
          title: 'Fly to Florianópolis',
          description: 'Short 1-hour flight to beach paradise',
          icon: '✈️',
          aiReason: 'Transition to surf adventure'
        },
        {
          time: '2:00 PM',
          title: 'Beach Hotel Check-in',
          description: 'Oceanfront boutique resort at Joaquina Beach',
          icon: '🏖️',
          aiReason: 'Following 12 surf & beach lifestyle accounts'
        },
        {
          time: '5:00 PM',
          title: 'Sunset Surf Session',
          description: 'Private surf lesson with local pro',
          icon: '🏄',
          aiReason: 'Your Instagram surf content interest'
        }
      ]
    },
    {
      day: 5,
      title: 'Surf & Culture',
      location: 'Florianópolis',
      activities: [
        {
          time: '7:00 AM',
          title: 'Dawn Patrol Surfing',
          description: 'Morning surf session at Joaquina Beach',
          icon: '🌊',
          aiReason: 'Engaged with surf lifestyle content'
        },
        {
          time: '12:00 PM',
          title: 'Brazilian Cooking Class',
          description: 'Learn to make moqueca and caipirinhas',
          icon: '👨‍🍳',
          aiReason: 'Food culture interest from saved posts'
        },
        {
          time: '4:00 PM',
          title: 'Beach Culture Tour',
          description: 'Explore local surf shops and beach culture',
          icon: '🛍️',
          aiReason: 'Lifestyle brand engagement on Instagram'
        },
        {
          time: '7:00 PM',
          title: 'Beachfront Seafood Dinner',
          description: 'Fresh catch with bossa nova live music',
          icon: '🦞',
          aiReason: 'Bossa nova tracks in your Spotify rotation'
        }
      ]
    }
  ];

  const selectedItinerary = itinerary.find(d => d.day === selectedDay) || itinerary[0];

  return (
    <div className="min-h-screen flex flex-col p-6 relative overflow-hidden pb-24">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto py-8">
        {/* Header */}
        <div className="glass-effect rounded-3xl p-8 mb-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-4xl">🏎️</span>
                <div className="glass-effect rounded-full px-4 py-1 flex items-center gap-2">
                  <span className="text-xl">✨</span>
                  <span className="font-bold">{tripData.matchScore}% Match</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {tripData.title}
              </h1>
              <p className="text-gray-400 text-lg italic mb-4">{tripData.subtitle}</p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <span>{tripData.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{tripData.dates}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-400 mb-1">Total Price</div>
              <div className="text-4xl font-bold text-green-400">{tripData.price}</div>
              <div className="text-xs text-gray-500 mt-1">per person</div>
            </div>
          </div>

          {/* AI Insights */}
          <div className="glass-effect rounded-2xl p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
            <div className="flex items-start gap-3">
              <span className="text-3xl">🤖</span>
              <div>
                <h3 className="font-semibold mb-2 text-blue-300">AI Personalization Insights</h3>
                <p className="text-sm text-gray-300">
                  This trip combines your passion for F1 racing (247 ESPN views of São Paulo GP content),
                  Brazilian music culture (247 samba & bossa nova tracks), and surf lifestyle
                  (following 12 surf accounts). We've crafted a seamless journey from adrenaline-packed
                  racing to zen beach vibes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Day selector */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Your Itinerary</h2>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {itinerary.map((day) => (
              <button
                key={day.day}
                onClick={() => setSelectedDay(day.day)}
                className={`
                  flex-shrink-0 px-6 py-3 rounded-xl font-semibold transition-all duration-300
                  ${selectedDay === day.day
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 scale-105'
                    : 'glass-effect hover:scale-105'
                  }
                `}
              >
                Day {day.day}
              </button>
            ))}
          </div>
        </div>

        {/* Selected day details */}
        <div className="glass-effect rounded-3xl p-8">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-3xl font-bold">Day {selectedItinerary.day}</h3>
              <div className="glass-effect rounded-full px-4 py-1 text-sm">
                {selectedItinerary.location}
              </div>
            </div>
            <p className="text-xl text-gray-300">{selectedItinerary.title}</p>
          </div>

          {/* Activities */}
          <div className="space-y-6">
            {selectedItinerary.activities.map((activity, index) => (
              <div
                key={index}
                className="relative pl-12 pb-6 border-l-2 border-blue-500/30 last:border-l-0 last:pb-0"
              >
                {/* Time marker */}
                <div className="absolute left-0 top-0 transform -translate-x-1/2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center font-bold text-sm">
                    {activity.icon}
                  </div>
                </div>

                {/* Activity card */}
                <div className="glass-effect rounded-2xl p-6 ml-6 hover:scale-102 transition-transform duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="text-sm text-blue-400 font-semibold mb-1">{activity.time}</div>
                      <h4 className="text-xl font-bold mb-2">{activity.title}</h4>
                      <p className="text-gray-300">{activity.description}</p>
                    </div>
                  </div>

                  {/* AI reasoning */}
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                      </svg>
                      <p className="text-sm text-gray-400 italic">
                        AI selected: {activity.aiReason}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="fixed bottom-0 left-0 right-0 glass-effect border-t border-white/10 p-6 z-20">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-400">Ready to make it real?</div>
              <div className="text-2xl font-bold">{tripData.price} <span className="text-sm text-gray-400">per person</span></div>
            </div>
            <div className="flex gap-4">
              <button className="px-8 py-4 rounded-full font-bold glass-effect hover:scale-105 transition-transform">
                Customize Trip
              </button>
              <button className="px-8 py-4 rounded-full font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
