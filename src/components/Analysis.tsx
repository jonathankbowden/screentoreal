import { useEffect, useState } from 'react';

interface AnalysisProps {
  onComplete: () => void;
}

interface AnalysisStep {
  id: number;
  text: string;
  icon: string;
  detail: string;
  completed: boolean;
}

export default function Analysis({ onComplete }: AnalysisProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState<AnalysisStep[]>([
    {
      id: 1,
      text: 'Analyzing Spotify listening history',
      icon: '🎵',
      detail: 'Found 247 Brazilian samba & bossa nova tracks',
      completed: false
    },
    {
      id: 2,
      text: 'Processing Netflix watch patterns',
      icon: '📺',
      detail: 'Detected interest in Formula 1: Drive to Survive',
      completed: false
    },
    {
      id: 3,
      text: 'Reviewing Instagram interactions',
      icon: '📸',
      detail: 'Following 12 surf & beach lifestyle accounts',
      completed: false
    },
    {
      id: 4,
      text: 'Examining ESPN viewing data',
      icon: '🏆',
      detail: 'High engagement with F1 and São Paulo GP content',
      completed: false
    },
    {
      id: 5,
      text: 'Synthesizing travel preferences',
      icon: '🤖',
      detail: 'Matching patterns with 10,000+ destinations',
      completed: false
    }
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < steps.length) {
          setSteps(current =>
            current.map((step, idx) =>
              idx === prev ? { ...step, completed: true } : step
            )
          );
          return prev + 1;
        }
        return prev;
      });
    }, 2000);

    return () => clearInterval(timer);
  }, [steps.length]);

  useEffect(() => {
    if (currentStep === steps.length) {
      const completeTimer = setTimeout(() => {
        onComplete();
      }, 1500);
      return () => clearTimeout(completeTimer);
    }
  }, [currentStep, steps.length, onComplete]);

  const progress = (currentStep / steps.length) * 100;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-4xl w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="glass-effect rounded-full px-6 py-2 text-sm font-semibold text-purple-300">
              Step 2 of 3
            </div>
          </div>

          {/* AI Brain Animation */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 animate-pulse-slow flex items-center justify-center">
                <div className="w-28 h-28 rounded-full bg-slate-900 flex items-center justify-center">
                  <span className="text-6xl">🤖</span>
                </div>
              </div>
              {/* Orbiting particles */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '3s' }}>
                <div className="absolute top-0 left-1/2 w-3 h-3 bg-blue-400 rounded-full -translate-x-1/2"></div>
              </div>
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '4s', animationDirection: 'reverse' }}>
                <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-purple-400 rounded-full -translate-x-1/2"></div>
              </div>
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '5s' }}>
                <div className="absolute top-1/2 right-0 w-3 h-3 bg-pink-400 rounded-full -translate-y-1/2"></div>
              </div>
            </div>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            AI is Analyzing
          </h2>
          <p className="text-xl text-gray-300">
            Discovering patterns in your digital life
          </p>
        </div>

        {/* Progress bar */}
        <div className="mb-12">
          <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden mb-2">
            <div
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-500 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
            </div>
          </div>
          <div className="text-center text-sm text-gray-400">
            {Math.round(progress)}% Complete
          </div>
        </div>

        {/* Analysis steps */}
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`
                glass-effect rounded-2xl p-6
                transform transition-all duration-500
                ${index <= currentStep ? 'opacity-100 translate-x-0' : 'opacity-30 translate-x-4'}
                ${step.completed ? 'ring-2 ring-green-400/30' : ''}
              `}
            >
              <div className="flex items-center gap-4">
                {/* Icon */}
                <div className={`
                  text-4xl w-16 h-16 rounded-xl flex items-center justify-center
                  ${step.completed ? 'bg-green-500/20' : 'bg-gray-700/50'}
                  transition-all duration-500
                `}>
                  {step.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-semibold">{step.text}</h3>
                    {index === currentStep && !step.completed && (
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    )}
                  </div>
                  <p className={`
                    text-sm transition-all duration-500
                    ${step.completed ? 'text-green-400' : 'text-gray-500'}
                  `}>
                    {step.detail}
                  </p>
                </div>

                {/* Status indicator */}
                <div className="w-12 h-12 flex items-center justify-center">
                  {step.completed ? (
                    <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : index === currentStep ? (
                    <div className="w-8 h-8 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom message */}
        {currentStep === steps.length && (
          <div className="mt-8 text-center animate-pulse">
            <p className="text-lg text-green-400 font-semibold">
              ✨ Analysis complete! Preparing your personalized trips...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
