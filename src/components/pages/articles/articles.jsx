import './articles.css'
import ArrowUp from "../../common/icons/arrow-up.jsx";
import FloatingButton from "../../common/buttons/floating-button.jsx";
import {useEffect, useState} from "react";
import {motion} from "framer-motion";
import ArticleLink from "./article-item.jsx";
import FloatingButtonContainer from "../../common/buttons/floating-button-container.jsx";


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

            <FloatingButtonContainer>
                <FloatingButton
                    isVisible={isScrolled}
                    Icon={ArrowUp}
                    onClick={() => window.scrollTo(0, 0)}
                />
            </FloatingButtonContainer>

        </section>
    )
}