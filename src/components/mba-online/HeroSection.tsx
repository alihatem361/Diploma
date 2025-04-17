import React from "react";

export function HeroSection() {
  return (
    <section className="flex flex-col items-center text-white text-center mt-10 md:mt-0 w-full max-w-[647px] mx-auto">
      <div className="flex flex-col items-center gap-[5px]">
        <h1 className="font-bold text-[74px] leading-[88px]">MBA</h1>
        <div className="font-normal text-[40px] leading-10 tracking-[23px]">
          Online
        </div>
      </div>
      <h2 className="font-bold text-[34px] leading-[47.6px] mt-[50px]">
        احصل على شهادة دبلومة معتمدة بخصم 20٪ الآن!
      </h2>
      <p className="font-normal text-lg mt-5">
        فرصة للتميز المهني وتطوير المهارات بأسعار ميسّرة وبرامج مرنة
      </p>
      <div className="w-[193px] h-0.5 bg-[#BFBFBF] mx-auto my-5" />
    </section>
  );
}
