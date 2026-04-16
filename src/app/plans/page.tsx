import React from 'react';
import Navbar from '@/components/Navbar';

const plans = [
  {
    name: "Essential",
    price: "₹1,499 / year",
    visits: "2 visits/year",
    tds: "Every visit",
    prefilter: "At actuals",
    tank: "Basic",
    deepClean: "❌",
    emergency: "❌",
    discount: "❌",
    support: "Phone",
    recommended: false
  },
  {
    name: "Care",
    price: "₹2,499 / year",
    visits: "3 visits/year",
    tds: "Every visit",
    prefilter: "1 unit included",
    tank: "Full diagnosis",
    deepClean: "If required",
    emergency: "Within 24 hrs",
    discount: "❌",
    support: "Phone + WhatsApp",
    recommended: true
  },
  {
    name: "Prime",
    price: "₹3,999 / year",
    visits: "4 visits/year",
    tds: "Every visit",
    prefilter: "2 units included",
    tank: "Full diagnosis",
    deepClean: "Included",
    emergency: "Within 6 hrs",
    discount: "10% off",
    support: "Dedicated WhatsApp",
    recommended: false
  }
];

const faqs = [
  { q: "What's not covered?", a: "Electronics (pumps, PCBs, solenoid valves) are excluded from warranty — this is an industry standard." },
  { q: "Can I upgrade mid-year?", a: "Yes, you can pay the difference and upgrade your plan immediately." },
  { q: "What if I need a visit outside my plan?", a: "Additional visits are charged at ₹450 labour." },
  { q: "Do you serve outside Bhopal?", a: "Yes, ShankRO covers all of Madhya Pradesh." },
];

export default function Plans() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <header className="py-16 px-6 text-center bg-white border-b">
        <h1 className="text-4xl font-bold text-gray-900">Choose the Care Your Water Deserves</h1>
        <p className="text-gray-500 mt-4 text-lg">Reliable protection for your family's health</p>
      </header>

      <main className="max-w-6xl mx-auto py-16 px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, idx) => (
            <div key={idx} className={`relative p-8 rounded-3xl border ${plan.recommended ? 'border-blue-600 ring-2 ring-blue-600 shadow-xl bg-white' : 'border-gray-200 bg-white'} flex flex-col`}>
              {plan.recommended && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">Most Popular</span>
              )}
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h2>
              <div className="text-3xl font-extrabold text-blue-600 mb-6">{plan.price}</div>
              
              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex justify-between text-gray-600"><span>Service Visits</span><span className="font-semibold">{plan.visits}</span></div>
                <div className="flex justify-between text-gray-600"><span>TDS Check</span><span className="font-semibold">{plan.tds}</span></div>
                <div className="flex justify-between text-gray-600"><span>Pre-Filter</span><span className="font-semibold">{plan.prefilter}</span></div>
                <div className="flex justify-between text-gray-600"><span>Tank Inspection</span><span className="font-semibold">{plan.tank}</span></div>
                <div className="flex justify-between text-gray-600"><span>Deep Clean</span><span className="font-semibold">{plan.deepClean}</span></div>
                <div className="flex justify-between text-gray-600"><span>Emergency Response</span><span className="font-semibold">{plan.emergency}</span></div>
                <div className="flex justify-between text-gray-600"><span>Parts Discount</span><span className="font-semibold">{plan.discount}</span></div>
                <div className="flex justify-between text-gray-600"><span>Support</span><span className="font-semibold">{plan.support}</span></div>
              </div>
              
              <a href="/contact" className={`block text-center py-3 rounded-xl font-bold transition ${plan.recommended ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}>
                Choose {plan.name}
              </a>
            </div>
          ))}
        </div>

        <section className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
