
import './styles/colors.css'
import './styles/defaults.css'

import Navbar from "./components/common/navbar/navbar.jsx";
import Footer from "./components/common/footer/footer.jsx"
import Home from "./components/pages/home/home.jsx";

function App() {

  return (
    <>
        <Navbar />
        <Home />
        <Footer />
    </>
  )
}

export default App
