import React from "react";
import { NumberCircle } from "./NumberCircle";

export function StatisticsSection() {
  return (
    <section className="statistics-section">
      <div className="statistics-section-content">
        <div className="statistics-section-Cards">
          <StatItem number="150+" text="شهادات معتمدة" id="0" />
          <StatItem number="100+" text="شهادة ماجستير" id="1" />
          <StatItem number="500+" text="طالب أكاديمي" id="2" />
          {/* New StatItem added */}
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
    <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
      <NumberCircle id={id} number={number} />
      <div className="font-medium text-sm sm:text-base md:text-lg lg:text-xl text-white mt-2 sm:mt-3 md:mt-4 text-center">
        {text}
      </div>
    </div>
  );
}
