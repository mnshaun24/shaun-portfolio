import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLinkedin,
    faGithub,
    faFacebook,
    faInstagram,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className='flex flex-row bg-secondary h-24'>
      <div className="container">&copy;2022 by Shaun Sticka</div>
      <div>
      <FontAwesomeIcon className='fa-2xl' icon={faLinkedin}></FontAwesomeIcon>
      <FontAwesomeIcon className='fa-2xl' icon={faGithub}></FontAwesomeIcon>
      </div>
    </footer>
  );
};

export default Footer;