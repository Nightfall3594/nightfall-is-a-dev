import FooterContacts from "./footer-contacts.jsx";
import FooterContact from "./footer-contact.jsx";
import FooterCredits from "./footer-credits.jsx";

import './footer.css'

function Footer() {
    return (
        <section className="footer">
            <FooterContacts>
                <FooterContact to="https://github.com/Nightfall3594" content="Email"/>
                <FooterContact to="mailto:nightfall3594@gmail.com" content="Github"/>
                <FooterContact to="https://discord.com/users/335641970170920960" content="Discord"/>
            </FooterContacts>

            <FooterCredits/>
        </section>
    )
}
export default Footer