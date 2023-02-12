import React, { useState, useRef, useEffect } from 'react';

const HoverAnimate = ({ children, speed, maxMovement }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movement, setMovement] = useState(0);
  const ref = useRef(null);
  let requestID = null;

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMovement(0);
    cancelAnimationFrame(requestID);
  };

  useEffect(() => {
    if (isHovered) {
      const animate = () => {
        setMovement(prevMovement => (prevMovement + speed) % maxMovement);
        requestID = requestAnimationFrame(animate);
      };
      animate();
    }
  }, [isHovered, speed, maxMovement]);

  useEffect(() => {
    if (isHovered) {
      const { x, y, width, height } = ref.current.getBoundingClientRect();
      const xPercent = (window.innerWidth / 2 - x) / width;
      const yPercent = (window.innerHeight / 2 - y) / height;
      ref.current.style.transform = `translate(${xPercent * movement}px, ${yPercent * movement}px)`;
    } else {
      ref.current.style.transform = 'translate(0, 0)';
    }
  }, [isHovered, movement]);

  return (
    <div
      ref={ref}
      className="hover-animate"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};



export default HoverAnimate;
