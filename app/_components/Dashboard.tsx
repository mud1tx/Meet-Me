"use client";
import React from "react";
import LeftHomePage from "./HomePage";
import BracketSVG from "../_images/BracketSVG";
import { motion } from "framer-motion";

const dashboard: React.FC = () => {
  type left = boolean;

  return (
    <div style={{ height: "calc(100vh - 110px)" }}>
      <div className="py-[17vh] min-[425px]:py-[12vh] lg:py-0 max-w-[1920px] 2xl:m-auto">
        <LeftHomePage />
        <motion.div
          className="flex justify-center h-full gap-8 flex-col w-full md:px-12 lg:px-16 xl:px-20 2xl:px-24 px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeIn" }}
        >
          <div className="flex gap-3 items-center justify-around">
            <BracketSVG left={true} />
            <div>
              <p className="flex justify-center items-center">
                Website that allow people to easily video call each other
              </p>
            </div>
            <BracketSVG left={false} />
          </div>
          <div className="">
            <button className="w-full h-16 rounded-full border-4 border-['#fffce1']">
              Start a call
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default dashboard;
