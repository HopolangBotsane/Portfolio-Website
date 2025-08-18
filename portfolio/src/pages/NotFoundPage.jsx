import { Link } from 'react-router-dom';
import HomePage from './HomePage';

function NotFoundPage() {
    return(
        <div className="home-page">
            <h1>Hoody!</h1>
            <p>"You seem lost partn'r"</p>
            <Link to={'/'}>Back Home</Link>
        </div>
    )
}

export default NotFoundPage