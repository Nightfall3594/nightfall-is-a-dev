import '../../css/colors.css'
import '../../css/defaults.css'
import '../../css/navbar.css'

import NavLink from './navlink.jsx'
import NavLinks from "./navlinks.jsx";
import * as Icons from '../icons/index.js'
import Overlay from "../overlay.jsx";

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
                    <NavLink className="navbar__link--active" to="/" Icon={Icons.Home}>Home</NavLink>
                    <NavLink to="/" Icon={Icons.Journal}>Journal</NavLink>
                    <NavLink to="/" Icon={Icons.Thought}>Thoughts</NavLink>
                    <NavLink to="/" Icon={Icons.Project}>Projects</NavLink>
                    <NavLink to="/" Icon={Icons.Other}>Other</NavLink>
                </NavLinks>

                <button className="navbar__icon contact-button">
                    <Icons.Mail/>
                </button>
            </header>
        </>
    )
}

export default NavBar
