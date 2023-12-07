"use client"
import React from "react";
import Dashboard from "./_components/Dashboard"
import Navbar from "./_components/Navbar";

const Home: React.FC = () => {
  return (
    <>
    <Navbar />
    <Dashboard/>
    </>
  );
};

export default Home;
