import FooterContacts from "./footer-contacts.jsx";
import FooterContact from "./footer-contact.jsx";
import FooterCredits from "./footer-credits.jsx";

import './footer.css'

function Footer() {
    return (
        <section className="footer">
            <FooterContacts>
                <FooterContact to="https://google.com" content="Email"/>
                <FooterContact to="https://google.com" content="Github"/>
                <FooterContact to="https://google.com" content="Discord"/>
            </FooterContacts>

            <FooterCredits/>
        </section>
    )
}
export default Footer