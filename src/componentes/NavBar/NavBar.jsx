import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom'


const NavBar = () => {
    const imgLogo = "https://t4.ftcdn.net/jpg/03/57/78/83/360_F_357788345_ZRPnBmklHsMkOYkinPOpl1KaotbzIbEh.jpg"
    return (
        <header>
            <Link to={"/"}>
                <img className="imgLogo" src={imgLogo} alt="" />
            </Link>


            <nav>
                <ul >
                    <li>
                        <NavLink className='btnNavPerros' to={"/categoria/1"}>Perros</NavLink>
                    </li>
                    <li>
                        <NavLink className='btnNavGatos' to={"/categoria/2"}>Gatos</NavLink>
                    </li>
                    

                </ul>
            </nav>
            <CartWidget />

        </header>
    )
}

export default NavBar



