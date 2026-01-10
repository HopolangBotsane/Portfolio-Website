import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import Email from "./Icons/Email.svg";
import HoverEmail from "./Icons/HoverEmail.svg";

const Header = () => {

  return (
    <div className={styles.header}>
      <h5>.me</h5>

      <Link
        to="/contact"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img className={styles.emailIcon}  alt="Link to send email" />
      </Link>
    </div>
  );
};

export default Header;


// src={isHovered ? HoverEmail : Email}