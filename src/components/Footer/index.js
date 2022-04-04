import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  // faFacebook,
  // faInstagram,
  // faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-secondary h-24">
      <div className="flex flex-row pt-4">
        <p>&copy;2022 by Shaun Sticka</p>
        <div className="pl-[30%]">
          <a
            href="https://www.linkedin.com/in/shaunsticka/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              className="fa-2xl px-5"
              icon={faLinkedin}
            ></FontAwesomeIcon>
          </a>
          <a
            href="https://github.com/mnshaun24"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              className="fa-2xl"
              icon={faGithub}
            ></FontAwesomeIcon>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
