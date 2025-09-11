import {motion, AnimatePresence} from "framer-motion";
import {useContext} from "react";

import SidebarChapters from "./sidebar-chapters.jsx";
import Overlay from "../../../../common/overlays/overlay.jsx";
import {SidebarContext} from "./SidebarContext.js";


const sidebarVariants = {
    hidden: {
        opacity: 0,
        y: "100%",
        transition: {
            duration: "0.25"
        }
    },
    visible: {
        opacity: 1,
        y: "0%",
        transition: {
            duration: "0.25",
            staggerChildren: 0.1,
        }
    }
}

const chapterVariants = {
    visible: {
        opacity: 1,
        y: 0,
    },
    hidden: {
        opacity: 0,
        y: "100%",
        transition: {
            duration: "0.05",
            type: "tween",
            ease: "easeInOut"
        }
    }
}

export default function MobileSidebar({chapters}) {

    const {isVisible, onClick} = useContext(SidebarContext);

    return (
        <AnimatePresence>
            {isVisible &&
                <>
                    <Overlay onClick={onClick}/>

                    <motion.div
                        className="article-post__sidebar"
                        variants={sidebarVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        <SidebarChapters chapters={chapters} variants={chapterVariants}/>
                    </motion.div>
                </>
            }
        </AnimatePresence>
    )
}