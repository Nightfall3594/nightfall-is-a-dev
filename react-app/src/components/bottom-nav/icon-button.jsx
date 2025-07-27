
function IconButton ({className="", Icon, children}) {
    return (
        <button className={className}>
            {Icon && <Icon/>}
            <span>{children}</span>
        </button>
    )
}

export default IconButton