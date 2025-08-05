import {useMatch, useResolvedPath, Link} from "react-router-dom";
import {motion} from 'framer-motion'
import React from "react";

import {NavContext} from "./navcontext.js";

function NavItem({to="#", children, Icon}) {

    const fullPath = useResolvedPath(to)
    const isMatch = useMatch({path: fullPath.pathname})

    const {handleClick, isMobile} = React.useContext(NavContext)

    return (
        <motion.li layout className={isMatch ? "navbar__link--active" : ""} onClick={handleClick}>
            <Link to={to}>
                {(isMatch || isMobile) &&
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
}

export default NavItem
