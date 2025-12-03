import ProjectsData from "./ProjectsData"
import { Link } from "react-router-dom"

const Projects = () => {
  return (
    <div>
        {ProjectsData.map((project) => (
            <Link key={profile} to={`/ProjectsData/${project}`}/>
        ))}
    </div>
  )
}

export default Projects