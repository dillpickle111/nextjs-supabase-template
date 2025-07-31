"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function BeautifulLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 relative overflow-hidden">
      {/* Sky background with subtle patterns */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-white rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-60 left-1/4 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-2000"></div>
          <div className="absolute top-80 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-3000"></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-white">Prepify</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="text-white/80 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Practice
                </a>
                <a href="#" className="text-white/80 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Features
                </a>
                <a href="#" className="text-white/80 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  About
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-white hover:bg-white/20 border-0">
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
      <main className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center p-8 text-center">
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

      {/* Task Management Interface */}
      <div className="relative -mt-20 mx-4 sm:mx-8 lg:mx-16">
        <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0 rounded-2xl overflow-hidden">
          <CardContent className="p-0">
            <div className="flex h-[600px]">
              {/* Left Sidebar */}
              <div className="w-64 bg-gray-50 border-r border-gray-200 p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Company</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3 text-gray-700 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
                        <div className="w-5 h-5">🏠</div>
                        <span className="text-sm">Home</span>
                      </div>
                      <div className="flex items-center space-x-3 text-blue-600 bg-blue-50 p-2 rounded-lg cursor-pointer">
                        <div className="w-5 h-5">✓</div>
                        <span className="text-sm font-medium">Tasks</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">CRM</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3 text-gray-700 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
                        <div className="w-5 h-5">👤</div>
                        <span className="text-sm">Talents</span>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-700 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
                        <div className="w-5 h-5">💼</div>
                        <span className="text-sm">Open Roles</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Insights</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3 text-gray-700 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
                        <div className="w-5 h-5">⚡</div>
                        <span className="text-sm">Analytics</span>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-700 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
                        <div className="w-5 h-5">📄</div>
                        <span className="text-sm">Reports</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">Tasks</h2>
                  <div className="flex items-center space-x-4">
                    <Button variant="outline" size="sm" className="text-gray-600">
                      <div className="w-4 h-4 mr-2">🔍</div>
                      Filters
                    </Button>
                    <div className="flex border border-gray-200 rounded-lg">
                      <button className="px-3 py-1 bg-blue-50 text-blue-600 rounded-l-lg text-sm font-medium">Board</button>
                      <button className="px-3 py-1 text-gray-600 rounded-r-lg text-sm">Calendar</button>
                    </div>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      + New Task
                    </Button>
                  </div>
                </div>

                {/* Task Board */}
                <div className="grid grid-cols-3 gap-6">
                  {/* To-do Column */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5">📋</div>
                      <h3 className="font-medium text-gray-900">To-do</h3>
                    </div>
                    <div className="space-y-3">
                      <Card className="p-4 border border-gray-200">
                        <CardContent className="p-0">
                          <h4 className="font-medium text-gray-900 mb-2">Create a new job post</h4>
                          <p className="text-sm text-gray-600 mb-3">Design and publish a new job posting for the marketing team</p>
                          <div className="flex space-x-2">
                            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Design</span>
                            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">Hiring</span>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="p-4 border border-gray-200">
                        <CardContent className="p-0">
                          <h4 className="font-medium text-gray-900 mb-2">Review a salary</h4>
                          <p className="text-sm text-gray-600">Analyze and approve salary adjustments for Q4</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  {/* In Progress Column */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 text-orange-500">⏰</div>
                      <h3 className="font-medium text-gray-900">In Progress</h3>
                    </div>
                    <div className="space-y-3">
                      <Card className="p-4 border border-gray-200">
                        <CardContent className="p-0">
                          <h4 className="font-medium text-gray-900 mb-2">Design Report</h4>
                          <p className="text-sm text-gray-600 mb-3">Create comprehensive design report for stakeholders</p>
                          <div className="flex space-x-2">
                            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Design</span>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="p-4 border border-gray-200">
                        <CardContent className="p-0">
                          <h4 className="font-medium text-gray-900 mb-2">Component Refactoring</h4>
                          <p className="text-sm text-gray-600">Refactor UI components for better performance</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  {/* Done Column */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 text-green-500">✓</div>
                      <h3 className="font-medium text-gray-900">Done</h3>
                    </div>
                    <div className="space-y-3">
                      <Card className="p-4 border border-gray-200">
                        <CardContent className="p-0">
                          <h4 className="font-medium text-gray-900 mb-2">Design Reviews</h4>
                          <p className="text-sm text-gray-600 mb-3">Complete design review process for new features</p>
                          <div className="flex space-x-2">
                            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Design</span>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="p-4 border border-gray-200">
                        <CardContent className="p-0">
                          <h4 className="font-medium text-gray-900 mb-2">Metrics Analysis</h4>
                          <p className="text-sm text-gray-600">Analyze user engagement metrics for Q3</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 