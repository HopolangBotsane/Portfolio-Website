import { Link } from "react-router-dom";
import styles from "./Footer.module.css"
import Dribbble from "./Icons/Dribbble.svg"
import Github from "./Icons/Github.svg"

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.footer}>
      <div className={styles.left}>
        <p>&copy; {currentYear} Thato Hopolang Botsane</p>
      </div>

      <div className={styles.right}>
        <Link to="">
          <img src={Dribbble} alt="Link to my Dribbble page" />
        </Link>
        <Link to="">
          <img src={Github} alt="Link to my Github page" />
        </Link>
      </div>
    </div>
  )
}

export default Footer