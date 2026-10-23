import React from 'react';
import { Send, ArrowRight } from 'lucide-react';
import { Language } from '../types';

interface PilotStepsProps {
  language: Language;
  onOpenPilot?: () => void;
}

export const PilotSteps: React.FC<PilotStepsProps> = ({ language }) => {
  const isEn = language === 'en';

  return (
    <section id="contact-cta" className="py-20 bg-[#211710] border-t border-[#d09e59]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Last CTA Block */}
        <div className="bg-gradient-to-r from-[#332115] via-[#422b1c] to-[#332115] border-2 border-[#d09e59]/50 rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold text-[#f7f3ea] mb-3">
              {isEn ? 'Ready to test with your own guests?' : 'Готові протестувати зі своїми гостями?'}
            </h3>
            <p className="text-sm sm:text-base text-[#e8dcc4]/85 max-w-2xl mx-auto mb-8 font-['Inter']">
              {isEn ? 'Have any questions?' : 'Є питання?'}
            </p>
            <a
              href="https://t.me/nata_nab"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-[#d09e59] to-[#e6c587] hover:from-[#e0b475] hover:to-[#eed09d] text-[#140d09] font-bold rounded-xl shadow-xl shadow-[#d09e59]/30 transition-all transform hover:-translate-y-0.5 inline-flex items-center gap-3 cursor-pointer font-['Montserrat'] text-sm tracking-wide text-decoration-none"
            >
              <Send className="w-4 h-4" />
              <span>{isEn ? 'Write to the Manager' : 'Написати менеджеру'}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
