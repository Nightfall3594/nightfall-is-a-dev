import './articles.css'
import ScrollUpButton from "./scroll-up-button.jsx";
import {useEffect, useState} from "react";
import {motion} from "framer-motion";
import ArticleLink from "./article-item.jsx";


const articleListVariants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.1,
        }
    },
}

export default function Articles() {

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
            <motion.div
                className="articles__list"
                variants={articleListVariants}
                initial="initial"
                animate="animate"
            >
                <ArticleLink to="/home" text="My Reaction to that Information" />
                <ArticleLink to="/home" text="What is this? All placeholders? That's right" />
                <ArticleLink to="/home" text="Lorem Ipsum Dolor Sit Amet I Forgot the Rest" />
                <ArticleLink to="/home" text="My Reaction to that Information" />
                <ArticleLink to="/home" text="My Reaction to that Information" />
                <ArticleLink to="/home" text="My Reaction to that Information" />
                <ArticleLink to="/home" text="My Reaction to that Information" />
                <ArticleLink to="/home" text="My Reaction to that Information" />
                <ArticleLink to="/home" text="My Reaction to that Information" />
                <ArticleLink to="/home" text="My Reaction to that Information" />
                <ArticleLink to="/home" text="My Reaction to that Information" />
            </motion.div>
            <ScrollUpButton isVisible={isScrolled}/>
        </section>
    )
}