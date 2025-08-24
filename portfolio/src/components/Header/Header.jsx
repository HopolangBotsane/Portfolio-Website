import { Link } from "react-router-dom"
import styles from "./Header.module.css"

export function Header() {
    return(
        <div className={styles.header}>
            <Link>Logo</Link>
            <Link className={styles.contactBtn}>Contact</Link>
        </div>
    )
}

export default Header