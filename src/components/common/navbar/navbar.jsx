import './navbar.css'

import NavItem from './navitem.jsx'
import NavLinks from "./navlinks.jsx";
import * as Icons from '../icons/index.js'
import Overlay from "../overlays/overlay.jsx";

import {useState} from "react";


function NavBar() {

    const [isOverlayVisible, setOverlayVisible] = useState(false);
    const [isNavLinkVisible, setNavLinkVisible] = useState(false);

    return (
        <>
            <Overlay
                className="navbar__overlay"
                 onClick={() =>
                 {
                     setOverlayVisible(false);
                     setNavLinkVisible(false);
                 }}
                 isVisible={isOverlayVisible}
            />

            <header className="navbar">
                <button
                    className="navbar__icon hamburger-menu"
                    onClick={() => {
                        setOverlayVisible(true);
                        setNavLinkVisible(true)}
                    }
                >
                    <Icons.Hamburger className="navbar__icon"/>
                </button>

                <img src="/images/pfp.jpg" alt="profile picture" className="navbar__profile-image"/>

                <NavLinks isVisible={isNavLinkVisible}>
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
