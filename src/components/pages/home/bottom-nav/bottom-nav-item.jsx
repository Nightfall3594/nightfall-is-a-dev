import {Link} from 'react-router-dom';

function BottomNavItem({className="", to="#", children, Icon}) {
    return (
        <li className={className}>
            <Link to={to}>
                {Icon && <Icon/>}
                <span>{children}</span>
            </Link>
        </li>
    )
}

export default BottomNavItem;