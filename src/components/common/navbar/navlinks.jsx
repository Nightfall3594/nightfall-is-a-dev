

function NavLinks({isVisible, children}) {
    return (
        <nav className={"navbar__links " + (isVisible ? "navbar__links--visible" : "")}>
            <ul>
                {children}
            </ul>
        </nav>
    )
}

export default NavLinks;