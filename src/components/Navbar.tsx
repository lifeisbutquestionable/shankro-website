import React from 'react';
import Link from 'next/link';
const Navbar = () => (
  <nav className="fixed w-full z-50 top-0 bg-white/70 backdrop-blur-xl border-b border-slate-200/50">
    <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
      <div className="flex items-center gap-3 group cursor-pointer">
        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200 group-hover:rotate-12 transition-transform">
          <span className="text-white font-black text-xl">S</span>
        </div>
        <span className="text-2xl font-black tracking-tighter text-slate-900">
          Shank<span className="text-blue-600">RO</span>
        </span>
      </div>
      
      <div className="hidden md:flex items-center gap-10 font-semibold text-slate-500">
        <Link href="/" className="hover:text-blue-600 transition-colors uppercase text-xs tracking-widest">Home</Link>
        <Link href="/services" className="hover:text-blue-600 transition-colors uppercase text-xs tracking-widest">Services</Link>
        <Link href="/plans" className="hover:text-blue-600 transition-colors uppercase text-xs tracking-widest">Plans</Link>
        <Link href="/reviews" className="hover:text-blue-600 transition-colors uppercase text-xs tracking-widest">Trust</Link>
        <Link href="/contact" className="bg-slate-900 text-white px-6 py-2.5 rounded-full hover:bg-blue-600 transition-all shadow-lg shadow-slate-200 text-xs uppercase tracking-widest font-bold">
          Book Now
        </Link>
      </div>
      
      <Link href="/quiz" className="md:hidden text-blue-600 font-bold uppercase text-xs tracking-widest">Find your RO</Link>
    </div>
  </nav>
);
export default Navbar;
