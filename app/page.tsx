"use client";
import React from "react";
import Dashboard from "./_components/Dashboard";
import Navbar from "./_components/Navbar";

const Home: React.FC = () => {
  return (
    <div className="max-w-[1824px] m-auto">
      <Navbar />
      <Dashboard />
    </div>
  );
};

export default Home;
