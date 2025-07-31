import {useMatch, useResolvedPath, Link} from "react-router-dom";

function NavItem({to="#", children, Icon}) {

    let fullPath = useResolvedPath(to)
    let isMatch = useMatch({path: fullPath.pathname})

    return (
        <li className={isMatch ? "navbar__link--active" : ""}>
            <Link to={to}>
                {Icon && <Icon/>}
                <span>{children}</span>
            </Link>
        </li>
    )
}

export default NavItem
