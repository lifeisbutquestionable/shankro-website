"use client";
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
const quizData = {
  steps: [
    {
      question: "Who is this for?",
      options: [
        { text: "My Home", value: "home" },
        { text: "My Office", value: "office" },
        { text: "My Restaurant or Business", value: "business" }
      ]
    },
    {
      question: "How many people use it daily?",
      options: [
        { text: "1-3 people", value: "small" },
        { text: "4-6 people", value: "medium" },
        { text: "7+ people", value: "large" }
      ]
    },
    {
      question: "What's your water source?",
      options: [
        { text: "Municipal", value: "municipal" },
        { text: "Borewell", value: "borewell" },
        { text: "Tanker", value: "tanker" },
        { text: "Not Sure", value: "unsure" }
      ]
    },
    {
      question: "What matters most?",
      options: [
        { text: "Lowest price", value: "price" },
        { text: "Best value", value: "value" },
        { text: "Premium quality", value: "premium" }
      ]
    }
  ],
  results: {
    A: {
      name: "ShankRO Essential",
      desc: "A standard household RO unit with 5-stage purification. Clean, reliable, budget friendly.",
      price: "₹3,000 — ₹4,500",
      amc: "Essential Plan"
    },
    B: {
      name: "ShankRO Care",
      desc: "A 7-stage unit with mineral cartridge — our most popular household choice.",
      price: "₹4,500 — ₹6,000",
      amc: "Care Plan"
    },
    C: {
      name: "ShankRO Prime",
      desc: "Commercial grade unit with alkaline and copper filtration for high-demand usage.",
      price: "₹6,000 — ₹7,000+",
      amc: "Prime Plan"
    }
  }
};
export default function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const handleOption = (value: string) => {
    const newAnswers = { ...answers, [step]: value };
    setAnswers(newAnswers);
    
    if (step < quizData.steps.length - 1) {
      setStep(step + 1);
    } else {
      calculateResult(newAnswers);
    }
  };
  const calculateResult = (ans: any) => {
    if (ans[0] === 'office' || ans[1] === 'large' || ans[3] === 'premium') {
      setResult(quizData.results.C);
    } else if (ans[0] === 'home' && (ans[2] === 'borewell' || ans[3] === 'value')) {
      setResult(quizData.results.B);
    } else {
      setResult(quizData.results.A);
    }
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-3xl mx-auto py-20 px-6">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
          {!result ? (
            <div className="text-center">
              <div className="mb-8 flex justify-center">
                <div className="text-sm font-bold text-blue-600 uppercase tracking-widest">Step {step + 1} of 4</div>
              </div>
              <h2 className="text-3xl font-bold mb-10">{quizData.steps[step].question}</h2>
              <div className="grid grid-cols-1 gap-4">
                {quizData.steps[step].options.map((opt, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => handleOption(opt.value)} 
                    className="p-4 text-left rounded-xl border-2 border-gray-100 hover:border-blue-600 hover:bg-blue-50 transition font-medium text-lg"
                  >
                    {opt.text}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center">
              <div className="text-5xl mb-6">🎉</div>
              <h2 className="text-3xl font-bold mb-2">We Recommend: {result.name}</h2>
              <p className="text-gray-600 mb-6 text-lg">{result.desc}</p>
              <div className="bg-blue-50 p-6 rounded-2xl mb-8 inline-block w-full max-w-md">
                <div className="text-gray-500 mb-1">Estimated Price</div>
                <div className="text-2xl font-bold text-blue-700 mb-4">{result.price}</div>
                <div className="text-gray-500 mb-1">Suggested Maintenance</div>
                <div className="font-semibold">{result.amc}</div>
              </div>
              <div className="space-y-4">
                <a href="/contact" className="block w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition">
                  Book Your Unit Now
                </a>
                <p className="text-gray-500 italic text-sm">
                  "Not convinced by your result? Call Shashank directly and he'll give you an honest recommendation in 5 minutes."
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
