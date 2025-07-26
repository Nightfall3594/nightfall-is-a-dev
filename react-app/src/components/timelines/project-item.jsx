import {Project} from "../icons/index.js";

function ProjectItem({className, to, projectName}) {
   return (
       <li className={"timeline-2__item timeline-2__project" + className}>

           <Project className="timeline-2__icon"/>

           <span className="timeline-2-item__content">
               Added a new project: <a href={to}>{projectName}</a>
           </span>
       </li>
   )
}

export default ProjectItem;