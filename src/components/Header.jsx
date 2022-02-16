import {Link} from "react-router-dom";
import './Header.scss';
import logo from "../assets/picasso.jpg";

const Header = () => {
    return (
        <header className="header">
            <div className="logo-container">
                <img className="logo-image" src={logo} alt="Picasso portrait" />
                <h1>Picasso</h1>
                <h2>Art Collector App</h2>
            </div>
            <nav> 
                <ul>
                    <li className="nav-link"><Link to="/" >Search</Link></li>
                    <li className="nav-link"><Link to="/collection" >My collection</Link></li>
                </ul>
            </nav>
            <div>
                <button className="nav-button">Sign in</button>
                <button className="nav-button">Create account</button>
            </div>
        </header>

    )   
}

export default Header