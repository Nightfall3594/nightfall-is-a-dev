import {AnimatePresence, easeOut, motion} from 'framer-motion'
import React from "react";

import {NavContext} from './navcontext.js';


function NavLinks({isVisible, children, handleClick, isMobile}) {

    const navLinkVariants = {
        hidden: { opacity: 0, y: "100%" },
        show: {
            y: "0%",
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
                animation: easeOut
            }
        },
        exit: {
            y: "100%",
            opacity: 0,
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        }
    };

    const mobileNav = (
        <AnimatePresence>
            {isVisible &&
                <motion.nav className="navbar__links"
                            initial="hidden"
                            animate="show"
                            exit="exit"
                            variants={navLinkVariants}
                >
                    <motion.ul>
                        {children}
                    </motion.ul>
                </motion.nav>
            }
        </AnimatePresence>
    )

    const desktopNav = (
        <nav className="navbar__links">
            <motion.ul layout>
                {children}
            </motion.ul>
        </nav>
    )

    return (
        <NavContext.Provider value={{handleClick, isMobile}}>
            {isMobile ? mobileNav : desktopNav}
        </NavContext.Provider>
    )
}

export default NavLinks;