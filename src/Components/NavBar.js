import React from "react";
import '../styles/NavBar.css'

class Navbar extends React.Component{
    render() {
        return <div className="navbar">
            <h2 className="nav-header">Richard Hallam</h2>
            <ul className="link-bar">
                <li className="link-bar-link">Projects</li>
                <li className="link-bar-link">Github</li>
                <li className="link-bar-link">Linkedin</li>
                <li className="link-bar-link">Archive</li>
            </ul>
        </div>
        
    }
}

export default Navbar;