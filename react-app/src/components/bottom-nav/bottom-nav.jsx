
import * as Icons from "../icons/index.js";
import {default as NavLink} from "../Navbar/navlink.jsx"

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
                <button className="bottom-nav__button bottom-nav__like">
                    <Icons.HeartFilled/>
                    <span>Like this page</span>
                </button>

                <button className="bottom-nav__button bottom-nav__comment">
                    <Icons.MessageFilled/>
                    <span>Leave a message</span>
                </button>
            </div>


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
