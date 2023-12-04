import React, { useState } from "react";
import App from "../../App";
import '../../styles/NavBar.css';

const Navbar = () => {
    const [pageSelector, pageSelectorSetter] = useState('Home');

    const handleClick = (button) => {
        switch(button){
            case 'about':
                pageSelectorSetter('about')
                break;
            case 'projects':
                pageSelectorSetter('projects')
                break;
            case 'archive':
                pageSelectorSetter('archive')
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
                <a href="https://github.com/Richard-Hallam"><button className="link-bar-link">Github</button></a>
                <a href="https://www.linkedin.com/in/richard-hallam-78391726b/"><button className="link-bar-link">Linkedin</button></a>
                <button onClick={() => handleClick('archive')}className="link-bar-link">Archive</button>
            </ul>
            <App pageSelect={pageSelector}/>
        </div>
    );
 }

export default Navbar;
