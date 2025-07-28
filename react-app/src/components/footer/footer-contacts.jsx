import ChevronRight from "../icons/chevron-right.jsx";

function FooterContacts({children}) {
    return (
        <div className="footer__container-1">
            <p className="footer__contact-text">Contacts</p>

            <ChevronRight />

            <ul className="footer__contacts">
                {children}
            </ul>
        </div>
    )
}

export default FooterContacts;