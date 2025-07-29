import {createPortal} from 'react-dom';

function Overlay({ className="", onClick}) {
    return (
        createPortal(
            <div className={"overlay hidden " + className} onClick={onClick}/>,
            document.body
        )
    )
}

export default Overlay