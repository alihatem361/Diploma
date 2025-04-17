import React from "react";
import { NumberCircle } from "./NumberCircle";

export function StatisticsSection() {
  return (
    <section className="w-full px-4 sm:px-0 md:px-8 md:py-8 sm:py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-row flex-wrap justify-center items-center gap-[5px] my-2 md:gap-4 sm:gap-6 md:gap-8">
          <StatItem number="150+" text="شهادات معتمدة" id="0" />
          <StatItem number="100+" text="شهادة ماجستير" id="1" />
          <StatItem number="500+" text="طالب أكاديمي" id="2" />
        </div>
      </div>
    </section>
  );
}

interface StatItemProps {
  number: string;
  text: string;
  id: string;
}

function StatItem({ number, text, id }: StatItemProps) {
  return (
    <div className="flex flex-col items-center md:p-3 md:p-6 hover:scale-105 transition-transform duration-300">
      <NumberCircle id={id} number={number} />
      <div className="font-medium text-sm sm:text-base md:text-lg lg:text-xl text-white mt-2 sm:mt-3 md:mt-4 text-center">
        {text}
      </div>
    </div>
  );
}
