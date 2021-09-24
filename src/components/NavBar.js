import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <ul className='navBar'>
            <li className='navBarItem'><NavLink exact to='/' >Home</NavLink></li>
            <li className='navBarItem'><NavLink to='/about' >About</NavLink></li>
        </ul>
    )
}

export default NavBar
