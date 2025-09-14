import SidebarChapters from "./sidebar-chapters.jsx";
import ArrowUpCircle from "../../../../common/icons/arrow-up-circle.jsx";

import {motion} from "framer-motion";
import {useContext} from "react";
import {SidebarContext} from "./SidebarContext.js";

const scrollToTopVariants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0
    }
}

export default function DesktopSidebar({chapters}) {

    const {hasScrolled} = useContext(SidebarContext);

    return (
        <div className="article-post__sidebar">
            <SidebarChapters
                chapters={chapters}
            />

            <hr/>

            <motion.button
                className="sidebar__scroll-to-top"
                variants={scrollToTopVariants}
                initial="hidden"
                animate={hasScrolled ? "visible" : "hidden"}
                onClick={() => {window.scrollTo({top: 0, behavior: "smooth"})}}
            >
                <ArrowUpCircle className="scroll-to-top__icon" />
                <p className="scroll-to-top__text"> Scroll to top </p>
            </motion.button>
        </div>
    )
}