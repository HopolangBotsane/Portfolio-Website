import { Link } from "react-router-dom"
import styles from "./Footer.module.css"
import Behance from "../../assets/BehanceImg.svg"
import Github from"../../assets/GithubImg.svg"

function Footer() {

const currentYear = new Date().getFullYear()

    return(
        <div className={styles.footer}>
            <div className="footer-left">
                <Link><img src={Behance} alt="Link to Behance Profile" /></Link>
                <Link><img src={Github} alt="Link to Github Profile" /></Link>
            </div>
            <div className="footer-right">
                <p className={styles.year}>&copy; {currentYear} </p>
            </div>
        </div>
    )
}

export default Footer