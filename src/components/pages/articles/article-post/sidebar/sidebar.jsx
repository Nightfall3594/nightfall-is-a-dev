import DesktopSidebar from "./desktop-sidebar.jsx";
import MobileSidebar from "./mobile-sidebar.jsx";

export default function Sidebar({isMobile, chapters}){
    return(
        isMobile
            ? <MobileSidebar chapters={chapters}/>
            : <DesktopSidebar chapters={chapters}/>

    )
}