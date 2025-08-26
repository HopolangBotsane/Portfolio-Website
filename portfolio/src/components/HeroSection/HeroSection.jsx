import { Link } from "react-router-dom"
import Behance from"../../assets/BehanceText.svg"
import Github from"../../assets/GithubText.svg"
import styles from "./HeroSection.module.css"


function HeroSection() {

    return(
        <div className={styles.heroSection}>

            <div className={styles.heroTop}>
                <div className={styles.heroTopLeft}>
                    <p>Visual Story Telling Through Design & Code</p>
                </div>
                <div className={styles.heroTopRight}>
                    <Link><img src={Github} alt="GitHub Logo" /></Link>
                    <Link><img src={Behance} alt="Behance Logo" /></Link>
                </div>
            </div>

            <div className={styles.heroBottom}>
                <h4 className={styles.heroBottomTitle}>UI/UX</h4>
                <h4 className={styles.heroBottomTitle}>Developer</h4>
            </div>

        </div>
    )
}

export default HeroSection