import Header from "../components/Header"
// import ProjectTile from "../components/ProjectTile"
import ContactForm from "../components/ContactForm"
import Footer from "../components/Footer"



function HomePage() {
    return(
        <div className="home-page">
            <Header/>
            <div className="body">
                <ContactForm/>
            </div>
            <Footer/>
        </div>
    )
}

export default HomePage