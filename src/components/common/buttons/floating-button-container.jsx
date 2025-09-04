import {motion} from 'framer-motion';

/**
 * Floating Button Container
 *
 * Required to use FloatingButtons.
 * This is to serve as a layout manager for two or more floating buttons,
 * And handles dynamic layout changes, as well as fixes button position to
 * bottom-right of screen.
 */
export default function FloatingButtonContainer({children}) {
    return(
        <motion.div
            className="floating-button-container"
            layout
        >
            {children}
        </motion.div>
    )
}