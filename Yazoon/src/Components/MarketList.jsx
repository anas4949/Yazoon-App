import React, { useState } from "react";
import { Zap, X } from "lucide-react";
import btcLogo from "../assets/bitcoin-imag.svg";
import image2 from "../assets/solana-sol-logo.png";

const coins = [
  { symbol: "BTC", name: "Bitcoin", holders: "Qm4 dev", mcap: "$97,040.15", change: -0.48, traders: "GR7", action: "BUY" },
  { symbol: "ETH", name: "Ethereum", holders: "Qm9 dev", mcap: "$51,000.00", change: 1.12, traders: "GD3", action: "BUY" },
  { symbol: "SOL", name: "Solana", holders: "QA2 dev", mcap: "$18,500.00", change: 0.33, traders: "RB8", action: "BUY" },
  { symbol: "BNB", name: "Binance", holders: "Qm7 dev", mcap: "$67,800.00", change: -0.82, traders: "JK2", action: "BUY" },
  { symbol: "DOGE", name: "Dogecoin", holders: "Qm5 dev", mcap: "$9,540.00", change: 0.56, traders: "TT1", action: "BUY" },
];

const MarketList = () => {
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [showDrawer, setShowDrawer] = useState(false);

  const openDrawer = (coin) => {
    setSelectedCoin(coin || { symbol: "SOL", name: "Solana" });
    setShowDrawer(true);
  };

  const closeDrawer = () => {
    setShowDrawer(false);
    setSelectedCoin(null);
  };

  return (
    <section className="w-full bg-[#1c1e24] rounded-2xl p-4 md:p-6 text-white shadow-lg mt-6 relative overflow-hidden">
      {/* Header */}
      <div className="flex flex-wrap justify-between items-center mb-4 gap-3">
        <div></div>
        <div className="flex items-center gap-3">
          <Zap
            size={18}
            className="text-green-400 cursor-pointer hover:scale-110 transition-transform"
            onClick={() => openDrawer()}
          />
          <span
            onClick={() => openDrawer()}
            className="font-semibold text-green-400 text-base sm:text-lg cursor-pointer hover:text-green-300"
          >
            Quick Buy
          </span>
          <button
            onClick={() => openDrawer()}
            className="bg-gray-800 px-2 py-1 rounded-md border border-yellow-400 text-yellow-400 text-sm flex items-center gap-1 hover:bg-yellow-500 hover:text-black transition"
          >
            <img src={image2} alt="SOL" className="w-4 h-4" />
            0.1
          </button>
        </div>
      </div>

      
      <div className="hidden md:grid grid-cols-6 text-sm font-semibold text-gray-300 border-b border-gray-700 pb-2 mb-2">
        <span className="text-lg text-white">Popular</span>
        <span className="text-lg text-gray-500">New Listing</span>
        <span className="text-lg text-white">Holders</span>
        <span className="text-lg text-white">Mcap</span>
        <span className="text-lg text-white">Traders</span>
        <span className="text-sm text-right text-gray-300">View All 350+ Coins</span>
      </div>

    
      <div className="space-y-3">
        {coins.map((coin, index) => (
          <div
            key={index}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 items-center gap-3 py-3 px-3 bg-[#2a2d34] rounded-xl hover:bg-[#333640] transition"
          >
            <div className="flex items-center gap-2">
              <img src={btcLogo} alt={coin.symbol} className="w-8 h-8 sm:w-9 sm:h-9" />
              <div>
                <p className="font-semibold text-base">{coin.symbol}</p>
                <p className="text-xs text-gray-400">{coin.name}</p>
              </div>
            </div>

            <span className="text-gray-400 hidden md:block">{coin.name.toUpperCase()}</span>
            <span className="text-gray-400 hidden md:block">{coin.holders}</span>

            <div className="flex md:block justify-between sm:justify-start items-center">
              <p className="text-sm sm:text-base">{coin.mcap}</p>
              <p className={`text-sm md:mt-1 ${coin.change > 0 ? "text-green-400" : "text-red-500"}`}>
                {coin.change > 0 ? "+" : ""}
                {coin.change}%
              </p>
            </div>

            <div className="hidden md:block">
              <p>{coin.traders}</p>
              <p className="text-green-400 font-semibold">{coin.action}</p>
            </div>

            <div className="flex justify-start sm:justify-end">
              <button
                onClick={() => openDrawer(coin)}
                className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold text-sm flex items-center gap-1 hover:bg-yellow-500 hover:scale-105 transition-transform w-full sm:w-auto justify-center"
              >
                <Zap size={16} />
                Quick Buy
              </button>
            </div>
          </div>
        ))}
      </div>

      
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-500 ease-in-out ${
          showDrawer ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeDrawer}
      ></div>

      <div
        className={`fixed top-0 right-0 h-full w-[75%] sm:w-[320px] z-50 bg-[#1a1b20]/90 backdrop-blur-2xl border-l border-yellow-400/30 shadow-[0_0_20px_rgba(255,215,0,0.15)] rounded-l-2xl transition-transform duration-500 ease-in-out ${
          showDrawer ? "translate-x-0" : "translate-x-full"
        }`}
      >
        
        <div className="flex justify-between items-center px-5 py-4 border-b border-yellow-400/10">
          <h2 className="text-lg font-semibold text-yellow-400 flex items-center gap-2">
            <Zap size={18} /> Quick Buy
          </h2>
          <button onClick={closeDrawer}>
            <X size={22} className="text-gray-400 hover:text-white transition" />
          </button>
        </div>

        
        <div className="p-5 space-y-5 overflow-y-auto h-[calc(100%-110px)]">
          
          <div className="bg-[#24252b]/60 p-4 rounded-xl border border-yellow-400/10 shadow-inner">
            <p className="text-xs text-gray-400 mb-2">You Buy</p>
            <div className="flex items-center justify-between bg-[#1c1d23]/90 rounded-lg border border-yellow-400/10 p-2">
              <input
                type="number"
                placeholder="0"
                className="bg-transparent w-full outline-none text-lg text-white placeholder-gray-500"
              />
              <div className="flex items-center gap-1 text-yellow-400">
                <img src={btcLogo} alt="coin" className="w-5 h-5" />
                {selectedCoin?.symbol || "BTC"}
              </div>
            </div>
            <div className="flex gap-2 mt-3">
              {["0.01", "0.05", "0.5", "1"].map((amt) => (
                <button
                  key={amt}
                  className="flex-1 bg-[#1b1c21] border border-yellow-400/10 rounded-md py-2 text-sm text-yellow-300 hover:bg-yellow-400 hover:text-black hover:shadow-[0_0_10px_rgba(255,215,0,0.3)] transition"
                >
                  {amt}
                </button>
              ))}
            </div>
          </div>

         
          <div className="bg-[#24252b]/60 p-4 rounded-xl border border-yellow-400/10 shadow-inner">
            <p className="text-sm text-gray-300 font-semibold mb-2">TP (Take Profit)</p>
            <input
              type="text"
              placeholder="Enter take profit ratio (%)"
              className="w-full bg-[#1b1c21]/80 text-sm p-2 rounded-md border border-yellow-400/10 outline-none focus:border-yellow-400 transition placeholder-gray-500 text-gray-200"
            />
            <p className="text-xs text-gray-500 mt-2">Estimated Profit --</p>
          </div>

         
          <div className="bg-[#24252b]/60 p-4 rounded-xl border border-yellow-400/10 shadow-inner">
            <p className="text-sm text-gray-300 font-semibold mb-2">SL (Stop Loss)</p>
            <input
              type="text"
              placeholder="Enter stop loss ratio (%)"
              className="w-full bg-[#1b1c21]/80 text-sm p-2 rounded-md border border-yellow-400/10 outline-none focus:border-yellow-400 transition placeholder-gray-500 text-gray-200"
            />
            <p className="text-xs text-gray-500 mt-2">Estimated Loss --</p>
          </div>
        </div>

        
        <div className="p-4 border-t border-yellow-400/10 bg-[#1c1d23]/70 backdrop-blur-xl relative overflow-hidden">
          <button
            onClick={closeDrawer}
            className="w-full py-2 rounded-lg font-semibold bg-yellow-400 text-black hover:bg-yellow-500 transition-all transform animate-bounce-slow"
          >
            Save
          </button>
        </div>
      </div>

      
      <style>
        {`
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
          }
          .animate-bounce-slow {
            animation: bounce-slow 2s infinite ease-in-out;
          }
        `}
      </style>
    </section>
  );
};

export default MarketList;
