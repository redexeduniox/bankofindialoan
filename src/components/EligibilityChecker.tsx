import React, { useState } from 'react';
import { CheckCircle2, AlertTriangle, XCircle, Sparkles, UserCheck } from 'lucide-react';
import { Language } from '../types';

interface EligibilityCheckerProps {
  lang: Language;
}

export const EligibilityChecker: React.FC<EligibilityCheckerProps> = ({ lang }) => {
  const [empType, setEmpType] = useState<'salaried' | 'self' | 'pensioner'>('salaried');
  const [income, setIncome] = useState<number>(35000);
  const [cibil, setCibil] = useState<number>(750);
  const [age, setAge] = useState<number>(29);

  const isHindi = lang === 'hi';

  // Evaluate eligibility
  const evaluate = () => {
    if (age < 21 || age > 65) {
      return {
        status: 'low',
        title: isHindi ? 'अपात्र (आयु सीमा)' : 'Ineligible (Age Limit)',
        desc: isHindi
          ? 'बैंक ऑफ इंडिया पर्सनल लोन के लिए आवेदक की आयु 21 से 65 वर्ष के बीच होनी चाहिए।'
          : 'Applicant age must be between 21 and 65 years for BOI Personal Loan.',
        color: 'rose',
        icon: XCircle,
        maxEligible: 0
      };
    }

    if (cibil < 650) {
      return {
        status: 'low',
        title: isHindi ? 'कम संभावना (कम सिबिल स्कोर)' : 'Low Probability (Low CIBIL)',
        desc: isHindi
          ? 'आपका सिबिल 650 से कम है। आधार कार्ड के साथ भी अनसिक्योर्ड लोन अप्रूव होना कठिन है। पहले सिबिल सुधारें या सिक्योर्ड लोन चुनें।'
          : 'CIBIL is below 650. Even with Aadhaar, unsecured loan approval is unlikely. Consider improving score or secured loans.',
        color: 'rose',
        icon: AlertTriangle,
        maxEligible: 0
      };
    }

    if (income < 15000) {
      return {
        status: 'moderate',
        title: isHindi ? 'मध्यम पात्रता (कम आय)' : 'Moderate Eligibility',
        desc: isHindi
          ? 'बैंक ऑफ इंडिया में न्यूनतम मासिक आय ₹15,000 आवश्यक है। आप छोटी राशि या सह-आवेदक के साथ प्रयास कर सकते हैं।'
          : 'BOI requires minimum net monthly income of ₹15,000. Try for a smaller amount or with a co-applicant.',
        color: 'amber',
        icon: AlertTriangle,
        maxEligible: Math.round(income * 8)
      };
    }

    // High eligible
    const multiplier = cibil >= 750 ? 18 : 12;
    const estimatedMax = Math.min(2000000, Math.round(income * multiplier));

    return {
      status: 'high',
      title: isHindi ? 'उच्च पात्रता (High Approval Chance)' : 'High Eligibility (High Approval Chance)',
      desc: isHindi
        ? 'बधाई! आपका सिबिल स्कोर और आय बैंक ऑफ इंडिया आधार e-KYC लोन के लिए सर्वोत्तम श्रेणी में है। आपको कम ब्याज दर पर तुरंत लोन मिल सकता है।'
        : 'Congratulations! Your profile matches BOI criteria well. You are eligible for optimal rates via Aadhaar e-KYC.',
      color: 'emerald',
      icon: CheckCircle2,
      maxEligible: estimatedMax
    };
  };

  const result = evaluate();

  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-xs">
      <div className="flex items-center gap-3 border-b border-slate-100 pb-5">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
          <UserCheck className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900">
            {isHindi ? 'Bank of India Aadhar Loan पात्रता चेकर' : 'Bank of India Aadhar Loan Eligibility Checker'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500">
            {isHindi
              ? 'बिना सिबिल स्कोर प्रभावित किए अपनी अप्रूवल संभावना और संभावित लोन राशि जानें'
              : 'Check your approval odds and eligible amount without impacting credit score'}
          </p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Input Controls */}
        <div className="space-y-4">
          {/* Employment Type */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              {isHindi ? 'रोजगार का प्रकार' : 'Employment Type'}
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'salaried', hi: 'सैलरीड (Salaried)', en: 'Salaried' },
                { id: 'self', hi: 'स्वरोजगार (Business)', en: 'Self-Employed' },
                { id: 'pensioner', hi: 'पेंशनभोगी', en: 'Pensioner' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setEmpType(item.id as any)}
                  className={`rounded-xl border p-2 text-xs font-semibold transition-all ${
                    empType === item.id
                      ? 'border-blue-600 bg-blue-50/80 text-blue-900 shadow-xs'
                      : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {isHindi ? item.hi : item.en}
                </button>
              ))}
            </div>
          </div>

          {/* Monthly Income */}
          <div>
            <div className="flex justify-between text-xs font-bold text-slate-700 uppercase mb-1">
              <span>{isHindi ? 'मासिक आय (Net Income)' : 'Monthly Income'}</span>
              <span className="text-blue-700 font-extrabold">{formatINR(income)}</span>
            </div>
            <input
              type="range"
              min={10000}
              max={250000}
              step={5000}
              value={income}
              onChange={(e) => setIncome(Number(e.target.value))}
              aria-label={isHindi ? 'मासिक आय' : 'Monthly Income'}
              className="w-full accent-blue-600 h-2 bg-slate-100 rounded-lg cursor-pointer"
            />
          </div>

          {/* CIBIL Score */}
          <div>
            <div className="flex justify-between text-xs font-bold text-slate-700 uppercase mb-1">
              <span>{isHindi ? 'सिबिल स्कोर (CIBIL Score)' : 'CIBIL Score'}</span>
              <span
                className={`font-extrabold ${
                  cibil >= 750
                    ? 'text-emerald-700'
                    : cibil >= 700
                    ? 'text-blue-700'
                    : cibil >= 650
                    ? 'text-amber-700'
                    : 'text-rose-700'
                }`}
              >
                {cibil} ({cibil >= 750 ? (isHindi ? 'उत्कृष्ट' : 'Excellent') : cibil >= 700 ? (isHindi ? 'अच्छा' : 'Good') : (isHindi ? 'सामान्य' : 'Fair')})
              </span>
            </div>
            <input
              type="range"
              min={550}
              max={900}
              step={10}
              value={cibil}
              onChange={(e) => setCibil(Number(e.target.value))}
              aria-label={isHindi ? 'सिबिल स्कोर' : 'CIBIL Score'}
              className="w-full accent-blue-600 h-2 bg-slate-100 rounded-lg cursor-pointer"
            />
          </div>

          {/* Age */}
          <div>
            <div className="flex justify-between text-xs font-bold text-slate-700 uppercase mb-1">
              <span>{isHindi ? 'आयु (Age)' : 'Applicant Age'}</span>
              <span className="text-slate-900 font-bold">{age} {isHindi ? 'वर्ष' : 'Years'}</span>
            </div>
            <input
              type="range"
              min={18}
              max={70}
              step={1}
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              aria-label={isHindi ? 'आयु' : 'Applicant Age'}
              className="w-full accent-blue-600 h-2 bg-slate-100 rounded-lg cursor-pointer"
            />
          </div>
        </div>

        {/* Evaluation Output */}
        <div
          className={`flex flex-col justify-between rounded-2xl border p-6 ${
            result.color === 'emerald'
              ? 'border-emerald-200 bg-emerald-50/50'
              : result.color === 'amber'
              ? 'border-amber-200 bg-amber-50/50'
              : 'border-rose-200 bg-rose-50/50'
          }`}
        >
          <div>
            <div className="flex items-center gap-2">
              <result.icon
                className={`h-6 w-6 ${
                  result.color === 'emerald'
                    ? 'text-emerald-700'
                    : result.color === 'amber'
                    ? 'text-amber-700'
                    : 'text-rose-700'
                }`}
              />
              <h4 className="text-base font-bold text-slate-900">{result.title}</h4>
            </div>

            <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-700">
              {result.desc}
            </p>

            {result.maxEligible > 0 && (
              <div className="mt-5 rounded-xl bg-white/90 p-4 border border-slate-200 shadow-2xs">
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                  {isHindi ? 'अनुमानित अधिकतम लोन सीमा' : 'Estimated Max Loan Eligibility'}
                </span>
                <span className="text-2xl font-black text-slate-900 mt-0.5 block">
                  {formatINR(result.maxEligible)}
                </span>
                <span className="text-[11px] text-slate-500 mt-1 block">
                  {isHindi
                    ? 'आधार e-KYC के साथ BOI मोबाइल ऐप या नजदीकी शाखा में आवेदन करें।'
                    : 'Apply via Aadhaar e-KYC on BOI Mobile App or nearest branch.'}
                </span>
              </div>
            )}
          </div>

          <div className="mt-4 flex items-center gap-2 text-xs text-slate-600">
            <Sparkles className="h-4 w-4 text-orange-600 shrink-0" />
            <span>
              {isHindi
                ? 'आधार कार्ड मोबाइल से लिंक होने पर OTP सत्यापन से पेपरलेस स्वीकृति संभव है।'
                : 'Having your mobile linked with Aadhaar enables instant OTP e-KYC verification.'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
