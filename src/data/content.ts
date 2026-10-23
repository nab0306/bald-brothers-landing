import { VideoChapter, PricingTier } from '../types';

export const videoChapters: Record<'en' | 'ua', VideoChapter[]> = {
  en: [
    {
      id: 'concept',
      timestamp: 0,
      timeFormatted: '0:00',
      title: 'Concept & Overview',
      description: 'Telegram sales showcase & 24/7 AI-assistant for Bald Brothers Marbella',
      badge: 'Start'
    },
    {
      id: 'audit',
      timestamp: 20,
      timeFormatted: '0:20',
      title: 'Your Bar Today',
      description: 'Instagram, website, Google Maps metrics and opportunities for growth',
      badge: 'Audit'
    },
    {
      id: 'losses',
      timestamp: 35,
      timeFormatted: '0:35',
      title: 'Where Revenue is Lost',
      description: 'Repeated questions, missed El Clásico calls, and algorithm drops',
      badge: 'Bottlenecks'
    },
    {
      id: 'telegram',
      timestamp: 50,
      timeFormatted: '0:50',
      title: 'Four Reasons for Telegram',
      description: '100% notification reach, customer ownership, 24/7 hours, zero % cut',
      badge: 'Channel'
    },
    {
      id: 'funnel',
      timestamp: 60,
      timeFormatted: '1:00',
      title: '5-Stage Guest Funnel',
      description: 'From social media post to lifelong regular guest',
      badge: 'Funnel'
    },
    {
      id: 'demo',
      timestamp: 75,
      timeFormatted: '1:15',
      title: 'Live Booking Demo',
      description: 'Instant mobile table reservation with 1-click administrator confirmation',
      badge: 'Live Bot'
    },
    {
      id: 'rates',
      timestamp: 90,
      timeFormatted: '1:30',
      title: 'Three Service Tiers',
      description: 'Start, Booking (Recommended), and Turnkey Showcase packages',
      badge: 'Rates'
    },
    {
      id: 'pilot',
      timestamp: 110,
      timeFormatted: '1:50',
      title: 'How to Start',
      description: '15-min interactive demo, menu setup, and a guaranteed 4-week pilot',
      badge: 'Action'
    }
  ],
  ua: [
    {
      id: 'concept',
      timestamp: 0,
      timeFormatted: '0:00',
      title: 'Концепція та Оффер',
      description: 'Telegram-вітрина продажів та AI-асистент 24/7 для Bald Brothers Marbella',
      badge: 'Початок'
    },
    {
      id: 'audit',
      timestamp: 20,
      timeFormatted: '0:20',
      title: 'Ваш бар сьогодні',
      description: 'Аудит Instagram, сайту, Google Maps та точки швидкого зростання',
      badge: 'Аудит'
    },
    {
      id: 'losses',
      timestamp: 35,
      timeFormatted: '0:35',
      title: 'Де паб втрачає гостей і гроші',
      description: 'Однотипні питання, пропущені дзвінки на El Clásico, втрата охоплень',
      badge: 'Проблема'
    },
    {
      id: 'telegram',
      timestamp: 50,
      timeFormatted: '0:50',
      title: 'Чому саме Telegram',
      description: '100% охоплення без алгоритмів, своя база, робота 24/7, 0% комісії',
      badge: 'Переваги'
    },
    {
      id: 'funnel',
      timestamp: 60,
      timeFormatted: '1:00',
      title: 'Воронка: від поста до постійного гостя',
      description: '5 кроків: Залучення -> Утримання -> Відповідь -> Продаж -> Повернення',
      badge: 'Воронка'
    },
    {
      id: 'demo',
      timestamp: 75,
      timeFormatted: '1:15',
      title: 'Демо бронювання в телефоні',
      description: 'Миттєвий запит столика та підтвердження адміністратором в 1 клік',
      badge: 'Живий бот'
    },
    {
      id: 'rates',
      timestamp: 90,
      timeFormatted: '1:30',
      title: 'Три рівні тарифів',
      description: 'Start, Booking (Рекомендований), та Showcase під ключ',
      badge: 'Тарифи'
    },
    {
      id: 'pilot',
      timestamp: 110,
      timeFormatted: '1:50',
      title: 'Як розпочати пілот',
      description: '15-хвилинне демо, тексти меню та 4-тижневий контрольний пілот',
      badge: 'Старт'
    }
  ]
};

export const pricingTiersData: Record<'en' | 'ua', PricingTier[]> = {
  en: [
    {
      id: 'start',
      name: 'START',
      subtitle: 'AI assistant out of the box',
      features: [
        'Instant answers to frequently asked guest questions',
        'Direct "Book a Table" button forwarding request to manager',
        'Automatic transfer to human administrator when requested',
        'Responds in the guest’s native language (English, Spanish, etc.)',
        'Photos & voice messages forwarded directly to staff',
        'Full administrative dashboard to monitor bot activity'
      ],
      setupFee: 'Custom',
      monthlyFee: 'Flat monthly fee',
      summary: 'Ideal for automating 80% of repetitive questions about hours, matches, and address.'
    },
    {
      id: 'booking',
      name: 'BOOKING',
      subtitle: 'Start + Full Automated Booking',
      recommended: true,
      highlightText: 'MOST POPULAR',
      features: [
        'All features from «START» included',
        'Bot automatically collects date, match time, guests count, name & phone',
        'Interactive reservation summary & modification for guests',
        'Administrator receives structured booking and confirms in 1 click',
        'Automated match-day reminders sent to confirmed tables',
        'Instant Google Maps directions card sent to guests'
      ],
      setupFee: 'Custom',
      monthlyFee: 'Flat monthly fee',
      summary: 'Zero lost bookings on El Clásico or morning hours when phone goes unanswered.'
    },
    {
      id: 'showcase',
      name: 'SHOWCASE',
      subtitle: 'Booking + Turnkey Telegram Channel',
      features: [
        'All features from «BOOKING» included',
        'Turnkey official Bald Brothers Telegram channel launch',
        'Branded match announcement templates & visual schedule kit',
        'Physical table QR-stand cards and bar counter designs included',
        'Broadcast announcements sent with 100% push-notification delivery',
        'Bilingual bot setup in both Spanish & English'
      ],
      setupFee: 'Custom',
      monthlyFee: 'Flat monthly fee',
      summary: 'The ultimate sales showcase turning casual match watchers into regular customers.'
    }
  ],
  ua: [
    {
      id: 'start',
      name: 'START',
      subtitle: 'AI-асистент «з коробки»',
      features: [
        'Миттєві відповіді на часті запитання гостей пабу',
        'Кнопка «Забронювати» з передачею заявки адміністратору',
        'Швидкий перехід на людину за потреби гостя',
        'Відповіді рідною мовою гостя (англійська, іспанська тощо)',
        'Пересилка фото та голосових повідомлень команді',
        'Зручний контроль того, що бот працює без збоїв'
      ],
      setupFee: 'Індивідуально',
      monthlyFee: 'Фіксована підписка',
      summary: 'Закриває 80% однотипних рутинних запитань про розклад, години роботи та меню.'
    },
    {
      id: 'booking',
      name: 'BOOKING',
      subtitle: 'Start + Повне бронювання',
      recommended: true,
      highlightText: 'РЕКОМЕНДОВАНИЙ',
      features: [
        'Всі можливості пакету «START»',
        'Бот самостійно збирає дату, час, кількість гостей та контактний номер',
        'Інтерактивна картка перевірки та зміни броні для гостя',
        'Адміністратор отримує готову картку і підтверджує в 1 клік',
        'Автоматичні нагадування гостям у день важливого матчу',
        'Навігація «Як дістатися» з точною геолокацією пабу в Марбельї'
      ],
      setupFee: 'Індивідуально',
      monthlyFee: 'Фіксована підписка',
      summary: 'Жоден столик не втрачається у піковий вечір чи зранку, коли телефон мовчить.'
    },
    {
      id: 'showcase',
      name: 'SHOWCASE',
      subtitle: 'Booking + Telegram-канал «під ключ»',
      features: [
        'Всі можливості пакету «BOOKING»',
        'Запуск офіційного Telegram-каналу Bald Brothers «під ключ»',
        'Фірмові шаблони анонсів матчів та акцій дня (5 beers, nachos)',
        'Дизайн QR-карток для столиків та барної стійки',
        'Розсилки анонсів із 100% доставкою сповіщень підписникам',
        'Повна підтримка іспанської та англійської мов'
      ],
      setupFee: 'Індивідуально',
      monthlyFee: 'Фіксована підписка',
      summary: 'Комплексна вітрина продажів, яка перетворює глядачів матчів на щотижневих гостей.'
    }
  ]
};

export interface SimulatedDialogue {
  category: 'booking' | 'menu' | 'location';
  titleEn: string;
  titleUa: string;
  userPromptEn: string;
  userPromptUa: string;
  botReplyEn: string;
  botReplyUa: string;
  buttons: Array<{
    label: string;
    action: string;
    variant: 'primary' | 'secondary' | 'danger';
  }>;
  confirmedMessageEn?: string;
  confirmedMessageUa?: string;
}

export const simulatedBotDialogues: SimulatedDialogue[] = [
  {
    category: 'booking',
    titleEn: 'Book a Table for El Clásico',
    titleUa: 'Бронювання столика на El Clásico',
    userPromptEn: 'Hi! Can I book a table for 6 people this Friday at 20:00 for El Clásico?',
    userPromptUa: 'Привіт! Чи можу я забронювати столик на 6 людей цієї п’ятниці о 20:00 на Ель Класіко?',
    botReplyEn: 'Great choice! We are broadcasting El Clásico live with commentary on all screens.\n\nPlease check your booking details:\n📅 Friday, 24 October, 20:00\n👥 6 guests\n👤 Bob\n\nShould I submit this table request to our manager?',
    botReplyUa: 'Чудовий вибір! Ми показуємо El Clásico на всіх великих екранах із живим звуком.\n\nБудь ласка, перевірте деталі бронювання:\n📅 П’ятниця, 24 жовтня, 20:00\n👥 6 гостей\n👤 Боб\n\nНадіслати запит на столик нашому менеджеру?',
    buttons: [
      { label: '✓ Send request', action: 'confirm', variant: 'primary' },
      { label: '📝 Change', action: 'change', variant: 'secondary' }
    ],
    confirmedMessageEn: '✅ Your table at Bald Brothers is confirmed!\n📅 Friday, 24 October, 20:00\n👥 6 guests\n\nSee you at the match!',
    confirmedMessageUa: '✅ Ваш столик у Bald Brothers підтверджено!\n📅 П’ятниця, 24 жовтня, 20:00\n👥 6 гостей\n\nДо зустрічі на матчі!'
  },
  {
    category: 'menu',
    titleEn: 'Menu & Match Day Deals',
    titleUa: 'Меню та пропозиції на матч',
    userPromptEn: 'What match deals and beers do you have today?',
    userPromptUa: 'Які у вас сьогодні пивні сети та спеціальні пропозиції?',
    botReplyEn: '🍺 On match days we feature our signature Match Special: 5 cold craft beers + loaded nachos bucket for €25!\n\nAlso on tap:\n• Guinness Stout & Irish Ale\n• Spanish Cold Craft Lager\n• Smash Burgers, Buffalo Wings & Crispy Fries\n\nDelivery available within 30-45 minutes or table booking for kickoff!',
    botReplyUa: '🍺 У дні матчів діє наш фірмовий Match Special: 5 пляшок холодного крафту + велика порція гарячих начос за €25!\n\nТакож на крані:\n• Guinness Stout та Irish Ale\n• Іспанський освіжаючий лагер\n• Смеш-бургери, крильця Баффало та хрустка картопля\n\nДоставка 30-45 хвилин або бронювання столика до свистка!',
    buttons: [
      { label: '🍔 View Full Menu', action: 'menu', variant: 'primary' },
      { label: '🍻 Reserve Table', action: 'book', variant: 'secondary' }
    ]
  },
  {
    category: 'location',
    titleEn: 'Hours & Location in Marbella',
    titleUa: 'Години та локація в Марбельї',
    userPromptEn: 'Are you open right now and where exactly are you located?',
    userPromptUa: 'Чи ви відкриті зараз і як вас знайти в Марбельї?',
    botReplyEn: '📍 We are located in Marbella, Spain.\n🕒 Opening hours: Tue-Sun 16:00 - 24:00 (Monday closed).\n\nIf you are arriving by car or taxi, tap below to open Google Maps directly with our entrance pinned.',
    botReplyUa: '📍 Ми знаходимося в Марбельї, Іспанія.\n🕒 Графік роботи: Вівторок–Неділя з 16:00 до 24:00 (Понеділок — вихідний).\n\nЯкщо їдете на авто чи таксі — натисніть нижче, щоб відкрити точку в Google Maps.',
    buttons: [
      { label: '📍 How to get there (Maps)', action: 'maps', variant: 'primary' },
      { label: '🕒 Match schedule', action: 'schedule', variant: 'secondary' }
    ]
  }
];
