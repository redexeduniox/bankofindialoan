import React, { useState, useEffect } from 'react';
import { ListOrdered, ChevronDown, ChevronUp, ArrowUpRight } from 'lucide-react';
import { TOC_ITEMS } from '../data/loanContent';
import { Language } from '../types';

interface TableOfContentsProps {
  lang: Language;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeId, setActiveId] = useState<string>('overview');
  const isHindi = lang === 'hi';

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-80px 0px -60% 0px',
        threshold: 0.1
      }
    );

    TOC_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveId(id);
      // On mobile, keep it tidy
      if (window.innerWidth < 768) {
        setIsOpen(false);
      }
    }
  };

  return (
    <nav
      aria-label={isHindi ? 'विषय सूची' : 'Table of Contents'}
      className="my-8 rounded-2xl border border-blue-100 bg-gradient-to-b from-blue-50/70 to-slate-50 p-5 md:p-6 shadow-xs transition-all"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-700 text-white shadow-xs">
            <ListOrdered className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              {isHindi ? 'विषय सूची (Table of Contents)' : 'Table of Contents'}
            </h2>
            <span className="text-[11px] font-medium text-slate-500">
              {isHindi ? 'त्वरित नेविगेशन के लिए किसी भी बिंदु पर क्लिक करें' : 'Click to jump directly to any topic'}
            </span>
          </div>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
          aria-expanded={isOpen}
          aria-label={isHindi ? 'विषय सूची टॉगल करें' : 'Toggle Table of Contents'}
        >
          <span>{isOpen ? (isHindi ? 'छुपाएं' : 'Hide') : (isHindi ? 'दिखाएं' : 'Show')}</span>
          {isOpen ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
        </button>
      </div>

      {isOpen && (
        <div className="mt-4 border-t border-blue-100 pt-4">
          <ul className="grid grid-cols-1 gap-1.5 md:grid-cols-2">
            {TOC_ITEMS.map((item) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleScrollTo(e, item.id)}
                    className={`group flex items-center justify-between rounded-lg px-3 py-2 text-xs sm:text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-blue-700 text-white shadow-xs font-semibold'
                        : 'text-slate-700 hover:bg-white hover:text-blue-700 hover:shadow-2xs'
                    }`}
                  >
                    <span className="truncate pr-2">{item.title[lang]}</span>
                    <ArrowUpRight
                      className={`h-3.5 w-3.5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                        isActive ? 'text-white' : 'text-slate-400 group-hover:text-blue-700'
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
};
