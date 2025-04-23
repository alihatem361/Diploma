import React from "react";
import "./style.css";

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
      description:
        'تركز دورة "الإدارة الأعمال" على تزويد المشاركين بالمعارف والمهارات اللازمة لفهم وتطبيق المفاهيم والأساليب الحديثة في مجال الإدارة. تهدف هذه الدورة إلى تأهيل المديرين الجدد والمرشحين لشغل مناصب إدارية.',
    },
    {
      id: 2,
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/51636427a3ab9ee5f9df320e89c6698e0f3870f9?placeholderIfAbsent=true",
      title: "التسويق",
      altText: "التسويق",
      gridArea: "marketing",
      description:
        "تركز دورة التسويق على فهم سلوك المستهلك وتطوير استراتيجيات التسويق الفعالة. تغطي الدورة أحدث التقنيات والأدوات في التسويق الرقمي وإدارة العلامات التجارية.",
    },
    {
      id: 3,
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9b650d5f11b680b1c30415af2322aeffb5694d69?placeholderIfAbsent=true",
      title: "التمويل و البنوك",
      altText: "التمويل و البنوك",
      gridArea: "finance",
      description:
        "تقدم دورة التمويل والبنوك فهماً عميقاً للأسواق المالية والعمليات المصرفية. تشمل مواضيع مثل إدارة المخاطر، التحليل المالي، والاستثمار.",
    },
    {
      id: 4,
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/fa64d3a0b3b14bdbb7143fa6d8f9de7f7d8a3fd2?placeholderIfAbsent=true",
      title: "سلاسل الإمداد",
      altText: "سلاسل الإمداد",
      gridArea: "supply",
      description:
        "تغطي دورة سلاسل الإمداد جميع جوانب إدارة سلسلة التوريد، من التخطيط إلى التنفيذ. تركز على تحسين الكفاءة وتقليل التكاليف في العمليات اللوجستية.",
    },
    {
      id: 5,
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/2f33c53567f8bcc5b17b9f3ea7cecfcdce505cbc?placeholderIfAbsent=true",
      title: "إدارة الموارد البشرية",
      altText: "إدارة الموارد البشرية",
      gridArea: "hr",
      description:
        "تركز دورة إدارة الموارد البشرية على تطوير مهارات إدارة وتنمية الموظفين. تشمل مواضيع مثل التوظيف، التدريب، تقييم الأداء، وتطوير المواهب.",
    },
  ];

  return (
    <section className="MbaProgramSection relative bg-[#E8ECF4] pb-12">
      <img
        src="/images/Ellipse 158.svg"
        alt="shadow"
        className="MbaProgramSection-larg-shape"
      />
      <img
        src="/images/Ellipse 157.svg"
        alt="shadow"
        className="MbaProgramSection-larg-shape block md:hidden"
      />

      <div className="relative w-full max-w-7xl mx-auto px-8 md:px-4 pb-12 pt-[90px] md:pt-[180px]">
        <h1 className=" relative text-2xl sm:text-3xl md:text-4xl font-bold text-center md:text-right mb-4 sm:mb-6 md:mb-8">
          <span className="text-[#0047BA]">معًا نحو أعلى المناصب</span>
          <span className="text-[#00A651]"> بالسعودية!</span>
        </h1>
        <p className=" relative text-center md:text-right text-xs sm:text-sm md:text-base leading-relaxed text-[#454545]">
          احصل على شهادة الماجستير المهني في إدارة الأعمال MBA المعتمدة من جامعة
          مارا للتكنولوجيا في ماليزيا واختر من بين 5 تخصصات متنوعة:
        </p>
        <img
          src="/images/Ellipse 1446.svg"
          alt="mba program section bg"
          className="absolute top-[120px] left-[-106px] hidden md:block"
        />
        <img
          src="/images/MbaProgramSection-small-shap.svg"
          alt="mba program small bg"
          className="absolute top-[31px] left-[-22px] block md:hidden"
        />
        <div className="flex flex-col-reverse lg:flex-row-reverse gap-8 mt-12">
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
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5 ">
              {specializations.map((spec) => (
                <div
                  key={spec.id}
                  className={`relative h-full ${
                    spec.gridArea === "finance"
                      ? "md:col-start-3 md:col-end-5 md:row-start-1 md:row-end-3"
                      : spec.gridArea === "supply"
                      ? "md:col-start-3 md:col-end-5 md:row-start-3 md:row-end-5"
                      : spec.gridArea === "hr"
                      ? "md:col-start-3 md:col-end-5 md:row-start-5 md:row-end-7"
                      : spec.gridArea === "business"
                      ? "md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-4"
                      : "md:col-start-1 md:col-end-3 md:row-start-4 md:row-end-7"
                  }`}
                >
                  <div className="relative h-[200px] md:h-full">
                    <div className="h-full overflow-hidden rounded-[20px] md:rounded-[32px]">
                      <img
                        src={spec.imageUrl}
                        alt={spec.altText}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center rounded-[20px] md:rounded-[32px] p-4 transition-all duration-300 group hover:bg-opacity-75">
                      <h3 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-center mb-4">
                        {spec.title}
                      </h3>
                      <p className="text-white text-sm md:text-base text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {spec.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
