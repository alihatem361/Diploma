import React from "react";
import { NumberCircle } from "./NumberCircle";

export function StatisticsSection() {
  return (
    <section className="absolute w-[599px] flex justify-between items-center left-[72px] top-[656px] max-md:flex-col max-md:gap-5 max-sm:w-[calc(100%_-_40px)] max-sm:flex-col max-sm:gap-5 max-sm:left-5">
      <StatItem number="150+" text="شهادات معتمدة" id="0" />
      <StatItem number="100+" text="شهادة ماجستير" id="1" />
      <StatItem number="500+" text="طالب أكاديمي" id="2" />
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
    <div className="flex flex-col items-center">
      <NumberCircle id={id} />
      <div className="font-[bold] text-[34px] text-[#FCFCFC]">{number}</div>
      <div className="font-medium text-2xl text-white">{text}</div>
    </div>
  );
}
