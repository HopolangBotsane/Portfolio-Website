import Header from "../components/Header/Header"
// import ProjectTile from "../components/ProjectTile"
import Footer from "../components/Footer/Footer"
import ContactSection from "../components/ContactSection/ContactForm"

function HomePage() {
    return(
        <div className="homepage">
            <Header/>
            <div className="body">
                <ContactSection/>
            </div>
            <Footer/>
        </div>
    )
}

export default HomePage