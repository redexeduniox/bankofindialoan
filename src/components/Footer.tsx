import React from 'react';
import { Landmark, ShieldAlert, ArrowUp, Heart } from 'lucide-react';
import { Language } from '../types';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const isHindi = lang === 'hi';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-900 text-slate-300">
      {/* Disclaimer Banner */}
      <div className="border-b border-slate-800 bg-slate-950/70 py-6">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-start gap-3 text-xs leading-relaxed text-slate-400">
            <ShieldAlert className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-200">
                {isHindi ? 'अस्वीकरण (Disclaimer):' : 'Editorial Disclaimer:'}
              </strong>{' '}
              {isHindi
                ? 'यह वेबसाइट केवल जनहित एवं वित्तीय जागरूकता के लिए एक स्वतंत्र सूचनात्मक और शैक्षिक ब्लॉग पोर्टल है। यह पोर्टल किसी भी रूप में बैंक ऑफ इंडिया (Bank of India) अथवा भारतीय रिजर्व बैंक (RBI) से प्रत्यक्ष रूप से संबद्ध या अधिकृत नहीं है। हम किसी भी व्यक्ति से कोई अग्रिम शुल्क या व्यक्तिगत वित्तीय जानकारी नहीं मांगते। किसी भी लोन के अंतिम नियम, ब्याज दरें एवं शर्तें बैंक ऑफ इंडिया के विवेकानुसार बदल सकती हैं। आधिकारिक जानकारी के लिए कृपया बैंक ऑफ इंडिया की आधिकारिक वेबसाइट bankofindia.co.in अथवा निकटतम शाखा से संपर्क करें।'
                : 'This website is an independent informational portal curated for financial education and awareness. It is not affiliated with, endorsed by, or representing Bank of India (BOI) or the Reserve Bank of India (RBI). We do not solicit personal banking credentials, fees, or provide direct loans. Always verify current interest rates and terms directly on the official BOI website bankofindia.co.in or at your nearest branch.'}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand Col */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-600 text-white font-black">
                <Landmark className="h-5 w-5" />
              </div>
              <span className="text-lg font-black text-white tracking-tight">
                Bank of India Aadhar Loan Guide
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              {isHindi
                ? 'बैंक ऑफ इंडिया आधार e-KYC लोन, ब्याज दरें, पात्रता, ईएमआई कैलकुलेटर और ऑनलाइन आवेदन पर सबसे सटीक एवं सरल हिंदी मार्गदर्शन।'
                : 'Comprehensive informational guide on Bank of India Aadhar e-KYC loans, interest calculation, eligibility guidelines, and safe digital application steps.'}
            </p>
            <div className="text-[11px] text-slate-500">
              © {new Date().getFullYear()} Bank of India Aadhar Loan Information Desk. All rights reserved.
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">
              {isHindi ? 'त्वरित लिंक' : 'Quick Navigation'}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#overview" className="hover:text-orange-400 transition-colors">
                  {isHindi ? 'लोन क्या है?' : 'What is Aadhar Loan?'}
                </a>
              </li>
              <li>
                <a href="#eligibility" className="hover:text-orange-400 transition-colors">
                  {isHindi ? 'पात्रता मानदंड' : 'Eligibility Criteria'}
                </a>
              </li>
              <li>
                <a href="#documents" className="hover:text-orange-400 transition-colors">
                  {isHindi ? 'आवश्यक दस्तावेज' : 'Required Documents'}
                </a>
              </li>
              <li>
                <a href="#interest-rates" className="hover:text-orange-400 transition-colors">
                  {isHindi ? 'ब्याज दरें 2025' : 'Interest Rates 2025'}
                </a>
              </li>
              <li>
                <a href="#emi-calculator" className="hover:text-orange-400 transition-colors">
                  {isHindi ? 'ईएमआई कैलकुलेटर' : 'EMI Calculator'}
                </a>
              </li>
              <li>
                <a href="#online-process" className="hover:text-orange-400 transition-colors">
                  {isHindi ? 'ऑनलाइन अप्लाई स्टेप्स' : 'Online Apply Steps'}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact / Top Action */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              {isHindi ? 'शीर्ष पर वापस जाएं' : 'Back to Top'}
            </h4>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 rounded-xl bg-slate-800 px-4 py-2.5 text-xs font-semibold text-slate-200 hover:bg-slate-700 hover:text-white transition-all shadow-xs"
            >
              <ArrowUp className="h-4 w-4 text-orange-400" />
              <span>{isHindi ? 'पेज के ऊपर जाएं' : 'Scroll to Top'}</span>
            </button>
            <div className="pt-2 text-[11px] text-slate-500">
              {isHindi ? 'स्वच्छ एवं तीव्र लोडिंग स्पीड के साथ अनुकूलित' : 'Optimized for mobile & lightning speed'}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
