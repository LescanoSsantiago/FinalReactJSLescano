import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom'


const NavBar = () => {
    const imgLogo = "https://i.pinimg.com/originals/8f/88/a5/8f88a50f12ea6ef4e116dc74b9643e12.jpg"
    return (
        <header>
            <link to={"/"}>
                <img className="imgLogo" src={imgLogo} alt=""/>
            </link>
            <nav>
                <ul>
<li>
    <NavLink to={"/categoria/1"}>Perros</NavLink>
</li>
<li>
    <NavLink to={"/categoria/2"}>Gatos</NavLink>
</li>
<li>
    <NavLink to={"/categoria/3"}>Accesorios</NavLink>
</li>

                </ul>
            </nav>
<CartWidget/>

        </header>
    )
}

export default NavBar
