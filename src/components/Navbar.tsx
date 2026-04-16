import React from 'react';

const Navbar = () => (
  <nav className="flex justify-between items-center p-6 bg-white shadow-sm sticky top-0 z-50">
    <div className="text-2xl font-bold text-blue-700">ShankRO</div>
    <div className="hidden md:flex space-x-6 font-medium">
      <a href="/" className="hover:text-blue-600">Home</a>
      <a href="/services" className="hover:text-blue-600">Services</a>
      <a href="/plans" className="hover:text-blue-600">AMC Plans</a>
      <a href="/reviews" className="hover:text-blue-600">Reviews</a>
      <a href="/contact" className="hover:text-blue-600">Contact</a>
    </div>
    <a href="/quiz" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">Find Your RO</a>
  </nav>
);

export default Navbar;
