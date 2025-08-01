import './navbar.css'

import NavItem from './navitem.jsx'
import NavLinks from "./navlinks.jsx";
import * as Icons from '../icons/index.js'
import Overlay from "../overlays/overlay.jsx";

import {useEffect, useState} from "react";


function NavBar() {

    const [isOverlayVisible, setOverlayVisible] = useState(false);
    const [isNavLinkVisible, setNavLinkVisible] = useState(false);

    let hideNav = () => {
        setOverlayVisible(false);
        setNavLinkVisible(false);
    }

    let showNav = () => {
        setOverlayVisible(true);
        setNavLinkVisible(true);
    }

    /* These functions are for responsive behavior on the JS side of things. */
    let handleResize = () =>
    {
        if (window.innerWidth > 768) {
            hideNav();
        }
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

                <NavLinks isVisible={isNavLinkVisible}>
                    <NavItem to="/" Icon={Icons.Home} onClick={hideNav}>Home</NavItem>
                    <NavItem to="/journal" Icon={Icons.Journal} onClick={hideNav}>Journal</NavItem>
                    <NavItem to="/thoughts" Icon={Icons.Thought} onClick={hideNav}>Thoughts</NavItem>
                    <NavItem to="/projects" Icon={Icons.Project} onClick={hideNav}>Projects</NavItem>
                    <NavItem to="/other" Icon={Icons.Other} onClick={hideNav}>Other</NavItem>
                </NavLinks>

                <button className="navbar__icon contact-button">
                    <Icons.Mail/>
                </button>
            </header>
        </>
    )
}

export default NavBar
