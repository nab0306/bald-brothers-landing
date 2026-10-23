export type Language = 'en' | 'ua';

export interface VideoChapter {
  id: string;
  timestamp: number;
  timeFormatted: string;
  title: string;
  description: string;
  badge: string;
}

export interface BotMessage {
  id: string;
  sender: 'user' | 'bot' | 'admin';
  text: string;
  time: string;
  buttons?: Array<{
    label: string;
    action: string;
    variant?: 'primary' | 'secondary' | 'danger';
  }>;
  details?: {
    date?: string;
    time?: string;
    guests?: number;
    name?: string;
  };
}

export interface PricingTier {
  id: 'start' | 'booking' | 'showcase';
  name: string;
  subtitle: string;
  recommended?: boolean;
  highlightText?: string;
  features: string[];
  setupFee: string;
  monthlyFee: string;
  summary: string;
}

export interface LeadSubmission {
  name: string;
  role: string;
  contactMethod: 'whatsapp' | 'telegram' | 'phone' | 'email';
  contactValue: string;
  preferredTier: 'start' | 'booking' | 'showcase';
  notes?: string;
}
