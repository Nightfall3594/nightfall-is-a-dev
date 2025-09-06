import {motion} from "framer-motion";
import {useContext} from "react";

import SidebarChapters from "./sidebar-chapters.jsx";
import Overlay from "../../../../common/overlays/overlay.jsx";
import {SidebarContext} from "./SidebarContext.js";

export default function MobileSidebar({chapters}) {

    const {isVisible, onClick} = useContext(SidebarContext);

    return (
        isVisible &&

        <>
            <Overlay onClick={onClick}/>

            <motion.div className="article-post__sidebar">
                <SidebarChapters chapters={chapters}/>
            </motion.div>
        </>
    )
}