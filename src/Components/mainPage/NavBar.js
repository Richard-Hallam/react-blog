import React from "react";
import '../../styles/NavBar.css';

function Navbar(props) {
    return (
        <div className="navbar">
            <h2 className="nav-header">Richard Hallam</h2>
            <ul className="link-bar">
                <button onClick={() => props.updatePageSetter('about')} class="bg-green-700 py-2 px-4 rounded-2xl">About</button>
                <button onClick={() => props.updatePageSetter('projects')} class="bg-green-700 py-2 px-4 rounded-2xl">Projects</button>
                <button onClick={() => props.updatePageSetter('posts')} class="bg-green-700 py-2 px-4 rounded-2xl">posts</button>
                <a href="https://github.com/Richard-Hallam"><button class="bg-green-700 py-2 px-4 rounded-2xl">Github</button></a>
                <a href="https://www.linkedin.com/in/richard-hallam-78391726b/"><button class="bg-green-700 py-2 px-4 rounded-2xl">Linkedin</button></a>
            </ul>
        </div>
    );
 }

export default Navbar;
