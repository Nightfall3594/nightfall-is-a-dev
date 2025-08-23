import ArticleLink from "./article-item.jsx";
import {motion} from "framer-motion";

const ArticleListVariants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.1,
        }
    },
}

export default function ArticlesList({children}) {
    return (
        <motion.div
            className="articles__list"
            variants={ArticleListVariants}
            initial="initial"
            animate="animate"
        >
            <ArticleLink to="/home" text="My Reaction to that Information" />
            <ArticleLink to="/home" text="What the skibidi brainrot is this" />
            <ArticleLink to="/home" text="Who is stronger? Bombardino Crocodillo or Tung Tung Tung Sahur?" />
            <ArticleLink to="/home" text="My Reaction to that Information" />
            <ArticleLink to="/home" text="My Reaction to that Information" />
            <ArticleLink to="/home" text="My Reaction to that Information" />
            <ArticleLink to="/home" text="My Reaction to that Information" />
            <ArticleLink to="/home" text="My Reaction to that Information" />
            <ArticleLink to="/home" text="My Reaction to that Information" />
            <ArticleLink to="/home" text="My Reaction to that Information" />
            <ArticleLink to="/home" text="My Reaction to that Information" />
        </motion.div>
    )
}