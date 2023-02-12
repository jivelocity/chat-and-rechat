import React, { useRef, useEffect } from 'react';
import { gsap, ScrollTrigger } from 'gsap/all';

const ParallaxScrollTrigger = ({ children, speed, trigger }) => {
  const ref = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(ref.current, {
      ScrollTrigger: {
        trigger: trigger,
        start: "top bottom",
        end: "bottom top",
        markers: true,
        toggleActions: "restart pause reset"
      },
      y: "50%",
      ease: "none",
      yPercent: speed
    });
  }, []);

  return (
    <div ref={ref} className="parallax">
      {children}
    </div>
  );
};

const App = () => {
  return (
    <>
      <Parallax speed={-0.5} trigger=".section-1">
        {/* content here */}
      </Parallax>
      <Parallax speed={0.5} trigger=".section-2">
        {/* content here */}
      </Parallax>
    </>
  );
};

export default App;
