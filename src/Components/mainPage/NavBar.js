import React from "react";
import '../../styles/NavBar.css';

function Navbar(props) {
    return (
        <div className="navbar">
            <h2 className="nav-header">Richard Hallam</h2>
            <ul className="link-bar">
                <button onClick={() => props.updatePageSetter('about')} className="link-bar-link">About</button>
                <button onClick={() => props.updatePageSetter('projects')} className="link-bar-link">Projects</button>
                <button onClick={() => props.updatePageSetter('posts')} className="link-bar-link">posts</button>
                <a href="https://github.com/Richard-Hallam"><button className="link-bar-link">Github</button></a>
                <a href="https://www.linkedin.com/in/richard-hallam-78391726b/"><button className="link-bar-link">Linkedin</button></a>
            </ul>
        </div>
    );
 }

export default Navbar;
