import React, { useState } from 'react';
import { Calculator, TrendingUp, Euro, HelpCircle, ArrowRight } from 'lucide-react';
import { Language } from '../types';

interface RoiCalculatorProps {
  language: Language;
  onOpenPilot: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ language, onOpenPilot }) => {
  const isEn = language === 'en';

  const [missedWeeklyCalls, setMissedWeeklyCalls] = useState(10);
  const [partySize, setPartySize] = useState(4);
  const [avgCheck, setAvgCheck] = useState(25);

  // Math
  const monthlyMissedInquiries = missedWeeklyCalls * 4.3;
  // Conservative estimate: 45% conversion into actual bookings
  const recoveredTablesPerMonth = Math.round(monthlyMissedInquiries * 0.45);
  const totalGuestsRecovered = recoveredTablesPerMonth * partySize;
  const monthlyRevenueRecovered = totalGuestsRecovered * avgCheck;
  const annualRevenueRecovered = monthlyRevenueRecovered * 12;

  return (
    <section id="roi-calculator" className="py-20 bg-[#211710] border-t border-[#d09e59]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#332115] border border-[#d09e59]/30 text-[#e6c587] text-xs font-semibold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5 text-[#d09e59]" />
            <span>{isEn ? 'Financial Return On Investment' : 'Розрахунок повернення інвестицій'}</span>
          </div>

          <h2 className="font-['Cinzel'] text-2xl sm:text-4xl font-bold text-[#f7f3ea] mb-4">
            {isEn ? 'How Much Revenue Can 24/7 Booking Recover?' : 'Скільки виручки повертає автобронювання 24/7?'}
          </h2>

          <p className="text-sm sm:text-base text-[#e8dcc4]/80 font-['Inter']">
            {isEn
              ? 'Based on Bald Brothers Marbella baseline numbers (€20-30 check per guest, 8-hour opening window, El Clásico rush).'
              : 'Розраховано на основі показників Bald Brothers Marbella (середній чек €20-30, 8 робочих годин, піки футбольних матчів).'}
          </p>
        </div>

        {/* Interactive Calculator Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#26180f] border-2 border-[#d09e59]/30 rounded-3xl p-6 sm:p-10 shadow-2xl max-w-5xl mx-auto">
          
          {/* Left Controls: Sliders */}
          <div className="lg:col-span-6 space-y-7">
            
            {/* Slider 1: Missed Calls / Inquiries per week */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs sm:text-sm font-semibold text-[#f7f3ea] font-['Montserrat']">
                  {isEn ? 'Missed calls & morning questions / week:' : 'Пропущені дзвінки та ранкові запитання / тиждень:'}
                </label>
                <span className="text-sm font-bold font-mono text-[#d09e59] bg-[#332115] px-2.5 py-1 rounded-lg border border-[#d09e59]/30 tabular-nums">
                  {missedWeeklyCalls} {isEn ? 'inquiries' : 'запитів'}
                </span>
              </div>
              <input
                type="range"
                min={3}
                max={35}
                step={1}
                value={missedWeeklyCalls}
                onChange={(e) => setMissedWeeklyCalls(parseInt(e.target.value))}
                className="w-full h-2 bg-[#422b1c] rounded-lg appearance-none cursor-pointer accent-[#d09e59]"
              />
              <div className="flex justify-between text-[10px] text-[#e8dcc4]/50 mt-1">
                <span>3 (Quiet weeks)</span>
                <span>20 (El Clásico / Premier League)</span>
                <span>35+</span>
              </div>
            </div>

            {/* Slider 2: Average party size */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs sm:text-sm font-semibold text-[#f7f3ea] font-['Montserrat']">
                  {isEn ? 'Average guests per match table:' : 'Середня кількість гостей за столиком:'}
                </label>
                <span className="text-sm font-bold font-mono text-[#d09e59] bg-[#332115] px-2.5 py-1 rounded-lg border border-[#d09e59]/30 tabular-nums">
                  {partySize} {isEn ? 'guests' : 'гостей'}
                </span>
              </div>
              <input
                type="range"
                min={2}
                max={8}
                step={1}
                value={partySize}
                onChange={(e) => setPartySize(parseInt(e.target.value))}
                className="w-full h-2 bg-[#422b1c] rounded-lg appearance-none cursor-pointer accent-[#d09e59]"
              />
              <div className="flex justify-between text-[10px] text-[#e8dcc4]/50 mt-1">
                <span>2 (Pairs)</span>
                <span>4 (Standard company)</span>
                <span>8 (Fan groups)</span>
              </div>
            </div>

            {/* Slider 3: Average check per guest */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs sm:text-sm font-semibold text-[#f7f3ea] font-['Montserrat']">
                  {isEn ? 'Average spend per guest (€):' : 'Середній чек на гостя (€):'}
                </label>
                <span className="text-sm font-bold font-mono text-[#d09e59] bg-[#332115] px-2.5 py-1 rounded-lg border border-[#d09e59]/30 tabular-nums">
                  €{avgCheck}
                </span>
              </div>
              <input
                type="range"
                min={15}
                max={45}
                step={1}
                value={avgCheck}
                onChange={(e) => setAvgCheck(parseInt(e.target.value))}
                className="w-full h-2 bg-[#422b1c] rounded-lg appearance-none cursor-pointer accent-[#d09e59]"
              />
              <div className="flex justify-between text-[10px] text-[#e8dcc4]/50 mt-1">
                <span>€15 (Pint + snack)</span>
                <span>€25 (Beer combo + burger)</span>
                <span>€45 (Match evening)</span>
              </div>
            </div>

          </div>

          {/* Right Output: Big Metrics */}
          <div className="lg:col-span-6 bg-[#18100a] p-6 sm:p-8 rounded-2xl border border-[#d09e59]/40 flex flex-col justify-between">
            <div>
              <span className="text-xs font-['Oswald'] uppercase tracking-widest text-[#d09e59] font-semibold">
                {isEn ? 'Estimated Revenue Recovered' : 'Очікувана збережена виручка'}
              </span>

              <div className="mt-3 mb-6">
                <div className="text-4xl sm:text-5xl font-extrabold font-['Montserrat'] text-transparent bg-clip-text bg-gradient-to-r from-[#d09e59] via-[#e6c587] to-amber-200 tabular-nums">
                  +€{monthlyRevenueRecovered.toLocaleString()}
                  <span className="text-lg font-normal text-[#e8dcc4]/70"> / {isEn ? 'month' : 'міс'}</span>
                </div>
                <div className="text-sm text-emerald-400 font-semibold mt-1">
                  ~ €{annualRevenueRecovered.toLocaleString()} {isEn ? 'annual gross recovery' : 'на рік'}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#332115] mb-6">
                <div>
                  <div className="text-xs text-[#e8dcc4]/60 font-medium">
                    {isEn ? 'Recovered tables:' : 'Врятовані столики:'}
                  </div>
                  <div className="text-lg font-bold font-mono text-[#f7f3ea] tabular-nums">
                    ~{recoveredTablesPerMonth} {isEn ? 'tables / mo' : 'столиків / міс'}
                  </div>
                </div>

                <div>
                  <div className="text-xs text-[#e8dcc4]/60 font-medium">
                    {isEn ? 'Recovered guests:' : 'Обслуговані гості:'}
                  </div>
                  <div className="text-lg font-bold font-mono text-[#f7f3ea] tabular-nums">
                    ~{totalGuestsRecovered} {isEn ? 'guests / mo' : 'гостей / міс'}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="p-3 bg-[#332115]/60 rounded-xl border border-[#d09e59]/20 text-xs text-[#e8dcc4]/80 mb-4 font-['Inter']">
                💡 <strong className="text-[#f7f3ea]">0% Commission:</strong> {isEn
                  ? 'All generated orders and bookings belong 100% to Bald Brothers. You only pay a flat monthly bot fee.'
                  : 'Усі замовлення та столики на 100% залишаються у вашій касі. Ніяких процентів від обороту.'}
              </div>

              <button
                onClick={onOpenPilot}
                className="w-full py-3 px-5 bg-gradient-to-r from-[#d09e59] to-[#e6c587] hover:from-[#e0b475] hover:to-[#eed09d] text-[#140d09] font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer font-['Montserrat'] text-xs sm:text-sm tracking-wide"
              >
                <span>{isEn ? 'Test Numbers in 4-Week Pilot' : 'Перевірити в 4-тижневому пілоті'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
