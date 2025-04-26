import React from "react";
import { MBAOnlineLandingPage } from "@/components/mba-online/MBAOnlineLandingPage";
import { CertificatesSection } from "@/components/CertificatesSection/Index";
import { OurPrograms } from "@/components/Ourprograms/Index";
import { MbaProgramSection } from "@/components/MbaProgramSection/Index";
import { ChooseOurProgram } from "@/components/ChooseOurProgram/Index";
import OurStudentsStories from "@/components/OurStudentsStories/Index";
import PaymentMethod from "@/components/PaymentMethod/Index";
import Footer from "@/components/Footer/Index";
export default function Index() {
  return (
    <>
      <MBAOnlineLandingPage />

      <CertificatesSection />
      <OurPrograms />
      <MbaProgramSection />
      <ChooseOurProgram />
      <OurStudentsStories />
      <PaymentMethod />
      <Footer />
    </>
  );
}
