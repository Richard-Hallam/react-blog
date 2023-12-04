import React, { useState } from "react";
import '../../styles/NavBar.css';

const Navbar = () => {
    const [pageSelector, pageSelectorSetter] = useState('Home');

    const handleClick = (button) => {
        switch(button){
            case 'about':

                pageSelectorSetter('About');
                break;

            default:
                break;
        }
    }

    return (
        <div className="navbar">
            <h2 className="nav-header">Richard Hallam</h2>
            <ul className="link-bar">
                <button onClick={() => handleClick('about')} className="link-bar-link">About</button>
                <button onClick={() => handleClick('projects')} className="link-bar-link">Projects</button>
                <button className="link-bar-link">Github</button>
                <button className="link-bar-link">Linkedin</button>
                <button className="link-bar-link">Archive</button>
            </ul>
        </div>
    );
 }

export default Navbar;
