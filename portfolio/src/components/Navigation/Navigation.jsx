import styles from "./Navigation.module.css"
import { Link } from "react-router-dom"

const Navigation = () => {
  return (
    <div>
      <h5>
        Thbjr
      </h5>

      <Link>
        <span className="brackets">[</span>
        <span className="Link">Contact</span>
        <span className="brackets">]</span>
      </Link>
    </div>
  )
}

export default Navigation