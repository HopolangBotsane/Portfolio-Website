import styles from "./Hero.module.css";

const Hero = () => {

  return (
    <div className={styles.hero}>

      <div className={styles.heroContent}>
        <h1>Crafting User Focused Digital Journeys</h1>
        <p>
          As a dedicated UI/UX Design I craft journeys that guide users through what I hope to create, which is a seamless journey through the internet and as a Front-End Developer I pave the roads that users must traverse with a goal of one day becomes a part of the entire user journey.
        </p>
      </div>
      
    </div>
  );
};

export default Hero;
