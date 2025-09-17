import {createContext} from "react";

export const SidebarContext = createContext(
    {
        onClick: () => {},
        isVisible: false,
        isMobile: false,
        hasScrolled: false,
    }
)