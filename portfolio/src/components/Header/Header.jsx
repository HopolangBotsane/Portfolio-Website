import styles from "./Header.module.css";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Email from "./Icons/Email.svg";
import HoverEmail from "./Icons/HoverEmail.svg";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  return (
    <div className={styles.header}>
      <h5>.me</h5>

      {!isHomePage && (
        <div className={styles.pageLinks}>
          <Link to="/projects">Projects</Link>
          <Link to="/challenges">Challenges</Link>
          <Link to="/blog">Blog</Link>
        </div>
      )}

      <Link
        to="/contact"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img className={styles.emailIcon} src={isHovered ? HoverEmail : Email} alt="Link to send email" />
      </Link>
    </div>
  );
};

export default Header;
