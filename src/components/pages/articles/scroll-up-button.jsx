import {motion, AnimatePresence} from "framer-motion";
import ArrowUp from "../../common/icons/arrow-up.jsx";

const buttonVariants = {
    hidden: {x: 50, opacity: 0},
    shown: {x: 0, opacity: 1},
}

export default function ScrollUpButton({isVisible}) {
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'})}}
                    className="articles__scroll-up"
                    variants={buttonVariants}
                    initial="hidden"
                    animate="shown"
                    exit="hidden"
                    whileTap={{scale: 0.9}}
                >
                    <ArrowUp />
                </motion.button>
                )
            }
        </AnimatePresence>
    )
}