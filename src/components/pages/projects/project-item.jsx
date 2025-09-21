import './project-item.css'
export default function ProjectItem({name, desc, image}) {
    return (
        <div className="project-item">

            {image
                ? <img src={image} alt="project logo" className="project__image"/>
                : <div className="project__image project__image--empty">{name[0]}</div>
            }
            <div className="project-info">
                <p className="project-info__name">{name}</p>
                <p className="project-info__desc">{desc}</p>
            </div>
        </div>
    )
}