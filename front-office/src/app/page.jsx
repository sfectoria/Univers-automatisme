"use client";
import React from "react";
import "../styles/globals.css";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import ProgressSlider from "@/components/home/Famille";
import Work from "@/components/home/Work";
import Reviews from "@/components/home/Reviews";
import Partnaires from "@/components/home/Partnaires";

const page = () => {
  return (
    <div className=" no-scrollbar overflow-y-scroll ">
      <Hero />
      <About />
      <div className="mt-20">
        <Services />
      </div>
      <ProgressSlider />
      <Work />

      <Reviews />
      {/* <Stars/> */}
      <Partnaires />

      {/* <Cta /> */}
    </div>
  );
};

export default page;
