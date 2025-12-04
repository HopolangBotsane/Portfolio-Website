import { projectCardData } from "./CardData"
import { Link } from "react-router-dom"
// 1. Import the CSS Module
import styles from "./ProjectCard.module.css" 

const ProjectCard = () => {
  return (
    <div>
      {projectCardData.map((project) => {
        const bgImage = project.strobeImage?.length > 0 
          ? `url(${project.strobeImage[0]})` 
          : 'none';

        return (
          <Link to={`/project/${project.id}`} key={project.id}>
            <div 
              className={styles.card} 
              style={{ backgroundImage: bgImage }}
            >
              <h6>{project.projectCategory}</h6>
              <h2>{project.projectName}</h2>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default ProjectCard