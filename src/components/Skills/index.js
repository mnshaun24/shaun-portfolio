import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode,
faFileCode,
faArrowRightArrowLeft,
faLayerGroup,
faCubes,
faBullseye,
faMobileRetro, 
faBuildingShield,
faBed,
faDatabase,
faServer} from "@fortawesome/free-solid-svg-icons"
import {
    faJs,
    faGithub,
    faGit
} from '@fortawesome/free-brands-svg-icons';


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
                        <FontAwesomeIcon icon={faFileCode} className='fa-2xl'></FontAwesomeIcon>

                    </div>
                    <h3>CSS</h3>
                </div>
                <p>CSS is a skill I have</p>
            </div>
            <div className="skills-container">
                <div className="skill-title">
                    <div className="skill-image">
                        <FontAwesomeIcon icon={faJs} className='fa-2xl'></FontAwesomeIcon>

                    </div>
                    <h3>JavaScript</h3>
                </div>
                <p>JavaScript is a skill I have</p>
            </div>
            <div className="skills-container">
                <div className="skill-title">
                    <div className="skill-image">
                        <FontAwesomeIcon icon={faLayerGroup} className='fa-2xl'></FontAwesomeIcon>

                    </div>
                    <h3>MERN Stack</h3>
                </div>
                <p>MERN Stack is a skill I have</p>
            </div>
            <div className="skills-container">
                <div className="skill-title">
                    <div className="skill-image">
                        <FontAwesomeIcon icon={faArrowRightArrowLeft} className='fa-2xl'></FontAwesomeIcon>

                    </div>
                    <h3>RESTful APIs</h3>
                </div>
                <p>RESTful APIs is a skill I have</p>
            </div>
            <div className="skills-container">
                <div className="skill-title">
                    <div className="skill-image">
                        <FontAwesomeIcon icon={faBed} className='fa-2xl'></FontAwesomeIcon>

                    </div>
                    <h3>Git</h3>
                </div>
                <p>Git is a skill I have</p>
            </div>
            <div className="skills-container">
                <div className="skill-title">
                    <div className="skill-image">
                        <FontAwesomeIcon icon={faGithub} className='fa-2xl'></FontAwesomeIcon>

                    </div>
                    <h3>OOP</h3>
                </div>
                <p>OOP is a skill I have</p>
            </div>
            <div className="skills-container">
                <div className="skill-title">
                    <div className="skill-image">
                        <FontAwesomeIcon icon={faBullseye} className='fa-2xl'></FontAwesomeIcon>

                    </div>
                    <h3>TDD</h3>
                </div>
                <p>TDD is a skill I have</p>
            </div>
            <div className="skills-container">
                <div className="skill-title">
                    <div className="skill-image">
                        <FontAwesomeIcon icon={faCubes} className='fa-2xl'></FontAwesomeIcon>

                    </div>
                    <h3>PWAs</h3>
                </div>
                <p>PWAs is a skill I have</p>
            </div>
            <div className="skills-container">
                <div className="skill-title">
                    <div className="skill-image">
                        <FontAwesomeIcon icon={faMobileRetro} className='fa-2xl'></FontAwesomeIcon>

                    </div>
                    <h3>JWT</h3>
                </div>
                <p>JWT is a skill I have</p>
            </div>
            <div className="skills-container">
                <div className="skill-title">
                    <div className="skill-image">
                        <FontAwesomeIcon icon={faBuildingShield} className='fa-2xl'></FontAwesomeIcon>

                    </div>
                    <h3>CRUD</h3>
                </div>
                <p>CRUD is a skill I have</p>
            </div>
            <div className="skills-container">
                <div className="skill-title">
                    <div className="skill-image">
                        <FontAwesomeIcon icon={faArrowRightArrowLeft} className='fa-2xl'></FontAwesomeIcon>

                    </div>
                    <h3>MySQL</h3>
                </div>
                <p>MySQL is a skill I have</p>
            </div>
            <div className="skills-container">
                <div className="skill-title">
                    <div className="skill-image">
                        <FontAwesomeIcon icon={faDatabase} className='fa-2xl'></FontAwesomeIcon>

                    </div>
                    <h3>NoSQL</h3>
                </div>
                <p>NoSQL</p>
            </div>
            <div className="skills-container">
                <div className="skill-title">
                    <div className="skill-image">
                        <FontAwesomeIcon icon={faDatabase} className='fa-2xl'></FontAwesomeIcon>

                    </div>
                    <h3>GraphQL</h3>
                </div>
                <p>GraphQL</p>
            </div>
            <div className="skills-container">
                <div className="skill-title">
                    <div className="skill-image">
                        <FontAwesomeIcon icon={faServer} className='fa-2xl'></FontAwesomeIcon>

                    </div>
                    <h3>JQuery</h3>
                </div>
                <p>JQUery</p>
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