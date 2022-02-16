import {Link} from "react-router-dom";
import { useState } from "react";
import './Header.scss';
import logo from "../assets/picasso.jpg";
import { TiArrowRight } from 'react-icons/ti';
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
            <button className="header-toggle" onClick={toggleHeader}>{headerOn ? <AiOutlineCloseCircle style={{transform: "scale(2)"}}/> : <TiArrowRight style={{transform: "scale(2.5)"}}/>}</button>
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