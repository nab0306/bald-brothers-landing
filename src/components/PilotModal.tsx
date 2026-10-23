import React, { useState } from 'react';
import { X, CheckCircle2, Send, Calendar, ShieldCheck, Sparkles } from 'lucide-react';
import { Language, LeadSubmission } from '../types';

interface PilotModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  preselectedTier?: 'start' | 'booking' | 'showcase';
}

export const PilotModal: React.FC<PilotModalProps> = ({
  isOpen,
  onClose,
  language,
  preselectedTier = 'booking',
}) => {
  const isEn = language === 'en';

  const [formData, setFormData] = useState<LeadSubmission>({
    name: '',
    role: 'Owner / Partner',
    contactMethod: 'whatsapp',
    contactValue: '',
    preferredTier: preselectedTier,
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setErrorMsg(isEn ? 'Please enter your name.' : 'Будь ласка, вкажіть ваше ім’я.');
      return;
    }
    if (!formData.contactValue.trim()) {
      setErrorMsg(isEn ? 'Please provide your contact handle or number.' : 'Будь ласка, вкажіть номер або нікнейм для зв’язку.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const submission = new FormData();
      submission.append('access_key', '66e814ed-e8e8-4377-bbb0-334db234fc28');
      submission.append('subject', 'New AI Assistant request - Bald Brothers landing');
      submission.append('from_name', 'Bald Brothers Landing');
      submission.append('name', formData.name.trim());
      submission.append('role', formData.role);
      submission.append('selected_tier', formData.preferredTier.toUpperCase());
      submission.append('contact_method', formData.contactMethod);
      submission.append('contact_value', formData.contactValue.trim());
      submission.append('questions', formData.notes?.trim() || 'None');
      submission.append('botcheck', '');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: submission,
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSubmitted(true);
      } else {
        setErrorMsg(
          isEn
            ? (result.message || 'Submission failed. Please check your details and try again.')
            : (result.message || 'Не вдалося надіслати форму. Будь ласка, спробуйте ще раз.')
        );
      }
    } catch {
      setErrorMsg(
        isEn
          ? 'Network error. Please check your connection and try again.'
          : 'Помилка мережі. Перевірте з’єднання та спробуйте ще раз.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    setErrorMsg('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-[#211710] border-2 border-[#d09e59]/60 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#332115] text-[#e8dcc4]/70 hover:text-white border border-[#d09e59]/30 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#d09e59] mb-2 font-['Oswald']">
              <Calendar className="w-4 h-4" />
              <span>{isEn ? 'AI Bot & 4-Week Pilot' : 'AI-бот і 4-тижневий пілот'}</span>
            </div>

            <h3 className="font-['Cinzel'] text-xl sm:text-2xl font-bold text-[#f7f3ea] mb-2">
              {isEn ? 'Schedule Your Private Plan' : 'Складемо ваш індивідуальний план'}
            </h3>

            <p className="text-xs sm:text-sm text-[#e8dcc4]/75 mb-6 font-['Inter']">
              {isEn
                ? 'We will tailor the AI assistant to your menu, opening hours and booking flow, and prepare your 4-week pilot.'
                : 'Налаштуємо AI-асистента під ваше меню, години роботи та бронювання і підготуємо 4-тижневий пілот.'}
            </p>

            {errorMsg && (
              <div className="mb-4 p-3 rounded-xl bg-red-950/80 border border-red-500/50 text-red-200 text-xs">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Hidden honeypot field for bot protection */}
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />
              
              {/* Name Field */}
              <div>
                <label className="block text-xs font-semibold text-[#f7f3ea] mb-1.5 font-['Montserrat']">
                  {isEn ? 'Your Name' : 'Ваше ім’я'} *
                </label>
                <input
                  type="text"
                  required
                  placeholder={isEn ? 'e.g. Alex / Marc' : 'наприклад, Олександр'}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#18100a] border border-[#d09e59]/30 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#d09e59]"
                />
              </div>

              {/* Role */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#f7f3ea] mb-1.5 font-['Montserrat']">
                    {isEn ? 'Your Role' : 'Ваша посада'}
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full bg-[#18100a] border border-[#d09e59]/30 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#d09e59]"
                  >
                    <option value="Owner / Partner">{isEn ? 'Owner / Partner' : 'Власник / Співвласник'}</option>
                    <option value="General Manager">{isEn ? 'General Manager' : 'Керуючий директор'}</option>
                    <option value="Bar Manager">{isEn ? 'Bar Manager' : 'Бар-менеджер'}</option>
                    <option value="Marketing Lead">{isEn ? 'Marketing Lead' : 'Маркетинг'}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#f7f3ea] mb-1.5 font-['Montserrat']">
                    {isEn ? 'Interested Tier' : 'Обраний тариф'}
                  </label>
                  <select
                    value={formData.preferredTier}
                    onChange={(e) => setFormData({ ...formData, preferredTier: e.target.value as any })}
                    className="w-full bg-[#18100a] border border-[#d09e59]/30 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#d09e59]"
                  >
                    <option value="booking">BOOKING (Recommended)</option>
                    <option value="start">START (FAQ only)</option>
                    <option value="showcase">SHOWCASE (Full channel)</option>
                  </select>
                </div>
              </div>

              {/* Contact Method & Handle */}
              <div>
                <label className="block text-xs font-semibold text-[#f7f3ea] mb-1.5 font-['Montserrat']">
                  {isEn ? 'Preferred Contact Method' : 'Зручний спосіб зв’язку'} *
                </label>
                <div className="grid grid-cols-4 gap-2 mb-2">
                  {(['whatsapp', 'telegram', 'phone', 'email'] as const).map((method) => (
                    <button
                      key={method}
                      type="button"
                      onClick={() => setFormData({ ...formData, contactMethod: method })}
                      className={`py-2 text-[11px] font-semibold rounded-lg capitalize border transition-all cursor-pointer ${
                        formData.contactMethod === method
                          ? 'bg-[#d09e59] text-[#140d09] border-[#e6c587]'
                          : 'bg-[#18100a] text-[#e8dcc4]/70 border-[#d09e59]/20 hover:text-white'
                      }`}
                    >
                      {method}
                    </button>
                  ))}
                </div>

                <input
                  type="text"
                  required
                  placeholder={
                    formData.contactMethod === 'whatsapp' || formData.contactMethod === 'phone'
                      ? '+34 600 000 000'
                      : formData.contactMethod === 'telegram'
                      ? '@username'
                      : 'email@bald-brothers.com'
                  }
                  value={formData.contactValue}
                  onChange={(e) => setFormData({ ...formData, contactValue: e.target.value })}
                  className="w-full bg-[#18100a] border border-[#d09e59]/30 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#d09e59]"
                />
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-semibold text-[#f7f3ea] mb-1.5 font-['Montserrat']">
                  {isEn ? 'Specific Questions or Match Broadcasts (Optional)' : 'Коментарі або особливості пабу (Опціонально)'}
                </label>
                <textarea
                  rows={2}
                  placeholder={isEn ? 'e.g. We want to test this before the next El Clásico...' : 'наприклад, хочемо перевірити до матчу Реал - Барселона...'}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-[#18100a] border border-[#d09e59]/30 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#d09e59]"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 py-3.5 px-6 bg-gradient-to-r from-[#d09e59] to-[#e6c587] hover:from-[#e0b475] hover:to-[#eed09d] disabled:opacity-50 disabled:cursor-not-allowed text-[#140d09] font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer font-['Montserrat'] text-xs sm:text-sm tracking-wide"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-[#140d09] border-t-transparent rounded-full animate-spin" />
                    <span>{isEn ? 'Sending...' : 'Надсилання...'}</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>{isEn ? 'Confirm' : 'Підтвердити'}</span>
                  </>
                )}
              </button>

            </form>
          </div>
        ) : (
          <div className="py-8 text-center animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500/50 flex items-center justify-center text-emerald-400 mx-auto mb-4 shadow-lg shadow-emerald-500/20">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="font-['Cinzel'] text-xl sm:text-2xl font-bold text-[#f7f3ea] mb-3">
              {isEn ? 'Thank you! We will contact you shortly.' : "Дякуємо! Ми зв'яжемося з вами найближчим часом."}
            </h3>

            <p className="text-xs sm:text-sm text-[#e8dcc4]/85 max-w-sm mx-auto mb-6 font-['Inter'] leading-relaxed">
              {isEn
                ? `We have received your details for ${formData.name} (${formData.preferredTier.toUpperCase()} tier). We will reach out to you via ${formData.contactMethod.toUpperCase()} (${formData.contactValue}).`
                : `Ми отримали ваші контактні дані для ${formData.name} (тариф ${formData.preferredTier.toUpperCase()}). Зв'яжемося з вами через ${formData.contactMethod.toUpperCase()} (${formData.contactValue}).`}
            </p>

            <button
              onClick={resetAndClose}
              className="py-2.5 px-6 bg-[#332115] hover:bg-[#422b1c] text-[#e8dcc4] hover:text-white border border-[#d09e59]/40 rounded-xl text-xs font-semibold transition-colors cursor-pointer"
            >
              {isEn ? 'Close Window' : 'Закрити вікно'}
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
