export type Language = 'hi' | 'en';

export interface TocItem {
  id: string;
  title: {
    hi: string;
    en: string;
  };
  iconName?: string;
}

export interface FaqItem {
  question: {
    hi: string;
    en: string;
  };
  answer: {
    hi: string;
    en: string;
  };
}
