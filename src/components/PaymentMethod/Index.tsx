import React from "react";
import "./style.css";

const PaymentMethod = () => {
  return (
    <section className="payment-section">
      {/* shadow in buttom in large screen */}
      <img
        src="/images/OurStudentsStories_buttom_shap.svg"
        alt="shadow"
        className="bottom-shadow"
      />

      {/* shadow in buttom in small screen */}
      <img
        src="/images/OurStudentsStories_buttom_shap.svg"
        alt="shadow"
        className="bottom-shadow-small"
      />

      <div className="content-container">
        <div className="text-content">
          <h2>الدفع بالطريقة المناسبة لك!</h2>
          <p>
            اعمل بيزنس بتوفرلك طرق دفع كتيرة حتى تختار ما يناسبك من اي طريقة و
            تسهيل الدفع للتعليم الفوري و عدم التعقيد
          </p>
          <button className="cta-button">احجز مكانك معانا!</button>
        </div>
        <div className="cards-container">
          <div className="card mastercard">
            <div className="refund-badge">
              Master
              <br />
              Card
            </div>
            <img src="/images/mastercard-logo.png" alt="Mastercard" />
          </div>
          <div className="card visa">
            <div className="refund-badge">Visa</div>
            <img src="/images/visa-logo.png" alt="Visa" />
          </div>
          <div className="card cash">
            <div className="refund-badge">
              دفع
              <br />
              كامل
            </div>
            <img src="/images/cash-icon.png" alt="Cash Payment" />
          </div>
          <div className="card coins">
            <div className="refund-badge">
              ١٠٠٪
              <br />
              استرجاع
            </div>
            <img src="/images/refund-icon.png" alt="Refund" />
          </div>
        </div>

        <button className="cta-button-small">احجز مكانك معانا!</button>
      </div>
    </section>
  );
};

export default PaymentMethod;
