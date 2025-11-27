import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

import image1 from "../assets/silderimge1.png";
import image2 from "../assets/silderimge2.png";

const images = [image1, image2];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      className="relative flex flex-col items-center justify-center py-12 px-4 bg-[#0d0d0f] dark:bg-black text-white overflow-hidden"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative flex flex-col md:flex-row items-center justify-between w-full max-w-6xl rounded-2xl overflow-hidden p-4 md:p-8 shadow-2xl bg-gradient-to-r from-[#111111] via-[#1a1a1a] to-[#0f0f0f]">
        
        <div className="relative w-full md:w-[70%] flex justify-center">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`slide-${currentIndex}`}
              className="w-full max-w-[900px] object-contain drop-shadow-[0_0_20px_rgba(255,215,0,0.4)]"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8 }}
            />
          </AnimatePresence>
        </div>

        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 md:mt-0 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold px-8 py-4 rounded-full flex items-center gap-2 shadow-lg hover:shadow-yellow-400/50 transition"
        >
          <span className="text-lg md:text-xl">START New Agent | Token</span>
        </motion.button>
      </div>

      
      <div className="flex justify-center mt-6 gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === currentIndex
                ? "bg-yellow-400 scale-110"
                : "bg-gray-500/40 hover:bg-gray-300/60"
            }`}
          ></button>
        ))}
      </div>
    </motion.section>
  );
}
