import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Globe, Server, Smartphone, Palette } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const categories = [
    { id: 'frontend', label: 'Frontend', icon: Globe },
    { id: 'backend', label: 'Backend', icon: Server },
    { id: 'database', label: 'Database', icon: Database },
    { id: 'mobile', label: 'Mobile', icon: Smartphone },
    { id: 'design', label: 'Design', icon: Palette },
    { id: 'tools', label: 'Tools', icon: Code2 }
  ];

  const skillsData = {
    frontend: [
  { name: 'React', level: 95, color: '#61dafb', description: 'Advanced component architecture and state management' },
   { name: 'JavaScript', level: 93, color: '#f7df1e', description: 'Core language skills, ES6+, functional & asynchronous patterns' },
  { name: 'TypeScript', level: 90, color: '#3178c6', description: 'Type-safe React apps and reusable patterns' },
  { name: 'Tailwind CSS', level: 92, color: '#06b6d4', description: 'Utility-first styling and rapid prototyping' },
  { name: 'Framer Motion', level: 87, color: '#0055ff', description: 'Smooth animations and micro-interactions' },
  { name: 'Redux Toolkit', level: 88, color: '#764abc', description: 'Modern state management and slices' },
  { name: 'React Testing Library', level: 83, color: '#e33332', description: 'Component testing with focus on user behavior' },
   { name: 'Thunk API', level: 86, color: '#593d88', description: 'Handling async logic, side effects, and API integration in Redux' },
  { name: 'Storybook', level: 82, color: '#ff4785', description: 'Isolated component development and documentation' },
  { name: 'Jest & RTL', level: 82, color: '#99425b', description: 'Unit testing, mocking, and test-driven development' },
  { name: 'Vite', level: 84, color: '#646cff', description: 'Next-gen frontend tooling and fast HMR' },
  { name: 'GraphQL (Frontend)', level: 86, color: '#e535ab', description: 'Apollo Client integration and cache management' },
  { name: 'CSS Modules / Sass', level: 84, color: '#cd6799', description: 'Scoped styling and maintainable CSS architecture' },
  { name: 'Fluent UI', level: 89, color: '#0078d4', description: 'Microsoft design system for building accessible, consistent UIs' },

    ],
    backend: [
      { name: 'Node.js', level: 90, color: '#339933', description: 'RESTful APIs and microservices architecture' },
      { name: 'Python', level: 88, color: '#3776ab', description: 'Django, Flask, and data processing' },
      { name: 'Express.js', level: 92, color: '#000000', description: 'Middleware, routing, and API development' },
      { name: 'GraphQL', level: 82, color: '#e10098', description: 'Schema design and query optimization' },
      { name: 'Docker', level: 85, color: '#2496ed', description: 'Containerization and orchestration' },
      { name: 'AWS', level: 80, color: '#ff9900', description: 'Cloud services and serverless architecture' }
    ],
    database: [
      { name: 'PostgreSQL', level: 88, color: '#336791', description: 'Complex queries and database optimization' },
      { name: 'MongoDB', level: 85, color: '#47a248', description: 'Document-based data modeling' },
      { name: 'Redis', level: 82, color: '#dc382d', description: 'Caching and session management' },
      { name: 'MySQL', level: 80, color: '#4479a1', description: 'Relational database design and optimization' },
      { name: 'Supabase', level: 87, color: '#3ecf8e', description: 'Real-time databases and authentication' },
      { name: 'Firebase', level: 83, color: '#ffca28', description: 'Real-time data and cloud functions' }
    ],
    mobile: [
      { name: 'React Native', level: 85, color: '#61dafb', description: 'Cross-platform mobile development' },
      { name: 'Flutter', level: 78, color: '#02569b', description: 'Native performance mobile apps' },
    ],
    design: [
      { name: 'Figma', level: 85, color: '#f24e1e', description: 'UI/UX design and prototyping' },
      { name: 'Adobe XD', level: 80, color: '#ff61f6', description: 'Design systems and wireframing' },
      { name: 'Sketch', level: 75, color: '#f7b500', description: 'Interface design and collaboration' },
      { name: 'Photoshop', level: 82, color: '#31a8ff', description: 'Image editing and digital art' }
    ],
    tools: [
{ name: 'Git', level: 92, color: '#f05032', description: 'Version control and collaboration' },
  { name: 'Bitbucket', level: 88, color: '#0052cc', description: 'Code hosting, pull requests, and CI/CD pipelines' },
  { name: 'Jira', level: 90, color: '#0052cc', description: 'Agile boards, issue tracking, and sprint planning' },
  { name: 'VS Code', level: 95, color: '#007acc', description: 'Advanced IDE customization and extensions' },
  { name: 'Webpack', level: 83, color: '#8dd6f9', description: 'Module bundling and optimization' },
  { name: 'Jest', level: 87, color: '#c21325', description: 'Unit testing and test-driven development' },
  { name: 'Cypress', level: 85, color: '#17202c', description: 'End-to-end testing automation' },
  { name: 'Postman', level: 90, color: '#ff6c37', description: 'API testing and documentation' }

    ]
  };

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
                <span className="flex items-center justify-center">
                  <Code2 className="h-12 w-12 text-green-400 mr-4" />
                  Technical Skills
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                A comprehensive overview of my technical expertise across different domains of software development
              </p>
            </motion.div>
          </div>
        </section>

        {/* Skills Categories */}
        <section className="py-20 bg-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Tabs */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <motion.button
                    key={category.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'bg-green-400 text-gray-900'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-green-400'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{category.label}</span>
                  </motion.button>
                );
              })}
            </motion.div>

            {/* Skills Grid */}
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {skillsData[activeCategory as keyof typeof skillsData].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-green-400/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-white">{skill.name}</h3>
                    <span className="text-sm text-gray-400 font-mono">{skill.level}%</span>
                  </div>
                  
                  <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-2 rounded-full"
                      style={{ backgroundColor: skill.color }}
                    />
                  </div>
                  
                  <p className="text-gray-400 text-sm">{skill.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Skills Summary */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-8">Continuous Learning</h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Technology evolves rapidly, and so do I. I'm constantly learning new frameworks, 
                tools, and best practices to stay at the forefront of web development. 
                My commitment to growth ensures that I can tackle any challenge with the latest and most effective solutions.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gray-800/80 rounded-lg p-6 border border-gray-700">
                  <div className="text-2xl font-bold text-green-400 mb-2">5+</div>
                  <div className="text-gray-400 text-sm">Technologies Mastered</div>
                </div>
                <div className="bg-gray-800/80 rounded-lg p-6 border border-gray-700">
                  <div className="text-2xl font-bold text-green-400 mb-2">1.5+</div>
                  <div className="text-gray-400 text-sm">Years Experience</div>
                </div>
                <div className="bg-gray-800/80 rounded-lg p-6 border border-gray-700">
                  <div className="text-2xl font-bold text-green-400 mb-2">15+</div>
                  <div className="text-gray-400 text-sm">Projects Completed</div>
                </div>
                <div className="bg-gray-800/80 rounded-lg p-6 border border-gray-700">
                  <div className="text-2xl font-bold text-green-400 mb-2">24/7</div>
                  <div className="text-gray-400 text-sm">Learning Mode</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Skills;