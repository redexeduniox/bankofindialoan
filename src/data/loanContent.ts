import { TocItem, FaqItem } from '../types';

export const TOC_ITEMS: TocItem[] = [
  {
    id: 'overview',
    title: {
      hi: '1. Bank of India Aadhar Loan क्या है? (सच्चाई व e-KYC)',
      en: '1. What is Bank of India Aadhar Loan? (Truth & e-KYC)'
    }
  },
  {
    id: 'key-highlights',
    title: {
      hi: '2. मुख्य विशेषताएं और हाइलाइट्स (Highlights)',
      en: '2. Key Features & Highlights'
    }
  },
  {
    id: 'eligibility',
    title: {
      hi: '3. पात्रता मानदंड (Eligibility Criteria)',
      en: '3. Eligibility Criteria'
    }
  },
  {
    id: 'documents',
    title: {
      hi: '4. आवश्यक दस्तावेज (Required Documents Checklist)',
      en: '4. Required Documents Checklist'
    }
  },
  {
    id: 'interest-rates',
    title: {
      hi: '5. ब्याज दर और शुल्क (Interest Rates & Charges)',
      en: '5. Interest Rates & Charges'
    }
  },
  {
    id: 'emi-calculator',
    title: {
      hi: '6. BOI Aadhar Loan EMI कैलकुलेटर',
      en: '6. BOI Aadhar Loan EMI Calculator'
    }
  },
  {
    id: 'eligibility-checker',
    title: {
      hi: '7. अपनी पात्रता जांचें (Instant Check)',
      en: '7. Check Your Eligibility Instantly'
    }
  },
  {
    id: 'online-process',
    title: {
      hi: '8. ऑनलाइन आवेदन प्रक्रिया (Step-by-Step Guide)',
      en: '8. Online Application Process (Step-by-Step)'
    }
  },
  {
    id: 'offline-process',
    title: {
      hi: '9. ऑफलाइन आवेदन प्रक्रिया (बैंक शाखा द्वारा)',
      en: '9. Offline Application Process (Branch)'
    }
  },
  {
    id: 'fraud-warning',
    title: {
      hi: '10. जरूरी सावधानी व फ्रॉड अलर्ट (Safety Warning)',
      en: '10. Essential Precautions & Fraud Alert'
    }
  },
  {
    id: 'faqs',
    title: {
      hi: '11. अक्सर पूछे जाने वाले सवाल (FAQs)',
      en: '11. Frequently Asked Questions (FAQs)'
    }
  },
  {
    id: 'helpline',
    title: {
      hi: '12. आधिकारिक हेल्पलाइन व सहायता केंद्र',
      en: '12. Official BOI Helpline & Support'
    }
  }
];

export const FAQS: FaqItem[] = [
  {
    question: {
      hi: 'क्या बैंक ऑफ इंडिया केवल आधार कार्ड पर बिना किसी अन्य दस्तावेज के लोन दे देता है?',
      en: 'Does Bank of India give loan solely on Aadhaar card without any other document?'
    },
    answer: {
      hi: 'नहीं, यह एक आम भ्रम है। बैंक ऑफ इंडिया में आधार कार्ड का उपयोग मुख्य रूप से बायोमेट्रिक या ओटीपी आधारित e-KYC (पहचान और स्थायी पते के सत्यापन) के लिए होता है। इसके साथ ही बैंक आपकी आय का प्रमाण (सैलरी स्लिप/ITR) और 6 महीने का बैंक स्टेटमेंट मांगता है ताकि आपकी लोन चुकाने की क्षमता जांची जा सके।',
      en: 'No, this is a common misconception. In Bank of India, the Aadhaar card is primarily used for paperless e-KYC (instant identity and address verification via OTP/biometrics). Along with Aadhaar, the bank requires income proof (salary slips/ITR) and bank statements to assess your repayment capability.'
    }
  },
  {
    question: {
      hi: 'Bank of India Aadhar Loan में न्यूनतम और अधिकतम कितना लोन मिल सकता है?',
      en: 'What is the minimum and maximum loan amount under Bank of India Aadhar Loan?'
    },
    answer: {
      hi: 'बैंक ऑफ इंडिया स्टार पर्सनल लोन स्कीम के अंतर्गत न्यूनतम ₹50,000 और आवेदक की आय व सिबिल स्कोर के आधार पर अधिकतम ₹20,00,000 (20 लाख रुपये) तक का लोन मिल सकता है।',
      en: 'Under the Bank of India Star Personal Loan scheme, you can get a minimum loan of ₹50,000 and up to ₹20,00,000 (₹20 Lakhs) depending on your net monthly income and credit profile.'
    }
  },
  {
    question: {
      hi: 'Bank of India Aadhar Loan की वर्तमान ब्याज दर (Interest Rate) क्या है?',
      en: 'What is the current interest rate for Bank of India Aadhar Loan?'
    },
    answer: {
      hi: 'वर्ष 2025 में बैंक ऑफ इंडिया में पर्सनल लोन की ब्याज दरें लगभग 10.25% प्रति वर्ष से शुरू होकर 14.50% तक जाती हैं। यदि आपका सिबिल स्कोर 750 या उससे अधिक है, तो आपको सबसे कम ब्याज दर की पेशकश की जाती है।',
      en: 'In 2025, Bank of India personal loan interest rates start from approximately 10.25% p.a. and can go up to 14.50% p.a., heavily influenced by your CIBIL score (750+ yields the lowest rate).'
    }
  },
  {
    question: {
      hi: 'आवेदन के बाद बैंक खाते में लोन राशि आने में कितना समय लगता है?',
      en: 'How long does it take for loan disbursal into the bank account after applying?'
    },
    answer: {
      hi: 'यदि आप BOI के मौजूदा ग्राहक हैं और प्री-अप्रूव्ड ऑफर के तहत आधार e-KYC से ऑनलाइन आवेदन करते हैं, तो राशि कुछ घंटों से लेकर 24-48 कार्य घंटों में क्रेडिट हो जाती है। नए ग्राहकों के लिए भौतिक सत्यापन के कारण 3 से 5 कार्य दिवस लग सकते हैं।',
      en: 'If you are an existing BOI customer applying under a pre-approved offer with digital Aadhaar e-KYC, disbursal can take between a few hours to 24-48 working hours. For new customers, verification may take 3 to 5 business days.'
    }
  },
  {
    question: {
      hi: 'क्या खराब सिबिल स्कोर (CIBIL Score) होने पर आधार कार्ड से लोन मिल सकता है?',
      en: 'Can I get an Aadhar loan from Bank of India with a low CIBIL score?'
    },
    answer: {
      hi: 'यदि आपका सिबिल स्कोर 650 से कम है, तो बैंक ऑफ इंडिया में अनसिक्योर्ड पर्सनल लोन मिलना मुश्किल होता है। हालांकि, आप सह-आवेदक (Co-applicant) जोड़कर या गोल्ड/FD के बदले सिक्योर्ड लोन के लिए आवेदन कर सकते हैं।',
      en: 'If your CIBIL score is below 650, getting an unsecured personal loan from BOI is challenging. However, you can consider applying with a strong co-applicant or opting for a secured loan against fixed deposit or gold.'
    }
  },
  {
    question: {
      hi: 'क्या बैंक ऑफ इंडिया लोन अप्रूवल से पहले कोई एडवांस फीस मांगता है?',
      en: 'Does Bank of India charge any upfront or advance fee before loan approval?'
    },
    answer: {
      hi: 'बिल्कुल नहीं! बैंक ऑफ इंडिया कभी भी किसी पर्सनल यूपीआई या खाते में अग्रिम पैसे (जैसे फाइल चार्ज या जीएसटी) ट्रांसफर करने को नहीं कहता। प्रोसेसिंग फीस स्वीकृत लोन राशि में से काटी जाती है। किसी भी फ्रॉड कॉल से सावधान रहें।',
      en: 'Never! Bank of India never asks for advance transfer to any personal UPI/account for processing fees or GST. All genuine processing fees are deducted directly from the sanctioned loan amount. Stay vigilant against fraud calls.'
    }
  }
];

export const HIGHLIGHTS_DATA = {
  hi: [
    { label: 'बैंक का नाम', value: 'बैंक ऑफ इंडिया (BOI)' },
    { label: 'लोन का प्रकार', value: 'BOI स्टार पर्सनल लोन (आधार e-KYC)' },
    { label: 'लोन राशि', value: '₹50,000 से ₹20,00,000 तक' },
    { label: 'ब्याज दर (Interest)', value: '10.25% - 14.50% प्रति वर्ष*' },
    { label: 'लोन अवधि (Tenure)', value: '12 महीने से 84 महीने (7 वर्ष)' },
    { label: 'प्रोसेसिंग शुल्क', value: '1% से 2% (न्यूनतम ₹1,000 + GST)' },
    { label: 'न्यूनतम सिबिल स्कोर', value: '700+ (750+ पर सर्वोत्तम दर)' },
    { label: 'सत्यापन माध्यम', value: 'आधार e-KYC + बायोमेट्रिक / OTP' }
  ],
  en: [
    { label: 'Bank Name', value: 'Bank of India (BOI)' },
    { label: 'Loan Scheme', value: 'BOI Star Personal Loan (Aadhaar e-KYC)' },
    { label: 'Loan Amount', value: '₹50,000 to ₹20,00,000' },
    { label: 'Interest Rate', value: '10.25% - 14.50% p.a.*' },
    { label: 'Repayment Tenure', value: '12 to 84 Months (up to 7 years)' },
    { label: 'Processing Fee', value: '1% to 2% (Min ₹1,000 + GST)' },
    { label: 'Min CIBIL Score', value: '700+ (750+ for best rate)' },
    { label: 'Verification Mode', value: 'Aadhaar e-KYC + Biometric / OTP' }
  ]
};
