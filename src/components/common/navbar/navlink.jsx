
function NavLink({className="", to="#", children, Icon}) {
    return (
        <>
            <li className={className}>
                <a href={to}>
                    {Icon && <Icon/>}
                    <span>{children}</span>
                </a>
            </li>
        </>
    )
}

export default NavLink
