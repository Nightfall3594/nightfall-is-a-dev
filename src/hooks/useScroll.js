import {useEffect, useState} from "react"

export function useScroll(){

    const [isScrolled, setScrolled] = useState(false);
    const handleScroll = () => setScrolled(window.scrollY > 60)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    },[])

    return isScrolled
}