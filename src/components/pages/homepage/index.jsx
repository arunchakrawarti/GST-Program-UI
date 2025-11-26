"use client";
import React from "react";
import TradingPlatforms from "./TradingPlatforms";
import HeroSection from "@/components/pages/homepage/HeroSection";
import BuiltSupperTraders from "./BuiltSupperTraders";
import BuiltInventors from "./BuiltInventors";
import YouFirst from "./YouFirst";
import LoveFromIndia from "./LoveFromIndia";
import AwardsAndNewsSlider from "./AwardsAndNewsSlider";
import Faq from "./Faq";
import InvestTrade from "./InvestTrade";

const HomeMain = () => {
  return (
    <>
      <HeroSection />
      <TradingPlatforms />
      <BuiltSupperTraders/>
      <BuiltInventors/>
      <YouFirst />
      <LoveFromIndia />
      <AwardsAndNewsSlider />
      <Faq />
      <InvestTrade />
    </>
  );
};

export default HomeMain;
