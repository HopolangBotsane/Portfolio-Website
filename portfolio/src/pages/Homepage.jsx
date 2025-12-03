import Navigation from "../components/Navigation/Navigation"
import Hero from "../components/Hero/Hero"
import Footer from "../components/Footer/Footer"

const Homepage = () => {
  return (
    <div>
      <div className="Header">
        <Navigation/>
        <Hero/>
      </div>

      <div className="body"></div>
      
      <Footer/>
    </div>
  )
}

export default Homepage