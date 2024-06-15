import React, { useState } from 'react';
import { TiMinus } from "react-icons/ti";
import { FaPlus } from "react-icons/fa6";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is digital marketing solution?",
      answer: "Our success in creating business solutions is due in large part especially to talented and highly committed team. Having these marketplace to your branded skilled team of designers and developers. Our modern sales CRM frees you to maximize productivity, maintain pipeline visibility, and grow revenue."
    },
    {
      question: "How to improve your online business?",
      answer: "Our success in creating business solutions is due in large part especially to talented and highly committed team. Having these marketplace to your branded skilled team of designers and developers. Our modern sales CRM frees you to maximize productivity, maintain pipeline visibility, and grow revenue."
    },
    {
      question: "How to improve marketing strategy?",
      answer: "Our success in creating business solutions is due in large part especially to talented and highly committed team. Having these marketplace to your branded skilled team of designers and developers. Our modern sales CRM frees you to maximize productivity, maintain pipeline visibility, and grow revenue."
    },
    {
      question: "How to convince for starting business?",
      answer: "Our success in creating business solutions is due in large part especially to talented and highly committed team. Having these marketplace to your branded skilled team of designers and developers. Our modern sales CRM frees you to maximize productivity, maintain pipeline visibility, and grow revenue."
    }
  ];

  return (
    <div className="container px-6 py-12 mx-auto">
      <div className="mt-8 space-y-8 lg:mt-12">
        {faqs.map((faq, index) => (
          <div key={index} className="p-8 bg-white shadow-lg rounded-lg dark:bg-gray-800">
            <button
              className="flex items-center justify-between w-full"
              onClick={() => toggleFAQ(index)}
            >
              <h1 className="font-semibold text-gray-700 dark:text-white">{faq.question}</h1>
              {openIndex === index ? <TiMinus /> : <FaPlus />}
            </button>
            {openIndex === index && (
              <p className="mt-6 text-sm text-gray-500 dark:text-gray-300">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
