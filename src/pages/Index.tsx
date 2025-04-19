import React from "react";
import { MBAOnlineLandingPage } from "@/components/mba-online/MBAOnlineLandingPage";
import { CertificatesSection } from "@/components/CertificatesSection";
import { OurPrograms } from "@/components/Ourprograms";
import { MbaProgramSection } from "@/components/MbaProgramSection";
export default function Index() {
  return (
    <>
      <MBAOnlineLandingPage />
      <CertificatesSection />
      <OurPrograms />
      <MbaProgramSection />
    </>
  );
}
