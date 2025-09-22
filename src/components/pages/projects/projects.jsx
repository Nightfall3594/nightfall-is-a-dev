import './projects.css'
import ProjectItem from "./project-item.jsx";
import {motion} from "framer-motion";

const parentVariants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.15,
            animation: "easeInOut"
        }
    },
}

const childVariants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
    }
}

export default function Projects(){
    return (
        <motion.section
            className="projects"
            variants={parentVariants}
            initial="hidden"
            animate="visible"
        >

            <motion.div
                className="projects__header"
                variants={parentVariants}
            >
                <motion.h1
                    className="projects__title"
                    variants={childVariants}
                >
                    Projects
                </motion.h1>

                <motion.h2
                    className="projects__subtitle"
                    variants={childVariants}
                >
                    Software, tinkering, and everything in between
                </motion.h2>
            </motion.div>

            <motion.div
                className="projects__list"
                variants={parentVariants}
            >
                <ProjectItem desc="Hello world app writted in python" name={"Hello world"} image={"/images/pfp.jpg"} link={"https://google.com"}/>
                <ProjectItem desc="Simple" name={"Hello world"} image={"/images/pfp.jpg"} link={"https://google.com"}/>
                <ProjectItem desc="Hello world app writted in python and coded in java maybe idk this is filler" name={"Hello world"}  link={"https://google.com"}/>
                <ProjectItem desc="Hello world app writted in python uvuvwevwevwe" name={"Wello world"}  link={"https://google.com"}/>
                <ProjectItem desc="Hello world app writted in python" name={"Trello world"}  link={"https://google.com"}/>
            </motion.div>
        </motion.section>
    )
}