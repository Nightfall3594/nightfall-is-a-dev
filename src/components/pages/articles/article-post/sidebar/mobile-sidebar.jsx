import {motion} from "framer-motion";

import SidebarChapters from "./sidebar-chapters.jsx";
import Overlay from "../../../../common/overlays/overlay.jsx";

export default function MobileSidebar({chapters, isVisible}) {
        return (
            <>
                <Overlay/>
                <motion.div className="article-post__sidebar">
                    <SidebarChapters chapters={chapters}/>
                </motion.div>
            </>
        )
}