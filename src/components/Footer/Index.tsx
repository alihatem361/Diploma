import React from "react";
import "./style.css";

const Index = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src="/images/footer.svg" alt="Logo" className="logo" />
      </div>

      <div className="footer-text">
        أكاديمية اعمل بيزنس هي حلم لم يفارق عقل وقلب كل فرد منا في فريق اعمل
        بيزنس وسعينا جميعاً بكل قوة وإيمان إلى تحقيقه ونقله من عالم الأحلام إلى
        الواقع الملموس.
      </div>

      {/* line   */}
      <div className="line"></div>
    </footer>
  );
};

export default Index;
