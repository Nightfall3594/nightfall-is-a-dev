import Hero from "./hero/hero.jsx";
import Timelines from "./timelines/timelines.jsx";
import BottomNav from "./bottom-nav/bottom-nav.jsx";

import useHomePageData from "../../../hooks/useHomePageData.js";
import LoadingScreen from "../../common/loading-screen/loading-screen.jsx";

function Home(){

    const {isLoading, recentNotes, recentProjects, timeline} = useHomePageData();

    if(isLoading) return <LoadingScreen/>

    return(
        <>
            <Hero />
            <Timelines
                recentNotes={recentNotes}
                recentProjects={recentProjects}
                timeline={timeline}
            />
            <BottomNav />
        </>
    )
}

export default Home;