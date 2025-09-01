import DesktopSidebar from "./desktop-sidebar.jsx";

export default function Sidebar({isMobile, chapters}){
    return(
        isMobile
            ? <DesktopSidebar chapters={chapters}/>
            : <DesktopSidebar chapters={chapters}/>

    )
}