import DesktopSidebar from "./desktop-sidebar.jsx";
import MobileSidebar from "./mobile-sidebar.jsx";

import {useContext} from "react";
import {SidebarContext} from "./SidebarContext.js";

export default function Sidebar({chapters}){

    const {isMobile} = useContext(SidebarContext);

    return(
        isMobile
            ? <MobileSidebar chapters={chapters}/>
            : <DesktopSidebar chapters={chapters}/>

    )
}