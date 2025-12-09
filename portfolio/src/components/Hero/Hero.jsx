import { HeroData } from "./HeroData"

const Hero = () => {
  return (
    <div>
      {HeroData.map((data) => (
        <div key={data.id} className="hero-content-container">
          <h1>{data.tagline}</h1>
          <p>{data.paragraph}</p>
        </div>
      ))}
    </div>
  )
}

export default Hero