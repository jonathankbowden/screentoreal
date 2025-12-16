import { useState } from 'react';

interface ConnectProps {
  onContinue: () => void;
}

interface AppConnection {
  id: string;
  name: string;
  icon: string;
  color: string;
  gradient: string;
  connected: boolean;
  description: string;
}

export default function Connect({ onContinue }: ConnectProps) {
  const [apps, setApps] = useState<AppConnection[]>([
    {
      id: 'spotify',
      name: 'Spotify',
      icon: '🎵',
      color: 'from-green-400 to-green-600',
      gradient: 'hover:from-green-500 hover:to-green-700',
      connected: false,
      description: 'Your music tastes reveal destinations'
    },
    {
      id: 'netflix',
      name: 'Netflix',
      icon: '📺',
      color: 'from-red-400 to-red-600',
      gradient: 'hover:from-red-500 hover:to-red-700',
      connected: false,
      description: 'Shows you watch inspire adventures'
    },
    {
      id: 'instagram',
      name: 'Instagram',
      icon: '📸',
      color: 'from-pink-400 via-purple-400 to-orange-400',
      gradient: 'hover:from-pink-500 hover:via-purple-500 hover:to-orange-500',
      connected: false,
      description: 'Your interests guide your journey'
    },
    {
      id: 'espn',
      name: 'ESPN',
      icon: '🏆',
      color: 'from-yellow-400 to-red-600',
      gradient: 'hover:from-yellow-500 hover:to-red-700',
      connected: false,
      description: 'Sports events become experiences'
    }
  ]);

  const toggleConnection = (id: string) => {
    setApps(apps.map(app =>
      app.id === id ? { ...app, connected: !app.connected } : app
    ));
  };

  const allConnected = apps.every(app => app.connected);
  const connectedCount = apps.filter(app => app.connected).length;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="relative z-10 max-w-5xl w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="glass-effect rounded-full px-6 py-2 text-sm font-semibold text-blue-300">
              Step 1 of 3
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Connect Your World
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Link your favorite apps so our AI can understand what truly excites you
          </p>
        </div>

        {/* Progress indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-sm font-semibold text-gray-400">
              {connectedCount} of {apps.length} connected
            </span>
          </div>
          <div className="w-full max-w-md mx-auto h-2 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 ease-out"
              style={{ width: `${(connectedCount / apps.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* App connection cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {apps.map((app) => (
            <div
              key={app.id}
              className={`
                glass-effect rounded-3xl p-8 cursor-pointer
                transform transition-all duration-300
                ${app.connected ? 'ring-2 ring-white/30 scale-105' : 'hover:scale-102'}
              `}
              onClick={() => toggleConnection(app.id)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className={`text-5xl p-4 rounded-2xl bg-gradient-to-br ${app.color}`}>
                    {app.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{app.name}</h3>
                    <p className="text-sm text-gray-400">{app.description}</p>
                  </div>
                </div>

                {/* Connection toggle */}
                <div className={`
                  relative w-14 h-14 rounded-full flex items-center justify-center
                  ${app.connected ? 'bg-gradient-to-br from-green-400 to-green-600' : 'bg-gray-700'}
                  transition-all duration-300
                `}>
                  {app.connected ? (
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  )}
                </div>
              </div>

              {app.connected && (
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 text-sm text-green-400">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Connected & Secured
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Continue button */}
        <div className="text-center">
          <button
            onClick={onContinue}
            disabled={!allConnected}
            className={`
              px-12 py-5 rounded-full font-bold text-lg
              transition-all duration-300
              ${allConnected
                ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 cursor-pointer'
                : 'bg-gray-700 text-gray-500 cursor-not-allowed opacity-50'
              }
            `}
          >
            {allConnected ? (
              <span className="flex items-center gap-3">
                Continue to AI Analysis
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            ) : (
              `Connect all apps to continue (${connectedCount}/${apps.length})`
            )}
          </button>

          {!allConnected && (
            <p className="mt-4 text-sm text-gray-500">
              Click on each app card to connect
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
