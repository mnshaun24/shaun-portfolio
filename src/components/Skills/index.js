import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faFileCode,
  faArrowRightArrowLeft,
  faLayerGroup,
  faCubes,
  faBullseye,
  faMobileRetro,
  faBuildingShield,
  faBed,
  faDatabase,
  faServer,
  faClipboardQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { faJs, faGithub, faGit } from "@fortawesome/free-brands-svg-icons";

function Resume() {
  return (
      <main id="skills-main-page" className="bg-tertiary">
      <div className="text-primary text-center text-3xl pt-8">
          Some of the technologies I have used on recent projects
      </div>
    <section id="skills" className="flex flex-wrap justify-evenly gap-12">
      <div className="skills-container">
        <div className="skill-title">
          <div className="skill-image">
            <FontAwesomeIcon icon={faCode} className="fa-2xl"></FontAwesomeIcon>
          </div>
          <h3>HTML</h3>
        </div>
      </div>
      <div className="skills-container">
        <div className="skill-title">
          <div className="skill-image">
            <FontAwesomeIcon
              icon={faFileCode}
              className="fa-2xl"
            ></FontAwesomeIcon>
          </div>
          <h3>CSS</h3>
        </div>
      </div>
      <div className="skills-container">
        <div className="skill-title">
          <div className="skill-image">
            <FontAwesomeIcon icon={faJs} className="fa-2xl"></FontAwesomeIcon>
          </div>
          <h3>JS</h3>
        </div>
      </div>
      <div className="skills-container">
        <div className="skill-title">
          <div className="skill-image">
            <FontAwesomeIcon
              icon={faLayerGroup}
              className="fa-2xl"
            ></FontAwesomeIcon>
          </div>
          <h3>MERN</h3>
        </div>
      </div>
      <div className="skills-container">
        <div className="skill-title">
          <div className="skill-image">
            <FontAwesomeIcon
              icon={faBed}
              className="fa-2xl"
            ></FontAwesomeIcon>
          </div>
          <h3>RESTful</h3>
        </div>
      </div>
      <div className="skills-container">
        <div className="skill-title">
          <div className="skill-image">
            <FontAwesomeIcon icon={faGithub} className="fa-2xl"></FontAwesomeIcon>
          </div>
          <h3>Git</h3>
        </div>
      </div>
      <div className="skills-container">
        <div className="skill-title">
          <div className="skill-image">
            <FontAwesomeIcon
              icon={faBullseye}
              className="fa-2xl"
            ></FontAwesomeIcon>
          </div>
          <h3>OOP</h3>
        </div>
      </div>
      <div className="skills-container">
        <div className="skill-title">
          <div className="skill-image">
            <FontAwesomeIcon
              icon={faClipboardQuestion}
              className="fa-2xl"
            ></FontAwesomeIcon>
          </div>
          <h3>TDD</h3>
        </div>
      </div>
      <div className="skills-container">
        <div className="skill-title">
          <div className="skill-image">
            <FontAwesomeIcon
              icon={faMobileRetro}
              className="fa-2xl"
            ></FontAwesomeIcon>
          </div>
          <h3>PWAs</h3>
        </div>
      </div>
      <div className="skills-container">
        <div className="skill-title">
          <div className="skill-image">
            <FontAwesomeIcon
              icon={faBuildingShield}
              className="fa-2xl"
            ></FontAwesomeIcon>
          </div>
          <h3>JWT</h3>
        </div>
      </div>
      <div className="skills-container">
        <div className="skill-title">
          <div className="skill-image">
            <FontAwesomeIcon
              icon={faArrowRightArrowLeft}
              className="fa-2xl"
            ></FontAwesomeIcon>
          </div>
          <h3>CRUD</h3>
        </div>
      </div>
      <div className="skills-container">
        <div className="skill-title">
          <div className="skill-image">
            <FontAwesomeIcon
              icon={faDatabase}
              className="fa-2xl"
            ></FontAwesomeIcon>
          </div>
          <h3>MySQL</h3>
        </div>
      </div>
      <div className="skills-container">
        <div className="skill-title">
          <div className="skill-image">
            <FontAwesomeIcon
              icon={faDatabase}
              className="fa-2xl"
            ></FontAwesomeIcon>
          </div>
          <h3>NoSQL</h3>
        </div>
      </div>
      <div className="skills-container">
        <div className="skill-title">
          <div className="skill-image">
            <FontAwesomeIcon
              icon={faDatabase}
              className="fa-2xl"
            ></FontAwesomeIcon>
          </div>
          <h3>GraphQL</h3>
        </div>
      </div>
      <div className="skills-container">
        <div className="skill-title">
          <div className="skill-image">
            <FontAwesomeIcon
              icon={faServer}
              className="fa-2xl"
            ></FontAwesomeIcon>
          </div>
          <h3>JQuery</h3>
        </div>
      </div>

    </section>
    </main>
  );
}

export default Resume;
