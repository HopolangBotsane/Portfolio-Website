import styles from "./Footer.module.css"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className={styles.Footer}>
        <Link>
            <span className="Brackets">[</span>
            <span className="Link">Email</span>
            <span className="Brackets">]</span>
        </Link>

        <Link>
            <span className="Brackets">[</span>
            <span className="Link">Github</span>
            <span className="Brackets">]</span>
        </Link>

        <Link>
            <span className="Brackets">[</span>
            <span className="Link">Dribbble</span>
            <span className="Brackets">]</span>
        </Link>
    </div>
  )
}

export default Footer