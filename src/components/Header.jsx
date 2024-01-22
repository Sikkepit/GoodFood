import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {

    const [hamburgerMenu, setHamburgerMenu] = useState(false)

    function toggleMenu() {
        hamburgerMenu ? document.getElementById('nav-bar--links').style.display = "none" : 
        document.getElementById('nav-bar--links').style.display = "flex"
        setHamburgerMenu(!hamburgerMenu)
    }

  return (
    <div id="header">
        <Link to="/"><img src="/logo.png" id="good-food--logo"alt="Good Food Logo" /></Link>
        <div id="nav-bar">
        <button className="fa-solid fa-bars" onClick={toggleMenu}></button>
            <ul id="nav-bar--links">
                <Link to="/"><li>Recipes</li></Link>
                <Link to="/about-us" ><li>About Us</li></Link>
                <Link to="https://www.instagram.com/bbcgoodfood/" target="_blank"><li>Instagram</li></Link>
            </ul>
        </div>
    </div>
  )
}