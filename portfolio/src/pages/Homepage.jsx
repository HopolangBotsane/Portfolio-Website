import styles from "./Pagestyles.module.css"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"

const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <Header/>
      <Hero/>
      <Footer/>
    </div>
  )
}

export default Homepage