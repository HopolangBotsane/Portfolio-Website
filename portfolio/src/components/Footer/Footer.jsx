import Dribbble from "./Icons/Dribbble.svg"
import Github from "./Icons/Github.svg"

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <div className="Footer">
      <div className="left">
        <p>&copy; {currentYear} Thato Hopolang Botsane</p>
      </div>

      <div className="right">
        <img src={Dribbble} alt="Link to my Dribbble page" />
        <img src={Github} alt="Link to my Github page" />
      </div>
    </div>
  )
}

export default Footer