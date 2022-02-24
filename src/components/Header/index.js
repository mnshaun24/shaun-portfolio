import React from "react";
import myFace from "../../assets/personal/small-face.jpg";
import Nav from "../Navigation";

function Header() {
    const navLinks = [
        "About Me",
        "Projects",
        "Contact Me",
        "Resume"
    ]


    return (
        <header>
            <a href="/">              
                <img id="small-face" src={myFace} alt="Shaun's face"></img>
            </a>
            <Nav navLinks={navLinks} />
        </header>
    );
}

export default Header;