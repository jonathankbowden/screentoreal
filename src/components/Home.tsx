import { useState } from 'react';

interface HomeProps {
  onContinue: () => void;
}

export default function Home({ onContinue }: HomeProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        {/* Expedia Logo */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-yellow-400 tracking-tight">
            Expedia
          </h1>
        </div>

        {/* Hero Section */}
        <div className="space-y-6">
          <h2 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent leading-tight">
            Turn Your Screen Life
            <br />
            Into Real Life
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Connect your digital world. Let AI discover your passions.
            <br />
            Get trips designed just for you.
          </p>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 mb-12">
          {[
            { icon: '🎵', label: 'Spotify', color: 'from-green-400 to-green-600' },
            { icon: '📺', label: 'Netflix', color: 'from-red-400 to-red-600' },
            { icon: '📸', label: 'Instagram', color: 'from-pink-400 to-purple-600' },
            { icon: '🏆', label: 'ESPN', color: 'from-yellow-400 to-orange-600' }
          ].map((app) => (
            <div
              key={app.label}
              className="glass-effect rounded-2xl p-6 hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl mb-2">{app.icon}</div>
              <div className="text-sm font-semibold text-gray-300">{app.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="pt-8">
          <button
            onClick={onContinue}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`
              relative group px-12 py-5 rounded-full font-bold text-lg
              bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
              hover:shadow-2xl hover:shadow-purple-500/50
              transform transition-all duration-300
              ${isHovered ? 'scale-110' : 'scale-100'}
            `}
          >
            <span className="relative z-10 flex items-center gap-3">
              Discover Your Perfect Trip
              <svg
                className={`w-6 h-6 transition-transform duration-300 ${isHovered ? 'translate-x-2' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
          </button>
        </div>

        {/* Trust indicators */}
        <div className="pt-12 flex items-center justify-center gap-8 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Secure & Private
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
            Trusted by Millions
          </div>
        </div>
      </div>
    </div>
  );
}
