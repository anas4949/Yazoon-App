import { Wallet, Menu, X, Search, Moon, Globe } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.svg";
import InfoModal from "./InfoModal"; 

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null); 
  const langRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

     
  const modalData = {
    "How It Works": {
      title: "How It Works",
      steps: [
        {
          title: "Create Token",
          desc: [
            "Click 'Create Token' to start instantly.",
            "Enter details like name, symbol & image.",
            "Token deploys on-chain automatically.",
          ],
        },
        {
          title: "Trade Instantly",
          desc: [
            "Connect your crypto wallet securely.",
            "Buy & sell directly via bonding curve.",
            "Monitor token value in real-time.",
          ],
        },
        {
          title: "Earn Rewards",
          desc: [
            "Hold tokens to gain passive rewards.",
            "Participate in YOZOON airdrops.",
            "Earn more by staying active in the ecosystem.",
          ],
        },
      ],
    },
    Marketplace: {
      title: "Marketplace",
      steps: [
        {
          title: "Explore Tokens",
          desc: [
            "Browse trending and new tokens easily.",
            "Filter by volume, price or creator.",
            "View charts and token info instantly.",
          ],
        },
        {
          title: "Buy & Sell",
          desc: [
            "Connect your wallet and start trading.",
            "Instant swaps with minimal gas fees.",
            "All trades are secured on blockchain.",
          ],
        },
        {
          title: "Track Portfolio",
          desc: [
            "Monitor your holdings in real-time.",
            "View profit/loss and price alerts.",
            "Export reports with one click.",
          ],
        },
      ],
    },
    Education: {
      title: "Education",
      steps: [
        {
          title: "Learn the Basics",
          desc: [
            "Understand crypto, tokens & DeFi concepts.",
            "Beginner-friendly articles & guides.",
            "No prior experience required!",
          ],
        },
        {
          title: "Video Tutorials",
          desc: [
            "Step-by-step trading tutorials.",
            "Weekly expert AMA sessions.",
            "Access recorded lessons anytime.",
          ],
        },
        {
          title: "Certification",
          desc: [
            "Complete quizzes to test your knowledge.",
            "Earn YOZOON Verified Certificate.",
            "Showcase your skills on LinkedIn.",
          ],
        },
      ],
    },
  };

  return (
    <div className="bg-[#0b0b0f] text-white relative z-[999]">

               
      <div className="relative overflow-hidden bg-gradient-to-r py-1 blink-sale">
        
        <div className=" text-center text-white font-medium tracking-wide text-sm">
          <span className="font-bold text-red-900">🚨 Market Alert: </span> 
           Major downturn detected.Review your portfolio immediately.{" "}
          
        </div>
      </div>

      
      <nav className="px-6 py-3 border-b border-gray-800 flex justify-between items-center relative">
       
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-14vh object-contain cursor-pointer" />
        </div>

        
        <div className="hidden md:flex items-center space-x-6 text-sm">
          <a href="#" className="text-yellow-400 border-b-2 border-yellow-400 pb-1">Home</a>
          <button onClick={() => setActiveModal("How It Works")} className="hover:text-yellow-400 transition">
            How It Works
          </button>
          <button onClick={() => setActiveModal("Marketplace")} className="hover:text-yellow-400 transition">
            Marketplace
          </button>
          <button onClick={() => setActiveModal("Education")} className="hover:text-yellow-400 transition">
            Education
          </button>
          <a href="#" className="hover:text-yellow-400 transition">Tokens</a>
          <Search className="hover:text-yellow-400 transition cursor-pointer" size={18} />
        </div>

        
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-2 bg-[#222] px-4 py-2 rounded-xl text-gray-200 font-semibold hover:bg-yellow-400 hover:text-black transition cursor-pointer">
            <p>Login | Signup</p>
          </div>
          <button className="flex items-center gap-2 bg-yellow-500 text-black px-4 py-2 rounded-xl font-semibold hover:bg-yellow-400 transition">
            <Wallet size={18} /> Connect Wallet
          </button>
          <Moon className="cursor-pointer hover:text-yellow-400 transition" />

          
          <div ref={langRef} className="relative">
            <Globe
              onClick={() => setLangOpen(!langOpen)}
              className={`cursor-pointer transition ${
                langOpen ? "text-yellow-400" : "hover:text-yellow-400"
              }`}
            />
            {langOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-[#1a1a1a] rounded-lg shadow-lg border border-gray-700 overflow-hidden animate-fade-in z-[9999]">
                {["English", "Urdu", "Spanish", "German", "French"].map((lang) => (
                  <button
                    key={lang}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-yellow-500 hover:text-black transition"
                    onClick={() => setLangOpen(false)}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

                
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-[#111] text-sm py-4 space-y-3 border-t border-gray-700">
          <a href="#" className="text-yellow-400">Home</a>
          <button onClick={() => setActiveModal("How It Works")} className="hover:text-yellow-400">How It Works</button>
          <button onClick={() => setActiveModal("Marketplace")} className="hover:text-yellow-400">Marketplace</button>
          <button onClick={() => setActiveModal("Education")} className="hover:text-yellow-400">Education</button>
          <a href="#" className="hover:text-yellow-400">Tokens</a>
          <div className="flex gap-2 mt-3">
            <button className="bg-[#222] text-gray-200 px-4 py-2 rounded-xl font-semibold hover:bg-yellow-400 hover:text-black transition">
              Login | Signup
            </button>
            <button className="flex items-center gap-2 bg-yellow-500 text-black px-4 py-2 rounded-xl font-semibold hover:bg-yellow-400 transition">
              <Wallet size={18} /> Connect Wallet
            </button>
          </div>
        </div>
      )}

                     
      {activeModal && (
        <InfoModal
          data={modalData[activeModal]}
          onClose={() => setActiveModal(null)}
        />
      )}
    </div>
  );
}
