import {useMatch, useResolvedPath, Link} from "react-router-dom";
import {motion} from 'framer-motion'
import React from "react";

import {NavContext} from "./navcontext.js";

function NavItem({to="#", children, Icon}) {

    const fullPath = useResolvedPath(to)
    const isMatch = useMatch({path: fullPath.pathname})
    const {handleClick, isMobile} = React.useContext(NavContext)


    const navItemVariants = {
        hidden: { opacity: 0, y: 20 },
        show:   { opacity: 1, y: 0 },
        exit:   { opacity: 0, y: 20 }
    };


    /* Simple static items when on mobile */
    const mobileNavItem = (
        <motion.li
            onClick={handleClick}
            variants={navItemVariants}
        >
            <Link to={to}>
                {Icon && <Icon/>}
                <span>{children}</span>
            </Link>
        </motion.li>
    )


    /* Dynamic, highlighted items when on desktop */
    const desktopNavItem = (
        <motion.li layout className={isMatch ? "navbar__link--active" : ""} onClick={handleClick}>
            <Link to={to}>
                {isMatch &&
                    <motion.div layoutId={"nav__icon--active"}>
                        {Icon && <Icon/>}
                    </motion.div>
                }

                <span>{children}</span>
            </Link>

            {isMatch &&
                <motion.div className="navbar__underline"
                            layoutId="navbar__underline"
                />
            }

        </motion.li>
    )

    return (
        isMobile ? mobileNavItem : desktopNavItem
    )
}

export default NavItem
