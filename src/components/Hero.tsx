import React from 'react';
import { Play, Sparkles, ShieldCheck, Clock, Users, ArrowDown, ExternalLink } from 'lucide-react';
import { Language } from '../types';

interface HeroProps {
  language: Language;
  onPlayVideo: () => void;
  onExploreBot: () => void;
  onOpenPilot: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  language,
  onPlayVideo,
  onExploreBot,
  onOpenPilot,
}) => {
  const isEn = language === 'en';

  return (
    <section id="hero" className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden">
      {/* Ambient background glow & radial highlights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-[#d09e59]/15 via-[#332115]/30 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 right-[-100px] w-80 h-80 bg-[#e6c587]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brand Kicker / Slogan from Brandbook */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#332115]/80 border border-[#d09e59]/40 text-[#e6c587] text-xs font-semibold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d09e59]" />
            <span>Bald Brothers Marbella · B2B Proposal</span>
          </div>

          <a
            href="https://bald-brothers.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-[#e8dcc4]/70 hover:text-[#e6c587] transition-colors"
          >
            <span>bald-brothers.com</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <p className="font-['Oswald'] text-sm sm:text-base tracking-[0.25em] text-[#d09e59] uppercase mb-3">
            {isEn ? 'COME FOR THE GAME. STAY FOR THE BROTHERHOOD.' : 'ПРИХОДЬ НА ГРУ. ЗАЛИШАЙСЯ З БРАТЕРСТВОМ.'}
          </p>

          <h1 className="font-['Cinzel'] text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#f7f3ea] leading-[1.15] mb-6">
            {isEn ? (
              <>
                Telegram as a Pub Sales Showcase & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d09e59] via-[#e6c587] to-[#d09e59]">24/7 AI-Assistant</span>
              </>
            ) : (
              <>
                Telegram як вітрина продажів пабу та <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d09e59] via-[#e6c587] to-[#d09e59]">AI-асистент 24/7</span>
              </>
            )}
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-[#e8dcc4]/85 font-normal max-w-3xl mx-auto leading-relaxed font-['Inter']">
            {isEn
              ? 'Your bar works 8 hours a day, but guests search for tables and match broadcasts 24/7. Turn every Instagram view and El Clásico rush into guaranteed table bookings without losing a single guest.'
              : 'Ваш бар працює 8 годин на день, але гості шукають столики та трансляції матчів 24/7. Перетворіть кожен перегляд в Instagram на гарантовану бронь столика без втрати жодного клієнта.'}
          </p>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={onPlayVideo}
            className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-[#d09e59] to-[#e6c587] hover:from-[#e0b475] hover:to-[#eed09d] text-[#140d09] font-bold rounded-xl shadow-lg shadow-[#d09e59]/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-3 cursor-pointer font-['Montserrat'] text-sm tracking-wide"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>{isEn ? 'Watch Video Proposal (2 min)' : 'Дивитися відео-пропозицію (2 хв)'}</span>
          </button>

          <button
            onClick={onExploreBot}
            className="w-full sm:w-auto px-7 py-3.5 bg-[#332115]/90 hover:bg-[#422b1c] text-[#e6c587] border border-[#d09e59]/50 hover:border-[#e6c587] font-semibold rounded-xl transition-all flex items-center justify-center gap-2.5 cursor-pointer font-['Montserrat'] text-sm tracking-wide"
          >
            <Sparkles className="w-4 h-4 text-[#e6c587]" />
            <span>{isEn ? 'Test Live Bot Simulator' : 'Спробувати демо-симулятор'}</span>
          </button>
        </div>

        {/* 4-Item Proof Metrics Strip (From Video Audit) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="p-4 sm:p-5 rounded-xl bg-[#26180f]/80 border border-[#d09e59]/25 hover:border-[#d09e59]/50 transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-[#332115] flex items-center justify-center text-[#e6c587]">
                <Clock className="w-4 h-4" />
              </div>
              <span className="text-xl sm:text-2xl font-bold font-['Montserrat'] text-[#f7f3ea] tabular-nums">24 / 7</span>
            </div>
            <p className="text-xs text-[#e8dcc4]/75 font-medium leading-snug">
              {isEn ? 'Automated bookings while the bar is closed' : 'Прийом броней, коли паб зачинений'}
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-[#26180f]/80 border border-[#d09e59]/25 hover:border-[#d09e59]/50 transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-[#332115] flex items-center justify-center text-[#e6c587]">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="text-xl sm:text-2xl font-bold font-['Montserrat'] text-[#f7f3ea] tabular-nums">0%</span>
            </div>
            <p className="text-xs text-[#e8dcc4]/75 font-medium leading-snug">
              {isEn ? 'Sales commission · Flat bot subscription' : 'Комісії з продажів · Фіксована підписка'}
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-[#26180f]/80 border border-[#d09e59]/25 hover:border-[#d09e59]/50 transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-[#332115] flex items-center justify-center text-[#e6c587]">
                <Users className="w-4 h-4" />
              </div>
              <span className="text-xl sm:text-2xl font-bold font-['Montserrat'] text-[#f7f3ea] tabular-nums">100%</span>
            </div>
            <p className="text-xs text-[#e8dcc4]/75 font-medium leading-snug">
              {isEn ? 'Direct post notifications to your regulars' : 'Пряма доставка анонсів кожному гостю'}
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-[#26180f]/80 border border-[#d09e59]/25 hover:border-[#d09e59]/50 transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-[#332115] flex items-center justify-center text-[#e6c587]">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="text-xl sm:text-2xl font-bold font-['Montserrat'] text-[#f7f3ea] tabular-nums">&lt; 3s</span>
            </div>
            <p className="text-xs text-[#e8dcc4]/75 font-medium leading-snug">
              {isEn ? 'Instant answers in English & Spanish' : 'Миттєва відповідь мовою гостя'}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
