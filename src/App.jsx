import './styles/colors.css'
import './styles/defaults.css'
import './styles/utilities.css'

import Navbar from "./components/common/navbar/navbar.jsx";
import Footer from "./components/common/footer/footer.jsx"
import LoadingScreen from "./components/common/loading-screen/loading-screen.jsx";
import {Routes, Route, useLocation} from "react-router-dom";
import {useEffect, lazy, Suspense} from "react";

// all lazy loaded components here
const Home = lazy(() => import('./components/pages/home/home.jsx'));
const Articles = lazy( () => import("./components/pages/articles/articles.jsx"));
const ArticlePost = lazy( () => import("./components/pages/articles/article-post/article-post.jsx"));
const Thoughts = lazy( () => import("./components/pages/thoughts/thoughts.jsx"));
const Projects = lazy( () => import("./components/pages/projects/projects.jsx"));
const Other = lazy( () => import("./components/pages/other/other.jsx"));

// Scroll to top on route change.
function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function App() {

    // Note: important for forcing scroll to top on route change
    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
    }, [])

  return (
    <>
        {/* Scroll to top on Route change. */}
        <ScrollToTop />

        <Navbar />

        <Suspense fallback={<LoadingScreen/>}>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/journal" element={<Articles/>} />
                <Route path="/journal/:article_slug" element={<ArticlePost/>} />
                <Route path="/projects" element={<Projects/>} />
                <Route path="/thoughts" element={<Thoughts/>} />
                <Route path="/other" element={<Other/>} />
            </Routes>
        </Suspense>

        <Footer />
    </>
  )
}

export default App
