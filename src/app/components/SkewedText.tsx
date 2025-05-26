"use client"

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface TextSkewProps {
  text: string;
  className?: string;
}

const TextSkewEffect: React.FC<TextSkewProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const letters = lettersRef.current;
    const container = containerRef.current;

    // Set initial state for all letters
    gsap.set(letters, {
      scale: 1,
      skewX: -15,
      transformOrigin: "center center",
      rotationY: -25,
      rotationX: 5,
    });

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      const containerRect = container.getBoundingClientRect();
      const mouseX = e.clientX - containerRect.left;
      
      letters.forEach((letter) => {
        if (!letter) return;
        
        const letterRect = letter.getBoundingClientRect();
        const letterCenterX = letterRect.left + letterRect.width / 2 - containerRect.left;
        
        // Calculate distance from mouse to letter center
        const distance = Math.abs(mouseX - letterCenterX);
        const maxDistance = containerRect.width / 2;
        
        // Normalize distance (0 = closest, 1 = furthest)
        const normalizedDistance = Math.min(distance / maxDistance, 1);
        
        // Scale calculation: closest letter gets smaller (0.6), furthest gets bigger (1.4)
        const scale = 0.6 + (normalizedDistance * 0.4); // Range: 0.6 to 1.4
        
        // Additional rotation based on distance for more dynamic effect
        const rotationY = -25 + (normalizedDistance * 20);
        const skewX = -15 + (normalizedDistance * 10);
        
        gsap.to(letter, {
          duration: 0.3,
          scale: scale,
          skewX: skewX,
          rotationY: rotationY,
          ease: "power2.out"
        });
      });
    };

    // Mouse leave handler - reset all letters
    const handleMouseLeave = () => {
      gsap.to(letters, {
        duration: 0.5,
        scale: 1,
        skewX: -15,
        rotationY: -25,
        rotationX: 5,
        ease: "power2.out"
      });
    };

    // Touch handlers for mobile
    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      handleMouseMove({
        clientX: touch.clientX,
        clientY: touch.clientY
      } as MouseEvent);
    };
    
    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      handleMouseMove({
        clientX: touch.clientX,
        clientY: touch.clientY
      } as MouseEvent);
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchmove', handleTouchMove);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
    };
  }, [text]);

  // Split text into individual letters
  const letters = text.split('').map((letter, index) => (
    <span
      key={index}
      ref={(el) => {
        if (el) lettersRef.current[index] = el;
      }}
      className="inline-block"
      style={{
        display: 'inline-block',
        transformStyle: 'preserve-3d',
        marginRight: '-0.01em'
      }}
    >
      {letter}
    </span>
  ));

  return (
    <div
      ref={containerRef}
      className={`relative flex justify-center items-center w-full overflow-hidden ${className}`}
      style={{ perspective: '1000px' }}
    >
      <div
        className="text-black font-black font-zentry text-6xl md:text-8xl lg:text-9xl xl:text-[20rem] 2xl:text-[32rem] leading-none select-none"
        style={{
          textShadow: '0 10px 20px rgba(0,0,0,0.3)',
          letterSpacing: '-0.02em',
          whiteSpace: 'nowrap'
        }}
      >
        {letters}
      </div>
    </div>
  );
};

export default TextSkewEffect;