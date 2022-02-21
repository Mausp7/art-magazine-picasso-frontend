import {Link} from "react-router-dom";
import { useState } from "react";
import './Header.scss';
import logo from "../assets/picasso.jpg";
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const Header = () => {
    const [headerOn, setHeaderOn] = useState(true)
    
    const toggleHeader = () => {
        setHeaderOn(!headerOn); 
        const body = document.querySelector("body");
        body.classList.toggle("full-width");
    }

    return (
        <header className={headerOn ? "header-on" : "header-off"} >
            <button className="header-toggle" onClick={toggleHeader}>{headerOn ? <AiOutlineCloseCircle style={{transform: "scale(2.2)"}}/> : <GiHamburgerMenu style={{transform: "scale(2.5)"}}/>}</button>
            <div className="logo-container">
                <img className="logo-image" src={logo} alt="Picasso portrait" />
                <h1>Picasso</h1>
                <h2>Art Collector App</h2>
            </div>
            <nav> 
                <Link to="/" ><button className="nav-link">Search</button></Link>
                <Link to="/collection" ><button className="nav-link">My collection</button></Link>
            </nav>
            <div>
                <Link to="/login" ><button className="nav-button">Sign in</button></Link>
                <Link to="/register" ><button className="nav-button">Create account</button></Link>
                <button className="nav-button">Sign out</button>
            </div>
        </header>

    )   
}

export default Header