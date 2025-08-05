import {motion} from 'framer-motion'
import React from "react";

import {NavContext} from './navcontext.js';


function NavLinks({isVisible, children, handleClick, isMobile}) {

    return (
        <NavContext.Provider value={{handleClick, isMobile}}>
            <nav className={"navbar__links " + (isVisible ? "navbar__links--visible" : "")}>
                <motion.ul layout>
                    {children}
                </motion.ul>
            </nav>
        </NavContext.Provider>
    )
}

export default NavLinks;