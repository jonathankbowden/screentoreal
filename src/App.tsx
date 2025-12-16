import { useState } from 'react';
import Home from './components/Home';
import Connect from './components/Connect';
import Analysis from './components/Analysis';
import Suggestions from './components/Suggestions';
import TripDetails from './components/TripDetails';

type Screen = 'home' | 'connect' | 'analysis' | 'suggestions' | 'details';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [selectedTripId, setSelectedTripId] = useState<string>('');

  const handleSelectTrip = (tripId: string) => {
    setSelectedTripId(tripId);
    setCurrentScreen('details');
  };

  return (
    <div className="relative min-h-screen">
      <div className="transition-opacity duration-500">
        {currentScreen === 'home' && (
          <Home onContinue={() => setCurrentScreen('connect')} />
        )}

        {currentScreen === 'connect' && (
          <Connect onContinue={() => setCurrentScreen('analysis')} />
        )}

        {currentScreen === 'analysis' && (
          <Analysis onComplete={() => setCurrentScreen('suggestions')} />
        )}

        {currentScreen === 'suggestions' && (
          <Suggestions onSelectTrip={handleSelectTrip} />
        )}

        {currentScreen === 'details' && (
          <TripDetails tripId={selectedTripId} />
        )}
      </div>
    </div>
  );
}

export default App;
