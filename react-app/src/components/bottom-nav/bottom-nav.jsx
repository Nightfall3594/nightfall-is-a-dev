
import * as Icons from "../icons/index.js";
import {default as NavLink} from "../Navbar/navlink.jsx"
import IconButton from "./icon-button.jsx";

function BottomNav({className=""}) {
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

                <IconButton className="bottom-nav__button bottom-nav__comment" Icon={Icons.MessageFilled}>
                    Leave a message
                </IconButton>
            </div>

            {/* TODO: Migrate to <CommentBox className=> */}
            {/* This is just a one and done component, so it's not a problem, just for abstraction's sake. */}
            <div className="bottom-nav__leave-message hidden">

                <div className="bottom-nav-title__container">
                    <h1 className="bottom-nav-message__title">Leave a message!</h1>
                    <button className="bottom-nav-message__close">
                        <Icons.CloseIcon className={"bottom-nav-close__icon"}/>
                    </button>
                </div>

                <hr/>

                <p className="bottom-nav-message__pretext">Let me know your thoughts!</p>
                <form action="#" method="post">
                    <textarea name="comment" id="comment" placeholder="What do you think?"></textarea>
                    <button type="submit" className="bottom-nav-message__send">Send</button>
                </form>

            </div>
        </section>
    )
}

export default BottomNav;
