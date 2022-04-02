import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from "@fortawesome/free-solid-svg-icons"
// import {
//     faLinkedin,
//     faGithub,
//     faFacebook,
//     faInstagram,
//     faTwitter,
// } from '@fortawesome/free-brands-svg-icons';


function Resume() {
    return ( 
        <section id="skills" className="flex">
            <div className="skills-container">
                <div className="skill-title">
                    <div className="skill-image">
                        <FontAwesomeIcon icon={faCode} className='fa-2xl'></FontAwesomeIcon>

                    </div>
                    <h3>HTML</h3>
                </div>
                <p>HTML is a skill I have</p>
            </div>
            <div className="skills-container">
                <div className="skill-title">
                    <div className="skill-image">
                        <FontAwesomeIcon icon={faCode} className='fa-2xl'></FontAwesomeIcon>

                    </div>
                    <h3>CSS</h3>
                </div>
                <p>CSS is a skill I have</p>
            </div>
            <div className="skills-container">
                <div className="skill-title">
                    <div className="skill-image">
                        <FontAwesomeIcon icon={faCode} className='fa-2xl'></FontAwesomeIcon>

                    </div>
                    <h3>JavaScript</h3>
                </div>
                <p>JavaScript is a skill I have</p>
            </div>
            <div className="skills-container">
                <div className="skill-title">
                    <div className="skill-image">
                        <FontAwesomeIcon icon={faCode} className='fa-2xl'></FontAwesomeIcon>

                    </div>
                    <h3>MERN Stack</h3>
                </div>
                <p>MERN Stack is a skill I have</p>
            </div>
            <div className="skills-container">
                <div className="skill-title">
                    <div className="skill-image">
                        <FontAwesomeIcon icon={faCode} className='fa-2xl'></FontAwesomeIcon>

                    </div>
                    <h3>RESTful APIs</h3>
                </div>
                <p>RESTful APIs is a skill I have</p>
            </div>







            {/* <h1>Skills</h1>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>PWAs</p>
            <p>MERN Stack</p>
            <p>Rest</p>
            <p>AJAX</p>
            <p>Git</p>
            <p>OOP</p> */}
        </section>
    )
}

export default Resume;