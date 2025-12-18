import { useRef } from 'react'
import { challengesData } from './ChallengesData'
import styles from "./Challenges.module.css"

export const Challenges = () => {
  const carouselRef = useRef(null);

const scroll = (direction) => {
    if (carouselRef.current) {
      // 301px is the width of one card + the gap
      const scrollAmount = direction === 'left' ? -301 : 301;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.mainWrapper}>

      <div className={styles.sectionIntro}>
        <div className={styles.sectionIntroText}>
          <h4>Challenges</h4>
          <p>One percent better today better than I was yesterday</p>
        </div>
        
        <div className={styles.carouselBtns}>
          <button onClick={() => scroll('left')}>&lt;</button>
          <button onClick={() => scroll('right')}>&gt;</button>
        </div>
      </div>

      <div className={styles.carousel} ref={carouselRef}>
        {challengesData.map((item) => (
          <div 
            key={item.id} 
            className={styles.card}
            style={{ backgroundImage: `url(${item.img})` }}
          >
            <div className={styles.overlay}>
              <h4>{item.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Challenges