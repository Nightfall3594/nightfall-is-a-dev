import {useContext} from "react";
import {SidebarContext} from "./SidebarContext.js";

export default function SidebarChapter({children, href}){

    const {isMobile, onClick} = useContext(SidebarContext);

    return (
        <a
            className="sidebar-chapter"
            href={href}
            onClick={isMobile ? onClick : () => {}}
        >
            <div className="sidebar-chapter__highlight"/>
            <span className="chapter__text">
                {children}
            </span>
        </a>
    )
}