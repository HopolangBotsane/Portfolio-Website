import styles from "./Pagestyles.module.css"
import Header from "../components/Header/Header"
import Challenges from "../components/Challenges/Challenges"
import Footer from "../components/Footer/Footer"

const ChallengesPage = () => {
  return (
    <div className={styles.challengesPage}>
      <Header/>
      <Challenges/>
      <Footer/>
    </div>
  )
}

export default ChallengesPage