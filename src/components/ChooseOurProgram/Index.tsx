import React from "react";
import "./style.css";

const chooseOurProgramData = [
  {
    id: 1,
    title: "فرص لزيادة الرواتب والترقيات.",
    description: "توفر فرص الراتب بعد البرنامج التعليمي",
    imageUrl: "./images/money.png",
    altText: "money",
    Shape: "./images/Ellipse 152.png",
  },
  {
    id: 2,
    title: "تطوير المهارات ",
    description: "مع اخذ اي برنامج تعليمي تزداد ثقتك  و تطويرك",
    imageUrl: "./images/positive-thinking.png",
    altText: "skills",
    Shape: "./images/Ellipse 151.png",
  },
  {
    id: 3,
    title: "شهادات معتمدة",
    description: "اكثر من 25+ شهادة معتمدة",
    imageUrl: "./images/Group-2.png",
    altText: "certificate",
    Shape: "./images/Ellipse 152.png",
  },
  {
    id: 4,
    title: "برامج مرنة تناسب حياتك.",
    description: "يمكنك ان توقف البرنامج و استكماله اي وقت",
    imageUrl: "./images/time-management.png",
    altText: "flexible",
    Shape: "./images/Ellipse 151.png",
  },
];
export const ChooseOurProgram = () => {
  return (
    <>
      <section className="relative choose-our-program-section">
        <div className="choose-our-program-content ">
          <img
            src="/images/ChooseOurProgram-side-shap.svg"
            alt="side shape in larg screen"
            className="absolute object-contain top-[0px] right-0 z-[0] max-sm:hidden h-[100%]"
          />
          <img
            src="/images/ChooseOurProgram-side-shap-small.svg"
            alt="side shape in small screen"
            className="absolute object-contain w-[80%] top-[0px] right-0 z-1 hidden max-sm:block"
          />

          <img
            src="/images/Ellipse 1590.svg"
            alt="top cerver shape in large screen"
            className="absolute object-contain max-sm:hidden top-[-146px] left-0 w-full z-10"
          />

          {/* make anthoe shap on small  */}
          <img
            src="/images/choose-our-program-top-cerve-small.svg"
            alt="top cerver shape on small screen"
            className="absolute object-contain max-sm:block  md:hidden top-[-50px] left-0 w-full z-10"
          />

          <img
            src="/images/Ellipse 153-1.svg"
            alt="bottom cerver shape"
            className="absolute object-contain bottom-[-100px] left-0 w-full max-sm:w-screen max-sm:object-cover z-10"
          />
          {/*  button cerver shape on small screen */}
          <img
            src="/images/choose-our-program-bottom-cerver-small.svg"
            alt="bottom cerver shape on small screen"
            className="absolute object-contain max-sm:block md:hidden bottom-[-50px] left-0 w-full z-10"
          />

          <div className="choose-our-program-first-part">
            <h1 className="choose-our-program-title">
              <span className="choose-our-program-title-first-part">
                ليش تختار
              </span>
              <span className="choose-our-program-title-second-part">
                {" "}
                برنامجنا؟
              </span>
            </h1>
            <p className="choose-our-program-description">
              "لأننا نوفر لك شهادة معتمدة دولياً، محتوى عملي يناسب سوق العمل،
              مرونة تامة في الدراسة، وأسعار ميسّرة مع خيارات تقسيط مريحة. كل هذا
              يساعدك على تحقيق أهدافك المهنية والشخصية بكل سهولة."
            </p>
          </div>

          <div className="choose-our-program-second-part">
            {chooseOurProgramData.map((item) => (
              <div
                key={item.id}
                className="choose-our-program-card"
                style={{ gridArea: item.altText }}
              >
                <img
                  src={item.Shape}
                  alt={item.altText}
                  className="choose-our-program-card-shape"
                />
                <img
                  src={item.imageUrl}
                  alt={item.altText}
                  className="choose-our-program-card-image"
                />

                <h2 className="choose-our-program-card-title">{item.title}</h2>
                <p className="choose-our-program-card-description">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
