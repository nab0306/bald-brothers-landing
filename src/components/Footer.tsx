import React from 'react';
import { Instagram, Globe, MapPin, Clock, ExternalLink, Heart } from 'lucide-react';
import { Language } from '../types';

interface FooterProps {
  language: Language;
  onScrollToSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ language, onScrollToSection }) => {
  const isEn = language === 'en';

  return (
    <footer className="bg-[#140d09] border-t border-[#d09e59]/30 pt-16 pb-12 text-[#e8dcc4]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-[#d09e59] bg-[#211710] p-0.5">
                <img
                  src={`${import.meta.env.BASE_URL}assets/video_frames/frame_5s.jpg`}
                  alt="Bald Brothers"
                  className="w-full h-full object-cover scale-150"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-['Cinzel'] tracking-wider text-lg font-bold text-[#e6c587] block leading-tight">
                  BALD BROTHERS
                </span>
                <span className="text-[10px] tracking-widest text-[#d09e59] uppercase">
                  Marbella · Sports Bar
                </span>
              </div>
            </div>

            <p className="font-['Oswald'] text-xs tracking-wider text-[#d09e59] uppercase">
              "COME FOR THE GAME. STAY FOR THE BROTHERHOOD."
            </p>

            <p className="text-xs text-[#e8dcc4]/70 leading-relaxed font-['Inter']">
              {isEn
                ? 'Commercial proposal and interactive sales funnel prepared for the leadership of Bald Brothers Marbella.'
                : 'Комерційна пропозиція та інтерактивна воронка продажів для керівництва Bald Brothers Marbella.'}
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#d09e59] mb-4 font-['Montserrat']">
              {isEn ? 'Presentation Sections' : 'Розділи презентації'}
            </h4>
            <ul className="space-y-2 text-xs font-['Inter']">
              <li>
                <button
                  onClick={() => onScrollToSection('video-offer')}
                  className="hover:text-[#e6c587] transition-colors cursor-pointer"
                >
                  {isEn ? 'Embedded Video Proposal' : 'Відео-пропозиція'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('simulator')}
                  className="hover:text-[#e6c587] transition-colors cursor-pointer"
                >
                  {isEn ? 'Live Telegram Bot Sandbox' : 'Симулятор Telegram-бота'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('pricing')}
                  className="hover:text-[#e6c587] transition-colors cursor-pointer"
                >
                  {isEn ? 'Rates & Service Packages' : 'Тарифна сітка'}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Official Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#d09e59] mb-4 font-['Montserrat']">
              {isEn ? 'Official Bar Channels' : 'Офіційні канали закладу'}
            </h4>
            <ul className="space-y-2.5 text-xs font-['Inter']">
              <li>
                <a
                  href="https://bald-brothers.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#e6c587] transition-colors inline-flex items-center gap-1.5"
                >
                  <Globe className="w-3.5 h-3.5 text-[#d09e59]" />
                  <span>bald-brothers.com</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#e6c587] transition-colors inline-flex items-center gap-1.5"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#d09e59]" />
                  <span>@bald.brothers.marbella</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </li>
              <li className="flex items-center gap-1.5 text-[#e8dcc4]/70">
                <Clock className="w-3.5 h-3.5 text-[#d09e59]" />
                <span>Tue-Sun 16:00 - 24:00 (Mon closed)</span>
              </li>
              <li className="flex items-center gap-1.5 text-[#e8dcc4]/70">
                <MapPin className="w-3.5 h-3.5 text-[#d09e59]" />
                <span>Marbella, Costa del Sol, Spain</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#d09e59] mb-4 font-['Montserrat']">
              {isEn ? 'Contact' : 'Контакти'}
            </h4>
            <ul className="space-y-3 text-xs font-['Inter']">
              <li>
                <div className="text-[11px] text-[#e8dcc4]/60 mb-0.5">Email</div>
                <a
                  href="mailto:nata.aibots.ua@gmail.com"
                  className="hover:text-[#e6c587] transition-colors break-all text-[#e8dcc4]/90"
                >
                  nata.aibots.ua@gmail.com
                </a>
              </li>
              <li>
                <div className="text-[11px] text-[#e8dcc4]/60 mb-0.5">Telegram</div>
                <a
                  href="https://t.me/nata_ai_bots"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#e6c587] transition-colors inline-flex items-center gap-1.5 text-[#e8dcc4]/90"
                >
                  <span>t.me/nata_ai_bots</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </li>
              <li>
                <div className="text-[11px] text-[#e8dcc4]/60 mb-0.5">{isEn ? 'Telegram manager' : 'Telegram-менеджер'}</div>
                <a
                  href="https://t.me/nata_nab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#e6c587] transition-colors inline-flex items-center gap-1.5 text-[#e6c587] font-medium"
                >
                  <span>@nata_nab</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#332115] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#e8dcc4]/60">
          <p>
            © {new Date().getFullYear()} Bald Brothers Marbella. Dedicated Commercial Pitch & Landing System.
          </p>
          <p className="flex items-center gap-1">
            <span>Designed for hospitality growth in Marbella</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
