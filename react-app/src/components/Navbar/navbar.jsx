import '../../css/colors.css'
import '../../css/defaults.css'
import '../../css/navbar.css'

import NavLink from './navlink.jsx'
import * as Icons from '../icons/index.js'
function NavBar() {
    return (
        <>
            <header className="navbar">
                <button className="navbar__icon hamburger-menu">
                    <Icons.Hamburger className="navbar__icon"/>
                </button>

                <img src="/images/pfp.jpg" alt="profile picture" className="navbar__profile-image"/>

                <nav className="navbar__links">
                    <ul>
                        <NavLink className="navbar__link--active" to="/" Icon={Icons.Home}>Home</NavLink>
                        <NavLink to="/" Icon={Icons.Journal}>Journal</NavLink>
                        <NavLink to="/" Icon={Icons.Thought}>Thoughts</NavLink>
                        <NavLink to="/" Icon={Icons.Project}>Projects</NavLink>
                        <NavLink to="/" Icon={Icons.Other}>Other</NavLink>
                    </ul>
                </nav>

                <button className="navbar__icon contact-button">
                    <Icons.Mail/>
                </button>
            </header>
        </>
    )
}

export default NavBar
