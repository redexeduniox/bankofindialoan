import React, { useState, useEffect } from 'react';
import { Languages, Share2, Landmark, Bookmark, Check } from 'lucide-react';
import { Language } from '../types';

interface HeaderProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenShare: () => void;
}

export const Header: React.FC<HeaderProps> = ({ lang, onToggleLang, onOpenShare }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookmark = () => {
    setBookmarked(true);
    setTimeout(() => setBookmarked(false), 2000);
  };

  const isHindi = lang === 'hi';

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-md transition-all">
      {/* Top Reading Progress Bar */}
      <div
        className="h-1 bg-gradient-to-r from-orange-500 via-blue-600 to-blue-800 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Brand Logo & Title */}
        <a
          href="#"
          className="flex items-center gap-2.5 text-slate-900 group transition-transform active:scale-98"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white shadow-sm ring-2 ring-orange-500/30">
            <Landmark className="h-5 w-5 text-orange-400" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-base sm:text-lg font-black tracking-tight text-blue-950">
                Bank of India
              </span>
              <span className="rounded-full bg-orange-100 px-2 py-0.5 text-[10px] font-extrabold text-orange-700 uppercase tracking-wide">
                Aadhar Loan
              </span>
            </div>
            <p className="text-[11px] font-medium text-slate-500 hidden sm:block">
              {isHindi ? 'आधिकारिक जानकारी व ई-केवाईसी लोन गाइड 2025' : 'Official Guide & e-KYC Loan Insights 2025'}
            </p>
          </div>
        </a>

        {/* Right Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Toggle Button */}
          <button
            onClick={onToggleLang}
            className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-bold text-slate-800 shadow-2xs hover:border-blue-300 hover:bg-blue-50/50 hover:text-blue-900 transition-all"
            title={isHindi ? 'Switch to English' : 'हिंदी में पढ़ें'}
            aria-label="Toggle Language"
          >
            <Languages className="h-4 w-4 text-orange-600" />
            <span>{isHindi ? 'English' : 'हिंदी'}</span>
          </button>

          {/* Share Button */}
          <button
            onClick={onOpenShare}
            className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-700 shadow-2xs hover:bg-slate-50 hover:text-blue-700 transition-all"
            title={isHindi ? 'शेयर करें' : 'Share'}
            aria-label="Share Article"
          >
            <Share2 className="h-4 w-4 text-slate-600" />
            <span className="hidden sm:inline">{isHindi ? 'शेयर' : 'Share'}</span>
          </button>

          {/* Bookmark Button */}
          <button
            onClick={handleBookmark}
            className="hidden md:flex items-center gap-1 rounded-xl border border-slate-200 bg-white p-2 text-slate-600 hover:bg-slate-50 hover:text-blue-700 transition-all"
            title={isHindi ? 'बुकमार्क करें' : 'Bookmark this page'}
            aria-label="Bookmark"
          >
            {bookmarked ? (
              <Check className="h-4 w-4 text-emerald-600" />
            ) : (
              <Bookmark className="h-4 w-4" />
            )}
          </button>

          {/* Quick Apply CTA */}
          <a
            href="#online-process"
            className="hidden sm:inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 px-3.5 py-2 text-xs font-bold text-white shadow-xs hover:from-orange-700 hover:to-orange-600 transition-all active:scale-95"
          >
            {isHindi ? 'अप्लाई प्रोसेस देखें' : 'How to Apply'}
          </a>
        </div>
      </div>
    </header>
  );
};
