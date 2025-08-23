'use client';

export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'DATADSS LTD.',
      period: '2025 - Present',
      location: 'Dhaka, Bangladesh',
      description: 'Led a team of 4 developers in building scalable React applications. Implemented modern development practices and improved application performance by 40%.',
      achievements: [
        'Architected and built 15+ React applications',
        'Mentored junior developers and established coding standards',
        'Reduced bundle size by 30% through optimization techniques'
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'GraphQL']
    },
    {
      id: 2,
      title: 'Frontend Developer',
      company: 'DATADSS LTD.',
      period: '2024 - 2025',
      location: 'Dhaka, Bangladesh',
      description: 'Developed responsive web applications and collaborated with design teams to implement pixel-perfect UI components.',
      achievements: [
        'Built 20+ responsive websites with 99% client satisfaction',
        'Integrated REST APIs and improved data loading by 25%',
        'Collaborated with UX team to enhance user experience'
      ],
      technologies: ['React.js', 'Tailwind CSS', 'Laravel', 'REST APIs']
    },
    {
      id: 3,
      title: 'Junior Web Developer',
      company: 'DATADSS LTD.',
      period: '2023 - 2024',
      location: 'Dhaka, Bangladesh',
      description: 'Started my professional journey building websites and learning modern web development practices.',
      achievements: [
        'Converted 10+ design mockups to functional websites',
        'Learned React and modern JavaScript frameworks',
        'Contributed to open-source projects'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery']
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science and Engineering',
      school: 'Daffodil International University',
      period: '2018 - 2023',
      description: 'Focused on web technologies, algorithms, and software engineering principles.'
    }
  ];

  const certifications = [
    'AWS Certified Developer',
    'Google Cloud Professional',
    'React Developer Certification',
    'Advanced JavaScript Concepts'
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-br from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
            My Journey
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Work 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"> Experience</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My professional journey in web development, from junior developer to senior engineer.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={exp.id} className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="md:w-1/3">
                      <div className="text-sm text-indigo-600 font-medium">{exp.period}</div>
                      <div className="text-sm text-gray-500">{exp.location}</div>
                    </div>
                    
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                      <div className="text-indigo-600 font-medium mb-4">{exp.company}</div>
                      <p className="text-gray-600 mb-4">{exp.description}</p>
                      
                      <div className="space-y-2 mb-4">
                        {exp.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600 text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {index < experiences.length - 1 && (
                    <div className="absolute -bottom-4 left-8 w-px h-8 bg-indigo-200"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-3xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-graduation-cap-line text-indigo-600"></i>
                </div>
                Education
              </h3>
              {education.map((edu, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="font-semibold text-gray-900">{edu.degree}</h4>
                  <div className="text-indigo-600 font-medium">{edu.school}</div>
                  <div className="text-sm text-gray-500">{edu.period}</div>
                  <p className="text-gray-600 text-sm">{edu.description}</p>
                </div>
              ))}
            </div>
            
            {/* <div className="bg-white p-6 rounded-3xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-award-line text-indigo-600"></i>
                </div>
                Certifications
              </h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                    <span className="text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}