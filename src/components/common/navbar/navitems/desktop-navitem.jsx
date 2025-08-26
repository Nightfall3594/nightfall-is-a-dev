import {motion} from "framer-motion";
import {Link, useMatch, useResolvedPath} from "react-router-dom";
import React from "react";

function DesktopNavItem({children, Icon, to}){

    const {pathname} = useResolvedPath(to)

    // For root path "/", we need exact matching.
    // For others, allow partial match (so parent nav items stay active).
    const isMatch = useMatch({
        path: pathname,
        end: pathname === "/"
    })

    return (
        <motion.li layout className={isMatch ? "navbar__link--active" : ""}>
            <Link to={to}>
                {isMatch &&
                    <motion.div layoutId={"nav__icon--active"}>
                        {Icon && <Icon/>}
                    </motion.div>
                }
                <span>{children}</span>
            </Link>

            {isMatch &&
                <motion.div
                    className="navbar__underline"
                    layoutId="navbar__underline"
                />
            }

        </motion.li>
    )
}

export default DesktopNavItem;