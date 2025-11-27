import { useState } from "react";
import { Plus, Minus } from "lucide-react"; 

const FAQ = () => {
  const faqs = [
    { question: "What is a cryptocurrency exchange?", answer: "Yozoon is a platform for buying, selling, and trading cryptocurrencies easily." },
    { question: "What products does Yozoon provide?", answer: "We provide crypto trading, tracking, and portfolio management tools." },
    { question: "How to buy Bitcoin and other cryptocurrencies on Binance?", answer: "You can link your Yozoon account with Binance and buy crypto directly." },
    { question: "How to track cryptocurrency prices?", answer: "Yozoon offers real-time tracking of major cryptocurrencies with charts." },
    { question: "How to trade cryptocurrencies on Yozoon?", answer: "Use our trading interface to buy/sell crypto securely and efficiently." },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8">FREQUENTLY ASKED QUESTIONS</h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className=" rounded-md p-4 bg-black text-white">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left focus:outline-none"
            >
              <span className="flex items-center space-x-2">
                <span className=" font-semibold">{index + 1}</span>
                <span>{faq.question}</span>
              </span>
              {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
            </button>
            {openIndex === index && (
              <p className="mt-3  text-gray-300">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
