import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import Terminal from './components/Terminal';
import FloatingElements from './components/FloatingElements';
import NeonCursor from './components/NeonCursor';
import EnhancedCursorTrail from './components/EnhancedCursorTrail';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Services from './pages/Services';
import styles from './EscapeRoom404.module.css'; // CSS module for the escape room

// Escape Room 404 Component
const EscapeRoom404 = () => {
  const [showKeyInput, setShowKeyInput] = useState(false);
  const [userInput, setUserInput] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Console clues
    console.log('%c🔑 Find the hidden key to escape!', 'color: lime; font-size: 16px;');
    console.log('%c💡 Hint: Check localStorage or network requests.', 'color: yellow;');

    // Store the key in localStorage
    localStorage.setItem('escapeKey', 'dev2024');

    // Fake API endpoint clue
    fetch('/api/fake-escape-key')
      .then(res => res.json())
      .then(data => console.log('Debug:', data.message))
      .catch(() => console.log('API request failed (this is intentional)'));

    // Easter egg
    const originalConsole = console.log;
    console.log = function(...args) {
      if (args[0]?.toString().toLowerCase() === 'help') {
        originalConsole(
          '%cAvailable commands:\n- "decode base64 [value]"\n- "check storage"\n- "inspect elements"',
          'color: violet;'
        );
      }
      originalConsole.apply(console, args);
    };

    return () => {
      console.log = originalConsole;
    };
  }, []);

  const checkKey = () => {
    if (userInput === localStorage.getItem('escapeKey')) {
      alert('🎉 You escaped! Redirecting to safety...');
      navigate('/');
    } else {
      alert('❌ Wrong key! Check the console for clues.');
    }
  };

  return (
    <div className={styles.escapeRoom}>
      <h1>🚪 404 - ESCAPE THE ROOM 🚪</h1>
      <p>You've stumbled into a developer's nightmare. Can you escape?</p>
      
      <div 
        className={styles.door} 
        onClick={() => setShowKeyInput(true)}
        title="Click the door"
      >
        🔒
      </div>
      
      <p className={styles.clue}>
        <em>Hint: Check the <strong>developer console</strong> (F12)</em>
      </p>
      
      {showKeyInput && (
        <div className={styles.keyEntry}>
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Enter the secret key..."
            className={styles.keyInput}
          />
          <button onClick={checkKey} className={styles.unlockButton}>
            UNLOCK
          </button>
        </div>
      )}
      
      {/* Hidden clues in the HTML */}
      <div style={{ display: 'none' }}>
        <p>The key is stored where browsers keep secrets.</p>
        <p>Network requests might reveal hidden paths.</p>
      </div>
    </div>
  );
};

// Loading Page Component
const LoadingPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/90 backdrop-blur-sm"
    >
      <div className="flex flex-col items-center">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-green-400 border-t-transparent"></div>
        <p className="mt-4 text-xl text-green-400">Loading...</p>
      </div>
    </motion.div>
  );
};

// Route Transition Wrapper
const RouteTransitionWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, [location.key]);

  return (
    <>
      {isLoading && <LoadingPage />}
      <motion.div
        key={location.key}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </>
  );
};

// Main App Component
function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [terminalPosition, setTerminalPosition] = useState<'left' | 'right' | 'bottom'>('right');

  const handleTerminalToggle = () => {
    setIsTerminalOpen(!isTerminalOpen);
  };

  const handleTerminalPositionChange = (position: 'left' | 'right' | 'bottom') => {
    setTerminalPosition(position);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
        {/* Background Effects */}
        <FloatingElements />
        
        {/* Cursor Effects */}
        <NeonCursor />
        <EnhancedCursorTrail />
        
        {/* Header */}
        <Header 
          onTerminalToggle={handleTerminalToggle}
          terminalPosition={terminalPosition}
          onTerminalPositionChange={handleTerminalPositionChange}
        />
        
        {/* Terminal */}
        <Terminal 
          isOpen={isTerminalOpen}
          onToggle={handleTerminalToggle}
          position={terminalPosition}
        />
        
        {/* Main Content */}
        <main className={`transition-all duration-300 ${
          isTerminalOpen && terminalPosition !== 'bottom' 
            ? terminalPosition === 'left' 
              ? 'ml-80' 
              : 'mr-80'
            : ''
        } ${
          isTerminalOpen && terminalPosition === 'bottom' 
            ? 'mb-80' 
            : ''
        }`}>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<RouteTransitionWrapper><Home /></RouteTransitionWrapper>} />
              <Route path="/about" element={<RouteTransitionWrapper><About /></RouteTransitionWrapper>} />
              <Route path="/skills" element={<RouteTransitionWrapper><Skills /></RouteTransitionWrapper>} />
              <Route path="/projects" element={<RouteTransitionWrapper><Projects /></RouteTransitionWrapper>} />
              <Route path="/experience" element={<RouteTransitionWrapper><Experience /></RouteTransitionWrapper>} />
              <Route path="/contact" element={<RouteTransitionWrapper><Contact /></RouteTransitionWrapper>} />
              <Route path="/blog" element={<RouteTransitionWrapper><Blog /></RouteTransitionWrapper>} />
              <Route path="/services" element={<RouteTransitionWrapper><Services /></RouteTransitionWrapper>} />
              {/* Escape Room 404 - Catch all undefined routes */}
              <Route path="*" element={<EscapeRoom404 />} />
            </Routes>
          </AnimatePresence>
        </main>
      </div>
    </Router>
  );
}

export default App;