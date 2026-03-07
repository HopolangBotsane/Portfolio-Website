import styles from "./Hero.module.css"
import DefaultGithub from "./Icons/DefaultGithub.svg"
import HoverGithub from "./Icons/HoverGithub.svg"
import DefaultDribbble from "./Icons/DefaultDribbble.svg"
import HoverDribbble from "./Icons/HoverDribbble.svg"

export const Hero = () => {
  return (
    <section className={styles.heroSection}>

        <div className={styles.heroLeft}>
            <p className={styles.portfolioName}>Thato Hopolang Botsane</p>
            <h1 className={styles.heroIntroText}>
                Designing with purpose, building with code. UI/UX Designer & Front-End Developer.
            </h1>
            <div className={styles.portfolioBtns}>
                <a className={`${styles.linkContainer} ${styles.dribbbleLink}`} href="#">
                    <img src={DefaultDribbble} className={styles.defaultIcon} alt="Dribbble" />
                    <img src={HoverDribbble} className={styles.hoverIcon} alt="Dribbble" />
                    <p>Dribbble</p>
                </a>

                <a className={`${styles.linkContainer} ${styles.githubLink}`} href="#">
                    <img src={DefaultGithub} className={styles.defaultIcon} alt="Github" />
                    <img src={HoverGithub} className={styles.hoverIcon} alt="Github" />
                    <p>Github</p>
                </a>
            </div>
        </div>

        <div className="heroRight"></div>
    </section>
  )
}
