import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal, 
  Menu, 
  X, 
  Code2,
  User,
  Briefcase,
  MessageCircle,
  BookOpen,
  Settings,
  Monitor,
  CornerDownRight,
  CornerDownLeft,
  CornerUpLeft
} from 'lucide-react';

interface HeaderProps {
  onTerminalToggle: () => void;
  terminalPosition: 'left' | 'right' | 'bottom';
  onTerminalPositionChange: (position: 'left' | 'right' | 'bottom') => void;
}

const Header: React.FC<HeaderProps> = ({ onTerminalToggle, terminalPosition, onTerminalPositionChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home', icon: Terminal },
    { path: '/about', label: 'About', icon: User },
    { path: '/skills', label: 'Skills', icon: Code2 },
    { path: '/projects', label: 'Projects', icon: Settings },
    { path: '/experience', label: 'Experience', icon: Briefcase },
    { path: '/services', label: 'Services', icon: BookOpen },
    { path: '/blog', label: 'Documentation', icon: BookOpen },
    { path: '/contact', label: 'Contact', icon: MessageCircle },
  ];



  const terminalPositions = [
    { id: 'left' as const, icon: CornerDownLeft, label: 'Left' },
    { id: 'right' as const, icon: CornerDownRight, label: 'Right' },
    { id: 'bottom' as const, icon: CornerUpLeft, label: 'Bottom' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-gray-900/95 backdrop-blur-md border-b border-green-400/20 shadow-lg shadow-green-400/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-3"
          >
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Terminal className="h-8 w-8 lg:h-10 lg:w-10 text-green-400 group-hover:text-green-300 transition-colors" />
                <motion.div
                  className="absolute inset-0 bg-green-400/20 rounded-full blur-md"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
              <div className="hidden sm:block">
                <motion.span 
                  className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                >
                  Atharva
                </motion.span>
                <motion.div 
                  className="text-xs text-gray-400 font-mono"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  v2.0.1
                </motion.div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <motion.div
                  key={item.path}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  onHoverStart={() => setHoveredItem(item.path)}
                  onHoverEnd={() => setHoveredItem(null)}
                >
                  <Link
                    to={item.path}
                    className={`relative px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-300 group ${
                      isActive 
                        ? 'text-green-400 bg-green-400/10' 
                        : 'text-gray-300 hover:text-green-400 hover:bg-gray-800/50'
                    }`}
                  >
                    <motion.div
                      animate={{ 
                        rotate: hoveredItem === item.path ? 360 : 0,
                        scale: hoveredItem === item.path ? 1.1 : 1
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="h-4 w-4" />
                    </motion.div>
                    <span className="font-medium">{item.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-green-400/10 rounded-lg border border-green-400/20"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <motion.div
                      className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-green-400"
                      animate={{ 
                        width: hoveredItem === item.path ? '80%' : '0%',
                        x: hoveredItem === item.path ? '-40%' : '-50%'
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          {/* Terminal Controls & Social Links */}
          <div className="flex items-center space-x-4">
            {/* Terminal Position Selector */}
            <div className="hidden md:flex items-center space-x-1 bg-gray-800/50 rounded-lg p-1">
              {terminalPositions.map((pos) => {
                const Icon = pos.icon;
                return (
                  <motion.button
                    key={pos.id}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => onTerminalPositionChange(pos.id)}
                    className={`p-2 rounded transition-colors ${
                      terminalPosition === pos.id
                        ? 'bg-green-400 text-gray-900'
                        : 'text-gray-400 hover:text-green-400'
                    }`}
                    title={`Terminal ${pos.label}`}
                  >
                    <Icon className="h-4 w-4" />
                  </motion.button>
                );
              })}
           
            </div>

            {/* Terminal Toggle */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={onTerminalToggle}
              className="p-2 text-gray-300 hover:text-green-400 transition-colors rounded-lg hover:bg-gray-800/50 relative group"
              title="Toggle Terminal"
            >
              <Monitor className="h-5 w-5" />
              <motion.div
                className="absolute inset-0 bg-green-400/20 rounded-lg"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
            </motion.button>

            

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-green-400 transition-colors rounded-lg hover:bg-gray-800/50"
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gray-900/98 backdrop-blur-md border-t border-green-400/20"
          >
            <div className="max-w-7xl mx-auto px-4 py-6">
              <nav className="space-y-2">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;
                  
                  return (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                          isActive 
                            ? 'text-green-400 bg-green-400/10 border border-green-400/20' 
                            : 'text-gray-300 hover:text-green-400 hover:bg-gray-800/50'
                        }`}
                      >
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Icon className="h-5 w-5" />
                        </motion.div>
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Mobile Terminal Controls */}
              <div className="mt-6 pt-6 border-t border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-400">Terminal Position</span>
                  <div className="flex space-x-2">
                    {terminalPositions.map((pos) => {
                      const Icon = pos.icon;
                      return (
                        <motion.button
                          key={pos.id}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => onTerminalPositionChange(pos.id)}
                          className={`p-2 rounded transition-colors ${
                            terminalPosition === pos.id
                              ? 'bg-green-400 text-gray-900'
                              : 'bg-gray-800 text-gray-400 hover:text-green-400'
                          }`}
                        >
                          <Icon className="h-4 w-4" />
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onTerminalToggle}
                  className="w-full bg-green-400 text-gray-900 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2"
                >
                  <Monitor className="h-5 w-5" />
                  <span>Toggle Terminal</span>
                </motion.button>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;