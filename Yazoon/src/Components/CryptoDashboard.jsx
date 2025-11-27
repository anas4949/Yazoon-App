import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, X } from "lucide-react";
import image1 from "../assets/coin1.png";
import image2 from "../assets/coin2.png";
import image3 from "../assets/cow3.png";
import image4 from "../assets/Zilliqa.png";
import btcLogo from "../assets/coin1.png";

const localImages = [image1, image2, image3, image4];

const cardData = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: [
    "DRIVER",
    "TEST",
    "COW",
    "KING",
    "DOGE",
    "PEPE",
    "SHIB",
    "XRP",
    "ADA",
    "LINK",
    "AVAX",
    "MATIC",
  ][i],
  symbol: [
    "DRV",
    "TST",
    "COW",
    "KING",
    "DOGE",
    "PEPE",
    "SHIB",
    "XRP",
    "ADA",
    "LINK",
    "AVAX",
    "MATIC",
  ][i],
  creator: "FaYr5e",
  replies: 19,
  marketCap: "4.89K",
  change: "+15%",
  image: localImages[i % localImages.length],
}));

export default function CryptoDashboard() {
  const [animationOn, setAnimationOn] = useState(true);
  const [trending, setTrending] = useState("Dog");
  const [search, setSearch] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let particles = [];
    const colors = ["#FFD700", "#00FFFF", "#FFFFFF"];
    const numParticles = 40;

    function init() {
      particles = [];
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 2,
          dx: (Math.random() - 0.5) * 0.3,
          dy: (Math.random() - 0.5) * 0.3,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      requestAnimationFrame(draw);
    }

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    }

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const filteredCards = cardData.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.symbol.toLowerCase().includes(search.toLowerCase())
  );

  const openDrawer = () => setDrawerOpen(true);
  const closeDrawer = () => setDrawerOpen(false);

  return (
    <div className="relative min-h-screen bg-[#121317] text-white px-10 md:px-20 py-10 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20"
      ></canvas>

      <div className="relative flex flex-wrap items-center justify-between gap-4 mb-8 z-10">
        <div className="bg-[#1c1e24] rounded-xl px-3 py-1.5 text-sm flex items-center gap-2 border border-gray-700 cursor-pointer">
          Sort:{" "}
          <span className="font-semibold text-yellow-400">Market cap</span>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400">Animation</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={animationOn}
                onChange={() => setAnimationOn(!animationOn)}
                className="sr-only peer"
              />
              <div className="w-9 h-4 bg-gray-600 rounded-full peer peer-checked:bg-yellow-400 transition"></div>
              <span
                className={`absolute left-1 top-[2px] w-3 h-3 bg-white rounded-full transition-transform ${
                  animationOn ? "translate-x-5" : ""
                }`}
              ></span>
            </label>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400">Trending:</span>
            {["Dog", "Cat"].map((t) => (
              <button
                key={t}
                onClick={() => setTrending(t)}
                className={`px-2.5 py-1 rounded-md text-xs font-semibold transition ${
                  trending === t
                    ? "bg-yellow-400 text-black"
                    : "bg-gray-800 hover:bg-gray-700"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <button
            onClick={openDrawer}
            className="bg-green-600/20 border border-green-500/30 text-green-300 px-3 py-1.5 rounded-md flex items-center gap-1 hover:bg-green-500/30 transition text-sm"
          >
            <Zap size={14} /> Quick Buy
          </button>

          <div className="flex items-center bg-[#1c1e24] border border-yellow-400 rounded-lg overflow-hidden text-sm">
            <input
              type="text"
              placeholder="Search token..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent px-3 py-1.5 outline-none text-white w-32 sm:w-40"
            />
            <button className="bg-yellow-400 text-black px-3 py-1.5 font-semibold hover:bg-yellow-500 transition">
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 z-10">
        {filteredCards.map((card) => (
          <div
            key={card.id}
            className={`relative bg-[#1b1d22]/90 border border-gray-700 rounded-xl p-3 hover:shadow-[0_0_15px_rgba(255,215,0,0.25)] transition-all duration-300 ${
              animationOn ? "hover:-translate-y-2" : ""
            }`}
          >
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={card.image}
                alt={card.name}
                className={`w-full h-32 object-contain rounded-lg bg-[#0e0f12] transition-transform duration-500 ${
                  animationOn ? "hover:scale-105 animate-pulse-slow" : ""
                }`}
              />
              <span className="absolute top-2 right-2 text-green-400 text-[11px] font-semibold bg-black/40 px-1.5 py-0.5 rounded-md">
                {card.change}
              </span>
            </div>

            <div className="mt-3 space-y-1">
              <h3 className="text-base font-bold">
                {card.name}{" "}
                <span className="text-gray-400 text-xs">({card.symbol})</span>
              </h3>
              <p className="text-[11px] text-gray-400">
                created by{" "}
                <span className="text-cyan-400 font-semibold">
                  {card.creator}
                </span>
              </p>
              <div className="flex justify-between text-[11px] text-gray-400 mt-1">
                <span>Replies: {card.replies}</span>
                <span>Holozone [HOLO]</span>
              </div>
              <p className="text-[11px] text-gray-400 mt-1">
                Future is <span className="text-yellow-400">$FORM</span>.
              </p>
              <div className="mt-2">
                <div className="flex justify-between text-[11px] text-cyan-300 mb-1">
                  <span>Market Cap:</span>
                  <span>{card.marketCap}</span>
                </div>
                <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full w-4/5 bg-cyan-400"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeDrawer}
            />

            <motion.div
              className="fixed top-[10%] right-5 w-[300px] h-[80%] bg-[#1c1d23]/95 border border-yellow-400/20 rounded-xl z-50 flex flex-col overflow-hidden"
              initial={{ x: "120%" }}
              animate={{ x: 0 }}
              exit={{ x: "120%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <div className="flex items-center justify-between p-4 border-b border-yellow-400/10">
                <h2 className="text-lg font-bold text-yellow-400">Quick Add</h2>
                <button
                  onClick={closeDrawer}
                  className="text-gray-400 hover:text-yellow-400"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-4 space-y-5 overflow-y-auto">
                <div className="bg-[#24252b]/60 p-4 rounded-xl border border-yellow-400/10 shadow-inner">
                  <p className="text-xs text-gray-400 mb-2">You Buy</p>
                  <div className="flex items-center justify-between bg-[#1c1d23]/90 rounded-lg border border-yellow-400/10 px-4 py-1">
                    <input
                      type="number"
                      placeholder="0"
                      className="bg-transparent w-full  outline-none text-lg text-white placeholder-gray-500"
                    />
                    <div className="flex items-center gap-1 text-yellow-400">
                      <img src={image3} alt="coin" className="w-5 h-5" />
                      DOG
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

                {/* TP  */}
                <div className="bg-[#24252b]/60 p-4 rounded-xl border border-yellow-400/10 shadow-inner">
                  <p className="text-sm text-gray-300 font-semibold mb-2">
                    TP (Take Profit)
                  </p>
                  <input
                    type="text"
                    placeholder="Enter take profit ratio (%)"
                    className="w-full bg-[#1b1c21]/80 text-sm p-2 rounded-md border border-yellow-400/10 outline-none focus:border-yellow-400 transition placeholder-gray-500 text-gray-200"
                  />
                  <p className="text-xs text-gray-500 mt-2">
                    Estimated Profit --
                  </p>
                </div>

                {/* /* SL   */}
                <div className="bg-[#24252b]/60 p-4 rounded-xl border border-yellow-400/10 shadow-inner">
                  <p className="text-sm text-gray-300 font-semibold mb-2">
                    SL (Stop Loss)
                  </p>
                  <input
                    type="text"
                    placeholder="Enter stop loss ratio (%)"
                    className="w-full bg-[#1b1c21]/80 text-sm p-2 rounded-md border border-yellow-400/10 outline-none focus:border-yellow-400 transition placeholder-gray-500 text-gray-200"
                  />
                  <p className="text-xs text-gray-500 mt-2">
                    Estimated Loss --
                  </p>
                </div>
              </div>

              <div className="p-3 border-t border-yellow-400/10 bg-[#1c1d23]/70 backdrop-blur-xl">
                <button
                  onClick={closeDrawer}
                  className="w-full py-2 rounded-lg font-semibold bg-yellow-400 text-black hover:bg-yellow-500 transition-all transform animate-bounce-slow"
                >
                  Save
                </button>
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
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
