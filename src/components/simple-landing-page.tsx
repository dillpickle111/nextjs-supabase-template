"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function SimpleLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-600">
      {/* Navigation */}
      <nav className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-white">Prepify</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="text-white/80 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Practice
                </a>
                <a href="#" className="text-white/80 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Features
                </a>
                <a href="#" className="text-white/80 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  About
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-white hover:bg-white/20">
                Sign In
              </Button>
              <Button className="bg-white text-blue-600 hover:bg-white/90">
                Start for free
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center p-8 text-center">
        <section className="container max-w-4xl space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Master the SAT. For Free. Forever.
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Official questions, instant feedback, built-in Desmos Calculator
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-white/90 text-lg px-8 py-3">
              Practice Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 text-lg px-8 py-3">
              Explore Features
            </Button>
          </div>

          <p className="text-sm text-white/70">Beta-Testing</p>
        </section>
      </main>

      {/* Trusted By Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Trusted by students nationwide
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="p-6">
                  <CardContent className="p-0">
                    <div className="h-12 bg-gray-200 rounded flex items-center justify-center">
                      <span className="text-gray-500 font-medium">Logo {i}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Prepify</h3>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400">Features</a></li>
                <li><a href="#" className="hover:text-blue-400">Pricing</a></li>
                <li><a href="#" className="hover:text-blue-400">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400">About us</a></li>
                <li><a href="#" className="hover:text-blue-400">Careers</a></li>
                <li><a href="#" className="hover:text-blue-400">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400">Help Center</a></li>
                <li><a href="#" className="hover:text-blue-400">Privacy</a></li>
                <li><a href="#" className="hover:text-blue-400">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            <p>Made with ❤️ for students everywhere</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 