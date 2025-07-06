import { motion } from 'framer-motion';
import { User, Heart, Coffee, Code, Award, Target } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const About = () => {
  const values = [
    {
      icon: Code,
      title: "Clean Code",
      description: "I believe in writing code that's not just functional, but also readable and maintainable."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Every project is an opportunity to create something amazing and push the boundaries."
    },
    {
      icon: Target,
      title: "Results",
      description: "Focused on delivering solutions that make a real impact and drive business success."
    }
  ];

  const journey = [
    {
      year: "2020",
      title: "Started Coding Journey",
      description: "Began learning programming with Java and fell in love with problem-solving."
      
    },
    {
      year: "2020",
      title: "First Web Application",
      description: "Built my first full-stack application using React and Node.js."
    },
    {
      year: "2024",
      title: "Professional Developer",
      description: "Joined my first tech company as a junior developer."
    },
    {
    year: "2025",
    title: "Exploring AI & Open Source",
    description: "Started contributing to open source, experimenting with AI/ML projects, and expanding my full-stack skills."
  }
  ];

  return (
    <PageTransition>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                  <span className="flex items-center">
                    <User className="h-12 w-12 text-green-400 mr-4" />
                    About Me
                  </span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  I'm a passionate full-stack developer with over 1.5+ years of experience building 
                  web applications that make a difference. I love turning complex problems into 
                  simple, beautiful solutions.
                </p>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <Coffee className="h-5 w-5 text-green-400" />
                    <span className="text-gray-300">Coffee Enthusiast</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Code className="h-5 w-5 text-green-400" />
                    <span className="text-gray-300">Code Lover</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                  <div className="flex items-center space-x-2 mb-6">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-400 ml-2">about.js</span>
                  </div>
                  <pre className="text-sm font-mono text-gray-300 overflow-x-auto">
{`const developer = {
  name: "Atharva Deshmukh",
  location: "Ch. Sambhajinagar, Maharasthra , India",
  experience: "1.5+ years",
  specialties: [
    "Full Stack Development",
    "React Specialist", 
    "UI/UX Enthusiast",
    "System Architecture", 
    "API Design",
    "Problem Solver"
  ],
  currentlyLearning: [
    "Machine Learning",
    "Gen AI",
  ],
  hobbies: [
    "Open Source",
    "Tech Blogging", 
    "Cricket"
  ],
  funFact: "I debug with console.log() 🐛"
};

export default developer;`}
                  </pre>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Core Values</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                The principles that guide my work and drive my passion for development
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-green-400/50 transition-all duration-300 text-center"
                  >
                    <div className="bg-green-400/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="h-8 w-8 text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                    <p className="text-gray-400">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Journey Timeline */}
   <section className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-1 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Journey</h2>
          <p className="text-gray-400 text-lg">
            From curious beginner to experienced developer
          </p>
        </motion.div>

        {/* Timeline container */}
        <div className="relative">
          {/* Vertical center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-green-400/30"></div>

          {journey.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex w-full mb-12 ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}
            >
              <div className={`bg-gray-800 rounded-xl p-6 border border-gray-700 max-w-md ${
                index % 2 === 0 ? 'mr-[12px]' : 'ml-[12px]'
              }`}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-bold text-green-400">{item.year}</span>
                  <Award className="h-5 w-5 text-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

        {/* Personal Section */}
        <section className="py-20 bg-gray-800/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-8">Beyond the Code</h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
Beyond the daily commits and pull requests, I love exploring how emerging tech shapes our world — from AI-driven tools to intuitive design systems.
Every experiment is a step toward building things that feel both useful and human.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-gray-800/80 rounded-lg p-6 border border-gray-700">
                  <h3 className="font-bold text-green-400 mb-2">Open Source</h3>
                  <p className="text-gray-400 text-sm">Contributing to projects that make a difference</p>
                </div>
                <div className="bg-gray-800/80 rounded-lg p-6 border border-gray-700">
                  <h3 className="font-bold text-green-400 mb-2">AI Experiments</h3>
                  <p className="text-gray-400 text-sm">Exploring machine learning, models, and smart features</p>
                </div>
                <div className="bg-gray-800/80 rounded-lg p-6 border border-gray-700">
                  <h3 className="font-bold text-green-400 mb-2">Learning</h3>
                  <p className="text-gray-400 text-sm">Always exploring new technologies and trends</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default About;