import React from 'react';

interface AdSlotProps {
  slotId: string;
  format?: 'banner' | 'rectangle' | 'in-feed' | 'horizontal';
  className?: string;
  label?: string;
}

export const AdSlot: React.FC<AdSlotProps> = ({
  slotId,
  format = 'horizontal',
  className = '',
  label = 'Advertisement'
}) => {
  return (
    <div
      id={`ad-container-${slotId}`}
      className={`my-6 w-full overflow-hidden transition-all duration-200 ${className}`}
    >
      {/* 
        ========================================================================
        ADVERTISEMENT CODE SLOT: ${slotId}
        Paste your Google AdSense, Ad Manager or Sponsor Banner code below.
        Example:
        <ins className="adsbygoogle"
             style={{ display: 'block' }}
             data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
             data-ad-slot="XXXXXXXXXX"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        ========================================================================
      */}

      {/* Fallback clean placeholder container (Non-intrusive, maintains zero CLS) */}
      <div className="relative mx-auto rounded-xl border border-dashed border-slate-200 bg-slate-50/80 p-3 text-center text-xs text-slate-500 shadow-xs hover:border-slate-300">
        <div className="flex items-center justify-between px-2 pb-1 text-[11px] font-medium tracking-wide text-slate-500 uppercase">
          <span>{label}</span>
          <span className="text-[10px] text-slate-500">Sponsored Space</span>
        </div>
        <div
          className={`flex items-center justify-center rounded-lg bg-white/80 text-slate-500 font-medium ${
            format === 'banner'
              ? 'h-24 sm:h-28'
              : format === 'rectangle'
              ? 'h-60'
              : 'h-20 sm:h-24'
          }`}
        >
          <div className="space-y-1">
            <p className="text-xs font-semibold text-slate-500">Ad Placement Spot ({slotId})</p>
            <p className="text-[11px] text-slate-500">
              Replace this slot with your Google AdSense code or Banner
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
