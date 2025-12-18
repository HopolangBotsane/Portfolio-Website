import styles from "./Header.module.css"
import { useState } from "react";
import { Link } from "react-router-dom";
import Email from "./Icons/Email.svg";
import HoverEmail from "./Icons/HoverEmail.svg";

const Header = () => {
  
  const [isHovered, setIsHovered ] = useState(false)

  return (
    <div className={styles.header}>
      <h5>.me</h5>

      <div className={styles.pageLinks}>
        <Link to="">Projects</Link>
        <Link to="">Challenges</Link>
        <Link to="">Blog</Link>
      </div>

      <Link
        to=""
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img className={styles.emailIcon} src={ isHovered ? HoverEmail : Email } alt="Link to send email" />
      </Link>
    </div>
  )
}

export default Header