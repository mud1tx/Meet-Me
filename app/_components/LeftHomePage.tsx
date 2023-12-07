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
      await controlsA.start({ y: "40%", opacity: [0, 1, 0] });
    };

    const animateCharacterB = async () => {
      await controlsB.start({ y: "-50%", opacity: 1 });
    };
    animateCharacterA();
    animateCharacterB();
  }, [controlsA, controlsB]);

  const eVariants = {
    hidden: { opacity: 0, y: "1vh" },
    visible: { opacity: 1, y: 0 },
  };

  const handleAnimationComplete = () => {
    document.getElementById("a")?.remove();
  };

  return (
    // <div className="flex-shrink-0 w-1/2">
    <div className="flex justify-center h-full flex-col w-full md:px-12 lg:px-16 xl:px-20 2xl:px-24 px-6">
      <div className="w-full flex items-center">
        <div>
          <motion.span
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 4, type: "spring", stiffness: 50 }}
            className="text-[5.2rem] min-[425px]:text-[88.66px] md:text-[134.4px] lg:text-[168.5px] xl:text-[202.6px] min-[1440px]:text-[224px] 2xl:text-[236.8px] font-bold inline-block"
          >
            V
          </motion.span>
        </div>
        <div className="relative flex">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="text-[5.2rem] min-[425px]:text-[88.66px] md:text-[134.4px] lg:text-[168.5px] xl:text-[202.6px] min-[1440px]:text-[224px] 2xl:text-[236.8px] font-bold inline-block"
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
            className="text-[5.2rem] min-[425px]:text-[88.66px] md:text-[134.4px] lg:text-[168.5px] xl:text-[202.6px] min-[1440px]:text-[224px] 2xl:text-[236.8px] font-bold inline-block"
          >
            s
          </motion.span>
        )}
        <motion.span
          initial={{ opacity: 0, rotate: -90, originY: 0 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="text-[5.2rem] min-[425px]:text-[88.66px] md:text-[134.4px] lg:text-[168.5px] xl:text-[202.6px] min-[1440px]:text-[224px] 2xl:text-[236.8px] font-bold inline-block"
        >
          u
        </motion.span>
        <div className="relative">
          <motion.div
            id="a"
            initial={{ y: "-50%", opacity: 0 }}
            animate={showSVG ? controlsA : { opacity: 0, y: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="text-[5.2rem] min-[425px]:text-[88.66px] md:text-[134.4px] lg:text-[168.5px] xl:text-[202.6px] min-[1440px]:text-[224px] 2xl:text-[236.8px] font-bold inline-block absolute"
            onAnimationComplete={handleAnimationComplete}
          >
            a
          </motion.div>
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={controlsB}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="text-[5.2rem] min-[425px]:text-[88.66px] md:text-[134.4px] lg:text-[168.5px] xl:text-[202.6px] min-[1440px]:text-[224px] 2xl:text-[236.8px] font-bold inline-block absolute"
          >
            a
          </motion.div>
        </div>
        {showSVG ? (
          <motion.div
            key="initial"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-[5.2rem] min-[425px]:text-[88.66px] md:text-[134.4px] lg:text-[168.5px] xl:text-[202.6px] min-[1440px]:text-[224px] 2xl:text-[236.8px] font-bold inline-block ml-12"
          >
            00
          </motion.div>
        ) : (
          <motion.div
            key="final"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 10,
              damping: 25,
            }}
            className="text-[5.2rem] min-[425px]:text-[88.66px] md:text-[134.4px] lg:text-[168.5px] xl:text-[202.6px] min-[1440px]:text-[224px] 2xl:text-[236.8px] font-bold inline-block ml-12"
          >
            l
          </motion.div>
        )}
      </div>
      <div className="w-full flex justify-end">
        <motion.span
          initial={{ opacity: 0, scaleY: 0, originY: 1 }}
          animate={{ opacity: 1, scaleY: 1, originY: 0 }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="text-[5.2rem] min-[425px]:text-[88.66px] md:text-[134.4px] lg:text-[168.5px] xl:text-[202.6px] min-[1440px]:text-[224px] 2xl:text-[236.8px] font-bold inline-block"
        >
          V
        </motion.span>
        <motion.span
          initial={{ opacity: 0, rotateX: 0 }}
          animate={{ opacity: 1, rotateX: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="text-[5.2rem] min-[425px]:text-[88.66px] md:text-[134.4px] lg:text-[168.5px] xl:text-[202.6px] min-[1440px]:text-[224px] 2xl:text-[236.8px] font-bold inline-block"
        >
          i
        </motion.span>
        <motion.span
          initial={{ opacity: 0, rotateX: 0 }}
          animate={{ opacity: 1, rotateX: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="text-[5.2rem] min-[425px]:text-[88.66px] md:text-[134.4px] lg:text-[168.5px] xl:text-[202.6px] min-[1440px]:text-[224px] 2xl:text-[236.8px] font-bold inline-block"
        >
          s
        </motion.span>
        <motion.span
          initial={{ opacity: 0, rotateX: 0 }}
          animate={{ opacity: 1, rotateX: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="text-[5.2rem] min-[425px]:text-[88.66px] md:text-[134.4px] lg:text-[168.5px] xl:text-[202.6px] min-[1440px]:text-[224px] 2xl:text-[236.8px] font-bold inline-block"
        >
          t
        </motion.span>
        <motion.span
          initial={{ opacity: 0, rotateX: 0 }}
          animate={{ opacity: 1, rotateX: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="text-[5.2rem] min-[425px]:text-[88.66px] md:text-[134.4px] lg:text-[168.5px] xl:text-[202.6px] min-[1440px]:text-[224px] 2xl:text-[236.8px] font-bold inline-block"
        >
          a
        </motion.span>
      </div>
    </div>
    // </div>
  );
};

export default LeftHomePage;
