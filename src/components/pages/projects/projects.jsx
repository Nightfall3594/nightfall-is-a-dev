import './projects.css'
import ProjectItem from "./project-item.jsx";

export default function Projects(){
    return (
        <section className="projects">

            <div className="projects__header">
                <h1 className="projects__title">Projects</h1>
                <h2 className="projects__subtitle">Software, tinkering, and everything in between</h2>
            </div>

            <div className="projects__list">
                <ProjectItem desc="Hello world app writted in python" name={"Hello world"} image={"/images/pfp.jpg"}/>
                <ProjectItem desc="Simple" name={"Hello world"} image={"/images/pfp.jpg"}/>
                <ProjectItem desc="Hello world app writted in python and coded in java maybe idk this is filler" name={"Hello world"} />
                <ProjectItem desc="Hello world app writted in python uvuvwevwevwe onyentenyevew umugubmwem osas" name={"Wello world"} />
                <ProjectItem desc="Hello world app writted in python" name={"Trello world"} />
            </div>
        </section>
    )
}