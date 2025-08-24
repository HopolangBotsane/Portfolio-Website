import Header from "../components/Header/Header"
// import ProjectTile from "../components/ProjectTile"
import Footer from "../components/Footer/Footer"
import ContactSection from "../components/ContactSection/ContactForm"
import styles from "./Pages.module.css"

function HomePage() {
    return(
        <div className={styles.homepage}>
            <Header/>
            <div className="body">
                <ContactSection/>
            </div>
            <Footer/>
        </div>
    )
}

export default HomePage