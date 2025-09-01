import SidebarChapters from "./sidebar-chapters.jsx";

export default function DesktopSidebar({chapters}) {
    return (
        <div className="article-post__sidebar">
            <SidebarChapters
                chapters={chapters}
            />

            <hr/>

        </div>
    )
}