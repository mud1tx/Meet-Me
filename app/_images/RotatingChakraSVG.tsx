"use client";
import React from "react";
import { motion } from "framer-motion";

const SVGComponent: React.FC = () => {

  const handleAnimationComplete = () => {
    document.getElementById("chakra")?.remove();
  };

  return (
    <motion.svg
      width={124}
      height={124}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="none"
      viewBox="0 0 124 124"
      initial={{ opacity: 0, x: "-20vw" }}
      animate={{ opacity: 1, x: 0, rotate: [0, 360] }}
      transition={{
        x: { duration: 1, type: "tween" },
        rotate: {
          duration: 2,
          ease: "linear",
          repeat: Infinity,
          stiffness: 70,
        },
      }}
      id="chakra"
      className="min-w-[48px] font-bold inline-block relative top-4"
      onAnimationComplete={handleAnimationComplete}
    >
      <path
        fill="#fff"
        fillRule="evenodd"
        d="m43.184 54.206-35.557.137a7.656 7.656 0 0 0 0 15.313l35.557.138-25.045 25.24a7.657 7.657 0 0 0 10.828 10.827l25.24-25.045.136 35.557a7.657 7.657 0 0 0 15.313 0l.138-35.557 25.24 25.045a7.656 7.656 0 0 0 10.827-10.828l-25.045-25.24 35.557-.137a7.657 7.657 0 0 0 0-15.313l-35.557-.137 25.045-25.24a7.657 7.657 0 0 0-10.828-10.828l-25.24 25.046-.137-35.557a7.657 7.657 0 0 0-15.313 0l-.137 35.557-25.24-25.045a7.657 7.657 0 0 0-10.828 10.828l25.046 25.24Z"
        clipRule="evenodd"
      />
      <path
        fill="url(#paint0_radial_2080_57111)"
        fillRule="evenodd"
        d="m43.184 54.206-35.557.137a7.656 7.656 0 0 0 0 15.313l35.557.138-25.045 25.24a7.657 7.657 0 0 0 10.828 10.827l25.24-25.045.136 35.557a7.657 7.657 0 0 0 15.313 0l.138-35.557 25.24 25.045a7.656 7.656 0 0 0 10.827-10.828l-25.045-25.24 35.557-.137a7.657 7.657 0 0 0 0-15.313l-35.557-.137 25.045-25.24a7.657 7.657 0 0 0-10.828-10.828l-25.24 25.046-.137-35.557a7.657 7.657 0 0 0-15.313 0l-.137 35.557-25.24-25.045a7.657 7.657 0 0 0-10.828 10.828l25.046 25.24Z"
        clipRule="evenodd"
      />
      <path
        fill="url(#pattern-home-animate-asterisk-0)"
        fillRule="evenodd"
        d="m43.184 54.206-35.557.137a7.656 7.656 0 0 0 0 15.313l35.557.138-25.045 25.24a7.657 7.657 0 0 0 10.828 10.827l25.24-25.045.136 35.557a7.657 7.657 0 0 0 15.313 0l.138-35.557 25.24 25.045a7.656 7.656 0 0 0 10.827-10.828l-25.045-25.24 35.557-.137a7.657 7.657 0 0 0 0-15.313l-35.557-.137 25.045-25.24a7.657 7.657 0 0 0-10.828-10.828l-25.24 25.046-.137-35.557a7.657 7.657 0 0 0-15.313 0l-.137 35.557-25.24-25.045a7.657 7.657 0 0 0-10.828 10.828l25.046 25.24Z"
        clipRule="evenodd"
        style={{
          mixBlendMode: "multiply",
        }}
      />
      <defs>
        <radialGradient
          id="paint0_radial_2080_57111"
          cx={0}
          cy={0}
          r={1}
          gradientTransform="rotate(-90 63.541 25.385) scale(97.6761)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFEBE7" />
          <stop offset={0.672} stopColor="#FF9C7C" />
          <stop offset={0.816} stopColor="#FF9983" />
          <stop offset={0.901} stopColor="#FF774B" />
          <stop offset={1} stopColor="#E76F00" />
        </radialGradient>
        <pattern
          id="pattern-home-animate-asterisk-0"
          width={0.806}
          height={0.806}
          patternContentUnits="objectBoundingBox"
        >
          <use xlinkHref="#svg-noise" transform="scale(.00161)" />
        </pattern>
      </defs>
    </motion.svg>
  );
};
export default SVGComponent;
