import { useEffect, useState } from "react"
import { projectCardData } from "./CardData"
import { Link } from "react-router-dom"
import styles from "./ProjectCard.module.css" 

const ProjectCard = () => {

      const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % 4);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

  return (
    <div>
      {projectCardData.map((project) => {
        const projectStyle = {
          backgroundImage: project.strobeImage.length > 0 ? `url(${project.strobeImage[currentImageIndex]})` : 'none',
                };

        return (
          <Link to={`/project/${project.id}`} key={project.id}>
            <div 
              className={styles.card} 
              style={projectStyle}
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