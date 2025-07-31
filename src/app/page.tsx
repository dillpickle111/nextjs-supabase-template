"use client";

import '../../framer/styles.css';
import HeroFramerComponent from '../../framer/hero';
import NavbarFramerComponent from '../../framer/navbar/navbar';

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col relative">
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
        <NavbarFramerComponent.Responsive locale="en" />
        
        {/* Hero section with increased spacing */}
        <div className="py-20 md:py-32 lg:py-40">
          <HeroFramerComponent.Responsive locale="en" />
        </div>
        
        {/* SAT Question Preview Section */}
        <div className="container mx-auto px-4 md:px-6 lg:px-8 pb-20">
          <div className="max-w-4xl mx-auto">
            <div className="glass-effect bg-white/10 rounded-2xl border border-white/20 p-8 md:p-12 shadow-2xl">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Try a Sample SAT Question
                </h2>
                <p className="text-white/70 text-lg">
                  Experience the quality of our practice questions
                </p>
              </div>
              
              {/* Question Card */}
              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-xl border border-white/30">
                <div className="mb-6">
                  <span className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-medium px-4 py-2 rounded-full mb-4 shadow-lg">
                    Math - Algebra
                  </span>
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 leading-relaxed">
                    If 2x + 3y = 12 and x - y = 2, what is the value of x?
                  </h3>
                </div>
                
                {/* Answer Options */}
                <div className="space-y-3">
                  {[
                    { id: 'A', text: '3', correct: false },
                    { id: 'B', text: '4', correct: true },
                    { id: 'C', text: '5', correct: false },
                    { id: 'D', text: '6', correct: false }
                  ].map((option) => (
                    <button
                      key={option.id}
                      className="w-full text-left p-4 rounded-lg border-2 border-gray-200 hover:border-blue-400 hover:bg-blue-50 hover:shadow-md transition-all duration-200 group transform hover:scale-[1.02]"
                    >
                      <div className="flex items-center">
                        <span className="w-8 h-8 rounded-full bg-gray-100 text-gray-700 font-semibold flex items-center justify-center mr-4 group-hover:bg-blue-100 group-hover:text-blue-700 transition-colors">
                          {option.id}
                        </span>
                        <span className="text-gray-900 font-medium">{option.text}</span>
                      </div>
                    </button>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      Question 1 of 1
                    </span>
                    <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                      Check Answer
                    </button>
                  </div>
                </div>
              </div>
              
              {/* CTA Section */}
              <div className="text-center mt-8">
                <p className="text-white/80 mb-4 text-lg">
                  Ready to practice with thousands more questions like this?
                </p>
                <button className="bg-white hover:bg-gray-50 text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
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
