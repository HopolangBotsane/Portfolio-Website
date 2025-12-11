import { challengesData } from "./ChallengesData"
import { Link } from "react-router-dom"
import styles from "./Challenges.module.css"

const Challenges = () => {
  return (
    <div>
        {challengesData.map((challenges) =>
            <div key={challenges.id} className="challengeCard">
                <Link to={challenges.link}>
                    <img src={challenges.img} alt="Challenge screenshot" />
                    <div className="icons">
                        <img src={challenges.designIcon} alt={challenges.alt} />
                        <img src={challenges.codeIcon} alt={challenges.alt} />
                    </div>
                    <h4>{challenges.title}</h4>
                </Link>
            </div>
        )}
    </div>
  )
}

export default Challenges