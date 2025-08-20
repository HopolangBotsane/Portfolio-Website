import Header from "../components/Header"
import Footer from "../components/Footer"
import ProjectTile from "../components/ProjectTile"

function HomePage() {
    return(
        <div className="home-page">
            <Header/>
            {/* <div className="projects-display">
                <ProjectTile/>
                <ProjectTile/>
                <ProjectTile projectName=""/>
            </div> */}
            <Footer/>
        </div>
    )
}

export default HomePage