import './project-item.css'

import {motion} from "framer-motion";

export default function ProjectItem({name, desc, image, link}) {
    return (
        <motion.a
            className="project-item"
            whileHover={{ scale: 1.1 }}
            href={link}
            target="_blank"
        >

            {image
                ? <img src={image} alt="project logo" className="project__image"/>
                : <div className="project__image project__image--empty">{name[0]}</div>
            }
            <div className="project-info">
                <p className="project-info__name">{name}</p>
                <p className="project-info__desc">{desc}</p>
            </div>
        </motion.a>
    )
}