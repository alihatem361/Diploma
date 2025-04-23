import React from "react";
import "./style.css";
import { motion } from "framer-motion";

export const OurPrograms = () => {
  const programsDtata = [
    {
      title: "المحترفين في مجالهم",
      image: "/images/Group.png",
    },
    {
      title: "الباحثين عن وظائف",
      image: "/images/Frame.png",
    },
    {
      title: "المهنيين العاملين",
      image: "/images/Group22.png",
    },
  ];

  return (
    <div dir="rtl" className="our-programs-container">
      {/* button shap  larg screens*/}

      <h3 className="text-2xl font-bold text-center mb-8 text-[#154394]">
        برنامجنا مخصص لكل من:
      </h3>
      <div>
        <div className="flex flex-col lg:flex-row gap-4 justify-center items-center">
          {programsDtata.map((program, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center m-2 w-46 h-46"
            >
              <motion.div
                className="bg-[#154394] rounded-full p-6"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-18 h-18"
                />
              </motion.div>
              <h3 className="text-lg font-medium text-center mt-2 text-[#154394]">
                {program.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
