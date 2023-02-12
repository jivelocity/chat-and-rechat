import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const ParallaxMouseMove = ({ children, speed }) => {
  const ref = useRef(null);
  const moveStrength = 5+ (Math.random() * 15)
  useEffect(() => {
    const handleMouseMove = ({ clientX, clientY }) => {
      gsap.to(ref.current, {
        duration: 1,
        x: (clientX - window.innerWidth / 2) * speed / moveStrength,
        y: (clientY - window.innerHeight / 2) * speed / moveStrength,
        ease: "power2.out"
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={ref} className="parallax">
      {children}
    </div>
  );
};

export default ParallaxMouseMove;
