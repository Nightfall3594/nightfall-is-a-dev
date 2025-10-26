import SidebarChapter from "./sidebar-chapter.jsx";

export default function SidebarChapters({chapters, variants}){
    return (

        <div className="sidebar__chapters">
            {
                chapters &&
                chapters.map((chapter) => {
                    chapter = chapter.replace(/#\s/,"");
                    let id = chapter.toLowerCase().trim().replace(/\s/g, "-");
                    return (
                        <SidebarChapter
                            href={`#${id}`}
                            variants={variants}
                        >
                            {chapter}
                        </SidebarChapter>
                    )
                })
            }
        </div>
    )
}