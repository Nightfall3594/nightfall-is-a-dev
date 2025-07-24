import '../../css/colors.css'
import '../../css/defaults.css'
import '../../css/navbar.css'

import Hamburger from '../icons/hamburger.jsx'

function NavBar() {
    return (
        <>
            <header className="navbar">
                <button className="navbar__icon hamburger-menu">
                    <Hamburger className="navbar__icon"/>
                </button>

                <img src="/images/pfp.jpg" alt="profile picture" className="navbar__profile-image"/>

                    <nav className="navbar__links">
                        <ul>
                            <li className="navbar__link--active">
                                <a href="#">
                                    <svg width="1em" height="1em" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z">
                                        </path>
                                    </svg>
                                    <span>Home</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <svg width="1em" height="1em" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M512 0C460.22 3.56 96.44 38.2 71.01 287.61c-3.09 26.66-4.84 53.44-5.99 80.24l178.87-178.69c6.25-6.25 16.4-6.25 22.65 0s6.25 16.38 0 22.63L7.04 471.03c-9.38 9.37-9.38 24.57 0 33.94c9.38 9.37 24.59 9.37 33.98 0l57.13-57.07c42.09-.14 84.15-2.53 125.96-7.36c53.48-5.44 97.02-26.47 132.58-56.54H255.74l146.79-48.88c11.25-14.89 21.37-30.71 30.45-47.12h-81.14l106.54-53.21C500.29 132.86 510.19 26.26 512 0z">
                                        </path>
                                    </svg>
                                    <span>Journal</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M1 11h3v2H1v-2m3.9-7.5L3.5 4.9L5.6 7L7 5.6L4.9 3.5M13 1h-2v3h2V1m7 10v2h3v-2h-3M10 22c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-1h-4v1m9.1-18.5L17 5.6L18.4 7l2.1-2.1l-1.4-1.4M18 12c0 2.2-1.2 4.2-3 5.2V19c0 .6-.4 1-1 1h-4c-.6 0-1-.4-1-1v-1.8c-1.8-1-3-3-3-5.2c0-3.3 2.7-6 6-6s6 2.7 6 6m-2 0c0-2.21-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4Z"></path>
                                    </svg>
                                    <span>Thoughts</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <svg fill="currentColor" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6,22A3,3 0 0,1 3,19C3,18.4 3.18,17.84 3.5,17.37L9,7.81V6A1,1 0 0,1 8,5V4A2,2 0 0,1 10,2H14A2,2 0 0,1 16,4V5A1,1 0 0,1 15,6V7.81L20.5,17.37C20.82,17.84 21,18.4 21,19A3,3 0 0,1 18,22H6M5,19A1,1 0 0,0 6,20H18A1,1 0 0,0 19,19C19,18.79 18.93,18.59 18.82,18.43L16.53,14.47L14,17L8.93,11.93L5.18,18.43C5.07,18.59 5,18.79 5,19M13,10A1,1 0 0,0 12,11A1,1 0 0,0 13,12A1,1 0 0,0 14,11A1,1 0 0,0 13,10Z"/>
                                    </svg>
                                    <span>Projects</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 22 22">
                                        <path fill="currentColor" d="M6 6h11.17l1 1l-1 1H6V6zm12 10H6.83l-1-1l1-1H18v2z" opacity=".3" />
                                        <path fill="currentColor" d="M13 10h5l3-3l-3-3h-5V2h-2v2H4v6h7v2H6l-3 3l3 3h5v4h2v-4h7v-6h-7v-2zM6 6h11.17l1 1l-1 1H6V6zm12 10H6.83l-1-1l1-1H18v2z" />
                                    </svg>
                                    <span>Other</span>
                                </a>
                            </li>

                        </ul>
                    </nav>

                    <button className="navbar__icon contact-button">
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' >
                            <title>mail_line</title>
                            <g id="mail_line" fill='none'>
                                <path d='M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z'/>
                                <path fill='currentColor' d='M20 4a2 2 0 0 1 1.995 1.85L22 6v12a2 2 0 0 1-1.85 1.995L20 20H4a2 2 0 0 1-1.995-1.85L2 18V6a2 2 0 0 1 1.85-1.995L4 4zm0 3.414-6.94 6.94a1.5 1.5 0 0 1-2.12 0L4 7.414V18h16zM18.586 6H5.414L12 12.586z'/>
                            </g>
                        </svg>
                    </button>
            </header>
        </>
    )
}

export default NavBar
