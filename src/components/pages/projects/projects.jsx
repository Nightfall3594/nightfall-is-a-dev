import './projects.css'
import ProjectItem from "./project-item.jsx";
import {motion} from "framer-motion";
import {useEffect, useState} from "react";
import useProjects from "../../../hooks/useProjects.js";
import LoadingScreen from "../../common/loading-screen/loading-screen.jsx";

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

    const {projects, isLoading} = useProjects();

    if (isLoading) return <LoadingScreen/>

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
                key={projects.length}
            >
                {
                    projects.map((project) =>
                    {
                        return <ProjectItem
                            name={project.title}
                            desc={project.description}
                            link={project.link}
                            key={project.id}
                        />
                    })
                }
            </motion.div>
        </motion.section>
    )
}