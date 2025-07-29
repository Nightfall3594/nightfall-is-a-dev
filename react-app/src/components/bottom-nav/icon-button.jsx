
function IconButton ({className="", Icon, children, onClick}) {
    return (
        <button className={className} onClick={onClick || (() => {})}>
            {Icon && <Icon/>}
            <span>{children}</span>
        </button>
    )
}

export default IconButton