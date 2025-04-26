import React from "react";
import { GreenShape } from "./GreenShape";
import { StatisticsSection } from "./StatisticsSection";
export function HeroSection() {
  return (
    <section className="relative flex flex-col  items-center text-white text-center mt-10 md:mt-0 w-full max-w-[647px] mx-auto ">
      {/* Green shape */}

      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4592372472dc5036c4d6d447ccc78707d03fc00?placeholderIfAbsent=true"
        alt="MBA Online"
        className="absolute  w-[100%] h-[118%] left-0 top-[0px] -z-10 object-cover sm:object-contain"
      />

      <img
        src="/images/Shape-hero.svg"
        alt="Shape hero"
        className="hero-green-shape"
      />
      <div className="flex flex-col items-center gap-[5px] max-sm:gap-[0px] z-10">
        <h1 className="font-bold text-[74px] max-sm:text-[32px]  leading-[88px] ">
          MBA
        </h1>
        <div className="font-normal text-[40px] max-sm:text-[24px] leading-10 md:tracking-[23px]">
          Online
        </div>
      </div>
      <h2 className="font-bold text-[34px] max-sm:text-[24px] leading-[47.6px] mt-[50px] max-sm:mt-0 z-10">
        احصل على شهادة دبلومة معتمدة بخصم 20٪ الآن!
      </h2>
      <p className="font-normal text-lg mt-5  leading-8 z-10">
        فرصة للتميز المهني وتطوير المهارات بأسعار ميسّرة وبرامج مرنة
      </p>
      <div className="w-[193px] h-0.5 bg-[#BFBFBF] mx-auto my-5  z-10" />
      <StatisticsSection />
    </section>
  );
}
