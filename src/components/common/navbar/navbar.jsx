import './navbar.css'

import NavItem from './navitems/navitem.jsx'
import NavLinks from "./navlinks/navlinks.jsx";
import * as Icons from '../icons/index.js'
import Overlay from "../overlays/overlay.jsx";

import {useEffect, useState} from "react";


function NavBar() {

    const [isOverlayVisible, setOverlayVisible] = useState(false);
    const [isNavLinkVisible, setNavLinkVisible] = useState(false);

    const [isMobile, setMobile] = useState(window.innerWidth <= 768);

    let hideNav = () => {
        setOverlayVisible(false);
        setNavLinkVisible(false);
    }

    let showNav = () => {
        setOverlayVisible(true);
        setNavLinkVisible(true);
    }

    /* Hide the nav if the screen becomes mobile */
    let handleResize = () =>
    {
        setMobile(window.innerWidth <= 768);
        if(!isMobile) hideNav();
    }

    useEffect( () =>
    {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    })


    return (
        <>
            <Overlay
                className="navbar__overlay"
                 onClick={hideNav}
                 isVisible={isOverlayVisible}
            />

            <header className="navbar">
                <button
                    className="navbar__icon hamburger-menu"
                    onClick={showNav}
                >
                    <Icons.Hamburger className="navbar__icon"/>
                </button>

                <img src="/images/pfp.jpg" alt="profile picture" className="navbar__profile-image"/>

                <NavLinks isVisible={isNavLinkVisible} handleClick={hideNav} isMobile={isMobile}>
                    <NavItem to="/" Icon={Icons.Home}>Home</NavItem>
                    <NavItem to="/journal" Icon={Icons.Journal}>Journal</NavItem>
                    <NavItem to="/thoughts" Icon={Icons.Thought}>Thoughts</NavItem>
                    <NavItem to="/projects" Icon={Icons.Project}>Projects</NavItem>
                    <NavItem to="/other" Icon={Icons.Other}>Other</NavItem>
                </NavLinks>

                <button className="navbar__icon contact-button">
                    <Icons.Mail/>
                </button>
            </header>
        </>
    )
}

export default NavBar
