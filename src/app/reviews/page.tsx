import React from 'react';
import Navbar from '@/components/Navbar';

export default function Reviews() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <header className="py-16 px-6 text-center bg-white border-b">
        <h1 className="text-4xl font-bold text-gray-900">300+ Families and Businesses Trust ShankRO</h1>
        <p className="text-gray-500 mt-4 text-lg">Honest service, every single time.</p>
      </header>

      <main className="max-w-6xl mx-auto py-16 px-6">
        {/* Video Placeholder */}
        <div className="mb-20 aspect-video max-w-3xl mx-auto bg-gray-200 rounded-3xl flex items-center justify-center text-gray-500 shadow-inner">
          <div className="text-center">
            <span className="text-5xl mb-4 block">▶️</span>
            <p className="font-medium">Shashank's Intro Video</p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex text-yellow-400 mb-4">★★★★★</div>
              <p className="text-gray-600 italic mb-6">"Best RO service in Bhopal. They actually checked the TDS before suggesting a full service. Very honest and professional."</p>
              <div className="font-bold text-gray-900">— Happy Client {i}</div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center mb-20">
          {[
            { label: "Experience", value: "6+ Years", icon: "⏳" },
            { label: "Clients Served", value: "300+", icon: "👥" },
            { label: "Installation", value: "6-Hour", icon: "⚡" },
            { label: "Coverage", value: "All MP", icon: "📍" },
            { label: "Experts in", value: "Multi-brand", icon: "🛠️" },
          ].map((stat, idx) => (
            <div key={idx} className="bg-blue-50 p-6 rounded-2xl">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-xl font-bold text-blue-700">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center bg-blue-600 text-white py-12 rounded-3xl shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Our Core Principle</h2>
          <p className="text-2xl italic opacity-90">"ShankRO is built on one principle — if your water isn't clean, our job isn't done."</p>
        </div>
      </main>
    </div>
  );
}
