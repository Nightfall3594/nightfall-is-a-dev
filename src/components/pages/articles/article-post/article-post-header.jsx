import {ClockIcon} from "../../../common/icons/index.js";

import './article-post-header.css'

export default function ArticlePostHeader({title, author, date}) {
    return (
        <div className='article__header'>
            <h1 className='header__title'>
                {title}
            </h1>

            <div className="header__subtitle">
                <span className="subtitle__author">by: {author} </span>
                <div className='subtitle-date__container'>
                    <ClockIcon className="subtitle-date__clock-icon" />
                    <span className="subtitle__date">{date}</span>
                </div>
            </div>
        </div>
    )
}