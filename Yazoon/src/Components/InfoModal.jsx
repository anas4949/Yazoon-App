import { useState } from "react";
import { X } from "lucide-react";

export default function InfoModal({ data, onClose }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/70 backdrop-blur-md z-[10000] animate-fade-in">
      <div className="bg-[#1a1a1a] w-[90%] max-w-lg rounded-2xl p-6 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-yellow-400 transition"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-semibold text-center text-yellow-400 mb-4">
          {data.title}
        </h2>

        {data.steps.map((step, i) => (
          <div key={i} className="bg-[#111] rounded-xl mb-3 overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full text-left px-5 py-3 font-semibold flex justify-between items-center text-white"
            >
              {step.title}
              <span>{openIndex === i ? "−" : "+"}</span>
            </button>
            {openIndex === i && (
              <div className="px-6 pb-4 text-sm text-gray-400 space-y-1">
                {step.desc.map((line, j) => (
                  <p key={j}>{line}</p>
                ))}
              </div>
            )}
          </div>
        ))}

        <div className="text-center mt-6">
          <button onClick={onClose} className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-2 rounded-xl">
            Got it!
          </button>
        </div>
      </div>
    </div>
  );
}
