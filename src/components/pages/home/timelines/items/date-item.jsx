
function DateItem({children, time, to}){
    return (
        <li>
            <a href={to}>
                <span>{children}</span>
                <span className="timeline__date">{time}</span>
            </a>
        </li>
    )
}

export default DateItem