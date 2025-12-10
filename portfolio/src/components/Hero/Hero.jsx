import React, { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import CSSIcon from "./Icons/CSS.svg"; // Ensure correct paths for all icons
import DribbbleIcon from "./Icons/Dribbble.svg";
import FigmaIcon from "./Icons/Figma.svg";
import GithubIcon from "./Icons/Github.svg";
import IllustratorIcon from "./Icons/Illustrator.svg";
import JavascriptIcon from "./Icons/Javascript.svg";
import ReactIcon from "./Icons/React.svg";

const Hero = () => {
  const [showIcons, setShowIcons] = useState(false);
  const [burst, setBurst] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIcons(true); // Show icons after 3 seconds

      const burstTimer = setTimeout(() => {
        setBurst(true); // Start burst animation after they are visible
      }, 500); // Delay before starting burst animation

      return () => clearTimeout(burstTimer);
    }, 3000); // Time before icons are shown

    return () => clearTimeout(timer);
  }, []);

  const icons = [
    { component: CSSIcon, name: 'CSS Icon' },
    { component: DribbbleIcon, name: 'Dribbble Icon' },
    { component: FigmaIcon, name: 'Figma Icon' },
    { component: GithubIcon, name: 'GitHub Icon' },
    { component: IllustratorIcon, name: 'Illustrator Icon' },
    { component: JavascriptIcon, name: 'JavaScript Icon' },
    { component: ReactIcon, name: 'React Icon' },
  ];

  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Crafting User Focused Digital Journeys</h1>
        <p>
          "As a dedicated UI/UX Designer, I craft journeys that guide users
          through what I hope to create..."
        </p>
      </div>

      {showIcons && (
        <div className={styles.iconsContainer}>
          {icons.map((icon, index) => (
            <img
              key={index}
              src={icon.component}
              alt={icon.name}
              className={`${styles.icon} ${burst ? styles.burst : ''}`}
              style={{
                opacity: burst ? 1 : 0, // Make icons visible after burst
                transition: 'opacity 0.5s', // Smooth opacity transition
                '--x': `${(Math.random() - 0.5) * 200}px`, // Random x-offset for burst
                '--y': `${(Math.random() - 0.5) * 200}px`, // Random y-offset for burst
              }}
            />
          ))}
        </div>
      )}

    </div>
  );
};

export default Hero;
