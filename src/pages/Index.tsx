import React from "react";
import { MBAOnlineLandingPage } from "@/components/mba-online/MBAOnlineLandingPage";
import { CertificatesSection } from "@/components/CertificatesSection";
import { OurPrograms } from "@/components/Ourprograms";
export default function Index() {
  return (
    <>
      <MBAOnlineLandingPage />
      <CertificatesSection />
      <OurPrograms />
    </>
  );
}
