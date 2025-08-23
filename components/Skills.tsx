'use client';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: 'ri-code-s-slash-line',
      skills: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3']
    },
    {
      title: 'Styling & UI Design',
      icon: 'ri-palette-line',
      skills: ['Tailwind CSS', 'SCSS', 'Figma', 'Responsive Design', 'Framer Motion']
    },
    {
      title: 'Development Tools',
      icon: 'ri-tools-line',
      skills: ['Git & GitHub', 'Vite', 'Webpack', 'VS Code', 'NPM/Yarn', 'Postman']
    },
    {
      title: 'Backend & APIs',
      icon: 'ri-server-line',
      skills: ['Laravel', 'MySQL', 'REST APIs', 'MVC Architecture']
    }
  ];

  const techStack = [
    { name: 'React', level: 95, color: 'bg-blue-500' },
    { name: 'Next.js', level: 90, color: 'bg-gray-800' },
    { name: 'TypeScript', level: 85, color: 'bg-blue-600' },
    { name: 'Tailwind CSS', level: 95, color: 'bg-teal-500' },
    { name: 'Laravel', level: 80, color: 'bg-green-600' },
    { name: 'MySQL', level: 75, color: 'bg-green-500' }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-br from-white to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
            My Skills
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Technologies I 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"> Master</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I continuously expand my skill set to stay current with the latest technologies and best practices in web development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 rounded-2xl mb-4">
                <i className={`${category.icon} text-2xl text-indigo-600`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.title}</h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium inline-block mr-2 mb-2">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Proficiency Levels</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {techStack.map((tech, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700">{tech.name}</span>
                  <span className="text-sm text-gray-500">{tech.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className={`h-3 ${tech.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${tech.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}