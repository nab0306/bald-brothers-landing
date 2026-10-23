import React, { useState } from 'react';
import { Send, Check, CheckCheck, Smartphone, Sparkles, RefreshCcw, BellRing, MapPin, Beer, Calendar, User } from 'lucide-react';
import { Language, BotMessage } from '../types';
import { simulatedBotDialogues } from '../data/content';

interface BotSimulatorProps {
  language: Language;
  onOpenPilot: () => void;
}

export const BotSimulator: React.FC<BotSimulatorProps> = ({ language, onOpenPilot }) => {
  const isEn = language === 'en';

  const [activeTab, setActiveTab] = useState<'booking' | 'menu' | 'location'>('booking');
  const [messages, setMessages] = useState<BotMessage[]>([
    {
      id: '1',
      sender: 'user',
      text: isEn
        ? 'Hi! Can I book a table for 6 people this Friday at 20:00 for El Clásico?'
        : 'Привіт! Чи можу я забронювати столик на 6 людей цієї п’ятниці о 20:00 на Ель Класіко?',
      time: '20:12'
    },
    {
      id: '2',
      sender: 'bot',
      text: isEn
        ? 'Please check your booking details:\n📅 Friday, 24 October, 20:00\n👥 6 guests\n👤 Bob\n\nShould I submit this table request to our manager?'
        : 'Будь ласка, перевірте деталі бронювання:\n📅 П’ятниця, 24 жовтня, 20:00\n👥 6 гостей\n👤 Боб\n\nНадіслати запит на столик нашому менеджеру?',
      time: '20:12',
      buttons: [
        { label: '✓ Send request', action: 'confirm', variant: 'primary' },
        { label: '📝 Change', action: 'change', variant: 'secondary' }
      ]
    }
  ]);

  const [inputMessage, setInputMessage] = useState('');
  const [isAdminNotified, setIsAdminNotified] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const resetToScenario = (type: 'booking' | 'menu' | 'location') => {
    setActiveTab(type);
    setIsAdminNotified(false);
    const scenario = simulatedBotDialogues.find(s => s.category === type) || simulatedBotDialogues[0];
    
    setMessages([
      {
        id: Date.now().toString() + '-1',
        sender: 'user',
        text: isEn ? scenario.userPromptEn : scenario.userPromptUa,
        time: '20:14'
      },
      {
        id: Date.now().toString() + '-2',
        sender: 'bot',
        text: isEn ? scenario.botReplyEn : scenario.botReplyUa,
        time: '20:14',
        buttons: scenario.buttons
      }
    ]);
  };

  const handleButtonClick = (action: string) => {
    if (action === 'confirm') {
      setIsAdminNotified(true);
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setMessages(prev => [
          ...prev,
          {
            id: Date.now().toString(),
            sender: 'bot',
            text: isEn
              ? '✅ Your table at Bald Brothers is confirmed!\n📅 Friday, 24 October, 20:00\n👥 6 guests\n\nSee you at the match!'
              : '✅ Ваш столик у Bald Brothers підтверджено!\n📅 П’ятниця, 24 жовтня, 20:00\n👥 6 гостей\n\nДо зустрічі на матчі!',
            time: '20:15',
            buttons: [
              { label: '📍 How to get there', action: 'maps', variant: 'primary' },
              { label: '❌ Cancel booking', action: 'cancel', variant: 'secondary' }
            ]
          }
        ]);
      }, 700);
    } else if (action === 'maps') {
      setMessages(prev => [
        ...prev,
        {
          id: Date.now().toString(),
          sender: 'bot',
          text: isEn
            ? '📍 Bald Brothers Marbella:\nWe are located on the main avenue near the port.\nGoogle Maps directions: https://maps.google.com/?q=Bald+Brothers+Marbella'
            : '📍 Bald Brothers Marbella:\nЗнаходимось на головному проспекті біля порту.\nGoogle Maps точка: https://maps.google.com/?q=Bald+Brothers+Marbella',
          time: '20:16'
        }
      ]);
    } else if (action === 'cancel') {
      setIsAdminNotified(false);
      setMessages(prev => [
        ...prev,
        {
          id: Date.now().toString(),
          sender: 'bot',
          text: isEn
            ? 'Reservation cancelled. Let us know anytime you want to watch the game!'
            : 'Бронювання скасовано. Пишіть у будь-який час, коли захочете подивитись гру!',
          time: '20:16'
        }
      ]);
    } else if (action === 'menu') {
      resetToScenario('menu');
    } else if (action === 'book') {
      resetToScenario('booking');
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userText = inputMessage.trim();
    setInputMessage('');

    setMessages(prev => [
      ...prev,
      {
        id: Date.now().toString() + '-user',
        sender: 'user',
        text: userText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);

    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      let reply = '';
      const lower = userText.toLowerCase();

      if (lower.includes('book') || lower.includes('table') || lower.includes('бронь') || lower.includes('стол')) {
        reply = isEn
          ? 'Great! To reserve your table for the match, could you tell me:\n1. Preferred date and kickoff time?\n2. Number of guests?\n3. Contact name and phone number?'
          : 'Чудово! Щоб забронювати столик, підкажіть будь ласка:\n1. Бажану дату та час матчу?\n2. Скільки людей у компанії?\n3. Ім’я та номер для підтвердження?';
      } else if (lower.includes('beer') || lower.includes('пив') || lower.includes('menu') || lower.includes('меню') || lower.includes('food')) {
        reply = isEn
          ? 'We have cold craft beers, Guinness on tap, our special 5-beer match combo with nachos, and smash burgers! Delivery is also available within 30-45 mins.'
          : 'У нас холодний крафт, Guinness на крані, фірмовий комбо-сет (5 пив + начос) та соковиті смеш-бургери! Також працює доставка за 30-45 хв.';
      } else if (lower.includes('el clasico') || lower.includes('match') || lower.includes('game') || lower.includes('матч')) {
        reply = isEn
          ? 'Yes! We broadcast all major football matches with live commentary on our big screens. Tables fill up quickly on match days — would you like to reserve one now?'
          : 'Так! Ми транслюємо всі головні матчі на великих екранах із живим звуком. На важливі матчі столики розбирають швидко — забронювати зараз?';
      } else {
        reply = isEn
          ? 'Thanks for reaching out to Bald Brothers Marbella! Our bot handles reservations, match schedules, and questions 24/7. Would you like to reserve a table or view the menu?'
          : 'Дякуємо за звернення до Bald Brothers Marbella! Бот приймає броні, надсилає розклад матчів та відповідає 24/7. Бажаєте забронювати столик чи переглянути меню?';
      }

      setMessages(prev => [
        ...prev,
        {
          id: Date.now().toString() + '-bot',
          sender: 'bot',
          text: reply,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          buttons: [
            { label: isEn ? '🍺 Reserve Table' : '🍺 Забронювати', action: 'confirm', variant: 'primary' }
          ]
        }
      ]);
    }, 800);
  };

  return (
    <section id="simulator" className="py-20 bg-[#18100a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#332115] border border-[#d09e59]/30 text-[#e6c587] text-xs font-semibold uppercase tracking-wider mb-3">
            <Smartphone className="w-3.5 h-3.5 text-[#d09e59]" />
            <span>{isEn ? 'Interactive Bot Experience' : 'Інтерактивний досвід бота'}</span>
          </div>

          <h2 className="font-['Cinzel'] text-2xl sm:text-4xl font-bold text-[#f7f3ea] mb-4">
            {isEn ? 'Try the Telegram AI-Assistant Live' : 'Спробуйте живий симулятор Telegram-бота'}
          </h2>

          <p className="text-sm sm:text-base text-[#e8dcc4]/80 font-['Inter']">
            {isEn
              ? 'Test how your guests will interact with Bald Brothers in Telegram. Pick a common guest question or type your own test message.'
              : 'Перевірте, як ваші гості взаємодіятимуть із Bald Brothers у Telegram. Оберіть типове запитання або введіть свій текст.'}
          </p>
        </div>

        {/* Quick Scenario Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <button
            onClick={() => resetToScenario('booking')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'booking'
                ? 'bg-[#d09e59] text-[#140d09] shadow-md shadow-[#d09e59]/20'
                : 'bg-[#26180f] text-[#e8dcc4]/80 hover:text-white border border-[#d09e59]/30'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>{isEn ? 'Table for El Clásico (6 Guests)' : 'Бронь на El Clásico (6 гостей)'}</span>
          </button>

          <button
            onClick={() => resetToScenario('menu')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'menu'
                ? 'bg-[#d09e59] text-[#140d09] shadow-md shadow-[#d09e59]/20'
                : 'bg-[#26180f] text-[#e8dcc4]/80 hover:text-white border border-[#d09e59]/30'
            }`}
          >
            <Beer className="w-4 h-4" />
            <span>{isEn ? 'Craft Beers & Match Deals' : 'Пиво та акції дня'}</span>
          </button>

          <button
            onClick={() => resetToScenario('location')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'location'
                ? 'bg-[#d09e59] text-[#140d09] shadow-md shadow-[#d09e59]/20'
                : 'bg-[#26180f] text-[#e8dcc4]/80 hover:text-white border border-[#d09e59]/30'
            }`}
          >
            <MapPin className="w-4 h-4" />
            <span>{isEn ? 'Opening Hours & Location' : 'Графік та локація в Марбельї'}</span>
          </button>
        </div>

        {/* Two-Column Grid: Left Smartphone Mockup, Right Admin Notification View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Left: Mobile Phone Frame Mockup (Telegram UI matching video 75s/80s) */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="w-full max-w-[380px] bg-[#0e1621] rounded-[40px] p-3 shadow-2xl border-4 border-[#332115] ring-2 ring-[#d09e59]/40 relative">
              
              {/* Phone Notch & Speaker */}
              <div className="w-32 h-4 bg-[#1e2c3a] rounded-b-xl mx-auto mb-2 flex items-center justify-center">
                <div className="w-10 h-1 bg-gray-600 rounded-full" />
              </div>

              {/* Telegram Header */}
              <div className="bg-[#17212b] rounded-t-2xl px-4 py-3 flex items-center justify-between border-b border-gray-800">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full overflow-hidden border border-[#d09e59]/60 bg-[#211710] shrink-0">
                    <img
                      src={`${import.meta.env.BASE_URL}assets/video_frames/frame_5s.jpg`}
                      alt="Bald Brothers Pub"
                      className="w-full h-full object-cover scale-150"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                      <span>Bald Brothers pub</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    </h4>
                    <p className="text-[10px] text-gray-400">
                      {isEn ? 'bot answers in 2s' : 'бот відповідає за 2с'}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => resetToScenario(activeTab)}
                  className="text-gray-400 hover:text-[#d09e59] transition-colors p-1"
                  title="Reset Chat"
                >
                  <RefreshCcw className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Chat Message Stream */}
              <div className="h-[360px] overflow-y-auto p-3 space-y-3 bg-[#0e1621] text-xs">
                {messages.map((msg) => {
                  const isUser = msg.sender === 'user';
                  return (
                    <div
                      key={msg.id}
                      className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 shadow-sm whitespace-pre-line leading-relaxed ${
                          isUser
                            ? 'bg-[#2b5278] text-white rounded-br-none'
                            : 'bg-[#182533] text-[#e8dcc4] border border-[#d09e59]/20 rounded-bl-none'
                        }`}
                      >
                        {msg.text}

                        {/* Interactive In-Chat Buttons */}
                        {msg.buttons && msg.buttons.length > 0 && (
                          <div className="mt-2.5 pt-2 border-t border-gray-700/60 flex flex-wrap gap-1.5">
                            {msg.buttons.map((btn, bIdx) => (
                              <button
                                key={bIdx}
                                onClick={() => handleButtonClick(btn.action)}
                                className={`text-[11px] font-semibold px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer flex-1 text-center whitespace-nowrap ${
                                  btn.variant === 'primary'
                                    ? 'bg-[#2b5278] hover:bg-[#346595] text-white border border-sky-400/30'
                                    : 'bg-[#242f3d] hover:bg-[#2e3b4d] text-gray-300'
                                }`}
                              >
                                {btn.label}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                      <span className="text-[9px] text-gray-500 mt-0.5 px-1 font-mono">
                        {msg.time}
                      </span>
                    </div>
                  );
                })}

                {isTyping && (
                  <div className="flex items-center gap-1.5 bg-[#182533] text-gray-400 px-3 py-2 rounded-2xl rounded-bl-none w-20">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d09e59] animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d09e59] animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d09e59] animate-bounce [animation-delay:0.4s]" />
                  </div>
                )}
              </div>

              {/* Chat Input Bar */}
              <form onSubmit={handleSendMessage} className="bg-[#17212b] rounded-b-2xl p-2 flex items-center gap-2 border-t border-gray-800">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder={isEn ? 'Type a question (e.g. beer list)...' : 'Введіть запитання (напр. меню)...'}
                  className="flex-1 bg-[#242f3d] text-xs text-white placeholder-gray-400 px-3 py-2 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#d09e59]"
                />
                <button
                  type="submit"
                  className="w-8 h-8 rounded-xl bg-[#2b5278] hover:bg-[#346595] text-white flex items-center justify-center transition-colors shrink-0 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>

            </div>
          </div>

          {/* Right: Administrator View & Automation Benefits */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Live Admin Notification Card */}
            <div className={`p-6 rounded-2xl border transition-all ${
              isAdminNotified
                ? 'bg-gradient-to-b from-[#332115] to-[#26180f] border-[#d09e59] shadow-lg shadow-[#d09e59]/20'
                : 'bg-[#211710] border-[#d09e59]/25'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-xs font-bold font-['Oswald'] uppercase text-[#d09e59]">
                  <BellRing className={`w-4 h-4 ${isAdminNotified ? 'animate-bounce text-[#e6c587]' : ''}`} />
                  <span>{isEn ? 'Administrator Telegram Stream' : 'Канал адміністратора пабу'}</span>
                </div>
                <span className={`text-[10px] px-2 py-0.5 rounded font-semibold ${
                  isAdminNotified ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-[#332115] text-[#e8dcc4]/60'
                }`}>
                  {isAdminNotified ? (isEn ? 'Booking Received' : 'Нова бронь') : (isEn ? 'Waiting for guest' : 'Очікування гостя')}
                </span>
              </div>

              <div className="bg-[#140d09] p-4 rounded-xl border border-[#d09e59]/20 text-xs text-[#e8dcc4]/90 space-y-2 font-mono">
                {isAdminNotified ? (
                  <>
                    <div className="text-emerald-400 font-bold">🔔 NEW TABLE REQUEST</div>
                    <div>Event: El Clásico Live Broadcast</div>
                    <div>Date: Friday, 24 October, 20:00</div>
                    <div>Party: 6 guests (Bob)</div>
                    <div>Source: Telegram Bot Showcase</div>
                    <div className="pt-2 flex gap-2">
                      <span className="px-2 py-1 bg-emerald-950 text-emerald-300 rounded border border-emerald-500/40 text-[10px]">
                        ✓ Confirmed in 1 tap
                      </span>
                    </div>
                  </>
                ) : (
                  <div className="text-[#e8dcc4]/60 italic">
                    {isEn
                      ? 'Click "✓ Send request" in the phone to see how the administrator gets the structured table booking instantly.'
                      : 'Натисніть "✓ Send request" у телефоні, щоб побачити, як адміністратор отримує готову картку столика.'}
                  </div>
                )}
              </div>

              <p className="text-xs text-[#e8dcc4]/70 mt-3 font-['Inter']">
                {isEn
                  ? 'Staff no longer spends 10 minutes on phone calls in a loud bar. The bot collects all details — the manager just clicks confirm.'
                  : 'Персонал не витрачає час на дзвінки серед шуму бару. Бот збирає всі деталі — адміністратор лише натискає підтвердити.'}
              </p>
            </div>

            {/* Key Advantages Checklist */}
            <div className="bg-[#26180f] border border-[#d09e59]/25 p-6 rounded-2xl space-y-3">
              <h4 className="font-['Montserrat'] text-sm font-bold text-[#f7f3ea]">
                {isEn ? 'Why this wins guests over:' : 'Чому це перемагає звичайний дзвінок:'}
              </h4>
              <ul className="text-xs text-[#e8dcc4]/85 space-y-2.5 font-['Inter']">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#d09e59] shrink-0" />
                  <span>{isEn ? 'Answers in morning hours before the pub opens' : 'Працює вранці, коли паб ще зачинений'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#d09e59] shrink-0" />
                  <span>{isEn ? 'Guests can change details without waiting on hold' : 'Гість може змінити час або кількість без очікування'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#d09e59] shrink-0" />
                  <span>{isEn ? 'Directions with 1-click Google Maps pin' : 'Точна точка в Google Maps в 1 клік'}</span>
                </li>
              </ul>

              <button
                onClick={onOpenPilot}
                className="w-full mt-4 py-2.5 px-4 bg-[#332115] hover:bg-[#422b1c] text-[#e6c587] hover:text-white border border-[#d09e59]/40 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer font-['Montserrat']"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#d09e59]" />
                <span>{isEn ? 'Request Live Demo for Bald Brothers' : 'Замовити живе демо для вашого меню'}</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
