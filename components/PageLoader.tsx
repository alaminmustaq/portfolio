'use client';

import { useState, useEffect } from 'react';

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    // Minimum loading time
    const minLoadTime = setTimeout(() => {
      setProgress(100);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(minLoadTime);
    };
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 z-50 flex items-center justify-center">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-400/20 to-indigo-400/20 rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
      </div>

      {/* Main Loader Content */}
      <div className="relative z-10 text-center">
        {/* Logo Animation */}
        <div className="mb-8">
          <h1 className="font-['Pacifico'] text-4xl md:text-6xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
            Al Amin Mustaq
          </h1>
        </div>

        {/* Loading Animation */}
        <div className="relative">
          {/* Main Circle */}
          <div className="w-32 h-32 mx-auto mb-6 relative">
            {/* Outer Ring */}
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 128 128">
              <circle
                cx="64"
                cy="64"
                r="56"
                fill="none"
                stroke="rgba(99, 102, 241, 0.1)"
                strokeWidth="8"
              />
              <circle
                cx="64"
                cy="64"
                r="56"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray="351.86"
                strokeDashoffset={351.86 - (progress / 100) * 351.86}
                className="transition-all duration-300 ease-out"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Center Dot */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-4 h-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"></div>
          </div>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-300"></div>
          </div>
          <div className="absolute top-1/2 -left-4 transform -translate-y-1/2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-150"></div>
          </div>
          <div className="absolute top-1/2 -right-4 transform -translate-y-1/2">
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-450"></div>
          </div>
        </div>

        {/* Progress Text */}
        <div className="mt-6">
          <p className="text-gray-600 text-lg font-medium mb-2">Loading Portfolio</p>
          <p className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {Math.round(progress)}%
          </p>
        </div>

        {/* Loading Messages */}
        <div className="mt-4 h-6">
          {progress < 30 && (
            <p className="text-gray-500 text-sm animate-fade-in">Initializing creative elements...</p>
          )}
          {progress >= 30 && progress < 60 && (
            <p className="text-gray-500 text-sm animate-fade-in">Loading projects and experiences...</p>
          )}
          {progress >= 60 && progress < 90 && (
            <p className="text-gray-500 text-sm animate-fade-in">Preparing interactive features...</p>
          )}
          {progress >= 90 && (
            <p className="text-gray-500 text-sm animate-fade-in">Almost ready!</p>
          )}
        </div>
      </div>

      {/* Bottom Elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-indigo-400 rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-200"></div>
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-400"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}