"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function CustomNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-[#2563EB] border-b border-[#1D4ED8] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <span className="text-lg sm:text-xl font-bold text-white">
                Prepify
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link href="/practice" className="text-white/80 hover:text-white font-medium transition-colors duration-200 relative group">
              Practice
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/features" className="text-white/80 hover:text-white font-medium transition-colors duration-200 relative group">
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/about" className="text-white/80 hover:text-white font-medium transition-colors duration-200 relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/pricing" className="text-white/80 hover:text-white font-medium transition-colors duration-200 relative group">
              Pricing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link 
              href="/sign-in" 
              className="text-white/80 hover:text-white font-medium px-3 sm:px-4 py-2 rounded-lg transition-all duration-200 hover:bg-white/10"
            >
              Sign In
            </Link>
            <Link 
              href="/sign-up" 
              className="bg-white hover:bg-white/90 text-[#2563EB] font-bold px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Start for Free
            </Link>
          </div>

          {/* Tablet Navigation Links */}
          <div className="hidden md:flex lg:hidden items-center space-x-4">
            <Link href="/practice" className="text-white/80 hover:text-white font-medium text-sm transition-colors duration-200">
              Practice
            </Link>
            <Link href="/features" className="text-white/80 hover:text-white font-medium text-sm transition-colors duration-200">
              Features
            </Link>
          </div>

          {/* Tablet CTA Buttons */}
          <div className="hidden md:flex lg:hidden items-center space-x-2">
            <Link 
              href="/sign-in" 
              className="text-white/80 hover:text-white font-medium px-3 py-2 rounded-lg transition-all duration-200 hover:bg-white/10 text-sm"
            >
              Sign In
            </Link>
            <Link 
              href="/sign-up" 
              className="bg-white hover:bg-white/90 text-[#2563EB] font-bold px-4 py-2 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm"
            >
              Start Free
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white/80 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-5 h-0.5 bg-current transform transition duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
                <span className={`block w-5 h-0.5 bg-current transition duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block w-5 h-0.5 bg-current transform transition duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-[#2563EB] border-t border-[#1D4ED8] shadow-lg rounded-b-lg">
            <Link 
              href="/practice" 
              className="block px-3 py-3 text-white/80 hover:text-white font-medium rounded-lg hover:bg-white/10 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Practice
            </Link>
            <Link 
              href="/features" 
              className="block px-3 py-3 text-white/80 hover:text-white font-medium rounded-lg hover:bg-white/10 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="/about" 
              className="block px-3 py-3 text-white/80 hover:text-white font-medium rounded-lg hover:bg-white/10 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/pricing" 
              className="block px-3 py-3 text-white/80 hover:text-white font-medium rounded-lg hover:bg-white/10 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <div className="pt-3 border-t border-[#1D4ED8]">
              <Link 
                href="/sign-in" 
                className="block px-3 py-3 text-white/80 hover:text-white font-medium rounded-lg hover:bg-white/10 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link 
                href="/sign-up" 
                className="block px-3 py-3 mt-2 bg-white hover:bg-white/90 text-[#2563EB] font-bold rounded-lg text-center shadow-lg transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Start for Free
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 