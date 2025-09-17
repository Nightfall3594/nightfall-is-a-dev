import {useContext} from "react";
import {motion} from "framer-motion";
import {SidebarContext} from "./SidebarContext.js";

export default function SidebarChapter({children, href, variants=""}){

    const {isMobile, onClick} = useContext(SidebarContext);

    return (
        <motion.a
            className="sidebar-chapter"
            href={href}
            onClick={isMobile ? onClick : () => {}}
            variants={variants}
        >
            <div className="sidebar-chapter__highlight"/>

            <span className="chapter__text">
                {children}
            </span>
        </motion.a>
    )
}