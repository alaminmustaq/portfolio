
'use client';
import TypingEffect from './TypingEffect';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [displayText, setDisplayText] = useState(''); 

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20minimalist%20workspace%20with%20clean%20desk%2C%20natural%20lighting%2C%20soft%20blue%20and%20white%20tones%2C%20aesthetic%20developer%20setup%20with%20plants%2C%20geometric%20shapes%20floating%20in%20background%2C%20very%20clean%20and%20professional%20atmosphere%2C%20light%20gradient%20background&width=1920&height=1080&seq=hero-bg&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-white/40"></div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-left space-y-8">
          <div className="space-y-4">
            <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
            👋 Welcome to my portfolio
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Al Amin Mushtaq</span>
          </h1>

          <div className="text-2xl lg:text-3xl text-gray-700 font-medium">
            <TypingEffect />
          </div>

          <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
            I'm a passionate frontend developer who loves turning design ideas into interactive, responsive, and performant web experiences. With a focus on clean code, UI/UX best practices, and modern technologies like React and Tailwind CSS, I build interfaces that not only look good but feel great to use.
          </p>

          </div>
          
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={scrollToProjects}
              className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-medium transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/25 hover:-translate-y-1 cursor-pointer whitespace-nowrap"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="px-8 py-4 border-2 border-indigo-200 text-indigo-600 rounded-2xl font-medium hover:bg-indigo-50 transition-all duration-300 hover:border-indigo-300 hover:shadow-lg cursor-pointer whitespace-nowrap">
              <div className="flex items-center gap-2">
                <span>Download CV</span>
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-download-line"></i>
                </div>
              </div>
            </button>
          </div>
          
          <div className="flex items-center gap-6 pt-4">
            {[
              { icon: 'ri-github-fill', url: 'https://github.com/alaminmustaq' },
              { icon: 'ri-linkedin-fill', url: 'https://www.linkedin.com/in/alamin-mustaq/' },
              { icon: 'ri-facebook-fill', url: 'https://www.facebook.com/alamin.mustaq/' },
              { icon: 'ri-codepen-fill', url: 'https://codepen.io/Alamin-Mushtaq' }
              
            ].map((social, index) => (
              <a 
                key={index}
                href={social.url}
                className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-gray-600 hover:text-indigo-600 cursor-pointer"
              >
                <i className={`${social.icon} text-xl`}></i>
              </a>
            ))}
          </div>
        </div>
        
        <div className="relative">
          <div className="relative z-10">
            

<Image 
  src="/images/profile.png"
  alt="Alex Chen - Frontend Developer"
  width={500}
  height={500}
  className="w-full"
/>

          </div>
          
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full opacity-20 animate-pulse"></div>
        </div>
      </div>
      
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover:text-indigo-800 transition-colors duration-300"
      >
        <div className="w-8 h-8 flex items-center justify-center">
          <i className="ri-arrow-down-line text-2xl text-indigo-600"></i>
        </div>
      </button>
    </section>
  );
}
