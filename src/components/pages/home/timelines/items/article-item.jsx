import {Journal} from "../../../../common/icons/index.js";
import {Link} from "react-router-dom"

function ArticleItem({className="", to, articleName}) {
    return (
        <li className={"timeline-2__item timeline-2__article " + className}>

            <Journal className="timeline-2__icon"/>

            <span className="timeline-2-item__content">
                Wrote <Link to={to}>{articleName}</Link>
            </span>
        </li>
    )
}

export default ArticleItem;