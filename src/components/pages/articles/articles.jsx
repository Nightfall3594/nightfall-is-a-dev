import './articles.css'
import ArrowUp from "../../common/icons/arrow-up.jsx";
import FloatingButton from "../../common/buttons/floating-button.jsx";
import {useEffect, useState} from "react";
import {motion} from "framer-motion";
import ArticleLink from "./article-item.jsx";
import FloatingButtonContainer from "../../common/buttons/floating-button-container.jsx";

const sectionVariants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.3,
        }
    }
}

const childVariants   = {
    initial: {
        opacity: 0,
        y: "20%"
    },
    animate: {
        opacity: 1,
        y: "0%"
    }
}

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
        <motion.section
            className="articles"
            variants={sectionVariants}
            initial="initial"
            animate="animate"
        >
            <motion.div className="articles__header" variants={articleListVariants}>
                <motion.h1 className="articles__title" variants={childVariants}>
                    Journal
                </motion.h1>

                <motion.h2 className="articles__subtitle" variants={childVariants}>
                    Random tales, gossips, and more. Story time!
                </motion.h2>
            </motion.div>

            <motion.div
                className="articles__list"
                variants={articleListVariants}
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

        </motion.section>
    )
}