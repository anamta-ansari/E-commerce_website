"use client"
import Image from "next/image"
import { useState } from "react";
export default function FAQ(){
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods including credit/debit cards, PayPal, and bank transfers.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Shipping typically takes 5-7 business days. Expedited options are available at checkout.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We accept returns within 30 days of purchase. Items must be in their original condition.",
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to over 100 countries worldwide. Additional fees may apply.",
    },
  ];

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

    return(
        <>
        {/* hero */}
              <div className="w-full h-[540px] relative">
          <Image
            src="/assets/Rectangle 1 (1).png"
            alt="Instagram background"
            layout="fill"
            objectFit="cover"
            className="-z-10"
          />
          <div className="flex flex-col items-center justify-center absolute inset-0 text-black">
            <Image src="/assets/Meubel House_Logos-05.png" alt="" width={77} height={77} />
            <h1 className="text-[48px] font-poppins font-bold">FAQs</h1>
            <p className="text-[14px] font-poppins">Home <span className="font-bold">FAQs</span></p>
          </div>
        </div>

        {/* Faq */}
<div className = "w-full">
        <div className=" mx-auto p-6  my-[5rem] 2xl:w-[1500px]">
      <h2 className="text-[42px] font-bold text-center mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-4">
            {/* Question */}
            <button
              className="w-full text-left flex justify-between items-center text-lg font-medium"
              onClick={() => handleToggle(index)}
            >
              {faq.question}
              <span className="ml-2 text-gray-500">
                {activeIndex === index ? "-" : "+"}
              </span>
            </button>
            {/* Answer */}
            {activeIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
</div>

        </>
    )
}