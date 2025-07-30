
function Timeline ({title="", className="", children}){

    return (
        <>
            {title && <h1 className="timeline__title">{title}</h1>}

            <ul className={"timeline " + className}>
                {children}
            </ul>
        </>
    )
}

export default Timeline