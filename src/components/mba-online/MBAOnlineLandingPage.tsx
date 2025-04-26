"use client";
import React from "react";
import { HeroSection } from "./HeroSection";
import { RegistrationForm } from "./RegistrationForm";
import { StatisticsSection } from "./StatisticsSection";
import { Logo } from "./Logo";
import "./style.css";
export function MBAOnlineLandingPage() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Alexandria:wght@300;400;500;600;700&family=Inter:wght@400&display=swap"
        rel="stylesheet"
      />

      <div className="mba-landing-page">
        <img
          src="/images/Ellipse 6370.svg"
          alt="Ellipse 6370"
          className="absolute -z-10 object-contain hidden md:block w-[70%] left-0 top-0"
        />

        <div className="w-full pt-4">
          <Logo />
        </div>
        {/* Background elements for large screens */}

        {/* Mobile background color */}
        <div className="mba-landing-page-background-color " />

        {/* Responsive image that scales properly */}

        {/* Overlay for all screen sizes */}
        <div className="mba-landing-page-overlay" />

        {/* Logo positioned at the top */}

        <div className="mba-landing-page-content">
          {/* Hero section */}
          <HeroSection />
          <RegistrationForm />
        </div>
      </div>
    </>
  );
}
