import {Journal} from "../icons/index.js";

function ArticleItem({className="", to, articleName}) {
    return (
        <li className={"timeline-2__item timeline-2__article " + className}>

            <Journal className="timeline-2__icon"/>

            <span className="timeline-2-item__content">
                Wrote <a href={to}>{articleName}</a>
            </span>
        </li>
    )
}

export default ArticleItem;