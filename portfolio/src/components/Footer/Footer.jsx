import { Link } from "react-router-dom"

function Footer() {

const currentYear = new Date().getFullYear()

    return(
        <div className="footer">
            <div className="footer-left">
                <Link><img src="" alt="Link to Behance Profile" /></Link>
                <Link><img src="" alt="Link to Github Profile" /></Link>
            </div>
            <div className="footer-right">
                <p>&copy; {currentYear} </p>
            </div>
        </div>
    )
}

export default Footer