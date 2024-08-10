import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const App = () => {
  const { scrollYProgress } = useScroll();

  // Transform the icon's position based on the scroll progress
  const iconY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, window.innerHeight / 2],
  );
  const iconX = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -window.innerWidth / 2 + 50],
  );

  return (
    <div className="relative h-[200vh]">
      {/* First Div */}
      <div className="relative h-screen bg-blue-200">
        <motion.div
          style={{ x: iconX, y: iconY }}
          className="absolute bottom-5 left-5 w-12 h-12 bg-red-500 rounded-full"
        />
      </div>

      {/* Second Div */}
      <div className="relative h-screen bg-red-200">
        {/* The icon will move to this div */}
      </div>
    </div>
  );
};

export default App;
