import { Link } from "react-router-dom";

export default function MainPage() {
    return (
        <div className="page">
            <h2 className="page-title">SWAPI</h2>

            <ul className="main-links">
                <li><Link to='/people'>People</Link></li>
                <li><Link to='/planets'>Planets</Link></li>
                <li><Link to='/starships'>Starships</Link></li>
            </ul>
        </div>
    )
}
