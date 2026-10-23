/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VideoPlayer } from './components/VideoPlayer';
import { BotSimulator } from './components/BotSimulator';
import { RoiCalculator } from './components/RoiCalculator';
import { PricingTiers } from './components/PricingTiers';
import { PilotSteps } from './components/PilotSteps';
import { PilotModal } from './components/PilotModal';
import { Footer } from './components/Footer';
import { Language } from './types';

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [isPilotModalOpen, setIsPilotModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<'start' | 'booking' | 'showcase'>('booking');

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePlayVideoFromHero = () => {
    scrollToSection('video-offer');
  };

  const handleOpenPilotWithTier = (tier: 'start' | 'booking' | 'showcase') => {
    setSelectedTier(tier);
    setIsPilotModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#211710] text-[#e8dcc4] font-['Inter'] selection:bg-[#d09e59] selection:text-[#140d09]">
      {/* Top Bar Navigation */}
      <Navbar
        language={language}
        onLanguageChange={setLanguage}
        onOpenPilotModal={() => setIsPilotModalOpen(true)}
        onScrollToSection={scrollToSection}
      />

      <main>
        {/* Hero Section */}
        <Hero
          language={language}
          onPlayVideo={handlePlayVideoFromHero}
          onExploreBot={() => scrollToSection('simulator')}
          onOpenPilot={() => setIsPilotModalOpen(true)}
        />

        {/* Embedded Video Player with Custom Controls & Chapters */}
        <VideoPlayer
          language={language}
        />

        {/* Live Interactive Telegram Bot Sandbox Simulator */}
        <BotSimulator
          language={language}
          onOpenPilot={() => setIsPilotModalOpen(true)}
        />

        {/* Financial ROI & Lost Revenue Recovery Calculator */}
        <RoiCalculator
          language={language}
          onOpenPilot={() => setIsPilotModalOpen(true)}
        />

        {/* Three Pricing Tiers (Start, Booking, Showcase) */}
        <PricingTiers
          language={language}
          onSelectTier={handleOpenPilotWithTier}
        />

        {/* Onboarding & 4-Week Pilot Steps */}
        <PilotSteps
          language={language}
          onOpenPilot={() => setIsPilotModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        language={language}
        onScrollToSection={scrollToSection}
      />

      {/* Lead Capture & 15-Minute Demo Booking Modal */}
      <PilotModal
        isOpen={isPilotModalOpen}
        onClose={() => setIsPilotModalOpen(false)}
        language={language}
        preselectedTier={selectedTier}
      />
    </div>
  );
}
