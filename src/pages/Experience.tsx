import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Award, TrendingUp } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const Experience = () => {
const experiences = [
  {
    id: 1,
    title: 'Associate Member of Development Team',
    company: 'Zitics Private Limited',
    location: 'Pune, India',
    period: 'Aug 2024 - Present',
    type: 'Full-time',
    description: 'Designing and developing reusable UI components, integrating APIs, and delivering scalable web applications aligned with business requirements.',
    achievements: [
      'Created and published NPM package libraries for reusable components',
      'Implemented advanced form handling and GraphQL operations',
      'Optimized performance with clean, modular code and Griffel CSS',
      'Delivered high-quality solutions end-to-end, improving efficiency'
    ],
    technologies: ['ReactJS', 'NodeJS', 'GraphQL', 'Microsoft Fluent 2', 'Griffel CSS', 'NPM Packages', 'JavaScript', 'HTML', 'CSS']
  },
  {
    id: 2,
    title: 'React Developer Intern',
    company: 'Zitics Private Limited',
    location: 'Pune, India',
    period: 'Feb 2024 - Jul 2024',
    type: 'Internship',
    description: 'Built reusable UI components, optimized application performance, and gained hands-on experience in React and modern frontend technologies.',
    achievements: [
      'Developed an NPM package to enhance development speed',
      'Maintained clean, maintainable, and scalable codebases',
      'Worked closely with senior developers for code reviews',
      'Used GraphQL and Fluent UI for dynamic, modern interfaces'
    ],
    technologies: ['ReactJS', 'TypeScript', 'JavaScript', 'GraphQL', 'Microsoft Fluent 2', 'Griffel CSS', 'NPM Packages', 'HTML', 'CSS']
  },
  {
    id: 3,
    title: 'React Developer Intern',
    company: 'R3System India Private Limited',
    location: 'Nashik, India',
    period: 'July 2022 – Aug 2022',
    type: 'Internship',
    description: 'Contributed to real-world projects using React and MERN stack, gaining practical industry experience.',
    achievements: [
      'Worked on responsive UI using ReactJS',
      'Practiced clean code and modular architecture',
      'Collaborated on team-based feature development',
      'Gained hands-on exposure to NodeJS, ExpressJS, and MongoDB'
    ],
    technologies: ['ReactJS', 'NodeJS', 'ExpressJS', 'MongoDB', 'HTML', 'CSS', 'JavaScript', 'SQL']
  },
  {
    id: 4,
    title: 'Java Developer Intern',
    company: 'R3System India Private Limited',
    location: 'Nashik, India',
    period: 'Jan 2022 – Feb 2022',
    type: 'Internship',
    description: 'Learned and applied core and advanced Java concepts to build real-world applications and strengthen backend skills.',
    achievements: [
      'Developed web modules using Servlet, JSP, JDBC',
      'Practiced SQL queries and database integration',
      'Improved understanding of MVC and design patterns',
      'Built projects connecting frontend forms to backend logic'
    ],
    technologies: ['Java', 'Advanced Java (JSP, Servlet, JDBC)', 'SQL', 'HTML', 'CSS', 'JavaScript']
  }
];


  const skills = [
    { name: 'Leadership', level: 90 },
    { name: 'Problem Solving', level: 95 },
    { name: 'Communication', level: 88 },
    { name: 'Project Management', level: 85 },
    { name: 'Mentoring', level: 92 },
    { name: 'Code Review', level: 90 }
  ];

const achievements = [
{
  icon: Briefcase,
  title: 'Exploring AI & Emerging Technologies',
  description: 'Continually learning and experimenting with AI APIs and modern frameworks to expand technical horizons and stay ahead in the industry',
  year: '2024'
},
  {
    icon: Award,
    title: 'Performance Optimization',
    description: 'Improved application performance and reduced bundle size using Griffel CSS and modular code',
    year: '2024'
  },
  {
    icon: TrendingUp,
    title: 'Continuous Learning & Upskilling',
    description: 'Completed advanced training in React, GraphQL, and modern frontend architecture to stay ahead of industry trends',
    year: '2024'
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
                <span className="flex items-center justify-center">
                  <Briefcase className="h-12 w-12 text-green-400 mr-4" />
                  Work Experience
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                My professional journey through the world of software development, 
                from junior developer to senior technical leader
              </p>
            </motion.div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="py-20 bg-gray-800/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-green-400/30"></div>
              
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center mb-16 ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <motion.div 
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-green-400/50 transition-all duration-300 max-w-lg ${
                      index % 2 === 0 ? 'mr-8' : 'ml-8'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 text-sm rounded-full ${
                        experience.type === 'Full-time' 
                          ? 'bg-green-400/20 text-green-400' 
                          : 'bg-blue-400/20 text-blue-400'
                      }`}>
                        {experience.type}
                      </span>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {experience.period}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2">{experience.title}</h3>
                    <div className="flex items-center text-green-400 mb-2">
                      <span className="font-medium">{experience.company}</span>
                    </div>
                    <div className="flex items-center text-gray-400 mb-4">
                      <MapPin className="h-4 w-4 mr-1" />
                      {experience.location}
                    </div>
                    
                    <p className="text-gray-300 mb-6">{experience.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-white mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-gray-300 text-sm flex items-start">
                            <span className="text-green-400 mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-white mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
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
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-400 rounded-full border-4 border-gray-900 shadow-lg"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills & Achievements */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Professional Skills */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-8">Professional Skills</h2>
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-lg font-medium">{skill.name}</span>
                        <span className="text-sm text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="h-2 rounded-full bg-green-400"
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Key Achievements */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-8">Key Achievements</h2>
                <div className="space-y-6">
                  {achievements.map((achievement, index) => {
                    const Icon = achievement.icon;
                    return (
                      <motion.div
                        key={index}
                        whileHover={{ x: 10 }}
                        className="flex items-start space-x-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-green-400/50 transition-all duration-300"
                      >
                        <div className="bg-green-400/10 p-3 rounded-lg">
                          <Icon className="h-6 w-6 text-green-400" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-bold text-white">{achievement.title}</h3>
                            <span className="text-sm text-gray-400">{achievement.year}</span>
                          </div>
                          <p className="text-gray-300 text-sm">{achievement.description}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Career Stats */}
        <section className="py-20 bg-gray-800/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-12">Career Highlights</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-gray-800/80 rounded-lg p-6 border border-gray-700">
                  <div className="text-3xl font-bold text-green-400 mb-2">1.5+</div>
                  <div className="text-gray-400 text-sm">Years Experience</div>
                </div>
                <div className="bg-gray-800/80 rounded-lg p-6 border border-gray-700">
                  <div className="text-3xl font-bold text-green-400 mb-2">15+</div>
                  <div className="text-gray-400 text-sm">Projects Delivered</div>
                </div>
                <div className="bg-gray-800/80 rounded-lg p-6 border border-gray-700">
                  <div className="text-3xl font-bold text-green-400 mb-2">∞</div>
                  <div className="text-gray-400 text-sm">Continuous Growth</div>
                </div>
              <div className="bg-gray-800/80 rounded-lg p-6 border border-gray-700">
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-400 text-sm">Always Exploring</div>
              </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Experience;