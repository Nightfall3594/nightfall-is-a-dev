import {Link} from "react-router-dom";
import ArticleLinkBackdrop from "./article-link-backdrop.jsx";
import {useState} from "react";
import {ClockIcon} from "../../common/icons/index.js";

import {motion} from "framer-motion";

const LinkVariants = {
    initial: {
        opacity: 0,
        y: 15
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
        }
    },
}

const MotionLink = motion(Link)

export default function ArticleLink({text, to, date="Jan 16, 2025"}) {

    const [isHovered, setHovered] = useState(false);

    return (
            <MotionLink
                to={to}
                className='articles__item'
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}

                variants={LinkVariants}
            >
                <h1>{text}</h1>
                <div className='article-date__container'>
                    <ClockIcon className="article-date__clock-icon" />
                    <span className="article-date__date">{date}</span>
                </div>

                <ArticleLinkBackdrop isVisible={isHovered}/>
            </MotionLink>
    )
}