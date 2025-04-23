import React, { useState } from "react";
import { FlagIcon } from "./icons/FlagIcon";
import { DropdownIcon } from "./icons/DropdownIcon";
import { RequiredIcon } from "./icons/RequiredIcon";

export function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
  };

  return (
    <section className="w-full max-w-[390px] md:max-w-[580px] h-[79vh] md:h-[87vh] rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.1)] bg-[#FCFCFC] p-8 md:p-[61px] md:pt-[61px] md:pb-[147px] mx-auto">
      <div className="w-full text-center mb-10 text-right">
        <h2 className="font-bold text-2xl text-black">
          <span>سجل الآن و احصل علي</span>{" "}
          <span className="text-[#029843]">شهادة معتمدة</span>
        </h2>
        <p className="font-normal text-lg text-[#595959] mt-2.5">
          انضم إلى آلاف الأشخاص الذين طوروا مهاراتهم وحصلوا على شهادات معتمدة
          تعزز فرصهم الوظيفية. سجل الآن وابدأ رحلتك نحو النجاح!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-[22.86px]">
        {/* Name Field */}
        <div className="flex flex-col items-end gap-[9.144px]">
          <label htmlFor="name" className="font-normal text-base text-black">
            الاسم
          </label>
          <div className="flex items-center w-full shadow-[0_0.851px_1.701px_rgba(16,24,40,0.05)] bg-white rounded-md border-[0.851px] border-solid border-[#D0D5DD]">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="اكتب اسمك"
              value={formData.name}
              onChange={handleChange}
              className="flex-1 text-sm text-[#667085] px-[11.908px] py-[8.506px] border-[none] w-full outline-none"
            />
          </div>
        </div>

        {/* Phone Field */}
        <div className="flex flex-col items-end gap-[9.144px]">
          <label
            htmlFor="phone"
            className="font-normal text-base text-black flex items-center gap-1"
          >
            <RequiredIcon />
            <span>رقم الهاتف</span>
          </label>
          <div className="flex items-center w-full shadow-[0_0.851px_1.701px_rgba(16,24,40,0.05)] bg-white rounded-md border-[0.851px] border-solid border-[#D0D5DD]">
            <div className="flex items-center w-full">
              <FlagIcon />
              <DropdownIcon />
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="+05 (555) 000-0000"
                value={formData.phone}
                onChange={handleChange}
                className="flex-1 text-sm text-[#667085] px-[11.908px] py-[8.506px] border-[none] outline-none"
              />
            </div>
          </div>
        </div>

        {/* Email Field */}
        <div className="flex flex-col items-end gap-[9.144px]">
          <label htmlFor="email" className="font-normal text-base text-black">
            البريد الإلكتروني
          </label>
          <div className="flex items-center w-full shadow-[0_0.851px_1.701px_rgba(16,24,40,0.05)] bg-white rounded-md border-[0.851px] border-solid border-[#D0D5DD]">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="ex@example.com"
              value={formData.email}
              onChange={handleChange}
              className="flex-1 text-sm text-[#667085] px-[11.908px] py-[8.506px] border-[none] outline-none"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-[414px] h-[50px] text-white font-medium text-lg cursor-pointer bg-[#029843] mx-auto my-0 rounded-md max-md:w-full mt-5 flex items-center justify-center"
        >
          سجّل الآن وابدأ رحلتك!
        </button>
      </form>
    </section>
  );
}
