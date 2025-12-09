import styles from "./Hero.module.css";
import CSSIcon from "./Icons/CSS.svg";
import DribbbleIcon from "./Icons/Dribbble.svg";
import FigmaIcon from "./Icons/Figma.svg";
import GithubIcon from "./Icons/Github.svg";
import IllustratorIcon from "./Icons/Illustrator.svg";
import JavascriptIcon from "./Icons/Javascript.svg";
import ReactIcon from "./Icons/React.svg";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1>Crafting User Focused Digital Journeys</h1>
      <p> "As a dedicated UI/UX Design I craft journeys that guide users through what I hope to create, which is a seamless journey through the internet and as a Front-End Developer I pave the roads that users must traverse with a goal of one day becomes a part of the entire user journey."</p>
    </div>
  )
}

export default Hero