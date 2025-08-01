import {useMatch, useResolvedPath, Link} from "react-router-dom";

function NavItem({to="#", children, Icon, onClick}) {

    let fullPath = useResolvedPath(to)
    let isMatch = useMatch({path: fullPath.pathname})

    return (
        <li className={isMatch ? "navbar__link--active" : ""} onClick={onClick}>
            <Link to={to}>
                {Icon && <Icon/>}
                <span>{children}</span>
            </Link>
        </li>
    )
}

export default NavItem
