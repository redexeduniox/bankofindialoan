import React, { useState } from 'react';
import {
  ShieldCheck,
  Calendar,
  Clock,
  User,
  CheckCircle,
  AlertCircle,
  FileCheck,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Info,
  CheckSquare,
  AlertTriangle,
  Sparkles,
  Smartphone,
  Building,
  HelpCircle,
  FileText
} from 'lucide-react';
import { Language } from '../types';
import { FAQS, HIGHLIGHTS_DATA } from '../data/loanContent';
import { EmiCalculator } from './EmiCalculator';
import { EligibilityChecker } from './EligibilityChecker';
import { TableOfContents } from './TableOfContents';
import { AdSlot } from './AdSlot';

interface ArticleContentProps {
  lang: Language;
}

export const ArticleContent: React.FC<ArticleContentProps> = ({ lang }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const isHindi = lang === 'hi';

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <article className="min-w-0 space-y-10">
      {/* Article Header & Main H1 with Primary Keyword */}
      <header className="space-y-4 border-b border-slate-200 pb-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-800 uppercase tracking-wide">
            <Sparkles className="h-3.5 w-3.5" />
            {isHindi ? 'विशेष गाइड 2025' : 'Featured Guide 2025'}
          </span>
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-800">
            {isHindi ? 'आधार e-KYC लोन' : 'Aadhaar e-KYC Loan'}
          </span>
          <span className="text-xs font-semibold text-slate-500">
            {isHindi ? 'पढ़ने का समय: 8 मिनट' : '8 min read'}
          </span>
        </div>

        {/* Primary SEO H1 Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-[1.25]">
          {isHindi ? (
            <>
              <span className="text-blue-900">Bank of India Aadhar Loan:</span> आधार कार्ड से लोन कैसे लें? ब्याज दर, पात्रता व ऑनलाइन अप्लाई का पूरा सच
            </>
          ) : (
            <>
              <span className="text-blue-900">Bank of India Aadhar Loan:</span> How to Get Loan on Aadhaar Card? Rates, Eligibility & Step-by-Step Application
            </>
          )}
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          {isHindi
            ? 'क्या आप बैंक ऑफ इंडिया से आधार कार्ड के माध्यम से तुरंत पर्सनल लोन (BOI Instant Loan) लेना चाहते हैं? जानिए बैंक ऑफ इंडिया आधार लोन (Bank of India Aadhar Loan) की वास्तविक प्रक्रिया, ब्याज दरें (10.25% से), आवश्यक दस्तावेज और घर बैठे मोबाइल से ऑनलाइन आवेदन करने का संपूर्ण तरीका।'
            : 'Looking to secure an instant personal loan from Bank of India using your Aadhaar card? Learn the real banking facts, 2025 interest rates (from 10.25%), required documents, and step-by-step online application process through digital e-KYC.'}
        </p>

        {/* Author / Date Meta bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 text-xs sm:text-sm text-slate-500">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-200 text-slate-700 font-bold">
              <User className="h-4 w-4" />
            </div>
            <div>
              <span className="font-semibold text-slate-800 block">
                {isHindi ? 'वित्तीय अनुसंधान डेस्क' : 'Financial Research Desk'}
              </span>
              <span className="text-xs text-slate-500">
                {isHindi ? 'बैंकिंग एवं ऋण विशेषज्ञ' : 'Banking & Credit Expert'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5 text-slate-400" />
              {isHindi ? 'अपडेटेड: 10 मई, 2025' : 'Updated: May 10, 2025'}
            </span>
            <span className="flex items-center gap-1 text-emerald-600 font-semibold">
              <ShieldCheck className="h-4 w-4" />
              {isHindi ? 'आरबीआई एवं बीओआई नियमों द्वारा सत्यापित' : 'RBI & BOI Compliant'}
            </span>
          </div>
        </div>
      </header>

      {/* Quick Summary / Key Takeaways Box for High Engagement & SEO Snippets */}
      <div className="rounded-2xl border-2 border-orange-200 bg-orange-50/60 p-5 sm:p-6 shadow-2xs">
        <h3 className="text-base font-bold text-orange-950 flex items-center gap-2">
          <Info className="h-5 w-5 text-orange-600" />
          {isHindi ? 'मुख्य सारांश (Quick Highlights at a Glance)' : 'Quick Highlights at a Glance'}
        </h3>
        <ul className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2 text-xs sm:text-sm text-slate-800">
          <li className="flex items-start gap-2">
            <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>
              <strong>{isHindi ? 'लोन राशि:' : 'Loan Amount:'}</strong> ₹50,000 {isHindi ? 'से' : 'to'} ₹20 {isHindi ? 'लाख तक' : 'Lakhs'}
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>
              <strong>{isHindi ? 'ब्याज दर:' : 'Interest Rate:'}</strong> 10.25% - 14.50% p.a.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>
              <strong>{isHindi ? 'सत्यापन:' : 'Verification:'}</strong> आधार OTP e-KYC {isHindi ? 'द्वारा पेपरलेस' : 'Paperless via OTP'}
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>
              <strong>{isHindi ? 'पुनर्भुगतान:' : 'Tenure:'}</strong> 1 {isHindi ? 'से' : 'to'} 7 {isHindi ? 'वर्ष (12-84 माह)' : 'Years (12-84 Months)'}
            </span>
          </li>
        </ul>
      </div>

      {/* 
        ========================================================================
        ADVERTISEMENT SLOT: Top Leaderboard
        Placed immediately before Table of Contents.
        ========================================================================
      */}
      <AdSlot slotId="article-top-leaderboard" format="banner" label={isHindi ? 'प्रायोजित विज्ञापन' : 'Advertisement'} />

      {/* Table of Contents with Jump on links */}
      <TableOfContents lang={lang} />

      {/* Section 1: Overview & The Truth of Aadhar Loan */}
      <section id="overview" className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5 border-l-4 border-blue-700 pl-3">
          {isHindi ? '1. Bank of India Aadhar Loan क्या है? जानिए असली सच्चाई' : '1. What is Bank of India Aadhar Loan? The Real Facts'}
        </h2>

        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          {isHindi ? (
            <>
              इंटरनेट पर कई जगह यह दावा किया जाता है कि <strong>Bank of India Aadhar Loan</strong> के तहत केवल आधार कार्ड दिखाकर कोई भी व्यक्ति तुरंत लाखों का लोन ले सकता है। लेकिन एक जिम्मेदार और जागरूक नागरिक के तौर पर आपको इसकी बैंकिंग सच्चाई समझना जरूरी है।
            </>
          ) : (
            <>
              Many sources on the web advertise that one can obtain an instant multi-lakh loan simply by producing an Aadhaar card. As an informed customer, it is crucial to understand how <strong>Bank of India Aadhar Loan</strong> actually works in genuine banking operations.
            </>
          )}
        </p>

        <div className="rounded-xl border border-blue-200 bg-blue-50/70 p-4 text-xs sm:text-sm text-blue-950 leading-relaxed">
          <h4 className="font-bold text-blue-900 mb-1 flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-blue-700" />
            {isHindi ? 'e-KYC (इलेक्ट्रॉनिक नो योर कस्टमर) की भूमिका:' : 'The Role of e-KYC (Electronic KYC):'}
          </h4>
          <p>
            {isHindi
              ? 'बैंक ऑफ इंडिया (BOI) में आधार कार्ड लोन का सीधा मतलब है कि आपका लोन UIDAI आधार e-KYC के माध्यम से डिजिटल रूप से सत्यापित किया जाता है। आधार कार्ड से आपकी पहचान (Identity) और स्थायी पते (Address) का सत्यापन कुछ ही सेकंड में बिना किसी कागजी दस्तावेजीकरण के हो जाता है। इस योजना को मुख्य रूप से "BOI Star Personal Loan" कहा जाता है।'
              : 'In Bank of India, "Aadhar Loan" refers to unsecured personal loans where applicant identification and address authentication are carried out paperlessly via UIDAI Aadhaar e-KYC. This streamlined verification is primarily issued under the "BOI Star Personal Loan" scheme.'}
          </p>
        </div>

        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          {isHindi
            ? 'हालांकि, चूंकि यह एक अनसिक्योर्ड लोन (Unsecured Personal Loan) होता है, इसलिए आधार कार्ड के अतिरिक्त बैंक आपकी आय का प्रमाण (सैलरी स्लिप अथवा ITR) और सिबिल क्रेडिट स्कोर की जांच भी करता है ताकि यह सुनिश्चित हो सके कि आप समय पर मासिक किस्त (EMI) चुकाने में सक्षम हैं।'
            : 'However, because this is an unsecured loan, alongside Aadhaar e-KYC, BOI also assesses your repayment capacity using income proof (salary slips or ITR) and your CIBIL credit score.'}
        </p>
      </section>

      {/* Section 2: Key Features & Highlights Table */}
      <section id="key-highlights" className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5 border-l-4 border-orange-600 pl-3">
          {isHindi ? '2. Bank of India Aadhar Loan की प्रमुख विशेषताएं' : '2. Key Features of Bank of India Aadhar Loan'}
        </h2>

        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          {isHindi
            ? 'बैंक ऑफ इंडिया अपने ग्राहकों को प्रतिस्पर्धी ब्याज दरों और न्यूनतम कागजी कार्रवाई पर आधार लिंक्ड लोन की सुविधा देता है। नीचे दी गई तालिका में मुख्य विवरण देखें:'
            : 'Bank of India offers competitive interest rates and minimal paperwork for Aadhaar-linked loans. Check the summary table below:'}
        </p>

        {/* Highlights Table */}
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-100/80 text-slate-800 font-bold uppercase tracking-wider text-[11px] border-b border-slate-200">
                <tr>
                  <th className="px-4 py-3">{isHindi ? 'पैरामीटर (Parameter)' : 'Feature Parameter'}</th>
                  <th className="px-4 py-3">{isHindi ? 'विवरण (Details 2025)' : 'Details 2025'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {HIGHLIGHTS_DATA[lang].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                    <td className="px-4 py-3 font-semibold text-slate-900">{row.label}</td>
                    <td className="px-4 py-3 font-medium text-blue-900">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 3: Eligibility Criteria */}
      <section id="eligibility" className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5 border-l-4 border-blue-700 pl-3">
          {isHindi ? '3. पात्रता मानदंड (Eligibility Criteria) - कौन ले सकता है यह लोन?' : '3. Eligibility Criteria - Who Can Apply?'}
        </h2>

        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          {isHindi
            ? 'बैंक ऑफ इंडिया आधार कार्ड लोन के लिए आवेदन करने हेतु आवेदक को निम्नलिखित पात्रता शर्तों को पूरा करना होगा:'
            : 'To qualify for a Bank of India Aadhar Loan, applicants must fulfill the following criteria:'}
        </p>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <CheckSquare className="h-4 w-4 text-emerald-600" />
              {isHindi ? '1. आयु सीमा (Age Limit)' : '1. Age Limit'}
            </h4>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-600">
              {isHindi
                ? 'न्यूनतम आयु 21 वर्ष और लोन परिपक्वता के समय अधिकतम आयु 65 वर्ष (पेंशनरों के लिए 75 वर्ष तक) होनी चाहिए।'
                : 'Minimum age is 21 years and maximum age at maturity is 65 years (up to 75 years for pensioners).'}
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <CheckSquare className="h-4 w-4 text-emerald-600" />
              {isHindi ? '2. रोजगार स्थिति (Employment)' : '2. Employment Status'}
            </h4>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-600">
              {isHindi
                ? 'वेतनभोगी कर्मचारी (सरकारी, पीएसयू, निजी कंपनी), पेशेवर (डॉक्टर, सीए, इंजीनियर) अथवा स्व-नियोजित व्यापारी।'
                : 'Salaried employees (Govt, PSU, reputed private firms), self-employed professionals, or business owners.'}
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <CheckSquare className="h-4 w-4 text-emerald-600" />
              {isHindi ? '3. न्यूनतम मासिक आय (Minimum Income)' : '3. Minimum Monthly Income'}
            </h4>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-600">
              {isHindi
                ? 'न्यूनतम शुद्ध मासिक आय ₹15,000 (ग्रामीण व अर्ध-शहरी) और ₹25,000 (मेट्रो शहरों के लिए) होनी चाहिए।'
                : 'Net monthly income must be at least ₹15,000 (semi-urban/rural) or ₹25,000 (metro cities).'}
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <CheckSquare className="h-4 w-4 text-emerald-600" />
              {isHindi ? '4. सिबिल स्कोर (CIBIL Score)' : '4. CIBIL Score'}
            </h4>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-600">
              {isHindi
                ? 'न्यूनतम सिबिल स्कोर 700 होना चाहिए। 750 या उससे अधिक स्कोर होने पर सबसे सस्ती ब्याज दर मिलती है।'
                : 'A minimum CIBIL score of 700 is needed; 750+ yields maximum approval rates and best terms.'}
            </p>
          </div>
        </div>

        <div className="rounded-xl bg-amber-50 p-4 border border-amber-200 text-xs sm:text-sm text-amber-950 flex items-start gap-2.5">
          <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
          <p>
            <strong>{isHindi ? 'महत्वपूर्ण शर्त:' : 'Mandatory Condition:'}</strong>{' '}
            {isHindi
              ? 'आपका आधार कार्ड आपके सक्रिय मोबाइल नंबर से लिंक होना अनिवार्य है ताकि UIDAI से भेजा गया OTP प्राप्त किया जा सके।'
              : 'Your Aadhaar card must be linked to your active mobile number to receive OTP during e-KYC.'}
          </p>
        </div>
      </section>

      {/* Section 4: Required Documents Checklist */}
      <section id="documents" className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5 border-l-4 border-orange-600 pl-3">
          {isHindi ? '4. आवश्यक दस्तावेज (Required Documents Checklist)' : '4. Required Documents Checklist'}
        </h2>

        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          {isHindi
            ? 'बैंक ऑफ इंडिया में आधार e-KYC से लोन लेने के लिए निम्नलिखित दस्तावेजों की आवश्यकता होती है:'
            : 'Prepare the following documents before applying for a Bank of India Aadhar Loan:'}
        </p>

        <div className="space-y-3">
          <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-3.5 shadow-2xs">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-100 text-orange-700 font-bold shrink-0">
              1
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">
                {isHindi ? 'पहचान व पता प्रमाण (e-KYC):' : 'Identity & Address Proof (e-KYC):'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                {isHindi
                  ? 'आधार कार्ड (Aadhaar Card) - मोबाइल से लिंक, और पैन कार्ड (PAN Card - अनिवार्य)।'
                  : 'Aadhaar Card (linked with mobile) and PAN Card (mandatory for financial transactions).'}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-3.5 shadow-2xs">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-blue-700 font-bold shrink-0">
              2
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">
                {isHindi ? 'आय का प्रमाण (Income Proof):' : 'Income Proof:'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                {isHindi
                  ? 'सैलरीड के लिए: पिछले 3 माह की सैलरी स्लिप एवं नवीनतम फॉर्म 16। स्व-रोजगार के लिए: पिछले 2 वर्षों का ITR व कंप्यूटेशन शीट।'
                  : 'For Salaried: Last 3 months salary slips & latest Form 16. For Self-employed: Last 2 years ITR with computation sheets.'}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-3.5 shadow-2xs">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 font-bold shrink-0">
              3
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">
                {isHindi ? 'बैंक खाता विवरण (Bank Statement):' : 'Bank Account Statement:'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                {isHindi
                  ? 'सैलरी अकाउंट या मुख्य चालू/बचत खाते का पिछले 6 महीनों का बैंक स्टेटमेंट (पीडीएफ या नेट बैंकिंग के जरिए)।'
                  : 'Last 6 months bank statement showing regular salary credit or business revenue.'}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-3.5 shadow-2xs">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100 text-purple-700 font-bold shrink-0">
              4
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">
                {isHindi ? 'फोटो व हस्ताक्षर:' : 'Photographs & Signature:'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                {isHindi
                  ? 'हाल ही की पासपोर्ट साइज फोटोग्राफ और सफेद कागज पर किए गए हस्ताक्षर की डिजिटल कॉपी।'
                  : 'Recent passport-size photograph and digital signature on blank white paper.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        ADVERTISEMENT SLOT: In-Article Middle Ad
        High-performing in-content ad slot between documents and interest rates.
        ========================================================================
      */}
      <AdSlot slotId="in-article-mid" format="banner" label={isHindi ? 'प्रायोजित विज्ञापन' : 'Advertisement'} />

      {/* Section 5: Interest Rates & Charges */}
      <section id="interest-rates" className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5 border-l-4 border-blue-700 pl-3">
          {isHindi ? '5. ब्याज दर और शुल्क (Interest Rates & Charges 2025)' : '5. Interest Rates & Charges 2025'}
        </h2>

        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          {isHindi
            ? 'बैंक ऑफ इंडिया की पर्सनल लोन ब्याज दरें रेपो लिंक्ड लेंडिंग रेट (RLLR) और आवेदक के क्रेडिट स्कोर पर आधारित होती हैं। नीचे दी गई सिबिल आधारित ब्याज दर संरचना को ध्यान से समझें:'
            : 'Bank of India personal loan rates are linked to the Repo Linked Lending Rate (RLLR) and applicant credit scores:'}
        </p>

        {/* Rates Table */}
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-900 text-white font-bold text-[11px] uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3">{isHindi ? 'सिबिल स्कोर (CIBIL Range)' : 'CIBIL Range'}</th>
                  <th className="px-4 py-3">{isHindi ? 'अनुमानित ब्याज दर (p.a.)' : 'Interest Rate (p.a.)'}</th>
                  <th className="px-4 py-3">{isHindi ? 'स्वीकृति संभावना' : 'Approval Probability'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-800">
                <tr className="bg-emerald-50/50 hover:bg-emerald-50">
                  <td className="px-4 py-3 font-bold text-emerald-800">750 एवं उससे अधिक (750+)</td>
                  <td className="px-4 py-3 font-extrabold text-slate-900">10.25% - 11.25%</td>
                  <td className="px-4 py-3 font-semibold text-emerald-700">{isHindi ? 'सर्वोच्च (तुरंत)' : 'Highest (Instant)'}</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-4 py-3 font-bold text-blue-800">700 से 749</td>
                  <td className="px-4 py-3 font-extrabold text-slate-900">11.50% - 12.75%</td>
                  <td className="px-4 py-3 font-semibold text-blue-700">{isHindi ? 'उच्च (High)' : 'High'}</td>
                </tr>
                <tr className="bg-amber-50/40 hover:bg-amber-50">
                  <td className="px-4 py-3 font-bold text-amber-800">650 से 699</td>
                  <td className="px-4 py-3 font-extrabold text-slate-900">13.00% - 14.50%</td>
                  <td className="px-4 py-3 font-semibold text-amber-700">{isHindi ? 'मध्यम (समीक्षाधीन)' : 'Moderate'}</td>
                </tr>
                <tr className="bg-rose-50/40 hover:bg-rose-50">
                  <td className="px-4 py-3 font-bold text-rose-800">650 से कम</td>
                  <td className="px-4 py-3 font-extrabold text-slate-900">{isHindi ? 'बैंक के विवेकानुसार' : 'Bank Discretion'}</td>
                  <td className="px-4 py-3 font-semibold text-rose-700">{isHindi ? 'कम (गारंटर जरूरी)' : 'Low (Guarantor req.)'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600 pt-2">
          <div className="rounded-lg bg-slate-100 p-3">
            <strong>{isHindi ? 'प्रोसेसिंग शुल्क:' : 'Processing Fee:'}</strong>{' '}
            {isHindi ? 'लोन राशि का 1% से 2% (न्यूनतम ₹1,000 + GST)।' : '1% to 2% of loan amount (Min ₹1,000 + GST).'}
          </div>
          <div className="rounded-lg bg-slate-100 p-3">
            <strong>{isHindi ? 'फोरक्लोज़र/प्रीपेमेंट:' : 'Foreclosure Charges:'}</strong>{' '}
            {isHindi ? 'फ्लोटिंग रेट पर कोई प्रीपेमेंट पेनल्टी नहीं।' : 'Nil prepayment penalty on floating rate loans.'}
          </div>
        </div>
      </section>

      {/* Section 6: Interactive EMI Calculator */}
      <section id="emi-calculator" className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5 border-l-4 border-orange-600 pl-3">
          {isHindi ? '6. Bank of India Aadhar Loan EMI कैलकुलेटर' : '6. BOI Aadhar Loan EMI Calculator'}
        </h2>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          {isHindi
            ? 'लोन लेने से पहले अपनी मासिक किस्त (EMI) की गणना करना बेहद जरूरी है ताकि आपके मासिक बजट पर कोई अतिरिक्त बोझ न पड़े। नीचे दिए गए कैलकुलेटर में अपनी आवश्यकतानुसार राशि और अवधि चुनकर अपनी ईएमआई देखें:'
            : 'Calculate your exact monthly EMI before applying to ensure it fits comfortably within your household budget:'}
        </p>
        <EmiCalculator lang={lang} />
      </section>

      {/* Section 7: Instant Eligibility Checker */}
      <section id="eligibility-checker" className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5 border-l-4 border-blue-700 pl-3">
          {isHindi ? '7. अपनी लोन पात्रता तुरंत जांचें' : '7. Check Your Loan Eligibility Instantly'}
        </h2>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          {isHindi
            ? 'अपनी आयु, आय और सिबिल स्कोर दर्ज करके तुरंत पता करें कि आपको बैंक ऑफ इंडिया से कितना पर्सनल लोन मिल सकता है:'
            : 'Check how much loan you can qualify for based on your income, age, and credit score:'}
        </p>
        <EligibilityChecker lang={lang} />
      </section>

      {/* Section 8: Online Application Process (Step-by-Step) */}
      <section id="online-process" className="space-y-5">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5 border-l-4 border-orange-600 pl-3">
          {isHindi ? '8. Bank of India Aadhar Loan ऑनलाइन आवेदन: स्टेप-बाय-स्टेप प्रक्रिया' : '8. Step-by-Step Online Application Process'}
        </h2>

        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          {isHindi
            ? 'यदि आप बैंक ऑफ इंडिया के नए या पुराने ग्राहक हैं, तो आप घर बैठे अपने मोबाइल फोन अथवा लैपटॉप से निम्नलिखित आसान चरणों का पालन करके आवेदन कर सकते हैं:'
            : 'Follow these step-by-step instructions to apply for a BOI Aadhar Loan from home using your phone or laptop:'}
        </p>

        {/* Step-by-step cards */}
        <div className="space-y-4">
          {[
            {
              step: '1',
              title: {
                hi: 'आधिकारिक पोर्टल अथवा ऐप पर जाएं',
                en: 'Visit Official Website or Mobile App'
              },
              desc: {
                hi: 'अपने ब्राउज़र में बैंक ऑफ इंडिया की आधिकारिक वेबसाइट (bankofindia.co.in) खोलें या गूगल प्ले स्टोर / एप्पल ऐप स्टोर से "BOI Mobile Omni Neo" ऐप डाउनलोड करें।',
                en: 'Navigate to bankofindia.co.in or launch the official "BOI Mobile Omni Neo" application on your smartphone.'
              }
            },
            {
              step: '2',
              title: {
                hi: 'पर्सनल लोन सेक्शन चुनें (Apply for Personal Loan)',
                en: 'Select Personal Loan Category'
              },
              desc: {
                hi: 'होमपेज पर "Loans" मेन्यू में जाएं और "Star Personal Loan" या "Instant Personal Loan" के विकल्प पर क्लिक करें।',
                en: 'From the main menu, choose "Loans" and click on "Star Personal Loan" or "Digital Instant Personal Loan".'
              }
            },
            {
              step: '3',
              title: {
                hi: 'आधार लिंक्ड मोबाइल नंबर दर्ज करें व OTP सत्यापित करें',
                en: 'Enter Mobile Number & Verify OTP'
              },
              desc: {
                hi: 'अपना वह मोबाइल नंबर दर्ज करें जो आपके आधार कार्ड से जुड़ा हुआ है। आपके फोन पर 6 अंकों का ओटीपी आएगा, उसे दर्ज कर आगे बढ़ें।',
                en: 'Provide your active mobile number linked with Aadhaar. Enter the 6-digit OTP received to verify identity.'
              }
            },
            {
              step: '4',
              title: {
                hi: 'आधार संख्या दर्ज कर e-KYC ऑथेंटिकेशन पूर्ण करें',
                en: 'Complete Aadhaar e-KYC Authentication'
              },
              desc: {
                hi: 'अपना 12 अंकों का आधार नंबर दर्ज करें। UIDAI की ओर से आपके आधार-पंजीकृत मोबाइल पर प्रमाणीकरण ओटीपी भेजा जाएगा। इसे सबमिट करते ही आपका नाम, पता व जन्मतिथि बैंक द्वारा स्वतः सत्यापित हो जाएगी।',
                en: 'Input your 12-digit Aadhaar number. Enter the UIDAI OTP to allow BOI to fetch your verified demographic details instantly.'
              }
            },
            {
              step: '5',
              title: {
                hi: 'पैन कार्ड व आय विवरण भरें',
                en: 'Fill Income & PAN Details'
              },
              desc: {
                hi: 'अपना पैन कार्ड नंबर, कंपनी का नाम, मासिक वेतन और कार्य अनुभव दर्ज करें। अकाउंट एग्रीगेटर या नेट बैंकिंग क्रेडेंशियल से अपना 6 महीने का बैंक स्टेटमेंट डिजिटल रूप से सत्यापित करें।',
                en: 'Enter your PAN number, employer name, and net salary. Connect your bank account via Account Aggregator or net banking for statement review.'
              }
            },
            {
              step: '6',
              title: {
                hi: 'लोन ऑफर चुनें और ई-हस्ताक्षर (e-Sign) करें',
                en: 'Select Loan Offer & e-Sign Agreement'
              },
              desc: {
                hi: 'सिबिल और आय के आधार पर स्क्रीन पर आपकी स्वीकृत लोन सीमा और ब्याज दर दिखेगी। पसंदीदा ईएमआई और अवधि चुनकर आधार e-Sign के माध्यम से ऋण समझौते पर डिजिटल हस्ताक्षर करें।',
                en: 'Review the sanctioned loan amount and tenor. E-sign the loan contract using Aadhaar OTP e-Sign.'
              }
            },
            {
              step: '7',
              title: {
                hi: 'खाते में राशि का ट्रांसफर (Disbursement)',
                en: 'Loan Disbursal to Bank Account'
              },
              desc: {
                hi: 'सफल सत्यापन के बाद स्वीकृत लोन राशि सीधे आपके बैंक ऑफ इंडिया अथवा निर्दिष्ट बैंक खाते में ट्रांसफर कर दी जाएगी।',
                en: 'Upon successful authorization, the sanctioned funds are credited directly into your verified bank account.'
              }
            }
          ].map((item) => (
            <div
              key={item.step}
              className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-2xs hover:border-blue-200 transition-colors"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-900 text-white font-extrabold text-sm shrink-0 shadow-xs">
                {item.step}
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-slate-900">{item.title[lang]}</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc[lang]}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center pt-2">
          <a
            href="https://bankofindia.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-900 px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-blue-950 transition-transform active:scale-95"
          >
            <span>{isHindi ? 'बैंक ऑफ इंडिया आधिकारिक पोर्टल पर जाएं' : 'Go to Official BOI Portal'}</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Section 9: Offline Branch Process */}
      <section id="offline-process" className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5 border-l-4 border-blue-700 pl-3">
          {isHindi ? '9. ऑफलाइन आवेदन प्रक्रिया (नजदीकी BOI शाखा द्वारा)' : '9. Offline Application Process via BOI Branch'}
        </h2>

        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          {isHindi
            ? 'यदि आप ऑनलाइन आवेदन करने में सहज नहीं हैं या आधार कार्ड में मोबाइल नंबर लिंक न होने के कारण ओटीपी नहीं आ रहा है, तो आप ऑफलाइन शाखा के माध्यम से भी आवेदन कर सकते हैं:'
            : 'If you prefer in-person banking or face technical difficulties with mobile OTP, you can apply offline at your nearest BOI branch:'}
        </p>

        <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 space-y-3 text-xs sm:text-sm text-slate-700">
          <p className="flex items-start gap-2">
            <Building className="h-4 w-4 text-blue-700 shrink-0 mt-0.5" />
            <span>
              <strong>{isHindi ? 'चरण 1: शाखा में जाएं -' : 'Step 1: Branch Visit -'}</strong>{' '}
              {isHindi
                ? 'अपने सभी मूल दस्तावेज (आधार कार्ड, पैन कार्ड, 3 माह की सैलरी स्लिप और 6 माह का बैंक स्टेटमेंट) लेकर नजदीकी BOI शाखा में जाएं।'
                : 'Visit your nearest BOI branch carrying original Aadhaar card, PAN card, salary slips, and 6 months bank statement.'}
            </span>
          </p>
          <p className="flex items-start gap-2">
            <FileText className="h-4 w-4 text-blue-700 shrink-0 mt-0.5" />
            <span>
              <strong>{isHindi ? 'चरण 2: फॉर्म भरें -' : 'Step 2: Fill Application -'}</strong>{' '}
              {isHindi
                ? 'शाखा के लोन अधिकारी से "BOI Personal Loan Application Form" प्राप्त करें और आवश्यक व्यक्तिगत व व्यावसायिक जानकारी भरें।'
                : 'Request a BOI Personal Loan application form from the loans desk and complete the required information.'}
            </span>
          </p>
          <p className="flex items-start gap-2">
            <Smartphone className="h-4 w-4 text-blue-700 shrink-0 mt-0.5" />
            <span>
              <strong>{isHindi ? 'चरण 3: बायोमेट्रिक e-KYC -' : 'Step 3: Biometric e-KYC -'}</strong>{' '}
              {isHindi
                ? 'बैंक अधिकारी अपने बायोमेट्रिक फिंगरप्रिंट स्कैनर डिवाइस के जरिए आपके आधार का e-KYC सत्यापन करेंगे।'
                : 'The branch executive authenticates your Aadhaar e-KYC on the spot via biometric fingerprint scanner.'}
            </span>
          </p>
          <p className="flex items-start gap-2">
            <CheckCircle className="h-4 w-4 text-emerald-700 shrink-0 mt-0.5" />
            <span>
              <strong>{isHindi ? 'चरण 4: सत्यापन व डिस्बर्समेंट -' : 'Step 4: Verification & Disbursal -'}</strong>{' '}
              {isHindi
                ? 'दस्तावेज जांच और क्रेडिट मूल्यांकन के बाद 3 से 5 कार्य दिवसों में लोन राशि आपके खाते में जमा हो जाती है।'
                : 'Following underwriting and credit checks, loan funds are disbursed within 3-5 business days.'}
            </span>
          </p>
        </div>
      </section>

      {/* 
        ========================================================================
        ADVERTISEMENT SLOT: Post-Guide Rectangle Ad
        Placed right before fraud alerts and FAQs.
        ========================================================================
      */}
      <AdSlot slotId="post-guide-horizontal" format="horizontal" label={isHindi ? 'विज्ञापन' : 'Advertisement'} />

      {/* Section 10: Fraud Alert & Essential Safety Warning */}
      <section id="fraud-warning" className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5 border-l-4 border-rose-600 pl-3">
          {isHindi ? '10. जरूरी सावधानी व साइबर फ्रॉड अलर्ट (Fraud Alert)' : '10. Crucial Precautions & Cyber Fraud Alert'}
        </h2>

        <div className="rounded-2xl border-2 border-rose-300 bg-rose-50/70 p-5 sm:p-6 text-slate-900 space-y-4">
          <div className="flex items-center gap-2 text-rose-800 font-extrabold text-base">
            <AlertTriangle className="h-5 w-5 text-rose-600" />
            <span>
              {isHindi ? 'फर्जी आधार लोन ऐप्स और साइबर ठगों से सावधान रहें!' : 'Beware of Fake Aadhaar Loan Apps & Fraudsters!'}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
            {isHindi
              ? 'आजकल सोशल मीडिया और व्हाट्सएप पर कई तरह के फर्जी संदेश फैलाए जाते हैं कि "बिना सिबिल स्कोर और बिना किसी आय प्रमाण के केवल आधार कार्ड से ₹2 लाख का तुरंत लोन पाएं।" ऐसे जालसाजों से बचने के लिए इन बातों का विशेष ध्यान रखें:'
              : 'Fraudulent messages often circulate on social media promising instant unverified loans with no credit checks. Keep these critical safety principles in mind:'}
          </p>

          <ul className="space-y-2 text-xs sm:text-sm text-slate-800">
            <li className="flex items-start gap-2">
              <span className="text-rose-600 font-bold">❌</span>
              <span>
                <strong>{isHindi ? 'कभी एडवांस फीस न दें:' : 'Never pay advance fees:'}</strong>{' '}
                {isHindi
                  ? 'बैंक ऑफ इंडिया कभी भी लोन स्वीकृत होने से पहले फाइल चार्ज, बीमा या जीएसटी के नाम पर किसी व्यक्तिगत यूपीआई (UPI) या बैंक खाते में पैसे नहीं मांगता।'
                  : 'BOI never demands upfront processing charges or GST via personal UPI or personal bank transfers.'}
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-600 font-bold">❌</span>
              <span>
                <strong>{isHindi ? 'ओटीपी कभी साझा न करें:' : 'Never share OTP:'}</strong>{' '}
                {isHindi
                  ? 'अपने आधार का ओटीपी या बैंक खाते का ओटीपी किसी भी अनजान कॉलर के साथ साझा न करें।'
                  : 'Never disclose Aadhaar verification OTP or mobile OTP to any telecaller.'}
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-600 font-bold">❌</span>
              <span>
                <strong>{isHindi ? 'अज्ञात एपीके (APK) डाउनलोड न करें:' : 'Avoid unknown APK files:'}</strong>{' '}
                {isHindi
                  ? 'व्हाट्सएप या टेलीग्राम पर भेजे गए किसी संदिग्ध लोन ऐप को कभी इंस्टॉल न करें। केवल आधिकारिक बैंक ऑफ इंडिया ऐप का उपयोग करें।'
                  : 'Never install unverified APK files from WhatsApp or Telegram. Only use verified apps from Google Play or Apple App Store.'}
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Section 11: FAQs Accordion */}
      <section id="faqs" className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5 border-l-4 border-blue-700 pl-3">
          {isHindi ? '11. अक्सर पूछे जाने वाले प्रश्न (Frequently Asked Questions)' : '11. Frequently Asked Questions (FAQs)'}
        </h2>

        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          {isHindi
            ? 'Bank of India Aadhar Loan के संबंध में अक्सर पूछे जाने वाले मुख्य प्रश्नों के उत्तर नीचे दिए गए हैं:'
            : 'Answers to the most common questions regarding Bank of India Aadhar Loans:'}
        </p>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white transition-all shadow-2xs"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="flex w-full items-center justify-between p-4 text-left font-bold text-slate-900 text-sm sm:text-base hover:bg-slate-50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4 flex items-center gap-2">
                    <HelpCircle className="h-4 w-4 text-orange-600 shrink-0" />
                    <span>{faq.question[lang]}</span>
                  </span>
                  {isOpen ? (
                    <ChevronUp className="h-4 w-4 text-slate-500 shrink-0" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-slate-500 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="border-t border-slate-100 bg-slate-50/50 p-4 text-xs sm:text-sm leading-relaxed text-slate-700">
                    {faq.answer[lang]}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 12: Official Helpline & Contact */}
      <section id="helpline" className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5 border-l-4 border-orange-600 pl-3">
          {isHindi ? '12. बैंक ऑफ इंडिया आधिकारिक हेल्पलाइन व सहायता केंद्र' : '12. Official BOI Helpline & Customer Support'}
        </h2>

        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          {isHindi
            ? 'यदि आपको आधार e-KYC या लोन आवेदन के दौरान किसी प्रकार की तकनीकी अथवा बैंकिंग समस्या आती है, तो आप बैंक ऑफ इंडिया के आधिकारिक संपर्क माध्यमों से सहायता प्राप्त कर सकते हैं:'
            : 'Reach out to official Bank of India customer support for any assistance with loans or e-KYC authentication:'}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs text-center">
            <span className="text-xs font-semibold text-slate-500 block uppercase tracking-wider">
              {isHindi ? 'टोल-फ्री नंबर 1' : 'Toll-Free 1'}
            </span>
            <a
              href="tel:18001031906"
              className="mt-1 block text-base font-extrabold text-blue-900 hover:text-orange-600 transition-colors"
            >
              1800 103 1906
            </a>
            <span className="text-[11px] text-slate-400 mt-0.5 block">{isHindi ? '24x7 उपलब्ध' : '24x7 Available'}</span>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs text-center">
            <span className="text-xs font-semibold text-slate-500 block uppercase tracking-wider">
              {isHindi ? 'टोल-फ्री नंबर 2' : 'Toll-Free 2'}
            </span>
            <a
              href="tel:1800220229"
              className="mt-1 block text-base font-extrabold text-blue-900 hover:text-orange-600 transition-colors"
            >
              1800 220 229
            </a>
            <span className="text-[11px] text-slate-400 mt-0.5 block">{isHindi ? 'सभी नेटवर्क से' : 'All Networks'}</span>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs text-center">
            <span className="text-xs font-semibold text-slate-500 block uppercase tracking-wider">
              {isHindi ? 'आधिकारिक वेबसाइट' : 'Official Portal'}
            </span>
            <a
              href="https://bankofindia.co.in"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center gap-1 text-sm font-extrabold text-blue-900 hover:text-orange-600 transition-colors"
            >
              <span>bankofindia.co.in</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <span className="text-[11px] text-slate-400 mt-0.5 block">{isHindi ? 'सुरक्षित सरकारी बैंकिंग' : 'Secure Banking'}</span>
          </div>
        </div>
      </section>

      {/* Conclusion & Verdict */}
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-r from-blue-900 to-slate-900 p-6 text-white shadow-md">
        <h3 className="text-lg font-bold text-orange-400">
          {isHindi ? 'अंतिम निष्कर्ष (Final Verdict):' : 'Final Verdict:'}
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-slate-200 leading-relaxed">
          {isHindi
            ? 'Bank of India Aadhar Loan उन सभी नौकरीपेशा और व्यवसायी व्यक्तियों के लिए एक उत्कृष्ट और सुरक्षित विकल्प है, जिन्हें तत्काल वित्तीय सहायता की आवश्यकता है। आधार e-KYC के जुड़ने से आवेदन प्रक्रिया अत्यंत तीव्र और पारदर्शी हो गई है। हमेशा अपने बजट और आय के अनुसार ही लोन राशि का चयन करें और नियमित समय पर EMI का भुगतान करके अपना सिबिल स्कोर मजबूत बनाए रखें।'
            : 'The Bank of India Aadhar Loan (via digital e-KYC) provides an excellent, transparent avenue for individuals needing immediate personal credit without predatory loan app risks. Always borrow within your repayment capabilities to maintain an exemplary CIBIL score.'}
        </p>
      </div>
    </article>
  );
};
