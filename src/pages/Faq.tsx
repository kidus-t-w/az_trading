import { useState } from "react";
import PageTitle from "../components/PageTitle";

const faqData = [
  {
    question: "How can I get your Price List?",
    answer:
      "You can get our price list by contacting our sales team through email or phone.",
  },
  {
    question: "Are you factory or trading company?",
    answer:
      "We are a factory with our own production line and also have a trading department.",
  },
  {
    question:
      "So many tea types, how can I distinguish from them and pick up the target tea product?",
    answer:
      "Our experts can guide you through the selection process based on your requirements.",
  },
  {
    question: "How can I place an order?",
    answer: "You can place an order by contacting our sales team directly.",
  },
  {
    question:
      "Can I use my own logo or private label on your products or packages?",
    answer: "Yes, we offer customization options for logos and labels.",
  },
  {
    question: "How to confirm the quality with us before start to produce?",
    answer:
      "We provide samples for quality confirmation before mass production.",
  },
  {
    question: "What is the payment terms?",
    answer:
      "Our payment terms are flexible and can be discussed with our sales team.",
  },
  {
    question: "What is the production and delivery time?",
    answer:
      "Production and delivery times depend on the order size and customization requirements.",
  },
];

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full text-left px-4 py-2 text-gray-700 flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <div className="px-4 py-2 text-gray-600">
          {answer}
        </div>
      )}
    </div>
  );
};
export default function Faq() {
  return (
    <div>
      <PageTitle title="FAQ" />
      <div className="container mx-auto my-10 p-4 bg-white shadow-lg rounded-lg">
        {faqData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
}
