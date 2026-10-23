import React from 'react';
import { Check, Star, Shield, ArrowRight, Zap, Award } from 'lucide-react';
import { Language, PricingTier } from '../types';
import { pricingTiersData } from '../data/content';

interface PricingTiersProps {
  language: Language;
  onSelectTier: (tierId: 'start' | 'booking' | 'showcase') => void;
}

export const PricingTiers: React.FC<PricingTiersProps> = ({ language, onSelectTier }) => {
  const isEn = language === 'en';
  const tiers = pricingTiersData[language];

  return (
    <section id="pricing" className="py-20 bg-[#18100a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#332115] border border-[#d09e59]/30 text-[#e6c587] text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-[#d09e59]" />
            <span>{isEn ? 'Three Service Levels' : 'Три рівні тарифів'}</span>
          </div>

          <h2 className="font-['Cinzel'] text-2xl sm:text-4xl font-bold text-[#f7f3ea] mb-4">
            {isEn ? 'From Quick FAQ to Full Sales Showcase' : 'Від базових відповідей до повної вітрини продажів'}
          </h2>

          <p className="text-sm sm:text-base text-[#e8dcc4]/80 font-['Inter']">
            {isEn
              ? 'Transparent conditions: One-time setup + flat monthly maintenance. Zero percent commission from bookings and bar checks.'
              : 'Прозорі умови: Разове налаштування + фіксована щомісячна підтримка. 0% комісії з замовлень та чеків бару.'}
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto mb-12">
          {tiers.map((tier) => {
            const isRec = tier.recommended;

            return (
              <div
                key={tier.id}
                className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all relative ${
                  isRec
                    ? 'bg-gradient-to-b from-[#332115] via-[#26180f] to-[#1c120b] border-2 border-[#d09e59] shadow-2xl shadow-[#d09e59]/20 transform lg:-translate-y-2'
                    : 'bg-[#211710] border border-[#d09e59]/30 hover:border-[#d09e59]/60'
                }`}
              >
                {/* Recommended Badge */}
                {isRec && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#d09e59] to-[#e6c587] text-[#140d09] text-[11px] font-extrabold uppercase tracking-widest shadow-md flex items-center gap-1.5 font-['Montserrat']">
                    <Star className="w-3 h-3 fill-current" />
                    <span>{tier.highlightText || (isEn ? 'RECOMMENDED' : 'РЕКОМЕНДОВАНИЙ')}</span>
                  </div>
                )}

                <div>
                  {/* Tier Title & Subtitle */}
                  <div className="border-b border-[#332115] pb-6 mb-6">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#d09e59]">
                      Tier · 0{tier.id === 'start' ? '1' : tier.id === 'booking' ? '2' : '3'}
                    </span>
                    <h3 className="font-['Cinzel'] text-2xl font-bold text-[#f7f3ea] mt-1 mb-2">
                      {tier.name}
                    </h3>
                    <p className="text-xs text-[#e8dcc4]/70 font-medium font-['Oswald']">
                      {tier.subtitle}
                    </p>

                    <div className="mt-4 pt-3 flex items-baseline gap-2">
                      <span className="text-xl sm:text-2xl font-bold font-['Montserrat'] text-transparent bg-clip-text bg-gradient-to-r from-[#d09e59] to-[#e6c587]">
                        {isEn ? 'Negotiable in Euros' : 'Договірна в євро'}
                      </span>
                    </div>
                    <span className="text-[11px] text-[#e8dcc4]/60 block mt-1">
                      {isEn ? 'Setup + flat monthly subscription' : 'Налаштування + фіксована підписка'}
                    </span>
                  </div>

                  {/* Summary note */}
                  <p className="text-xs text-[#e8dcc4]/85 italic mb-6">
                    "{tier.summary}"
                  </p>

                  {/* Feature Checklist */}
                  <ul className="space-y-3 mb-8 text-xs sm:text-sm text-[#e8dcc4]/90 font-['Inter']">
                    {tier.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <div className={`w-4 h-4 rounded-full mt-0.5 shrink-0 flex items-center justify-center ${
                          isRec ? 'bg-[#d09e59] text-[#140d09]' : 'bg-[#332115] text-[#d09e59]'
                        }`}>
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA */}
                <div>
                  <button
                    onClick={() => onSelectTier(tier.id)}
                    className={`w-full py-3.5 px-5 rounded-xl font-bold text-xs sm:text-sm tracking-wide transition-all flex items-center justify-center gap-2 cursor-pointer font-['Montserrat'] ${
                      isRec
                        ? 'bg-gradient-to-r from-[#d09e59] to-[#e6c587] hover:from-[#e0b475] hover:to-[#eed09d] text-[#140d09] shadow-lg shadow-[#d09e59]/25 transform hover:-translate-y-0.5'
                        : 'bg-[#332115] hover:bg-[#422b1c] text-[#e6c587] hover:text-white border border-[#d09e59]/40'
                    }`}
                  >
                    <span>{isEn ? `Select ${tier.name} Package` : `Обрати пакет ${tier.name}`}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Disclaimer Bar from Video Slide 90s */}
        <div className="bg-[#211710] border border-[#d09e59]/25 rounded-2xl p-5 text-center max-w-4xl mx-auto">
          <p className="text-xs sm:text-sm text-[#e8dcc4]/80 font-['Inter']">
            {isEn
              ? '★ Each rate includes: initial setup & training, custom menu integration, and continuous bot operation. No hidden fees or transaction cuts.'
              : '★ Кожен тариф включає: первинне налаштування, внесення меню пабу та безперебійну підтримку бота. Ніяких прихованих платежів.'}
          </p>
        </div>

      </div>
    </section>
  );
};
