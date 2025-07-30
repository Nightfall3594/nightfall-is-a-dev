import Hero from "./hero/hero.jsx";
import Timelines from "./timelines/timelines.jsx";
import BottomNav from "./bottom-nav/bottom-nav.jsx";

function Home(){
    return(
        <>
            <Hero />
            <Timelines />
            <BottomNav />
        </>
    )
}

export default Home;