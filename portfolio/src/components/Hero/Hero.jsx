import styles from "./Hero.module.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className={styles.hero}>

    <div className={styles.heroLeft}>

      <div className={styles.mySkills}>
        <p>
          UI/UX Designer
        </p>
        <p>
          Front-End Developer
        </p>
      </div>

      <div className={styles.heroText}>
        <h1>
          Minimalism Is A Way of Life
        </h1>
        <p>
          As a new student of minimalist, UI/UX designer and front-end developer, I am  dedicated to crafting clean, user-friendly digital experiences. My work emphasizes the beauty of minimalism, focusing on effective design strategies that resonate with users.
        </p>
      </div>

      <div className={styles.navigation}>
        <Link className={styles.heroNavLinks} to="">Projects</Link>
        <Link className={styles.heroNavLinks} to="">Challenges</Link>
        <Link className={styles.heroNavLinks} to="">Blog</Link>
      </div>

    </div>

    <div className={styles.heroRight}></div>
    
    </div>
  );
};

export default Hero;