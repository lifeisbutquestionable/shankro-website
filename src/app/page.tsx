import React from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-100">
      <Navbar />
      
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-200/30 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-100/50 blur-[120px] rounded-full"></div>
        </div>
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-bold mb-6 border border-blue-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            Madhya Pradesh's Purest Standard
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 mb-8 leading-[1.1]">
            Pure Water.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Honest Service.</span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
            We don't just sell filters. We engineer purity. 
            High-precision assembly and honest diagnostics for those who refuse to compromise on health.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/contact" className="bg-slate-900 text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-slate-800 transition-all hover:scale-105 shadow-xl shadow-slate-200">
              Book a Service
            </Link>
            <Link href="/quiz" className="bg-white text-slate-900 border border-slate-200 px-10 py-5 rounded-2xl text-lg font-bold hover:bg-slate-50 transition-all hover:scale-105 shadow-sm">
              Find Your RO
            </Link>
          </div>
        </div>
      </section>
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Industry Experience", value: "6+ Years", icon: "⏱️" },
            { label: "Verified Clients", value: "300+", icon: "👥" },
            { label: "Installation Window", value: "6 Hours", icon: "⚡" },
            { label: "Operational Reach", value: "All MP", icon: "📍" },
          ].map((item, i) => (
            <div key={i} className="text-center group">
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">{item.icon}</div>
              <div className="text-3xl font-black text-slate-900">{item.value}</div>
              <div className="text-slate-400 text-sm font-medium uppercase tracking-widest">{item.label}</div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black tracking-tight text-slate-900 mb-4">Engineered for Excellence</h2>
          <p className="text-slate-500 font-medium">Precision services for the modern household.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-10 text-white relative overflow-hidden group">
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-2xl mb-6">🛠️</div>
              <h3 className="text-3xl font-bold mb-4">RO Assembly & Installation</h3>
              <p className="text-blue-100 text-lg mb-8 max-w-md leading-relaxed">
                Sourced from global hubs, assembled by hand, and calibrated to your specific water source. Ready in 6 hours.
              </p>
              <Link href="/services" className="bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-all">View Specifications</Link>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-10 border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">📅</div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900">Annual Care (AMC)</h3>
            <p className="text-slate-500 leading-relaxed mb-6">
              Predictive maintenance that ensures your water purity never dips. Priority scheduling included.
            </p>
            <Link href="/plans" className="text-blue-600 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
              Compare Plans <span>→</span>
            </Link>
          </div>
          <div className="bg-white rounded-3xl p-10 border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">🚚</div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900">Relocation Setup</h3>
            <p className="text-slate-500 leading-relaxed mb-6">
              Moving home? We specialize in the safe uninstall, transit-ready packing, and precision re-calibration.
            </p>
            <Link href="/services" className="text-blue-600 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
              Book Shift <span>→</span>
            </Link>
          </div>
          <div className="md:col-span-2 bg-slate-900 rounded-3xl p-10 text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-full h-full bg-slate-800 opacity-20"></div>
            <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
              <div className="flex-1">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-2xl mb-6">🔬</div>
                <h3 className="text-3xl font-bold mb-4">The Honest Diagnosis</h3>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                  TDS check first. Tank inspection second. We only recommend a full service if the data justifies it. 
                  <span className="text-blue-400 font-bold">No upselling. Ever.</span>
                </p>
                <div className="flex gap-4">
                  <div className="px-4 py-2 bg-slate-800 rounded-lg text-xs font-bold border border-slate-700">TDS VERIFIED</div>
                  <div className="px-4 py-2 bg-slate-800 rounded-lg text-xs font-bold border border-slate-700">TANK CHECKED</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 px-6 text-center relative">
        <div className="max-w-4xl mx-auto bg-blue-600 rounded-[3rem] p-12 md:p-20 text-white shadow-2xl shadow-blue-300 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">Ready for water you<br />can actually trust?</h2>
            <Link href="https://wa.me/your-number" className="bg-white text-blue-600 px-12 py-5 rounded-2xl text-xl font-black hover:bg-blue-50 transition-all hover:scale-105 inline-flex items-center gap-3 shadow-lg">
              <span>Chat with Shashank</span>
              <span className="text-2xl">💬</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
