import React, {useState} from "react";
import {motion} from "framer-motion";
import NavLinkGlow from "./navlink-glow.jsx";


function DesktopNavLinks({children}) {

    const [position, setPosition] = useState({x: 0, y: 0})

    const handleMouseMove = (event) => {
        const navbar = event.currentTarget;
        const navsize = navbar.getBoundingClientRect();

        const x = event.clientX - navsize.left;
        const y = event.clientY - navsize.top;

        const xPercent = x / navsize.width * 100;
        const yPercent = y / navsize.height * 100;

        setPosition({x: xPercent + "%", y: yPercent + "%"});
    }

    const [isHovered, setHovered] = useState(false);

    const handleMouseOut = () => {
        setHovered(false);
    };

    const handleMouseEnter = () => {
        setHovered(true);
    };

    return (
        <nav className="navbar__links"
             onMouseMove={handleMouseMove}
             onMouseLeave={handleMouseOut}
             onMouseEnter={handleMouseEnter}
        >
            <motion.ul layout>
                {children}
            </motion.ul>

            <NavLinkGlow position={position} isVisible={isHovered}/>
        </nav>
    )
}

export default DesktopNavLinks;