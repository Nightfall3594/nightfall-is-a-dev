
export default function SidebarChapter({children}){
    return (
        <>
            <a className="sidebar-chapter">
                <div className="sidebar-chapter__highlight"/>
                <span className="chapter__text">
                    {children}
                </span>
            </a>
        </>
    )
}