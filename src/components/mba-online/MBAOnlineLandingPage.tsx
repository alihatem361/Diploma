"use client";
import React from "react";
import { HeroSection } from "./HeroSection";
import { RegistrationForm } from "./RegistrationForm";
import { StatisticsSection } from "./StatisticsSection";
import { Logo } from "./Logo";
import { BackgroundShape } from "./BackgroundShape";

export function MBAOnlineLandingPage() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Alexandria:wght@300;400;500;600;700&family=Inter:wght@400&display=swap"
        rel="stylesheet"
      />
      <div className="flex flex-col w-full min-h-screen overflow-hidden mx-auto my-0 max-sm:max-w-screen-sm">
        {/* Background elements */}
        <img
          src="/images/Ellipse 6370.svg"
          alt="Ellipse 6370"
          className="absolute -z-10 object-contain max-sm:hidden"
        />
        <div className="max-sm:bg-[#091E43] max-sm:w-[100%] max-sm:h-[123%] max-sm:left-0 max-sm:top-0 max-sm:absolute max-sm:z-[-12]" />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4592372472dc5036c4d6d447ccc78707d03fc00?placeholderIfAbsent=true"
          alt="MBA Online"
          className="absolute w-[100vw] h-[498px] md:w-[618px] md:h-[691px] -left-2.5 top-[226px] -z-10 object-contain"
        />
        <div className="absolute w-full h-[123%] bg-[rgba(0,0,0,0.49)] left-0 top-0 -z-10" />

        {/* Logo positioned at the top */}
        <div className="w-full pt-4">
          <Logo />
        </div>

        <div className="flex flex-col md:flex-row md:gap-10 py-[100px] md:px-5 md:py-10 relative z-10">
          <div className="flex flex-col gap-10 flex-1 justify-center items-center">
            {/* Hero section */}
            <HeroSection />
            {/* Statistics section */}
            <StatisticsSection />
          </div>
          {/* Registration form */}
          <RegistrationForm />
        </div>
      </div>
    </>
  );
}
