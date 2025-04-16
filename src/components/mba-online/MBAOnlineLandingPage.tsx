"use client";
import React from "react";
import { HeroSection } from "./HeroSection";
import { RegistrationForm } from "./RegistrationForm";
import { StatisticsSection } from "./StatisticsSection";
import { Logo } from "./Logo";
import { GreenShape } from "./GreenShape";

export function MBAOnlineLandingPage() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Alexandria:wght@300;400;500;600;700&family=Inter:wght@400&display=swap"
        rel="stylesheet"
      />
      <main className="max-w-[1440px] relative w-full h-[916px] overflow-hidden mx-auto my-0 max-md:max-w-[991px] max-sm:max-w-screen-sm">
        {/* Background elements */}
        <div className="absolute w-[1430px] h-[1430px] left-[-468px] bg-[#091E43] rounded-[50%] -top-40" />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4592372472dc5036c4d6d447ccc78707d03fc00?placeholderIfAbsent=true"
          alt=""
          className="absolute w-[618px] h-[691px] -left-2.5 top-[226px]"
        />
        <div className="absolute w-full h-full bg-[rgba(0,0,0,0.49)] left-0 top-0" />

        {/* Green shape */}
        <GreenShape />

        {/* Hero section */}
        <HeroSection />

        {/* Registration form */}
        <RegistrationForm />

        {/* Statistics section */}
        <StatisticsSection />

        {/* Logo */}
        <Logo />
      </main>
    </>
  );
}
