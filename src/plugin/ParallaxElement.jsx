import React, { useRef, useEffect } from 'react';

const ParallaxElement = ({ children, speed }) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;

      const { x, y, width, height } = ref.current.getBoundingClientRect();
      const xPercent = (clientX - x) / width;
      const yPercent = (clientY - y) / height;
      ref.current.style.transform = `translate(${xPercent * speed - speed / 2}%, ${yPercent * speed - speed / 2}%)`;
    };

    const handleMouseEnter = (event) => {
      const { clientX, clientY } = event;

      const { x, y, width, height } = ref.current.getBoundingClientRect();
      const xPercent = (clientX - x) / width;
      const yPercent = (clientY - y) / height;
      ref.current.style.transform = `translate(${xPercent * speed - speed / 2}%, ${yPercent * speed - speed / 2}%)`;
    };

    const handleMouseLeave = () => {
      ref.current.style.transform = 'translate(0, 0)';
    };

    window.addEventListener('mousemove', handleMouseMove);
    // ref.current.addEventListener('mouseenter', handleMouseEnter);
    // ref.current.addEventListener('mouseleave', handleMouseLeave);
   

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      // ref.current.removeEventListener('mouseenter', handleMouseEnter);
      // ref.current.removeEventListener('mouseleave', handleMouseLeave);
 
    };
  }, [speed]);

  return (
    <div ref={ref} className="parallax-element">
      {children}
    </div>
  );
};

export default ParallaxElement
