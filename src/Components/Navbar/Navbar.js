import React from 'react'
import {Link} from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav>
            <h2>MASHOTA</h2>
            <ul>
                <li><Link className="navStyle" to="/Home">Home</Link></li>
                <li><Link className="navStyle" to="/portfolio">Portfolio</Link></li>
                <li><Link className="navStyle" to="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
