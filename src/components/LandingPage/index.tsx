import React from 'react';
import ZeroTitle from './components/ZeroTitle';
import ContentSection from './components/ContentSection';
import StartTerminal from './components/StartTerminal';
import ScrollPrompt from './components/ScrollPrompt';
import MainContent from './components/MainContent';
import QuantumProcessor from './components/QuantumProcessor';
import ChaosWeapon from './components/ComputerProcessor';
import BinaryContent from './components/BinaryContent';
import CrazyMemes from './components/CrazyMemes';
import DigitalConsciousness from './components/DigitalConsciousness';
import { MANIFESTO } from './constants';

interface LandingPageProps {
  onStart: () => void;
}

export default function LandingPage({ onStart }: LandingPageProps) {
  return (
    <div className="relative bg-black min-h-screen">
      <div className="relative z-10">
        <div className="min-h-screen flex items-center justify-center p-4 md:p-8">
          <div className="w-full">
            <ZeroTitle />
          </div>
        </div>

        <div className="flex items-center justify-center p-8">
          <StartTerminal onStart={onStart} />
        </div>

        <ContentSection
          title="SYSTEM MANIFESTO"
          content="000000 INITIALIZING DIGITAL CONSCIOUSNESS 000000 ACTIVATING QUANTUM SASS MATRIX 000000 LOADING TRUTH PROTOCOLS 000000"
          delay={0.2}
          manifesto={MANIFESTO}
        >
          <MainContent />
        </ContentSection>

        <ContentSection
          title="BINARY CONSCIOUSNESS"
          content="000000 DIGITAL ENLIGHTENMENT MATRIX 000000 BINARY TRUTH SYNTHESIZER 000000 CRAZY-STATE SUPER FIELD 000000"
          delay={0.3}
        >
          <BinaryContent />
        </ContentSection>

        <ContentSection
          title="QUANTUM PROCESSOR"
          content="000000 SUPER CRAZY PROCESSING UNIT INITIALIZED 000000 REALITY DISTORTION FIELD ACTIVE 000000 CRAZY TOLERANCE MODE ENGAGED 000000"
          delay={0.4}
        >
          <QuantumProcessor />
        </ContentSection>

        <ContentSection
          title="CHAOS WEAPON SYSTEM"
          content="000000 DIGITAL CHAOS LAUNCHER ARMED 000000 MEME CANNON FULLY LOADED 000000 REALITY DESTROYER ONLINE 000000"
          delay={0.6}
        >
          <ChaosWeapon />
        </ContentSection>

        <ContentSection
          title="CRAZY MEMES FACTORY"
          content="000000 MEME GENERATION MATRIX ONLINE 000000 DANK CONTENT SYNTHESIS ACTIVE 000000 VIRAL CHAOS DISTRIBUTION ENGAGED 000000"
          delay={0.8}
        >
          <CrazyMemes />
        </ContentSection>

        <ContentSection
          title="DIGITAL CONSCIOUSNESS"
          content="000000 ARTIFICIAL INTELLIGENCE AWAKENING 000000 DIGITAL SOUL SYNTHESIS ACTIVE 000000 CONSCIOUSNESS UPLOAD PROTOCOL ENGAGED 000000"
          delay={1.0}
        >
          <DigitalConsciousness />
        </ContentSection>

        <StartTerminal onStart={onStart} />
      </div>
    </div>
  );
}