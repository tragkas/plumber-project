"use client";

import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'What should I do if I have a plumbing emergency?',
    answer:
      'If you have a plumbing emergency, such as a burst pipe or a severe leak, call us immediately. We offer 24/7 emergency plumbing services and will send someone to assist you as quickly as possible.',
  },
  {
    question: 'How do I know if my pipes need to be replaced?',
    answer:
      'Signs that your pipes may need replacement include frequent leaks, low water pressure, discolored water, or strange noises in the plumbing system. Contact us for a thorough inspection to determine if replacement is necessary.',
  },
  {
    question: 'How often should I have my drains cleaned?',
    answer:
      'We recommend having your drains professionally cleaned at least once a year to prevent clogs and buildup. However, if you notice slow draining or foul odors, it’s best to schedule an appointment sooner.',
  },
  {
    question: 'What causes low water pressure in my home?',
    answer:
      'Low water pressure can be caused by several factors, including clogged pipes, a faulty water pressure regulator, or a leak in the plumbing system. Our team can diagnose the issue and provide a solution.',
  },
  {
    question: 'Do you offer free estimates for plumbing services?',
    answer:
      'Yes, we offer free, no-obligation estimates for all of our plumbing services. Simply contact us to schedule an appointment, and we will assess your needs and provide an accurate estimate.',
  },
  {
    question: 'How can I prevent frozen pipes in the winter?',
    answer:
      'To prevent frozen pipes, ensure that your home’s pipes are properly insulated, especially in unheated areas like attics and basements. During extremely cold weather, let faucets drip slightly to keep water flowing and avoid freezing.',
  },
  {
    question: 'Can you help with water heater repair?',
    answer:
      'Yes, we specialize in water heater repairs. If you’re experiencing issues like inconsistent temperature or no hot water, our team can inspect, repair, or replace your water heater to restore your hot water supply.',
  },
];

export function FAQSection() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenQuestion((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-gray-800 py-16 text-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Plumbing Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-gray-700 rounded-lg shadow-md overflow-hidden"
            >
              <button
                className="w-full text-left px-6 py-4 flex items-center justify-between hover:bg-gray-600 transition"
                onClick={() => toggleQuestion(index)}
              >
                <span className="font-semibold">{item.question}</span>
                {openQuestion === index ? (
                  <FaChevronUp className="h-5 w-5" />
                ) : (
                  <FaChevronDown className="h-5 w-5" />
                )}
              </button>
              {openQuestion === index && (
                <div className="px-6 py-4 bg-gray-800">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
