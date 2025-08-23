'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus('');
      }, 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: 'ri-mail-line',
      title: 'Email',
      value: 'alaminmushtaq321@gmail.com',
      link: 'mailto:alaminmushtaq321@gmail.com'
    },
    {
      icon: 'ri-phone-line',
      title: 'Phone',
      value: '+8801849652002',
      link: 'tel:+8801849652002'
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Location',
      value: 'Dhaka, Bangladesh',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
            Get In Touch
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Let's Work 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"> Together</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 rounded-xl">
                    <i className={`${info.icon} text-xl text-indigo-600`}></i>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{info.title}</div>
                    <a 
                      href={info.link}
                      className="text-indigo-600 hover:text-indigo-700 transition-colors cursor-pointer"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-8 rounded-3xl text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to start a project?</h3>
              <p className="mb-6 opacity-90">
                I'm available for freelance work and full-time opportunities. Let's create something amazing together!
              </p>
              <div className="flex items-center gap-4">
                {[
                  { icon: 'ri-github-fill', url: 'https://github.com/alaminmustaq' },
                  { icon: 'ri-linkedin-fill', url: 'https://www.linkedin.com/in/alamin-mustaq/' },
                  { icon: 'ri-facebook-fill', url: 'https://www.facebook.com/alamin.mustaq/' },
                  { icon: 'ri-codepen-fill', url: 'https://codepen.io/Alamin-Mushtaq' }
                ].map((social, index) => (
                  <a 
                    key={index}
                    href={social.url}
                    className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-full hover:bg-white/30 transition-colors cursor-pointer"
                  >
                    <i className={`${social.icon} text-lg`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-colors text-sm"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-colors text-sm"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-colors text-sm"
                  placeholder="Project inquiry"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-colors resize-none text-sm"
                  placeholder="Tell me about your project..."
                ></textarea>
                <div className="text-xs text-gray-500 mt-1">
                  {formData.message.length}/500 characters
                </div>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting || formData.message.length > 500}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-xl font-medium hover:shadow-xl hover:shadow-indigo-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                    Sending Message...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
              
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-check-line text-green-600"></i>
                    </div>
                    Message sent successfully!
                  </div>
                  <div className="text-sm">Thank you for reaching out. I'll get back to you soon!</div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}