import {Heart} from "../../../../common/icons/index.js";

function LikeItem({className="", to, articleName}){
    return (
        <li className={"timeline-2__item timeline-2__like " + className}>
            <Heart className="timeline-2__icon"/>
            <span className="timeline-2-item__content">
                Liked the article <a href={to}>{articleName}</a>
            </span>
        </li>
    )
}

export default LikeItem;