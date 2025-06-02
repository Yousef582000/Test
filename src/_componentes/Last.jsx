"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import fq from "../../public/images/faq.png";
import helpImage from "../../public/images/faq1.png";

const questions = [
  {
    id: 1,
    title: "ما هو المُخدّم الافتراضي المخصص (VPS)؟",
    answer:
      "المخدم الافتراضي هو مُخدّم مقسم إلى بيئات استضافة منفصلة تمامًا...",
  },
  {
    id: 2,
    title: "متى يجب علي استخدام استضافة VPS بدلًا من الاستضافة المشتركة؟",
    answer: "عندما تحتاج موارد مخصصة وأداء أعلى لموقعك أو تطبيقك.",
  },
  {
    id: 3,
    title: "ما الفرق بين المُخدّم الافتراضي والمُخدّم المخصص؟",
    answer: "المخدم المخصص يقدم موارد فعلية كاملة، بينما VPS يشارك الجهاز مع مستخدمين آخرين.",
  },
  {
    id: 4,
    title: "ماهي المواقع المتاحة لاستضافة VPS؟",
    answer: "منصة مثل DigitalOcean, Linode, Vultr, وغيرها تقدم خيارات قوية.",
  }
];

const FAQItem = ({ question, isOpen, toggle }) => (
  <>
    <div
      className="w-full flex justify-between gap-2.5 px-6 sm:px-8 items-center py-5 cursor-pointer"
      onClick={toggle}
    >
      <i className={`text-3xl rounded-3xl fa-solid ${isOpen ? "fa-minus" : "fa-plus"}`}></i>
      <h3 className="text-xl font-semibold">{question.title}</h3>
    </div>
    <div
      className={`px-6 sm:px-8 overflow-hidden transition-all duration-500 ${
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <p className="text-right w-full py-4">{question.answer}</p>
    </div>
  </>
);

const Last = () => {
  const [openQuestionId, setOpenQuestionId] = useState(null);

  const toggleQuestion = (id) => {
    setOpenQuestionId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full py-9 flex flex-col lg:flex-row gap-8 items-start justify-center px-4">
      
      {/* الأسئلة */}
      <div className="w-full lg:w-9/12 shadow-2xl rounded-3xl bg-white">
        {questions.map((q) => (
          <FAQItem
            key={q.id}
            question={q}
            isOpen={openQuestionId === q.id}
            toggle={() => toggleQuestion(q.id)}
          />
        ))}
      </div>

      {/* الصور الجانبية */}
      <div className="w-full lg:w-1/4 flex flex-col items-center gap-6">
        <div className="w-56 flex flex-col rounded-xl justify-center bg-white shadow-2xl h-72 hover:scale-105 cursor-pointer hover:shadow-blue-500 transition-all">
          <Image className="mx-auto" src={fq} alt="faq" />
          <h2 className="text-center mt-2.5 text-2xl">الأسئلة الشائعة</h2>
        </div>
        <div className="w-56 flex flex-col rounded-xl justify-center bg-white shadow-2xl h-72 hover:scale-105 cursor-pointer hover:shadow-blue-500 transition-all">
          <Image className="mx-auto" src={helpImage} alt="help" />
          <h2 className="text-center mt-2.5 text-2xl">مركز المساعدة</h2>
        </div>
      </div>
    </div>
  );
};

export default Last;
