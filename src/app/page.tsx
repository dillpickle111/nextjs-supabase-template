"use client";

import '../../framer/styles.css';
import HeroFramerComponent from '../../framer/hero';
import CustomNavbar from '../components/custom-navbar';

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col relative" style={{ '--hero-padding': '-100px' } as React.CSSProperties}>
      {/* Animated video background that spans the entire page */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
        style={{
          background: 'transparent'
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hidden sm:block"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            minWidth: '100%',
            minHeight: '100%',
            width: 'auto',
            height: 'auto',
            transform: 'translate(-50%, -50%)',
            objectFit: 'cover',
            zIndex: -2
          }}
          src="https://framerusercontent.com/assets/2Zb7xKsaB61aArojWHODHJZ3ew.mp4"
        />
        
        {/* Mobile fallback background */}
        <div className="sm:hidden absolute inset-0 bg-gradient-to-b from-[#2563EB] via-[#1D4ED8] to-white z-0"></div>
        
        {/* Gradient overlay to match Framer template */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: 'linear-gradient(180deg, rgb(37, 99, 235) 0%, rgba(37, 99, 235, 0.8) 30%, rgba(37, 99, 235, 0.6) 60%, rgba(255, 255, 255, 0.3) 80%, rgba(255, 255, 255, 0.8) 100%)',
            zIndex: -1
          }}
        />
        
        {/* Enhanced animated star trails */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-1 h-1 bg-white/30 rounded-full animate-star-pulse animate-star-float" style={{ animationDelay: '0s' }} />
          <div className="absolute top-32 left-20 w-0.5 h-0.5 bg-white/20 rounded-full animate-star-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-16 left-32 w-0.5 h-0.5 bg-white/25 rounded-full animate-star-pulse animate-star-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-40 left-16 w-1 h-1 bg-white/15 rounded-full animate-star-pulse" style={{ animationDelay: '3s' }} />
          <div className="absolute top-24 left-40 w-0.5 h-0.5 bg-white/30 rounded-full animate-star-pulse animate-star-float" style={{ animationDelay: '4s' }} />
          
          {/* More stars on the right side */}
          <div className="absolute top-28 right-20 w-1 h-1 bg-white/25 rounded-full animate-star-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="absolute top-36 right-32 w-0.5 h-0.5 bg-white/20 rounded-full animate-star-pulse animate-star-float" style={{ animationDelay: '1.5s' }} />
          <div className="absolute top-20 right-16 w-0.5 h-0.5 bg-white/30 rounded-full animate-star-pulse" style={{ animationDelay: '2.5s' }} />
          <div className="absolute top-44 right-24 w-1 h-1 bg-white/15 rounded-full animate-star-pulse animate-star-float" style={{ animationDelay: '3.5s' }} />
          
          {/* Additional stars for more dynamic effect */}
          <div className="absolute top-60 left-60 w-0.5 h-0.5 bg-white/20 rounded-full animate-star-pulse" style={{ animationDelay: '1.2s' }} />
          <div className="absolute top-80 right-80 w-1 h-1 bg-white/25 rounded-full animate-star-pulse animate-star-float" style={{ animationDelay: '2.8s' }} />
          <div className="absolute top-100 left-100 w-0.5 h-0.5 bg-white/15 rounded-full animate-star-pulse" style={{ animationDelay: '3.3s' }} />
        </div>
      </div>
      
      {/* Content container with proper z-index */}
      <div className="relative z-10 w-full flex flex-col">
        <CustomNavbar />
        
        {/* Hero section with custom color palette */}
        <div className="min-h-screen w-full pt-16 pb-12 md:pb-16 lg:pb-20 relative flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none z-0"></div>
          
          {/* Desktop Hero Content */}
          <div className="relative z-10 w-full h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 hidden md:block">
            <HeroFramerComponent.Responsive locale="en" />
          </div>
          
          {/* Mobile Hero Content - Using Framer Component */}
          <div className="relative z-10 w-full flex items-center justify-center md:hidden">
            <div className="w-full h-full" style={{ minWidth: '100vw', width: '100vw' }}>
              <HeroFramerComponent.Responsive locale="en" />
            </div>
          </div>
        </div>
        
        {/* SAT Question Preview Section */}
        <div className="container mx-auto px-4 md:px-6 lg:px-8 pb-16 sm:pb-20">
          <div className="max-w-4xl mx-auto">
            <div className="glass-effect bg-white/20 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/40 p-6 sm:p-8 md:p-12 shadow-2xl">
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
                  Try a Sample SAT Question
                </h2>
                <p className="text-white/70 text-base sm:text-lg">
                  Experience the quality of our practice questions
                </p>
              </div>
              
              {/* Question Card */}
              <div className="bg-white/98 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl border border-[#EDEEF0]">
                <div className="mb-4 sm:mb-6">
                  <span className="inline-block bg-[#2563EB] text-white text-xs sm:text-sm font-bold px-3 sm:px-5 py-2 sm:py-2.5 rounded-full mb-3 sm:mb-4 shadow-lg">
                    Math - Algebra
                  </span>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#1D1D1F] mb-3 sm:mb-4 leading-relaxed">
                    If 2x + 3y = 12 and x - y = 2, what is the value of x?
                  </h3>
                </div>
                
                {/* Answer Options */}
                <div className="space-y-2 sm:space-y-3">
                  {[
                    { id: 'A', text: '3', correct: false },
                    { id: 'B', text: '4', correct: true },
                    { id: 'C', text: '5', correct: false },
                    { id: 'D', text: '6', correct: false }
                  ].map((option) => (
                    <button
                      key={option.id}
                      className="w-full text-left p-3 sm:p-4 rounded-lg border-2 border-[#EDEEF0] hover:border-[#2563EB] hover:bg-[#F7F7F9] hover:shadow-md transition-all duration-200 group transform hover:scale-[1.02]"
                    >
                      <div className="flex items-center">
                        <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#F7F7F9] text-[#1D1D1F] font-semibold flex items-center justify-center mr-3 sm:mr-4 group-hover:bg-[#2563EB] group-hover:text-white transition-colors text-sm sm:text-base">
                          {option.id}
                        </span>
                        <span className="text-[#1D1D1F] font-medium text-sm sm:text-base">{option.text}</span>
                      </div>
                    </button>
                  ))}
                </div>
                
                <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-[#EDEEF0]">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-3 sm:space-y-0">
                    <span className="text-xs sm:text-sm text-[#1D1D1F]/60">
                      Question 1 of 1
                    </span>
                    <button className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base">
                      Check Answer
                    </button>
                  </div>
                </div>
              </div>
              
              {/* CTA Section */}
              <div className="text-center mt-6 sm:mt-8">
                <p className="text-white/80 mb-3 sm:mb-4 text-base sm:text-lg">
                  Ready to practice with thousands more questions like this?
                </p>
                <button className="bg-white hover:bg-[#F7F7F9] text-[#2563EB] px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-bold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 text-sm sm:text-base">
                  Start Practicing Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
