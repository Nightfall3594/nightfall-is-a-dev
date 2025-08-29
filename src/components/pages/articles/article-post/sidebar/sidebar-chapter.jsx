
export default function SidebarChapter({children, href}){
    return (
        <a
            className="sidebar-chapter"
            href={href}
        >
            <div className="sidebar-chapter__highlight"/>
            <span className="chapter__text">
                {children}
            </span>
        </a>
    )
}