import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { Header } from './components/Header';
import { ArticleContent } from './components/ArticleContent';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';
import { ShareModal } from './components/ShareModal';
import { Calculator, Share2, ArrowRight } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<Language>('hi');
  const [isShareOpen, setIsShareOpen] = useState<boolean>(false);

  // Synchronize HTML lang attribute and title dynamically on toggle
  useEffect(() => {
    document.documentElement.lang = lang;
    if (lang === 'hi') {
      document.title = 'Bank of India Aadhar Loan: आधार कार्ड से लोन कैसे लें? Direct Apply, ब्याज दर व पात्रता';
    } else {
      document.title = 'Bank of India Aadhar Loan: Apply Online, Interest Rates, Eligibility & Documents';
    }
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'hi' ? 'en' : 'hi'));
  };

  const isHindi = lang === 'hi';

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-orange-500 selection:text-white flex flex-col font-sans">
      {/* Top Header */}
      <Header
        lang={lang}
        onToggleLang={toggleLanguage}
        onOpenShare={() => setIsShareOpen(true)}
      />

      {/* Main Container */}
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6 sm:px-6 sm:py-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Main Article Content Column */}
          <div className="lg:col-span-8">
            <ArticleContent lang={lang} />
          </div>

          {/* Desktop Right Sidebar Column */}
          <div className="lg:col-span-4">
            <Sidebar lang={lang} />
          </div>
        </div>
      </main>

      {/* Mobile Floating Action Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-30 flex items-center justify-between border-t border-slate-200 bg-white/95 px-4 py-2.5 shadow-lg backdrop-blur-md lg:hidden">
        <a
          href="#emi-calculator"
          className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-100"
        >
          <Calculator className="h-4 w-4 text-orange-600" />
          <span>{isHindi ? 'ईएमआई' : 'EMI Calc'}</span>
        </a>

        <button
          onClick={() => setIsShareOpen(true)}
          className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-100"
        >
          <Share2 className="h-4 w-4 text-blue-700" />
          <span>{isHindi ? 'शेयर' : 'Share'}</span>
        </button>

        <a
          href="#online-process"
          className="flex items-center gap-1 rounded-xl bg-orange-600 px-4 py-2 text-xs font-extrabold text-white shadow-xs active:scale-95"
        >
          <span>{isHindi ? 'ऑनलाइन अप्लाई' : 'Apply Online'}</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* Footer */}
      <Footer lang={lang} />

      {/* Social Share Modal */}
      <ShareModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        lang={lang}
      />
    </div>
  );
}
