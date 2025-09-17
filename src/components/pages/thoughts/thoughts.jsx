import './thoughts.css'
import ThoughtItem from "./thought-item.jsx";
import {motion} from "framer-motion";

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
            >
                <ThoughtItem text={"Hello, world!"} date="July 3, 2025"/>
                <ThoughtItem text={"Hello, world!"} date="July 3, 2025"/>
                <ThoughtItem text={"Hello, world! Sometimes I need to test even longer text and that's okay"} date="July 3, 2025"/>
                <ThoughtItem text={"Hello, world! I would like to test an even even even even even longer text to try and see how formatting looks"} date="July 3, 2025"/>
                <ThoughtItem text={"Hello, world!\n\n\n\nSometimes I need to test even longer text and that's okay"} date="July 3, 2025"/>
            </motion.div>
        </motion.section>
    )
}