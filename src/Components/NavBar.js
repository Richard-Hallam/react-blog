import React from "react";

class Navbar extends React.Component{
    render() {
        return <div>
            <h2 className="nav-header">Richard Hallam</h2>
            <ul className="link-bar">
                <li>Projects</li>
                <li>Github</li>
                <li>Linkedin</li>
                <li>Archive</li>
            </ul>
        </div>
        
    }
}

export default Navbar;