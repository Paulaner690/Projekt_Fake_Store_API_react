import './Header.css'
import { NavLink } from "react-router-dom"

const Header = () => {
    return ( 
        <header>
            <h1>SuperMazon</h1>
            <nav>
                <NavLink className="headerNav" to={"/"}>Home</NavLink>
                <NavLink className="headerNav" to={"/about"}>About</NavLink>
                <NavLink className="headerNav" to={"/services"}>Services</NavLink>
                <NavLink className="headerNav" to={"/contact"}>Contact</NavLink>
            </nav>
        </header>
     );
}
 
export default Header;