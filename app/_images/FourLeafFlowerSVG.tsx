"use client";
import React from "react";
import { motion } from "framer-motion";

const FourLeafFlowerSVG = () => (
  <motion.svg
    width={248}
    height={248}
    viewBox="0 0 248 248"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    aria-hidden="true"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 2, }}
    whileHover={{ rotate: 1080 }}
    className="w-12 font-bold inline-block"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M62 124C27.7583 124 0 151.758 0 186C0 220.242 27.7583 248 62 248C96.2417 248 124 220.242 124 186C124 220.242 151.758 248 186 248C220.242 248 248 220.242 248 186C248 151.758 220.242 124 186 124C220.242 124 248 96.2417 248 62C248 27.7583 220.242 0 186 0C151.758 0 124 27.7583 124 62C124 27.7583 96.2417 0 62 0C27.7583 0 0 27.7583 0 62C0 96.2417 27.7583 124 62 124Z"
      fill="url(#paint0_radial_2080_56318)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M62 124C27.7583 124 0 151.758 0 186C0 220.242 27.7583 248 62 248C96.2417 248 124 220.242 124 186C124 220.242 151.758 248 186 248C220.242 248 248 220.242 248 186C248 151.758 220.242 124 186 124C220.242 124 248 96.2417 248 62C248 27.7583 220.242 0 186 0C151.758 0 124 27.7583 124 62C124 27.7583 96.2417 0 62 0C27.7583 0 0 27.7583 0 62C0 96.2417 27.7583 124 62 124Z"
      fill="url(#paint1_radial_2080_56318)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M62 124C27.7583 124 0 151.758 0 186C0 220.242 27.7583 248 62 248C96.2417 248 124 220.242 124 186C124 220.242 151.758 248 186 248C220.242 248 248 220.242 248 186C248 151.758 220.242 124 186 124C220.242 124 248 96.2417 248 62C248 27.7583 220.242 0 186 0C151.758 0 124 27.7583 124 62C124 27.7583 96.2417 0 62 0C27.7583 0 0 27.7583 0 62C0 96.2417 27.7583 124 62 124Z"
      fill="url(#pattern-home-animate-flower-0)"
      fillOpacity={0.6}
      style={{
        mixBlendMode: "multiply",
      }}
    />
    <defs>
      <pattern
        id="pattern-home-animate-flower-0"
        patternContentUnits="objectBoundingBox"
        width={0.403226}
        height={0.403226}
      >
        <use xlinkHref="#svg-noise" transform="scale(0.000806452)" />
      </pattern>
      <radialGradient
        id="paint0_radial_2080_56318"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(76.3114 176.859) rotate(-90) scale(194.26 195.353)"
      >
        <stop stopColor="#E193FF" />
        <stop offset={0.6721} stopColor="#8E78DA" />
        <stop offset={0.7378} stopColor="#937DDB" />
        <stop offset={0.8164} stopColor="#A28BDD" />
        <stop offset={0.9014} stopColor="#BAA3E2" />
        <stop offset={0.9905} stopColor="#DBC3E7" />
        <stop offset={1} stopColor="#DFC7E8" />
      </radialGradient>
      <radialGradient
        id="paint1_radial_2080_56318"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(-27 234) rotate(-68.2758) scale(275.572 434.122)"
      >
        <stop stopColor="#FFE2F2" />
        <stop offset={0.609375} stopColor="#FFADDA" />
        <stop offset={0.776042} stopColor="#FF7CC5" />
        <stop offset={0.911458} stopColor="#FF71BF" />
        <stop offset={1} stopColor="#F84FAC" />
      </radialGradient>
    </defs>
  </motion.svg>
);
export default FourLeafFlowerSVG;
