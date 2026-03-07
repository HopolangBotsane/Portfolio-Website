import styles from "./Navigation.module.css"
import DefaultMessage from "./Icons/DefaultMessage.svg"
import HoverMessage from "./Icons/HoverMessage.svg"

export const Navigation = () => {
  return (
    <nav className={styles.navBar}>
        <h3 className={styles.logo}>.Me</h3>
        <div className={styles.messageMe}>
            <h4 className={styles.iconText}>Message Me</h4>
            {/* Wrapper for the icons to handle positioning */}
            <div className={styles.iconContainer}>
              <img src={DefaultMessage} className={styles.defaultIcon} alt="Message Icon" />
              <img src={HoverMessage} className={styles.hoverIcon} alt="Message Icon Hover" />
            </div>
        </div>
    </nav>
  )
}