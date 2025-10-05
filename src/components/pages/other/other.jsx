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
                    Welcome to my webpage! This is my little corner of the internet, where I share projects, thoughts, ideas, and many other random stuff.
                </motion.p>

                <motion.p variants={childVariants}>
                    This project originally began as a recreation of an existing design of a similar blog site, so this design isn't fully mine,
                    however, the process provided me with a great refresher on html and css, and over time,
                </motion.p>

                <motion.p variants={childVariants}>
                    In the process, I learned a lot about designing and developing web frontends. It taught me naming conventions, file structures,
                    and plenty of the quirks this weird little thing called Javascript. I also learned about responsive design, and many other web-development concepts, such as object destructuring, component-driven-design, constants, and many, many more.
                    So while the website is just a recreation of an existing design, in the process of reverse-engineering, debugging,
                    and analyzing components, I learned a lot, I grew from it, and most importantly, I gained valuable knowledge of which will be useful when newer, more complex projects come later down the line.
                </motion.p>

                <motion.p variants={childVariants}>
                    So, what's going to happen to the website?
                </motion.p>

                <motion.p variants={childVariants}>
                    Personally, I think I'll hold on to it for a while longer. I'll maintain it, share my stories, write random things, and while it isn't anything quite substantial yet,
                    I'd like for this website to be my tiny little space in the internet, for a while. Where I will share my thoughts, my day-to-day stories, projects and journey towards growing and improving constantly as a software developer.
                </motion.p>

                <motion.p variants={childVariants}>
                    So, if you will chime in, read a little, and browse,
                </motion.p>

                <motion.p variants={childVariants}>
                    Welcome to my personal corner of the internet!
                </motion.p>

                <motion.p variants={childVariants}>
                    Enjoy your stay :)
                </motion.p>


            </motion.div>
        </motion.section>
    )
}