// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { ExternalLink, Github, Filter, Search } from 'lucide-react';
// import PageTransition from '../components/PageTransition';

// const Projects = () => {
//   const [activeFilter, setActiveFilter] = useState('all');
//   const [searchTerm, setSearchTerm] = useState('');

//   const filters = [
//     { id: 'all', label: 'All Projects' },
//     { id: 'web', label: 'Web Apps' },
//     { id: 'mobile', label: 'Mobile' },
//     { id: 'api', label: 'APIs' },
//     { id: 'opensource', label: 'Open Source' }
//   ];

//   const projects = [
//     {
//       id: 1,
//       title: 'E-Commerce Platform',
//       description: 'Full-stack e-commerce application with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, inventory management, and admin dashboard.',
//       longDescription: 'A comprehensive e-commerce solution built with modern technologies. Includes features like real-time inventory tracking, secure payment processing with Stripe, advanced search and filtering, user reviews and ratings, and a powerful admin dashboard for managing products and orders.',
//       tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis', 'Docker'],
//       category: 'web',
//       github: '#',
//       live: '#',
//       image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
//       featured: true,
//       status: 'completed'
//     },
//     {
//       id: 2,
//       title: 'Task Management App',
//       description: 'Real-time collaborative task management with WebSocket integration. Built with React, Socket.io, and MongoDB for seamless team collaboration.',
//       longDescription: 'A powerful project management tool that enables teams to collaborate in real-time. Features include drag-and-drop task boards, real-time notifications, file attachments, time tracking, and detailed project analytics.',
//       tech: ['React', 'Socket.io', 'MongoDB', 'Express', 'JWT', 'Cloudinary'],
//       category: 'web',
//       github: '#',
//       live: '#',
//       image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600',
//       featured: true,
//       status: 'completed'
//     },
//     {
//       id: 3,
//       title: 'Analytics Dashboard',
//       description: 'Data visualization dashboard with interactive charts and real-time updates. Built with React, D3.js, Python, and FastAPI for comprehensive data analysis.',
//       longDescription: 'An advanced analytics platform that transforms complex data into actionable insights. Features interactive charts, real-time data streaming, custom report generation, and machine learning-powered predictions.',
//       tech: ['React', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL', 'WebSockets'],
//       category: 'web',
//       github: '#',
//       live: '#',
//       image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
//       featured: true,
//       status: 'completed'
//     },
//     {
//       id: 4,
//       title: 'Mobile Fitness App',
//       description: 'Cross-platform fitness tracking app built with React Native. Features workout plans, progress tracking, and social sharing capabilities.',
//       longDescription: 'A comprehensive fitness companion that helps users achieve their health goals. Includes personalized workout plans, nutrition tracking, progress photos, social challenges, and integration with wearable devices.',
//       tech: ['React Native', 'Expo', 'Firebase', 'Redux', 'Stripe'],
//       category: 'mobile',
//       github: '#',
//       live: '#',
//       image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=600',
//       featured: false,
//       status: 'completed'
//     },
//     {
//       id: 5,
//       title: 'RESTful API Gateway',
//       description: 'Scalable API gateway built with Node.js and Express. Handles authentication, rate limiting, and request routing for microservices architecture.',
//       longDescription: 'A robust API gateway solution that serves as the entry point for microservices. Features include JWT authentication, rate limiting, request/response transformation, logging, monitoring, and automatic failover.',
//       tech: ['Node.js', 'Express', 'Redis', 'JWT', 'Docker', 'Nginx'],
//       category: 'api',
//       github: '#',
//       live: '#',
//       image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600',
//       featured: false,
//       status: 'completed'
//     },
//     {
//       id: 6,
//       title: 'Open Source UI Library',
//       description: 'React component library with TypeScript support. Includes 50+ customizable components with comprehensive documentation and Storybook integration.',
//       longDescription: 'A modern React component library designed for rapid application development. Features include TypeScript support, theme customization, accessibility compliance, comprehensive testing, and detailed documentation.',
//       tech: ['React', 'TypeScript', 'Storybook', 'Jest', 'Rollup', 'CSS-in-JS'],
//       category: 'opensource',
//       github: '#',
//       live: '#',
//       image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600',
//       featured: false,
//       status: 'ongoing'
//     },
//     {
//       id: 7,
//       title: 'AI Chat Application',
//       description: 'Intelligent chat application with AI-powered responses. Built with React, Node.js, and integrated with OpenAI API for natural language processing.',
//       longDescription: 'An advanced chat application that leverages artificial intelligence to provide intelligent responses. Features include context-aware conversations, multi-language support, file sharing, and custom AI model training.',
//       tech: ['React', 'Node.js', 'OpenAI API', 'Socket.io', 'MongoDB', 'Docker'],
//       category: 'web',
//       github: '#',
//       live: '#',
//       image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
//       featured: true,
//       status: 'ongoing'
//     },
//     {
//       id: 8,
//       title: 'Blockchain Voting System',
//       description: 'Secure voting platform built on blockchain technology. Ensures transparency, immutability, and voter privacy using smart contracts.',
//       longDescription: 'A revolutionary voting system that leverages blockchain technology to ensure election integrity. Features include voter verification, anonymous voting, real-time results, audit trails, and smart contract automation.',
//       tech: ['Solidity', 'Web3.js', 'React', 'Ethereum', 'IPFS', 'MetaMask'],
//       category: 'web',
//       github: '#',
//       live: '#',
//       image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=600',
//       featured: false,
//       status: 'completed'
//     }
//   ];

//   const filteredProjects = projects.filter(project => {
//     const matchesFilter = activeFilter === 'all' || project.category === activeFilter;
//     const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
//     return matchesFilter && matchesSearch;
//   });

//   const featuredProjects = projects.filter(project => project.featured);

//   return (
//     <PageTransition>
//       <div className="pt-20">
//         {/* Hero Section */}
//         <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//             <motion.div
//               initial={{ y: 50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.8 }}
//             >
//               <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
//                 My Projects
//               </h1>
//               <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
//                 A showcase of my work spanning web applications, mobile apps, APIs, and open-source contributions
//               </p>
//             </motion.div>
//           </div>
//         </section>

//         {/* Featured Projects */}
//         <section className="py-20 bg-gray-800/50">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <motion.div
//               initial={{ y: 30, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.8 }}
//               className="text-center mb-12"
//             >
//               <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
//               <p className="text-gray-400 text-lg">Highlighting some of my most impactful work</p>
//             </motion.div>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//               {featuredProjects.slice(0, 4).map((project, index) => (
//                 <motion.div
//                   key={project.id}
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.8, delay: index * 0.2 }}
//                   whileHover={{ y: -10, scale: 1.02 }}
//                   className="bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-green-400/50 transition-all duration-300"
//                 >
//                   <div className="h-48 overflow-hidden">
//                     <img 
//                       src={project.image} 
//                       alt={project.title}
//                       className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
//                     />
//                   </div>
//                   <div className="p-6">
//                     <div className="flex items-center justify-between mb-3">
//                       <h3 className="text-xl font-bold">{project.title}</h3>
//                       <span className={`px-2 py-1 text-xs rounded-full ${
//                         project.status === 'completed' 
//                           ? 'bg-green-400/20 text-green-400' 
//                           : 'bg-yellow-400/20 text-yellow-400'
//                       }`}>
//                         {project.status}
//                       </span>
//                     </div>
//                     <p className="text-gray-300 mb-4 line-clamp-3">{project.longDescription}</p>
//                     <div className="flex flex-wrap gap-2 mb-4">
//                       {project.tech.slice(0, 4).map((tech, techIndex) => (
//                         <span 
//                           key={techIndex}
//                           className="px-2 py-1 bg-gray-700 text-xs rounded text-gray-300"
//                         >
//                           {tech}
//                         </span>
//                       ))}
//                       {project.tech.length > 4 && (
//                         <span className="px-2 py-1 bg-gray-700 text-xs rounded text-gray-400">
//                           +{project.tech.length - 4} more
//                         </span>
//                       )}
//                     </div>
//                     <div className="flex space-x-4">
//                       <motion.a 
//                         href={project.github}
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         className="flex items-center text-gray-300 hover:text-green-400 transition-colors"
//                       >
//                         <Github className="h-4 w-4 mr-1" />
//                         Code
//                       </motion.a>
//                       <motion.a 
//                         href={project.live}
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         className="flex items-center text-gray-300 hover:text-green-400 transition-colors"
//                       >
//                         <ExternalLink className="h-4 w-4 mr-1" />
//                         Live Demo
//                       </motion.a>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* All Projects */}
//         <section className="py-20 bg-gray-900">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <motion.div
//               initial={{ y: 30, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="text-center mb-12"
//             >
//               <h2 className="text-3xl sm:text-4xl font-bold mb-4">All Projects</h2>
//               <p className="text-gray-400 text-lg">Explore my complete portfolio</p>
//             </motion.div>

//             {/* Search and Filter */}
//             <motion.div
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.8 }}
//               className="flex flex-col sm:flex-row gap-4 mb-12"
//             >
//               {/* Search */}
//               <div className="relative flex-1">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//                 <input
//                   type="text"
//                   placeholder="Search projects..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-white"
//                 />
//               </div>

//               {/* Filters */}
//               <div className="flex flex-wrap gap-2">
//                 {filters.map((filter) => (
//                   <motion.button
//                     key={filter.id}
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={() => setActiveFilter(filter.id)}
//                     className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
//                       activeFilter === filter.id
//                         ? 'bg-green-400 text-gray-900'
//                         : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-green-400'
//                     }`}
//                   >
//                     {filter.label}
//                   </motion.button>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Projects Grid */}
//             <motion.div
//               layout
//               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//             >
//               {filteredProjects.map((project, index) => (
//                 <motion.div
//                   key={project.id}
//                   layout
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 0.9 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   whileHover={{ y: -10, scale: 1.02 }}
//                   className="bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-green-400/50 transition-all duration-300"
//                 >
//                   <div className="h-48 overflow-hidden">
//                     <img 
//                       src={project.image} 
//                       alt={project.title}
//                       className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
//                     />
//                   </div>
//                   <div className="p-6">
//                     <div className="flex items-center justify-between mb-3">
//                       <h3 className="text-xl font-bold">{project.title}</h3>
//                       <span className={`px-2 py-1 text-xs rounded-full ${
//                         project.status === 'completed' 
//                           ? 'bg-green-400/20 text-green-400' 
//                           : 'bg-yellow-400/20 text-yellow-400'
//                       }`}>
//                         {project.status}
//                       </span>
//                     </div>
//                     <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
//                     <div className="flex flex-wrap gap-2 mb-4">
//                       {project.tech.slice(0, 3).map((tech, techIndex) => (
//                         <span 
//                           key={techIndex}
//                           className="px-2 py-1 bg-gray-700 text-xs rounded text-gray-300"
//                         >
//                           {tech}
//                         </span>
//                       ))}
//                       {project.tech.length > 3 && (
//                         <span className="px-2 py-1 bg-gray-700 text-xs rounded text-gray-400">
//                           +{project.tech.length - 3}
//                         </span>
//                       )}
//                     </div>
//                     <div className="flex space-x-4">
//                       <motion.a 
//                         href={project.github}
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         className="flex items-center text-gray-300 hover:text-green-400 transition-colors text-sm"
//                       >
//                         <Github className="h-4 w-4 mr-1" />
//                         Code
//                       </motion.a>
//                       <motion.a 
//                         href={project.live}
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         className="flex items-center text-gray-300 hover:text-green-400 transition-colors text-sm"
//                       >
//                         <ExternalLink className="h-4 w-4 mr-1" />
//                         Demo
//                       </motion.a>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>

//             {filteredProjects.length === 0 && (
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 className="text-center py-12"
//               >
//                 <p className="text-gray-400 text-lg">No projects found matching your criteria.</p>
//               </motion.div>
//             )}
//           </div>
//         </section>
//       </div>
//     </PageTransition>
//   );
// };

// export default Projects;



import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const Projects = () => {
  return (
    <PageTransition>
      <div className="pt-20 min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
            My Projects
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            To view my projects, visit my GitHub profile
          </p>
          <motion.a
            href="https://github.com/Atha-rva"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 bg-gray-800 text-gray-300 rounded-lg border border-gray-700 hover:border-green-400/50 transition-colors duration-300 hover:text-green-400"
          >
            <Github className="h-6 w-6 mr-2" />
            Visit GitHub
          </motion.a>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Projects;
