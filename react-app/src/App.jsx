
import './css/colors.css'
import './css/defaults.css'
import './css/index.css'
import './css/navbar.css'
import './css/footer.css'

import Navbar from "./components/Navbar/navbar.jsx";
import Hero from "./components/hero/Hero.jsx";
import Timelines from "./components/timelines/timelines.jsx"
import BottomNav from "./components/bottom-nav/bottom-nav.jsx"
import Footer from "./components/footer/footer.jsx"

function App() {

  return (
    <>
        <Navbar />
        <Hero />
        <Timelines />
        <BottomNav />
        <Footer />
    </>
  )
}

export default App
