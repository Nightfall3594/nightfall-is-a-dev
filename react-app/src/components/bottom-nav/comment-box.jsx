import {CloseIcon} from "../icons/index.js";
import Overlay from "../overlay.jsx";

function CommentBox({isVisible, onClose}){

    if(!isVisible){
        return null;
    }

    return (
        <>
            <Overlay/>
            <div className="bottom-nav__leave-message ">
                <div className="bottom-nav-title__container">
                    <h1 className="bottom-nav-message__title">Leave a message!</h1>
                    <button className="bottom-nav-message__close" onClick={onClose}>
                        <CloseIcon className="bottom-nav-close__icon"/>
                    </button>
                </div>

                <hr/>

                <p className="bottom-nav-message__pretext">Let me know your thoughts!</p>
                <form action="#" method="post">
                    <textarea name="comment" id="comment" placeholder="What do you think?"></textarea>
                    <button type="submit" className="bottom-nav-message__send">Send</button>
                </form>

            </div>
        </>
    )
}

export default CommentBox;