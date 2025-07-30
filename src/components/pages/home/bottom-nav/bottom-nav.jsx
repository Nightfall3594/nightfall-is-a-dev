import './bottom-nav.css'

import * as Icons from "../../../common/icons/index.js";
import {default as NavLink} from "../../../common/navbar/navlink.jsx"
import IconButton from "./icon-button.jsx";
import CommentBox from "./comment-box.jsx"
import {useState} from "react";


function BottomNav({className=""}) {

    const [isCommentBoxVisible, setCommentBoxVisible] = useState(false);

    return (
        <section className={"bottom-nav " + className}>

            <h1 className="bottom-nav__title">Why don't you take a look?</h1>

            <ul className="bottom-nav__list">
                <NavLink to="#" Icon={Icons.Journal}>
                    What I've been writing
                </NavLink>

                <NavLink to="#" Icon={Icons.Thought}>
                    What I've been up to
                </NavLink>

                <NavLink to="#" Icon={Icons.Project}>
                    What I'm working on
                </NavLink>

                <NavLink to="#" Icon={Icons.Other}>
                    About the site
                </NavLink>
            </ul>

            <div className="bottom-nav__buttons">
                <IconButton className="bottom-nav__button bottom-nav__like" Icon={Icons.HeartFilled}>
                    Like this page
                </IconButton>

                <IconButton
                    className="bottom-nav__button bottom-nav__comment"
                    Icon={Icons.MessageFilled}
                    onClick={() =>{setCommentBoxVisible(true)}}
                >
                    Leave a message
                </IconButton>
            </div>

            <CommentBox isVisible={isCommentBoxVisible} onClose={() => setCommentBoxVisible(false)} />
        </section>
    )
}

export default BottomNav;
