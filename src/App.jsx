import './styles/colors.css'
import './styles/defaults.css'
import './styles/utilities.css'

import Navbar from "./components/common/navbar/navbar.jsx";
import Footer from "./components/common/footer/footer.jsx"
import Home from "./components/pages/home/home.jsx";
import Articles from "./components/pages/articles/articles.jsx";
import ArticlePost from "./components/pages/articles/article-post/article-post.jsx";

import {Routes, Route, useLocation} from "react-router-dom";
import {useEffect} from "react";


// Scroll to top on route change.
function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function App() {

  return (
    <>
        {/* Scroll to top on Route change. */}
        <ScrollToTop />

        <Navbar />

        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/journal" element={<Articles/>} />
            <Route path="/journal/:articleID" element={<ArticlePost/>} />
            <Route path="/projects" element={<Home/>} />
            <Route path="/thoughts" element={<Home/>} />
        </Routes>

        <Footer />
    </>
  )
}

export default App
