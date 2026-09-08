import React, { useState } from 'react';
import { Share2, Check, Copy, MessageCircle, Send, Facebook, Twitter, X } from 'lucide-react';
import { Language } from '../types';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose, lang }) => {
  const [copied, setCopied] = useState(false);
  const isHindi = lang === 'hi';

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://bankofindia.co.in';
  const shareTitle = isHindi
    ? 'Bank of India Aadhar Loan: आधार कार्ड से लोन कैसे लें? ब्याज दर, पात्रता व ऑनलाइन आवेदन प्रक्रिया'
    : 'Bank of India Aadhar Loan: Complete Guide on Interest Rates, Eligibility & Online Application';

  const shareText = isHindi
    ? 'बैंक ऑफ इंडिया से आधार e-KYC के जरिए पर्सनल लोन लेने की पूरी जानकारी यहां पढ़ें:'
    : 'Read the complete guide on getting a personal loan via Aadhaar e-KYC from Bank of India:';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  const shareLinks = [
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      color: 'bg-emerald-600 hover:bg-emerald-700 text-white',
      url: `https://api.whatsapp.com/send?text=${encodeURIComponent(shareTitle + ' ' + currentUrl)}`
    },
    {
      name: 'Telegram',
      icon: Send,
      color: 'bg-sky-500 hover:bg-sky-600 text-white',
      url: `https://t.me/share/url?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(shareTitle)}`
    },
    {
      name: 'Facebook',
      icon: Facebook,
      color: 'bg-blue-600 hover:bg-blue-700 text-white',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`
    },
    {
      name: 'X (Twitter)',
      icon: Twitter,
      color: 'bg-slate-900 hover:bg-black text-white',
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(currentUrl)}`
    }
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={isHindi ? 'वेबसाइट शेयर करें' : 'Share Article'}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
              <Share2 className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900">
                {isHindi ? 'इस महत्वपूर्ण जानकारी को शेयर करें' : 'Share This Guide'}
              </h3>
              <p className="text-xs text-slate-500">
                {isHindi ? 'दोस्तों और परिजनों को सही जानकारी पहुंचाएं' : 'Help friends and family stay informed'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Social Share Grid */}
        <div className="mt-5 grid grid-cols-2 gap-3">
          {shareLinks.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 rounded-xl p-3 text-xs font-semibold shadow-xs transition-transform active:scale-95 ${item.color}`}
            >
              <item.icon className="h-4 w-4" />
              <span>{item.name}</span>
            </a>
          ))}
        </div>

        {/* Copy Link Input */}
        <div className="mt-5">
          <label className="text-xs font-semibold text-slate-600 block mb-1.5">
            {isHindi ? 'पेज का सीधा लिंक' : 'Direct Page Link'}
          </label>
          <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 p-1.5">
            <input
              type="text"
              readOnly
              value={currentUrl}
              className="w-full bg-transparent px-2 text-xs text-slate-700 outline-hidden select-all"
            />
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 rounded-lg bg-blue-700 px-3 py-2 text-xs font-semibold text-white shadow-2xs hover:bg-blue-800 transition-colors shrink-0"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5" />
                  <span>{isHindi ? 'कॉपी हो गया' : 'Copied!'}</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>{isHindi ? 'कॉपी करें' : 'Copy'}</span>
                </>
              )}
            </button>
          </div>
        </div>

        <div className="mt-5 rounded-xl bg-orange-50 p-3 text-[11px] text-orange-900 leading-relaxed border border-orange-100">
          <strong>{isHindi ? 'सुरक्षा टिप:' : 'Security Tip:'}</strong>{' '}
          {isHindi
            ? 'सही जानकारी शेयर करके दूसरों को फेक आधार लोन देने वाले साइबर ठगों से बचाएं।'
            : 'Help others avoid fake Aadhaar loan scams by sharing verified banking facts.'}
        </div>
      </div>
    </div>
  );
};
