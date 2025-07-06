import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ChevronDown, 
  ArrowRight, 
  Code2, 
  Zap, 
  Globe,
  Download,
  Sparkles,
  Rocket,
  Layers,
  Telescope
} from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Resume from '../assets/AtharvaResume.pdf';

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  
  const phrases = [
    "Full Stack Developer",
    "React Specialist", 
    "UI/UX Enthusiast",
    "Problem Solver"
  ];

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentIndex < currentPhrase.length) {
          setTypedText(prev => prev + currentPhrase[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentIndex > 0) {
          setTypedText(prev => prev.slice(0, -1));
          setCurrentIndex(prev => prev - 1);
        } else {
          setIsDeleting(false);
          setCurrentPhraseIndex(prev => (prev + 1) % phrases.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, currentPhraseIndex, phrases]);

  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable and scalable code",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Zap,
      title: "Fast Performance",
      description: "Optimized applications for best user experience",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Globe,
      title: "Responsive Design",
      description: "Perfect on all devices and screen sizes",
      color: "from-green-400 to-emerald-500"
    }
  ];

  const stats = [
    { number: "15+", label: "Projects Completed", icon: Rocket },
    { number: "1.5+", label: "Years Experience", icon: Code2 },
    { number: "5+", label: "Tech Stacks Explored", icon: Layers  },
    { number: "∞", label: "Ideas Still to Build", icon: Telescope  }
  ];

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{
              background: [
                "radial-gradient(circle at 20% 50%, #10b981 0%, transparent 50%)",
                "radial-gradient(circle at 80% 20%, #10b981 0%, transparent 50%)",
                "radial-gradient(circle at 40% 80%, #10b981 0%, transparent 50%)",
                "radial-gradient(circle at 20% 50%, #10b981 0%, transparent 50%)"
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          {/* Floating Sparkles */}
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-green-400/30"
              initial={{ 
                x: Math.random() * 800 - 400,
                y: Math.random() * 600 - 300,
                scale: 0
              }}
              animate={{ 
                y: [null, Math.random() * 600 - 300],
                scale: [0, 1, 0],
                rotate: 360
              }}
              transition={{ 
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            >
              <Sparkles className="h-6 w-6" />
            </motion.div>
          ))}

          {/* Terminal Window */}
          {/* <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <motion.div 
              className="inline-block bg-gray-800/90 backdrop-blur-sm rounded-lg p-6 border border-gray-700 shadow-2xl"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(16, 185, 129, 0.25)"
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <motion.div 
                  className="w-3 h-3 bg-red-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div 
                  className="w-3 h-3 bg-yellow-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                />
                <motion.div 
                  className="w-3 h-3 bg-green-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                />
                <span className="text-sm text-gray-400 ml-4">~/portfolio</span>
              </div>
              <div className="text-left font-mono text-sm space-y-2">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <span className="text-green-400">$</span>
                  <span className="text-white ml-2">whoami</span>
                </motion.div>
                <motion.div 
                  className="text-green-400"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  John Doe - Full Stack Developer
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <span className="text-green-400">$</span>
                  <span className="text-white ml-2">cat skills.txt</span>
                </motion.div>
                <motion.div 
                  className="text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1 }}
                >
                  React • Node.js • TypeScript • Python
                </motion.div>
              </div>
            </motion.div>
          </motion.div> */}

          {/* Main Heading */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.h1 
              className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-6"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.span 
                className="text-white"
                whileHover={{ color: "#10b981" }}
                transition={{ duration: 0.3 }}
              >
                Atharva
              </motion.span>{' '}
              <motion.span 
                className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Deshmukh
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Typing Animation */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-mono mb-8 h-16 flex items-center justify-center"
          >
            <motion.span 
              className="text-green-400"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              {typedText}
            </motion.span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-green-400 ml-1"
            >
              |
            </motion.span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Passionate about creating innovative solutions and bringing ideas to life through code.
            Specialized in modern web technologies and full-stack development.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link to="/projects">
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 10px 30px rgba(16, 185, 129, 0.3)",
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-400 to-blue-500 text-gray-900 px-8 py-4 rounded-lg font-semibold flex items-center space-x-2 shadow-lg relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative z-10">View My Work</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.div>
              </motion.button>
            </Link>
            
            <a href={Resume} download="Atharva-Deshmukh.pdf" className="flex items-center gap-2">
            <motion.button
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#10b981",
                color: "#111827",
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold flex items-center space-x-2 transition-all duration-300 relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-green-400"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                style={{ originX: 0, originY: 0.5 }}
              />
                <Download className="h-5 w-5 relative z-10" />
                <span className="relative z-10">Download CV</span>
            </motion.button>
              </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col items-center"
          >
            <motion.span 
              className="text-gray-400 text-sm mb-2"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Scroll to explore
            </motion.span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              whileHover={{ scale: 1.2, color: "#10b981" }}
            >
              <ChevronDown className="h-6 w-6 text-green-400" />
            </motion.div>
          </motion.div>
        </div>
        
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">What I Bring to the Table</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Combining technical expertise with creative problem-solving to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -10, 
                    scale: 1.02,
                    rotateY: 5
                  }}
                  className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-green-400/50 transition-all duration-300 relative overflow-hidden group"
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />
                  
                  <motion.div 
                    className="bg-green-400/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 relative"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="h-8 w-8 text-green-400" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                    boxShadow: "0 10px 30px rgba(16, 185, 129, 0.2)"
                  }}
                  className="text-center bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-green-400/50 transition-all duration-300 group"
                >
                  <motion.div
                    className="flex justify-center mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="h-8 w-8 text-green-400" />
                  </motion.div>
                  <motion.div 
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-400 mb-2"
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-400 text-sm sm:text-base">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            background: [
              "radial-gradient(circle at 0% 0%, #10b981 0%, transparent 50%)",
              "radial-gradient(circle at 100% 100%, #10b981 0%, transparent 50%)",
              "radial-gradient(circle at 0% 0%, #10b981 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold mb-6"
              whileHover={{ scale: 1.02 }}
            >
              Ready to Start Your Next Project?
            </motion.h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's collaborate and bring your ideas to life with cutting-edge technology and innovative solutions.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 15px 35px rgba(16, 185, 129, 0.3)",
                  y: -3
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-400 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-500 transition-colors duration-300 flex items-center space-x-2 mx-auto relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10">Get In Touch</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.div>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;