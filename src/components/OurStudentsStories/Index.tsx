import React from "react";
import "./style.css";
import { FaStar } from "react-icons/fa";

interface TestimonialProps {
  text: string;
  authorName: string;
  authorTitle: string;
  authorImage: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  text,
  authorName,
  authorTitle,
  authorImage,
}) => {
  return (
    <div className="testimonial-card">
      <div className="star-rating">
        {[...Array(5)].map((_, index) => (
          <FaStar key={index} />
        ))}
      </div>
      <p className="testimonial-text">{text}</p>
      <div className="author-info">
        <img src={authorImage} alt={authorName} className="author-image" />
        <div className="author-details">
          <div className="author-name">{authorName}</div>
          <div className="author-title">{authorTitle}</div>
        </div>
      </div>
    </div>
  );
};

const Index = () => {
  const testimonials = [
    {
      text: "بصراحة، برنامج الماجستير كان أفضل قرار اتخذته! تعلمت مهارات جديدة ساعدتني أتطور وأرتقى في وظيفتي. أكثر شي عجبني إنه البرنامج مرن، قدرت أدرس واشتغل بنفس الوقت.",
      authorName: "محمد العتيبي",
      authorTitle: "مدير مشاريع",
      authorImage: "/images/Oval-2.png",
    },
    {
      text: "الماجستير كان تجربة رهيبة! المحتوى كان عملي وبسيط وساعدني أطور نفسي في شغلي. بعد ما خلصت البرنامج، حصلت على وظيفة براتب أحسن، وصرت أشتغل بثقة كبيرة.",
      authorName: "سارة القحطاني",
      authorTitle: "أخصائية تسويق رقمي",
      authorImage: "/images/Oval-1.png",
    },
    {
      text: "البرنامج غير حياتي! تعلمت أشياء ما كنت أتخيل إنها تفيدني بهالشكل في حياتي المهنية. بعد ما خلصت الماجستير، صرت مشرف في الشركة وأدير فريق كامل.",
      authorName: "عبدالله الدوسري",
      authorTitle: "مشرف عمليات",
      authorImage: "/images/Oval.png",
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-subtitle">أكثر من +150 ألف عميل راضيين</div>
      <h2 className="testimonials-title">
        قصص
        <p>نجاح</p>
        طلابنا
      </h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Index;
