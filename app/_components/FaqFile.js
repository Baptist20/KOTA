"use client";
import { useState } from "react";

const faqs = [
  {
    category: "Courses",
    questions: [
      {
        question: "What courses are available?",
        answer:
          "We offer courses on blockchain, smart contracts, DeFi, and Web3 development.",
      },
      {
        question: "Are the courses beginner-friendly?",
        answer:
          "Yes, we provide beginner to advanced-level content to support all learners.",
      },
    ],
  },
  {
    category: "Learning Process",
    questions: [
      {
        question: "How do I access my course materials?",
        answer:
          "You can access our Free Courses at the free courses page or contact u through the contact page to get our exclusive courses and an online tutoring class.",
      },
      {
        question: "Can I learn at my own pace?",
        answer:
          "Yes! Our courses are self-paced, allowing you to learn on your schedule.",
      },
    ],
  },
  {
    category: "Site Navigation",
    questions: [
      {
        question: "How do I navigate the platform?",
        answer:
          "Use the main menu to access courses, your dashboard, and support.",
      },
      {
        question: "Where can I contact support?",
        answer:
          "You can contact support via the 'Help' section in your dashboard.",
      },
    ],
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-3xl mx-auto p-6 py-24 sm:py-32">
      <h2 className="text-3xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>
      {faqs.map((category, catIndex) => (
        <div key={catIndex} className="mb-6">
          <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
          {category.questions.map((item, index) => {
            const isOpen = openIndex === `${catIndex}-${index}`;
            return (
              <div key={index} className="border-b border-gray-300">
                <button
                  className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
                  onClick={() => toggleAccordion(`${catIndex}-${index}`)}
                >
                  <span>{item.question}</span>
                  <span>{isOpen ? "-" : "+"}</span>
                </button>
                {isOpen && (
                  <p className="p-4 bg-gray-100 rounded-md">{item.answer}</p>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </section>
  );
}
