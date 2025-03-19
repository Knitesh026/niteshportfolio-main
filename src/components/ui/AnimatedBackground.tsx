
import React, { useEffect, useRef, useState } from "react";

interface AnimatedBackgroundProps {
  className?: string;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // Initialize nodes as state to avoid reference issues
  const [nodes, setNodes] = useState<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    color: string;
  }[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Create nodes
    const nodeCount = window.innerWidth < 768 ? 25 : 50;
    const initialNodes: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
    }[] = [];

    // Set canvas dimensions
    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      
      // Update node positions on resize to prevent nodes from going out of bounds
      if (nodes.length > 0) {
        const updatedNodes = [...nodes];
        updatedNodes.forEach(node => {
          if (node.x > width) node.x = Math.random() * width;
          if (node.y > height) node.y = Math.random() * height;
        });
        setNodes(updatedNodes);
      }
    };

    // Initialize nodes with random positions, velocities, and colors
    for (let i = 0; i < nodeCount; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const vx = (Math.random() - 0.5) * 0.5;
      const vy = (Math.random() - 0.5) * 0.5;
      const radius = Math.random() * 2 + 1;
      
      // Use different colors based on dark mode
      const isDarkMode = document.documentElement.classList.contains("dark");
      const colors = isDarkMode 
        ? ["rgba(59, 130, 246, 0.6)", "rgba(99, 102, 241, 0.6)", "rgba(139, 92, 246, 0.6)"]
        : ["rgba(59, 130, 246, 0.3)", "rgba(99, 102, 241, 0.3)", "rgba(139, 92, 246, 0.3)"];
      
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      initialNodes.push({ x, y, vx, vy, radius, color });
    }

    // Set initial nodes to state
    setNodes(initialNodes);
    
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Animation
    const maxDistance = 150;
    let animationId: number;
    let localNodes = [...initialNodes]; // Local copy for animation

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw nodes
      localNodes.forEach((node, i) => {
        // Update position
        node.x += node.vx;
        node.y += node.vy;
        
        // Bounce on edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
        
        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();
        
        // Connect nodes
        for (let j = i + 1; j < localNodes.length; j++) {
          const node2 = localNodes[j];
          const dx = node.x - node2.x;
          const dy = node.y - node2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance;
            const isDarkMode = document.documentElement.classList.contains("dark");
            const connectionColor = isDarkMode 
              ? `rgba(148, 163, 184, ${opacity * 0.15})`
              : `rgba(148, 163, 184, ${opacity * 0.07})`;
              
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(node2.x, node2.y);
            ctx.strokeStyle = connectionColor;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      });
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Clean up
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []); // Empty dependency array to run only once

  return <canvas ref={canvasRef} className={`absolute inset-0 w-full h-full ${className || ""}`} />;
};

export default AnimatedBackground;
