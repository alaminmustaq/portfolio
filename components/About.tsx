
'use client';
import CountUp from './CountUp';
import Image from 'next/image';

export default function About() {
  const achievements = [
    { number: '4+', label: 'Years of Experience' },
    { number: '50+', label: 'Projects Completed' }, 
    { number: '15+', label: 'Web Technologies' },
    { number: '25+', label: 'Happy Clients' }
  ];

  const skills = [
    { 
      name: 'Problem Solving', 
      icon: 'ri-puzzle-line', 
      color: 'from-blue-500 to-cyan-500',
      description: 'Finding effective solutions to complex challenges.'
    },
    { 
      name: 'Creative Design', 
      icon: 'ri-paint-brush-line', 
      color: 'from-purple-500 to-pink-500',
      description: 'Designing clean, engaging user interfaces.'
    },
    { 
      name: 'Team Leadership', 
      icon: 'ri-team-line', 
      color: 'from-green-500 to-emerald-500',
      description: 'Leading teams to success with clear direction.'
    },
    { 
      name: 'Fast Learning', 
      icon: 'ri-rocket-line', 
      color: 'from-orange-500 to-red-500',
      description: 'Quickly mastering new tools and technologies.'
    }
  ]; 

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">
            About Me
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Passionate About Creating
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"> Digital Magic</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            I'm a dedicated frontend developer who transforms complex ideas into beautiful, 
            intuitive digital experiences. My journey in web development is driven by curiosity, 
            creativity, and a commitment to excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="relative">
            <Image 
              src="/images/about.jpg"
              alt="Creative Development Process"
              width={500}
              height={500}
              className="w-full rounded-3xl shadow-2xl object-top"
            /> 
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600">∞</div>
                <div className="text-sm text-gray-600">Always Learning</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">My Development Philosophy</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl">
                  <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-1">
                    <i className="ri-code-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Quality First</h4>
                    <p className="text-gray-600">Every line of code is crafted with precision and purpose.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl">
                  <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-1">
                    <i className="ri-user-heart-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">User-Centered</h4>
                    <p className="text-gray-600">Designing experiences that users love and remember.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl">
                  <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mt-1">
                    <i className="ri-rocket-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Performance Obsessed</h4>
                    <p className="text-gray-600">Building fast, efficient, and scalable applications.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <div key={index} className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
              <div className={`w-12 h-12 flex items-center justify-center bg-gradient-to-r ${skill.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${skill.icon} text-white text-xl`}></i>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">{skill.name}</h4>
              <p className="text-sm text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {achievements.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gradient-to-br from-white to-indigo-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                <CountUp end={stat.number} />
              </div>
              <div className="text-sm text-gray-600 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
