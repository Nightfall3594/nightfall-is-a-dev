import {AnimatePresence, motion} from "framer-motion";

export default function ArticleLinkBackdrop({isVisible}){
    return (
        <>
            {isVisible &&
                <AnimatePresence>
                    <motion.div
                        className='articles-item__backdrop'
                        layoutId='articles-item-backdrop'
                        transition={{duration:0.2}}
                    />
                </AnimatePresence>
            }
        </>
    )
}