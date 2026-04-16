import React from 'react';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <section className="py-20 px-6 text-center bg-gradient-to-b from-blue-50 to-gray-50">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
          Pure Water. Honest Service.<br />
          <span className="text-blue-600">Delivered in 6 Hours.</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          Madhya Pradesh's trusted RO specialists — assembling, installing 
          and maintaining water purifiers for homes and businesses since 2018.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition">
            Book a Service
          </a>
          <a href="/plans" className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-50 transition">
            Explore AMC Plans
          </a>
        </div>
      </section>
      <section className="py-8 bg-white border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4">
            <p className="text-2xl font-bold text-gray-800">6+ Years</p>
            <p className="text-gray-500">Experience</p>
          </div>
          <div className="p-4">
            <p className="text-2xl font-bold text-gray-800">300+ Happy</p>
            <p className="text-gray-500">Clients</p>
          </div>
          <div className="p-4">
            <p className="text-2xl font-bold text-gray-800">6-Hour</p>
            <p className="text-gray-500">Installation</p>
          </div>
          <div className="p-4">
            <p className="text-2xl font-bold text-gray-800">All Across</p>
            <p className="text-gray-500">Madhya Pradesh</p>
          </div>
        </div>
      </section>
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What We Do</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="text-4xl mb-4">🛠️</div>
            <h3 className="text-xl font-bold mb-2">RO Assembly & Installation</h3>
            <p className="text-gray-600">Custom built, properly installed, and ready in hours.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="text-4xl mb-4">📅</div>
            <h3 className="text-xl font-bold mb-2">Annual Maintenance</h3>
            <p className="text-gray-600">Regular care so your purifier never lets you down.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="text-4xl mb-4">🚚</div>
            <h3 className="text-xl font-bold mb-2">Shifting & Reinstallation</h3>
            <p className="text-gray-600">Moving homes? We move your RO too, fully calibrated.</p>
          </div>
        </div>
      </section>
      <section className="py-20 px-6 bg-blue-600 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">The ShankRO Promise</h2>
          <p className="text-2xl italic font-light leading-relaxed">
            "We don't just service your RO — we diagnose it. TDS check first, fix only what needs fixing. No upselling. No shortcuts."
          </p>
        </div>
      </section>
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Ready for water you can trust?</h2>
        <a href="https://wa.me/your-number" className="bg-green-500 text-white px-10 py-4 rounded-full text-xl font-bold hover:bg-green-600 transition inline-flex items-center">
          Get in Touch on WhatsApp
        </a>
      </section>
    </div>
  );
}
