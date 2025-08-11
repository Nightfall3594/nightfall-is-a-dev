import {AnimatePresence, easeOut, motion} from "framer-motion";
import React from "react";


const mobileNavLinkVariants = {
    hidden: {opacity: 0, y: "100%"},
    show: {
        y: "0%",
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
            animation: easeOut
        }
    }
};

function MobileNavLinks({isVisible, children}) {

    return (
        <AnimatePresence>
            {isVisible &&
                <motion.nav
                    className="navbar__links"
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    variants={mobileNavLinkVariants}
                >
                    <motion.ul>
                        {children}
                    </motion.ul>
                </motion.nav>
            }
        </AnimatePresence>
    )
}

export default MobileNavLinks;