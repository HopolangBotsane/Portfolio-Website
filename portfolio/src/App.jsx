import './App.css'
import { Footer } from './components/Footer/Footer'
import { Hero } from './components/Hero/Hero'
import { Navigation } from './components/Navigation/Navigation'

function App() {

  return (
    <div>
      <Navigation/>
      <div className="body">
        <Hero/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
