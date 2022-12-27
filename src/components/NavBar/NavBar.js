import "./Navbar.css"
import { FaBars, FaTimes } from "react-icons/fa"
import { useState } from "react"
import { Link } from "react-scroll";

function NavBar() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const [navbar, setNavbar] = useState(false)

    const closeMenu = () => setClick(false)

    const changeBackground = () => {
        if (window.scrollY >= 5) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground)

    return (
        <>
            <header className={navbar ? 'navbar active' : 'navbar'}>
                <nav className="navbar">
                    <a href="/#" className="navbar-logo">
                        <h1 className="navbar-title">&lt;Welcome/&gt;</h1>
                    </a>
                    <div className="hamburger" onClick={handleClick} >
                        {click ? (<FaTimes className="nav-btn" />) : (<FaBars className="nav-btn" />)}
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to="home" spy={true} smooth={true} offset={-75} duration={500} onClick={closeMenu}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="about" spy={true} smooth={true} offset={-50} duration={500} onClick={closeMenu}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="projects" spy={true} smooth={true} offset={-50} duration={500} onClick={closeMenu}>Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="contact" spy={true} smooth={true} offset={-50} duration={500} onClick={closeMenu}>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default NavBar
