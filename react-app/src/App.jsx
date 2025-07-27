
import './css/colors.css'
import './css/defaults.css'
import './css/index.css'
import './css/navbar.css'

import Navbar from "./components/Navbar/navbar.jsx";
import Hero from "./components/hero/Hero.jsx";
import Timelines from "./components/timelines/timelines.jsx"
import BottomNav from "./components/bottom-nav/bottom-nav.jsx"

function App() {

  return (
    <>
        <Navbar />
        <Hero />
        <Timelines />
        <BottomNav />
    </>
  )
}

export default App
