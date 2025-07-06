import { motion } from 'framer-motion';
import { 
  Code2, 
  Smartphone, 
  Database, 
  Palette, 
  CheckCircle,
  Target
} from 'lucide-react';
import PageTransition from '../components/PageTransition';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: Code2,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies like React, Node.js, and TypeScript.',
      features: [
        'Responsive Design',
        'Performance Optimization',
        'SEO Friendly',
        'Cross-browser Compatibility',
        'Modern UI/UX',
        'Progressive Web Apps'
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Express'],
    },
    {
      id: 2,
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications using React Native and Flutter for iOS and Android.',
      features: [
        'Cross-platform Development',
        'Native Performance',
        'App Store Deployment',
        'Push Notifications',
        'Offline Functionality',
        'Real-time Updates'
      ],
      technologies: ['React Native', 'Flutter'],
    },
    {
      id: 3,
      icon: Database,
      title: 'Backend Development',
      description: 'Scalable backend solutions with RESTful APIs, databases, and cloud integration.',
      features: [
        'RESTful API Design',
        'Database Architecture',
        'Authentication & Security',
        'Third-party Integrations',
        'Microservices',
        'API Documentation'
      ],
      technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis'],
    },
    {
      id: 4,
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered design solutions that combine aesthetics with functionality.',
      features: [
        'User Research',
        'Wireframing & Prototyping',
        'Visual Design',
        'Design Systems',
        'Usability Testing',
        'Responsive Design'
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision'],
    },
  ];

  const process = [
    {
      step: 1,
      title: 'Discovery & Planning',
      description: 'Understanding your requirements, goals, and technical specifications.',
      icon: Target
    },
    {
      step: 2,
      title: 'Design & Architecture',
      description: 'Creating wireframes, mockups, and technical architecture plans.',
      icon: Palette
    },
    {
      step: 3,
      title: 'Development',
      description: 'Building your solution with regular updates and milestone reviews.',
      icon: Code2
    },
    {
      step: 4,
      title: 'Testing & Deployment',
      description: 'Comprehensive testing and smooth deployment to production.',
      icon: CheckCircle
    }
  ];



  return (
    <PageTransition>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                My Services
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Comprehensive development services to bring your ideas to life with cutting-edge technology and exceptional quality
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-green-400/50 transition-all duration-300"
                  >
                    <div className="bg-green-400/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                      <Icon className="h-8 w-8 text-green-400" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-white mb-3">Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-white mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-2 py-1 bg-gray-700 text-xs rounded text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Process</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                A proven methodology that ensures successful project delivery from concept to completion
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="relative mb-6">
                      <div className="bg-green-400/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto border-2 border-green-400/20">
                        <Icon className="h-8 w-8 text-green-400" />
                      </div>
                      <div className="absolute -top-2 -right-2 bg-green-400 text-gray-900 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                        {step.step}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Services;