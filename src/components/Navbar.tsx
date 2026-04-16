import React from 'react';
import Link from 'next/link';

const Navbar = () => (
  <nav className="fixed w-full z-50 top-0 bg-white/80 backdrop-blur-md border-b border-blue-100">
    <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
          <span className="text-white font-black text-xl">S</span>
        </div>
        <span className="text-2xl font-black tracking-tighter text-slate-900">Shank<span className="text-blue-600">RO</span></span>
      </div>
      
      <div className="hidden md:flex items-center gap-8 font-semibold text-slate-600">
        <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
        <Link href="/services" className="hover:text-blue-600 transition-colors">Services</Link>
        <Link href="/plans" className="hover:text-blue-600 transition-colors">AMC Plans</Link>
        <Link href="/reviews" className="hover:text-blue-600 transition-colors">Trust</Link>
        <Link href="/contact" className="bg-blue-600 text-white px-5 py-2.5 rounded-full hover:bg-blue-700 transition-all shadow-md hover:shadow-blue-200">Book Now</Link>
      </div>
      
      <Link href="/quiz" className="md:hidden text-blue-600 font-bold">Quiz</Link>
    </div>
  </nav>
);

export default Navbar;
