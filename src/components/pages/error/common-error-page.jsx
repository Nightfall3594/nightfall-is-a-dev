import './common-error-page.css'
import SadIcon from "../../common/icons/sad-icon.jsx";
export default function CommonErrorPage({message}) {
    return (
        <div className="common-error-page">
            <div className="common-error-page__container">
                <h1 className="common-error-page__content">{message}</h1>
                <SadIcon className="common-error-page__icon"/>
            </div>
        </div>
    )
}