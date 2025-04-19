import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "How does the AI generate content?",
    answer:
      "Our AI analyzes your brand tone and target audience to generate captions, hashtags, and content ideas tailored to your voice.",
  },
  {
    question: "Can I connect multiple platforms?",
    answer:
      "Yes! You can connect Instagram, Twitter, LinkedIn, Facebook, and more – all managed from one dashboard.",
  },
  {
    question: "Is scheduling automatic?",
    answer:
      "Absolutely. Just create your content and our Smart Scheduler posts it at the best times for each platform.",
  },
  {
    question: "Will it maintain my brand's voice?",
    answer:
      "Yes. Our Persona Consistency tool ensures all your content aligns with your digital identity.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-900 py-20 px-6" id="faq">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-white mb-10">
          Frequently Asked <span className="text-indigo-600">Questions</span>
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-800 rounded-xl p-5 transition-all duration-300 hover:shadow-md bg-gray-800"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between text-left"
              >
                <span className="text-lg font-medium text-white">{faq.question}</span>
                <FaChevronDown
                  className={`text-indigo-600 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`mt-3 text-gray-400 text-sm transition-all duration-300 ${
                  openIndex === index ? "block" : "hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
