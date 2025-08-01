
function FooterContact({to="#", content=""}){
    return (
        <li>
            <a href={to}>{content}</a>
        </li>
    )
}

export default FooterContact;