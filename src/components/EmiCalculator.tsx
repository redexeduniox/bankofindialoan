import React, { useState, useId } from 'react';
import { Calculator, IndianRupee, Clock, Percent, ShieldCheck } from 'lucide-react';
import { Language } from '../types';

interface EmiCalculatorProps {
  lang: Language;
}

export const EmiCalculator: React.FC<EmiCalculatorProps> = ({ lang }) => {
  const [amount, setAmount] = useState<number>(300000);
  const [rate, setRate] = useState<number>(10.25);
  const [tenureYears, setTenureYears] = useState<number>(3);
  const amountInputId = useId();
  const rateInputId = useId();
  const tenureInputId = useId();

  // EMI Formula: P * r * (1+r)^n / ((1+r)^n - 1)
  const calculateEmi = () => {
    const principal = amount;
    const monthlyRate = rate / (12 * 100);
    const totalMonths = tenureYears * 12;

    if (monthlyRate === 0) return { emi: principal / totalMonths, totalInterest: 0, totalAmount: principal };

    const emi =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1);
    const totalAmount = emi * totalMonths;
    const totalInterest = totalAmount - principal;

    return {
      emi: Math.round(emi),
      totalInterest: Math.round(totalInterest),
      totalAmount: Math.round(totalAmount),
      totalMonths
    };
  };

  const { emi, totalInterest, totalAmount, totalMonths } = calculateEmi();
  const principalPercent = Math.round((amount / totalAmount) * 100);
  const interestPercent = 100 - principalPercent;

  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  const isHindi = lang === 'hi';

  return (
    <div id="calculator-card" className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
            <Calculator className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              {isHindi ? 'Bank of India Aadhar Loan EMI कैलकुलेटर' : 'Bank of India Aadhar Loan EMI Calculator'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {isHindi
                ? 'अपनी मासिक किस्त (EMI) और कुल ब्याज का तुरंत सटीक अनुमान लगाएं'
                : 'Instantly calculate your monthly installment and total interest'}
            </p>
          </div>
        </div>
        <span className="inline-flex items-center gap-1.5 self-start sm:self-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
          <ShieldCheck className="h-3.5 w-3.5" />
          BOI 2025 Rates
        </span>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Sliders Section */}
        <div className="space-y-6 lg:col-span-7">
          {/* Loan Amount */}
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor={amountInputId} className="text-sm font-semibold text-slate-700 flex items-center gap-1.5">
                <IndianRupee className="h-4 w-4 text-orange-600" />
                {isHindi ? 'लोन राशि (Loan Amount)' : 'Loan Amount'}
              </label>
              <span className="text-base font-bold text-slate-900 bg-orange-50 px-3 py-1 rounded-lg border border-orange-200">
                {formatINR(amount)}
              </span>
            </div>
            <input
              id={amountInputId}
              type="range"
              min={25000}
              max={2000000}
              step={25000}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              aria-label={isHindi ? 'लोन राशि' : 'Loan Amount'}
              className="mt-3 w-full accent-orange-600 h-2 bg-slate-100 rounded-lg cursor-pointer"
            />
            <div className="mt-2 flex flex-wrap items-center justify-between text-xs text-slate-500">
              <span>₹25,000</span>
              <div className="flex gap-1.5">
                {[100000, 300000, 500000, 1000000].map((preset) => (
                  <button
                    key={preset}
                    onClick={() => setAmount(preset)}
                    className={`rounded px-2 py-0.5 text-[11px] font-medium transition-colors ${
                      amount === preset
                        ? 'bg-orange-600 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    ₹{preset / 100000}L
                  </button>
                ))}
              </div>
              <span>₹20 Lakh</span>
            </div>
          </div>

          {/* Interest Rate */}
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor={rateInputId} className="text-sm font-semibold text-slate-700 flex items-center gap-1.5">
                <Percent className="h-4 w-4 text-blue-600" />
                {isHindi ? 'ब्याज दर प्रति वर्ष (Interest Rate p.a.)' : 'Interest Rate p.a.'}
              </label>
              <span className="text-base font-bold text-slate-900 bg-blue-50 px-3 py-1 rounded-lg border border-blue-200">
                {rate}%
              </span>
            </div>
            <input
              id={rateInputId}
              type="range"
              min={9.5}
              max={18}
              step={0.25}
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              aria-label={isHindi ? 'ब्याज दर' : 'Interest Rate'}
              className="mt-3 w-full accent-blue-600 h-2 bg-slate-100 rounded-lg cursor-pointer"
            />
            <div className="mt-2 flex items-center justify-between text-xs text-slate-500">
              <span>9.5%</span>
              <div className="flex gap-1.5">
                {[10.25, 11.5, 12.75, 14.0].map((preset) => (
                  <button
                    key={preset}
                    onClick={() => setRate(preset)}
                    className={`rounded px-2 py-0.5 text-[11px] font-medium transition-colors ${
                      rate === preset
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {preset}%
                  </button>
                ))}
              </div>
              <span>18.0%</span>
            </div>
          </div>

          {/* Tenure */}
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor={tenureInputId} className="text-sm font-semibold text-slate-700 flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-emerald-600" />
                {isHindi ? 'लोन अवधि (Loan Tenure)' : 'Loan Tenure'}
              </label>
              <span className="text-base font-bold text-slate-900 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200">
                {tenureYears} {isHindi ? 'वर्ष' : 'Years'} ({totalMonths} {isHindi ? 'माह' : 'Months'})
              </span>
            </div>
            <input
              id={tenureInputId}
              type="range"
              min={1}
              max={7}
              step={1}
              value={tenureYears}
              onChange={(e) => setTenureYears(Number(e.target.value))}
              aria-label={isHindi ? 'लोन अवधि' : 'Loan Tenure'}
              className="mt-3 w-full accent-emerald-600 h-2 bg-slate-100 rounded-lg cursor-pointer"
            />
            <div className="mt-2 flex items-center justify-between text-xs text-slate-500">
              <span>1 {isHindi ? 'वर्ष' : 'Year'}</span>
              <div className="flex gap-1.5">
                {[1, 2, 3, 5, 7].map((yr) => (
                  <button
                    key={yr}
                    onClick={() => setTenureYears(yr)}
                    className={`rounded px-2 py-0.5 text-[11px] font-medium transition-colors ${
                      tenureYears === yr
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {yr}Y
                  </button>
                ))}
              </div>
              <span>7 {isHindi ? 'वर्ष' : 'Years'}</span>
            </div>
          </div>
        </div>

        {/* Results Card */}
        <div className="lg:col-span-5 flex flex-col justify-between rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white shadow-md">
          <div>
            <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
              {isHindi ? 'मासिक अनुमानित किस्त' : 'Estimated Monthly EMI'}
            </span>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-black text-orange-400">
                {formatINR(emi)}
              </span>
              <span className="text-xs text-slate-400">/ {isHindi ? 'प्रति माह' : 'month'}</span>
            </div>

            <div className="mt-6 space-y-3.5 border-t border-slate-700/60 pt-4 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-300">{isHindi ? 'मूल लोन राशि (Principal):' : 'Principal Amount:'}</span>
                <span className="font-semibold text-white">{formatINR(amount)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">{isHindi ? 'कुल देय ब्याज (Total Interest):' : 'Total Interest:'}</span>
                <span className="font-semibold text-orange-300">{formatINR(totalInterest)}</span>
              </div>
              <div className="flex justify-between border-t border-slate-700/50 pt-2 font-bold">
                <span className="text-slate-200">{isHindi ? 'कुल भुगतान (Total Payable):' : 'Total Payable:'}</span>
                <span className="text-emerald-400">{formatINR(totalAmount)}</span>
              </div>
            </div>

            {/* Visual ratio bar */}
            <div className="mt-6">
              <div className="flex justify-between text-xs text-slate-300 mb-1.5 font-medium">
                <span>{isHindi ? 'मूलधन' : 'Principal'}: {principalPercent}%</span>
                <span>{isHindi ? 'ब्याज' : 'Interest'}: {interestPercent}%</span>
              </div>
              <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-700 flex">
                <div
                  className="bg-blue-500 transition-all duration-300"
                  style={{ width: `${principalPercent}%` }}
                  title="Principal"
                />
                <div
                  className="bg-orange-500 transition-all duration-300"
                  style={{ width: `${interestPercent}%` }}
                  title="Interest"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-lg bg-white/10 p-3 text-center text-xs text-slate-300 backdrop-blur-xs">
            {isHindi
              ? '* यह गणना अनुमानित है। सटीक ईएमआई आपके सिबिल स्कोर एवं बैंक ऑफ इंडिया के नियमों पर आधारित होगी।'
              : '* Calculation is indicative. Exact EMI is determined by BOI based on your CIBIL profile.'}
          </div>
        </div>
      </div>
    </div>
  );
};
