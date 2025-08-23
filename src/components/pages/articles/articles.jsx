import ArticlesList from "./ArticlesList.jsx";
import './articles.css'
import ScrollUpButton from "./scroll-up-button.jsx";
import {useEffect, useState} from "react";

export default function Articles({children}) {

    const [isScrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        setScrolled(window.scrollY > 60);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    })

    return (
        <section className="articles">
            <ArticlesList/>
            <ScrollUpButton isVisible={isScrolled}/>
        </section>
    )
}