import React, { useEffect, useRef, useState } from 'react';

interface Point {
  x: number;
  y: number;
  age: number;
}

const NeonCursor: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const pointsRef = useRef<Point[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      setIsVisible(true);
      
      // Add new point to trail
      pointsRef.current.push({
        x: e.clientX,
        y: e.clientY,
        age: 0
      });

      // Limit trail length
      if (pointsRef.current.length > 50) {
        pointsRef.current.shift();
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw trail points
      pointsRef.current = pointsRef.current.filter(point => {
        point.age += 0.02;
        
        if (point.age >= 1) return false;

        // Calculate opacity and size based on age
        const opacity = 1 - point.age;
        const size = (1 - point.age) * 15;

        // Create gradient for neon effect
        const gradient = ctx.createRadialGradient(
          point.x, point.y, 0,
          point.x, point.y, size
        );
        
        gradient.addColorStop(0, `rgba(16, 185, 129, ${opacity * 0.8})`); // Green center
        gradient.addColorStop(0.3, `rgba(16, 185, 129, ${opacity * 0.6})`);
        gradient.addColorStop(0.6, `rgba(16, 185, 129, ${opacity * 0.3})`);
        gradient.addColorStop(1, `rgba(16, 185, 129, 0)`);

        // Draw the neon circle
        ctx.beginPath();
        ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Add outer glow
        ctx.beginPath();
        ctx.arc(point.x, point.y, size * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(16, 185, 129, ${opacity * 0.1})`;
        ctx.fill();

        return true;
      });

      // Draw connecting lines between recent points
      if (pointsRef.current.length > 1) {
        ctx.strokeStyle = 'rgba(16, 185, 129, 0.3)';
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        ctx.beginPath();
        for (let i = 0; i < pointsRef.current.length - 1; i++) {
          const current = pointsRef.current[i];
          const next = pointsRef.current[i + 1];
          
          if (i === 0) {
            ctx.moveTo(current.x, current.y);
          }
          
          // Create smooth curves between points
          const midX = (current.x + next.x) / 2;
          const midY = (current.y + next.y) / 2;
          
          ctx.quadraticCurveTo(current.x, current.y, midX, midY);
        }
        ctx.stroke();
      }

      // Draw main cursor glow
      if (isVisible) {
        const { x, y } = mouseRef.current;
        
        // Main cursor glow
        const mainGradient = ctx.createRadialGradient(x, y, 0, x, y, 20);
        mainGradient.addColorStop(0, 'rgba(16, 185, 129, 0.8)');
        mainGradient.addColorStop(0.5, 'rgba(16, 185, 129, 0.4)');
        mainGradient.addColorStop(1, 'rgba(16, 185, 129, 0)');

        ctx.beginPath();
        ctx.arc(x, y, 20, 0, Math.PI * 2);
        ctx.fillStyle = mainGradient;
        ctx.fill();

        // Inner bright core
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(16, 185, 129, 1)';
        ctx.fill();

        // Outer ring
        ctx.beginPath();
        ctx.arc(x, y, 8, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(16, 185, 129, 0.6)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ 
        mixBlendMode: 'screen',
        filter: 'blur(0.5px)'
      }}
    />
  );
};

export default NeonCursor;