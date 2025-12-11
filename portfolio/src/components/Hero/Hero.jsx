import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>

    <div className={styles.heroLeft}>

      <div className={styles.mySkills}>
        <h3>
          UI/UX Designer
        </h3>
        <h3>
          Front-End Developer
        </h3>
      </div>

      <h1>
        Minimalism Is A Way of Life
      </h1>
      <p>
        As a new student of minimalist, UI/UX designer and front-end developer, I am  dedicated to crafting clean, user-friendly digital experiences. My work emphasizes the beauty of minimalism, focusing on effective design strategies that resonate with users.
      </p>

      <div className={styles.navigation}>
        <Link to="">Projects</Link>
        <Link to="">Challenges</Link>
        <Link to="">Blog</Link>
      </div>

    </div>

    <div className={styles.heroRight}></div>
    
    </div>
  );
};

export default Hero;