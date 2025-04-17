import React from "react";

interface NumberCircleProps {
  id: string;
  number: string;
}

export function NumberCircle({ id, number }: NumberCircleProps) {
  return (
    <div
      style={{
        background: "rgba(217,217,217,0.2)",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
      }}
      id={`filter${id}_d_161_3274`}
      className="number-circle w-[40px] h-[40px] xs:w-[50px] xs:h-[50px] sm:w-[70px] sm:h-[70px] md:w-[85px] md:h-[85px] lg:w-[100px] lg:h-[100px] transition-all duration-300"
    >
      <div className="text-[14px] xs:text-[16px] sm:text-[20px] md:text-[24px] lg:text-[34px] text-[#FCFCFC] text-center font-bold">
        {number}
      </div>
    </div>
  );
}
