import React from "react";
import './navbar.css';
import {Link} from 'react-scroll'

const Navbar = () => {
    return(
        <div className="navbar" >
                  <div className="nav-list">
                    <ul>
                        <Link spy={true} to="home" smooth={true} activeClass="activclass">
                        <li className="nav-item">Home</li>
                        </Link>
                        <Link spy={true} to="About" smooth={true}>
                        <li className="nav-item">About</li>
                        </Link>
                        <Link spy={true} to="skill" smooth={true}>
                        <li className="nav-item">Skill</li>
                        </Link>
                        <Link spy={true} to="project" smooth={true}>
                        <li className="nav-item">Projects</li>
                        </Link>
                        
                        
                        
                    
                        
                    </ul>
                  </div>
                  <Link spy={true} to="Contact" smooth={true}>
                  <button className="button nav-button">
                          Contact
                  </button>
                  </Link>
               </div>

    )
}


export default Navbar;