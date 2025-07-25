
function HeroLink({className, Icon, to}) {
    return (
        <a href={to}>
            {Icon && <Icon className={className} />}
        </a>
    )
}

export default HeroLink