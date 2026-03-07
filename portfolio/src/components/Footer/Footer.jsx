import copyright from "./Icons/copyright.svg"
import styles from "./Footer.module.css"

export const Footer = () => {

    const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
        <div className={styles.footerLeft}>
            <img src={copyright} alt="copyright icon"/>
            <p>Thato Hopolang Botsane</p>
        </div>
        <div className={styles.footerRight}>
            {currentYear}
        </div>
    </footer>
  )
}
