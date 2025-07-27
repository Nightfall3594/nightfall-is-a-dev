
import * as Icons from "../icons/index.js";

function BottomNav({className=""}) {
    return (
        <section className={"bottom-nav " + className}>

            <h1 className="bottom-nav__title">Why don't you take a look?</h1>

            <ul className="bottom-nav__list">
                <li>
                    <a href="#">
                        <Icons.Journal/>
                        <span>What I've been writing</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <Icons.Thought/>
                        <span>What I've been up to</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <Icons.Project/>
                        <span>What I'm working on</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <Icons.Other/>
                        <span>About the site</span>
                    </a>
                </li>
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
