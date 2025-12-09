import { Link } from "react-router-dom";
import Email from "./Icons/Email.svg";
import HoverEmail from "./Icons/HoverEmail.svg";

const Header = () => {
  return (
    <div>
      <h5>Logo</h5>
      <div className="pageLinks">
        <Link to="">Projects</Link>
        <Link to="">Challenges</Link>
        <Link to="">Blog</Link>
      </div>
      <Link>
        <img src={Email} alt="Link to email" />
      </Link>
    </div>
  )
}

export default Header