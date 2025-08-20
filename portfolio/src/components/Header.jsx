import { Link } from "react-router-dom"

export function Header() {
    return(
        <div className="header">
            <Link>Logo</Link>
            <Link>Contact</Link>
        </div>
    )
}

export default Header