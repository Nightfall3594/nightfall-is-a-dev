import './timelines.css'

import DateItem from './items/date-item.jsx'
import Timeline from "./timeline.jsx";

import {motion} from "framer-motion";
import ReadMore from "./read-more.jsx";
import {ArticleItem, ProjectItem, ThoughtItem} from "./index.js";

import fromNow from "../../../../utils/fromNow.js";

const timelineContainerVariants = {
    initial: {opacity: 0, y: "20%"},
    animate: {
        opacity: 1,
        y: "0%",
        transition: {
            duration: 0.75,
        }
    },
}


function parseTimelineItem(item) {

    if (item.type === "article_item") return <ArticleItem key={`a-${item.id}`} to={`/journal/${item.article_slug}`} articleName={item.title} />
    else if (item.type === "project_item") return <ProjectItem key={`p-${item.id}`} to={`/projects`} projectName={item.title} />
    else if (item.type === "thought_item") return <ThoughtItem key={`t-${item.id}`}>{item.body}</ThoughtItem>

    else throw new Error("Unhandled item type")
}


function Timelines({recentNotes, recentProjects, timeline}) {

    return(
        <>
            <motion.section
                className="timelines"
            >
                <motion.div
                    className="timeline-1__container"
                    variants={timelineContainerVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{once: true}}
                >

                    {/* First Timeline of Timeline-1 Section - Only Dates*/}
                    <Timeline className="timeline-1" title="Recently Updated Notes">
                        {
                            recentNotes.map((article) =>
                            {
                                return (
                                    <DateItem
                                        to={`/journal/${article.article_slug}`}
                                        time={fromNow(article.date_created)}
                                        key={article.id}
                                    >
                                        {article.title}
                                    </DateItem>
                                )
                            })
                        }
                    </Timeline>

                    <ReadMore to={"/journal"}/>

                    <hr/>

                    {/* Second Timeline of Timeline-1 Section - Only Date Items*/}
                    <Timeline className="timeline-1" title="Recently Updated Projects">

                        {
                            recentProjects.map((project) => {
                                return (
                                    <DateItem
                                        to={`/projects`}
                                        time={fromNow(project.date_created)}
                                        key={project.id}
                                    >
                                        {project.title}
                                    </DateItem>
                                )
                            })
                        }
                    </Timeline>

                    <ReadMore to={"/projects"}/>

                </motion.div>

                <motion.div
                    className="timeline-2__container"
                    variants={timelineContainerVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{once: true}}
                >
                    <Timeline title="Recent Updates" className="timeline-2__timeline">
                        {
                            timeline.map((item) =>{
                                return parseTimelineItem(item)
                            })
                        }
                    </Timeline>
                </motion.div>
            </motion.section>
        </>
    )
}

export default Timelines