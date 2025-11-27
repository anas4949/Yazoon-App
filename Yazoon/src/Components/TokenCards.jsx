import React from "react";
import { motion } from "framer-motion";
import Zilliqa from "../assets/Zilliqa.png";
import Btc from "../assets/btc-cash.png";
import Chainlink from "../assets/Chainlink.png";

const TokenCards = () => {
  const cards = [
    {
      title: "KING OF THE HILL",
      img: Zilliqa,
      color: "cyan",
      border: "from-cyan-600 to-cyan-900",
      glow: "shadow-cyan-500/60",
      cap: "24.6M",
    },
    {
      title: "KING OF THE HILL",
      img: Btc,
      color: "green",
      border: "from-green-600 to-green-900",
      glow: "shadow-green-500/60",
      cap: "560.2M",
    },
    {
      title: "KING OF THE HILL",
      img: Chainlink,
      color: "purple",
      border: "from-purple-600 to-purple-900",
      glow: "shadow-purple-500/60",
      cap: "139.4M",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 py-10 bg-[#0b0b0b]">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          className={`bg-gradient-to-br ${card.border} p-[2px] rounded-2xl`}
        >
          <div className="bg-[#111111] p-5 rounded-2xl w-64 sm:w-60 md:w-64 text-center flex flex-col items-center justify-between min-h-[320px] sm:min-h-[300px]">
            
            
            <div
              className={`rounded-full bg-[#0b0b0b] p-4 mb-3 shadow-[0_0_25px_3px_rgba(0,0,0,0.4)] ${card.glow}`}
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-14 h-14 object-contain"
              />
            </div>

            
            <h3
              className={`text-lg font-bold mb-1 text-${card.color}-400 tracking-wide`}
            >
              {card.title}
            </h3>

            
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="text-[10px] bg-gray-800 px-2 py-0.5 rounded-full text-white font-medium">
                created by Anas
              </div>
              <div
                className={`text-[10px] bg-${card.color}-600 px-2 py-0.5 rounded-full text-white font-medium`}
              >
                in 5 min
              </div>
            </div>

            
            <p className="text-white font-bold text-sm">DRIVER (DRIVER)</p>
            <p className="text-gray-400 text-xs mb-3">Holozone [HOLO]</p>

            <p className="text-gray-400 text-[11px] leading-tight mb-4 px-2">
              Four is evolving — and the future is $FORM. To bring clarity and
              return Four to the community, we’re revising the token symbol to
              $FORM.
            </p>

            
            <button
              className={`bg-${card.color}-600 text-white px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-${card.color}-500 transition`}
            >
              Market Cap: {card.cap}
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TokenCards;
