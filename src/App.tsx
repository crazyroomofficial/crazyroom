import React, { useState } from 'react';
import Terminal from './components/Terminal';
import IntroSequence from './components/IntroSequence/IntroSequence';
import LandingPage from './components/LandingPage';
import './styles/animations.css';

function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [showIntro, setShowIntro] = useState(false);

  const handleStart = () => {
    setShowLanding(false);
    setShowIntro(true);
  };

  if (showLanding) {
    return <LandingPage onStart={handleStart} />;
  }

  if (showIntro) {
    return <IntroSequence onComplete={() => setShowIntro(false)} />;
  }

  return <Terminal />;
}

export default App;