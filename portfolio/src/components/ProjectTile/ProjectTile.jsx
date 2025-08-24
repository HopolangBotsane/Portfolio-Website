import { Link } from "react-router-dom"
import styles from "./ProjectTile.modules.css"

function ProjectTile(props) {

    return(
        <Link className="project-tile">
            <div className="project">
                <div className="project-name">
                    <h3>{projectName}</h3>
                </div>
            </div>
        </Link>
    )
}

export default ProjectTile