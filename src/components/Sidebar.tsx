import React from 'react';
import { PhoneCall, ShieldCheck, ExternalLink, Award, FileText, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { AdSlot } from './AdSlot';

interface SidebarProps {
  lang: Language;
}

export const Sidebar: React.FC<SidebarProps> = ({ lang }) => {
  const isHindi = lang === 'hi';

  return (
    <aside className="space-y-6 lg:sticky lg:top-24">
      {/* Fact Check & Editorial Credibility Card (E-E-A-T) */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
            <Award className="h-5 w-5" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block">
              {isHindi ? 'सत्यापित बैंकिंग गाइड' : 'Verified Banking Guide'}
            </span>
            <span className="text-sm font-extrabold text-slate-900 block">
              {isHindi ? 'BOI 2025 दिशा-निर्देश' : 'BOI 2025 Guidelines'}
            </span>
          </div>
        </div>
        <p className="mt-3 text-xs text-slate-600 leading-relaxed">
          {isHindi
            ? 'यह लेख बैंक ऑफ इंडिया (BOI) के आधिकारिक स्टार पर्सनल लोन और आधार e-KYC सत्यापन नियमों के आधार पर वित्तीय विशेषज्ञों द्वारा संकलित किया गया है।'
            : 'Compiled by financial analysts based on official Bank of India Star Personal Loan and Aadhaar e-KYC guidelines.'}
        </p>
        <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3 text-[11px] text-slate-500">
          <span>{isHindi ? 'अपडेट:' : 'Updated:'} May 2025</span>
          <span className="flex items-center gap-1 text-emerald-600 font-semibold">
            <ShieldCheck className="h-3.5 w-3.5" />
            {isHindi ? 'तथ्य जाँचे गए' : 'Fact Checked'}
          </span>
        </div>
      </div>

      {/* Quick Summary Card */}
      <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-900 to-slate-900 p-5 text-white shadow-md">
        <span className="inline-block rounded-full bg-orange-500/20 px-2.5 py-0.5 text-[10px] font-bold text-orange-400 uppercase tracking-wider">
          {isHindi ? 'त्वरित स्नैपशॉट' : 'Quick Snapshot'}
        </span>
        <h4 className="mt-2 text-base font-bold text-white">
          {isHindi ? 'Bank of India Aadhar Loan हाइलाइट्स' : 'Bank of India Aadhar Loan Highlights'}
        </h4>

        <div className="mt-4 space-y-2.5 text-xs text-slate-200">
          <div className="flex justify-between border-b border-slate-800 pb-2">
            <span className="text-slate-400">{isHindi ? 'अधिकतम राशि:' : 'Max Amount:'}</span>
            <span className="font-bold text-orange-400">₹20 Lakh</span>
          </div>
          <div className="flex justify-between border-b border-slate-800 pb-2">
            <span className="text-slate-400">{isHindi ? 'शुरुआती ब्याज:' : 'Starting Rate:'}</span>
            <span className="font-bold text-emerald-400">10.25% p.a.*</span>
          </div>
          <div className="flex justify-between border-b border-slate-800 pb-2">
            <span className="text-slate-400">{isHindi ? 'पुनर्भुगतान अवधि:' : 'Repayment:'}</span>
            <span className="font-bold text-white">12 - 84 {isHindi ? 'माह' : 'Months'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">{isHindi ? 'e-KYC मोड:' : 'e-KYC Mode:'}</span>
            <span className="font-bold text-white">{isHindi ? 'आधार OTP / बायोमेट्रिक' : 'Aadhaar OTP / Bio'}</span>
          </div>
        </div>

        <a
          href="#online-process"
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-4 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-orange-600 transition-colors"
        >
          <span>{isHindi ? 'ऑनलाइन आवेदन स्टेप्स' : 'Apply Online Steps'}</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* 
        ========================================================================
        ADVERTISEMENT SLOT: Sidebar Sticky Banner
        High viewability ad unit on desktop screens.
        ========================================================================
      */}
      <AdSlot slotId="sidebar-sticky" format="rectangle" label={isHindi ? 'विज्ञापन' : 'Advertisement'} />

      {/* Official BOI Helpline Card */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
        <h4 className="flex items-center gap-2 text-sm font-bold text-slate-900">
          <PhoneCall className="h-4 w-4 text-blue-700" />
          <span>{isHindi ? 'BOI आधिकारिक हेल्पलाइन' : 'Official BOI Helpline'}</span>
        </h4>
        <p className="mt-1 text-xs text-slate-500">
          {isHindi ? 'लोन या e-KYC से संबंधित किसी भी पूछताछ के लिए:' : 'For loan inquiry or Aadhaar e-KYC support:'}
        </p>

        <div className="mt-3 space-y-2">
          <a
            href="tel:18001031906"
            className="flex items-center justify-between rounded-xl bg-slate-50 p-2.5 text-xs font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-800 transition-colors"
          >
            <span>Toll-Free 1:</span>
            <span className="font-bold text-blue-700">1800 103 1906</span>
          </a>
          <a
            href="tel:1800220229"
            className="flex items-center justify-between rounded-xl bg-slate-50 p-2.5 text-xs font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-800 transition-colors"
          >
            <span>Toll-Free 2:</span>
            <span className="font-bold text-blue-700">1800 220 229</span>
          </a>
        </div>

        <a
          href="https://bankofindia.co.in"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-blue-700 transition-colors pt-2 border-t border-slate-100"
        >
          <span>bankofindia.co.in</span>
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    </aside>
  );
};
