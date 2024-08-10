// components/ScrollIcon.js
"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useViewportScroll } from "framer-motion";

const ScrollIcon = () => {
  const controls = useAnimation();
  const { scrollY } = useViewportScroll();

  useEffect(() => {
    const updatePosition = () => {
      if (scrollY.get() > 300) {
        controls.start({
          top: 100,
          left: "80%",
          transition: { duration: 0.5 },
        });
      } else {
        controls.start({ top: 20, left: "90%", transition: { duration: 0.5 } });
      }
    };

    updatePosition();

    scrollY.onChange(() => updatePosition());
  }, [scrollY, controls]);

  return (
    <motion.div
      initial={{ top: 20, left: "90%" }}
      animate={controls}
      className="fixed w-12 h-12 bg-blue-500 rounded-full z-50"
    />
  );
};

export default ScrollIcon;
