"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How fresh are the meals?",
      answer: "All meals are prepared fresh daily in our commercial kitchen. We deliver them each morning, ensuring you receive meals that were made just hours before delivery. No frozen meals, ever.",
    },
    {
      question: "Can I customize my meals?",
      answer: "Absolutely! You can choose from our extensive menu, specify dietary restrictions, and even request custom preparations for Executive plan members. We accommodate allergies, preferences, and specific nutritional needs.",
    },
    {
      question: "What areas do you deliver to?",
      answer: "We currently deliver to all major metropolitan areas. Enter your zip code when signing up to confirm delivery availability. We're constantly expanding our delivery zones.",
    },
    {
      question: "How do I pause or cancel?",
      answer: "You can pause or cancel your subscription anytime through your account dashboard. Changes take effect from the next billing cycle. No cancellation fees, no questions asked.",
    },
    {
      question: "What if I'm not home for delivery?",
      answer: "Our meals are delivered in insulated, tamper-proof containers that keep food fresh for hours. You can also specify delivery instructions or opt for our smart lockbox service.",
    },
    {
      question: "Are the containers recyclable?",
      answer: "Yes! All our packaging is either recyclable or compostable. We're committed to minimizing our environmental impact and offer a container return program for additional sustainability.",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about Food Plan Ltd
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-all duration-300"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors duration-200"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-serif text-gray-900">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div
                className={`px-6 bg-gray-50 transition-all duration-300 ${
                  openIndex === index ? "py-4" : "max-h-0 overflow-hidden"
                }`}
              >
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}