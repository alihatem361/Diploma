export function MbaProgramSection() {
  const infoItems = [
    "احصل على شهادة الماجستير المهني في إدارة الأعمال MBA المعتمدة من جامعة مارا للتكنولوجيا في ماليزيا واختر من بين 5 تخصصات متنوعة:",
    "احصل على شهادة الماجستير المهني في إدارة الأعمال MBA المعتمدة من جامعة مارا للتكنولوجيا في ماليزيا واختر من بين 5 تخصصات متنوعة:",
    "احصل على شهادة الماجستير المهني في إدارة الأعمال MBA المعتمدة من جامعة مارا للتكنولوجيا في ماليزيا واختر من بين 5 تخصصات متنوعة:",
    "احصل على شهادة الماجستير المهني في إدارة الأعمال MBA المعتمدة من جامعة مارا للتكنولوجيا في ماليزيا واختر من بين 5 تخصصات متنوعة:",
    "احصل على شهادة الماجستير المهني في إدارة الأعمال MBA المعتمدة من جامعة مارا للتكنولوجيا في ماليزيا واختر من بين 5 تخصصات متنوعة:",
  ];

  const specializations = [
    {
      id: 1,
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d21b30a87d866c9ceacccbe5fa6af55b5c5b97eb?placeholderIfAbsent=true",
      title: "إدارة الاعمال",
      altText: "إدارة الاعمال",
      gridArea: "business",
    },
    {
      id: 2,
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/51636427a3ab9ee5f9df320e89c6698e0f3870f9?placeholderIfAbsent=true",
      title: "التسويق",
      altText: "التسويق",
      gridArea: "marketing",
    },
    {
      id: 3,
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9b650d5f11b680b1c30415af2322aeffb5694d69?placeholderIfAbsent=true",
      title: "التمويل و البنوك",
      altText: "التمويل و البنوك",
      gridArea: "finance",
    },
    {
      id: 4,
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/fa64d3a0b3b14bdbb7143fa6d8f9de7f7d8a3fd2?placeholderIfAbsent=true",
      title: "سلاسل الإمداد",
      altText: "سلاسل الإمداد",
      gridArea: "supply",
    },
    {
      id: 5,
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/2f33c53567f8bcc5b17b9f3ea7cecfcdce505cbc?placeholderIfAbsent=true",
      title: "إدارة الموارد البشرية",
      altText: "إدارة الموارد البشرية",
      gridArea: "hr",
    },
  ];

  return (
    <div dir="rtl" className="relative w-full max-w-7xl mx-auto px-4 py-12">
      <img
        src="/images/Ellipse 1446.svg"
        alt="mba program section bg"
        className="absolute top-0 left-[-120px]"
      />
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center md:text-right mb-4 sm:mb-6 md:mb-8">
        <span className="text-[#0047BA]">معًا نحو أعلى المناصب</span>
        <span className="text-[#00A651]"> بالسعودية!</span>
      </h1>
      <p className="text-center md:text-right text-xs sm:text-sm md:text-base leading-relaxed text-[#454545]">
        احصل على شهادة الماجستير المهني في إدارة الأعمال MBA المعتمدة من جامعة
        مارا للتكنولوجيا في ماليزيا واختر من بين 5 تخصصات متنوعة:
      </p>

      <div className="flex flex-col-reverse lg:flex-row gap-8 mt-12">
        {/* Right Side - Text Content */}
        <div className="w-full lg:w-1/3 space-y-4 md:space-y-6">
          {infoItems.map((item, index) => (
            <p
              key={index}
              className="text-sm md:text-base lg:text-sm leading-relaxed text-[#454545] text-center lg:text-right"
            >
              {item}
            </p>
          ))}
          <button className="bg-[#00A651] text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-[6px] text-base sm:text-lg font-bold w-full hover:bg-[#008c44] transition-colors mt-6 md:mt-8">
            سجل الآن وابدأ رحلتك!
          </button>
        </div>

        {/* Left Side - Grid Layout */}
        <div className="lg:w-2/3">
          <div
            className="grid gap-4"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gridTemplateRows: "repeat(6, 1fr)",
              gridColumnGap: "19px",
              gridRowGap: "23px",
            }}
          >
            {specializations.map((spec) => (
              <div
                key={spec.id}
                className="relative   h-full"
                style={{
                  ...(spec.gridArea === "finance" && {
                    gridArea: "1 / 1 / 3 / 2",
                  }),
                  ...(spec.gridArea === "supply" && {
                    gridArea: "3 / 1 / 5 / 2",
                  }),
                  ...(spec.gridArea === "hr" && {
                    gridArea: "5 / 1 / 7 / 2",
                  }),
                  ...(spec.gridArea === "business" && {
                    gridArea: "1 / 2 / 4 / 3",
                  }),
                  ...(spec.gridArea === "marketing" && {
                    gridArea: "4 / 2 / 7 / 3",
                  }),
                  
                }}
              >
                <div className="relative">
                  <div className=" overflow-hidden">
                    <img
                      src={spec.imageUrl}
                      alt={spec.altText}
                      className="w-full h-full object-cover rounded-0"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-[20px] md:rounded-[32px]">
                    <h3 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-center">
                      {spec.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
