import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import TokenCards from './Components/TokenCards'
import MarketList from './Components/MarketList'
import FAQ from './Components/Faq'
import CryptoDashboard from './Components/CryptoDashboard'


const App = () => {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white font-sans">
<Navbar/>
<Hero/>
<TokenCards/>
<MarketList/>
<CryptoDashboard/>
<FAQ/>
<Footer/>
    </div>
  )
}

export default App