import './other.css'
import {motion} from 'framer-motion';

const parentVariants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.1,
        }
    }
}

const childVariants = {
    initial: {
        opacity: 0,
        y: "2rem"
    },
    animate: {
        opacity: 1,
        y: "0rem",
        transition: {
            animation: "easeInOut"
        }
    }
}
export default function Other() {
    return (
        <motion.section
            className="other"
            variants={parentVariants}
            initial="initial"
            animate="animate"
        >

            <motion.div
                className="other-header__container"
                variants={parentVariants}
            >
                <motion.h1 variants={childVariants} className="other-header__title">About</motion.h1>
                <motion.h2 variants={childVariants} className="other-header__subtitle">Information about the little why's and how's</motion.h2>
            </motion.div>

            <motion.h2 variants={childVariants} className="about__title">About the site</motion.h2>

            <motion.div className={"about__content"}>
                <motion.p variants={childVariants}>
                    Hello, this is my page, where I'll mostly be uploading my projects, random thoughts, and stories on the things I build or encounter. I've always wanted to build quite a CMS, and if there'd be a place where I'd like to share them, it's most likely going to be here.
                </motion.p>

                <motion.p variants={childVariants}>
                    The overall design of the website isn't mine, it's actually heavily inspired by the design of an open source project (MixSpace). I really liked the informal, friendly and casual design, and while I actually would like to deploy a similar one, sadly the project is written in chinese so I can't quite use it. On that note, I decided I'll just build it myself, from scratch.
                </motion.p>

                <motion.p variants={childVariants}>
                    It took quite a while, but it's done. So if you want to take a look around a random person's thoughts, projects, and random scribbly storytimes, you've come to the right place.
                </motion.p>

                <motion.p variants={childVariants}>
                    Feel free to look around, read a little, and just chime in. I'll most likely be dropping new things here every once in a while.
                </motion.p>

            </motion.div>
        </motion.section>
    )
}