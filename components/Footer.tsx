'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Navigation',
      links: [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Skills', href: '#skills' },
        { label: 'Projects', href: '#projects' }
      ]
    },
    {
      title: 'Services',
      links: [
        { label: 'Web Development', href: '#' },
        { label: 'UI/UX Design', href: '#' },
        { label: 'Frontend Consulting', href: '#' },
        { label: 'Code Review', href: '#' }
      ]
    },
    {
      title: 'Connect',
      links: [
        { label: 'LinkedIn', href: '#' },
        { label: 'GitHub', href: '#' },
        { label: 'Twitter', href: '#' },
        { label: 'Dribbble', href: '#' }
      ]
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-1">
            <div className="font-['Pacifico'] text-2xl text-indigo-400 mb-4">
              Alex Chen
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Frontend developer passionate about creating beautiful, functional web experiences with modern technologies.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: 'ri-github-fill', url: '#' },
                { icon: 'ri-linkedin-fill', url: '#' },
                { icon: 'ri-twitter-fill', url: '#' },
                { icon: 'ri-dribbble-fill', url: '#' }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-indigo-600 transition-colors cursor-pointer"
                >
                  <i className={`${social.icon} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>
          
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.href.startsWith('#') ? (
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-gray-400 hover:text-indigo-400 transition-colors cursor-pointer"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <a 
                        href={link.href}
                        className="text-gray-400 hover:text-indigo-400 transition-colors cursor-pointer"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-center md:text-left">
              © {currentYear} Alex Chen. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm cursor-pointer">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm cursor-pointer">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-950 py-4">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-500 text-sm">
            Built with Next.js, TypeScript, and Tailwind CSS • Portfolio 2024
          </p>
        </div>
      </div>
    </footer>
  );
}