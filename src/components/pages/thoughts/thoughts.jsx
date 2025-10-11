import './thoughts.css'
import ThoughtItem from "./thought-item.jsx";
import {motion} from "framer-motion";
import LoadingScreen from "../../common/loading-screen/loading-screen.jsx";
import thoughts from "../../common/icons/thoughts.jsx";
import {useThoughts} from "../../../hooks/useThoughts.js";

const parentVariants = {
    initial: {
    },
    animate: {
        transition: {
            staggerChildren: 0.15,
        }
    }
}

const childVariants = {
    initial: {
        opacity: 0,
        y: "20%"
    },
    animate: {
        opacity: 1,
        y: "0%"
    }
}

export default function Thoughts(){

    const {thoughts, isLoading} = useThoughts();

    if(isLoading) return <LoadingScreen/>

    return (
        <motion.section
            className="thoughts"
            variants={parentVariants}
            initial="initial"
            animate="animate"
        >

            <motion.div
                className="thoughts-title__container"
                variants={parentVariants}
            >
                <motion.h1
                    className="thoughts__title"
                    variants={childVariants}
                >
                    Thoughts
                </motion.h1>

                <motion.h2
                    className="thoughts__subtitle"
                    variants={childVariants}
                >
                    Listen to my random ramblings :)
                </motion.h2>
            </motion.div>

            <motion.div
                className="thoughts__list"
                variants={parentVariants}
                key={thoughts.length}
            >
                {
                    thoughts.map(thought => {
                        return <ThoughtItem
                            text={thought.body}
                            date={new Date(thought.date_created).toLocaleDateString('en-CA')}
                            key={thought.id}
                        />})
                }
            </motion.div>
        </motion.section>
    )
}