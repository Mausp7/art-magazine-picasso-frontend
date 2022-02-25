import {Link, useNavigate} from "react-router-dom";
import { useState } from "react";
import './Header.scss';
import logo from "../assets/picasso.jpg";
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const Header = ({user, setUser, url}) => {
    const [headerOn, setHeaderOn] = useState(true);
    const navigate = useNavigate();
    
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
                <Link to={`${url}/`} ><button className="nav-link">Search</button></Link>
                {localStorage.getItem("sessionId") && <Link to={`${url}/collection`} ><button className="nav-link">My Collection</button></Link>}
            </nav>
            <div>
                {!localStorage.getItem("sessionId") && <Link to={`${url}/login`} ><button className="nav-button">Sign in</button></Link>}
                {!localStorage.getItem("sessionId") && <Link to={`${url}/register`} ><button className="nav-button">Create account</button></Link>}
                {user !== "" && <button className="nav-button">Welcome {user}</button>}
                {localStorage.getItem("sessionId") && <button 
                    className="nav-button"
                    onClick={() =>{
                        localStorage.removeItem("sessionId");
                        setUser("");
                        navigate(`${url}/`);

                    }}
                >Sign out</button>}
            </div>
        </header>

    )   
}

export default Header