'use client';

import { useState } from 'react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
  {
    id: 1,
    title: 'E-Commerce Website',
    category: 'web',
    description: 'A modern e-commerce website with product listing, cart, and checkout features.',
    image: '/images/projects/e-commerce.png',
    technologies: ['Laravel', 'Blade', 'Tailwind CSS', 'jQuery'],
    liveUrl: 'https://ecommerce.datadss.com/',
    githubUrl: '#'
  },
  {
    id: 2,
    title: 'POS System',
    category: 'system',
    description: 'A point of sale system built with Laravel and React, featuring real-time item management and reporting.',
    image: '/images/projects/pos.png',
    technologies: ['Laravel', 'React', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 3,
    title: 'MRG Logistics Website',
    category: 'portfolio',
    description: 'Company website for a logistics service provider with responsive layout and modern design.',
    image: '/images/projects/mrg-logistics.png',
    technologies: ['Laravel', 'Blade', 'Tailwind CSS', 'jQuery'],
    liveUrl: 'https://mrglogisticsbd.com/',
    githubUrl: '#'
  },
  {
    id: 4,
    title: 'Khawaja Shipping Website',
    category: 'portfolio',
    description: 'Responsive shipping company website with service sections and contact form.',
    image: '/images/projects/khawaja-shipping.png',
    technologies: ['Laravel', 'Blade', 'Tailwind CSS', 'jQuery'],
    liveUrl: 'https://khawajashipping.com/',
    githubUrl: '#'
  },
  // {
  //   id: 5,
  //   title: 'CHRCA Firm Website',
  //   category: 'portfolio',
  //   description: 'Corporate website for a Chartered Accountant firm with service listing and client info.',
  //   image: 'https://readdy.ai/api/search-image?query=Social%20media%20analytics%20dashboard%20interface%2C%20charts%20and%20graphs%2C%20data%20visualization%2C%20modern%20admin%20panel%20design%2C%20statistics%20overview%2C%20professional%20UI%20design%2C%20light%20theme&width=600&height=400&seq=project-5&orientation=landscape',
  //   technologies: ['Laravel', 'Blade', 'Tailwind CSS', 'jQuery'],
  //   liveUrl: 'https://chrca.com/',
  //   githubUrl: '#'
  // },
  {
    id: 6,
    title: 'JHCBd Firm Website',
    category: 'portfolio',
    description: 'Clean and modern company site for a CA firm with an informative layout.',
    image: '/images/projects/jhcbd.png',
    technologies: ['Laravel', 'Blade', 'Tailwind CSS', 'jQuery'],
    liveUrl: 'https://jhcbd.org/',
    githubUrl: '#'
  }
];


  const filters = [
  { id: 'all', label: 'All Projects' },
  { id: 'portfolio', label: 'Portfolio Websites' },
  { id: 'web', label: 'Web Applications' },
  { id: 'system', label: 'Admin Systems' }
];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
            My Work
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Featured 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"> Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating beautiful, functional web applications.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer whitespace-nowrap ${
                activeFilter === filter.id
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 shadow-md'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-top group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-x-2">
                  <a 
                    target="_blank"
                    href={project.liveUrl}
                    className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-indigo-50 transition-colors cursor-pointer"
                  >
                    <i className="ri-external-link-line text-indigo-600"></i>
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-indigo-50 transition-colors cursor-pointer"
                  >
                    <i className="ri-github-line text-indigo-600"></i>
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <a 
                  target="_blank" rel="noopener noreferrer"
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium transition-colors cursor-pointer"
                  >
                    View Project
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-arrow-right-line"></i>
                    </div>
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-indigo-600 transition-colors cursor-pointer"
                  >
                    <i className="ri-github-line"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}