import { Link } from "react-router-dom"
import styles from "./Footer.module.css"


const Footer = () => {
  return (
    <div>
      <Link>
        <span className="brackets">[</span>
        <span className="Link">Email</span>
        <span className="brackets">]</span>
      </Link>

      <Link>
        <span className="brackets">[</span>
        <span className="Link">Github</span>
        <span className="brackets">]</span>
      </Link>

      <Link>
        <span className="brackets">[</span>
        <span className="Link">Dribbble</span>
        <span className="brackets">]</span>
      </Link>
    </div>
  )
}

export default Footer