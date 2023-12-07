"use client";
import React from "react";
import LeftHomePage from "./LeftHomePage";
import RightHomePage from "./RightHomePage";
import Navbar from "./Navbar";

const dashboard: React.FC = () => {
  return (
    <div style={{ height: "calc(100vh - 110px)" }}>
      <div className="w-screen py-[30vh] md:py-[30vh] lg:py-0 max-w-[1920px] 2xl:m-auto">
        <LeftHomePage />
      </div>
    </div>
  );
};

export default dashboard;
