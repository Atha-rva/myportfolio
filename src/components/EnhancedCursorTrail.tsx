import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface CursorState {
  x: number;
  y: number;
  isClicking: boolean;
  isHovering: boolean;
}

const EnhancedCursorTrail: React.FC = () => {
  const [cursor, setCursor] = useState<CursorState>({
    x: 0,
    y: 0,
    isClicking: false,
    isHovering: false
  });
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const trailIdRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isHovering = target.tagName === 'BUTTON' || 
                        target.tagName === 'A' || 
                        target.closest('button') !== null ||
                        target.closest('a') !== null;

      setCursor(prev => ({
        ...prev,
        x: e.clientX,
        y: e.clientY,
        isHovering
      }));

      // Add trail point
      setTrail(prev => {
        const newTrail = [...prev, { 
          x: e.clientX, 
          y: e.clientY, 
          id: trailIdRef.current++ 
        }];
        return newTrail.slice(-15); // Keep last 15 points
      });
    };

    const handleMouseDown = () => {
      setCursor(prev => ({ ...prev, isClicking: true }));
    };

    const handleMouseUp = () => {
      setCursor(prev => ({ ...prev, isClicking: false }));
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Main cursor */}
      <motion.div
        className={`absolute w-6 h-6 rounded-full border-2 border-green-400 ${
          cursor.isHovering ? 'bg-green-400/20' : 'bg-transparent'
        }`}
        animate={{
          x: cursor.x - 12,
          y: cursor.y - 12,
          scale: cursor.isClicking ? 0.8 : cursor.isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 400,
          mass: 0.5
        }}
      />

      {/* Inner dot */}
      <motion.div
        className="absolute w-1 h-1 bg-green-400 rounded-full"
        animate={{
          x: cursor.x - 2,
          y: cursor.y - 2,
        }}
        transition={{
          type: "spring",
          damping: 50,
          stiffness: 1000,
        }}
      />

      {/* Trail particles */}
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          className="absolute w-2 h-2 bg-green-400/40 rounded-full"
          initial={{
            x: point.x - 4,
            y: point.y - 4,
            scale: 1,
            opacity: 0.8,
          }}
          animate={{
            scale: 0,
            opacity: 0,
          }}
          transition={{
            duration: 0.6,
            delay: index * 0.02,
            ease: "easeOut"
          }}
        />
      ))}

      {/* Hover effect particles */}
      {cursor.isHovering && (
        <>
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={`hover-${i}`}
              className="absolute w-1 h-1 bg-green-400/60 rounded-full"
              initial={{
                x: cursor.x,
                y: cursor.y,
                scale: 0,
              }}
              animate={{
                x: cursor.x + Math.cos((i * Math.PI * 2) / 8) * 20,
                y: cursor.y + Math.sin((i * Math.PI * 2) / 8) * 20,
                scale: 1,
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </>
      )}

      {/* Click ripple effect */}
      {cursor.isClicking && (
        <motion.div
          className="absolute border border-green-400/50 rounded-full"
          initial={{
            x: cursor.x - 10,
            y: cursor.y - 10,
            width: 20,
            height: 20,
            opacity: 1,
          }}
          animate={{
            width: 60,
            height: 60,
            x: cursor.x - 30,
            y: cursor.y - 30,
            opacity: 0,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut"
          }}
        />
      )}
    </div>
  );
};

export default EnhancedCursorTrail;