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
    <div dir="rtl" className=" w-full flex flex-col items-center py-10">
      <h3 className="text-2xl font-bold text-center mb-8 text-[#154394]">
        برنامجنا مخصص لكل من:
      </h3>
      <div>
        <div className="flex flex-col lg:flex-row gap-4 justify-center items-center">
          {programsDtata.map((program, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center shadow-lg  m-2 w-30 h-30"
            >
              <div className="bg-[#154394] rounded-full p-4">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-12 h-12  "
                />
              </div>
              <h3 className="text-sm font-medium text-center mt-2 text-[#154394]">
                {program.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
