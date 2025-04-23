import React from "react";

const certificates = [
  {
    id: 1,
    src: "https://cdn.builder.io/api/v1/image/assets/8db68aff16c541a7b1ccc14db1396f19/d9d65cb7b71a198171bdf00faec3f05beb7c802b?placeholderIfAbsent=true",
    alt: "Certificate 1",
    width: "70px",
    aspect: "1.01",
    padding: "p-[19px]",
  },
  {
    id: 2,
    src: "https://cdn.builder.io/api/v1/image/assets/8db68aff16c541a7b1ccc14db1396f19/6dc4dfff03de415a96fca8951dd8e78542b5df4f?placeholderIfAbsent=true",
    alt: "Certificate 2",
    width: "w-20",
    aspect: "1",
    padding: "p-3.5",
  },
  {
    id: 3,
    src: "https://cdn.builder.io/api/v1/image/assets/8db68aff16c541a7b1ccc14db1396f19/07388f2190e40a4dbee786e893c2eb363070182c?placeholderIfAbsent=true",
    alt: "Certificate 3",
    width: "w-[72px]",
    aspect: "1.01",
    padding: "p-[18px]",
  },
  {
    id: 4,
    src: "https://cdn.builder.io/api/v1/image/assets/8db68aff16c541a7b1ccc14db1396f19/e5229036f0066f9fa09660b3de1f2d875d150aa6?placeholderIfAbsent=true",
    alt: "Certificate 4",
    width: "w-[86px]",
    aspect: "1.45",
    padding: "px-2.5",
  },
  {
    id: 5,
    src: "https://cdn.builder.io/api/v1/image/assets/8db68aff16c541a7b1ccc14db1396f19/54c7906851fda3ecb72108569fd2b124f7663914?placeholderIfAbsent=true",
    alt: "Certificate 5",
    width: "w-[83px]",
    aspect: "1",
    padding: "p-3",
  },
  {
    id: 6,
    src: "https://cdn.builder.io/api/v1/image/assets/8db68aff16c541a7b1ccc14db1396f19/367d0d2ab6b7610b6846837062e81f8783235319?placeholderIfAbsent=true",
    alt: "Certificate 6",
    width: "w-20",
    aspect: "1",
    padding: "p-[13px]",
  },
];

export function CertificatesSection() {
  return (
    <section>
      <div className="relative bg-[#154394] flex mt-[-43px] w-full flex-col overflow-hidden items-center justify-center px-[70px] py-[115px] max-md:max-w-full max-md:px-5 max-md:py-[120px]">
        <div className="">
          <img
            src="/images/Ellipse 146.svg"
            alt="Ellipse 146"
            className="absolute object-contain top-[0px] right-0 z-1 max-sm:hidden"
          />
          <img
            src="/images/Ellipse 147.svg"
            alt="Ellipse 147"
            className="absolute object-contain w-full top-[0px] right-0 z-1 hidden max-sm:block"
          />
        </div>

        <img
          src="/images/Ellipse 150.svg"
          alt="Ellipse 150"
          className="absolute object-contain max-sm:hidden top-[-111px] left-0 w-full z-10"
        />
        <img
          src="/images/CertificatesSection-small-shap.svg"
          alt="Ellipse 150"
          className="absolute bottom-[-50px] left-0 block md:hidden w-full z-[0]"
        />

        <img
          src="/images/Ellipse 152.svg"
          alt="Ellipse 152"
          className="absolute object-contain bottom-[-73px] left-0 w-full max-sm:w-screen max-sm:object-cover z-10"
        />
        <img
          src="/images/Ellipse 162.svg"
          alt="Ellipse 162"
          className="absolute object-contain top-[0px] left-0 w-full max-sm:w-screen max-sm:object-cover z-10 hidden "
        />

        <div className=" mb-[-23px] w-full max-w-[1106px] max-md:max-w-full max-md:mb-2.5">
          <div className="gap-5 flex max-md:flex-col-reverse max-md:items-stretch">
            <div className=" w-2/5 max-md:w-full max-md:ml-0">
              <div className="flex w-full flex-col self-stretch items-center my-auto max-md:mt-10">
                <div className="flex w-full max-w-[366px] items-center gap-[19px] justify-center flex-wrap">
                  {certificates.map((cert) => (
                    <div
                      key={cert.id}
                      className={`relative bg-[rgba(252,252,252,1)] self-stretch flex gap-[5px] overflow-hidden w-[108px] h-[108px] my-auto ${cert.padding} rounded-[13px]`}
                    >
                      <img
                        src={cert.src}
                        alt={cert.alt}
                        className={`aspect-[${cert.aspect}] object-contain ${cert.width} relative z-12`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className=" w-3/5 ml-5 max-md:w-full max-md:ml-0">
              <div className=" relative flex items-end w-full flex-col max-md:max-w-full max-md:mt-10 z-12">
                <div className="flex w-[509px] max-w-full flex-col items-stretch text-right rounded-[0px_0px_0px_0px]">
                  <h2 className="text-[#FCFCFC] text-[34px] font-medium leading-none">
                    التوصيات و الإعتمادات
                  </h2>
                  <p className="text-[#F0F0F0] text-lg font-normal leading-8 mt-6 max-md:max-w-full">
                    تُعد التوصيات والإعتمادات عاملين رئيسيين في بناء ثقة
                    المتعلمين وضمان جودة أي برنامج تعليمي و اعتماد الشهادة من
                    هيئات تعليمية دولية ومحلية. توافق البرنامج مع معايير التعليم
                    والتدريب المهني و إمكانية استخدام الشهادة في الترقيات أو
                    التقديم على وظائف جديدة.
                  </p>
                </div>
                <div className="bg-[#02B34F] flex gap-4 text-sm text-[#E8ECF4] font-semibold text-center leading-none mt-2 rounded-md">
                  <button
                    className="self-stretch shadow-[0px_1px_4px_0px_rgba(25,33,61,0.08)] gap-[3px] px-[18px] py-[15px] rounded-md"
                    aria-label="احجز مكانك معانا"
                  >
                    احجز مكانك معانا!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
