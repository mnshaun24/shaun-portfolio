import React from "react";
import myFace from "../../assets/personal/small-face.jpg";
import Nav from "../Navigation";

function Header(props) {
    const { setCurrentPage, pages } = props;

    return (
        <header>
            <a href="/">              
                <img id="small-face" src={myFace} alt="Shaun's face"></img>
            </a>
            <Nav navLinks={pages} setCurrentPage={setCurrentPage} />
        </header>
    );
}

export default Header;