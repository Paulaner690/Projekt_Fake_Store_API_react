import './Header.css'
import { NavLink } from "react-router-dom"

const Header = () => {
    return ( 
        <header>
            <div className='headerWrapper'>
            <h1>SuperShop 3000</h1>
            <nav>
                <NavLink className="link" to={"/"}>Home</NavLink>
                <NavLink className="link" to={"/about"}>About</NavLink>
                <NavLink className="link" to={"/services"}>Services</NavLink>
                <NavLink className="link" to={"/contact"}>Contact</NavLink>
            </nav>
            </div>
        </header>
     );
}
 
export default Header;