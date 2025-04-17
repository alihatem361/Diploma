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
      <main className="flex flex-col w-full min-h-screen overflow-hidden mx-auto my-0 max-sm:max-w-screen-sm">
        {/* Background elements */}
        <div className="fixed w-[1430px] h-[1430px] left-[-468px] bg-[#091E43] rounded-[50%] -top-40 -z-10" />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4592372472dc5036c4d6d447ccc78707d03fc00?placeholderIfAbsent=true"
          alt=""
          className="fixed w-[618px] h-[691px] -left-2.5 top-[226px] -z-10"
        />
        <div className="fixed w-full h-full bg-[rgba(0,0,0,0.49)] left-0 top-0 -z-10" />

        {/* Logo positioned at the top */}
        <div className="w-full pt-4">
          <Logo />
        </div>

        {/* Green shape */}
        <GreenShape />

        <div className="flex flex-col md:flex-row md:gap-10 md:p-5 relative z-10">
          <div className="flex flex-col gap-10 flex-1 justify-center items-center">
            {/* Hero section */}
            <HeroSection />
            {/* Statistics section */}
            <StatisticsSection />
          </div>
          {/* Registration form */}
          <RegistrationForm />
        </div>
      </main>
    </>
  );
}
