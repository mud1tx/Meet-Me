"use client";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import RotatingFlowerSVG from "../_images/RotatingFlowerSVG";
import RotatingChakraSVG from "../_images/RotatingChakraSVG";

const LeftHomePage: React.FC = () => {
  const [showSVG, setShowSVG] = useState(true);
  const controlsA = useAnimation();
  const controlsB = useAnimation();

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setShowSVG(false);
    }, 2000);
    return () => clearTimeout(animationTimeout);
  }, []);

  useEffect(() => {
    const animateCharacterA = async () => {
      await controlsA.start({ y: "100%", opacity: [0,1,0] });
    };

    const animateCharacterB = async () => {
      await controlsB.start({ y: "-50%", opacity: 1 });
    };

    // Start animation for character A
    animateCharacterA();

    // Start animation for character B simultaneously
    animateCharacterB();
  }, [controlsA, controlsB]);

  const eVariants = {
    hidden: { opacity: 0, y: "1vh" },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex-shrink-0 w-1/2">
      <div className="flex justify-center items-center h-full">
        <motion.span
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 4, type: "spring", stiffness: 50 }}
          className="text-[21rem] font-bold inline-block"
        >
          V
        </motion.span>
        <div className="relative flex">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="text-[21rem] font-bold inline-block px-8"
          >
            ı
          </motion.span>
          <RotatingFlowerSVG />
        </div>
        {showSVG ? (
          <RotatingChakraSVG />
        ) : (
          <motion.span
            variants={eVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, ease: "linear" }}
            className="text-[21rem] font-bold inline-block"
          >
            s
          </motion.span>
        )}
        <motion.span
          initial={{ opacity: 0, rotate: -90, originY: 0 }} // Set transform-origin to top
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="text-[21rem] font-bold inline-block"
        >
          u
        </motion.span>
        <div className="relative">
          <motion.div
            initial={{ y: "-50%", opacity: 0 }}
            animate={controlsA}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="text-[21rem] font-bold inline-block absolute"
          >
            a
          </motion.div>
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={controlsB}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="text-[21rem] font-bold inline-block absolute"
          >
            a
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LeftHomePage;
