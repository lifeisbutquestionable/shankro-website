import React from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
export default function Home() {
  return (
    <div className="min-h-screen bg-[#fbfcfd] text-slate-900 selection:bg-blue-100">
      <Navbar />
      
      {/* HERO SECTION: Architectural Pure Water */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-100/40 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-50/60 blur-[120px] rounded-full"></div>
        </div>
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-sm border border-slate-200 text-blue-600 text-xs font-bold mb-8 animate-fade-in uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            Madhya Pradesh's Purest Standard
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 mb-10 leading-[1.05]">
            Pure Water.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Honest Service.</span>
          </h1>
          
          <p className="text-xl text-slate-500 max-w-3xl mx-auto mb-14 leading-relaxed font-medium px-4">
            We don't just sell filters. We engineer purity. 
            High-precision assembly and honest diagnostics for those who refuse to compromise on health.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/contact" className="bg-slate-900 text-white px-12 py-6 rounded-2xl text-lg font-bold hover:bg-blue-600 transition-all hover:scale-105 shadow-2xl shadow-slate-300 uppercase tracking-wider">
              Book a Service
            </Link>
            <Link href="/quiz" className="bg-white text-slate-900 border border-slate-200 px-12 py-6 rounded-2xl text-lg font-bold hover:bg-slate-50 transition-all hover:scale-105 shadow-sm uppercase tracking-wider">
              Find Your RO
            </Link>
          </div>
        </div>
      </section>
      {/* TRUST BAR: Minimalist Authority */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { label: "Experience", value: "6+ Years", icon: "⏱️" },
            { label: "Verified Clients", value: "300+", icon: "👥" },
            { label: "Installation", value: "6 Hours", icon: "⚡" },
            { label: "Operational Reach", value: "All MP", icon: "📍" },
          ].map((item, i) => (
            <div key={i} className="text-center group cursor-default">
              <div className="text-3xl mb-3 group-hover:scale-125 transition-transform duration-500">{item.icon}</div>
              <div className="text-4xl font-black text-slate-900 tracking-tight">{item.value}</div>
              <div className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em] mt-2">{item.label}</div>
            </div>
          ))}
        </div>
      </section>
      {/* BENTO GRID: The Luxury Tech Showroom */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black tracking-tight text-slate-900 mb-4">Engineered for Excellence</h2>
          <p className="text-slate-500 font-medium text-lg">Precision services for the modern household.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* THE CORE SERVICE (Large Card) */}
          <div className="md:col-span-2 bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden group transition-all hover:shadow-2xl hover:shadow-blue-200">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl group-hover:bg-blue-500/30 transition-all"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-3xl mb-8 shadow-lg shadow-blue-500/30">🛠️</div>
              <h3 className="text-4xl font-bold mb-6 tracking-tight">RO Assembly & Installation</h3>
              <p className="text-slate-400 text-xl mb-10 max-w-md leading-relaxed">
                Sourced from global hubs, assembled by hand, and calibrated to your specific water source. <span className="text-white font-semibold">Ready in 6 hours.</span>
              </p>
              <Link href="/services" className="bg-white text-slate-900 px la-8 py-4 rounded-2xl font-bold hover:bg-blue-50 transition-all inline-flex items-center gap-2 group">
                View Specifications <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
          {/* AMC SERVICE */}
          <div className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-sm hover:shadow-2xl transition-all group border-b-4 border-b-blue-600">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">📅</div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900">Annual Care (AMC)</h3>
            <p className="text-slate-500 leading-relaxed mb-8 text-lg">
              Predictive maintenance that ensures your water purity never dips. Priority scheduling included.
            </p>
            <Link href="/plans" className="text-blue-600 font-bold flex items-center gap-2 group-hover:gap-4 transition-all uppercase text-xs tracking-widest">
              Explore Plans <span className="text-xl">→</span>
            </Link>
          </div>
          {/* RELOCATION SERVICE */}
          <div className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-sm hover:shadow-2xl transition-all group border-b-4 border-b-blue-600">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">🚚</div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900">Relocation Setup</h3>
            <p className="text-slate-500 leading-relaxed mb-8 text-lg">
              Moving home? We specialize in the safe uninstall, transit-ready packing, and precision re-calibration.
            </p>
            <Link href="/services" className="text-blue-600 font-bold flex items-center gap-2 group-hover:gap-4 transition-all uppercase text-xs tracking-widest">
              Book Shift <span className="text-xl">→</span>
            </Link>
          </div>
          {/* THE DIAGNOSIS (The Trust Seal) */}
          <div className="md:col-span-2 bg-slate-100 rounded-[3rem] p-12 text-slate-900 relative overflow-hidden group border border-slate-200">
            <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <div className="w-14 h-14 bg-white shadow-xl rounded-2xl flex items-center justify-center text-3xl mb-8">🔬</div>
                <h3 className="text-4xl font-bold mb-6 tracking-tight">The Honest Diagnosis</h3>
                <p className="text-slate-600 text-xl leading-relaxed mb-10">
                  TDS check first. Tank inspection second. We only recommend a full service if the data justifies it. 
                  <span className="text-blue-600 font-bold block mt-2">No upselling. Ever.</span>
                </p>
                <div className="flex gap-4">
                  <div className="px-4 py-2 bg-white rounded-xl text-xs font-black border border-slate-200 uppercase tracking-tighter text-slate-500">TDS VERIFIED</div>
                  <div className="px-4 py-2 bg-white rounded-xl text-xs font-black border border-slate-200 uppercase tracking-tighter text-slate-500">TANK CHECKED</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FINAL CTA: The Closing Statement */}
      <section className="py-32 px-6 text-center relative">
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-[4rem] p-16 md:p-24 text-white shadow-3xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full -mr-20 -mt-20 blur-3xl group-hover:bg-blue-500/30 transition-all"></div>
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-black mb-12 tracking-tighter leading-tight">
              Ready for water you<br />can actually trust?
            </h2>
            <Link href="https://wa.me/your-number" className="bg-white text-slate-900 px-14 py-6 rounded-2xl text-xl font-black hover:bg-blue-50 transition-all hover:scale-105 inline-flex items-center gap-4 shadow-xl uppercase tracking-wider">
              <span className="text-2xl">💬</span>
              Chat with Shashank
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
