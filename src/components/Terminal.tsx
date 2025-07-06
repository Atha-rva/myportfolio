import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal as TerminalIcon, 
  X, 
  ChevronRight,
  RotateCcw
} from 'lucide-react';

interface TerminalProps {
  isOpen: boolean;
  onToggle: () => void;
  position: 'left' | 'right' | 'bottom';
}

const Terminal: React.FC<TerminalProps> = ({ isOpen, onToggle, position }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<Array<{type: 'command' | 'output' | 'error', content: string}>>([
    { type: 'output', content: 'Welcome to DevPortfolio Terminal v2.0.1' },
    { type: 'output', content: 'Type "help" for available commands' },
    { type: 'output', content: '─'.repeat(50) }
  ]);
  const [currentPath] = useState('~/portfolio');
  const [isMinimized, setIsMinimized] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands = {
    help: () => [
      'Available commands:',
      '  help          - Show this help message',
      '  about         - Display information about me',
      '  skills        - List my technical skills',
      '  projects      - Show recent projects',
      '  contact       - Get my contact information',
      '  experience    - Display work experience',
      '  clear         - Clear terminal',
      '  ls            - List directory contents',
      '  cat <file>    - Display file contents',
      '  whoami        - Display current user',
      '  date          - Show current date',
      '  pwd           - Print working directory',
      '  tree          - Show directory structure',
      '  status        - Show system status',
      '  joke          - Tell a programming joke'
    ],
    about: () => [
      'John Doe - Full Stack Developer',
      '─'.repeat(30),
      'Passionate developer with 5+ years of experience',
      'Specializing in React, Node.js, and modern web technologies',
      'Location: San Francisco, CA',
      'Email: john.doe@email.com'
    ],
    skills: () => [
      'Technical Skills:',
      '─'.repeat(20),
      '🚀 Frontend: React, TypeScript, Next.js, Vue.js',
      '⚡ Backend: Node.js, Python, Express.js, GraphQL',
      '💾 Database: PostgreSQL, MongoDB, Redis',
      '☁️  Cloud: AWS, Docker, Kubernetes',
      '🎨 Design: Figma, Tailwind CSS, Framer Motion'
    ],
    projects: () => [
      'Recent Projects:',
      '─'.repeat(20),
      '1. E-Commerce Platform - React, Node.js, PostgreSQL',
      '2. Task Management App - React, Socket.io, MongoDB',
      '3. Analytics Dashboard - React, D3.js, Python',
      '4. Mobile Fitness App - React Native, Firebase',
      '5. AI Chat Application - React, OpenAI API'
    ],
    contact: () => [
      'Contact Information:',
      '─'.repeat(25),
      '📧 Email: john.doe@email.com',
      '📱 Phone: +1 (555) 123-4567',
      '🌐 Website: https://johndoe.dev',
      '💼 LinkedIn: linkedin.com/in/johndoe',
      '🐙 GitHub: github.com/johndoe'
    ],
    experience: () => [
      'Work Experience:',
      '─'.repeat(20),
      '2022-Present: Senior Full Stack Developer @ Tech Solutions Inc.',
      '2020-2022: Frontend Developer @ Digital Agency Co.',
      '2019-2020: Junior Developer @ StartUp Ventures',
      '2018-2019: Freelance Web Developer'
    ],
    ls: () => [
      'portfolio/',
      '├── src/',
      '├── components/',
      '├── pages/',
      '├── assets/',
      '├── package.json',
      '├── README.md',
      '└── vite.config.ts'
    ],
    whoami: () => ['john-doe'],
    date: () => [new Date().toString()],
    pwd: () => [currentPath],
    tree: () => [
      'portfolio/',
      '├── src/',
      '│   ├── components/',
      '│   │   ├── Header.tsx',
      '│   │   ├── Terminal.tsx',
      '│   │   └── PageTransition.tsx',
      '│   ├── pages/',
      '│   │   ├── Home.tsx',
      '│   │   ├── About.tsx',
      '│   │   ├── Skills.tsx',
      '│   │   ├── Projects.tsx',
      '│   │   ├── Experience.tsx',
      '│   │   ├── Services.tsx',
      '│   │   ├── Blog.tsx',
      '│   │   └── Contact.tsx',
      '│   └── App.tsx',
      '├── public/',
      '└── package.json'
    ],
    status: () => [
      'System Status:',
      '─'.repeat(15),
      '🟢 Portfolio: Online',
      '🟢 API: Connected',
      '🟢 Database: Active',
      '⚡ Performance: Excellent',
      '🔒 Security: Secured',
      `💾 Memory: ${Math.floor(Math.random() * 40 + 60)}% used`,
      `🔋 CPU: ${Math.floor(Math.random() * 30 + 10)}% load`
    ],
    joke: () => [
      'Why do programmers prefer dark mode?',
      '',
      'Because light attracts bugs! 🐛',
      '',
      '😄 *ba dum tss*'
    ],
    clear: () => {
      setHistory([]);
      return [];
    }
  };

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const [command, ...args] = trimmedCmd.split(' ');
    
    setHistory(prev => [...prev, { type: 'command', content: `${currentPath} $ ${cmd}` }]);
    
    if (command === 'clear') {
      commands.clear();
      return;
    }
    
    if (command === 'cat' && args[0]) {
      const fileContents = {
        'package.json': [
          '{',
          '  "name": "portfolio",',
          '  "version": "2.0.1",',
          '  "type": "module",',
          '  "scripts": {',
          '    "dev": "vite",',
          '    "build": "vite build"',
          '  },',
          '  "dependencies": {',
          '    "react": "^18.3.1",',
          '    "framer-motion": "^12.23.0"',
          '  }',
          '}'
        ],
        'readme.md': [
          '# John Doe Portfolio',
          '',
          'A modern, interactive portfolio built with React and TypeScript.',
          '',
          '## Features',
          '- Multi-page architecture',
          '- Framer Motion animations',
          '- Interactive terminal',
          '- Responsive design'
        ]
      };
      
      const output = fileContents[args[0] as keyof typeof fileContents] || [`cat: ${args[0]}: No such file or directory`];
      setHistory(prev => [...prev, ...output.map(line => ({ type: 'output' as const, content: line }))]);
    } else if (commands[command as keyof typeof commands]) {
      const output = commands[command as keyof typeof commands]();
      setHistory(prev => [...prev, ...output.map(line => ({ type: 'output' as const, content: line }))]);
    } else if (trimmedCmd) {
      setHistory(prev => [...prev, { type: 'error', content: `Command not found: ${command}. Type "help" for available commands.` }]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setIsTyping(true);
      setTimeout(() => {
        handleCommand(input);
        setInput('');
        setIsTyping(false);
      }, 300);
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isMinimized]);

  const getPositionClasses = () => {
    switch (position) {
      case 'left':
        return 'left-0 top-20 h-[calc(100vh-5rem)] w-80';
      case 'right':
        return 'right-0 top-20 h-[calc(100vh-5rem)] w-80';
      case 'bottom':
        return 'bottom-0 left-0 right-0 h-80';
      default:
        return 'right-0 top-20 h-[calc(100vh-5rem)] w-80';
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ 
            opacity: 0,
            x: position === 'left' ? -320 : position === 'right' ? 320 : 0,
            y: position === 'bottom' ? 320 : 0
          }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ 
            opacity: 0,
            x: position === 'left' ? -320 : position === 'right' ? 320 : 0,
            y: position === 'bottom' ? 320 : 0
          }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className={`fixed ${getPositionClasses()} bg-gray-900/95 backdrop-blur-md border border-gray-700 shadow-2xl z-40 flex flex-col`}
        >
          {/* Terminal Header */}
          <motion.div 
            className="flex items-center justify-between p-3 border-b border-gray-700 bg-gray-800/80"
            whileHover={{ backgroundColor: "rgba(31, 41, 55, 0.9)" }}
          >
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                <motion.div 
                  className="w-3 h-3 bg-red-500 rounded-full cursor-pointer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onToggle}
                />
                <motion.div 
                  className="w-3 h-3 bg-yellow-500 rounded-full cursor-pointer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsMinimized(!isMinimized)}
                />
                <motion.div 
                  className="w-3 h-3 bg-green-500 rounded-full cursor-pointer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              </div>
              <TerminalIcon className="h-4 w-4 text-green-400" />
              <span className="text-sm text-gray-300 font-mono">Terminal</span>
            </div>
            <div className="flex items-center space-x-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setHistory([])}
                className="p-1 text-gray-400 hover:text-green-400 transition-colors"
              >
                <RotateCcw className="h-4 w-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onToggle}
                className="p-1 text-gray-400 hover:text-red-400 transition-colors"
              >
                <X className="h-4 w-4" />
              </motion.button>
            </div>
          </motion.div>

          {/* Terminal Content */}
          <AnimatePresence>
            {!isMinimized && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="flex-1 flex flex-col"
              >
                {/* Terminal Output */}
                <div 
                  ref={terminalRef}
                  className="flex-1 p-4 overflow-y-auto font-mono text-sm space-y-1 bg-gray-900/50"
                >
                  <AnimatePresence>
                    {history.map((line, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.02 }}
                        className={`${
                          line.type === 'command' 
                            ? 'text-green-400' 
                            : line.type === 'error' 
                            ? 'text-red-400' 
                            : 'text-gray-300'
                        }`}
                      >
                        {line.content}
                      </motion.div>
                    ))}
                  </AnimatePresence>
                  
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center text-gray-400"
                    >
                      <span>Processing</span>
                      <motion.span
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        ...
                      </motion.span>
                    </motion.div>
                  )}
                </div>

                {/* Terminal Input */}
                <form onSubmit={handleSubmit} className="p-4 border-t border-gray-700 bg-gray-800/50">
                  <div className="flex items-center space-x-2 font-mono text-sm">
                    <span className="text-green-400">{currentPath}</span>
                    <ChevronRight className="h-4 w-4 text-green-400" />
                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      className="flex-1 bg-transparent text-white outline-none"
                      placeholder="Type a command..."
                      autoComplete="off"
                    />
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Terminal;