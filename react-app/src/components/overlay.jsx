import {createPortal} from 'react-dom';

function Overlay({ className="", onClick, isVisible=true}) {
    return (
        isVisible &&
        createPortal(
            <div className={"overlay " + className} onClick={onClick}/>,
            document.body
        )
    )
}

export default Overlay