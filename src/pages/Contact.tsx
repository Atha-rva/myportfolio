import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  Send, 
  CheckCircle,
  Clock,
  Globe,
  Github, 
  Linkedin, 
} from 'lucide-react';
import PageTransition from '../components/PageTransition';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [glowMode, setGlowMode] = useState(false);

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
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const toggleGlowMode = () => {
    setGlowMode(!glowMode);
  };

const socialLinks = [
  {
    icon: Github,
    name: 'GitHub',
    url: 'https://github.com/Atha-rva',
    color: 'hover:text-gray-300'
  },
  {
    icon: Linkedin,
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/atharva-deshmukh-9b61b325b/',
    color: 'hover:text-blue-400'
  }
];

  return (
    <PageTransition>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 flex justify-center items-center">
                <MessageCircle className="h-12 w-12 text-green-400 mr-4" /> Get In Touch
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 bg-gray-900 relative overflow-hidden">
          {glowMode && (
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-1xl h-2 bg-green-400 rounded-full opacity-80 filter blur-md"></div>
          )}

          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="relative mb-3 w-14 h-28 bg-gray-800 rounded-lg flex flex-col items-center justify-start p-2">
                  <button
                    onClick={toggleGlowMode}
                    className={`absolute w-10 h-10 rounded-md flex items-center justify-center text-white text-xs
                      ${glowMode ? 'bg-green-500 shadow-lg shadow-green-400/30 translate-y-16' : 'bg-gray-700'}
                      transition-transform duration-300`}
                  >
                    {glowMode ? 'ON' : 'OFF'}
                  </button>
                </div>

                <h2 className={`text-3xl font-bold mb-8 ${glowMode ? 'text-green-400' : 'text-white'}`}>Send Me a Message</h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-green-400/10 border border-green-400/20 rounded-xl p-8 text-center"
                  >
                    <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-green-400 mb-2">Message Sent!</h3>
                    <p className="text-gray-300">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className={`block text-sm font-medium mb-2 ${glowMode ? 'text-green-400' : 'text-gray-300'}`}>Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Your full name"
                          className={`w-full px-4 py-3 bg-gray-800 border ${glowMode ? 'border-green-400/50' : 'border-gray-700'} rounded-lg focus:outline-none focus:ring-2 ${glowMode ? 'focus:ring-green-400' : 'focus:ring-gray-600'} text-white`}
                        />
                      </div>
                      <div>
                        <label className={`block text-sm font-medium mb-2 ${glowMode ? 'text-green-400' : 'text-gray-300'}`}>Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="your.email@example.com"
                          className={`w-full px-4 py-3 bg-gray-800 border ${glowMode ? 'border-green-400/50' : 'border-gray-700'} rounded-lg focus:outline-none focus:ring-2 ${glowMode ? 'focus:ring-green-400' : 'focus:ring-gray-600'} text-white`}
                        />
                      </div>
                    </div>

                    <div>
                      <label className={`block text-sm font-medium mb-2 ${glowMode ? 'text-green-400' : 'text-gray-300'}`}>Subject *</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        placeholder="Project inquiry, collaboration, etc."
                        className={`w-full px-4 py-3 bg-gray-800 border ${glowMode ? 'border-green-400/50' : 'border-gray-700'} rounded-lg focus:outline-none focus:ring-2 ${glowMode ? 'focus:ring-green-400' : 'focus:ring-gray-600'} text-white`}
                      />
                    </div>

                    <div>
                      <label className={`block text-sm font-medium mb-2 ${glowMode ? 'text-green-400' : 'text-gray-300'}`}>Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        placeholder="Tell me about your project, goals, and any specific requirements..."
                        className={`w-full px-4 py-3 bg-gray-800 border ${glowMode ? 'border-green-400/50' : 'border-gray-700'} rounded-lg focus:outline-none focus:ring-2 ${glowMode ? 'focus:ring-green-400' : 'focus:ring-gray-600'} text-white resize-none`}
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-4 px-6 rounded-lg font-semibold flex items-center justify-center disabled:opacity-50 ${
                        glowMode ? 'bg-green-400 text-gray-900 hover:bg-green-500 shadow-lg shadow-green-400/30' : 'bg-gray-700 text-white hover:bg-gray-600'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-current mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message <Send className="h-5 w-5 ml-2" />
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </motion.div>

              {/* Info + Social */}
              <motion.div initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    I'm always excited to work on new projects and collaborate with amazing people. Whether you need a complete app or just want to discuss an idea, I'm here to help.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-white mb-1">Quick Response</h3>
                        <p className="text-gray-400 text-sm">I typically respond to all inquiries within 24 hours.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Clock className="h-6 w-6 text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-white mb-1">Flexible Schedule</h3>
                        <p className="text-gray-400 text-sm">Available for projects of all sizes and timelines.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Globe className="h-6 w-6 text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-white mb-1">Remote Friendly</h3>
                        <p className="text-gray-400 text-sm">Working with clients worldwide across different timezones.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <motion.a key={index} href={social.url} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.9 }}
                          className={`p-3 bg-gray-800 rounded-lg border border-gray-700 hover:border-green-400/50 ${social.color}`}>
                          <Icon className="h-6 w-6" />
                        </motion.a>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
                    {/* Light Effect when glow mode is on */}
          {glowMode && (
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[800px] bg-gradient-to-b from-green-400/10 to-transparent opacity-30 clip-path-polygon"></div>
            </div>
          )}
        </section>
      </div>
    </PageTransition>
  );
};

export default Contact;
