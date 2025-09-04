import {motion, AnimatePresence} from "framer-motion";
import './floating-button.css'

const buttonVariants = {
    hidden: {x: 50, opacity: 0},
    shown: {x: 0, opacity: 1},
}

export default function FloatingButton({isVisible= true, onClick, Icon}) {
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    onClick={onClick}
                    className="floating-button"
                    variants={buttonVariants}
                    initial="hidden"
                    animate="shown"
                    exit="hidden"
                    whileTap={{scale: 0.9}}
                >
                    <Icon />
                </motion.button>
            )}
        </AnimatePresence>
    )
}
