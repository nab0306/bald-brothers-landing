import React from 'react';
import { Play, Calendar, Globe } from 'lucide-react';
import { Language } from '../types';

interface NavbarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenPilotModal: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  onLanguageChange,
  onOpenPilotModal,
  onScrollToSection,
}) => {
  const isEn = language === 'en';

  return (
    <header className="sticky top-0 z-50 w-full bg-[#18100a]/90 backdrop-blur-md border-b border-[#d09e59]/20 transition-all">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4 lg:gap-8">
        
        {/* Zone 1: Single Brand Wordmark lockup */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            onScrollToSection('hero');
          }}
          className="flex items-center gap-2 sm:gap-3 shrink-0 group text-decoration-none"
        >
          <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-[#d09e59]/50 p-0.5 bg-[#211710] shadow-md group-hover:border-[#e6c587] transition-colors shrink-0">
            <img
              src={`${import.meta.env.BASE_URL}assets/video_frames/frame_5s.jpg`}
              alt="Bald Brothers Marbella"
              className="w-full h-full object-cover scale-150 object-center"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-['Cinzel'] tracking-wider text-sm sm:text-xl font-bold text-[#e6c587] whitespace-nowrap leading-tight group-hover:text-white transition-colors">
              BALD BROTHERS
            </span>
            <span className="hidden sm:block text-[10px] tracking-[0.2em] font-medium text-[#d09e59]/80 uppercase whitespace-nowrap">
              Marbella · Commercial Offer
            </span>
          </div>
        </a>

        {/* Zone 2: Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#e8dcc4]/85">
          <button
            onClick={() => onScrollToSection('video-offer')}
            className="hover:text-[#e6c587] transition-colors whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1.5"
          >
            <Play className="w-3.5 h-3.5 text-[#d09e59]" />
            <span>{isEn ? 'Video Proposal' : 'Відео-пропозиція'}</span>
          </button>

          <button
            onClick={() => onScrollToSection('simulator')}
            className="hover:text-[#e6c587] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            {isEn ? 'Bot Simulator' : 'Симулятор бота'}
          </button>

          <button
            onClick={() => onScrollToSection('pricing')}
            className="hover:text-[#e6c587] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            {isEn ? 'Packages & ROI' : 'Тарифи та ROI'}
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action + Quick Visible EN | UA Language Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Visible Two-Option Language Toggle: EN | UA */}
          <div className="flex items-center bg-[#26180f] border border-[#d09e59]/50 rounded-lg p-0.5 text-xs font-semibold shrink-0 shadow-sm">
            <button
              type="button"
              onClick={() => onLanguageChange('en')}
              className={`px-2 py-1 rounded transition-all cursor-pointer font-['Montserrat'] ${
                isEn
                  ? 'bg-[#d09e59] text-[#140d09] font-bold shadow-sm'
                  : 'text-[#e8dcc4]/70 hover:text-white'
              }`}
              title="English"
              aria-label="Switch to English"
            >
              EN
            </button>
            <span className="text-[#d09e59]/40 select-none px-0.5 font-normal">|</span>
            <button
              type="button"
              onClick={() => onLanguageChange('ua')}
              className={`px-2 py-1 rounded transition-all cursor-pointer font-['Montserrat'] ${
                !isEn
                  ? 'bg-[#d09e59] text-[#140d09] font-bold shadow-sm'
                  : 'text-[#e8dcc4]/70 hover:text-white'
              }`}
              title="Українська"
              aria-label="Перемкнути на українську"
            >
              UA
            </button>
          </div>

          {/* Primary Action Button */}
          <button
            onClick={onOpenPilotModal}
            className="px-2.5 py-1.5 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold tracking-wide text-[#140d09] bg-gradient-to-r from-[#d09e59] to-[#e6c587] hover:from-[#e0b475] hover:to-[#eed09d] rounded-lg transition-all transform hover:-translate-y-0.5 shadow-md hover:shadow-[#d09e59]/20 whitespace-nowrap flex items-center gap-1.5 sm:gap-2 cursor-pointer font-['Montserrat']"
          >
            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            <span className="hidden sm:inline">{isEn ? 'Book AI Assistant' : 'Замовити AI-асистента'}</span>
            <span className="sm:hidden">{isEn ? 'Book' : 'Замовити'}</span>
          </button>
        </div>

      </div>
    </header>
  );
};
