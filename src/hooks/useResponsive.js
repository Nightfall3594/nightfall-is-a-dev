import {useEffect, useState} from "react";


/**
 * Custom React hook for tracking whether a screen is mobile-sized or not,
 * and also runs a callback function that takes an argument whether the said
 * screen is still mobile or not
 *
 * @function useResponsive
 * @param {function(boolean): void} onResize - An optional callback function that runs whenever
 * the window is resized. It always takes a boolean argument that will indicate whether
 * the screen is still mobile after resize.
 *
 * @returns {boolean} - true if the screen width is 768px or less, otherwise false.
 *
 * @example
 * const isMobile = useResponsive((isStillMobile) => {
 *   if (!isStillMobile) {
 *     setMobileSidebarVisible(false);
 *   }
 * });
 */
export default function useResponsive(onResize){

    const [isMobile, setMobile] = useState(window.innerWidth <= 768);

    const handleResize = () => {
        setMobile(window.innerWidth <= 768);
        onResize(isMobile);
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {window.removeEventListener('resize', handleResize);}
    })

    return isMobile
}