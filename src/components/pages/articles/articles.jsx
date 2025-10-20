import './articles.css'
import ArrowUp from "../../common/icons/arrow-up.jsx";
import FloatingButton from "../../common/buttons/floating-button.jsx";
import {AnimatePresence, motion} from "framer-motion";
import ArticleLink from "./article-item.jsx";
import FloatingButtonContainer from "../../common/buttons/floating-button-container.jsx";
import {useScroll} from "../../../hooks/useScroll.js";
import useArticleList from "../../../hooks/useArticleList.js";
import LoadingScreen from "../../common/loading-screen/loading-screen.jsx";

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

    let isScrolled = useScroll();
    let {articles, isLoading} = useArticleList();

    if(isLoading) return <LoadingScreen/>

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
                // key={articles.length}

            >
                {
                    articles.map((article) => {
                        return <ArticleLink
                            to={`/journal/` + article.article_slug}
                            text={article.title}
                            key={article.id}
                            date={new Date(article.date_created).toLocaleDateString('en-CA')}
                            variants={childVariants}
                            />
                    })
                }
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